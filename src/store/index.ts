import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import useUserStore from './user'

export const useStore = () => {
  return {
    user: useUserStore(),
  }
}

const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia
