<template>
  <section
    class="hero-section"
    role="banner"
    aria-labelledby="hero-heading"
    :style="heroStyle"
  >
    <div class="hero-overlay" aria-hidden="true"></div>

    <div class="hero-content">
      <h1 id="hero-heading">
        <span class="block">STRONGER FOR LIFE</span>
        <span class="block text-accent">START WHERE YOU ARE</span>
      </h1>

      <p>
        Supportive 1:1 training for beginners, returners, and everyday 
        adults who want to build strength without intimidation. Based in
        Kingston Upon Thames.
      </p>

      <div class="hero-cta" aria-label="Primary actions">
        <BaseButton 
        label="Book a free Consultation"
        to="/contact"
        variant="primary"
        size="lg"/>
        <BaseButton 
        label="View Services"
        to="/services"
        variant="secondary"
        size="lg"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
import { computed } from 'vue';
import { useTheme } from '../../../composables/useTheme';
import heroLight from '../../../assets/images/heroimage-lighttheme1.jpg';
import heroDark from '../../../assets/images/heroimage-darktheme.jpg';

const {isLight} = useTheme();

const heroStyle = computed(() => {
  return {
    backgroundImage: `url(${isLight.value ? heroLight : heroDark})`,
  } as const;
});
</script>
