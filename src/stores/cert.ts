import { ref } from 'vue'
import { defineStore } from 'pinia'
import { certificateList } from '@/data'

export const useCertStore = defineStore(
  'certificate',
  () => {
    const list = ref(certificateList)
    return { list }
  },
  {
    persist: true
  }
)
