import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://deploy-api-docs.tkoessler.de',
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
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Usage',
					items: [
						{ label: 'CI/CD', autogenerate: { directory: 'usage/ci-cd' } },
						{ label: 'Generic', autogenerate: { directory: 'usage/generic' } },
					]
				},
				{
					label: 'Advanced',
					autogenerate: { directory: 'advanced' },
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
