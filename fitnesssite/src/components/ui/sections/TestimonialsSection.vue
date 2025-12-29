<template>
  <section class="section section-dark">
    <div class="container">
      <h2 class="section-title text-center">REAL CLIENTS, REAL RESULTS</h2>

      <div v-if="loading" class="testimonials-grid">
        <p>Loading testimonials...</p>
      </div>

      <div v-else-if="error" class="text-center">
        <p>We could not load testimonials right now. Please try again later.</p>
      </div>

      <div v-else-if="testimonials.length" class="testimonials-grid">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getFeaturedTestimonials } from '@/utils/graphql-utils';
import TestimonialCard from '@/components/ui/TestimonialCard.vue';
import type { Testimonials } from '@/types';

const testimonials = ref<Testimonials[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    testimonials.value = await getFeaturedTestimonials();
  } catch (err) {
    console.error(err);
    error.value = 'Unable to load testimonials.';
  } finally {
    loading.value = false;
  }
});
</script>
