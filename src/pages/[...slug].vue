<script setup lang="ts">
import ogFallback from '~/assets/logo-og.png';
const canonical = useCanonicalURL();
const route = useRoute();

const canonicalImage = (src?: string) => {
	if (src) {
		return canonical(useAsset(src));
	} else {
		return canonical(ogFallback);
	}
};
</script>

<template>
	<ContentDoc>
		<template #not-found>
			<Head>
				<Title>Not Found</Title>
				<Meta name="title" content="Not Found" />
				<Meta name="description" content="Document not found" />
			</Head>
			<div class="content">
				<div class="content__body">Not Found</div>
			</div>
		</template>
		<template v-slot="{ doc }">
			<Head>
				<Meta name="og:type" content="article" />
				<Meta name="og:title" :content="doc.title" />
				<Meta name="og:url" :content="canonical(route.fullPath)" />
				<Meta property="og:image" :content="canonicalImage(doc.image)" />
				<Meta name="og:image" :content="canonicalImage(doc.image)" />
				<Meta name="twitter:image" :content="canonicalImage(doc.image)" />
				<Meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div class="content">
				<div class="content__header" v-if="doc.template !== null">
					<h1 class="content__title">
						{{ doc.title }}
					</h1>
					<div v-if="doc.tags" class="content__tags">
						<span>Tags: </span>
						<NuxtLink
							v-for="tag in doc.tags"
							:to="`/tag/${tag}`"
							class="content__tag"
						>
							{{ tag }}
						</NuxtLink>
					</div>
				</div>
				<ProseImg v-if="doc.image" class="content__image" :src="doc.image" />
				<div class="content__body">
					<ContentRenderer :value="doc" />
				</div>
			</div>
		</template>
	</ContentDoc>
</template>

<style scoped lang="scss">
.content {
	&__header + &__body {
		margin-top: 1.5em;
	}

	&__image {
		margin-top: 1.75em;
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
