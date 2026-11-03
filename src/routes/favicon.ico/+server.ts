import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

// Browsers, Safari especially, also ask for /favicon.ico without reading the page's <link> tags,
// so the brand's .ico is prerendered there too.
export const prerender = true;

export function GET() {
	const path = createRequire(import.meta.url).resolve('@roguekeyboards/brand/favicon.ico');
	return new Response(readFileSync(path), { headers: { 'content-type': 'image/x-icon' } });
}
