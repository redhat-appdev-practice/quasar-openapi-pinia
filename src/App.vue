<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Todo List
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container style="padding-bottom: 0px; height: 100%;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent(() => {
  return {
    leftDrawerOpen: ref(false),
  }
});
</script>

<style lang="sass" scoped>
.floating
  z-index: 5
  position: absolute
  left: 0px
  top: 0px
  width: 100%
  height: 100%
  background-color: rgba(255,255,255,0.7)
</style>