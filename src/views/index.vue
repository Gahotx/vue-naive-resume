<script setup lang="ts">
import { useResumeInfo } from '@/stores'

const store = useResumeInfo()
</script>

<template>
  <main
    class="mt-100px mb-50px mr-17px flex justify-center print-p-0 print-m-0"
  >
    <div
      class="page w-794px h-1600px bg-white px-50px py-70px !print-shadow-none"
    >
      <!-- 个人信息 -->
      <div class="flex items-center">
        <div v-if="store.info.avatar.src" class="basis-150px">
          <NAvatar
            round
            :size="100"
            :src="store.info.avatar.src"
            class="flex justify-start"
            :img-props="{ draggable: false }"
          />
        </div>
        <NLayout class="ml-60px">
          <NLayoutHeader class="text-3xl font-600">{{
            store.info.profile.name
          }}</NLayoutHeader>
          <NLayoutContent class="mt-10px">
            <NSpace :size="[12, 0]">
              <div
                v-if="
                  store.info.profile.gender ||
                  store.info.profile.age ||
                  store.info.profile.address
                "
              >
                <span v-if="store.info.profile.gender">
                  {{ store.info.profile.gender }} |
                </span>
                <span v-if="store.info.profile.age">
                  {{ store.info.profile.age }} |
                </span>
                <span v-if="store.info.profile.address">
                  {{ store.info.profile.address }}
                </span>
              </div>
              <div v-if="store.info.profile.mobile">
                <div class="i-mdi-cellphone-iphone w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top"
                  :href="`tel:${store.info.profile.mobile}`"
                  target="_blank"
                >
                  {{ store.info.profile.mobile }}
                </a>
              </div>
              <div v-if="store.info.profile.email">
                <div class="i-mdi-email w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top ml-4px"
                  :href="`mailto:${store.info.profile.email}`"
                  target="_blank"
                >
                  {{ store.info.profile.email }}
                </a>
              </div>
              <div v-if="store.info.profile.github">
                <div class="i-mdi-github w-4 h-5 inline-block"></div>
                <a
                  class="inline-block align-top ml-4px"
                  :href="store.info.profile.github"
                  target="_blank"
                >
                  {{ store.info.profile.github }}
                </a>
              </div>
              <div v-if="store.info.profile.intention">
                求职意向: {{ store.info.profile.intention }}
              </div>
              <div v-if="store.info.profile.state">
                {{ store.info.profile.state }}
              </div>
              <div v-if="store.info.profile.work">
                工作经验: {{ store.info.profile.work }}
              </div>
              <div v-if="store.info.profile.salary">
                期望薪资: {{ store.info.profile.salary }}
              </div>
            </NSpace>
          </NLayoutContent>
        </NLayout>
      </div>
      <!-- 教育背景 -->
      <div>
        <div class="module mt-30px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.educationList }}
        </div>
        <NDivider />
        <div v-for="(item, idx) in store.info.educationList" :key="idx">
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
            <div>{{ item.score }}</div>
            <div>{{ item.course }}</div>
          </div>
        </div>
      </div>

      <!-- 专业技能 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.skillList }}
        </div>
        <NDivider />
        <ul class="-ml-15px">
          <li v-for="(item, idx) in store.info.skillList" :key="idx">
            {{ item.skill }}
          </li>
        </ul>
      </div>

      <!-- 工作经历 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.workList }}
        </div>
        <NDivider />
        <div v-for="(item, idx) in store.info.workList" :key="idx">
          <div class="flex mb-5px">
            <div class="flex gap-80px justify-start items-center grow">
              <div class="font-600 text-lg">{{ item.company }}</div>
              <div>{{ item.department }}</div>
            </div>
            <div class="flex justify-end">
              {{ item.time[0] }} - {{ item.time[1] }}
            </div>
          </div>
          <div class="mb-15px">
            <div>{{ item.desc }}</div>
          </div>
        </div>
      </div>

      <!-- 项目经历 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.projectList }}
        </div>
        <NDivider />
        <div v-for="(item, idx) in store.info.projectList" :key="idx">
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
            <div class="mb-5px">
              <b>项目描述：</b> <span>{{ item.desc }}</span>
            </div>
            <div>
              <b>项目内容：</b> <span>{{ item.content }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 资格证书 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.certificateList }}
        </div>
        <NDivider />
        <div class="flex gap-30px justify-start items-center grow">
          <div v-for="(item, idx) in store.info.certificateList" :key="idx">
            {{ item.cert }}
          </div>
        </div>
      </div>

      <!-- 自我评价 -->
      <div>
        <div class="module mt-24px pl-25px pt-8px text-xl text-white h-42px">
          {{ store.info.titleNameMap.aboutme }}
        </div>
        <NDivider />
        <ul class="-ml-15px">
          <li v-for="(item, idx) in store.info.aboutme" :key="idx">
            {{ item.desc }}
          </li>
        </ul>
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
