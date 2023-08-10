<script>
const baseUrl = "https://jsonplaceholder.typicode.com";
export default {
  data: () => ({
    usersList: [],
  }),
  methods: {
    async fetchUsers() {
      this.usersList = await fetch(`${baseUrl}/users`).then((response) =>
        response.json()
      );
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  <main>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <div class="user-header">
          <h3>{{ user.name }}</h3>
          <p>({{ user.username }})</p>
        </div>
        <div class="user-body">
          <p>{{ user.email }} / {{ user.phone }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 50px auto;
}

ul {
  list-style: none;
}

li {
  border: 2px solid gray;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}

.user-header {
  display: flex;
  justify-content: space-between;
}
</style>
