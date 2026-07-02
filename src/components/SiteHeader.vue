<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import {
  img,
  productCategories,
  productCategoryPath,
  localizeCategories,
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
  ROUTE_CN_CONTACT,
  ROUTE_PRODUCTS,
} from '../site.js'
import { useLocale } from '../composables/useLocale'

const route = useRoute()
const router = useRouter()
const { lang, t, switchLang } = useLocale()

const localizedCategories = computed(() => localizeCategories(productCategories, lang.value))

const mobileOpen = ref(false)
const searchOpen = ref(false)
const isDesktop = ref(true)
const productSubOpen = ref(false)

/** 与静态站一致：凡 /products 及其子路径下「产品中心」导航均高亮 */
const isProductsActive = computed(() => {
  const p = route.path
  return p === ROUTE_PRODUCTS || p.startsWith(`${ROUTE_PRODUCTS}/`)
})

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

/** 移动端：展开子菜单；桌面端：正常进入产品中心 */
function onProductNavClick(e) {
  if (!isDesktop.value) {
    e.preventDefault()
    productSubOpen.value = !productSubOpen.value
  }
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

function onSearchSubmit() {
  const el = document.querySelector('.search-form input[name="s"]')
  const q = el?.value?.trim() || ''
  router.push({ path: ROUTE_PRODUCTS, query: q ? { q } : {} })
  searchOpen.value = false
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
                    <a class="header-social-link" :href="s.href" target="_blank" rel="noopener noreferrer">
                      <img :src="s.src" :alt="s.alt" />
                    </a>
                  </li>
                  <li class="header-lang-item">
                    <div class="header-lang-switch">
                      <button type="button" class="header-lang-btn" @click="switchLang('en')">
                        <img
                          class="header-lang-flag"
                          src="/resource/n07/function/images/en.jpg"
                          title="ENGLISH"
                          alt="English"
                        />
                        <span class="header-lang-label">English</span>
                      </button>
                      <button type="button" class="header-lang-btn" @click="switchLang('zh')">
                        <img
                          class="header-lang-flag"
                          src="/resource/n07/function/images/cn.jpg"
                          title="中文版"
                          alt="中文"
                        />
                        <span class="header-lang-label">中文</span>
                      </button>
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
            <RouterLink :to="ROUTE_HOME" class="logo-brand">
              <img
                class="logo-brand__icon"
                :src="img('/images/logomain.png')"
                alt=""
              />
              <div class="logo-brand__text">
                <span class="logo-brand__name-cn">上海赛铌斯实业有限公司</span>
                <span class="logo-brand__name-en">Shanghai Synergy Industrial Co., Ltd</span>
              </div>
            </RouterLink>
          </div>

          <nav>
            <ul>
              <li><RouterLink :to="ROUTE_HOME" @click="closeMenu">{{ t('nav.home') }}</RouterLink></li>
              <li>
                <RouterLink :to="ROUTE_CN_ABOUT" @click="closeMenu">{{ t('nav.about') }}</RouterLink>
              </li>
              <li class="has-sub">
                <RouterLink
                  :to="ROUTE_PRODUCTS"
                  :class="{ 'router-link-active': isProductsActive }"
                  @click="onProductNavClick"
                >
                  {{ t('nav.products') }}<i class="fas fa-angle-down"></i><span><i class="fas fa-angle-right"></i></span>
                </RouterLink>
                <ul v-show="isDesktop || productSubOpen" class="sub-menu">
                  <li v-for="c in localizedCategories" :key="c.slug">
                    <RouterLink :to="productCategoryPath(c.slug)" :title="c.title" @click="closeMenu">{{ c.title }}</RouterLink>
                  </li>
                </ul>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_CASE" @click="closeMenu">{{ t('nav.case') }}</RouterLink>
              </li>
              <li>
                <RouterLink :to="ROUTE_CN_CONTACT" @click="closeMenu">
                  {{ t('nav.contact') }}<span class="mobile-menu-icon"><i class="fas fa-angle-right"></i></span>
                </RouterLink>
              </li>
            </ul>
            <div class="header-src-btn">
              <div class="search-box-btn search-box-outer" @click="searchOpen = true">
                <i class="fas fa-search"></i>
              </div>
            </div>

            <div class="d-lg-none mobile-lang-bar">
              <div class="header-lang-switch header-lang-switch--mobile">
                <button type="button" class="header-lang-btn" @click="switchLang('en')">
                  <img class="header-lang-flag" src="/resource/n07/function/images/en.jpg" title="ENGLISH" alt="English" />
                  <span class="header-lang-label">English</span>
                </button>
                <button type="button" class="header-lang-btn" @click="switchLang('zh')">
                  <img class="header-lang-flag" src="/resource/n07/function/images/cn.jpg" title="中文版" alt="中文" />
                  <span class="header-lang-label">中文</span>
                </button>
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
        <form class="search-form" @submit.prevent="onSearchSubmit">
          <input type="search" name="s" :placeholder="t('common.searchPlaceholder')" />
        </form>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.logo-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #222;
}
.logo-brand:hover {
  text-decoration: none;
  color: #222;
}
.logo-brand__icon {
  flex-shrink: 0;
  width: auto;
  height: auto;
  height: 68px;
}
.logo-brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}
.logo-brand__name-cn {
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
}
.logo-brand__name-en {
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .logo-brand {
    gap: 8px;
  }
  .logo-brand__name-cn {
    font-size: 15px;
  }
  .logo-brand__name-en {
    font-size: 11px;
  }
}
@media (max-width: 480px) {
  .logo-brand__name-cn {
    font-size: 13px;
  }
  .logo-brand__name-en {
    font-size: 10px;
  }
}

/* 与 nuoerbearing 原站一致：外链 + 圆形图标图（无额外色底），图标为 80×80 缩放到顶栏高度 */
.header-social-link {
  display: inline-block;
  line-height: 0;
  vertical-align: middle;
}
.header-social-link img {
  height: 35px;
  width: auto;
  max-width: none;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
.header-lang-switch {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
}
.header-lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
}
.header-lang-btn:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(0, 0, 0, 0.22);
}
.header-lang-flag {
  width: 28px;
  height: auto;
  display: block;
}
.header-lang-label {
  font-size: 13px;
  white-space: nowrap;
}
.mobile-lang-bar {
  background: #f8f8f8;
  padding: 15px 10px 12px;
  text-align: center;
}
.header-lang-switch--mobile .header-lang-btn {
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
}
.header-lang-switch--mobile .header-lang-btn:hover {
  color: #0076a4;
  background: #f9f9f9;
}

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
