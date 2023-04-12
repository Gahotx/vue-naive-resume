import { ref } from 'vue'
import { defineStore } from 'pinia'
import { certificateList } from '@/data'

export const useCertStore = defineStore(
  'certificate',
  () => {
    const list = ref(certificateList)
    const setList = (newList: typeof certificateList) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
