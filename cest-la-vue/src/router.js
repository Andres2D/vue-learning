import HomePage from './views/HomePage.vue';
import LoginPage from './views/LoginPage.vue';
import UsersPage from './views/UsersPage.vue';

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/users',
    component: UsersPage
  }
];
