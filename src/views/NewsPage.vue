<script setup>
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { img, newsItems, DEFAULT_INNER_BANNER_BG } from '../site.js'
</script>

<template>
  <InnerPageLayout page-title="新闻中心" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="blog-section pt-75 pb-75" style="background: #f8f9fa">
      <div class="container">
        <div class="row">
          <div v-for="item in newsItems" :key="item.id" class="col-md-6 mb-4">
            <div class="blog-single-carousel">
              <div class="blog-thumb">
                <RouterLink :to="`/c_news/${item.id}`">
                  <img :src="img(item.cover)" :alt="item.title" loading="lazy" />
                </RouterLink>
              </div>
              <div class="blog-content">
                <h5>
                  <RouterLink :to="`/c_news/${item.id}`">{{ item.title }}</RouterLink>
                </h5>
                <p class="text-muted small mb-2">{{ item.summary }}</p>
                <div class="blog-learn-more">
                  <RouterLink :to="`/c_news/${item.id}`">
                    &nbsp;更多&nbsp;
                    <i class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </InnerPageLayout>
</template>
