<!-- <script setup>
import BaseButton from '../components/BaseButton.vue';
import { computed, ref, reactive, defineProps, defineEmits } from 'vue';

const emits = defineEmits(['change-region']); 

const props = defineProps({
  region: {
    type: String,
    default: 'Kanto'
  }
});

const regionName = ref('Kanto');

const state = reactive({
  elementType: 'lighting'
});

const regionNameAllCaps = computed(() => state.elementType.toUpperCase() + props.region);
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
</template> -->

<script>
</script>
<template>
  <h1>Pokedex page</h1>
</template>  
