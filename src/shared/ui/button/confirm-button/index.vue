<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'custom-button',
      `custom-button--${color}`,
      `custom-button--${size}`,
      { 'custom-button--rounded': rounded },
      { 'custom-button--outlined': outlined },
    ]"
    @click.prevent="$emit('click')"
  >
    <div
      :class="[
        'custom-button__content',
        { 'custom-button--largeLabel': size === 'large' },
      ]"
    >
      {{ label }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { Props } from "./types";
defineEmits<{
  click: [];
}>();
withDefaults(defineProps<Props>(), {
  type: "button",
  label: "button",
  color: "primary",
  disabled: false,
  rounded: true,
  outlined: false,
  size: "normal",
});
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.custom-button {
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  height: 40px;

  border: none;
  width: max-content;
  &__content {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    @media (min-width: @TV) {
      font-weight: 600;
      font-size: 20px;
    }
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &--primary {
    background: @blue;
    border: 1px solid @blue;
    &:enabled:hover {
      background: @blue-hover;
    }
  }
  &--gray {
    background: @gray-dark;
    border: 1px solid @gray-dark;
    &:enabled:hover {
      background: @gray-dark-hover;
    }
  }
  &--warning {
    background: @warning;
    border: 1px solid @warning;
    &:enabled:hover {
      background: @warning-hover;
    }
  }
  &--danger {
    background: @error;
    border: 1px solid @error;
    &:enabled:hover {
      background: @error-hover;
    }
  }
  &--rounded {
    border-radius: 10px;
  }
  &--outlined {
    background-color: transparent;

    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &--large {
    padding: 15px 40px;
    height: 48px;
    @media (min-width: @TV) {
      padding: 20px 50px;
      height: 58px;
    }
  }
  &--largeLabel {
    font-size: 18px;
    line-height: 17px;
    @media (min-width: @TV) {
      font-weight: 600;
      font-size: 24px;
    }
  }
  &--normal {
    padding: 8px 16px;
    height: 40px;

    @media (min-width: @TV) {
      padding: 15px 40px;
      height: 48px;
    }
  }
}
</style>
