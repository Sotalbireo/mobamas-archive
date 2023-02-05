<template>
  <TransitionChild
    as="div"
    enter="transition-opacity ease-linear duration-100"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity ease-linear duration-200"
    leave-from="opacity-100"
    leave-to="opacity-0"
    class="fixed z-40 w-full h-full inset-0 bg-black bg-opacity-50"
    aria-hidden="true"
  />
</template>

<script lang="ts" setup>
import { TransitionChild } from '@headlessui/vue'
</script>
