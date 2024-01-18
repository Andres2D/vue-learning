const app = Vue.createApp({
  data() {
    return {
      profile: {
        name: 'Andres Alcaraz',
        age: 26
      },
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rubik_cube.png/800px-Rubik_cube.png'
    }
  },
  methods: {
    getRandomNumber: () => {
      return Math.random();
    }
  }
});

app.mount('#assignment');
