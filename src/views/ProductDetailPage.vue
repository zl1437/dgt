<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { getProductBySlug, getCategoryBySlug, img, productCategoryPath, ROUTE_PRODUCTS, DEFAULT_INNER_BANNER_BG } from '../site.js'

const route = useRoute()
const p = computed(() => getProductBySlug(route.params.slug))
const cat = computed(() => (p.value ? getCategoryBySlug(p.value.categorySlug) : null))
const pageTitle = computed(() => p.value?.title || '产品详情')
</script>

<template>
  <InnerPageLayout v-if="p" :page-title="pageTitle" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75">
      <div class="row align-items-start">
        <div class="col-md-6 mb-4">
          <a :href="img(p.big)" target="_blank" rel="noopener noreferrer">
            <img :src="img(p.small)" class="img-fluid border" :alt="p.title" loading="lazy" />
          </a>
          <p class="small text-muted mt-2">点击图片查看大图</p>
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">{{ p.title }}</h2>
          <p class="text-muted">{{ p.category }}</p>
          <p v-if="cat">
            <RouterLink :to="productCategoryPath(cat.slug)">所属分类：{{ cat.title }}</RouterLink>
          </p>
          <p class="mt-4">
            <RouterLink class="btn-common text-center d-inline-block" :to="ROUTE_PRODUCTS">&nbsp;返回产品中心&nbsp;</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </InnerPageLayout>
  <InnerPageLayout v-else page-title="未找到" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75 text-center">
      <p>该产品不存在。</p>
      <RouterLink :to="ROUTE_PRODUCTS">返回产品中心</RouterLink>
    </div>
  </InnerPageLayout>
</template>
