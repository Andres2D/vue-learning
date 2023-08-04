<script>
import BenderStatistics from './components/BenderStatistics.vue'
import CharacterCard from './components/CharacterCard.vue'
import BaseLayout from './components/BaseLayout.vue'
export default {
  components: {
    BenderStatistics,
    CharacterCard,
    BaseLayout
  },
  data() {
    return {
      newCharacter: {
        name: '',
        favorite: false,
        state: 'Alive',
        stars: 0
      },
      characters: [
        {
          id: 1,
          name: 'Barry',
          state: 'Death',
          favorite: false,
          stars: 5
        },
        {
          id: 2,
          name: 'Noho Hank',
          state: 'Death',
          favorite: false,
          stars: 4
        },
        {
          id: 3,
          name: 'The raven',
          state: 'Alive',
          favorite: false,
          stars: 4
        },
        {
          id: 4,
          name: 'Gene',
          state: 'Alive',
          favorite: false,
          stars: 4
        }
      ]
    }
  },
  methods: {
    addRemoveFavorite(payload) {
      this.characters[this.characters.findIndex((char) => char.id === payload)].favorite =
        !this.characters[this.characters.findIndex((char) => char.id === payload)].favorite
    },
    addNewCharacter(event) {
      event.preventDefault()
      const newCharacterObject = {
        ...this.newCharacter,
        id: this.characters[this.characters.length - 1] + 1
      }
      this.characters.push(newCharacterObject)
      this.newCharacter = {
        name: '',
        favorite: false,
        state: 'Alive'
      }
    }
  }
}
</script>

<template>
  <BaseLayout>
    <template v-slot:two>
      <form>
        <label>Character name</label>
        <input v-model="newCharacter.name" type="text" />
        <br />
        <label>State</label>
        <select v-model="newCharacter.state">
          <option value="Death">Death</option>
          <option value="Alive">Alive</option>
        </select>
        <br />
        <label>Stars</label>
        <input v-model="newCharacter.stars" type="number" />
        <br />
        <label>Favorite</label>
        <input v-model="newCharacter.favorite" type="checkbox" />
        <br />
        <button type="button" @click="addNewCharacter">Save</button>
      </form>
    </template>
  </BaseLayout>
  <h1>Stats</h1>
  <p v-if="characters.length === 0">There are no characters</p>
  <ul v-else>
    <li
      v-for="(character, index) in characters.filter((char) => char.favorite)"
      :key="`character-${index}`"
    >
      <CharacterCard
        :character="character"
        :favorite="true"
        :index="index"
        @add-remove-favorite="addRemoveFavorite"
      />
    </li>

    <hr />

    <li
      v-for="(character, index) in characters.filter((char) => !char.favorite)"
      :key="`character-${index}`"
    >
      <CharacterCard
        :character="character"
        :favorite="false"
        :index="index"
        @add-remove-favorite="addRemoveFavorite"
      />
      <!-- {{ index + 1 }}] {{ character.name }} ({{ character.state }})
      <button @click="addRemoveFavorite(character.id)">🔥</button> -->
    </li>
    <hr />

    <BenderStatistics :characters="characters" />
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
