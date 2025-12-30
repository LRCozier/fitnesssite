import { createApp } from 'vue';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import router from './router';
import './assets/styles/base.scss';
import './assets/styles/pages.scss';
import './assets/styles/layout.scss';
import './assets/styles/components.scss';
import './assets/styles/variables.scss';

const app = createApp(App);

const head = createHead();
app.use(head);
app.use(router);

app.mount('#app');
