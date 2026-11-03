import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

type Rules = Map<string, Map<string, string>>;

// The subset of Cloudflare's _headers format the file uses: an unindented URL pattern, then
// indented `Name: value` lines.
function parseHeaders(text: string): Rules {
	const rules: Rules = new Map();
	let current: Map<string, string> | undefined;
	for (const line of text.split('\n')) {
		if (line.trim() === '' || line.trim().startsWith('#')) continue;
		if (!/^\s/.test(line)) {
			current = new Map();
			rules.set(line.trim(), current);
			continue;
		}
		const at = line.indexOf(':');
		current!.set(line.slice(0, at).trim().toLowerCase(), line.slice(at + 1).trim());
	}
	return rules;
}

const rules = parseHeaders(readFileSync('static/_headers', 'utf8'));

describe('_headers', () => {
	const everywhere = rules.get('/*')!;

	it('sets the security headers on every response', () => {
		expect(everywhere.get('content-security-policy')).toBe("frame-ancestors 'none'");
		expect(everywhere.get('x-content-type-options')).toBe('nosniff');
		expect(everywhere.get('strict-transport-security')).toContain('max-age=31536000');
	});

	it('keeps beta out of search results', () => {
		expect(rules.get('https://beta.roguekeyboards.com/*')?.get('x-robots-tag')).toBe('noindex');
	});

	it('lets prod be indexed', () => {
		const noindex = [...rules].filter(([, headers]) => headers.has('x-robots-tag'));

		expect(noindex.map(([pattern]) => pattern)).toEqual(['https://beta.roguekeyboards.com/*']);
	});
});
