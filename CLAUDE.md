# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See [`README.md`](README.md) for commands and workflow. The tooling mirrors
[mykeebs.com](https://github.com/roguekeyboards/mykeebs.com); keep the two in step when changing CI,
lint or test setup.

- `main` is protected by a ruleset: no direct pushes, signed commits, squash-only PRs with
  Conventional Commits titles. Branches are `<type>/<topic>`.
- A fully static site: `prerender = true` in the root `+layout.ts`, `adapter-static` with
  `fallback: '404.html'`.
- The CSP is in `vite.config.ts` (SvelteKit's `csp` option, `mode: 'hash'`). The site loads nothing
  from other origins; adding an external host means adding it to the CSP.
- **Deploys** are graduated, and both deploy the same build to Cloudflare Workers (`wrangler.jsonc`).
  Dev: every merge to `main` deploys `roguekeyboards-com-dev` to https://beta.roguekeyboards.com
  through Cloudflare Workers Builds, configured in the Cloudflare dashboard. Prod: merging
  release-please's release PR publishes a GitHub Release, which runs `deploy-prod.yml` to upload and
  deploy that tag to `roguekeyboards-com-prod` on https://roguekeyboards.com, using the
  `CLOUDFLARE_API_TOKEN` secret. A route change in `env.production` is deployed by hand with
  `npx wrangler deploy --env production`.
- **Brand:** colours, fonts (Sora), logos and favicons come from `@roguekeyboards/brand`, and mykeebs'
  artwork from `@roguekeyboards/mykeebs-brand`, both on GitHub Packages. Change them in the
  [brand](https://github.com/roguekeyboards/brand) and
  [mykeebs-brand](https://github.com/roguekeyboards/mykeebs-brand) repos, not here. Run
  `eval "$(mise env)"` before `npm install` if `GITHUB_PACKAGES_TOKEN` isn't in your shell.
- `static/_headers` sets the security headers, and `X-Robots-Tag: noindex` on beta only.
