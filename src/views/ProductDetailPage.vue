<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import {
  getProductBySlug,
  getCategoryBySlug,
  img,
  localizeCategory,
  localizeProduct,
  productCategoryPath,
  ROUTE_PRODUCTS,
  DEFAULT_INNER_BANNER_BG,
} from '../site.js'
import { useLocale } from '../composables/useLocale'

const route = useRoute()
const { lang, t } = useLocale()
const p = computed(() => localizeProduct(getProductBySlug(route.params.slug), lang.value))
const cat = computed(() => (p.value ? localizeCategory(getCategoryBySlug(p.value.categorySlug), lang.value) : null))
const pageTitle = computed(() => p.value?.title || t('product.detailFallback'))
</script>

<template>
  <InnerPageLayout v-if="p" :page-title="pageTitle" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75">
      <div class="row align-items-start">
        <div class="col-md-6 mb-4">
          <a :href="img(p.big)" target="_blank" rel="noopener noreferrer">
            <img :src="img(p.small)" class="img-fluid border" :alt="p.title" loading="lazy" />
          </a>
          <p class="small text-muted mt-2">{{ t('product.clickLarge') }}</p>
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">{{ p.title }}</h2>
          <p class="text-muted">{{ p.category }}</p>
          <p v-if="cat">
            <RouterLink :to="productCategoryPath(cat.slug)">{{ t('product.categoryLabel') }}{{ cat.title }}</RouterLink>
          </p>
          <p class="mt-4">
            <RouterLink class="btn-common text-center d-inline-block" :to="ROUTE_PRODUCTS">
              &nbsp;{{ t('product.backToProducts') }}&nbsp;
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </InnerPageLayout>
  <InnerPageLayout v-else :page-title="t('common.notFound')" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75 text-center">
      <p>{{ t('product.productMissing') }}</p>
      <RouterLink :to="ROUTE_PRODUCTS">{{ t('product.backToProducts') }}</RouterLink>
    </div>
  </InnerPageLayout>
</template>
