<script setup lang="ts">
import icon from '~/assets/favicon.png';
import logo from '~/assets/logo.png';

const disclaimerAccepted = useLocalStorage('disclaimer-accepted', false);

const { data } = await useAsyncData(() => fetchContentNavigation());
const navigationMain = computed(() => {
	return data.value?.sort((a, b) => (a.order || 0) - (b.order || 0));
});

const navigationExtra = [
	{ icon: 'fa-brands fa-github', path: 'https://github.com/sealedsins/torei' },
	{ icon: 'fa-brands fa-twitter', path: 'https://twitter.com/sealedsins' },
];
</script>

<template>
	<Head>
		<Meta name="theme-color" content="rgb(23, 23, 26)" />
		<Link rel="icon" type="image/png" :href="icon" />
	</Head>
	<div class="app">
		<NuxtLoadingIndicator color="#EEE" />
		<nav class="nav">
			<div class="nav__inner">
				<NuxtLink to="/" class="nav__title">
					<img class="nav__logo" :src="logo" />
				</NuxtLink>
				<template v-for="link in navigationMain">
					<NuxtLink v-if="link.title" class="nav__item" :href="link._path">
						<span>{{ link.title }}</span>
					</NuxtLink>
				</template>
				<div class="nav__separator"></div>
				<template v-for="link in navigationExtra">
					<NuxtLink
						class="nav__item nav__item--extra"
						target="_blank"
						:href="link.path"
					>
						<font-awesome-icon :icon="link.icon" />
					</NuxtLink>
				</template>
			</div>
		</nav>
		<client-only>
			<modal v-if="!disclaimerAccepted" class="disclaimer">
				<template #title>
					<span class="disclaimer__title">Before we get started...</span>
				</template>
				<template #default>
					<span class="disclaimer__content">
						This site contains mature content that may not be suitable for all
						audiences. It may include explicit language, depictions of violence,
						and adult themes that some readers may find offensive.<br /><br />By
						accessing this site, you acknowledge that you are of legal age to
						view such content in your country of residence and consent to
						viewing it at your own risk.
					</span>
					<button class="disclaimer__button" @click="disclaimerAccepted = true">
						Continue
					</button>
				</template>
			</modal>
		</client-only>
		<main class="main">
			<div class="main__inner">
				<NuxtPage />
			</div>
		</main>
	</div>
</template>

<style scoped lang="scss">
$content-width: 800px;
$content-padding: 1em;

.nav {
	position: sticky;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.125);
	padding-right: env(safe-area-inset-right);
	padding-left: env(safe-area-inset-left);
	transition: transform 0.25s;
	z-index: 1;
	top: 0;

	$background-blur: 15px;
	@supports (backdrop-filter: blur($background-blur)) {
		background: transparentize($color-background-header, 0.1);
		backdrop-filter: blur($background-blur);
	}

	@supports not (backdrop-filter: blur($background-blur)) {
		background: $color-background-header;
	}

	@media print {
		display: none;
	}

	&__inner {
		display: flex;
		flex-direction: row;
		padding: $content-padding;
		max-width: $content-width;
		align-items: center;
		margin: 0 auto;
	}

	&__title {
		font-weight: 500;
	}

	&__logo {
		margin: -30% 0;
		height: 1.65em;
		width: 1.65em;

		@media (max-width: $breakpoint-mobile) {
			margin-right: -0.25em;
		}
	}

	&__title,
	&__item:not(:last-child) {
		margin-right: 1.35em;

		@media (max-width: $breakpoint-mobile) {
			margin-right: 0.85em;
		}
	}

	&__item--extra {
		opacity: 0.15;
	}

	&__separator {
		flex-grow: 1;
	}
}

.disclaimer {
	@media print {
		display: none;
	}

	&__title {
		display: inline-block;
		text-align: center;
		font-size: 1.5em;
		margin-top: 0.75em !important;
		margin-bottom: -0.75em !important;
		width: 100%;
	}

	&__content {
		display: block;
		text-align: justify;
		padding: 1.25em 0.5em;
	}

	&__button {
		width: 50%;
		margin-left: 25%;
		margin-right: 25%;
		margin-bottom: 1.15em !important;
		margin-top: 0.5em;
	}
}

.main {
	padding-right: env(safe-area-inset-right);
	padding-left: env(safe-area-inset-left);

	&__inner {
		max-width: $content-width;
		padding: ($content-padding * 1.9) ($content-padding);
		margin: 0 auto;

		@media (max-width: $breakpoint-mobile) {
			padding: ($content-padding * 1.45) ($content-padding);
		}
	}
}
</style>
