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

