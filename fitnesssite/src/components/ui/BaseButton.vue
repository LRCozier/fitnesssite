<template>
  <component
    :is="componentTag"
    v-bind="componentAttrs"
    :class="buttonClasses"
    :aria-disabled="disabled ? 'true' : undefined"
    :disabled="isNativeButton ? disabled : undefined"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { BaseButtonProps } from '../../types';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
});

const isLink = computed(() => !!props.to || !!props.href);
const isNativeButton = computed(() => !isLink.value);

const componentTag = computed(() => {
  if (props.to) return RouterLink;
  if (props.href) return 'a';
  return 'button';
});

const componentAttrs = computed(() => {
  if (props.to) return { to: props.to, tabindex: props.disabled ? -1 : 0 };
  if (props.href) {
    return {
      href: props.href,
      rel: 'noopener noreferrer',
      tabindex: props.disabled ? -1 : 0,
    };
  }
  return { type: props.type };
});

const buttonClasses = computed(() => {
  const base = ['btn'];

  if (props.variant === 'primary') base.push('btn-primary');
  if (props.size === 'lg') base.push('btn-lg');

  if (props.class) base.push(props.class as any);

  return base;
});
</script>
