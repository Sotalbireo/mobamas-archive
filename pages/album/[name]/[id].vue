<template>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
const route = useRoute()

const name = route.params.name
const id = route.params.id

const { data } = useFetch('/api/v1/images/characters')
</script>
