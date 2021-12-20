<template>
  <div class="flex q-pa-md" style="margin: 0;">
    <div :class="headerClasses">
      <div class="col-1" />
      <div class="col-2">
        <span>Title</span>
        <q-btn icon="refresh" dense flat @click="reload" />
      </div>
      <div class="col-grow">Description</div>
      <div class="col-2">Due</div>
      <div class="col-1" style="text-align: center;">
        <q-icon name="check" color="positive" size="md" />
      </div>
    </div>
    <q-scroll-area style="height: 82vh; width: 100vw;">
      <div v-for="todo in todoList" :key="todo.id" :class="rowClasses">
        <div class="col-1 cell">
          <q-btn padding="0.5rem 0rem 0rem 0.8rem" flat dense icon="edit" size="md" />
        </div>
        <div class="col-2 cell">{{ todo.title }}</div>
        <div class="col-grow cell">{{ todo.description }}</div>
        <div class="col-2 cell">{{ dateFormat(todo.due_date) }}</div>
        <div class="col-1" style="text-align: center;">
          <q-checkbox :model-value="isComplete(todo.completed)" />
        </div>
      </div>
    </q-scroll-area>
    <q-ajax-bar
      ref="progressBar"
      position="bottom"
      color="red-8"
      size="0.75rem"
      skip-hijack
    />
  </div>
</template>

<script lang="ts">
import { todoStore } from "@/stores/TodoStore"
import { QAjaxBar, useQuasar } from 'quasar';
import { computed, defineComponent, ref } from "vue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default defineComponent(() => {
  const todos = todoStore();
  const progressBar = ref<QAjaxBar>();
  const increment = (increment?: number) => progressBar?.value?.increment(increment);
  const stop = () => progressBar?.value?.stop();
  const $q = useQuasar();
  const notify = (message: string, type = 'info') => $q.notify({ message, type });

  function loadTodos() {
    progressBar?.value?.start();
    todos.loadTodos(notify, increment, stop);
  }

  loadTodos();

  return {
    progressBar,
    todoList: computed(() => todos.todoList),
    checkbox: ref(false),
    reload: loadTodos,
    isComplete: (completed: string | null | undefined) => completed !== null && completed !== undefined,
    headerClasses: "full-width row inline no-wrap justify-start items-start content-start header",
    rowClasses: "datatable full-width row inline no-wrap justify-start items-start content-start",
    dateFormat: (dateString: string | null | undefined) => {
      let retVal = '';
      if (dateString !== null && dateString !== undefined) {
        retVal = dayjs(dateString).fromNow(false);
      }
      return retVal;
    }
  }
})
</script>

<style lang="sass" scoped>
.header
  font-size: 1.2rem
  font-weight: 800
  margin: auto

.datatable:nth-child(even)
  background-color: rgba(0,0,0,0.07)

.cell
  margin-top: auto
  margin-bottom: auto

.editCol
  max-width: 2.5vw
  min-width: 3.5rem

.titleCol
  width: 20vw

.dueCol
  width: 20rem

.compelteCol
  margin-right: 3rem
</style>