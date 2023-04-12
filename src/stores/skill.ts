import { ref } from 'vue'
import { defineStore } from 'pinia'
import { skillList } from '@/data'

export const useSkillStore = defineStore(
  'specialSkill',
  () => {
    const list = ref(skillList)
    const setList = (newList: typeof skillList) => {
      list.value = newList
    }
    return { list, setList }
  },
  {
    persist: true
  }
)
