<template>
	<ContentDoc v-slot="{ doc }">
		<card v-if="doc.body?.toc" class="wiki-toc">
			<template v-for="(link, index) in doc.body.toc.links">
				<div class="wiki-toc__section">
					<span class="wiki-toc__index">{{ index + 1 }}.</span>
					<a class="wiki-toc__link" :href="'#' + link.id">{{ link.text }}</a>
				</div>
			</template>
		</card>
	</ContentDoc>
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
