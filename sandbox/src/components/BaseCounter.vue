<script>

import { newCounter } from '../composables/countStore';

export default {
  setup() {
    return {
      newCounter
    }
  },
  data: () => ({
    count: 0,
    counterTitle: 'Counter Standard',
    incrementAmount: 7,
  }),
  computed: {
    displayTitle() {
      if (this.count > 21) {
        return 'Counter Standard - Very Long';
      } else {
        return 'Counter Standard';
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount;
    },
  },
  methods: {
    incrementCount(newAmount, event) {
      this.count += this.optimizedIncrementAmount;
      this.newCounter += 10;
    },
  }
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <h2>{{ newCounter }}</h2>
  <p>{{ count }}</p>
  <p>{{ optimizedIncrementAmount }}</p>
  <button @click="incrementCount(10, $event)">Increment Count</button>

  <div>
    <label for="incrementamount">Increment by:</label>
    <input type="number" v-model="incrementAmount" />
  </div>
</template>
