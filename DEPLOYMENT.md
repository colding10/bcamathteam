# Deployment

## Deployment model

The `master` branch is production. Cloudflare Pages is connected to this GitHub repository and builds the site automatically on every merge to `master`. The production site is `https://bcamathteam.org`, and the Cloudflare Pages fallback address is `https://bcamathteam.pages.dev`.

Changes should be made on a short-lived branch and merged through a pull request. GitHub Actions runs `npm ci`, `npm run check`, and `npm run build`. Cloudflare Pages creates a preview deployment for the pull request and a production deployment after merge. The protected `master` branch requires the `build` check and resolved review conversations.

## Cloudflare Pages settings

The Pages project is named `bcamathteam` and is connected to `colding10/bcamathteam`. Its production branch is `master`, the build command is `npm run build`, the output directory is `dist`, and the project uses Node.js 22. No application environment variables are required.

Automatic production deployments and preview deployments should remain enabled. A separate GitHub Actions deployment workflow or Cloudflare API token is not needed because the Pages Git integration already owns deployment.

## Domain and DNS

`bcamathteam.org` is an active Cloudflare Pages custom domain. Cloudflare manages its apex record as a CNAME to `bcamathteam.pages.dev`; do not replace that record manually. Do not change mail, verification, or other unrelated DNS records when working on the website.

`www.bcamathteam.org` currently redirects to the apex domain. Keep that redirect working when making future DNS or hosting changes. When the old redirect host is retired, add `www` to the Pages project and create a Cloudflare redirect rule from `www.bcamathteam.org/*` to `https://bcamathteam.org/$1`.

## Verification and rollback

After a production deployment, verify the homepage, top navigation, Summer page, archive, downloadable files, and both extensionless and legacy `.html` URLs. Cloudflare Pages canonicalizes the generated `.html` routes to extensionless URLs; do not add redirect rules that send extensionless URLs back to `.html` because that creates a redirect loop.

For a failed deployment, use the previous successful deployment in Cloudflare Pages to roll back. For a domain-routing issue, leave the Pages project in place and restore the prior DNS record only after confirming the fallback `pages.dev` deployment remains healthy.
