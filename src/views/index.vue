<script setup lang="ts">
import { watch } from 'vue'
import { createDiscreteApi } from 'naive-ui'
import {
  useAboutStore,
  useCertStore,
  useEduStore,
  useProjectStore,
  useSkillStore,
  useTitleStore,
  useUserStore,
  useWorkStore
} from '@/stores'

const aboutStore = useAboutStore()
const certStore = useCertStore()
const eduStore = useEduStore()
const projectStore = useProjectStore()
const skillStore = useSkillStore()
const titleStore = useTitleStore()
const userStore = useUserStore()
const workStore = useWorkStore()

// 一旦数据变化，就使用Message组件提示用户
const { message } = createDiscreteApi(['message'], {
  messageProviderProps: {
    placement: 'bottom-left'
  }
})
// 防抖函数
const debounce = (fn: Function, delay: number) => {
  let timer: any = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
const saveData = debounce(() => {
  message.success('数据已保存', {
    duration: 2000
  })
}, 1000)
watch(
  [
    aboutStore.list,
    certStore.list,
    eduStore.list,
    projectStore.list,
    skillStore.list,
    titleStore.list,
    userStore.list,
    workStore.list
  ],
  () => saveData()
)
</script>

<template>
  <main
    class="mt-100px mb-50px mr-17px flex justify-center print-p-0 print-m-0"
  >
    <div
      class="page w-794px min-h-1123px bg-white px-50px py-70px !print-shadow-none"
    >
      <!-- 个人信息 -->
      <div class="flex items-center">
        <div v-if="userStore.list.avatar" class="basis-150px">
          <NAvatar
            round
            :size="100"
            :src="userStore.list.avatar"
            class="flex justify-start"
            :img-props="{ draggable: false }"
          />
        </div>
        <NLayout class="ml-60px">
          <NLayoutHeader class="text-3xl font-600">{{
            userStore.list.name
          }}</NLayoutHeader>
          <NLayoutContent class="mt-10px">
            <NSpace :size="[12, 0]">
              <div
                v-if="
                  userStore.list.gender ||
                  userStore.list.age ||
                  userStore.list.address
                "
              >
                <span v-if="userStore.list.gender">
                  {{ userStore.list.gender }} |
                </span>
                <span v-if="userStore.list.age">
                  {{ userStore.list.age }} |
                </span>
                <span v-if="userStore.list.address">
                  {{ userStore.list.address }}
                </span>
              </div>
              <div v-if="userStore.list.phone">
                <div class="i-mdi-cellphone-iphone w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top"
                  :href="`tel:${userStore.list.phone}`"
                  target="_blank"
                >
                  {{ userStore.list.phone }}
                </a>
              </div>
              <div v-if="userStore.list.email">
                <div class="i-mdi-email w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top ml-4px"
                  :href="`mailto:${userStore.list.email}`"
                  target="_blank"
                >
                  {{ userStore.list.email }}
                </a>
              </div>
              <div v-if="userStore.list.github">
                <div class="i-mdi-github w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top ml-4px"
                  :href="userStore.list.github"
                  target="_blank"
                >
                  {{ userStore.list.github }}
                </a>
              </div>
              <div v-if="userStore.list.intention">
                求职意向: {{ userStore.list.intention }}
              </div>
              <div v-if="userStore.list.state">
                {{ userStore.list.state }}
              </div>
              <div v-if="userStore.list.work">
                工作经验: {{ userStore.list.work }}
              </div>
              <div v-if="userStore.list.salary">
                期望薪资: {{ userStore.list.salary }}
              </div>
            </NSpace>
          </NLayoutContent>
        </NLayout>
      </div>
      <!-- 教育背景 -->
      <div>
        <div class="module mt-30px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.educationList }}
        </div>
        <NDivider />
        <div v-for="(item, idx) in eduStore.list" :key="idx" class="ml-10px">
          <div class="flex mb-5px">
            <div class="flex gap-80px justify-start items-center grow">
              <div class="font-600 text-lg">{{ item.school }}</div>
              <div>{{ item.major }}</div>
              <div>{{ item.grade }}</div>
            </div>
            <div class="flex justify-end">
              {{ item.time[0] }} - {{ item.time[1] }}
            </div>
          </div>
          <div class="mb-15px">
            <div class="ws-pre-line">{{ item.eduExp }}</div>
          </div>
        </div>
      </div>

      <!-- 专业技能 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.skillList }}
        </div>
        <NDivider />
        <div class="ws-pre-line ml-10px">
          {{ skillStore.list.skill }}
        </div>
      </div>

      <!-- 工作经历 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.workList }}
        </div>
        <NDivider />
        <div v-for="(item, idx) in workStore.list" :key="idx" class="ml-10px">
          <div class="flex mb-5px">
            <div class="flex gap-80px justify-start items-center grow">
              <div class="font-600 text-lg">{{ item.company }}</div>
              <div>{{ item.role }}</div>
            </div>
            <div class="flex justify-end">
              {{ item.time[0] }} - {{ item.time[1] }}
            </div>
          </div>
          <div class="mb-15px ws-pre-line">{{ item.content }}</div>
        </div>
      </div>

      <!-- 项目经历 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.projectList }}
        </div>
        <NDivider />
        <div
          v-for="(item, idx) in projectStore.list"
          :key="idx"
          class="ml-10px"
        >
          <div class="flex mb-8px">
            <div class="flex gap-80px justify-start items-center grow">
              <div class="font-600 text-lg">{{ item.project }}</div>
              <div>{{ item.role }}</div>
            </div>
            <div class="flex justify-end">
              {{ item.time[0] }} - {{ item.time[1] }}
            </div>
          </div>
          <div class="mb-15px">
            <div class="ws-pre-line">{{ item.content }}</div>
          </div>
        </div>
      </div>

      <!-- 资格证书 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.certificateList }}
        </div>
        <NDivider />
        <div class="flex gap-30px justify-start items-center grow ml-10px">
          <div v-for="(item, idx) in certStore.list" :key="idx">
            {{ item.cert }}
          </div>
        </div>
      </div>

      <!-- 自我评价 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ titleStore.list.aboutme }}
        </div>
        <NDivider />
        <div class="ws-pre-line ml-10px">
          {{ aboutStore.list.desc }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.module {
  background-image: url('@/assets/module-bg.svg');
  background-repeat: no-repeat;
}
.n-divider {
  margin-top: -12px;
}
:deep(.n-divider__line) {
  background: linear-gradient(to right, #a9b5ba, white);
}
.page {
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);
}
</style>
