import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
// import About from './src/components/AboutPage.vue';

const history = createWebHistory();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'Abount',
    component: () => import('../components/AboutPage.vue'),
  },
];

export default createRouter({ history, routes });
