/** 静态资源走本站 `public/`（img 拼接用） */
export const SITE = ''
/** 参考站根 URL（仅隐私政策等外链备用） */
export const REMOTE_SITE = 'https://synergybearings.com'

/** 本项目 Vue Router 路径 */
export const ROUTE_HOME = '/'
export const ROUTE_CN_ABOUT = '/cnabout'
export const ROUTE_CN_CASE = '/cncase'
export const ROUTE_CN_NEWS = '/c_news'
export const ROUTE_CN_CONTACT = '/cncontact'
export const ROUTE_PRODUCTS = '/products'

export function productCategoryPath(slug) {
  return `${ROUTE_PRODUCTS}/${slug}`
}

export function productDetailPath(slug) {
  return `${ROUTE_PRODUCTS}/item/${slug}`
}

export const CONTACT_EMAIL = 'easondu@synergybearings.com | vicky@synergybearings.com'
export const MAILTO = `mailto:${CONTACT_EMAIL}`
export const TEL_MOBILE_DISPLAY = '+8618839713991 | +8617821086766'
export const TEL_LANDLINE_DISPLAY = '+8618839713991 | +8617821086766'
export const TEL_MOBILE_HREF = '+8618839713991 | +8617821086766'
export const TEL_LANDLINE_HREF = '+8618839713991 | +8617821086766'
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=8618839713991'

export const PAGE_PRIVACY = `${REMOTE_SITE}/privacy.html`

/** 内页横幅默认背景 */
export const DEFAULT_INNER_BANNER_BG = '/resource/n07/assets/images/hero/hero-s2.jpg'

/** 与 cnnews/3.html 面包图同图（pic/flash/...） */
export const NEWS_COVER_7TH = '/pic/flash/2024-6-25-15-20-37.jpg'

export const footerLegalLinks = [
  { label: 'About Us', to: ROUTE_CN_ABOUT },
  { label: 'Privacy Policy', href: PAGE_PRIVACY },
  { label: 'Services', to: ROUTE_PRODUCTS },
]

export const img = (path) => {
  if (path.startsWith('http')) return path
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE}${p}`
}

/** 首页案例展示（与案例页共用） */
export const showcaseCases = [
  { img: '/pic/small2/5_0.jpg', caption: '产品效果图1' },
  { img: '/pic/small2/2020-11-19-20-21-35.jpg', caption: '产品效果图2' },
  { img: '/pic/small2/2020-11-19-20-20-9.jpg', caption: '产品效果图3' },
  { img: '/pic/small2/2020-11-19-20-19-55.jpg', caption: '产品效果图4' },
]

/** 新闻列表（本地详情路由 /c_news/:id） */
export const newsItems = [
  {
    id: '7th-anniversary',
    title: '以匠心铸品质，以创新启未来——致诺尔轴承成立七周年',
    cover: NEWS_COVER_7TH,
    summary: '公司成立七周年之际，回顾发展历程，展望未来创新与品质之路。',
    body: `<p>我们以匠心铸品质，以创新启未来。多年来，团队深耕轴承领域，持续为客户创造价值。</p><p>感谢各界伙伴的信任与支持，我们将继续提升产品与服务水平。</p>`,
  },
  {
    id: 'establishment-notice',
    title: '诺尔轴承有限公司成立公告',
    cover: '/pic/other/2025-6-16-18-28-34.png',
    summary: '公司正式成立，将致力于轴承产品的研发、生产与销售。',
    body: `<p>诺尔轴承有限公司正式成立。我们将秉承专业精神，为客户提供优质轴承产品与解决方案。</p>`,
  },
]

export function getNewsById(id) {
  return newsItems.find((n) => n.id === id) || null
}

export const heroSlides = [
  {
    bg: '/resource/n07/assets/images/hero/hero-s2.jpg',
    h4: '我们是轴承工贸一体服务商',
    h1: '专注轴承外贸行业建设15年',
    p: '我们客户遍布全球各个大洲，其中亚洲占比40%，欧洲占比25%，南美洲占比20%，非洲占比6%，北美占比9%。',
    h4c: '#ffffff',
    h1c: '#ffffff',
    pc: '#ffffff',
    showBtn: true,
    btnHref: ROUTE_CN_ABOUT,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s3.jpg',
    h4: '我是横幅标题，标题可有可无',
    h1: '我是大字体显示位置',
    p: '这里是详细的介绍，写什么都可以，显示在这里的位置，这里也可根据背景图片设置文字颜色',
    h4c: '#000',
    h1c: '#000',
    pc: '#000',
    showBtn: false,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s4.jpg',
    h4: 'change word color',
    h1: 'I am the Title I am a free bird',
    p: 'introduce me It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. fact that a reader will',
    h4c: '#000',
    h1c: '#000',
    pc: '#000',
    showBtn: false,
  },
]

/** 产品分类（slug 对应路由 /products/:slug） */
export const productCategories = [
  { title: '深沟球轴承', slug: 'deep-groove' },
  { title: '圆锥滚子轴承', slug: 'taper-roller' },
  { title: '外球面轴承', slug: 'pillow-block' },
  { title: '调心球轴承', slug: 'self-aligning-ball' },
  { title: '调心滚子轴承', slug: 'spherical-roller' },
  { title: '推力球轴承', slug: 'thrust-ball' },
  { title: '角接触球轴承', slug: 'angular-contact' },
  { title: '圆柱滚子轴承', slug: 'cylindrical-roller' },
  { title: '带座轴承', slug: 'bearing-units' },
  { title: '滚针轴承', slug: 'needle' },
  { title: '陶瓷轴承', slug: 'ceramic' },
  { title: '密封轴承', slug: 'sealed' },
  { title: '关节轴承', slug: 'joint' },
  { title: '杆端关节轴承', slug: 'rod-end' },
  { title: '轮毂轴承', slug: 'hub' },
]

export function getCategoryBySlug(slug) {
  return productCategories.find((c) => c.slug === slug) || null
}

/** 推荐产品（slug 唯一；categorySlug 对应 productCategories.slug） */
export const products = [
  {
    slug: 'rod-end-sa-tk',
    title: '杆端关节轴承 SA..TK 系列',
    category: '杆端关节轴承',
    categorySlug: 'rod-end',
    small: '/pic/small/2025-9-17-9-37-33.jpg',
    big: '/pic/big/2025-9-17-9-37-33.jpg',
  },
  {
    slug: 'joint-ge',
    title: '关节轴承',
    category: 'GE 系列',
    categorySlug: 'joint',
    small: '/pic/small/2025-9-12-16-31-41.jpg',
    big: '/pic/big/2025-9-12-16-31-41.jpg',
  },
  {
    slug: 'self-aligning-2200',
    title: '调心球轴承 2200 系列',
    category: '调心球轴承',
    categorySlug: 'self-aligning-ball',
    small: '/pic/small/2025-9-12-14-24-1.jpg',
    big: '/pic/big/2025-9-12-14-24-1.jpg',
  },
  {
    slug: 'spherical-24100',
    title: '调心滚子轴承 24100 系列',
    category: '调心滚子轴承',
    categorySlug: 'spherical-roller',
    small: '/pic/small/2025-9-11-9-24-37.jpg',
    big: '/pic/big/2025-9-11-9-24-37.jpg',
  },
  {
    slug: 'spherical-23100',
    title: '调心滚子轴承 23100 系列',
    category: '调心滚子轴承',
    categorySlug: 'spherical-roller',
    small: '/pic/small/2025-9-11-8-19-10.jpg',
    big: '/pic/big/2025-9-11-8-19-10.jpg',
  },
  {
    slug: 'needle-nk-nks',
    title: '滚针轴承NK NKS系列',
    category: '滚针轴承',
    categorySlug: 'needle',
    small: '/pic/small/2025-9-19-14-55-50.gif',
    big: '/pic/big/2025-9-19-14-55-50.gif',
  },
  {
    slug: 'needle-hk-bk',
    title: '滚针轴承 HK BK系列',
    category: '滚针轴承',
    categorySlug: 'needle',
    small: '/pic/small/2025-9-19-14-15-51.jpg',
    big: '/pic/big/2025-9-19-14-15-51.jpg',
  },
  {
    slug: 'pillow-ucfb',
    title: '外球面轴承UCFB系列',
    category: '外球面轴承',
    categorySlug: 'pillow-block',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
  },
  {
    slug: 'needle-k',
    title: '滚针轴承 K系列',
    category: '滚针轴承',
    categorySlug: 'needle',
    small: '/pic/small/2025-9-19-14-55-50.gif',
    big: '/pic/big/2025-9-19-14-55-50.gif',
  },
  {
    slug: 'pillow-ucfa',
    title: '外球面轴承UCFA系列',
    category: '外球面轴承',
    categorySlug: 'pillow-block',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
  },
  {
    slug: 'pillow-ucpa',
    title: '外球面轴承UCPA系列',
    category: '外球面轴承',
    categorySlug: 'pillow-block',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
  },
  {
    slug: 'pillow-ucph',
    title: '外球面轴承UCPH系列',
    category: '外球面轴承',
    categorySlug: 'pillow-block',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
  },
  {
    slug: 'pillow-ucfc',
    title: '外球面轴承UCFC系列',
    category: '外球面轴承',
    categorySlug: 'pillow-block',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
  },
  {
    slug: 'deep-groove-6400',
    title: '深沟球轴承 6400系列',
    category: '深沟球轴承',
    categorySlug: 'deep-groove',
    small: '/pic/small/2025-9-12-14-24-1.jpg',
    big: '/pic/big/2025-9-12-14-24-1.jpg',
  },
  {
    slug: 'taper-32000',
    title: '圆锥滚子轴承 32000 系列',
    category: '圆锥滚子轴承',
    categorySlug: 'taper-roller',
    small: '/pic/small/2025-9-11-9-24-37.jpg',
    big: '/pic/big/2025-9-11-9-24-37.jpg',
  },
  {
    slug: 'deep-groove-6300',
    title: '深沟球轴承 6300系列',
    category: '深沟球轴承',
    categorySlug: 'deep-groove',
    small: '/pic/small/2025-9-12-14-24-1.jpg',
    big: '/pic/big/2025-9-12-14-24-1.jpg',
  },
  {
    slug: 'hub-bearing',
    title: '轮毂轴承',
    category: '轮毂轴承',
    categorySlug: 'hub',
    small: '/pic/small2/5_0.jpg',
    big: '/pic/small2/5_0.jpg',
  },
  {
    slug: 'rod-end-pos',
    title: '杆端关节轴承 POS 系列',
    category: '杆端关节轴承',
    categorySlug: 'rod-end',
    small: '/pic/small/2025-9-17-9-37-33.jpg',
    big: '/pic/big/2025-9-17-9-37-33.jpg',
  },
  {
    slug: 'rod-end-phs',
    title: '杆端关节轴承 PHS 系列',
    category: '杆端关节轴承',
    categorySlug: 'rod-end',
    small: '/pic/small/2025-9-17-9-37-33.jpg',
    big: '/pic/big/2025-9-17-9-37-33.jpg',
  },
  {
    slug: 'rod-end-sitk',
    title: '杆端关节轴承 SI..TK 系列',
    category: '杆端关节轴承',
    categorySlug: 'rod-end',
    small: '/pic/small/2025-9-17-9-37-33.jpg',
    big: '/pic/big/2025-9-17-9-37-33.jpg',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function productsInCategory(categorySlug) {
  return products.filter((p) => p.categorySlug === categorySlug)
}

/** 按关键字过滤产品（标题、品类） */
export function filterProductsByQuery(q) {
  if (!q || !String(q).trim()) return products
  const s = String(q).trim().toLowerCase()
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(s) ||
      (p.category && p.category.toLowerCase().includes(s)),
  )
}

export const socialIcons = [
  {
    href: 'https://www.facebook.com',
    src: '/pic/other/16315208455554075.jpg',
    alt: 'facebook',
  },
  {
    href: 'https://www.twitter.com',
    src: '/pic/other/16315208455474973.jpg',
    alt: 'twitter',
  },
  {
    href: 'https://www.linkedin.com/',
    src: '/pic/other/16315208452083494.jpg',
    alt: 'linkedin',
  },
]
