<template>
  <dialog ref="dialog" class="base-dialog">
    <div class="base-dialog__content">
      <!-- Slot for dialog body content -->
      <slot></slot>
    </div>
    <div class="base-dialog__actions">
      <!-- Slot for custom actions -->
      <slot name="actions"></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref<HTMLDialogElement | null>(null);

const open = () => {
  dialog.value?.showModal();
};

const close = () => {
  dialog.value?.close();
};

defineExpose({ open, close });
</script>

<style scoped lang="scss">

.base-dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  background-color: $background-color;
  color: $text-color;

  &__content {
    margin-bottom: 20px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
