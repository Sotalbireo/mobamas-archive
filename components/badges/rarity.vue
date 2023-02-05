<template>
  <span
    v-if="rarity == 'r'"
    class="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold grow-0 max-w-max"
  >
    <span class="bg-clip-text text-transparent" :class="$s.bg_silver"
      >RARE</span
    ></span
  >
  <span
    v-else-if="rarity == 'r+'"
    class="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold grow-0 max-w-max"
    ><span class="bg-clip-text text-transparent" :class="$s.bg_silver"
      >RARE+</span
    ></span
  >
  <span
    v-else-if="rarity == 'sr'"
    class="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold grow-0 max-w-max"
  >
    <span class="bg-clip-text text-transparent" :class="$s.bg_gold"
      >S RARE</span
    >
  </span>
  <span
    v-else-if="rarity == 'sr+'"
    class="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold grow-0 max-w-max"
  >
    <span class="bg-clip-text text-transparent" :class="$s.bg_gold"
      >S RARE+</span
    >
  </span>
</template>

<script lang="ts" setup>
interface Props {
  rarity: 'r' | 'r+' | 'sr' | 'sr+'
}

defineProps<Props>()
const $s = useCssModule()
</script>

<style lang="sass" module>
.bg_gold
  background-image: linear-gradient(to bottom, #d3a908 0%, #fafad6 30%, #d3a908 100%)

.bg_silver
  background-image: linear-gradient(to bottom, #939598 0%, #f4f4f4 30%, #939598 100%)
</style>
