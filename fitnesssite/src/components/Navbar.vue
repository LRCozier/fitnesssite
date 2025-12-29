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
import { DumbbellIcon, MenuIcon, XIcon } from './ui/icons';
import { NAV_LINKS } from '../lib';

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

<style>

.navbar {
  background-color: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: var(--color-accent);
}

.navbar-logo-icon {
  height: 2rem;
  width: 2rem;
  color: var(--color-accent);
}

.navbar-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.nav-links-desktop {
  display: none;
}

.nav-link {
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-bg-tertiary);
  color: white;
}

.nav-link.active {
  background-color: var(--color-accent);
  color: white;
}

.mobile-menu-container {
  display: flex;
}

.mobile-menu-button {
  background-color: var(--color-bg-tertiary);
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: var(--color-text-secondary);
  border: none;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
}

.mobile-menu-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.nav-links-mobile {
  padding: 0.5rem;
  border-top: 1px solid var(--color-border);
}

.nav-link-mobile {
  display: block;
  padding: 0.75rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.nav-link-mobile:hover {
  background-color: var(--color-bg-tertiary);
  color: white;
}

.nav-link-mobile.active {
  background-color: var(--color-accent);
  color: white;
}

</style>
