import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import TestimonialsView from '@/views/TestimonialsView.vue';
import ContactView from '@/views/ContactView.vue';

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
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView,
    meta: { title: 'Client Testimonials' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Get In Touch' },
  },
];

const router = createRouter({
  history: createWebHistory(),
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
