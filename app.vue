<template>
<k-app theme="ios" class="sm:!w-96 sm:!mx-auto sm:border-x !bg-transparent sm:overflow-x-hidden">
  <k-page class="!bg-transparent">
    <k-navbar title="">
      <template #left>
        <k-link navbar @click="gotoMystudio()">
          <DeviceTabletIcon class="h-8 w-8 text-sky-600" />
        </k-link>
      </template>
      <template #right>
        <k-link navbar @click="menu = true"><img src="~/assets/imas_logo.svg" class="h-8 w-10 text-sky-600" /></k-link>
      </template>
    </k-navbar>
    <NuxtPage />
  </k-page>
  <k-toolbar
    :top="false"
    component="nav"
    class="left-0 right-0 bottom-0 fixed w-full sm:w-96 sm:mx-auto sm:border-x"
    inner-class="justify-evenly bg-gradient-to-b from-slate-200 to-slate-400"
  >
    <k-link toolbar @click="$router.back"><ChevronDoubleLeftIcon class="h-8 w-8 text-sky-600" /></k-link>
    <k-link toolbar @click="$router.forward"><ChevronDoubleRightIcon class="h-8 w-8 text-sky-600" /></k-link>
    <k-link toolbar @click="gotoMystudio()"><DeviceTabletIcon class="h-8 w-8 text-sky-600" /></k-link>
    <k-link toolbar @click="reload"><ArrowPathIcon class="h-8 w-8 text-sky-600" /></k-link>
    <k-link toolbar @click="menu = true"><img src="@/assets/imas_logo.svg" class="h-8 w-10 fill-sky-600" /></k-link>
  </k-toolbar>
  <Menu />
  <info-sheet />
</k-app>
</template>

<script lang="ts" setup>
import { kApp, kToolbar, kLink, kPage, kNavbar } from 'konsta/vue'
import { ArrowPathIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, DeviceTabletIcon} from '@heroicons/vue/24/solid'
import InfoSheet from '@/components/infoSheet.vue';
import Menu from '@/components/menu.vue';

const infoSheet = useInfoSheet()
const menu = useMenu()

const gotoMystudio = () => {
  location.hash = ''
  localStorage.removeItem('myStudio')
  reload()
}

const reload = () => location.reload()
</script>
