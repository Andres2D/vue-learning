<script>
// https://pokeapi.co/api/v2/pokemon/limit=151
export default {
  beforeCreate() {
    console.log('Before create');
    console.log(this.pokedex);
  },
  data: () => ({
    pokedex: [1,2,3]
  }),
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json());
    }
  },
  created() {
    console.log('Created');
    this.fetchPokemon();
    console.log(this.pokedex);
  }
}
</script>

<template>
  <h1>New App</h1>
  <pre>{{  pokedex  }}</pre>
  <button @click="fetchPokemon">Fetch pokemon</button>
</template>
