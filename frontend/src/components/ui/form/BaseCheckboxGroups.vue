<template>
  <fieldset class="form-group">
    <legend class="form-label">
      {{ legend }}
      <span v-if="required" class="text-accent">*</span>
    </legend>

    <p v-if="hint" :id="hintId" class="form-hint">
      {{ hint }}
    </p>

    <div class="services-checkbox-group">
      <label
        v-for="option in options"
        :key="option.value"
        class="service-checkbox"
      >
        <input
          class="service-checkbox-input"
          type="checkbox"
          :name="name"
          :value="option.value"
          :checked="modelValue.includes(option.value)"
          :aria-describedby="describedBy"
          @change="onChange($event, option.value)"
        />

        <div class="service-checkbox-label">
          <span class="service-checkbox-title">{{ option.label }}</span>
          <span
            v-if="option.description"
            class="service-checkbox-description"
          >
            {{ option.description }}
          </span>
        </div>
      </label>
    </div>

    <span
      v-if="error"
      :id="errorId"
      class="form-error"
      role="alert"
    >
      {{ error }}
    </span>
  </fieldset>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BaseCheckboxGroupProps } from '../../../types';

const props = withDefaults(defineProps<BaseCheckboxGroupProps>(), {
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const onChange = (event: Event, value: string) => {
  const target = event.target as HTMLInputElement;
  const current = [...props.modelValue];

  if (target.checked) {
    if (!current.includes(value)) current.push(value);
  } else {
    const index = current.indexOf(value);
    if (index !== -1) current.splice(index, 1);
  }

  emit('update:modelValue', current);
};

const errorId = computed(() => (props.error ? `${props.name}-error` : undefined));
const hintId = computed(() => (props.hint ? `${props.name}-hint` : undefined));

const describedBy = computed(() => {
  const ids: string[] = [];
  if (hintId.value) ids.push(hintId.value);
  if (errorId.value) ids.push(errorId.value);
  return ids.join(' ') || undefined;
});
</script>
