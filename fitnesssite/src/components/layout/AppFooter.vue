<template>
  <footer class="footer" aria-label="Site footer">
    <div class="container footer-container">

      <!-- CIMSPA Badge -->
      <div class="footer-badge">
        <a
          href="https://accreditation.cimspa.co.uk/verify/431400930dbc734f82b467c25470a8f06628c515385657103d025cd5bba350fb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify CIMSPA accreditation (opens in new tab)"
        >
          <img
            src="../../assets/images/cimspa-badge.png"
            alt="CIMSPA Accredited Professional Badge"
          />
        </a>
      </div>

      <!-- Footer Content -->
      <div class="footer-content">

        <!-- Links -->
        <nav class="footer-links">
          <router-link
            v-for="link in FOOTER_LINKS"
            :key="link.path"
            :to="link.path"
            class="footer-link"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <!-- Social Icons -->
        <div class="footer-socials">
          <a
            v-for="social in SOCIAL_LINKS"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="social.label"
          >
            <component :is="social.icon" size="22" />
          </a>
        </div>

        <!-- Copyright -->
        <p class="footer-copyright">
          &copy; {{ currentYear }} Luke Rudderham-Cozier. All rights reserved.
        </p>

        <!-- Locations -->
        <p
          v-for="location in FOOTER_LOCATIONS"
          :key="location"
          class="footer-location"
        >
          {{ location }}
        </p>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOOTER_LINKS, FOOTER_LOCATIONS, SOCIAL_LINKS } from '../../lib/constants';

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
}

.footer-container {
  padding: 3rem 1.5rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

/* Badge */

.footer-badge img {
  max-width: 120px;
  height: auto;
}

/* Content */

.footer-content {
  text-align: center;
}

/* Links */

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-accent);
}

/* Text */

.footer-copyright {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.footer-location {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #52525b;
}

/* Mobile Layout */

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .footer-content {
    text-align: center;
  }

  .footer-badge img {
    max-width: 100px;
  }

  .footer-links {
    gap: 0.75rem;
  }
}
</style>
