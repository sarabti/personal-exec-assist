<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import AppCard from '@/components/AppCard.vue'

const todos = ref([])
const newItem = ref('')
const editableIndex = ref(null)
const editableContent = ref('')

const deleteitem = (index) => {
  todos.value.splice(index, 1)
}

const addItem = () => {
  todos.value.push(newItem.value)
  newItem.value = ''
}

const isEditable = (index) => {
  return index === editableIndex.value
}

const makeEditable = (index) => {
  editableIndex.value = index
}

const editItem = () => {
  todos.value.splice(editableIndex.value, 1, editableContent.value)
  editableIndex.value = null
  editableContent.value = ''
}

onMounted(() => {
  if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify([]))
  todos.value = JSON.parse(localStorage.getItem('todos'))
})

onBeforeUnmount(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})

</script>
<template>
  <app-card class="h-auto" min-height="60vh">
    <v-container class="h-100 flex-grow-1">
      <v-card-title>To Do:</v-card-title>
      <v-list class="bg-card">
        <v-text-field
          v-model="newItem"
          label="Define a new To Do"
          variant="outlined"
          hide-details
          @keydown.enter="addItem"
        ></v-text-field>
        <v-list-item
            v-for="(todo, i) in todos"
            class="px-1"
            :key="i"
        >
          <v-list-item-title v-text="i+1+' - '+todo" class="overflow-x-auto"></v-list-item-title>
          <v-list-item-action>
            <v-btn
              size="x-small"
              variant="tonal"
              class="bg-error mr-2 my-2"
              @click="deleteitem(i)"
            >Delete</v-btn>
            <v-btn
              size="x-small"
              variant="tonal"
              class="bg-success my-2"
              @click="makeEditable(i)"
            >Edit</v-btn>
          </v-list-item-action>
          <v-text-field
            v-if="isEditable(i)"
            v-model="editableContent"
            label="Edit"
            variant="outlined"
            hide-details
            @keydown.enter="editItem"
            @blur="editableIndex=null"
          ></v-text-field>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-container>
  </app-card>
</template>
