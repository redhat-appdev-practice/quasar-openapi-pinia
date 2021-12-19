<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Todo List
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="q-pa-md flex flex-center floating" v-if="isLoading">
      <q-circular-progress
        size="xl"
        indeterminate
        color="primary"
        class="q-ma-md"
      />
    </div>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { todoStore } from "./stores/TodoStore";

export default defineComponent(() => {

  const todos = todoStore();

  return {
    leftDrawerOpen: ref(false),
    isLoading: computed(() => todos.isLoading)
  }
});
</script>

<style lang="sass">
.floating
  z-index: 5
  position: absolute
  left: 0px
  top: 0px
  width: 100%
  height: 100%
  background-color: rgba(255,255,255,0.7)
</style>