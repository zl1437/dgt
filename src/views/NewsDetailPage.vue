<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { getNewsById, DEFAULT_INNER_BANNER_BG } from '../site.js'

const route = useRoute()
const article = computed(() => getNewsById(route.params.id))
</script>

<template>
  <InnerPageLayout v-if="article" :page-title="article.title" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <article class="news-article" v-html="article.body"></article>
        </div>
      </div>
    </div>
  </InnerPageLayout>
  <InnerPageLayout v-else page-title="未找到" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75 text-center">
      <p>该新闻不存在或已下线。</p>
    </div>
  </InnerPageLayout>
</template>

<style scoped>
.news-article :deep(p) {
  line-height: 1.8;
  margin-bottom: 1rem;
}
</style>
