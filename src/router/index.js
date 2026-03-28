import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NuoerEmbed from '../views/NuoerEmbed.vue'
import {
  PAGE_CN_ABOUT,
  PAGE_CN_CASE,
  PAGE_CN_NEWS_LIST,
  PAGE_CN_CONTACT,
  ROUTE_HOME,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
  ROUTE_CN_NEWS,
  ROUTE_CN_CONTACT,
} from '../site.js'

const routes = [
  { path: ROUTE_HOME, name: 'home', component: Home },
  {
    path: ROUTE_CN_ABOUT,
    name: 'cnabout',
    component: NuoerEmbed,
    meta: { embedSrc: PAGE_CN_ABOUT, pageTitle: '关于我们' },
  },
  {
    path: ROUTE_CN_CASE,
    name: 'cncase',
    component: NuoerEmbed,
    meta: { embedSrc: PAGE_CN_CASE, pageTitle: '案例展示' },
  },
  {
    path: ROUTE_CN_NEWS,
    name: 'c_news',
    component: NuoerEmbed,
    meta: { embedSrc: PAGE_CN_NEWS_LIST, pageTitle: '新闻中心' },
  },
  {
    path: ROUTE_CN_CONTACT,
    name: 'cncontact',
    component: NuoerEmbed,
    meta: { embedSrc: PAGE_CN_CONTACT, pageTitle: '联系我们' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const DEFAULT_TITLE = '临清市诺尔轴承有限公司'

router.afterEach((to) => {
  if (to.name === 'home') {
    document.title = DEFAULT_TITLE
  } else if (to.meta?.pageTitle) {
    document.title = `${to.meta.pageTitle} - ${DEFAULT_TITLE}`
  }
})

export default router
