// Type definition for an individual task
export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status: TaskStatus;
}

// Type definition for an empty task
export type EmptyTask = Omit<Task, 'id'>;

// Enum-like type for task statuses
export type TaskStatus = 'pending' | 'in progress' | 'completed';
