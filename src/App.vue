<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { Route } from '@/types'
import AppLayout from './components/AppLayout.vue'
import NamePopUp from './components/NamePopUp.vue'

const routes: Route[] = [
  { title: "Dashboard", route: "/" },
  { title: "ToDo", route: "/todos" },
  { title: "Weather", route: "/weather" },
  { title: "Profile", route: "/profile" },
];

const renderApp = ref(true)
const theme = useTheme()

const calcStorageProps = () => {
  if(!localStorage.getItem('locale'))
    localStorage.setItem('locale', 'english')

  if(!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'light')

  if(localStorage.getItem('username'))
    renderApp.value = true
  else
    renderApp.value = false

  theme.global.name.value = localStorage.getItem('theme')
}

window.onstorage = () => {
  calcStorageProps()
}
onMounted(calcStorageProps)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <app-layout :routes="routes"></app-layout>
    <name-pop-up
      :ask-name="!renderApp"
      @name-set="calcStorageProps"
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
