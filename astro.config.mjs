import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bcamathteam.org",
  integrations: [sitemap()],
  output: "static",
  build: {
    format: "file",
  },
});
