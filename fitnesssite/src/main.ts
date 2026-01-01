import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import './assets/styles/base.scss';
import './assets/styles/pages.scss';
import './assets/styles/layout.scss';
import './assets/styles/components.scss';
import './assets/styles/variables.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
