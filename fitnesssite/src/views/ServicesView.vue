<template>
  <section class="section section-dark animate-fade-in">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">SERVICES</h1>
        <p class="section-text">
          No-nonsense training packages designed for serious results.
        </p>
      </div>

      <div v-if="loading" class="services-grid">
        <p>Loading services...</p>
      </div>

      <div v-else-if="error" class="text-center">
        <p>We could not load services at this time. Please try again later.</p>
      </div>

      <div v-else class="services-grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <h3>{{ service.title }}</h3>
          <p class="service-price">{{ service.price }}</p>

          <ul class="service-features">
            <li
              v-for="(feature, index) in service.features"
              :key="index"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <RouterLink to="/contact" class="btn btn-primary">
            {{ service.ctaText }}
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { getServices } from '@/utils/graphql-utils';
import type { Service } from '@/types';

const services = ref<Service[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

useHead({
  title: 'Services',
  meta: [
    {
      name: 'description',
      content:
        'Explore LAC Fitness strength and conditioning services, with no-nonsense training packages for serious results.',
    },
  ],
});

onMounted(async () => {
  try {
    services.value = await getServices();
  } catch (err) {
    console.error(err);
    error.value = 'Unable to load services.';
  } finally {
    loading.value = false;
  }
});
</script>
