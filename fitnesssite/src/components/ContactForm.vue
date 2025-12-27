<script setup>
import { ref, computed } from 'vue';
import emailjs from '@emailjs/browser';

const VALIDATION_PATTERNS = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,1000}$/,
};

const SERVICE_OPTIONS = [
  { id: 'one-on-one', label: '1-on-1 Personal Training', description: 'Individualised coaching with complete focus on your goals' },
  { id: 'group-training', label: 'Group Personal Training', description: 'Train with partners or small groups for motivation and cost savings' },
  { id: 'online-coaching', label: 'Online Coaching', description: 'Remote programming and coaching with weekly check-ins' },
  { id: 'one-off-consultation', label: 'One-off Consultation', description: 'Single session for form check, program review, or specific advice' }
];

const status = ref('idle');
const errors = ref({});
const selectedServices = ref([]);
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isConfigured = isEmailJSConfigured();
const emailjsConfig = isConfigured ? getEmailJSConfig() : null;

const sanitize = (input) => {
  return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
};

const validateForm = () => {
  const newErrors = {};
  if (!formData.value.name || !VALIDATION_PATTERNS.name.test(formData.value.name)) {
    newErrors.name = 'Please enter a valid name (2-50 characters)';
  }
  if (!formData.value.email || !VALIDATION_PATTERNS.email.test(formData.value.email)) {
    newErrors.email = 'Please enter a valid email address';
  }
  if (!formData.value.message || !VALIDATION_PATTERNS.message.test(formData.value.message)) {
    newErrors.message = 'Please enter a message between 10 and 1000 characters';
  }
  if (selectedServices.value.length === 0) {
    newErrors.services = 'Please select at least one service';
  }
  return newErrors;
};

const handleSubmit = async () => {
  status.value = 'sending';
  errors.value = {};

  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
    errors.value = formErrors;
    status.value = 'idle';
    return;
  }

  try {
    const selectedLabels = SERVICE_OPTIONS
      .filter(s => selectedServices.value.includes(s.id))
      .map(s => s.label);

    const templateParams = {
      name: sanitize(formData.value.name),
      email: sanitize(formData.value.email),
      message: sanitize(formData.value.message),
      services: selectedLabels.join(', '),
      services_count: selectedServices.value.length.toString(),
      timestamp: new Date().toISOString(),
    };

    emailjs.init(emailjsConfig.publicKey);
    const result = await emailjs.send(
      emailjsConfig.serviceId, 
      emailjsConfig.templateId, 
      templateParams, 
      emailjsConfig.publicKey
    );

    if (result.status === 200) {
      formData.value = { name: '', email: '', message: '' };
      selectedServices.value = [];
      status.value = 'success';
    } else {
      throw new Error(`EmailJS Error: ${result.status}`);
    }
  } catch (error) {
    console.error('Submission error:', error);
    status.value = 'error';
  }
};
</script>

<template>
  <div v-if="!isConfigured" class="contact-form-container">
    <div class="text-center">
      <p class="form-status-error">Contact form is not configured.</p>
    </div>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="contact-form" novalidate>
    <div class="form-group">
      <label for="name" class="form-label">Full Name *</label>
      <input 
        v-model="formData.name"
        type="text" 
        id="name" 
        class="form-input" 
        :class="{ 'error': errors.name }" 
        maxlength="50"
      />
      <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
    </div>

    <div class="form-group">
      <label for="email" class="form-label">Email Address *</label>
      <input 
        v-model="formData.email"
        id="email" 
        type="email" 
        class="form-input" 
        :class="{ 'error': errors.email }" 
        maxlength="100"
      />
      <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <fieldset>
        <legend class="form-label">Services I'm Interested In *</legend>
        <p class="form-hint">Select all that apply</p>
        <div class="services-checkbox-group">
          <div v-for="service in SERVICE_OPTIONS" :key="service.id" class="service-checkbox">
            <input 
              v-model="selectedServices"
              type="checkbox" 
              :id="`service-${service.id}`" 
              :value="service.id"
              class="service-checkbox-input" 
            />
            <label :for="`service-${service.id}`" class="service-checkbox-label">
              <span class="service-checkbox-title">{{ service.label }}</span>
              <span class="service-checkbox-description">{{ service.description }}</span>
            </label>
          </div>
        </div>
        <span v-if="errors.services" class="form-error">{{ errors.services }}</span>
      </fieldset>
    </div>

    <div class="form-group">
      <label for="message" class="form-label">Message *</label>
      <textarea 
        v-model="formData.message"
        id="message" 
        rows="4" 
        class="form-textarea" 
        :class="{ 'error': errors.message }" 
        maxlength="1000" 
        placeholder="Tell me about your fitness goals..."
      />
      <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
    </div>

    <div>
      <button 
        type="submit" 
        :disabled="status === 'sending'" 
        class="btn btn-primary"
      >
        {{ status === 'sending' ? 'SENDING...' : 'START YOUR TRANSFORMATION' }}
      </button>
    </div>

    <p v-if="status === 'success'" class="form-status-success">
      Thank you! Your message has been sent successfully.
    </p>
    <p v-if="status === 'error'" class="form-status-error">
      Sorry, there was an error sending your message.
    </p>
  </form>
</template>