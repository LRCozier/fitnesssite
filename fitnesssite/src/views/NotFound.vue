<template>
  <section class="section section-dark not-found-wrapper">
    <div class="container text-center">
      <h1 class="page-title">404 - Page Not Found</h1>
      
      <p class="section-text fun-copy">
        Looks like this page skipped leg day... and every other day.
        <br />
        The link you followed is out of form — let's get you back on track.
      </p>

      <div class="not-found-actions">
        <RouterLink to="/" class="btn btn-primary btn-lg">
          Back to Homepage
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary btn-lg">
          Contact Support
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found-wrapper {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fun-copy {
  font-style: italic;
  margin-top: 1rem;
}

.not-found-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
