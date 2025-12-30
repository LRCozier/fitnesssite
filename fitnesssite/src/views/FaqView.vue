<template>
  <section class="section section-dark">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">FREQUENTLY ASKED QUESTIONS</h1>
        <p class="section-text">
          A quick overview of how coaching works, what to expect, and whether LAC Fitness is right for you.
        </p>
      </div>

      <FaqAccordion :items="faqItems" :singleOpen="true" />

      <div class="section-center" style="margin-top: 3rem;">
        <p class="section-text">
          Still not sure, or have a question that is not listed here?
        </p>
        <BaseButton
          variant="primary"
          size="lg"
          to="/contact"
        >
          Ask a Question
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqAccordion from '../components/ui/FaqAcordion.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import { FAQ_ITEMS } from '../lib/constants';

const faqItems = FAQ_ITEMS;
</script>
