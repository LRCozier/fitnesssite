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
          v-for="link in SOCIAL_LINKS"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener"
          :aria-label="link.label"
          class="social-link"
          >
          <component
          :is="iconMap[link.icon]"
          class="social-icon"
          />
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
import { Instagram, Music2 } from 'lucide-vue-next';
import type { SocialIcon } from '../../types';

const currentYear = new Date().getFullYear();
const iconMap: Record<SocialIcon, any> = {
  instagram: Instagram,
  tiktok: Music2,
};
</script>