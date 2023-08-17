<script setup>
import { increaseVisitors } from '../composables/useState';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emailInput = ref('123');
const login = () => {
  if (emailInput.value.includes('@') && emailInput.value.length > 3) {
    console.log('Valid User');
    router.push('/users');
  } else {
    console.log('Invalid User')
  }
};

</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="emailInput" />
    <button @click="login">Continue with email</button>
    <button @click="increaseVisitors">New visitor</button>
  </main>
</template>

<style>
</style>
