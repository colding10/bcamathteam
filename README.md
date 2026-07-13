# BCA Math Team Website

The official website of the Bergen County Academies Math Team, built as a static Astro site and deployed through Cloudflare Pages.

The public production site is [bcamathteam.org](https://bcamathteam.org). Content lives in `src/pages`, shared site structure lives in `src/components` and `src/layouts`, and public assets such as images and PDFs live in `public`.

## Local development

Node.js 22 or newer is required. Install the locked dependencies with `npm ci`, then start the local development server with `npm run dev`. Astro will print the local address, normally `http://localhost:4321`.

Before opening a pull request, run `npm run check` for Astro and TypeScript diagnostics and `npm run build` to create a production build in `dist`. Do not edit `dist` directly because it is generated.

## Documentation

[CONTENT.md](CONTENT.md) explains where to make routine website updates. [DEPLOYMENT.md](DEPLOYMENT.md) documents the GitHub and Cloudflare workflow.
