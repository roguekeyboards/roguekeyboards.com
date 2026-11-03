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
- Deployment isn't set up yet.
