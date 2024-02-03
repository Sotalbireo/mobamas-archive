<template>
  <img v-if="useOriginalBg" src="~/assets/bnei/bg_mypage_t.jpg" class="w-full">
  <div v-else class="mt-8" />
  <div class="relative">
    <ul class="grid grid-cols-5 list-none">
      <li v-for="(t, i) in tanzakus" :key="i" class="relative w-full h-auto">
        <a :class="slotId == i ? 'before:absolute before:inset-0 before:ring-8 before:ring-pink-500/70 before:ring-inset before:rounded' : ''" @click.prevent="onClickSlab(i)"
          ><img
            v-if="t"
            :src="t"
            class="w-full h-auto"
        /></a>
      </li>
    </ul>
  </div>
  <img v-if="useOriginalBg" src="~/assets/bnei/bg_mypage_b.jpg" class="w-full">
  <TransitionRoot
    :show="slotId != -1"
    appear
    enter="transition transform ease-out duration-150"
    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enter-to="opacity-100 translate-y-0 sm:scale-100"
    leave="transition transform ease-in duration-150"
    leave-from="opacity-100 translate-y-0 sm:scale-100"
    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    class="absolute top-[30%]"
  >
    <k-card content-wrap-padding="p-2">
      <template #header>
        <div class="flex justify-between -mx-1 -mt-2 -mb-4">
          <div />
          <k-link navbar @click="slotId = -1">
            <XMarkIcon class="size-6" />
          </k-link>
        </div>
      </template>
      <ul
        class="grid grid-cols-4 gap-3 list-none max-h-72 overflow-y-auto pb-4"
      >
        <li v-for="(t, i) in thumbs" :key="i">
          <img :src="t" @click="onChangeSlab(slotId, i)" />
        </li>
      </ul>
    </k-card>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { kCard, kLink } from 'konsta/vue'
import { TransitionRoot } from '@headlessui/vue'
import sample from 'lodash/sampleSize'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const router = useRouter()
const tanzaku = useTanzaku()
const { list: thumbList, blobs: thumbBlobs } = useThumbnail()
const setting = useSetting()
useAppTitle().value = ''

const thumbs = computed(() => [...thumbBlobs.value.values()])
const slotId = ref(-1)

const tanzakuIds = computed({
  get: () => setting.mypage.value.unit1.split(','),
  set: (v) => setting.mypage.value.unit1 = v.join(',')
})
const useOriginalBg = computed(() => setting.mypage.value.useOriginalBg)

function onClickSlab(_slotId: number) {
  if (slotId.value === _slotId) {
    slotId.value = -1
  } else {
    slotId.value = _slotId
  }
}

async function onChangeSlab(_slotId: number, thumbId: number) {
  const newSlabId = thumbList.value![thumbId].substring(
    thumbList.value![thumbId].indexOf('_') + 1
  )
  const newSlab = addImageHeader(
    await $fetch<string>(`/api/v1/images/tanzaku/${newSlabId}`)
  )
  tanzakus.value?.splice(_slotId, 1, newSlab)
  tanzakuIds.value.splice(_slotId, 1, newSlabId)
  await router.replace({ hash: '#' + tanzakuIds.value.join(',') })
  slotId.value = -1
}

const hash = useRoute().hash.substring(1).split(',')

if (hash.length === 5 && hash.every((v) => tanzaku.list.value.includes(v))) {
  tanzakuIds.value = hash
} else if (tanzakuIds.value.length === 5) {
  tanzakuIds.value = tanzakuIds.value
} else {
  tanzakuIds.value = sample(tanzaku.list.value, 5)
}
await router.replace({ hash: '#' + tanzakuIds.value.join(',') })

const { data: tanzakus } = await useAsyncData('tanzakus', () => Promise.all(tanzakuIds.value.map((i) => $fetch(`/api/v1/images/tanzaku/${i}`))), {
  transform: res => res.map(addImageHeader)
})
</script>
