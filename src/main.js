import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
