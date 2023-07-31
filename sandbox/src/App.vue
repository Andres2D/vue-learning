<script>
import Counter from './components/Counter.vue';

export default {
  components: {
    Counter
  },
  data() {
    return {
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<template>
  <Counter />
  <h1>test</h1>
  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul>
    <li v-for="(number, index) in listOfNumbers" :key="`item-${index}`">
      {{ number }}
    </li>
  </ul>

  <hr />
</template>
