<template>
  <TransitionRoot :show="menu">
    <Backdrop @click="menu = false" />
    <TransitionChild
      as="div"
      appear
      enter="transform transition ease-in-out duration-300 left-full"
      enter-from="translate-x-0"
      enter-to="-translate-x-full"
      leave="transform transition ease-in-out duration-200"
      leave-from="translate-x-0"
      leave-to="translate-x-full"
      class="z-40 max-w-full overflow-hidden top-0 right-0 max-h-full bg-white dark:bg-black w-80 h-screen no-safe-areas-left absolute"
    >
      <k-page>
        <k-navbar title="">
          <template #right>
            <k-link navbar @click="menu = false">
              <XMarkIcon class="size-8" />
            </k-link>
          </template>
        </k-navbar>
        <k-list strong outline inset>
          <k-list-item
            link
            title="マイスタジオ"
            @click="goto('/')"
          >
            <template #media>
              <DeviceTabletIcon class="size-8 text-sky-600" />
            </template>
          </k-list-item>
          <k-list-item
            link
            title="アルバム"
            @click="goto('/album')"
          >
            <template #media>
              <PhotoIcon class="size-8 text-amber-500" />
            </template>
          </k-list-item>
        </k-list>
        <k-block strong class="space-y-4">
          <p>
            <k-button
              @click="
                () => {
                  infoSheet = true
                  menu = false
                }
              "
            >
              このサイトについて
            </k-button>
          </p>
        </k-block>
      </k-page>
    </TransitionChild>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import {
  kButton,
  kPage,
  kLink,
  kList,
  kListItem,
  kBlock,
  kNavbar,
} from 'konsta/vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { DeviceTabletIcon, PhotoIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import Backdrop from './backdrop.vue'

const infoSheet = useInfoSheet()
const menu = useMenu()
const { push } = useRouter()

const goto = (path: string) => { push(path); menu.value = false }
</script>
