<script>
export default {
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
      // console.log(newAmount);
      // console.log(event);
      this.count += this.optimizedIncrementAmount;
    },
    // changeIncrementAmount(event) {
    //   console.log(event);
    //   this.incrementAmount = +event.target.value;
    // }
  }
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <p>{{ count }}</p>
  <p>{{ optimizedIncrementAmount }}</p>
  <button @click="incrementCount(10, $event)">Increment Count</button>
  <!-- v-on:click="incrementCount(10, $event)"  -->
  <!-- v-on:click="(event) => incrementCount(10, event)"  -->
  <!-- v-on:click="incrementCount(10)"  -->

  <div>
    <label for="incrementamount">Increment by:</label>
    <input type="number" v-model="incrementAmount" />
    <!-- v-bind:value="incrementAmount" 
          v-on:input="changeIncrementAmount" -->
  </div>
</template>
