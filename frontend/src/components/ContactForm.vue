<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <!-- Name -->
    <BaseInput
      id="name"
      label="Name"
      name="name"
      type="text"
      autocomplete="name"
      v-model="form.name"
      :error="errors.name"
      placeholder="Your name"
      required
    />

    <!-- Email -->
    <BaseInput
      id="email"
      label="Email"
      name="email"
      type="email"
      autocomplete="email"
      v-model="form.email"
      :error="errors.email"
      placeholder="you@example.com"
      required
    />

    <!-- Phone -->
    <BaseInput
      id="phone"
      label="Phone number"
      name="phone"
      type="tel"
      autocomplete="tel"
      v-model="form.phone"
      :error="errors.phone"
      placeholder="e.g. +44 7700 900123"
      required
    />

    <!-- Services -->
    <BaseCheckboxGroups
      name="services"
      legend="What are you interested in?"
      v-model="form.services"
      :options="serviceOptions"
      :error="errors.services"
      hint="You can select more than one option."
      :required="true"
    />

    <!-- Message -->
    <BaseTextArea
      id="message"
      label="Tell me about your goals"
      name="message"
      v-model="form.message"
      :rows="6"
      :error="errors.message"
      hint="Include relevant history, injuries, or what you'd like to achieve."
      required
    />

    <!-- reCAPTCHA -->
    <div class="form-group">
      <div id="recaptcha-container" class="recaptcha-container"></div>
      <span v-if="errors.captcha" class="form-error" role="alert">
        {{ errors.captcha }}
      </span>
    </div>

    <!-- Submit -->
    <div class="form-group">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">Sending…</span>
        <span v-else>Send Message</span>
      </BaseButton>
    </div>

    <!-- Status -->
    <p
      v-if="statusMessage"
      :class="{
        'form-status-success': statusType === 'success',
        'form-status-error': statusType === 'error'
      }"
    >
      {{ statusMessage }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import BaseInput from './ui/form/BaseInput.vue';
import BaseTextArea from './ui/form/BaseTextArea.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseCheckboxGroups from './ui/form/BaseCheckboxGroups.vue';

import type { FormErrors } from '../types';

type CheckboxOption = {
  value: string;
  label: string;
  description?: string;
};

const serviceOptions: CheckboxOption[] = [
  {
    value: '1-to-1 Personal Training',
    label: '1-to-1 Personal Training',
    description:
      'Private strength coaching built around your goals, confidence, and movement.',
  },
  {
    value: '2-to-1 Training',
    label: '2-to-1 Small Group Training',
    description:
      'Train with a partner or friend for shared motivation and a supportive environment.',
  },
  {
    value: 'Online Consultations & Programming',
    label: 'Online Consultations & Programming',
    description:
      'Remote guidance, tailored programming, and accountability for independent training.',
  },
];

const form = reactive({
  name: '',
  email: '',
  phone: '',
  services: [] as string[],
  message: '',
});

const errors = reactive<FormErrors>({});
const isSubmitting = ref(false);
const statusMessage = ref('');
const statusType = ref<'success' | 'error' | ''>('');

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

const phoneRegex = /^[0-9+().\-\s]{7,20}$/;

const validateForm = (): boolean => {
  let valid = true;

  errors.name = '';
  errors.email = '';
  errors.phone = '';
  errors.services = '';
  errors.message = '';

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

  if (!form.phone.trim()) {
    errors.phone = 'Please provide a phone number so I can contact you.';
    valid = false;
  } else if (!phoneRegex.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
    valid = false;
  }

  if (!form.services.length) {
    errors.services = 'Please select at least one service you’re interested in.';
    valid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Please add a brief message about your goals or situation.';
    valid = false;
  }

  return valid;
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.phone = '';
  form.services = [];
  form.message = '';

  errors.name = '';
  errors.email = '';
  errors.phone = '';
  errors.services = '';
  errors.message = '';
  errors.captcha = '';

  const w = window as any;
  if (w.grecaptcha && typeof w.grecaptcha.reset === 'function') {
    w.grecaptcha.reset();
  }
};

const handleSubmit = async () => {
  const w = window as any;

  const token =
    w.grecaptcha && typeof w.grecaptcha.getResponse === 'function'
      ? w.grecaptcha.getResponse()
      : '';

  errors.captcha = '';

  if (!token) {
    errors.captcha = 'Please confirm you are not a robot.';
    return;
  }

  if (!validateForm()) return;

  try {
    isSubmitting.value = true;
    statusMessage.value = '';
    statusType.value = '';

   const payload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    services: form.services.join(', '),
    message: form.message,
    captchaToken: token,
  };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Submission failed');
    }

    statusMessage.value =
      'Thanks for your message — I’ll get back to you as soon as possible.';
    statusType.value = 'success';

    resetForm();
  } catch (err) {
    console.error(err);

    statusMessage.value =
      'Something went wrong while sending your message. Please try again.';
    statusType.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};



//reCAPTCHA widget
const initRecaptchaWidget = () => {
  if (!recaptchaSiteKey) {
    console.warn('[reCAPTCHA] Missing VITE_RECAPTCHA_SITE_KEY – widget will not be rendered.');
    return;
  }

  const w = window as any;
  if (!w.grecaptcha || typeof w.grecaptcha.render !== 'function') {
    return;
  }

  const container = document.getElementById('recaptcha-container');
  if (!container) return;

  w.grecaptcha.render(container, {
    sitekey: recaptchaSiteKey,
    callback: (token: string) => {
      console.log('[reCAPTCHA] Token received (callback):', token);
      errors.captcha = '';
    },
    'expired-callback': () => {
      console.log('[reCAPTCHA] Token expired');
      errors.captcha = 'CAPTCHA expired, please tick the box again.';
    },
  });
};

onMounted(() => {
  const w = window as any;

  if (w.grecaptcha && typeof w.grecaptcha.render === 'function') {
    initRecaptchaWidget();
  } else {
    const script = document.querySelector<HTMLScriptElement>(
      'script[src*="https://www.google.com/recaptcha/api.js"]'
    );

    if (script) {
      script.addEventListener(
        'load',
        () => {
          initRecaptchaWidget();
        },
        { once: true }
      );
    }
  }
});
</script>
