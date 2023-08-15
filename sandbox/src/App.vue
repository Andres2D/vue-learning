<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';

</script>

<template>
  <BaseCounter />
  <UserCard
    :user="{name: 'Ben', food: 'sushi'}" 
  />
</template>

<style>
html {
  background-color: papayawhip;
}

button {
  border: 10px solid red;
}
</style>
