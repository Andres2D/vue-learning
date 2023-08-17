export const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/users',
    component: () => import('@/views/UsersPage.vue')
  },
  {
    path: '/users/:id',
    component: () => import('@/views/UserPage.vue') 
  }
];
