<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <h1>User: {{user.name}}</h1>
  <p>Food: {{user.food}}</p>
</template>
