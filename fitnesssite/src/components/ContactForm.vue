<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <!-- Name -->
    <div class="form-group">
      <label class="form-label" for="name">Name</label>
      <input
        id="name"
        v-model.trim="form.name"
        type="text"
        class="form-input"
        :class="{ error: !!errors.name }"
        name="name"
        autocomplete="name"
        required
        :aria-invalid="!!errors.name"
        :aria-describedby="errors.name ? 'name-error' : undefined"
      />
      <span v-if="errors.name" id="name-error" class="form-error">
        {{ errors.name }}
      </span>
    </div>

    <!-- Email -->
    <div class="form-group">
      <label class="form-label" for="email">Email</label>
      <input
        id="email"
        v-model.trim="form.email"
        type="email"
        class="form-input"
        :class="{ error: !!errors.email }"
        name="email"
        autocomplete="email"
        required
        :aria-invalid="!!errors.email"
        :aria-describedby="errors.email ? 'email-error' : undefined"
      />
      <span v-if="errors.email" id="email-error" class="form-error">
        {{ errors.email }}
      </span>
    </div>

    <!-- Services checkboxes -->
    <fieldset class="form-group">
      <legend class="form-label">What are you interested in?</legend>
      <p class="form-hint">
        Select all that apply.
      </p>

      <div class="services-checkbox-group">
        <label class="service-checkbox">
          <input
            class="service-checkbox-input"
            type="checkbox"
            value="1-on-1 Personal Training"
            v-model="form.services"
          />
          <div class="service-checkbox-label">
            <span class="service-checkbox-title">1-on-1 Personal Training</span>
            <span class="service-checkbox-description">
              Individual coaching focused entirely on your goals and movement.
            </span>
          </div>
        </label>

        <label class="service-checkbox">
          <input
            class="service-checkbox-input"
            type="checkbox"
            value="Partner Training"
            v-model="form.services"
          />
          <div class="service-checkbox-label">
            <span class="service-checkbox-title">Partner / 2-on-1 Training</span>
            <span class="service-checkbox-description">
              Train with a partner for shared accountability and motivation.
            </span>
          </div>
        </label>

        <label class="service-checkbox">
          <input
            class="service-checkbox-input"
            type="checkbox"
            value="Online Coaching"
            v-model="form.services"
          />
          <div class="service-checkbox-label">
            <span class="service-checkbox-title">Online Coaching &amp; Programming</span>
            <span class="service-checkbox-description">
              Remote coaching with structured programming and regular check-ins.
            </span>
          </div>
        </label>
      </div>

      <span v-if="errors.services" class="form-error">
        {{ errors.services }}
      </span>
    </fieldset>

    <!-- Message -->
    <div class="form-group">
      <label class="form-label" for="message">Tell me a bit about your goals</label>
      <textarea
        id="message"
        v-model.trim="form.message"
        class="form-textarea"
        :class="{ error: !!errors.message }"
        name="message"
        rows="5"
        required
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
      ></textarea>
      <span v-if="errors.message" id="message-error" class="form-error">
        {{ errors.message }}
      </span>
    </div>

    <!-- Status messages -->
    <p v-if="status === 'success'" class="form-status-success">
      Thank you – your message has been sent. I will get back to you as soon as possible.
    </p>
    <p v-else-if="status === 'error'" class="form-status-error">
      {{ statusMessage || 'Something went wrong sending your message. Please try again later.' }}
    </p>

    <!-- Submit -->
    <button
      type="submit"
      class="btn btn-primary btn-lg"
      :disabled="submitting || !emailJsReady"
    >
      <span v-if="submitting">Sending...</span>
      <span v-else-if="!emailJsReady">Email not configured</span>
      <span v-else>Send message</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';
import type { FormErrors } from '@/types';
import { getEmailJSConfig, isEmailJSConfigured } from '@/lib/emailjs-config';

const form = reactive({
  name: '',
  email: '',
  message: '',
  services: [] as string[],
});

const errors = ref<FormErrors>({});
const status = ref<'idle' | 'success' | 'error'>('idle');
const statusMessage = ref('');
const submitting = ref(false);

const emailJsReady = isEmailJSConfigured();
const emailConfig = emailJsReady ? getEmailJSConfig() : null;

const validate = (): boolean => {
  const newErrors: FormErrors = {};

  if (!form.name) {
    newErrors.name = 'Please enter your name.';
  }

  if (!form.email) {
    newErrors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Please enter a valid email address.';
  }

  if (!form.message) {
    newErrors.message = 'Please tell me a bit about your goals.';
  }

  if (!form.services || form.services.length === 0) {
    newErrors.services = 'Please select at least one service you are interested in.';
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  form.services = [];
};

const handleSubmit = async () => {
  status.value = 'idle';
  statusMessage.value = '';

  if (!validate()) {
    return;
  }

  if (!emailJsReady || !emailConfig) {
    status.value = 'error';
    statusMessage.value =
      'Email is not configured correctly on the server. Please try again later or contact me directly.';
    return;
  }

  submitting.value = true;

  try {
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      services: form.services.join(', '),
    };

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    status.value = 'success';
    resetForm();
  } catch (err) {
    console.error('EmailJS error', err);
    status.value = 'error';
    statusMessage.value =
      'There was a problem sending your message. Please try again or email me directly.';
  } finally {
    submitting.value = false;
  }
};
</script>
