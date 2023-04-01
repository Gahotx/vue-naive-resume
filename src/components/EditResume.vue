<script setup lang="ts">
import { ref, inject } from 'vue'
import { city } from '@/data'
import WorkBox from './WorkBox.vue'
import type { Select } from '@/types'
import type { FormInst, FormRules } from 'naive-ui'
import { useEduStore, useTitleStore, useUserStore } from '@/stores'

// const aboutStore = useAboutStore()
// const certStore = useCertStore()
const eduStore = useEduStore()
// const projectStore = useProjectStore()
// const skillStore = useSkillStore()
const titleStore = useTitleStore()
const userStore = useUserStore()
// const workStore = useWorkStore()

const active = inject<boolean>('active')
const placement = inject<string>('placement')

const outerWidth = ref(800)
const userForm = ref<FormInst | null>(null)
const eduForm = ref<FormInst | null>(null)
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)

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
const grade: Array<Select> = [
  {
    label: '初中及以下',
    value: '初中及以下'
  },
  {
    label: '中专/中技',
    value: '中专/中技'
  },
  {
    label: '高中',
    value: '高中'
  },
  {
    label: '大专',
    value: '大专'
  },
  {
    label: '本科',
    value: '本科'
  },
  {
    label: '硕士',
    value: '硕士'
  },
  {
    label: '博士',
    value: '博士'
  }
]
const userRules: FormRules = {
  name: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入姓名'
  },
  gender: {
    trigger: ['blur', 'change'],
    message: '请选择性别'
  },
  age: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入年龄'
  },
  phone: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入邮箱'
  },
  email: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入邮箱'
  },
  avatar: {
    trigger: ['blur', 'input'],
    message: '请输入头像地址'
  },
  address: {
    trigger: ['blur', 'change'],
    message: '请选择现居地'
  },
  github: {
    trigger: ['blur', 'input'],
    message: '请输入 Github 地址'
  },
  intention: {
    trigger: ['blur', 'input'],
    message: '请输入求职意向'
  },
  state: {
    trigger: ['blur', 'change'],
    message: '请选择求职状态'
  },
  work: {
    trigger: ['blur', 'input'],
    message: '请输入工作经验'
  },
  salary: {
    trigger: ['blur', 'input'],
    message: '请输入期望薪资'
  }
}
</script>

<template>
  <NDrawer v-model:show="active" :width="outerWidth" :placement="placement">
    <NDrawerContent
      title="编辑简历"
      header-style="font-size: 22px"
      :native-scrollbar="false"
    >
      <NSpace vertical>
        <!-- 个人信息 -->
        <div>
          <div class="text-lg mb-12px mt-5px">
            {{ titleStore.list.profile }}
          </div>
          <NForm
            ref="userForm"
            :model="userStore.list"
            :rules="userRules"
            label-placement="top"
            :show-feedback="false"
          >
            <NGrid y-gap="10" x-gap="15" :cols="2">
              <NFormItemGi label="姓名" path="name">
                <NInput
                  v-model:value="userStore.list.name"
                  type="text"
                  placeholder="请输入姓名"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="性别" path="gender">
                <NSelect
                  v-model:value="userStore.list.gender"
                  :options="gender"
                />
              </NFormItemGi>
              <NFormItemGi label="年龄" path="age">
                <NInput
                  v-model:value="userStore.list.age"
                  :allow-input="onlyAllowNumber"
                  type="text"
                  placeholder="请输入年龄"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="电话" path="phone">
                <NInput
                  v-model:value="userStore.list.phone"
                  :allow-input="onlyAllowNumber"
                  type="text"
                  placeholder="请输入手机号"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="邮箱" path="email">
                <NInput
                  v-model:value="userStore.list.email"
                  type="text"
                  placeholder="请输入邮箱"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="头像" path="avatar">
                <NInput
                  v-model:value="userStore.list.avatar"
                  type="text"
                  placeholder="请输入头像地址"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="现居地" path="address">
                <NCascader
                  v-model:value="userStore.list.address"
                  placeholder="请选择现居地"
                  expand-trigger="hover"
                  :options="city"
                  check-strategy="child"
                  :show-path="false"
                />
              </NFormItemGi>
              <NFormItemGi label="Github" path="github">
                <NInput
                  v-model:value="userStore.list.github"
                  type="text"
                  placeholder="请输入 Github 地址"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="求职意向" path="intention">
                <NInput
                  v-model:value="userStore.list.intention"
                  type="text"
                  placeholder="请输入求职意向"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="求职状态" path="state">
                <NSelect
                  v-model:value="userStore.list.state"
                  :options="state"
                />
              </NFormItemGi>
              <NFormItemGi label="工作经验" path="work">
                <NInput
                  v-model:value="userStore.list.work"
                  type="text"
                  placeholder="请输入工作经验"
                  clearable
                />
              </NFormItemGi>
              <NFormItemGi label="期望薪资" path="salary">
                <NInput
                  v-model:value="userStore.list.salary"
                  type="text"
                  placeholder="请输入期望薪资"
                  clearable
                />
              </NFormItemGi>
            </NGrid>
          </NForm>
        </div>
        <!-- 教育背景 -->
        <div>
          <div class="text-lg mb-12px mt-15px">
            {{ titleStore.list.educationList }}
          </div>
          <WorkBox :list="eduStore.list">
            <template #header="{ item }">{{ item.school }}</template>
            <template #header-extra="{ item }">
              {{ item.major }}
              <NDivider vertical />
              {{ item.grade }}
              <NDivider vertical />
              {{ item.time[0] }} - {{ item.time[1] }}
            </template>
            <template #content="{ item }">
              <NForm
                ref="eduForm"
                :model="item"
                label-placement="top"
                :show-feedback="false"
              >
                <NGrid y-gap="10" x-gap="15" :cols="2">
                  <NFormItemGi label="学校名称" path="school">
                    <NInput
                      v-model:value="item.school"
                      type="text"
                      placeholder="请输入学校名称"
                      clearable
                    />
                  </NFormItemGi>
                  <NFormItemGi label="学历" path="grade">
                    <NSelect v-model:value="item.grade" :options="grade" />
                  </NFormItemGi>
                  <NFormItemGi label="在校时间" path="time">
                    <NDatePicker
                      v-model:formatted-value="item.time"
                      value-format="yyyy.MM"
                      type="monthrange"
                      clearable
                    />
                  </NFormItemGi>
                  <NFormItemGi label="专业" path="major">
                    <NInput
                      v-model:value="item.major"
                      type="text"
                      placeholder="请输入专业"
                      clearable
                    />
                  </NFormItemGi>
                  <NFormItemGi span="2" label="在校经历" path="eduExp">
                    <NInput
                      v-model:value="item.eduExp"
                      type="textarea"
                      placeholder="请输入在校经历"
                    />
                  </NFormItemGi>
                </NGrid>
              </NForm>
            </template>
          </WorkBox>
        </div>
      </NSpace>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>
/* Select 箭头 与 Input 叉叉对齐 */
:deep(.n-base-loading.n-base-suffix) {
  margin-right: 3px;
}
.n-divider.n-divider--vertical {
  background-color: rgba(209, 213, 219, var(--un-border-opacity));
}
</style>
