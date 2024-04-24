<script setup lang="ts">
import AppLayout from './components/AppLayout.vue'
import { onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { Route } from '@/types'

const routes: Route[] = [
  { title: "Dashboard", route: "/" },
  { title: "ToDo", route: "/todos" },
  { title: "Weather", route: "/weather" },
  { title: "Profile", route: "/profile" },
];

const { name } = useDisplay()

const width = computed(() => {
  switch (name.value) {
    case 'xs': return 220
    case 'sm': return 400
    case 'mdAndUp': return 500
  }
  return undefined
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <app-layout :routes="routes"></app-layout>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
