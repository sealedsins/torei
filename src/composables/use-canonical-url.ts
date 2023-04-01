import joinURL from 'url-join';

/**
 * Redefine NUXT_PUBLIC_CANONICAL_PROTOCOL and NUXT_PUBLIC_CANONICAL_HOST to configure.
 */
export const useCanonicalURL = () => {
	const { app, canonicalProtocol, canonicalHost } = useRuntimeConfig();
	const base = `${canonicalProtocol}://${canonicalHost}/`;
	return (path: string) => {
		if (path.startsWith('http://') || path.startsWith('https://')) {
			return path;
		} else if (!path.startsWith(app.baseURL)) {
			return joinURL(base, app.baseURL, path);
		} else {
			return joinURL(base, path);
		}
	};
};
