<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
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

const username = ref('')

const currentTime = ref(new Date());

const updateTimeInterval = setInterval(() => {
  currentTime.value = new Date();
}, 1000);

onBeforeUnmount(() => {
  clearInterval(updateTimeInterval);
});

onMounted(() => {
  username.value = localStorage.getItem('username') || 'User'
})

const greetingText = computed(() => {
  const hour = parseInt(currentTime.value.getHours());
  if (hour < 5)
    return "Good Midnight,"
  else if (hour < 11)
    return "Good Morning,"
  else if (hour < 13)
    return "Good Noon,"
  else if (hour < 17)
    return "Good Afternoon,"
  else if (hour < 20)
    return "Good Evening,"

  return "Good Night,"
})
</script>

<template>
  <v-card
    :width="width"
    height="50vh"
    class="my-16 bg-card d-flex flex-column align-center justify-center"
  >
    <v-card-item class="text-h3">{{ currentTime.toLocaleTimeString([], {hourCycle: 'h23'}) }}</v-card-item>
    <v-card-item class="text-h5">{{ greetingText }}</v-card-item>
    <v-card-item class="text-h4">{{ username }}!</v-card-item>
  </v-card>
</template>
