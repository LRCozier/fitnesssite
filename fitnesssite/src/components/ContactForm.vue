<template>
  <form class="contact-form" @submit.prevent="onSubmit">
    <!-- Name -->
    <BaseInput
      v-model="form.name"
      id="name"
      label="Name"
      name="name"
      autocomplete="name"
      required
      :error="errors.name"
    />

    <!-- Email -->
    <BaseInput
      v-model="form.email"
      id="email"
      label="Email"
      name="email"
      type="email"
      autocomplete="email"
      required
      :error="errors.email"
    />

    <!-- Services (checkbox group) -->
    <BaseCheckboxGroup
      v-model="form.services"
      name="services"
      legend="What are you interested in?"
      :options="serviceOptions"
      required
      :error="errors.services"
      hint="Select at least one service so I can better understand your goals."
    />

    <!-- Message -->
    <BaseTextarea
      v-model="form.message"
      id="message"
      label="Tell me about your goals"
      name="message"
      rows?=6
      required
      :error="errors.message"
      hint="Share as much detail as you like about your training background and goals."
    />

    <!-- Status text -->
    <p v-if="statusMessage" :class="statusClass">
      {{ statusMessage }}
    </p>

    <!-- Submit -->
    <BaseButton
      :label="isSubmitting ? 'Sending...' : 'Submit'"
      type="submit"
      variant="primary"
      size="lg"
      :disabled="isSubmitting || !isEmailJSReady"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import emailjs from '@emailjs/browser';

import BaseInput from './ui/form/BaseInput.vue';
import BaseTextarea from './ui/form/BaseTextArea.vue';
import BaseCheckboxGroup from './ui/form/BaseChecboxGroups.vue';
import BaseButton from './ui/BaseButton.vue';

import type { FormErrors, CheckboxOption } from '../types';
import { getEmailJSConfig, isEmailJSConfigured } from '../lib/emailjs-config';

const form = reactive({
  name: '',
  email: '',
  message: '',
  services: [] as string[],
});

const errors = reactive<FormErrors>({
  name: '',
  email: '',
  message: '',
  services: '',
});

const isSubmitting = ref(false);
const statusMessage = ref('');
const statusType = ref<'success' | 'error' | ''>('');

const serviceOptions: CheckboxOption[] = [
  {
    value: '1on1',
    label: '1-on-1 Personal Training',
    description: 'Focused, personalised coaching in person.',
  },
  {
    value: 'partner',
    label: 'Partner (2-on-1) Training',
    description: 'Train with a partner or friend for shared motivation.',
  },
  {
    value: 'online',
    label: 'Online Consultation & Programming',
    description: 'Initial video consultation and bespoke training programme composed.',
  },
];

const emailConfig = getEmailJSConfig();
const isEmailJSReady = computed(() => isEmailJSConfigured());

const statusClass = computed(() => {
  if (statusType.value === 'success') return 'form-status-success';
  if (statusType.value === 'error') return 'form-status-error';
  return '';
});

const validate = (): boolean => {
  errors.name = '';
  errors.email = '';
  errors.message = '';
  errors.services = '';

  let valid = true;

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.';
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
    valid = false;
  }

  if (!form.services.length) {
    errors.services = 'Please select at least one service.';
    valid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell me a bit about your goals.';
    valid = false;
  }

  return valid;
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  form.services = [];
};

const onSubmit = async () => {
  statusMessage.value = '';
  statusType.value = '';

  if (!isEmailJSReady.value) {
    statusMessage.value = 'Email service is not configured. Please try again later.';
    statusType.value = 'error';
    return;
  }

  if (!validate()) {
    statusMessage.value = 'Please fix the highlighted fields.';
    statusType.value = 'error';
    return;
  }

  isSubmitting.value = true;

  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        message: form.message,
        services: form.services.join(', '),
      },
      emailConfig.publicKey
    );

    statusMessage.value = 'Thanks for getting in touch. I will get back to you soon.';
    statusType.value = 'success';
    resetForm();
  } catch (error) {
    console.error('EmailJS error:', error);
    statusMessage.value = 'Something went wrong sending your message. Please try again.';
    statusType.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
