<template>
  <section class="section animate-fade-in">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">CLIENT TESTIMONIALS</h1>
        <p class="section-text">
          Hear from the people who've transformed their strength and performance.
        </p>
      </div>

      <div v-if="testimonials.length > 0">
        <div
          class="testimonial-categories"
          role="tablist"
          aria-label="Filter testimonials by category"
        >
          <button
            type="button"
            class="testimonial-category-btn"
            :class="{ active: selectedCategory === 'All' }"
            :aria-pressed="selectedCategory === 'All'"
            role="tab"
            @click="selectCategory('All')"
          >
            All
          </button>

          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="testimonial-category-btn"
            :class="{ active: selectedCategory === category }"
            :aria-pressed="selectedCategory === category"
            role="tab"
            @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <div class="testimonials-grid-full">
          <TestimonialCard
            v-for="testimonial in filteredTestimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
      </div>
      <div v-else class="text-center py-12">
        <p class="text-text-secondary">No testimonials available yet.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { getAllTestimonials } from '../utils/graphql-utils';
import TestimonialCard from '../components/ui/cards/TestimonialCard.vue';
import type { Testimonials } from '../types';

const testimonials = ref<Testimonials[]>([]);
const selectedCategory = ref<'All' | string>('All');
const categories = ref<string[]>([]);

const filteredTestimonials = computed(() => {
  if (selectedCategory.value === 'All') return testimonials.value;
  return testimonials.value.filter((t) => t.category === selectedCategory.value);
});

const selectCategory = (category: 'All' | string) => {
  selectedCategory.value = category;
};

onMounted(async () => {
  const all = await getAllTestimonials();
  testimonials.value = all;
  categories.value = [...new Set(all.map((t) => t.category))];
});

useHead({
  title: 'Client Testimonials',
  meta: [
    {
      name: 'description',
      content:
        "Read real client testimonials from LAC Fitness members who've transformed their strength, performance, and confidence.",
    },
  ],
});
</script>
