<template>
  <k-block class="!p-0">
    <ul class="grid grid-cols-5 list-none">
      <li v-for="(slab, i) in slabs" :key="i" class="w-full h-auto">
        <a @click.prevent="onClickSlab(i)"
          ><img
            v-if="slab != ''"
            :src="slab"
            class="w-full h-auto"
            :class="slotId == i ? 'border-b-4 border-pink-500' : ''"
        /></a>
      </li>
    </ul>
    <TransitionRoot
      :show="slotId != -1"
      enter="ease-out duration-200"
      enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leave-from="opacity-100 translate-y-0 sm:scale-100"
      leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <k-card content-wrap-padding="p-2" class="relative mb-12">
        <template #header>
          <div class="flex justify-between -mx-1 -my-2">
            <div />
            <k-link navbar @click="slotId = -1">
              <XMarkIcon class="h-6 w-6" />
            </k-link>
          </div>
        </template>
        <ul
          class="grid grid-cols-4 gap-3 list-none max-h-80 overflow-y-scroll pb-4"
        >
          <li v-for="(t, i) in thumbs" :key="i">
            <a @click="onChangeSlab(slotId, i)"><img :src="t" /></a>
          </li>
        </ul>
      </k-card>
    </TransitionRoot>
  </k-block>
</template>

<script lang="ts" setup>
import { kBlock, kCard, kLink } from 'konsta/vue'
import { TransitionRoot } from '@headlessui/vue'
import sample from 'lodash/sampleSize'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const route = useRoute()
const lsIds = useLsIds()
const thumbIds = useThumbIds()
const appTitle = useAppTitle()
appTitle.value = ''

const slabs = ref<string[]>([])
const thumbs = ref<string[]>([])
const slotId = ref(-1)
const slabIds = ref<string[]>([])

function onClickSlab(_slotId: number) {
  if (slotId.value === _slotId) {
    slotId.value = -1
  } else {
    slotId.value = _slotId
  }
}

async function onChangeSlab(_slotId: number, thumbId: number) {
  const newSlabId = thumbIds.value[thumbId].substring(
    thumbIds.value[thumbId].indexOf('_') + 1
  )
  const newSlab = addImageHeader(
    await $fetch<string>(`/api/v1/images/ls/${newSlabId}`)
  )
  slabs.value.splice(_slotId, 1, newSlab)
  slabIds.value.splice(_slotId, 1, newSlabId)
  location.hash = `#${slabIds.value.join(',')}`
  localStorage.setItem('myStudio', slabIds.value.join(','))
  slotId.value = -1
}

onMounted(async () => {
  const savedKey = (localStorage.getItem('myStudio') ?? '').split(',')
  const hash = route.hash.substring(1).split(',')

  if (hash.length === 5 && hash.every((v) => lsIds.value.includes(v))) {
    slabIds.value = hash
  } else if (savedKey.length === 5) {
    slabIds.value = savedKey
  } else {
    slabIds.value = sample(lsIds.value, 5)
  }
  location.hash = `#${slabIds.value.join(',')}`
  localStorage.setItem('myStudio', slabIds.value.join(','))
  slabs.value = await (
    await Promise.all(
      slabIds.value.map((i) => $fetch<string>(`/api/v1/images/ls/${i}`))
    )
  ).map(addImageHeader)
  thumbs.value = await (
    await Promise.all(
      thumbIds.value.map((i) => $fetch<string>(`/api/v1/images/thumb/${i}`))
    )
  ).map(addImageHeader)
})
</script>
