<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ref, onMounted } from 'vue'
import { useField, useForm } from 'vee-validate'
import AppCard from '@/components/AppCard.vue'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    username (value) {
      if (value?.length >= 2) return true
      return 'Name needs to be at least 2 characters.'
    },
  },
})
const globalTheme = useTheme()
const username = useField('username')
const locale = useField('locale')
const theme = useField('theme')

const locales = ref([
  'persian', 'english'
])
const themes = ref([
  'dark', 'light'
])

const submit = handleSubmit(values => {
  localStorage.setItem('username', values.username)
  localStorage.setItem('locale', values.locale)
  localStorage.setItem('theme', values.theme)
  globalTheme.global.name.value = localStorage.getItem('theme')
})

onMounted(() => {
  username.value.value = localStorage.getItem('username') || 'User'
  locale.value.value = localStorage.getItem('locale') || 'english'
  theme.value.value = localStorage.getItem('theme') || 'light'
})
</script>
<template>
  <app-card>
    <v-card-title>Your Profile Settings:</v-card-title>
    <v-form @submit.prevent="submit" class="w-75">
      <v-text-field
        v-model="username.value.value"
        :counter="10"
        :error-messages="username.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-select
        v-model="locale.value.value"
        :items="locales"
        label="Select Your Locale"
      ></v-select>
      <v-select
        v-model="theme.value.value"
        :items="themes"
        label="Select Prefered Theme"
      ></v-select>

      <v-btn
        class="me-4 bg-btn"
        type="submit"
      >
        Reset Settings
      </v-btn>
    </v-form>
  </app-card>
</template>
