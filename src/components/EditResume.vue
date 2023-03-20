<script setup lang="ts">
import { ref, inject } from 'vue'
import { useResumeInfo } from '@/stores'
import { city } from '@/data/city'
import type { Select } from '@/types'

const active = inject<boolean>('active')
const placement = inject<string>('placement')

const store = useResumeInfo()
const outerWidth = ref(800)

const gender: Array<Select> = [
  {
    label: '男',
    value: '男'
  },
  {
    label: '女',
    value: '女'
  },
  {
    label: '保密',
    value: ''
  }
]
const state: Array<Select> = [
  {
    label: '不展示求职状态',
    value: ''
  },
  {
    label: '离职-随时到岗',
    value: '离职-随时到岗'
  },
  {
    label: '在职-月内到岗',
    value: '在职-月内到岗'
  },
  {
    label: '离校-随时到岗',
    value: '离校-随时到岗'
  },
  {
    label: '在校-月内到岗',
    value: '在校-月内到岗'
  }
]
</script>

<template>
  <NDrawer v-model:show="active" :width="outerWidth" :placement="placement">
    <NDrawerContent title="编辑简历" header-style="font-size: 22px">
      <NSpace vertical>
        <!-- 个人信息 -->
        <div class="font-700 text-lg mb-10px">
          {{ store.info.titleNameMap.profile }}
        </div>
        <NGrid x-gap="12" y-gap="8" :cols="2">
          <NGi>
            <div class="text-base text-gray-5">姓名</div>
            <NInput
              v-model:value="store.info.profile.name"
              type="text"
              placeholder="请输入姓名"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">性别</div>
            <NSelect
              v-model:value="store.info.profile.gender"
              :options="gender"
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">年龄</div>
            <NInput
              v-model:value="store.info.profile.age"
              type="text"
              placeholder="请输入年龄"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">电话</div>
            <NInput
              v-model:value="store.info.profile.mobile"
              type="text"
              placeholder="请输入手机号"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">邮箱</div>
            <NInput
              v-model:value="store.info.profile.email"
              type="text"
              placeholder="请输入邮箱"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">头像</div>
            <NInput
              v-model:value="store.info.avatar.src"
              type="text"
              placeholder="请输入头像地址"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">现居地</div>
            <NCascader
              v-model:value="store.info.profile.address"
              placeholder="请选择现居地"
              expand-trigger="hover"
              :options="city"
              check-strategy="child"
              :show-path="false"
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">Github</div>
            <NInput
              v-model:value="store.info.profile.github"
              type="text"
              placeholder="请输入 Github 地址"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">求职意向</div>
            <NInput
              v-model:value="store.info.profile.intention"
              type="text"
              placeholder="请输入求职意向"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">求职状态</div>
            <NSelect
              v-model:value="store.info.profile.state"
              :options="state"
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">工作经验</div>
            <NInput
              v-model:value="store.info.profile.work"
              type="text"
              placeholder="请输入工作经验"
              clearable
            />
          </NGi>
          <NGi>
            <div class="text-base text-gray-5">期望薪资</div>
            <NInput
              v-model:value="store.info.profile.salary"
              type="text"
              placeholder="请输入期望薪资"
              clearable
            />
          </NGi>
        </NGrid>
        <div></div>
      </NSpace>
    </NDrawerContent>

    <!-- 个人信息 -->
  </NDrawer>
</template>

<style scoped>
:deep(.n-base-loading.n-base-suffix) {
  margin-right: 3px;
}
</style>
