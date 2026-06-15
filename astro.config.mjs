// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.davidlondon.dev',
	trailingSlash: 'ignore',
	integrations: [
		react(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					es: 'es',
					de: 'de',
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
				'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			},
		},
	},
});
