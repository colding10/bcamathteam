# BCA Math Team Website

Official website for the Bergen County Academies Math Team.

The site is being refactored from legacy static HTML into Astro while keeping the old public URLs stable.

Local development:

```sh
npm install
npm run dev
```

Verification:

```sh
npm run check
npm run build
```

Cloudflare Pages should use `npm run build` as the build command and `dist` as the output directory. See `docs/deployment.md` before changing DNS.
