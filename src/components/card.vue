<script setup lang="ts">
const props = defineProps<{ to?: string }>();
const onClick = () => navigateTo(props.to, { external: true });
</script>

<template>
	<div class="card" :role="to && 'link'" @click="onClick">
		<NuxtLink v-if="to" :to="to" hidden>
			<!-- Nuxt Crawler Fix -->
		</NuxtLink>
		<div v-if="$slots.title" class="card__title">
			<slot name="title"></slot>
		</div>
		<div v-if="$slots.subtitle" class="card__subtitle">
			<slot name="subtitle"></slot>
		</div>
		<div class="card__content">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	@include notch($bottom-right: 1em);

	display: block;
	color: $color-text;
	transition: background 0.25s;
	background: lighten($color-panel, 0.1);
	margin: $content-padding * 2.1 0;
	overflow-x: hidden;
	overflow-y: auto;

	padding: $content-padding * 1.25 $content-padding * 1.25 $content-padding *
		1.45 $content-padding * 1.25;

	@media print {
		color: inherit;
		break-inside: avoid;
		background: none;
		padding: 0;
	}

	&[role='link'] {
		cursor: pointer;
	}

	&[role='link']:hover,
	&[role='link']:active {
		background: lighten($color-panel, 2.5%);
	}

	:deep(:first-child) {
		margin-top: 0;
	}

	:deep(:last-child) {
		margin-bottom: 0;
	}

	&__title {
		font-weight: bolder;
		font-size: 1.15em;
		color: $color-primary;
		margin-bottom: 0.35em;
		margin-top: 0;

		@media print {
			color: inherit;
		}
	}

	&__subtitle {
		color: $color-text;
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
