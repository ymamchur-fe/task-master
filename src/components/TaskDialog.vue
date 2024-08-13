<template>
  <BaseDialog ref="taskDialog">
    <template #default>
      <form class="task-dialog__form" @submit.prevent="handleSubmit">
        <base-input v-model="form.title" label="Title" />
        <base-input v-model="form.description" label="Description" />
        <base-input v-model="form.dueDate" label="Due date" type="date" />
        <base-select v-model="form.status" label="Status" />
      </form>
    </template>
    <template #actions>
      <button type="button" @click="handleSubmit">{{ submitButtonText }}</button>
      <button type="button" @click="closeDialog">Cancel</button>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import BaseDialog from '@/components/common/BaseDialog.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import { Task, EmptyTask } from '@/types.ts';

const taskStore = useTaskStore();

const taskDialog = ref();
const form = reactive<Task | EmptyTask>({
  title: '',
  description: '',
  dueDate: '',
  status: 'pending',
});

const submitButtonText = computed(() => ('id' in form ? 'Update Task' : 'Save Task'));

const openDialog = (task?: Task) => {
  if (task) {
    Object.assign(form, task);
  } else {
    resetForm();
  }
  taskDialog.value?.open();
};

const closeDialog = () => {
  taskDialog.value?.close();
  resetForm();
};

const resetForm = () => {
  Object.assign(form, {
    title: '',
    description: '',
    dueDate: new Date().toISOString(),
    status: 'pending',
  } as EmptyTask);
};

const handleSubmit = () => {
  if ('id' in form) {
    taskStore.editTask(form as Task);
  } else {
    taskStore.addTask(form as EmptyTask);
  }
  closeDialog();
};

defineExpose({
  openDialog,
  closeDialog,
});
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.task-dialog__form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
