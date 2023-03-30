import { library, config } from '@fortawesome/fontawesome-svg-core';
import { IconPack } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(fas as IconPack);
library.add(fab as IconPack);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
