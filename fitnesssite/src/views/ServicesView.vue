<template>
  <section class="section section-dark">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">SERVICES</h1>
        <p class="section-text">
          No-nonsense strength coaching tailored to your experience, confidence, and goals — whether you’re
          just starting, returning to training, or levelling up.
        </p>
      </div>

      <div v-if="loading" class="empty-state">
        <h3>Loading services…</h3>
        <p>Please wait while I fetch the latest options.</p>
      </div>

      <div v-else-if="error" class="empty-state">
        <h3>Unable to load services</h3>
        <p>{{ error }}</p>
      </div>

      <div v-else-if="services.length === 0" class="empty-state">
        <h3>No services available (yet).</h3>
        <p>Please check back soon or contact me directly with your questions.</p>
      </div>

      <div v-else class="service-tabs">
        <div
          class="service-tab-list"
          role="tablist"
          aria-label="Service types"
        >
          <button
            v-for="service in services"
            :key="service.id"
            type="button"
            class="service-tab-button"
            :class="{ active: service.id === activeServiceId }"
            role="tab"
            :aria-selected="service.id === activeServiceId ? 'true' : 'false'"
            :aria-controls="`service-panel-${service.id}`"
            @click="selectService(service.id)"
          >
            {{ service.title }}
          </button>
        </div>

        <article
          v-if="activeService"
          :id="`service-panel-${activeService.id}`"
          class="service-details-card"
          role="tabpanel"
          :aria-labelledby="`service-tab-${activeService.id}`"
        >
          <header class="service-details-header">
            <h2 class="service-details-title">
              {{ activeService.title }}
            </h2>

            <p v-if="activeService.price" class="service-details-price">
              {{ activeService.price }}
            </p>

            <p class="service-details-description">
              {{ activeService.description }}
            </p>

            <div v-if="activeService.duration || activeService.intensity" class="service-meta">
              <span v-if="activeService.duration" class="service-meta-pill">
                Duration: {{ activeService.duration }}
              </span>
              <span v-if="activeService.intensity" class="service-meta-pill">
                Intensity: {{ activeService.intensity }}
              </span>
            </div>
          </header>

          <section v-if="activeService.features?.length" class="service-section">
            <h3>What’s included</h3>
            <ul class="service-features">
              <li v-for="(feature, index) in activeService.features" :key="index">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          </section>

          <section v-if="activeService.recommendedFor?.length" class="service-section">
            <h3>Ideal for</h3>
            <div class="service-tags">
              <span
                v-for="(tag, index) in activeService.recommendedFor"
                :key="index"
                class="service-tag"
              >
                {{ tag }}
              </span>
            </div>
          </section>

          <footer class="service-footer">
            <BaseButton
              variant="primary"
              size="lg"
              to="/contact"
            >
              {{ activeService.ctaText || 'Book Consultation' }}
            </BaseButton>

            <p class="service-footer-note">
              Not sure which option is right for you? Use the contact form to tell me about your situation,
              and we’ll decide together.
            </p>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { getServices } from '../utils/graphql-utils';
import type { Service } from '../types';
import BaseButton from '../components/ui/BaseButton.vue';

const services = ref<Service[]>([]);
const activeServiceId = ref<string | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

const activeService = computed(() =>
  services.value.find((service) => service.id === activeServiceId.value) || null
);

const selectService = (id: string) => {
  activeServiceId.value = id;
};

onMounted(async () => {
  try {
    loading.value = true;

    const result = await getServices();
    services.value = result;

    const firstService = result[0];

    if (firstService) {
      activeServiceId.value = firstService.id;
    } else {
      activeServiceId.value = null;
    }
  } catch (err) {
    console.error(err);
    error.value =
      'Please refresh the page or contact me directly for details about current services.';
    services.value = [];
    activeServiceId.value = null;
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Services',
  meta: [
    {
      name: 'description',
      content:
        '1-to-1 personal training, 2-to-1 small group sessions, and online consultations & programming with LAC Fitness in Kingston/Richmond.',
    },
  ],
});
</script>
