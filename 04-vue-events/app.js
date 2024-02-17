const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      // fullName: ''
    };
  },
  watch: {
    // (newValue?, oldValue?) is the latest value of the property we are watching
    // name(value) {
    //   value.trim() !== ''
    //     ? this.fullName = `${value} ${lastName}`
    //     : this.fullName = '';
    // },
    // lastName(value) {
    //   value.trim() !== ''
    //     ? this.fullName = `${this.name} ${value}`
    //     : this.fullName = '';
    // }
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed: {
    fullName() {
      console.log('In');
      return this.name.trim() === '' || this.lastName.trim() === ''
        ? ''
        : `${this.name} ${this.lastName}`;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, extra) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
