<script setup>
import { RouterLink } from 'vue-router'
import { img, productDetailPath } from '../site.js'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  /** 与主题一致的外层修饰，如 bg-2 */
  sectionClass: { type: String, default: '' },
  /** 为 false 时不渲染顶部 section-head（产品总览页与横幅标题重复时使用） */
  showSectionHead: { type: Boolean, default: true },
  /** 两栏布局左侧嵌入时：不占满屏宽、与侧栏对齐 */
  embedded: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="['portfolio-section', 'style-2', embedded ? 'pt-0' : 'pt-75', sectionClass].filter(Boolean)"
  >
    <div :class="embedded ? 'container-fluid px-0' : 'container'">
      <div v-if="showSectionHead" class="section-head text-center pb-60">
        <h5>// {{ title }}</h5>
        <h2>{{ title }}</h2>
        <span class="section-head-bar-2"></span>
      </div>

      <div class="row image_load">
        <div
          v-for="(p, idx) in items"
          :key="p.slug || idx"
          class="col-lg-3 col-md-6 col-sm-6 col-6 p-0 grid-item design cemes"
        >
          <div class="single_portfolio">
            <div class="portfolio-thumb">
              <div class="product_img">
                <div class="x2">
                  <div class="x3">
                    <img :src="img(p.small)" :alt="p.title" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="portfolio-icon">
                <div class="port-icon">
                  <a class="port-icon" :href="img(p.big)" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-image"></i>
                  </a>
                  <RouterLink class="port-icon" :to="productDetailPath(p.slug)" :title="p.title">
                    <i class="fas fa-link"></i>
                  </RouterLink>
                </div>
              </div>
              <div class="portfolio-content">
                <h5>
                  <RouterLink :title="p.title" :to="productDetailPath(p.slug)">{{ p.title }}</RouterLink>
                </h5>
                <h5 v-if="p.category" class="portfolio-content-category">{{ p.category }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-content-category {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.35;
  margin-top: 6px;
  margin-bottom: 0;
  color: #666;
}
</style>
