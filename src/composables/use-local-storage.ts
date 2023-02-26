/**
 * Warning: Better use this composable together with a <client-only> wrapper to prevent possible hydration issues.
 */
export const useLocalStorage = <T>(key: string, fallback: T) => {
	const current = ref<T>(fallback);
	onMounted(() => {
		const str = localStorage.getItem(key) || new String(fallback).toString();
		current.value = JSON.parse(str);
	});
	watch(current, () => {
		localStorage.setItem(key, JSON.stringify(current.value));
	});
	return current;
};
