<template>
  <k-app
    theme="ios"
    class="sm:!w-96 sm:!mx-auto sm:border-x !bg-transparent overflow-hidden"
  >
    <k-page class="!bg-transparent">
      <k-navbar component="nav" :title="appTitle" class="relative">
        <template #left>
          <k-link navbar @click="gotoMystudio()">
            <DeviceTabletIcon class="h-8 w-8 text-sky-600" />
          </k-link>
        </template>
        <template #right>
          <k-link navbar @click="menu = true">
            <img src="~/assets/imas_logo.svg" class="h-8 w-10 text-sky-600" />
          </k-link>
        </template>
      </k-navbar>
      <NuxtPage />
      <k-toolbar
        :top="false"
        component="nav"
        class="left-0 right-0 bottom-0 sticky w-full sm:w-96 sm:mx-auto sm:border-x"
        inner-class="justify-evenly bg-gradient-to-b from-slate-200 to-slate-400"
      >
        <k-link toolbar @click="$router.back">
          <ChevronDoubleLeftIcon class="h-8 w-8 text-sky-600" />
        </k-link>
        <k-link toolbar @click="$router.forward">
          <ChevronDoubleRightIcon class="h-8 w-8 text-sky-600" />
        </k-link>
        <k-link toolbar @click="gotoMystudio()">
          <DeviceTabletIcon class="h-8 w-8 text-sky-600" />
        </k-link>
        <k-link toolbar @click="reload">
          <ArrowPathIcon class="h-8 w-8 text-sky-600" />
        </k-link>
        <k-link toolbar @click="menu = true">
          <img src="@/assets/imas_logo.svg" class="h-8 w-10 fill-sky-600" />
        </k-link>
      </k-toolbar>
    </k-page>
    <SideMenu />
    <InfoSheet />
  </k-app>
</template>

<script lang="ts" setup>
import { kApp, kToolbar, kLink, kPage, kNavbar } from 'konsta/vue'
import {
  ArrowPathIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  DeviceTabletIcon,
} from '@heroicons/vue/24/solid'
import InfoSheet from '@/components/infoSheet.vue'
import SideMenu from '@/components/sideMenu.vue'

const router = useRouter()
const menu = useMenu()
const appTitle = useAppTitle()
const lsIds = useLsIds()
const thumbIds = useThumbIds()

await Promise.all([
  $fetch<string[]>('/api/v1/images/ls'),
  $fetch<string[]>('/api/v1/images/thumb'),
]).then((res) => {
  lsIds.value = [...res[0]]
  thumbIds.value = [...res[1]]
})

const gotoMystudio = () => {
  router.push('/')
}

const reload = () => location.reload()
</script>
