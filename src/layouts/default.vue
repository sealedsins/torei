<script setup lang="ts">
const { page } = useContent();
onMounted(() => setTimeout(() => window.scrollTo(0, -100)));
</script>

<template>
	<div class="content">
		<template v-if="page">
			<div class="content__header" v-if="page.template !== null">
				<h1 class="content__title">
					{{ page.title }}
				</h1>
				<div v-if="page.tags" class="content__tags">
					<span>Tags: </span>
					<NuxtLink
						v-for="tag in page.tags"
						:to="`/tag/${tag}`"
						class="content__tag"
					>
						{{ tag }}
					</NuxtLink>
				</div>
			</div>
			<img
				v-if="page.image"
				:src="useAsset(page.image)"
				class="content__image"
			/>
		</template>
		<div class="content__body">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.content {
	&__image,
	&__header + &__body {
		margin-top: 1.5em;
	}

	&__title {
		margin-top: 0;
		margin-bottom: -0.2em;
		font-size: 2em;

		@media (max-width: $breakpoint-mobile) {
			font-size: 1.65em;
		}
	}

	&__tags {
		margin-top: 0.35em;
		opacity: 0.5;
	}

	&__tag:not(:last-child):after {
		content: ', ';
	}

	&__body {
		text-align: justify;
	}
}
</style>
