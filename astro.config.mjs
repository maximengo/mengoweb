import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

export default defineConfig({
  site: "https://mengo.com.ar",

  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],

  build: {
    inlineStylesheets: "auto",
  },

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
