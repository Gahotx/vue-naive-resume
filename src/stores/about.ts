import { ref } from 'vue'
import { defineStore } from 'pinia'
import { aboutme } from '@/data'

export const useAboutStore = defineStore(
  'aboutMe',
  () => {
    const list = ref(aboutme)
    const setList = (newList: typeof aboutme) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
