import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docker Deploy API',
			favicon: './public/favicon.svg',
			logo: {
				src: './src/assets/spouting_whale_flat.svg',
				replacesTitle: false
			},
			description: 'An easy-to-use API for deploying Docker containers to a server.',
			social: {
				github: 'https://github.com/timokoessler/docker-deploy-api'
			},
			defaultLocale: 'en',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			lastUpdated: true,
            editLink: {
                baseUrl: 'https://github.com/timokoessler/docker-deploy-api/edit/main/',
            },
			customCss: ['./src/custom.css']
		}),
	],
});
