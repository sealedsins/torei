<script setup lang="ts">
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

onMounted(() => {
	const body = document.querySelector('body');
	disableBodyScroll(body!);
});

onBeforeUnmount(() => {
	clearAllBodyScrollLocks();
});
</script>

<template>
	<teleport to="body">
		<div class="modal">
			<card class="modal__card" v-bind="$attrs">
				<template #title>
					<slot name="title"></slot>
				</template>
				<template #subtitle>
					<slot name="subtitle"></slot>
				</template>
				<template #default>
					<slot></slot>
				</template>
			</card>
		</div>
	</teleport>
</template>

<style scoped lang="scss">
.modal {
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	padding: 0 1em;
	z-index: 2;

	height: 100%;
	width: 100%;
	left: 0;
	top: 0;

	$background-color: rgba(5, 5, 5, 0.85);
	$background-blur: 5px;

	@media print {
		display: none;
	}

	@supports (backdrop-filter: blur($background-blur)) {
		backdrop-filter: blur($background-blur);
		background: $background-color;
	}

	@supports not (backdrop-filter: blur($background-blur)) {
		background: $background-color;
	}

	&__card {
		max-height: 80%;
		max-width: 550px;

		@media (max-width: $breakpoint-mobile) {
			width: 100%;
		}
	}
}
</style>
