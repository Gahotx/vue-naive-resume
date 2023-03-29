<script setup lang="ts">
import { ref, inject } from 'vue'
import { city } from '@/data'
import type { Select } from '@/types'
import type { FormInst, FormRules } from 'naive-ui'
import { useTitleStore, useUserStore } from '@/stores'

const titleStore = useTitleStore()
const userStore = useUserStore()

const active = inject<boolean>('active')
const placement = inject<string>('placement')

const outerWidth = ref(800)
const formRef = ref<FormInst | null>(null)
const size = ref<'small' | 'medium' | 'large'>('medium')
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
const rules: FormRules = {
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
    <NDrawerContent title="编辑简历" header-style="font-size: 22px">
      <NSpace vertical>
        <!-- 个人信息 -->
        <div>
          <div class="text-lg mb-18px">
            {{ titleStore.list.profile }}
          </div>
          <NForm
            ref="formRef"
            :model="userStore.list"
            :rules="rules"
            :size="size"
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
