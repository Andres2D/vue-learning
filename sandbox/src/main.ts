import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router';
import App from './App.vue'

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(createPinia());
app.use(router);
app.mount('#app')
