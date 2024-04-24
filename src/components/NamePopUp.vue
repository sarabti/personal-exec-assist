<script setup>
import { ref, computed, defineEmits } from 'vue'

const props = defineProps({
  askName: {
    type: Boolean,
  }
})

const username = ref('')

const show = computed(() => {
  return props.askName
})

const emit = defineEmits(['nameSet'])

const submitName = () => {
  localStorage.setItem('username', username.value)
  show.value = false
  emit('nameSet')
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="show" max-width="90vh">
      <v-card title="Hey There!">
        <v-card-text>
          Please enter your name:
        </v-card-text>
        <v-text-field
          label="name"
          variant="outlined"
          class="mx-5"
          v-model="username"
          @keydown.enter="submitName"
        ></v-text-field>
        <template v-slot:actions>
          <v-btn
            text="Submit"
            @click="submitName"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
