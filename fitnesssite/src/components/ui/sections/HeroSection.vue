<template>
  <section
    class="hero-section"
    role="banner"
    aria-labelledby="hero-heading"
  >
    <div class="hero-overlay" aria-hidden="true"></div>

    <div class="hero-content">
      <h1 id="hero-heading">
        <span class="block">STRONGER FOR LIFE,</span>
        <span class="block text-accent">NOT JUST FOR THE GYM.</span>
      </h1>

      <p>
        1:1 strength and conditioning coaching in Richmond Upon Thames, focused on skill,
        confidence, and results you can feel outside the gym.
      </p>

      <div class="hero-cta" aria-label="Primary actions">
        <RouterLink to="/contact" class="btn btn-primary btn-lg">
          Book a free consultation
        </RouterLink>
        <RouterLink to="/services" class="btn btn-lg">
          View coaching options
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// NOTE TO SELF, ADD BACKGROUND IMAGE
</script>
