<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import { productCategories, productCategoryPath, ROUTE_PRODUCTS } from '../site.js'

const route = useRoute()
const router = useRouter()

const q = ref('')

const activeSlug = computed(() => {
  if (route.name === 'product-category') return String(route.params.slug || '')
  return ''
})

watch(
  () => route.query.q,
  (v) => {
    q.value = v != null ? String(v) : ''
  },
  { immediate: true },
)

function onSearchSubmit() {
  const query = q.value.trim()
  router.push({ path: ROUTE_PRODUCTS, query: query ? { q: query } : {} })
}

function isActive(slug) {
  return activeSlug.value === slug
}
</script>

<template>
  <aside class="product-sidebar">
    <form class="product-sidebar__search" @submit.prevent="onSearchSubmit">
      <input v-model="q" type="search" name="product-q" placeholder="产品搜索" autocomplete="off" />
      <button type="submit" class="product-sidebar__search-btn" aria-label="搜索">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <div class="product-sidebar__catalog">
      <h3 class="product-sidebar__catalog-title">产品目录</h3>
      <span class="product-sidebar__catalog-accent" aria-hidden="true"></span>
      <ul class="product-sidebar__list">
        <li v-for="c in productCategories" :key="c.slug" class="product-sidebar__group">
          <RouterLink
            class="product-sidebar__link"
            :class="{ 'is-active': isActive(c.slug) }"
            :to="productCategoryPath(c.slug)"
          >
            {{ c.title }}
          </RouterLink>
          <ul v-if="c.children?.length" class="product-sidebar__sublist">
            <li v-for="(sub, i) in c.children" :key="`${c.slug}-${i}`">
              <RouterLink
                class="product-sidebar__sublink"
                :class="{ 'is-active': isActive(c.slug) }"
                :to="productCategoryPath(c.slug)"
              >
                {{ sub.title }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.product-sidebar {
  position: sticky;
  top: 100px;
}

.product-sidebar__search {
  position: relative;
  margin-bottom: 28px;
}

.product-sidebar__search input {
  width: 100%;
  padding: 10px 44px 10px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background: #fff;
}

.product-sidebar__search input:focus {
  outline: none;
  border-color: #0076a4;
}

.product-sidebar__search-btn {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 32px;
  border: none;
  background: transparent;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-sidebar__search-btn:hover {
  color: #0076a4;
}

.product-sidebar__catalog-title {
  font-size: 18px;
  font-weight: 700;
  color: #232323;
  margin: 0 0 8px;
  padding: 0;
}

.product-sidebar__catalog-accent {
  display: block;
  width: 36px;
  height: 3px;
  background: #c00;
  margin-bottom: 14px;
}

.product-sidebar__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.product-sidebar__group {
  border-bottom: 1px solid #e8e8e8;
}

.product-sidebar__group:last-child {
  border-bottom: none;
}

.product-sidebar__link {
  display: block;
  padding: 12px 4px 12px 0;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.15s ease;
}

.product-sidebar__link:hover,
.product-sidebar__link.is-active {
  color: #0076a4;
}

.product-sidebar__sublist {
  list-style: none;
  margin: 0 0 8px 12px;
  padding: 0;
}

.product-sidebar__sublink {
  display: block;
  padding: 6px 4px 6px 8px;
  color: #555;
  text-decoration: none;
  font-size: 14px;
}

.product-sidebar__sublink:hover,
.product-sidebar__sublink.is-active {
  color: #0076a4;
}

@media (max-width: 991px) {
  .product-sidebar {
    position: static;
    margin-top: 40px;
  }
}
</style>
