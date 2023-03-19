import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ResumeConfig } from '@/types'
import { RESUME_INFO } from '@/data'

export const useResumeInfo = defineStore(
  'resume',
  () => {
    const info = ref<ResumeConfig>(RESUME_INFO)
    return { info }
  },
  {
    persist: true
  }
)
