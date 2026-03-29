import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import CasePage from '../views/CasePage.vue'
import NewsPage from '../views/NewsPage.vue'
import NewsDetailPage from '../views/NewsDetailPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ProductIndex from '../views/ProductIndex.vue'
import ProductCategoryPage from '../views/ProductCategoryPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import {
  getNewsById,
  getProductBySlug,
  getCategoryBySlug,
  DEFAULT_INNER_BANNER_BG,
  ROUTE_HOME,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
  ROUTE_CN_NEWS,
  ROUTE_CN_CONTACT,
  ROUTE_PRODUCTS,
} from '../site.js'

const routes = [
  { path: ROUTE_HOME, name: 'home', component: Home },
  {
    path: ROUTE_CN_ABOUT,
    name: 'cnabout',
    component: AboutPage,
    meta: { pageTitle: '关于我们', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_CN_CASE,
    name: 'cncase',
    component: CasePage,
    meta: { pageTitle: '案例展示', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_CN_NEWS,
    name: 'c_news',
    component: NewsPage,
    meta: { pageTitle: '新闻中心', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: `${ROUTE_CN_NEWS}/:id`,
    name: 'news-detail',
    component: NewsDetailPage,
    meta: { bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_CN_CONTACT,
    name: 'cncontact',
    component: ContactPage,
    meta: { pageTitle: '联系我们', bannerBg: DEFAULT_INNER_BANNER_BG },
  },
  {
    path: ROUTE_PRODUCTS,
    name: 'products',
    component: ProductIndex,
    meta: { pageTitle: '产品中心', bannerBg: DEFAULT_INNER_BANNER_BG },
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

const DEFAULT_TITLE = '上海赛铌斯实业有限公司'

router.afterEach((to) => {
  if (to.name === 'news-detail') {
    const a = getNewsById(to.params.id)
    document.title = a ? `${a.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
    return
  }
  if (to.name === 'product-detail') {
    const p = getProductBySlug(to.params.slug)
    document.title = p ? `${p.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
    return
  }
  if (to.name === 'product-category') {
    const c = getCategoryBySlug(to.params.slug)
    document.title = c ? `${c.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
    return
  }
  if (to.name === 'home') {
    document.title = DEFAULT_TITLE
  } else if (to.meta?.pageTitle) {
    document.title = `${to.meta.pageTitle} - ${DEFAULT_TITLE}`
  }
})

export default router
