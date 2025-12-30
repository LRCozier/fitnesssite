<template>
  <section
    class="hero-section"
    role="banner"
    aria-labelledby="hero-heading"
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
</script>

<style>
  /* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('../../../assets/heroimage2.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 1rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
  color: white;
}

.hero-content h1 .block {
  display: block;
}

.hero-content h1 .text-accent {
  margin-top: 0.5rem;
}

.hero-content p {
  margin-top: 1.5rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.125rem;
  color: var(--color-text-secondary);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}
</style>