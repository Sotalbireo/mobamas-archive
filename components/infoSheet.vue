<template>
  <TransitionRoot :show="infoSheet">
    <Backdrop @click="infoSheet = false" />
    <TransitionChild
      as="div"
      appear
      enter="transform transition ease-in-out duration-300 top-full bottom-auto"
      enter-from="translate-y-0"
      enter-to="-translate-y-full"
      leave="transform transition ease-in-out duration-200"
      leave-from="translate-y-0"
      leave-to="translate-y-full"
      class="inset-x-auto bottom-0 z-40 fixed max-w-full overflow-hidden max-h-full bg-md-light-surface dark:bg-md-dark-surface pb-safe sm:w-96"
    >
      <k-navbar title="モバマスアーカイブ（二宮飛鳥編）">
        <template #right>
          <k-link navbar @click="infoSheet = false">
            <XMarkIcon class="h-6 w-6" />
          </k-link>
        </template>
      </k-navbar>
      <k-block>
        <ul>
          <li>
            当サイトは<NuxtLink
              to="https://www.bandainamcoent.co.jp/info/videopolicy/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
            >
              バンダイナムコエンターテインメントゲーム実況ポリシー </NuxtLink
            >に準拠することを心がけています。
          </li>
          <li>
            当サイトに関するご意見ご要望、その他ご連絡などは、<NuxtLink
              to="https://twitter.com/sota_n"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
            >
              @sota_n@twitter.com </NuxtLink
            >にお送りください。
          </li>
        </ul>
        <p class="pt-4 leading-3">
          <small>
            "THE IDOLM@STER CINDERELLA GIRLS"<br />©T.K. THE IDOLM@STER™ & ©BNEI
          </small>
        </p>
        <ul class="pt-4 leading-3 list-disc list-inside">
          <li class="text-xs">
            <NuxtLink
              to="https://github.com/sotalbireo/mobamas-archive"
              target="_blank"
            >
              "sotalbireo/mobamas-archive" v{{ pkg.version }}
            </NuxtLink>
          </li>
          <li class="text-xs">
            "sotalbireo/mobamastorage-ninomiyaasuka" v20230203.1
          </li>
        </ul>
      </k-block>
    </TransitionChild>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { kBlock, kNavbar, kLink } from 'konsta/vue'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import Backdrop from './backdrop.vue'
import pkg from '@/package.json'

const infoSheet = useInfoSheet()
</script>
