<script setup lang="ts">
import { computed } from 'vue'
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
  <v-card
    :width="width"
    class="bg-card"
    subtitle="This is a card subtitle"
    text="Lorem 4!"
    title="This is a title"
  ></v-card>
</template>
