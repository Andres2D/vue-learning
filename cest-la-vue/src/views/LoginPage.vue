<script setup>
import { increaseVisitors } from '../composables/useState';
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" />
    <button>Continue with email</button>
    <button @click="increaseVisitors">New visitor</button>
  </main>
</template>

<style>
</style>
