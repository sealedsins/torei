<script setup lang="ts">
const route = useRoute();
const query = { where: { tags: { $contains: route.params.tag.toString() } } };
useHead({ title: `Tag "${route.params.tag.toString()}"` });
</script>

<template>
	<card-query :query="query">
		<template #not-found>
			<h1 class="title">No results found for tag "{{ $route.params.tag }}".</h1>
		</template>
		<template #header>
			<h1 class="title">Tagged as "{{ $route.params.tag }}":</h1>
		</template>
	</card-query>
</template>

<style scoped lang="scss">
.title {
	font-size: 1.5em;
	margin-bottom: 1.5em;
	margin-top: 0;
}
</style>
