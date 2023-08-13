<script>
import { computed, ref, reactive } from 'vue';

export default {
  async setup() {
    const regionName = ref('Kanto');

    const state = reactive({
      elementType: 'lighting'
    });

    console.log(regionName);
    const regionNameAllCaps = computed(() => state.elementType.toUpperCase());
    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json());
    
    console.log(state);
    
    return {
      regionName,
      pokedex,
      regionNameAllCaps
    }
  },
  data: () => ({
    pokedex: [1,2,3]
  }),
  computed: {
    regionNameLowerCase() {
      return this.regionName.toLowerCase();
    }
  },
  methods: {
    changeRegionName() {
      this.regionName = 'Hoenn';
    }
  },
  created() {
    // console.log(this.regionName)
    // console.log(this.pokedex);
  }
}
</script>

<template>
  <h2>{{ regionName }}</h2>
  <h3>{{ regionNameAllCaps }}</h3>
  <h3>{{ regionNameLowerCase }}</h3>
  <button @click="changeRegionName">Change region name</button>
  <pre>{{  pokedex  }}</pre>
</template>
