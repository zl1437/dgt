<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import {
  products,
  productCategories,
  filterProductsByQuery,
  productCategoryPath,
  DEFAULT_INNER_BANNER_BG,
} from '../site.js'

const route = useRoute()
const q = computed(() => (route.query.q || '').toString().trim())
const filteredProducts = computed(() => filterProductsByQuery(q.value))
</script>

<template>
  <InnerPageLayout page-title="产品中心" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <!-- 与目标站 c_products 一致：横幅下为产品网格，下方为「产品目录」分类链接 -->
    <template v-if="q">
      <div class="container pt-75 pb-75">
        <p class="mb-4">
          搜索「<strong>{{ q }}</strong>」的结果（{{ filteredProducts.length }} 条）
        </p>
        <ProductPortfolio
          v-if="filteredProducts.length"
          title="搜索结果"
          :items="filteredProducts"
          section-class="pt-0"
        />
        <p v-else class="alert alert-info">无匹配产品，请尝试其它关键字。</p>
      </div>
    </template>

    <template v-else>
      <ProductPortfolio
        title="产品展示"
        :items="products"
        :show-section-head="false"
        section-class="pt-75 pb-0"
      />

      <div class="product-catalog-section bg-2 pt-50 pb-75">
        <div class="container">
          <div class="section-head text-center pb-60">
            <h5>// 产品目录</h5>
            <h2>产品目录</h2>
            <span class="section-head-bar-2"></span>
          </div>
          <div class="row">
            <div v-for="c in productCategories" :key="c.slug" class="col-md-6 col-lg-4 mb-3">
              <RouterLink class="product-catalog-card" :to="productCategoryPath(c.slug)">
                <span class="product-catalog-card__title">{{ c.title }}</span>
                <i class="fas fa-angle-right product-catalog-card__icon" aria-hidden="true"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </template>
  </InnerPageLayout>
</template>

<style scoped>
.product-catalog-section {
  border-top: 1px solid #eee;
}

.product-catalog-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: #fff;
  border: 1px solid #e8e8e8;
  color: #232323;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.product-catalog-card:hover {
  border-color: #0076a4;
  color: #0076a4;
  box-shadow: 0 2px 8px rgba(0, 118, 164, 0.12);
}

.product-catalog-card__title {
  font-size: 16px;
  font-weight: 500;
}

.product-catalog-card__icon {
  font-size: 14px;
  opacity: 0.7;
}
</style>
