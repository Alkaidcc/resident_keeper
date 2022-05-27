import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    isRemembered: false,
  }),
  getters: {
  },
  actions: {
    cancelRemember() {
      this.isRemembered = false
      console.log('Hello')
    },
  },
  persist: true,
})

export default useUserStore
