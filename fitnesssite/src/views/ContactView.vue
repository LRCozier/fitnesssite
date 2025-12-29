<template>
  <section class="section section-dark animate-fade-in">
    <div class="container">
      <div class="text-center">
        <h1 class="page-title">GET IN TOUCH</h1>
        <p class="section-text">
          Ready to commit to real strength? Fill out the form below to book a free consultation.
        </p>
      </div>

      <div class="contact-form-container">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import ContactForm from '@/components/ui/ContactForm.vue';

useHead({
  title: 'Get In Touch',
  meta: [
    {
      name: 'description',
      content:
        'Contact LAC Fitness to book your free consultation and start your strength and conditioning journey.',
    },
  ],
});
</script>
