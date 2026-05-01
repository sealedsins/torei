<script setup lang="ts">
import { useAsset } from '~/composables/use-asset';
defineProps<{
	src: string;
	width?: string | number;
	height?: string | number;
	alt?: string;
}>();
</script>

<template>
	<img
		class="prose-img"
		:src="useAsset(src)"
		:width="width"
		:height="height"
		:alt="alt"
	/>
</template>

<style scoped lang="scss">
.prose-img {
	@include notch($bottom-right: 1em, $top-left: 1em);
	margin: ($content-padding - 0.75em) 0;
}
</style>
