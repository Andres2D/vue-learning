const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course',
      // courseGoalB: '<h2>Master Vue!</h2>',
      courseGoalB: '<h2>Master Vue!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    }
  }
});

app.mount('#user-goal');
