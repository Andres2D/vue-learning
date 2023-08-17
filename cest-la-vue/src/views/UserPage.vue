<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);

</script>

<template>
  <main>
    <h2>User: {{ route.params.name }}</h2>
  </main>
</template>
