<script>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
import BaseButton from './components/BaseButton.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  components: {
    BaseCounter,
    UserCard,
    BaseButton,
    BaseLayout
  },
  data() {
    return {
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5],
      userData: {
        name: 'Ben',
        framework: 'vue',
        food: 'sushi',
        numbers: [8, 10, 12]
      }
    };
  },
  computed: {
    defineUserData() {
      return {
        name: this.userData.name,
        food: this.userData.food
      }
    }
  },
  methods: {
    changeName() {
      this.userData.name = 'Charlie'
    }
  }
};
</script>

<template>
  <BaseLayout>
    <template v-slot:sidebar>
      Sidebar
    </template>
    <template v-slot:main> 
      Main content
    </template>
    <template v-slot:footer> 
      Footer content
    </template>
  </BaseLayout>
  <BaseButton :left="true"></BaseButton>
  <UserCard :user="defineUserData" @change-name="changeName"/>
  <BaseCounter />
  <!-- <base-counter /> -->
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
