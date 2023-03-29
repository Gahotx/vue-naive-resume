import { ref } from 'vue'
import { defineStore } from 'pinia'
import { profile } from '@/data'

export const useUserStore = defineStore(
  'userProfile',
  () => {
    const list = ref(profile)
    return { list }
  },
  {
    persist: true
  }
)
