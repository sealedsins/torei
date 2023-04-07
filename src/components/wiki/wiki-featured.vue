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
			<template #default>
				<div v-if="$slots.image" class="wiki-featured__image">
					<slot name="image"></slot>
				</div>
				<slot></slot>
			</template>
		</card>
	</div>
</template>

<style scoped lang="scss">
.wiki-featured {
	&__header {
		display: flex;
		position: relative;
		flex-direction: row;
		align-items: center;
		padding-bottom: 0.25em;

		:deep(p) {
			margin: 0;
		}
	}

	&__icon {
		margin-right: 1em;
		font-size: 0.75em;
	}

	&__image {
		position: relative;
		float: right;
		margin-left: $content-padding * 1.5;
		width: 35%;
		top: 0.6em;

		:deep(+ p) {
			margin-top: 0;
		}

		@media (max-width: $breakpoint-mobile) {
			margin-bottom: $content-padding * 1.5;
			width: 100%;
		}
	}
}
</style>
