import { ref } from 'vue'
import { defineStore } from 'pinia'
import { projectList } from '@/data'

export const useProjectStore = defineStore(
  'projectExp',
  () => {
    const list = ref(projectList)
    const setList = (newList: typeof projectList) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
