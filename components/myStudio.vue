<template>
<k-block class="!p-0">
  <ul class="grid grid-cols-5 list-none">
    <li class="w-full h-auto" v-for="(slab, i) in slabs" :class="slotId == i ? 'ring-4 ring-inset ring-pink-500' : ''"><a @click.prevent="slotId = i"><img v-if="slab != ''" :src="slab" class="w-full h-auto" /></a></li>
  </ul>
  <k-card v-if="slotId != -1" content-wrap-padding="p-2" class="relative !h-1/3 mb-20">
    <template #header>
      <div class="flex justify-between -mx-1 -my-2">
        <p></p>
        <k-link navbar @click="slotId = -1">
          <XMarkIcon class="h-6 w-6" />
        </k-link>
      </div>
    </template>
    <ul class="grid grid-cols-4 gap-3 list-none h-1/3">
      <li v-for="(t, i) in thumbs"><a @click="onChangeSlab(slotId, i)"><img :src="t" /></a></li>
    </ul>
  </k-card>
</k-block>
</template>

<script lang="ts" setup>
import { kBlock, kCard, kLink, kPage } from 'konsta/vue'
import { sampleSize as sample } from 'lodash'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const route = useRoute()

const addImageHeader = (s: string) => `data:image/webp;base64,${s}`

const [imageIds, thumbIds] = await Promise.all([$fetch<string[]>('/api/v1/images/ls'), $fetch<string[]>('/api/v1/images/thumb')])
const slabs = ref<string[]>([])
const thumbs = ref<string[]>([])
const slotId = ref(-1)
const slabIds = ref<string[]>([])

async function onChangeSlab(_slotId: number, thumbId: number) {
  const newSlabId = thumbIds[thumbId].substring(thumbIds[thumbId].indexOf('_') + 1)
  const newSlab = addImageHeader(await $fetch<string>(`/api/v1/images/ls/${newSlabId}`))
  slabs.value.splice(_slotId, 1, newSlab)
  slabIds.value.splice(_slotId, 1, newSlabId)
  location.hash = `#${slabIds.value.join(',')}`
  localStorage.setItem('myStudio', slabIds.value.join(','))
  slotId.value = -1
}

onMounted(async () => {
  const savedKey = (localStorage.getItem('myStudio') ?? '').split(',')
  const hash = route.hash.substring(1).split(',')

  if (hash.length == 5 && hash.every((v) => imageIds.includes(v))) {
    slabIds.value = hash
  } else if (savedKey.length == 5) {
    slabIds.value = savedKey
  } else {
    slabIds.value = sample(imageIds, 5)
  }
  location.hash = `#${slabIds.value.join(',')}`
  localStorage.setItem('myStudio', slabIds.value.join(','))
  slabs.value = await (await Promise.all(slabIds.value.map(i => $fetch<string>(`/api/v1/images/ls/${i}`)))).map(addImageHeader)
  thumbs.value = await (await Promise.all(thumbIds.map(i => $fetch<string>(`/api/v1/images/thumb/${i}`)))).map(addImageHeader)
})
</script>
