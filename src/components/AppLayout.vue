<script setup lang="ts">
import { ref, onUpdated, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { Route } from '@/types'

const { smAndDown } = useDisplay()

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}

const calcDrawer = () => {
  if (!smAndDown.value)
    drawer.value = true
  return
}

defineProps({
  routes: Array as Route[],
})
onMounted(calcDrawer)
onUpdated(calcDrawer)
</script>

<template>
  <v-footer
    name="footer"
    class="d-flex align-center justify-center py-5"
    elevation="24"
    app
  >
    Made By &#127807;
  </v-footer>
  <v-app-bar elevation="3">
    <v-app-bar-nav-icon
      v-if="smAndDown"
      @click.stop="toggleDrawer"
      :elevation="drawer ? 10: undefined"
    ></v-app-bar-nav-icon>
    <v-app-bar-title :class="{'title-center':!smAndDown}">Executive Assistant</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :location="smAndDown ? 'top' : 'left'"
    :permanent="!smAndDown"
    width=200
    class="h-auto"
  >
    <v-list nav>
      <v-list-item
          v-for="route in routes"
          :key="route.title"
          router
          :to="route.route"
      >
        {{ route.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.title-center {
  text-align: center
}
</style>
