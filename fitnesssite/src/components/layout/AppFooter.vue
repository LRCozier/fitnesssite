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


<style>

.footer {
  background-color: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
}

.footer-container {
  padding: 3rem 1.5rem;
  text-align: center;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 2rem;
}

.footer-brand:hover {
  color: var(--color-accent);
}

.footer-logo-icon {
  height: 2rem;
  width: 2rem;
  color: var(--color-accent);
}

.footer-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-accent);
}

.footer-copyright {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.footer-location {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #52525b;
}
  
</style>