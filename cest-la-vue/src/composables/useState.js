import { ref } from 'vue';

export const visitors = ref(100);

export const increaseVisitors = () => {
  visitors.value += 1;
};
