<script setup lang="ts">
const canonical = useCanonicalURL();
const { page } = useContent();
const route = useRoute();

const og = computed(() => ({
	title: page.value.title,
	description: page.value.description,
	image: page.value.image && canonical(useAsset(page.value.image)),
	url: canonical(route.fullPath),
}));

onMounted(() => {
	setTimeout(() => window.scrollTo(0, -100));
});
</script>

<template>
	<!-- Generic page -->
	<template v-if="!page">
		<Head>
			<Title>Not Found</Title>
			<Meta name="title" content="Not Found" />
			<Meta name="description" content="Document not found" />
		</Head>
		<div class="content">
			<div class="content__body">
				<slot></slot>
			</div>
		</div>
	</template>

	<!-- Content page -->
	<template v-else>
		<Head>
			<Title>{{ page.title }}</Title>
			<Meta name="title" :content="og.title" />
			<Meta name="description" :content="og.description" />
			<Meta name="og:type" content="article" />
			<Meta name="og:title" :content="og.title" />
			<Meta name="og:description" :content="og.description" />
			<Meta name="og:url" :content="og.url" />
			<template v-if="og.image">
				<Meta property="og:image" :content="og.image" />
				<Meta name="og:image" :content="og.image" />
				<Meta name="twitter:card" content="summary_large_image" />
				<Meta name="twitter:image" :content="og.image" />
			</template>
		</Head>
		<div class="content">
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
			<div class="content__body">
				<slot></slot>
			</div>
		</div>
	</template>
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
