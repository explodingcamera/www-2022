# [henrygressmann.de](https://henrygressmann.de)

This repository contains my website/portfolio. Feel free to use anything contained here as a starting point for your projects as long as you honor the MIT license.

# Requirements

- node.js `16.x`
- PNPM >= `6.x`

# Development

1. Install Dependencies `$ pnpm install`
2. Start dev server `$ pnpm run dev`

# Deployment

henrygressmann.de is deployed through Github Pages which is served behind a cloudflare reverse proxy.

1. Ensure you have a variable named `GH_TOKEN` with a GitHub access token in your environment
2. Run `pnpm run deploy` to push changes to the `gh-pages` branch
