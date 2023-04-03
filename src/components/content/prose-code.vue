<script setup lang="ts">
const prompt = ref<HTMLElement | null>(null);
const copied = ref(false);
const onCopy = () => {
	if (prompt.value) {
		navigator.clipboard?.writeText(prompt.value.innerText);
		copied.value = true;
	}
};
</script>

<template>
	<div class="prompt" @mouseleave="copied = false">
		<div class="prompt__copy" @click="onCopy">
			<font-awesome-icon v-if="!copied" icon="fa-solid fa-copy" />
			<font-awesome-icon v-else icon="fa-solid fa-check" />
		</div>
		<div class="prompt__text" ref="prompt">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.prompt {
	position: relative;
	background: $color-panel;
	padding: 1em 2em;
	margin: 2em 0;

	@include notch($bottom-right: 1em);

	@media (max-width: $breakpoint-mobile) {
		padding: 0.5em 1.25em;
	}

	:deep(pre) {
		white-space: pre-wrap;
	}

	:deep(code) {
		font-family: $font-family;
		font-size: inherit;
	}

	&__copy {
		cursor: pointer;
		position: absolute;
		padding: 0.85em;
		right: -0.25em;
		top: -0.25em;
		opacity: 0;

		@media (max-width: $breakpoint-mobile) {
			font-size: 0.85em;
			right: -0.5em;
			top: -0.65em;
			opacity: 0.25;
		}

		&:hover {
			transition: opacity 0s;
		}
	}

	&:hover &__copy {
		opacity: 1;
	}
}
</style>
