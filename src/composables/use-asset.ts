const assets = import.meta.glob('~/assets/**/*', {
	import: 'default',
	eager: true,
});

export const useAsset = (src: string) => {
	src = src.replace(/^~/i, ''); // Remove '~ at the start of the path'.
	return assets[src]?.toString() || src;
};

// TODO: Move to content assets when it is ready
// https://github.com/nuxt/content/issues/106
// const assets = import.meta.glob('~/../content/assets/**/*', {
// 	import: 'default',
// 	eager: true,
// });

// export const useContentAsset = (src: string) => {
// 	const pathPrefix = src.startsWith('/') ? '../content' : '../content/';
// 	return assets[pathPrefix + src]?.toString() || src;
// };
