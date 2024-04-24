import Dashboard from "@/views/Dashboard.vue";
import Todos from "@/views/Todos.vue";
import Weather from "@/views/Weather.vue";
import Profile from "@/views/Profile.vue";

import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/todos', component: Todos },
  { path: '/weather', component: Weather },
  { path: '/profile', component: Profile },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})
