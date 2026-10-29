// @ts-check
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kupcad.org',
  // The playground (@kupcad/playground) is a Svelte component
  integrations: [svelte()],
  vite: { plugins: [tailwindcss()] },
});
