import { createApp } from 'vue';
import './style/style.css';
import './style/tailwind.css';
import ElementPlus from 'element-plus';
import router from './router';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
