import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://MariaAise.github.io',
  base: '/play-astro',
  integrations: [
    tailwind(),
    compress(),
  ],
});
