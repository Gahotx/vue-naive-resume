import { ref } from 'vue'
import { defineStore } from 'pinia'
import { projectList } from '@/data'

export const useProjectStore = defineStore(
  'projectExp',
  () => {
    const list = ref(projectList)
    return { list }
  },
  {
    persist: true
  }
)
