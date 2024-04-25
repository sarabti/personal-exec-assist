<script setup lang="ts">
import { ref, onUpdated, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { Route } from '@/utils/types.ts'

const { smAndDown } = useDisplay()

const drawer = ref(false)
const appName = "Executive Assistant"
const selectedRoute = ref(appName)

const calcDrawer = (() => {
  if (!smAndDown.value)
    drawer.value = true
})

defineProps({
  routes: Array as Route[],
})
onMounted(calcDrawer)
onUpdated(calcDrawer)

const setSelected = (item) => {
  selectedRoute.value = item
}

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
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title :class="{'title-center':!smAndDown}">
      {{ smAndDown ? selectedRoute : appName }}
    </v-app-bar-title>
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
          @click="setSelected(route.title)"
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
