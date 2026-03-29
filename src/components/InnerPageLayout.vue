<script setup>
import InnerPageBanner from './InnerPageBanner.vue'
import { DEFAULT_INNER_BANNER_BG } from '../site.js'

defineProps({
  pageTitle: { type: String, required: true },
  bannerBg: { type: String, default: () => DEFAULT_INNER_BANNER_BG },
})
</script>

<template>
  <div class="inner-page-root">
    <InnerPageBanner :page-title="pageTitle" :banner-bg="bannerBg" />
    <div class="inner-page-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.inner-page-body {
  min-height: 40vh;
  background: #fff;
}
</style>
