<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import InnerPageLayout from '../components/InnerPageLayout.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import ProductCatalogSidebar from '../components/ProductCatalogSidebar.vue'
import { getCategoryBySlug, localizeCategory, productsInCategory, ROUTE_PRODUCTS, DEFAULT_INNER_BANNER_BG } from '../site.js'
import { useLocale } from '../composables/useLocale'

const route = useRoute()
const { lang, t } = useLocale()
const slug = computed(() => route.params.slug)
const cat = computed(() => localizeCategory(getCategoryBySlug(slug.value), lang.value))
const items = computed(() => (cat.value ? productsInCategory(cat.value.slug) : []))
const pageTitle = computed(() => cat.value?.title || t('product.categoryFallback'))
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
              :title="`${cat.title} · ${t('product.listSuffix')}`"
              :items="items"
              :lang="lang"
              section-class="pb-0"
            />
            <div v-else class="text-center py-5">
              <p class="lead">
                {{ t('product.categoryEmpty') }}
              </p>
              <RouterLink class="btn btn-common mt-3" :to="ROUTE_PRODUCTS">{{ t('product.backToProducts') }}</RouterLink>
            </div>
          </div>
          <div class="col-lg-3">
            <ProductCatalogSidebar />
          </div>
        </div>
      </div>
    </div>
  </InnerPageLayout>
  <InnerPageLayout v-else :page-title="t('common.notFound')" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75 text-center">
      <p>{{ t('product.categoryMissing') }}</p>
      <RouterLink :to="ROUTE_PRODUCTS">{{ t('product.backToProducts') }}</RouterLink>
    </div>
  </InnerPageLayout>
</template>
