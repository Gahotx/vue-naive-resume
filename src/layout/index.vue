<script setup lang="ts">
import ThePage from '@/views/index.vue'
</script>

<template>
  <header class="bg-white b-b b-b-solid b-b-gray-2 print-hidden">
    <div class="flex justify-center items-center h-60px">
      <div class="flex justify-start items-center grow-1 ml-100px">
        <img class="w-35px" src="@/assets/logo.svg" alt="logo" />
        <span class="ml-5px text-5">Vue Naive Resume</span>
      </div>

      <div class="flex shrink-0 gap-30px">
        <NButton size="small">切换模板</NButton>
        <NButton size="small">编辑简历</NButton>
        <NButton size="small">PDF 下载</NButton>
        <NButton size="small">导入配置</NButton>
        <NButton size="small">导出配置</NButton>
      </div>

      <div class="flex justify-end grow-1 mr-100px">
        <a
          href="https://github.com/Gahotx/vue-naive-resume"
          class="i-mdi-github text-30px color-gray-7 text-op-70 hover-text-op-100 transition-color-300"
          target="_blank"
          title="项目地址"
        ></a>
      </div>
    </div>
  </header>

  <ThePage />
</template>

<style scoped></style>
