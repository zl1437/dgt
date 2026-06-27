import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import CasePage from '../views/CasePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ProductIndex from '../views/ProductIndex.vue'
import ProductCategoryPage from '../views/ProductCategoryPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import {
  getProductBySlug,
  getCategoryBySlug,
  localizeCategory,
  localizeProduct,
  DEFAULT_INNER_BANNER_BG,
  ROUTE_HOME,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
  ROUTE_CN_CONTACT,
  ROUTE_PRODUCTS,
} from '../site.js'
import { translate } from '../locales/translate.js'

const routes = [
  { path: ROUTE_HOME, name: 'home', component: Home },
  {
    path: ROUTE_CN_ABOUT,
    name: 'cnabout',
    component: AboutPage,
    meta: { pageTitleKey: 'about', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_CN_CASE,
    name: 'cncase',
    component: CasePage,
    meta: { pageTitleKey: 'case', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_CN_CONTACT,
    name: 'cncontact',
    component: ContactPage,
    meta: { pageTitleKey: 'contact', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_PRODUCTS,
    name: 'products',
    component: ProductIndex,
    meta: { pageTitleKey: 'products', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: `${ROUTE_PRODUCTS}/item/:slug`,
    name: 'product-detail',
    component: ProductDetailPage,
    meta: { bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: `${ROUTE_PRODUCTS}/:slug`,
    name: 'product-category',
    component: ProductCategoryPage,
    meta: { bannerBg: DEFAULT_INNER_BANNER_BG },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function docLang(query) {
  return query.lang === 'en' ? 'en' : 'zh'
}

router.beforeEach((to, from, next) => {
  if (from.query.lang === 'en' && !('lang' in to.query)) {
    next({ path: to.path, query: { ...to.query, lang: 'en' }, hash: to.hash })
    return
  }
  next()
})

router.afterEach((to) => {
  const lang = docLang(to.query)
  const siteTitle = translate(lang, 'site.name')
  if (to.name === 'product-detail') {
    const p = getProductBySlug(to.params.slug)
    const pp = lang === 'en' ? localizeProduct(p, 'en') : p
    document.title = pp ? `${pp.title} - ${siteTitle}` : siteTitle
    return
  }
  if (to.name === 'product-category') {
    const c = getCategoryBySlug(to.params.slug)
    const cc = lang === 'en' ? localizeCategory(c, 'en') : c
    document.title = cc ? `${cc.title} - ${siteTitle}` : siteTitle
    return
  }
  if (to.name === 'home') {
    document.title = siteTitle
  } else if (to.meta?.pageTitleKey) {
    const title = translate(lang, `pageTitle.${to.meta.pageTitleKey}`)
    document.title = `${title} - ${siteTitle}`
  }
})

export default router
