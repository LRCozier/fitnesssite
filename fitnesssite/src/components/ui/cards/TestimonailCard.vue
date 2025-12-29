<template>
  <article class="testimonial-card">
    <div
      class="testimonial-rating"
      :aria-label="`Rated ${testimonial.rating} out of 5`"
      role="img"
    >
      {{ '★'.repeat(testimonial.rating) }}{{ '☆'.repeat(5 - testimonial.rating) }}
    </div>

    <blockquote class="testimonial-text">
      “{{ testimonial.testimonialText }}”
    </blockquote>

    <footer class="testimonial-author">
      - {{ testimonial.clientName }}, {{ testimonial.location }}
    </footer>

    <span class="testimonial-category">
      {{ testimonial.category }}
    </span>
  </article>
</template>

<script setup lang="ts">
import type { Testimonials } from '@/types';

defineProps<{
  testimonial: Testimonials;
}>();
</script>
