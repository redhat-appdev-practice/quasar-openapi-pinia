import { Todo } from '@/sdk';
import { defineStore } from 'pinia';

export interface TodoState {
    todos: Todo[]
    loading: string[]
}

export const initState = (): TodoState => ({
    todos: [],
    loading: [],
});

export const todoStore = defineStore('todos', {
    state: initState,

    getters: {
        todoList: (state) => state?.todos,
        isLoading: (state) => (state.loading.length > 0),
    },

    actions: {
        async loadTodos() {
            this.pushLoading('loadTodos');
            try {
                const { data } = await this.todoApi.getAllTodos();
                this.updateTodos(data);
            } catch (err) {
                // Do something with the error?
            }
        },
        updateTodos(todos: Todo[]) {
            this.popLoading('loadTodos');
            this.todos = todos;
        },
        pushLoading(callSite: string) {
            this.loading.push(callSite);
        },
        popLoading(callSite: string) {
            const indexOf = this.loading.indexOf(callSite);
            this.loading.splice(indexOf, 1);
        }
    }
});