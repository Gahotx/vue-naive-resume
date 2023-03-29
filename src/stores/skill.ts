import { ref } from 'vue'
import { defineStore } from 'pinia'
import { skillList } from '@/data'

export const useSkillStore = defineStore(
  'specialSkill',
  () => {
    const list = ref(skillList)
    return { list }
  },
  {
    persist: true
  }
)
