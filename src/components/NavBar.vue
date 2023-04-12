<script setup lang="ts">
import { onMounted, ref, watch, provide } from 'vue'
import EditResume from '@/components/EditResume.vue'
import type { DrawerPlacement } from 'naive-ui'
import type { ResumeConfig } from '@/types'
import {
  useAboutStore,
  useEduStore,
  useSkillStore,
  useUserStore,
  useWorkStore,
  useProjectStore,
  useCertStore
} from '@/stores'

const aboutStore = useAboutStore()
const certStore = useCertStore()
const eduStore = useEduStore()
const projectStore = useProjectStore()
const skillStore = useSkillStore()
const userStore = useUserStore()
const workStore = useWorkStore()

const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
provide('active', active)
provide('placement', placement)

// 下滑隐藏上滑显示导航
const pageHeight = ref(0)
const navShow = ref(true)
onMounted(() => {
  window.addEventListener('scroll', () => {
    pageHeight.value =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset
  })
})
watch(pageHeight, (newVal, oldVal) => {
  if (newVal > 100) {
    if (newVal > oldVal) {
      navShow.value = false
    } else {
      navShow.value = true
    }
  } else {
    navShow.value = true
  }
})

const print = () => {
  window.print()
}

// 导出配置
const exportResume = () => {
  const resumeObj: ResumeConfig = Object.assign(
    {},
    {
      userProfile: userStore.list,
      educationExp: eduStore.list,
      specialSkill: skillStore.list,
      workExp: workStore.list,
      projectExp: projectStore.list,
      certificate: certStore.list,
      aboutMe: aboutStore.list
    }
  )
  const resumeJson = JSON.stringify(resumeObj)
  const blob = new Blob([resumeJson], { type: 'application/json' })
  const a = document.createElement('a')
  a.download = 'resume.json'
  a.href = URL.createObjectURL(blob)
  a.click()
}

// 导入配置
const importResume = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'
  input.onchange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (e: any) => {
      const resumeObj: ResumeConfig = JSON.parse(e.target.result)
      resumeObj.userProfile && userStore.setList(resumeObj.userProfile)
      resumeObj.educationExp && eduStore.setList(resumeObj.educationExp)
      resumeObj.specialSkill && skillStore.setList(resumeObj.specialSkill)
      resumeObj.workExp && workStore.setList(resumeObj.workExp)
      resumeObj.projectExp && projectStore.setList(resumeObj.projectExp)
      resumeObj.certificate && certStore.setList(resumeObj.certificate)
      resumeObj.aboutMe && aboutStore.setList(resumeObj.aboutMe)
    }
  }
  input.click()
}
</script>

<template>
  <header
    class="bg-white b-b b-b-solid b-b-gray-2 !print-hidden z-999"
    :class="navShow ? 'navOn' : 'navOff'"
  >
    <div class="flex justify-center items-center h-60px">
      <div class="flex justify-start items-center grow ml-100px">
        <img class="w-35px" src="@/assets/logo.svg" alt="logo" />
        <span class="ml-5px text-5">Vue Naive Resume</span>
      </div>

      <div class="flex gap-30px">
        <NButton size="small">切换模板</NButton>
        <NButton @click="activate('right')" size="small">编辑简历</NButton>
        <NButton @click="print" size="small">PDF 下载</NButton>
        <NButton @click="importResume" size="small">导入配置</NButton>
        <NButton @click="exportResume" size="small">导出配置</NButton>
      </div>

      <div id="source" class="flex justify-end grow mr-117px">
        <a
          href="https://github.com/Gahotx/vue-naive-resume"
          class="i-mdi-github text-30px color-gray-7 text-op-70 hover-text-op-100 transition-color-300"
          target="_blank"
          title="项目地址"
        ></a>
      </div>
    </div>
  </header>
  <EditResume />
</template>

<style scoped>
.navOn {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out 0.2s;
  transform: translateZ(0);
}
.navOff {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out 0.2s;
  transform: translateY(-100%);
}
</style>
