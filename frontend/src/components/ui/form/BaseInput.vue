<template>
  <div class="form-group">
    <label
      :for="id"
      class="form-label"
    >
      {{ label }}
      <span v-if="required" class="text-accent">*</span>
    </label>

    <input
      :id="id"
      :name="name || id"
      :type="type"
      class="form-input"
      :class="{ error: !!error }"
      :value="modelValue"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="describedBy"
      @input="onInput"
    />

    <p v-if="hint" :id="hintId" class="form-hint">
      {{ hint }}
    </p>

    <span
      v-if="error"
      :id="errorId"
      class="form-error"
      role="alert"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BaseInputProps } from '../../../types';

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const errorId = computed(() => (props.error ? `${props.id}-error` : undefined));
const hintId = computed(() => (props.hint ? `${props.id}-hint` : undefined));

const describedBy = computed(() => {
  const ids: string[] = [];
  if (hintId.value) ids.push(hintId.value);
  if (errorId.value) ids.push(errorId.value);
  return ids.join(' ') || undefined;
});
</script>
