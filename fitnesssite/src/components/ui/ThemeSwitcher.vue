<template>
  <div class="theme-toggle-wrapper">
    <button
      class="theme-toggle"
      role="switch"
      :aria-checked="isLight ? 'true' : 'false'"
      aria-label="Toggle theme"
      @click="toggleTheme"
      type="button"
    >
      <span class="theme-toggle__track" aria-hidden="true">
        <span class="theme-toggle__icon" :class="{ active: isLight }" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="theme-toggle__svg" focusable="false">
            <path
              fill="currentColor"
              d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1 1-1h0a1 1 0 0 1-1 1ZM12 22a1 1 0 0 1 1-1h0a1 1 0 0 1-1 1ZM4 13a1 1 0 0 1-1-1h0a1 1 0 0 1 1 1Zm18 0a1 1 0 0 1-1-1h0a1 1 0 0 1 1 1ZM6.22 7.64a1 1 0 0 1-1.41 0h0a1 1 0 0 1 1.41 0Zm12.38 12.38a1 1 0 0 1-1.41 0h0a1 1 0 0 1 1.41 0ZM17.78 7.64a1 1 0 0 1 0-1.41h0a1 1 0 0 1 0 1.41ZM5.64 20.02a1 1 0 0 1 0-1.41h0a1 1 0 0 1 0 1.41Z"
            />
          </svg>
        </span>

       
        <span class="theme-toggle__icon" :class="{ active: !isLight }" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="theme-toggle__svg" focusable="false">
            <path
              fill="currentColor"
              d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
            />
          </svg>
        </span>
        <span class="theme-toggle__thumb" aria-hidden="true"></span>
      </span>

      
      <span class="theme-toggle__label">
        {{ isLight ? 'Light' : 'Dark' }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../../composables/useTheme';

const { isLight, toggleTheme } = useTheme();
</script>

