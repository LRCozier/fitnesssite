<template>
  <div>
    <a href="#main-content" class="sr-only">
      Skip to main content
    </a>

    <header>
      <AppNavbar />
    </header>

    <main id="main-content">
      <RouterView />
    </main>

    <footer>
      <AppFooter/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import AppFooter from './components/layout/AppFooter.vue';
import AppNavbar from './components/layout/AppNavbar.vue';

useHead({
  title: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
  titleTemplate: (title?: string) =>
    title
      ? `${title} | LAC Fitness Strength & Conditioning`
      : 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
  meta: [
    {
      name: 'description',
      content:
        'Professional strength and conditioning training focused on skill progression and functional strength.',
    },
    {
      name: 'keywords',
      content: 'personal trainer, strength training, conditioning, Richmond, London, fitness',
    },
    { name: 'author', content: 'Luke Cozier' },

    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
    { property: 'og:url', content: 'https://lacfitness.com' },
    { property: 'og:site_name', content: 'LAC Fitness' },
    {
      property: 'og:title',
      content: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
    },
    {
      property: 'og:description',
      content:
        'Professional strength and conditioning training focused on skill progression and functional strength.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth',
  },
});
</script>
