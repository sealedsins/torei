<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink');
defineProps<{ to?: string }>();
</script>

<template>
	<component class="card" :is="to ? NuxtLink : 'div'" :href="to">
		<div v-if="$slots.title" class="card__title">
			<slot name="title"></slot>
		</div>
		<div v-if="$slots.subtitle" class="card__subtitle">
			<slot name="subtitle"></slot>
		</div>
		<div class="card__body">
			<slot name="content"></slot>
			<slot></slot>
		</div>
	</component>
</template>

<style scoped lang="scss">
.card {
	display: block;
	box-sizing: border-box;
	transition: background 0.25s;
	background: lighten($color-background-panel, 0.1);
	color: $color-text-medium;
	border-radius: 0.35em;
	margin: 2.25em 0;
	padding: 1em;

	overflow-x: hidden;
	overflow-y: auto;

	@media print {
		color: inherit;
		break-inside: avoid;
		background: none;
		padding: 0;
	}

	@at-root {
		a#{&}:hover {
			background: transparentize($color-background-panel, 0.65);
		}
	}

	:deep(*):first-child {
		margin-top: 0;
	}

	:deep(*):last-child {
		margin-bottom: 0;
	}

	&__title {
		font-weight: bolder;
		font-size: 1.15em;
		color: $color-text-high;
		margin-bottom: 0.35em;
		margin-top: 0;

		@media print {
			color: inherit;
		}
	}

	&__subtitle {
		color: $color-text-medium;
		margin-bottom: 0.65em;
		margin-top: -0.55em;
		font-size: 0.95em;
		transition: opacity 0.25s;
		opacity: 0.5;

		@media print {
			color: inherit;
		}
	}
}
</style>
