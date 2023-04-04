import { createGtm } from '@gtm-support/vue-gtm';

export default defineNuxtPlugin((nuxtApp) => {
	const { gtm } = useRuntimeConfig();
	const vueRouter = useRouter();
	if (gtm?.length > 0) {
		nuxtApp.vueApp.use(
			createGtm({
				id: gtm,
				vueRouter,
				compatibility: false,
				loadScript: true,
				enabled: true,
				defer: false,
				debug: false,
			})
		);
	}
});
