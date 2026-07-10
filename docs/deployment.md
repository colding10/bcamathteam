# Deployment

This repository builds a static Astro site into `dist/`. GitHub Actions validates pull requests and the production branch. Cloudflare Pages handles preview and production deployments through its GitHub integration; a separate deployment action and Cloudflare API token are intentionally unnecessary.

## GitHub workflow

Changes should be submitted to `master` through a pull request. The `CI / build` check installs the locked dependencies, runs Astro diagnostics, and creates a production build. The workflow has read-only repository permissions and cancels superseded runs for the same branch.

The `master` branch should require the `CI / build` check before merging. Cloudflare will add its own deployment check after the Pages project is connected.

## Cloudflare Pages project

After the Astro refactor pull request is merged, open **Workers & Pages**, select **Create application**, select **Pages**, and choose **Import an existing Git repository**. Authorize the Cloudflare GitHub app for `colding10/bcamathteam` if prompted.

Use `bcamathteam` as the project name, `master` as the production branch, `npm run build` as the build command, and `dist` as the build output directory. The framework preset can be `Astro`. Set `NODE_VERSION` to `22` only if Cloudflare does not honor the repository's `.nvmrc`; no other environment variables are required.

Leave automatic production deployments enabled. Leave preview deployments enabled for non-production branches so each pull request receives an isolated `pages.dev` URL and a GitHub deployment check. Do not attach `bcamathteam.org` yet.

## Domain cutover

Verify the production `bcamathteam.pages.dev` deployment first. Check the homepage, navigation, downloadable files, archive links, mobile layout, and legacy `.html` URLs. The extensionless routes are redirected through `public/_redirects`.

Only after that review should `bcamathteam.org` be added under the Pages project's custom domains. Since the zone is already managed by Cloudflare, use the DNS record Cloudflare proposes and preserve the prior record until the Pages deployment is confirmed. Add `www.bcamathteam.org` separately only if the existing site currently serves it, then redirect one hostname to the canonical domain.

If rollback is needed after cutover, restore the previous DNS record or use Cloudflare Pages deployment rollback. Do not delete the old hosting configuration during the initial cutover.
