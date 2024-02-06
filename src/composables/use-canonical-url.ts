import joinURL from 'url-join';

/**
 * Redefine NUXT_PUBLIC_CANONICAL_PROTOCOL and NUXT_PUBLIC_CANONICAL_HOST to configure.
 */
export const useCanonicalURL = () => {
	const config = useRuntimeConfig();
	const { canonicalProtocol, canonicalHost } = config.public;
	const base = `${canonicalProtocol}://${canonicalHost}/`;
	return (path: string) => {
		if (path.startsWith('http://') || path.startsWith('https://')) {
			return path;
		} else if (!path.startsWith(config.app.baseURL)) {
			return joinURL(base, config.app.baseURL, path);
		} else {
			return joinURL(base, path);
		}
	};
};
