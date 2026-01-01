<template>
  <section class="section section-dark">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">GET IN TOUCH</h1>
        <p class="section-text">
          Not sure which option is right for you? Use the form below to tell me about your goals, training
          history, and any concerns. I’ll help you decide what makes the most sense.
        </p>
      </div>

      <div class="contact-form-container">
        <ContactForm />
      </div>

      <div class="contact-faq-snippet">
        <h2 class="section-title text-center">COMMON QUESTIONS</h2>
        <p class="section-text">
          A few quick answers for people who are nervous about starting, worried about injuries, or unsure
          about commitment.
        </p>

        <FaqAcordion :items="faqSnippet" :singleOpen="true" />

        <p class="contact-faq-link">
          Want to read more? Visit the
          <RouterLink to="/faq" class="footer-link">full FAQ page</RouterLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ContactForm from '../components/ContactForm.vue';
import FaqAcordion from '../components/ui/FaqAcordion.vue';
import { FAQ_ITEMS } from '../lib/constants';

const faqSnippet = computed(() =>
  FAQ_ITEMS.filter((item) =>
    ['experience', 'injury', 'cancellations'].includes(item.id)
  )
);
</script>
