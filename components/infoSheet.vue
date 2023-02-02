<template>
<k-sheet class="pb-safe left-auto right-auto sm:w-96" :opened="infoSheet" @backdropclick="infoSheet = false">
  <k-navbar title="モバマスアーカイブ（二宮飛鳥編）">
    <template #right>
      <k-link navbar @click="infoSheet = false">Close</k-link>
    </template>
  </k-navbar>
  <k-block>
    <ul>
      <li>当サイトは<NuxtLink to="https://www.bandainamcoent.co.jp/info/videopolicy/" target="_blank"
          rel="noopener noreferrer">バンダイナムコエンターテインメントゲーム実況ポリシー</NuxtLink>に準拠することを心がけています。</li>
      <li>当サイトに関するご意見ご要望、その他ご連絡などは、Twitterアカウント<NuxtLink to="https://twitter.com/sota_n" target="_blank" rel="noopener noreferrer" class="px-1">@sota_n</NuxtLink>にお送りください。</li>
      <li></li>
    </ul>
    <p class="pt-4 leading-3"><small>
      "THE IDOLM@STER CINDERELLA GIRLS"<br />©T.K. THE IDOLM@STER™ & ©BNEI
    </small></p>
  </k-block>
</k-sheet>
</template>

<script lang="ts" setup>
import { kBlock, kNavbar, kLink, kSheet } from 'konsta/vue'

const infoSheet = useInfoSheet()
</script>
