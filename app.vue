<template>
  <k-app
    theme="ios"
    class="sm:!w-frame sm:!mx-auto sm:border-x !bg-transparent overflow-hidden"
  >
    <section class="flex flex-col min-h-dvh w-full overflow-y-auto bg-transparent">
      <k-navbar component="header" :title="appTitle" class="relative">
        <template #left>
          <k-link navbar @click="showLeftMenu = true">
            <CogIcon class="size-8 text-sky-600" />
          </k-link>
        </template>
        <template #right>
          <k-link navbar @click="menu = true">
            <img src="~/assets/imas_logo.svg" class="h-8 w-10 text-sky-600" />
          </k-link>
        </template>
      </k-navbar>

      <NuxtPage />

      <footer class="h-[44px]">
        <k-toolbar
          :top="false"
          component="nav"
          class="fixed inset-0 top-auto w-full sm:w-frame sm:mx-auto sm:border-x"
          inner-class="justify-evenly bg-gradient-to-b from-slate-200 to-slate-400"
        >
          <k-link toolbar @click="$router.back">
            <ChevronDoubleLeftIcon class="size-8 text-sky-600" />
          </k-link>
          <k-link toolbar @click="$router.forward">
            <ChevronDoubleRightIcon class="size-8 text-sky-600" />
          </k-link>
          <k-link toolbar @click="openShare">
            <ShareIcon class="h-7 w-8 text-sky-600" />
          </k-link>
          <k-link toolbar @click="reload">
            <ArrowPathIcon class="size-8 text-sky-600" />
          </k-link>
          <k-link toolbar @click="menu = true">
            <img src="@/assets/imas_logo.svg" class="h-8 w-10 fill-sky-600" />
          </k-link>
        </k-toolbar>
      </footer>
    </section>

    <LeftSideMenu />
    <SideMenu />
    <ShareMenu />
    <InfoSheet />
  </k-app>
</template>

<script lang="ts" setup>
import { kApp, kToolbar, kLink, kNavbar } from 'konsta/vue'
import {
  ArrowPathIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  CogIcon,
  ShareIcon,
} from '@heroicons/vue/24/solid'
import { useShare } from '@vueuse/core'
import InfoSheet from '@/components/infoSheet.vue'
import ShareMenu from '@/components/shareMenu.vue'
import LeftSideMenu from '@/components/leftSideMenu.vue'
import SideMenu from '@/components/sideMenu.vue'

const menu = useMenu()
const appTitle = useAppTitle()
const tanzaku = useTanzaku()
const thumbnail = useThumbnail()
const { showMenu: showLeftMenu } = useSetting()
const { share } = useShare()
// const shareMenu = useShareMenu()

await Promise.all([
  tanzaku.fetch(),
  thumbnail.fetchId(),
  thumbnail.fetchBlobs(),
])

function openShare() {
  share({
    title: 'モバマスアーカイブ（二宮飛鳥編）',
    text: '#モバマスアーカイブ #二宮飛鳥',
    url: location.href,
  })
}

const reload = () => location.reload()
</script>
