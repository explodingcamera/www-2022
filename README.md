# [henrygressmann.de](https://henrygressmann.de)

This repository contains my personal website. Feel free to use anything contained in here as a reference of starting point for your own projects.

# Requirements

- node.js `16.x`
- PNPM >= `6.x`

# Development

1. Install Dependencies `$ pnpm install`
2. Start dev server `$ pnpm run dev`

# Deployment

henrygressmann.de is deployed through Github Pages which is served behind a cloudflare reverse proxy.

1. Ensure you have a variable named `GH_TOKEN` with a github access token in your environment
2. Run `pnpm run deploy` to push changes to the `gh-pages` branch
