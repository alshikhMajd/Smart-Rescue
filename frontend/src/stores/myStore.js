// ------ setup version -------
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useMyStore = defineStore('myStore', () => {
  const user = ref({});
  async function fetchUser(id){
    const response = await axios.get('http://localhost:3000/user');
    user.value = response.data;
  }

  return { user, fetchUser};
});

// ------ option version -------
// import { defineStore } from 'pinia';
//
// export const useMyStore = defineStore('myStore', {
//   state: () => ({ message: 'Viel Erfolg!' }),
//   getters: {},
//   actions: {},
// });
