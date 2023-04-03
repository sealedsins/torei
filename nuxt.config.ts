import { NuxtConfig } from '@nuxt/schema';
import { resolve } from 'node:path';

// Leet: TOREI -> 70R31 -> 7031
// I need to explicitly set this so it would not interfere with my work project.
const PORT = parseInt(process.env.PORT || '7031');

const contentSettings: NuxtConfig = {
	modules: ['@nuxt/content'],
	content: {
		documentDriven: true,
		ignores: ['assets', 'drafts'],
		sources: {
			site: {
				driver: 'fs',
				base: resolve(__dirname, 'content'),
				prefix: '/',
			},
		},
	},
	components: {
		dirs: [
			{
				path: '~/components',
				global: true, // MDC
			},
		],
	},
	hooks: {
		'build:manifest': (manifest) => {
			// disable prefetch: https://github.com/nuxt/nuxt/issues/18376
			for (const key in manifest) {
				manifest[key].dynamicImports = [];
				manifest[key].imports = [];
			}
		},
	},
};

const fontawesomeSettings: NuxtConfig = {
	css: ['@fortawesome/fontawesome-svg-core/styles.css', '@/app.scss'],
	build: {
		transpile: ['@fortawesome/vue-fontawesome'],
	},
};

export default defineNuxtConfig({
	...contentSettings,
	...fontawesomeSettings,
	srcDir: 'src',
	ssr: true,
	devServer: {
		port: PORT,
	},
	runtimeConfig: {
		public: {
			canonicalHost: `localhost:${PORT}`,
			canonicalProtocol: 'http',
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
			titleTemplate: `%s | Laminate Chronicles`,
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/app.variables.scss";',
				},
			},
		},
	},
});
