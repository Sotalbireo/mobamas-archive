<template>
  <div>
    <ul class="py-6 px-4 grid grid-cols-4 gap-3 list-none">
      <li v-for="(t, i) in thumbs" :key="i">
        <a><img :src="t" @click.prevent="" /></a>
      </li>
    </ul>
    <TransitionRoot :show="summary">
      <Backdrop @click="summary = false" />
      <TransitionChild
        as="div"
        appear
        enter="duration-300 ease-in-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in-out"
        leave-from="opacity-100"
        leave-to="opacity-0"
        class="inset-x-auto bottom-0 z-40 fixed w-full sm:w-96 overflow-hidden pt-2 px-3 pb-6-safe"
      >
        <div
          class="relative mt-2 bg-white dark:bg-neutral-800 text-black dark:text-gray-50 rounded-xl flex flex-col max-h-1/3 space-y-2"
        >
          <div class="overflow-hidden h-52 rounded-xl">
            <img src="" class="rounded-xl" />
          </div>
          <h3 class="px-4 text-xl text-center leading-8">
            <RarityBadge
              rarity="sr+"
              class="self-end"
            /><br />ｷﾐとﾎﾞｸとの観測ｾｶｲ
          </h3>
          <p class="px-4">
            ﾛﾏﾝﾁｯｸに跪いてﾌﾟﾛﾎﾟｰｽﾞ?<br />
            ﾎﾞｸとｷﾐの関係は『そう』じゃないだろう?<br />
            ﾎﾞｸらは共犯者だ｡ならば､宵闇に染まる花を贈ろう｡<br />
            怖がる必要はないさ｡見れば理解るよ｡<br />
            とても可愛らしい花だとね
          </p>
          <div class="p-2">
            <k-button rounded> 詳細ページ </k-button>
          </div>
        </div>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>

<script lang="ts" setup>
import { kButton } from 'konsta/vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import Backdrop from '@/components/backdrop.vue'
import RarityBadge from '@/components/badges/rarity.vue'
const appTitle = useAppTitle()
appTitle.value = 'アルバム'
const thumbIds = useThumbIds()

const summary = ref(false)

const thumbs = await Promise.all(
  thumbIds.value.map((t) => $fetch<string>(`/api/v1/images/thumb/${t}`))
).then((res) => res.map(addImageHeader))
</script>
