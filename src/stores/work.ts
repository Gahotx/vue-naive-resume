import { ref } from 'vue'
import { defineStore } from 'pinia'
import { workList } from '@/data'

export const useWorkStore = defineStore(
  'workExp',
  () => {
    const list = ref(workList)
    return { list }
  },
  {
    persist: true
  }
)
