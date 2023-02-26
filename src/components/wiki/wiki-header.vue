<script setup lang="ts">
defineProps<{ icon?: string; img?: string }>();
</script>

<template>
	<div class="wiki-header">
		<font-awesome-icon v-if="icon" :icon="icon" class="wiki-header__icon" />
		<img v-if="img" :src="useAsset(img)" class="wiki-header__image" />
		<div class="wiki-header__text">
			<h1 class="wiki-header__title">
				<slot name="title"></slot>
			</h1>
			<div class="wiki-header__subtitle">
				<slot name="subtitle"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.wiki-header {
	display: flex;
	margin-bottom: -0.25em;
	flex-direction: row;
	align-items: stretch;
	text-align: left;

	:deep(p) {
		margin: 0;
	}

	&__icon,
	&__image {
		font-size: 4em;
		margin-right: 0.38em;
		margin-top: 0.05em;
		color: #fff;

		text-align: left;
		min-height: 75px;
		min-width: 75px;
		height: 1em;
		width: 1em;

		@media print {
			color: inherit;
		}

		@media (max-width: $breakpoint-mobile) {
			margin-right: 0.5em;
			font-size: 2.75em;
			min-height: 50px;
			min-width: 50px;
		}
	}

	&__image {
		@media print {
			filter: invert(1);
		}
	}

	&__title {
		margin-top: 0;
		margin-bottom: 0.12em;
		line-height: 1.3;
		font-size: 2em;

		@media (max-width: $breakpoint-mobile) {
			font-size: 1.35em;
		}
	}

	&__subtitle {
		font-size: 1.35em;
		line-height: 1.3;

		@media (max-width: $breakpoint-mobile) {
			font-size: 1em;
		}
	}
}
</style>
