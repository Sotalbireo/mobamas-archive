<template>
  <TransitionRoot :show="show">
    <Backdrop class="!bg-black/70" @click="show = false" />
    <TransitionChild
      as="div"
      appear
      enter="transform transition ease-out duration-300 right-full"
      enter-from="translate-x-0"
      enter-to="translate-x-full"
      leave="transform transition ease-in-out duration-200"
      leave-from="translate-x-0"
      leave-to="-translate-x-full"
      class="z-40 overflow-hidden top-0 bg-white dark:bg-black w-10/12 h-dvh no-safe-areas-right absolute mr-auto"
    >
      <k-page>
        <k-navbar title="各種設定">
          <template #right>
            <k-link navbar @click="show = false">
              <XMarkIcon class="size-8" />
            </k-link>
          </template>
        </k-navbar>
        <k-list strong outline inset>
          <k-list-item
            label
            title="マイスタジオで公式背景を使う"
          >
            <template #after>
              <k-toggle
                component="div"
                :checked="useOriginalBg"
                @change="() => { useOriginalBg = !useOriginalBg }"
              />
            </template>
          </k-list-item>
        </k-list>
      </k-page>
    </TransitionChild>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import {
  kPage,
  kLink,
  kList,
  kListItem,
  kNavbar,
  kToggle,
} from 'konsta/vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import Backdrop from './backdrop.vue'

const { showMenu: show, ...setting } = useSetting()

const useOriginalBg = computed({
  get: () => setting.mypage.value.useOriginalBg,
  set: (v) => setting.mypage.value.useOriginalBg = v
})
</script>
