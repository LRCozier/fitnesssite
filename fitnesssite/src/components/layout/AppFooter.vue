<template>
  <footer class="footer" aria-label="Site footer">
    <div class="container footer-container">
      <div class="footer-links">
        <router-link to="/about" class="footer-link">About</router-link>
        <router-link to="/services" class="footer-link">Services</router-link>
        <router-link to="/faq" class="footer-link">Frequently Asked Questions</router-link>
        <router-link to="/terms" class="footer-link">Terms and Conditions</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
      </div>

      <p class="footer-copyright">
        &copy; {{ currentYear }} Luke Rudderham-Cozier. All rights reserved.
      </p>

      <p class="footer-location">
        Personal Training in Richmond Upon Thames / Kingston Upon Thames.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>