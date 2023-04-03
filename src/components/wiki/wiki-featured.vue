<script setup lang="ts">
defineProps<{ icon?: string; to?: string }>();
</script>

<template>
	<div class="wiki-featured">
		<card :to="to">
			<template #title>
				<div class="wiki-featured__header">
					<font-awesome-icon
						v-if="icon"
						:icon="icon"
						class="wiki-featured__icon"
					/>
					<slot name="title"></slot>
				</div>
			</template>
			<template #content>
				<slot name="content"></slot>
			</template>
			<template #default>
				<slot></slot>
			</template>
		</card>
	</div>
</template>

<style scoped lang="scss">
.wiki-featured {
	break-inside: avoid;

	&__header {
		display: flex;
		position: relative;
		padding-bottom: 0.35em;
		flex-direction: row;
		align-items: center;

		:deep(p) {
			margin: 0;
		}
	}

	&__icon {
		margin-right: 1em;
		font-size: 0.75em;
	}
}
</style>
