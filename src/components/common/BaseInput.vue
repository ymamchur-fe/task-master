<template>
  <div class="base-input">
    <label :for="label" class="base-input__label">{{ label }}</label>
    <input :id="label" v-model="model" :type="type" class="base-input__field" />
  </div>
</template>

<script setup lang="ts">
import { defineModel, defineProps } from 'vue';

interface Props {
  label: string;
  modelValue: string;
  type?: string;
}

defineProps<Props>();
const model = defineModel();
</script>

<style scoped lang="scss">

.base-input {
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
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: $primary-color;
      box-shadow: 0 0 5px $focus-shadow-color;
    }

    &::placeholder {
      color: $placeholder-color;
      opacity: 0.6;
    }

    &:hover {
      border-color: $secondary-color;
    }
  }
}
</style>
