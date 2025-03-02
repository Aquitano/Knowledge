// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import playformCompress from '@playform/compress';

export default defineConfig({
    site: 'https://blog.thomasbreindl.me',
    output: 'static',
    prefetch: true,
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), playformCompress()],
    build: {
        format: 'file',
    },
});
