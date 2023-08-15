<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
import { ref, reactive } from 'vue';

const colorPreference = ref('white');

</script>

<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <br />  
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view />
    <p>{{ colorPreference }}</p>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard
      :user="{name: 'Ben', food: 'sushi'}" 
    />
  </div>
  
</template>

<style>
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind('colorPreference');
}

button {
  border: 10px solid red;
}
</style>
