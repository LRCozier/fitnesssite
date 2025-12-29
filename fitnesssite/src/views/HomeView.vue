<template>
  <section class="section animate-fade-in">
    <div class="container">
      <HeroSection />
      <SummarySection />
      <TestimonialsSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import HeroSection from '@/components/sections/HeroSection.vue';
import SummarySection from '@/components/sections/SummarySection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';

useHead({
  title: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
  meta: [
    {
      name: 'description',
      content:
        'Professional strength and conditioning training in Richmond Upon Thames focused on skill progression and functional strength.',
    },
  ],
});
</script>
