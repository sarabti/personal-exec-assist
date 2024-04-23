<script setup lang="ts">
import AppLayout from './components/AppLayout.vue'
import { onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'

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
    <app-layout></app-layout>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-card
        :width="width"
        class="bg-card"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-main>
  </v-layout>
</template>
