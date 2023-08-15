import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from 'vue-router';
import { routes } from './router';
import App from './App.vue'

const app = createApp(App);
const router = createRouter({
  routes
});

app.use(createPinia());
app.use(router);
app.mount('#app')
