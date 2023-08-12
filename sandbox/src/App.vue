<script>
import Pokedex from './components/Pokedex.vue';

export default {
  components: {
    Pokedex
  }
}
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <Pokedex />
    <template #fallback>
      Fetching data...
    </template>
  </Suspense>
</template>
