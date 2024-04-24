<script setup lang="ts">
import AppLayout from './components/AppLayout.vue'
import NamePopUp from './components/NamePopUp.vue'
import { ref, onMounted, onUpdated } from 'vue'
import { Route } from '@/types'

const routes: Route[] = [
  { title: "Dashboard", route: "/" },
  { title: "ToDo", route: "/todos" },
  { title: "Weather", route: "/weather" },
  { title: "Profile", route: "/profile" },
];

const renderApp = ref(true)

const calcRenderApp = () => {
  if(localStorage.getItem('username'))
    renderApp.value = true
  else
    renderApp.value = false
}

onMounted(calcRenderApp)
onUpdated(calcRenderApp)

const updateApp = () =>  {
  console.log("hehehehehehehe")
}

window.onstorage = () => {
  calcRenderApp()
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <app-layout :routes="routes"></app-layout>
    <name-pop-up
      :ask-name="!renderApp"
      @name-set="calcRenderApp"
    ></name-pop-up>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px;"
      v-if="renderApp"
    >
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
