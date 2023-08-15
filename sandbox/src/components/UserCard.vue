<script>
import { newCounter } from '../composables/countStore';
export default {
  setup(){
    return {
      newCounter
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ['change-name']
}
</script>

<template>
  <h2>{{ newCounter }}</h2>
  <h1>User: {{user.name}}</h1>
  <p>Food: {{user.food}}</p>
  <button @click="$emit('change-name')">Change name</button>
</template>

<style scoped>
button {
  border: 10px solid green;
}
</style>