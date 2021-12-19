<template>
  <div class="flex q-pa-md">
    <div class="full-width row inline no-wrap justify-start items-start content-start">
      <div class="col-4 header">Title</div>
      <div class="col-4 header">Description</div>
    </div>
    <div v-for="todo in todoList" :key="todo.id" class="full-width row inline no-wrap justify-start items-start content-start">
      <div class="col-4">{{ todo.title }}</div>
      <div class="col-4">{{ todo.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { todoStore } from "@/stores/TodoStore"
import { computed, defineComponent } from "vue";

export default defineComponent(() => {
  const todos = todoStore();

  todos.loadTodos();

  return {
    todoList: computed(() => todos.todoList)
  }
})
</script>
<style lang="sass">
.header
  font-size: 1.2rem
  font-weight: 800
</style>