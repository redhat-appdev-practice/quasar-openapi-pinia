<template>
  <div class="flex q-pa-md">
    <div class="full-width row inline no-wrap justify-start items-start content-start header">
      <div class="col-1"></div>
      <div class="col-3">Title</div>
      <div class="col-7">Description</div>
      <div class="col-1" style="text-align: center;"><q-icon name="check" color="positive" size="md" /></div>
    </div>
    <div v-for="todo in todoList" :key="todo.id" class="datatable full-width row inline no-wrap justify-start items-start content-start">
      <div class="col-1">
        <div class="row">
          <q-btn padding="0.5rem 0rem 0rem 0.8rem" flat dense icon="edit" size="md" />
        </div>
      </div>
      <div class="col-3">{{ todo.title }}</div>
      <div class="col-7">{{ todo.description }}</div>
      <div class="col-1" style="text-align: center;"><q-checkbox v-model="checkbox" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { todoStore } from "@/stores/TodoStore"
import { computed, defineComponent, ref } from "vue";

export default defineComponent(() => {
  const todos = todoStore();

  todos.loadTodos();

  return {
    todoList: computed(() => todos.todoList),
    checkbox: ref(false)
  }
})
</script>
<style lang="sass">
.header
  font-size: 1.2rem
  font-weight: 800
.datatable:nth-child(even)
  background-color: rgba(0,0,0,0.3)
</style>