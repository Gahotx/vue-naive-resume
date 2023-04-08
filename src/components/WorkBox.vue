<script setup lang="ts">
import { computed } from 'vue'
import { Sortable } from 'sortablejs-vue3'
import type { AutoScrollOptions } from 'sortablejs/plugins'
import type { SortableEvent, SortableOptions } from 'sortablejs'
import type { EducationExp, WorkExp, ProjectExp } from '@/types'

const props = defineProps<{
  list: Array<EducationExp | ProjectExp | WorkExp>
}>()
const options = computed<SortableOptions | AutoScrollOptions>(() => {
  return {
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'drag',
    scroll: true,
    forceFallback: true,
    scrollSensitivity: 50,
    scrollSpeed: 10,
    bubbleScroll: true
  }
})
const moveItemInArray = <T>(array: T[], from: number, to: number) => {
  const item = array.splice(from, 1)[0]
  array.splice(to, 0, item)
}
const moveEvent = (evt: SortableEvent) => {
  moveItemInArray(props.list, evt.oldIndex as number, evt.newIndex as number)
}
</script>

<template>
  <Sortable
    :list="list"
    item-key="id"
    :options="options"
    ref="sortable"
    @end="moveEvent"
  >
    <template #item="{ element, index }">
      <NCollapse
        class="b-1 b-solid b-gray-300 b-rd-8px box-border px-15px relative not-last-mb-15px"
        :key="index"
      >
        <NCollapseItem :name="index + 1">
          <template #header>
            <slot name="header" :item="element"></slot>
          </template>
          <template #header-extra>
            <slot name="header-extra" :item="element"></slot>
          </template>
          <slot name="content" :item="element"></slot>
        </NCollapseItem>
        <div
          class="i-mdi-close-circle-outline absolute -right-5px -top-5px bg-gray-5 z-2 cursor-pointer hover-bg-gray-7 op-0"
          @click="$emit('remove', index)"
        ></div>
      </NCollapse>
    </template>
  </Sortable>
</template>

<style scoped>
:deep(.n-collapse-item__header) {
  height: 60px;
  line-height: 60px;
}
:deep(.n-collapse-item__content-inner) {
  padding-top: 10px !important;
  padding-bottom: 18px;
}
.n-collapse::after {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background-color: #fff;
  /* border: 1px solid black; */
  z-index: 1;
  opacity: 0;
}
.n-collapse:not(.ghost):hover::after,
.n-collapse:not(.ghost):hover .i-mdi-close-circle-outline {
  opacity: 1;
}
.n-collapse::after,
.i-mdi-close-circle-outline {
  transition: all 0.4s;
}
.n-collapse,
.n-collapse .n-collapse-item :deep(.n-collapse-item__header) {
  cursor: move;
}
.ghost {
  opacity: 0.5;
  background: #fff;
  border: 1px dashed #ccc;
}
.drag {
  background: #f5f5f5;
}
</style>
