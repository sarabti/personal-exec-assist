<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const width = computed(() => {
  switch (name.value) {
    case 'xs': return 280
    case 'sm': return 350
    case 'md': return 500
  }
  return 700
})
</script>
<template>
  <v-card
    :width="width"
    height="60vh"
    class="my-16 bg-card d-flex flex-column align-center justify-center"
  >
    <slot></slot>
  </v-card>
</template>
