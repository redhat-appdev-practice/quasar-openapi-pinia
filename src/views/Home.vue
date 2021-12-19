<template>
  <q-page class="flex">
    <q-table
      title="Todos"
      class="col-grow"
      :rows="todos.todoList"
      :columns="columns"
      row-key="id"
      dense
    />
  </q-page>
</template>

<script lang="ts">
import { Todo } from "@/sdk";
import { todoStore } from "@/stores/TodoStore"

export default {
  name: 'Home',

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup: () => {
    const todos = todoStore();

    todos.loadTodos();
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    function defineColumn(name: string, label: string, field: Function, style = '', width = 4, align = 'left', sortable = false): any {
      return {
        name,
        label,
        field,
        headerStyle: `font-weight: bold; text-transform: uppercase; width: ${width}rem;`,
        align,
        sortable,
        style,
      }
    }

    // Define the column metadata
    const columns = [
      defineColumn('id', 'ID', (row: Todo) => row.id),
      defineColumn('title', 'Title', (row: Todo) => row.title, '', 6),
      defineColumn('description', 'Description', (row: Todo) => row.description, '', 8)
    ];

    // Make these fields available to the template
    return {
      columns,
      todos
    };
  }
}
</script>
