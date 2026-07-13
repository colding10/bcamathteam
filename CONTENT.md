# Content Guide

## Where content lives

Most visible pages are Astro files in `src/pages`. For example, update `src/pages/summer.astro` for Summer Lectures, `src/pages/about.astro` for team information, and `src/pages/news.astro` for awards and results. The page filenames determine the public `.html` routes; Cloudflare Pages also serves the equivalent extensionless routes.

The shared navigation and footer are in `src/components/LegacyHeader.astro` and `src/components/LegacyFooter.astro`. Use these files for site-wide links or contact information. The shared document shell, external scripts, and common styles are in `src/layouts/LegacyLayout.astro`.

Images, PDFs, text files, legacy JavaScript, and CSS are served from `public`. A file placed at `public/images/example.jpg` is available to pages as `/images/example.jpg`. Keep filenames stable when possible because older pages, documents, and external links may reference them.

## Routine updates

For an upcoming program, update the relevant page with a clear heading, concise description, dates, time zone, registration link, and contact information. External links should use descriptive labels instead of showing raw URLs. Use `target="_blank"` and `rel="noreferrer"` for external registration forms and other links that should open in a new tab.

Avoid editing generated files in `dist` or moving legacy assets unless their incoming paths are preserved. The archive and updates pages retain legacy scripts and Firebase-backed behavior, so test those pages after shared layout or JavaScript changes.

## Checking a change

Run `npm run check` and `npm run build` before committing. Review the changed page in the local development server, including its links and mobile layout. Small content changes should still be sent through a pull request so Cloudflare creates a preview URL before production is updated.
