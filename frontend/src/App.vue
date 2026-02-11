<template>
  <div>
    <a href="#main-content" class="sr-only">
      Skip to main content
    </a>

    <header>
      <AppNavbar />
    </header>

    <main id="main-content">
      <RouterView />
    </main>

    <footer>
      <AppFooter/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppNavbar from './components/layout/AppNavbar.vue';

</script>
