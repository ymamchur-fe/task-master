<template>
  <div class="base-select">
    <label :for="label" class="base-select__label">{{ label }}</label>
    <select :id="label" v-model="model" class="base-select__field">
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineModel, defineProps } from 'vue';

interface Props {
  label: string;
  modelValue: string;
}

defineProps<Props>();
const model = defineModel();
</script>

<style scoped lang="scss">

.base-select {
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  &__label {
    font-size: 1rem;
    color: $text-color;
    font-weight: 500;
    text-align: left;
  }

  &__field {
    padding: 10px 14px;
    font-size: 1rem;
    border: 2px solid $border-color;
    border-radius: 8px;
    background-color: $background-color;
    color: $text-color;
    appearance: none;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;

    /* Custom Arrow */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'%3E%3Cpath fill='white' d='M0 0l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 10px;

    /* Matching height with the input fields */
    height: 38px;

    &:focus {
      border-color: $primary-color;
      box-shadow: 0 0 5px $focus-shadow-color;
    }

    &:hover {
      border-color: $secondary-color;
    }
  }
}
</style>
