<template>
  <div class="h-screen w-screen absolute z-50 inset-0">
    <div v-if="loading"><img src="@/assets/Nino_Loading_8.gif"></div>
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', async () => {
  await Promise.resolve(() => {
    setTimeout(() => {loading.value = false}, 5000)
  })
})
</script>
