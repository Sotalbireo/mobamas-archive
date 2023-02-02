<template>
<k-panel side="right" :opened="menu" @backdropclick="menu = false" class="relative">
  <k-page>
    <k-navbar title="">
      <template #right>
        <k-link navbar @click="menu = false">
          <XMarkIcon class="h-8 w-8" />
        </k-link>
      </template>
    </k-navbar>
    <k-block strong class="space-y-4">
      <p>
        <k-button @click="() => {infoSheet = true; menu = false}">このサイトについて</k-button>
      </p>
    </k-block>
  </k-page>
</k-panel>
</template>

<script lang="ts" setup>
import { kButton, kPage, kPanel, kLink, kBlock, kNavbar } from 'konsta/vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const menu = useMenu()
const infoSheet = useInfoSheet()
</script>
