const app = Vue.createApp({
  data() {
    return {
      firstInput: '',
      secondOutput: ''
    }
  },
  methods: {
    openAlert() {
      alert('Hey buddy, I am an alert');
    },
    printInput(event) {
      this.firstInput = event.target.value; 
    },
    printInputOnEnter(event) {
      this.secondOutput = event.target.value; 
    }
  }
});

app.mount('#assignment')
