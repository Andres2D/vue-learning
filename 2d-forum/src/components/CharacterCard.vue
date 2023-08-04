<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    },
    favorite: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ['add-remove-favorite'],
  methods: {
    addRemoveFavorite() {
      this.$emit('add-remove-favorite', this.character.id)
    }
  }
}
</script>

<template>
  <div>
    {{ index + 1 }}] {{ character.name }} ({{ character.state }})
    <button @click="addRemoveFavorite">{{ favorite ? '🔥' : '⬇️' }}</button>
  </div>
</template>
