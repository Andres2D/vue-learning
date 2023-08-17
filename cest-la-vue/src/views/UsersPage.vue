<script setup>
import { reactive } from 'vue';
import { increaseVisitors } from '../composables/useState';
import { useRouter } from 'vue-router';

defineProps({
  title: {
    type: String,
    default: 'Users'
  },
});

defineEmits(['update-user-list']);

const router = useRouter();

const baseUrl = "https://jsonplaceholder.typicode.com";

const state = reactive({ usersList: [] });

const fetchUsers = async () => {
  const response = await fetch(`${baseUrl}/users`).then((response) =>
    response.json()
  );
  return response;
};

state.usersList = await fetchUsers();

const handleUserClick = (id) => {
  router.push(`/users/${id}`);
};

</script>

<template>
  <main>
    <h2>{{ title }}</h2>
    <ul>
      <li 
        v-for="user in state.usersList" 
        :key="`user-${user.id}`"
        @click="handleUserClick(user.id)"
      >
        <div class="$style[user-header]">
          <h3>{{ user.name }}</h3>
          <p>({{ user.username }})</p>
        </div>
        <div class="$style[user-body]">
          <p>{{ user.email }} / {{ user.phone }}</p>
        </div>
      </li>
    </ul>
    <button @click="increaseVisitors">New visitor</button>
  </main>
</template>

<style module>

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
