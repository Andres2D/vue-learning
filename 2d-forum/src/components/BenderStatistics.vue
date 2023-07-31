<script>
  export default {
    computed: {
      deathCharacterPercentage() {
        return `${
          (this.characters.filter((char) => char.state === 'Death').length / this.characters.length) *
          100
        }%`
      },
      aliveCharacterPercentage() {
        return `${
          (this.characters.filter((char) => char.state === 'Alive').length / this.characters.length) *
          100
        }%`
      },
      averageStars() {
        return Math.floor(
          this.characters.map((char) => char.stars).reduce((a, b) => a + b) / this.characters.length
        )
      }
    },
  }
</script>

<template>
  <h2>Death characters: {{ deathCharacterPercentage }}</h2>
  <h2>Alive characters: {{ aliveCharacterPercentage }}</h2>
  <h2>Average characters stars: {{ averageStars }}</h2>
</template>