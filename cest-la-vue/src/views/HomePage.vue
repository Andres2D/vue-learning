<script setup>
import { increaseVisitors } from "../composables/useState";
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <button @click="increaseVisitors">New visitor</button>
  </main>
</template>

<style>
</style>
