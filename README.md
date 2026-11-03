# roguekeyboards.com

The website for Rogue Keyboards LLC, which runs [mykeebs](https://mykeebs.com). A static
[SvelteKit](https://svelte.dev/docs/kit) site, prerendered with `adapter-static` and styled with
Tailwind v4.

## Development

[mise](https://mise.jdx.dev) installs the Node version in `mise.toml`. The brand packages come from
GitHub Packages, so put a PAT with `read:packages` in `mise.local.toml` as `GITHUB_PACKAGES_TOKEN`.

```sh
npm install
npm run dev       # start dev server
npm run build     # prerender the whole site to /build
npm run check     # svelte-kit sync + svelte-check (typecheck)
npm run lint      # prettier --check . && eslint .
npm run format    # prettier --write .
npm run test      # vitest run (client and server projects)
```

The client tests run in Chromium through Playwright; run `npx playwright install chromium` once.

## Workflow

`main` is protected: every change goes through a PR with a Conventional Commits title, merged by
squash, with signed commits. CI runs `Lint`, `Typecheck`, `Test`, `Build` and `PR Title` on every PR,
plus CodeQL. release-please keeps a release PR open from the commits on `main`, and Renovate keeps
dependencies current.

## Deploys

Merges to `main` deploy to https://beta.roguekeyboards.com through Cloudflare Workers Builds.
Releases deploy to https://roguekeyboards.com through `.github/workflows/deploy-prod.yml`.
`mise run deploy-dev` deploys the current branch to beta (needs `wrangler login`).

## License

The code is [MIT](LICENSE-MIT). The Rogue Keyboards and mykeebs brands, the written content, fonts and
third-party packages aren't; see [`LICENSE`](LICENSE).
