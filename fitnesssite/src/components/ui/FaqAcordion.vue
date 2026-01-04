<template>
  <section class="faq-accordion" aria-label="Frequently asked questions">
    <div v-for="item in items" :key="item.id" class="faq-item">
      <h3 class="faq-question">
        <button
          type="button"
          class="faq-toggle"
          :id="`faq-header-${item.id}`"
          :aria-expanded="isOpen(item.id)"
          :aria-controls="`faq-panel-${item.id}`"
          @click="toggle(item.id)"
        >
          <span class="faq-toggle-text">
            {{ item.question }}
          </span>

          <span class="faq-toggle-icon" aria-hidden="true">
            {{ isOpen(item.id) ? '−' : '+' }}
          </span>
        </button>
      </h3>

      <div
        v-show="isOpen(item.id)"
        :id="`faq-panel-${item.id}`"
        class="faq-panel"
        role="region"
        :aria-labelledby="`faq-header-${item.id}`"
      >
      
        <p v-if="item.answer" class="faq-answer">
          {{ item.answer }}
        </p>

        <div
          v-else-if="item.answerHtml"
          class="faq-answer faq-answer--html"
          v-html="sanitizeHtml(item.answerHtml)"
        />

        <p v-else class="faq-answer">
          No answer available.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FAQItem } from '../../types';

const props = withDefaults(
  defineProps<{
    items: FAQItem[];
    singleOpen?: boolean;
  }>(),
  { singleOpen: true }
);

const openId = ref<string | null>(null);
const openIds = ref<Set<string>>(new Set());

const isOpen = (id: string) => (props.singleOpen ? openId.value === id : openIds.value.has(id));

const toggle = (id: string) => {
  if (props.singleOpen) {
    openId.value = openId.value === id ? null : id;
    return;
  }

  const set = new Set(openIds.value);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  openIds.value = set;
};

const sanitizeHtml = (html: string) => {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '');
};
</script>

<style scoped>
.faq-accordion {
  margin-top: 3rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-secondary);
}

.faq-item + .faq-item {
  border-top: 1px solid var(--color-border);
}

.faq-question {
  margin: 0;
}

.faq-toggle {
  width: 100%;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.faq-toggle:hover {
  background-color: var(--color-bg-tertiary);
}

.faq-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.faq-toggle-text {
  flex: 1;
  padding-right: 1rem;
}

.faq-toggle-icon {
  font-size: 1.5rem;
  width: 1.5rem;
  text-align: center;
}

.faq-panel {
  padding: 0 1.5rem 1.25rem;
}

.faq-answer {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.faq-answer--html :deep(p) {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.faq-answer--html :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
}
</style>
