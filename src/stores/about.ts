import { ref } from 'vue'
import { defineStore } from 'pinia'
import { aboutme } from '@/data'

export const useAboutStore = defineStore(
  'aboutMe',
  () => {
    const list = ref(aboutme)
    return { list }
  },
  {
    persist: true
  }
)
