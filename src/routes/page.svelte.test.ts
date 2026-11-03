import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('home page', () => {
	it('names the company', async () => {
		await render(Page);
		await expect
			.element(page.getByRole('heading', { level: 1 }))
			.toHaveTextContent('Rogue Keyboards LLC');
	});

	it('links to mykeebs', async () => {
		await render(Page);
		await expect
			.element(page.getByRole('link', { name: 'mykeebs' }))
			.toHaveAttribute('href', 'https://mykeebs.com');
	});
});
