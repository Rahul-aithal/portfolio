// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { basePath, siteUrl } from "./src/data/site.ts";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: basePath,
  vite: {
    plugins: [tailwindcss()],
  },
});
