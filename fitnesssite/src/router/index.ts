import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactView from '../views/ContactView.vue';
import FaqView from '../views/FaqView.vue';
import TermsView from '../views/TermsView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About Luke Cozier' },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Services' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Get In Touch' },
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView,
    meta: { title: 'Frequently Asked Questions' },
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView,
    meta: { title: 'Terms & Conditions' },
  },
  {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('../views/NotFound.vue'),
  meta: { title: '404 - Page Not Found' },
}

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
  }
});

export default router;
