<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ROUTE_HOME } from '../site.js'

const props = defineProps({
  pageTitle: { type: String, required: true },
  /** 横幅背景图（同源绝对路径） */
  bannerBg: { type: String, default: '/resource/n07/assets/images/hero/hero-s2.jpg' },
})

const bannerStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bannerBg})`,
}))
</script>

<template>
  <div class="breadcumb-area inner-page-banner" :style="bannerStyle">
    <div class="container">
      <div class="breadcumb-content">
        <h1>{{ pageTitle }}</h1>
        <ul>
          <li>
            <RouterLink :to="ROUTE_HOME">首页</RouterLink>
          </li>
          <li>&gt;</li>
          <li>{{ pageTitle }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
