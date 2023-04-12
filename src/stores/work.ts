import { ref } from 'vue'
import { defineStore } from 'pinia'
import { workList } from '@/data'

export const useWorkStore = defineStore(
  'workExp',
  () => {
    const list = ref(workList)
    const setList = (newList: typeof workList) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
