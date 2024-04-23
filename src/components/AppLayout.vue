<script setup lang="ts">
import { ref, onUpdated, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

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

onMounted(calcDrawer)
onUpdated(calcDrawer)

const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
];
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
  >
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<style>
.title-center {
  text-align: center
}
</style>
