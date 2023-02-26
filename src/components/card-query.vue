<script setup lang="ts">
defineProps<{ query?: object; path?: string }>();
</script>

<template>
	<ContentList :path="path" :query="query">
		<template #not-found>
			<slot name="not-found"></slot>
		</template>
		<template v-slot="{ list }">
			<slot name="header"></slot>
			<template v-for="page in list">
				<card
					v-if="page.navigation !== false"
					:to="page._path"
					:key="page._path"
				>
					<template #title>
						{{ page.title }}
					</template>
					<template #subtitle v-if="page.tags">
						Tags: {{ page.tags.join(', ') }}
					</template>
					<span>
						{{ page.description }}
					</span>
				</card>
			</template>
			<slot name="footer"></slot>
		</template>
	</ContentList>
</template>
