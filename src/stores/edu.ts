import { ref } from 'vue'
import { defineStore } from 'pinia'
import { educationList } from '@/data'

export const useEduStore = defineStore(
  'educationExp',
  () => {
    const list = ref(educationList)
    return { list }
  },
  {
    persist: true
  }
)
