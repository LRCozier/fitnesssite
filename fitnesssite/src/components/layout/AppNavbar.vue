<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="Main navigation"
    @keydown="handleKeyDown"
  >
    <div class="container navbar-container">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="navbar-brand"
        @click="handleLinkClick"
        aria-label="Luke Cozier - Home"
      >
        <DumbbellIcon class="navbar-logo-icon" aria-hidden="true" />
        <span class="navbar-logo-text">LAC FITNESS</span>
      </RouterLink>

      <!-- Desktop nav -->
      <div class="nav-links-desktop">
        <RouterLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="nav-link"
          :class="{ active: isActive(link.href) }"
          :aria-current="isActive(link.href) ? 'page' : undefined"
        >
          {{ link.label.toUpperCase() }}
        </RouterLink>
      </div>

      <!-- Mobile menu button -->
      <div class="mobile-menu-container">
        <button
          type="button"
          class="mobile-menu-button"
          @click="toggleMenu"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
          :aria-label="isOpen ? 'Close main menu' : 'Open main menu'"
        >
          <span class="sr-only">
            {{ isOpen ? 'Close main menu' : 'Open main menu' }}
          </span>

          <component
            :is="isOpen ? XIcon : MenuIcon"
            class="mobile-menu-icon"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div
      v-if="isOpen"
      id="mobile-navigation"
      class="nav-links-mobile"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.href"
        :to="link.href"
        class="nav-link-mobile"
        :class="{ active: isActive(link.href) }"
        :aria-current="isActive(link.href) ? 'page' : undefined"
        @click="handleLinkClick"
      >
        {{ link.label.toUpperCase() }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { DumbbellIcon, MenuIcon, XIcon } from '../ui/icons';
import { NAV_LINKS } from '../../lib/constants';

const isOpen = ref(false);
const route = useRoute();

const navLinks = NAV_LINKS as readonly { href: string; label: string }[];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleLinkClick = () => {
  isOpen.value = false;
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false;
  }
};

const isActive = (href: string) => route.path === href;
</script>
