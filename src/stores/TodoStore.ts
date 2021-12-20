import { Todo } from '@/sdk';
import { defineStore } from 'pinia';

export interface TodoState {
    todos: Todo[],
}

export const initState = (): TodoState => ({
    todos: [],
});

export const todoStore = defineStore('todos', {
    state: initState,

    getters: {
        todoList: (state) => state?.todos,
    },

    actions: {
        async loadTodos(notify: (message: string, type: string) => void, increment: (increment?: number) => void, stop: () => void) {
            increment(10);
            const axiosConfig = {
                onUploadProgress: (progressEvent: ProgressEvent) => {
                    increment(progressEvent.loaded * 80);
                }
            }
            increment(20);
            try {
                const { data } = await this.todoApi.getAllTodos(axiosConfig);
                this.updateTodos(data);
                stop();
            } catch (err) {
                notify('An error occurred loading Todo items from the API', 'negative');
            }
            increment(100);
        },

        updateTodos(todos: Todo[]) {
            this.todos = todos;
        }
    }
});