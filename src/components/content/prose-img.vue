<script setup lang="ts">
defineProps<{
	src: string;
	width?: string | number;
	height?: string | number;
	alt?: string;
}>();
</script>

<template>
	<img v-bind="$props" class="prose-img" :src="useAsset(src)" />
</template>

<style scoped lang="scss">
.prose-img {
	@include notch($bottom-right: 1em, $top-left: 1em);
}
</style>
