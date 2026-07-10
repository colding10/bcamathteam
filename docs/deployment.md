# Deployment

This repo now builds a static Astro site into `dist/`.

Recommended Cloudflare Pages setup:

1. In Cloudflare Pages, create a project from the forked GitHub repository.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Use Node.js 22. The repo includes `.nvmrc` and `package.json` engine metadata for this.
5. Keep the production branch pointed at a safe branch until the preview looks right.

Do not change DNS first. Cloudflare Pages will provide a preview URL for each branch or pull request. Verify the preview URL before assigning `bcamathteam.org`.

When ready to move the live domain, add `bcamathteam.org` as a custom domain on the Cloudflare Pages project. Because DNS is already managed in Cloudflare, Cloudflare will show the exact record changes it wants. Make the domain switch only after the Pages production deployment is verified.

The site preserves the legacy public paths such as `/about.html`, `/archive.html`, `/info.html`, and `/news.html`. Extensionless paths like `/about` redirect to the `.html` versions through `public/_redirects`.
