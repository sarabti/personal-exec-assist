<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import AppCard from '@/components/AppCard.vue'

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
  <app-card>
    <v-card-item class="text-h3 mb-5">
      {{ currentTime.toLocaleTimeString([], {hourCycle: 'h23'}) }}
    </v-card-item>
    <v-card-item class="text-h5 mb-5">{{ greetingText }}</v-card-item>
    <v-card-item class="text-h4 mb-5">{{ username }}!</v-card-item>
  </app-card>
</template>
