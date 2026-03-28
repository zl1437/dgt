<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const src = computed(() => route.meta.embedSrc || '')
const pageTitle = computed(() => route.meta.pageTitle || '页面')
</script>

<template>
  <main class="nuoer-embed">
    <iframe :src="src" class="nuoer-embed-frame" :title="pageTitle" loading="lazy" />
  </main>
</template>

<style scoped>
.nuoer-embed {
  width: 100%;
  min-height: calc(100vh - 140px);
  background: #f0f0f0;
}
.nuoer-embed-frame {
  width: 100%;
  min-height: calc(100vh - 140px);
  border: 0;
  display: block;
  vertical-align: top;
}
</style>
