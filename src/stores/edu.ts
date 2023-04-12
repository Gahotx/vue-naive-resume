import { ref } from 'vue'
import { defineStore } from 'pinia'
import { educationList } from '@/data'

export const useEduStore = defineStore(
  'educationExp',
  () => {
    const list = ref(educationList)
    const setList = (newList: typeof educationList) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
