import { ref } from 'vue'
import { defineStore } from 'pinia'
import { profile } from '@/data'

export const useUserStore = defineStore(
  'userProfile',
  () => {
    const list = ref(profile)
    const setList = (newList: typeof profile) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
