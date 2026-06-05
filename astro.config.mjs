// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gboml.github.io/Ora.github.io",
  base: "/Ora.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
