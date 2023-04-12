import { ref } from 'vue'
import { defineStore } from 'pinia'
import { pageTitle } from '@/data'

export const useTitleStore = defineStore(
  'pageTitle',
  () => {
    const list = ref(pageTitle)
    const setList = (newList: typeof pageTitle) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
