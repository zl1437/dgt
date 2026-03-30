<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import ProductCatalogSidebar from '../components/ProductCatalogSidebar.vue'
import { getCategoryBySlug, productsInCategory, ROUTE_PRODUCTS, DEFAULT_INNER_BANNER_BG } from '../site.js'

const route = useRoute()
const slug = computed(() => route.params.slug)
const cat = computed(() => getCategoryBySlug(slug.value))
const items = computed(() => (cat.value ? productsInCategory(cat.value.slug) : []))
const pageTitle = computed(() => cat.value?.title || '产品分类')
</script>

<template>
  <InnerPageLayout v-if="cat" :page-title="pageTitle" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="product-two-col pb-75">
      <div class="container pt-75">
        <div class="row">
          <div class="col-lg-9">
            <ProductPortfolio
              v-if="items.length"
              embedded
              :title="`${cat.title} · 产品列表`"
              :items="items"
              section-class="pb-0"
            />
            <div v-else class="text-center py-5">
              <p class="lead">该分类暂无线上陈列样品，欢迎来电或邮件咨询定制。</p>
              <RouterLink class="btn btn-common mt-3" :to="ROUTE_PRODUCTS">返回产品中心</RouterLink>
            </div>
          </div>
          <div class="col-lg-3">
            <ProductCatalogSidebar />
          </div>
        </div>
      </div>
    </div>
  </InnerPageLayout>
  <InnerPageLayout v-else page-title="未找到" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75 text-center">
      <p>不存在的产品分类。</p>
      <RouterLink :to="ROUTE_PRODUCTS">返回产品中心</RouterLink>
    </div>
  </InnerPageLayout>
</template>
