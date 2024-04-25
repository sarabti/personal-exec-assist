<script setup lang="ts">
import { ref } from 'vue'
import axios from "axios";
import AppCard from '@/components/AppCard.vue'
import weatherCodes from '@/utils/WeatherCodes.ts'
import cities from '@/utils/Cities.ts'

const city = ref('')
const temperature = ref(0)
const desciption = ref('')

const getWeather = async () => {
  const wantedCity = cities.find(ct => ct.id === city.value)
  const { data } = await axios.get(
    "https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: wantedCity.latitude,
        longitude: wantedCity.longitude,
        current_weather: true
      },
    }
  );
  const code = data.current_weather.weathercode
  desciption.value = weatherCodes(code)
  temperature.value = data.current_weather.temperature
}
</script>
<template>
  <app-card>
    <v-card-title>Enter a city name:</v-card-title>
    <v-container class="w-75">
      <v-autocomplete
        v-model="city"
        :items="cities"
        item-title="name"
        item-value="id"
        label="City"
      >
      </v-autocomplete>
    </v-container>
    <v-btn class="mb-6 bg-btn" @click="getWeather" :disabled="!city">
      get weather
    </v-btn>
    <div class="text-h3 mb-4">
      {{ temperature }} &deg;C
    </div>
    <div class="text-h6">
      {{ desciption }}
    </div>
  </app-card>
</template>
