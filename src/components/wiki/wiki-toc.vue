<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
	<card v-if="toc" class="wiki-toc">
		<template v-for="(link, index) in toc.links">
			<div class="wiki-toc__section">
				<span class="wiki-toc__index">{{ index + 1 }}.</span>
				<a class="wiki-toc__link" :href="'#' + link.id">{{ link.text }}</a>
			</div>
		</template>
	</card>
</template>

<style scoped lang="scss">
.wiki-toc {
	display: inline-block;
	margin-bottom: 0.5em;
	margin-top: 0.5em;
	min-width: 30%;

	@media print {
		display: none;
	}

	&__section {
		display: block;
		position: relative;
	}

	&__index {
		position: absolute;
	}

	&__link {
		margin-left: 1.5em;
	}
}
</style>
