<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import ProductCatalogSidebar from '../components/ProductCatalogSidebar.vue'
import { products, filterProductsByQuery, DEFAULT_INNER_BANNER_BG } from '../site.js'

const route = useRoute()
const q = computed(() => (route.query.q || '').toString().trim())
const filteredProducts = computed(() => filterProductsByQuery(q.value))
</script>

<template>
  <InnerPageLayout page-title="产品中心" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <!-- 与参考站一致：左侧产品网格，右侧搜索 + 产品目录 -->
    <div class="product-two-col pb-75">
      <div class="container pt-75">
        <div class="row">
          <div class="col-lg-9">
            <template v-if="q">
              <p class="mb-4">
                搜索「<strong>{{ q }}</strong>」的结果（{{ filteredProducts.length }} 条）
              </p>
              <ProductPortfolio
                v-if="filteredProducts.length"
                embedded
                title="搜索结果"
                :items="filteredProducts"
                section-class="pt-0 pb-0"
              />
              <p v-else class="alert alert-info">无匹配产品，请尝试其它关键字。</p>
            </template>
            <template v-else>
              <ProductPortfolio
                embedded
                title="产品展示"
                :items="products"
                section-class="pb-0"
              />
            </template>
          </div>
          <div class="col-lg-3">
            <ProductCatalogSidebar />
          </div>
        </div>
      </div>
    </div>
  </InnerPageLayout>
</template>

<style scoped>
.product-two-col {
  background: #fff;
}
</style>
