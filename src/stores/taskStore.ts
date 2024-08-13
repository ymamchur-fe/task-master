import { defineStore } from 'pinia';
import { Task } from '@/types';

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [] as Task[],
    }),
    actions: {
        // Action to add a new task
        addTask(task: Omit<Task, 'id'>) {
            const id = Date.now();
            this.tasks.push({ ...task, id });
        },

        // Action to edit an existing task
        editTask(updatedTask: Task) {
            const task = this.tasks.find(task => task.id === updatedTask.id);
            if (task) {
                Object.assign(task, updatedTask);
            } else {
                console.warn(`Task with id ${updatedTask.id} not found`);
            }
        }
    },
});
