<template>
  <section class="section section-dark">
    <div class="container container-sm">
      <header class="text-center">
        <h1 class="page-title">FREQUENTLY ASKED QUESTIONS</h1>
        <p class="section-text">
          Straight answers, no fluff. If you still have questions, head to the
          <RouterLink class="faq-link" to="/contact">contact page</RouterLink>.
        </p>
      </header>

      <section class="faq-group" aria-labelledby="faq-basics">
        <h2 id="faq-basics" class="faq-group-title">🏋️ The Basics</h2>
        <FaqAcordion :items="basics" :singleOpen="true" />
      </section>

      <section class="faq-group" aria-labelledby="faq-fine-print">
        <h2 id="faq-fine-print" class="faq-group-title">⚖️ The “Fine Print” Made Easy</h2>
        <FaqAcordion :items="finePrint" :singleOpen="true" />
      </section>

      <section class="faq-group" aria-labelledby="faq-personal-touch">
        <h2 id="faq-personal-touch" class="faq-group-title">🤝 The Personal Touch</h2>
        <FaqAcordion :items="personalTouch" :singleOpen="true" />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { FAQ_ITEMS } from '../lib/faqs';
import FaqAcordion from '../components/ui/FaqAcordion.vue';

const basics = computed(() => FAQ_ITEMS.filter((i) => i.category === 'The Basics'));
const finePrint = computed(() => FAQ_ITEMS.filter((i) => i.category === 'Fine Print'));
const personalTouch = computed(() => FAQ_ITEMS.filter((i) => i.category === 'Personal Touch'));
</script>
