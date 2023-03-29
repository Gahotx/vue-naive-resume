import { ref } from 'vue'
import { defineStore } from 'pinia'
import { pageTitle } from '@/data'

export const useTitleStore = defineStore(
  'pageTitle',
  () => {
    const list = ref(pageTitle)
    return { list }
  },
  {
    persist: true
  }
)
