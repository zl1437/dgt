<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  SITE,
  img,
  productCategories,
  socialIcons,
  MAILTO,
  CONTACT_EMAIL,
  WHATSAPP_URL,
  TEL_MOBILE_DISPLAY,
  TEL_LANDLINE_DISPLAY,
  TEL_LANDLINE_HREF,
  ROUTE_HOME,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
  ROUTE_CN_NEWS,
  ROUTE_CN_CONTACT,
} from '../site.js'

const route = useRoute()

const mobileOpen = ref(false)
const searchOpen = ref(false)
const isDesktop = ref(true)
const productSubOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    searchOpen.value = false
    productSubOpen.value = false
  },
)

function checkMq() {
  isDesktop.value = window.matchMedia('(min-width: 992px)').matches
  if (isDesktop.value) {
    mobileOpen.value = false
    productSubOpen.value = false
  }
}

function toggleProductSub(e) {
  e.preventDefault()
  if (isDesktop.value) return
  productSubOpen.value = !productSubOpen.value
}

onMounted(() => {
  checkMq()
  window.addEventListener('resize', checkMq)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMq)
})

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu() {
  mobileOpen.value = false
}
</script>

<template>
  <div>
    <div class="header-top-area d-sm-none d-md-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="header-top-left-items">
              <div class="header-top-left-single-item">
                <a :href="MAILTO">
                  <div class="header-top-left-icon">
                    <span>
                      <i class="far fa-envelope"></i>
                      {{ CONTACT_EMAIL }}
                    </span>
                  </div>
                </a>
              </div>
              <div class="header-top-left-single-item">
                <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer">
                  <div class="header-top-left-icon">
                    <span>
                      <i class="fab fa-whatsapp"></i>
                      {{ TEL_MOBILE_DISPLAY }}
                    </span>
                  </div>
                </a>
              </div>
              <!-- <div class="header-top-left-single-item">
                <a :href="TEL_LANDLINE_HREF">
                  <div class="header-top-left-icon">
                    <span>
                      <i class="fas fa-phone"></i>
                      {{ TEL_LANDLINE_DISPLAY }}
                    </span>
                  </div>
                </a>
              </div> -->
            </div>
          </div>
          <div class="col-md-4">
            <div class="header-top-right-items text-right">
              <div class="header-top-right-icon-area">
                <ul>
                  <li v-for="s in socialIcons" :key="s.alt">
                    <a :href="s.href" target="_blank" rel="noopener noreferrer">
                      <img :src="s.src" :alt="s.alt" style="border-radius: 50%" />
                    </a>
                  </li>
                  <li>
                    <div>
                      <a :href="`${SITE}/index.html`">
                        <img
                          src="/resource/n07/function/images/en.jpg"
                          title="ENGLISH"
                          width="70"
                          border="0"
                          alt="English"
                        />
                      </a>
                      <RouterLink :to="ROUTE_HOME">
                        <img
                          src="/resource/n07/function/images/cn.jpg"
                          title="中文版"
                          width="70"
                          border="0"
                          alt="中文"
                        />
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header uk-sticky="bottom: #offset" class="header-style-two">
      <div class="container">
        <div class="menu-wrapper" :class="{ 'menu-open': mobileOpen }">
          <div class="m-logo">
            <RouterLink :to="ROUTE_HOME">
              <img :src="img('/images/logo.png')" width="360" alt="上海赛铌斯实业有限公司" title="上海赛铌斯实业有限公司" />
            </RouterLink>
          </div>

          <nav>
            <ul>
              <li>
                <RouterLink :to="ROUTE_HOME" @click="closeMenu">首页</RouterLink>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_ABOUT" @click="closeMenu">关于我们</RouterLink>
              </li>
              <li class="has-sub">
                <a href="#" @click="toggleProductSub">
                  产品中心<i class="fas fa-angle-down"></i><span><i class="fas fa-angle-right"></i></span>
                </a>
                <ul v-show="isDesktop || productSubOpen" class="sub-menu">
                  <li v-for="c in productCategories" :key="c.href">
                    <a :href="c.href" :title="c.title" @click="closeMenu">{{ c.title }}</a>
                  </li>
                </ul>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_CASE" @click="closeMenu">案例展示</RouterLink>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_NEWS" @click="closeMenu">新闻中心</RouterLink>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_CONTACT" @click="closeMenu">
                  联系我们<span class="mobile-menu-icon"><i class="fas fa-angle-right"></i></span>
                </RouterLink>
              </li>
            </ul>
            <div class="header-src-btn">
              <div class="search-box-btn search-box-outer" @click="searchOpen = true">
                <i class="fas fa-search"></i>
              </div>
            </div>

            <div class="d-lg-none" style="background: #f8f8f8; padding-top: 15px; text-align: center; padding-bottom: 10px">
              <div>
                <a :href="`${SITE}/index.html`">
                  <img src="/resource/n07/function/images/en.jpg" title="ENGLISH" width="70" border="0" alt="" />
                </a>
                <RouterLink :to="ROUTE_HOME">
                  <img src="/resource/n07/function/images/cn.jpg" title="中文版" width="70" border="0" alt="" />
                </RouterLink>
              </div>
            </div>
          </nav>
          <div class="menu-toggle" @click="toggleMenu">
            <span class="open_bar"><i class="fas fa-bars"></i></span>
            <span class="close_bar"><i class="fas fa-times"></i></span>
          </div>
        </div>
      </div>
    </header>

    <Teleport to="body">
      <div class="search-popup" :class="{ 'is-visible': searchOpen }">
        <button type="button" class="close-search style-two" @click="searchOpen = false">
          <i class="fas fa-times"></i>
        </button>
        <form class="search-form" method="post" :action="`${SITE}/c_products/`" @submit.prevent="searchOpen = false">
          <input type="search" name="s" placeholder="输入关键字搜索" />
        </form>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.menu-wrapper nav ul li :deep(a.router-link-active) {
  color: #0076a4 !important;
}

@media (max-width: 991px) {
  .menu-wrapper:not(.menu-open) nav > ul {
    display: none !important;
  }
  .menu-wrapper.menu-open nav > ul {
    display: block !important;
  }
  .has-sub .sub-menu {
    position: static !important;
    box-shadow: none !important;
    width: 100% !important;
  }
}
</style>
