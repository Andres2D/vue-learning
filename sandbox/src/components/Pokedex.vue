<script setup>
import BaseButton from './BaseButton.vue';
import { computed, ref, reactive } from 'vue';

const regionName = ref('Kanto');

const state = reactive({
  elementType: 'lighting'
});

const regionNameAllCaps = computed(() => state.elementType.toUpperCase());
const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json());

const changeRegionName = () => {
  regionName.value = 'Hoenn';
};
</script>

<template>
  <BaseButton />
  <h2>{{ regionName }}</h2>
  <h3>{{ regionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change region name</button>
  <pre>{{  pokedex  }}</pre>
</template>
