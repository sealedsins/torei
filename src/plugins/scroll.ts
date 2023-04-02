// This plugin solves weird iOS Safari address bar scroll issue.
let historyState: 'init' | 'pop' | 'unset' = 'init';
if (process.client) {
	window.addEventListener('popstate', () => {
		historyState = 'pop';
	});
}

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('page:finish', () => {
		switch (historyState) {
			case 'unset': {
				setTimeout(() => window.scrollTo(0, -100));
				break;
			}
			default: {
				historyState = 'unset';
				break;
			}
		}
	});
});
