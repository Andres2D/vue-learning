<script>
export default {
  props: {
    name: {
      type: String,
      default: 'John Doe'
    },
    food: {
      type: String,
      default: 'Sushi'
    }
  }
}
</script>

<template>
  <h1>User: {{name}}</h1>
  <p>Food: {{food}}</p>
</template>
