<script setup>
import { img } from '../site.js'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  /** 与主题一致的外层修饰，如 bg-2 */
  sectionClass: { type: String, default: '' },
})
</script>

<template>
  <div :class="['portfolio-section', 'style-2', 'pt-75', sectionClass].filter(Boolean)">
    <div class="container">
      <div class="section-head text-center pb-60">
        <h5>// {{ title }}</h5>
        <h2>{{ title }}</h2>
        <span class="section-head-bar-2"></span>
      </div>

      <div class="row image_load">
        <div
          v-for="(p, idx) in items"
          :key="idx"
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
                  <a :title="p.title" :href="p.href" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-link"></i>
                  </a>
                </div>
              </div>
              <div class="portfolio-content">
                <h5>
                  <a :title="p.title" :href="p.href" target="_blank" rel="noopener noreferrer">{{ p.title }}</a>
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
