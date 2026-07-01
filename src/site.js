/** 静态资源走本站 `public/`（img 拼接用） */
export const SITE = ''
/** 参考站根 URL（仅隐私政策等外链备用） */
export const REMOTE_SITE = 'https://synergybearings.com'

/** 本项目 Vue Router 路径 */
export const ROUTE_HOME = '/'
export const ROUTE_CN_ABOUT = '/cnabout'
export const ROUTE_CN_CASE = '/cncase'
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
export const TEL_MOBILE_DISPLAY = '+8618839713991'
export const TEL_LANDLINE_DISPLAY = '+8617821086766'
export const TEL_MOBILE_HREF = '+8618839713991'
export const TEL_LANDLINE_HREF = '+8617821086766'
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=8618839713991'

export const PAGE_PRIVACY = `${REMOTE_SITE}/privacy.html`

/** 内页横幅默认背景 */
export const DEFAULT_INNER_BANNER_BG = '/resource/n07/assets/images/hero/hero-s2.jpg'

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
  { img: '/pic/small2/5_0.jpg', caption: '汽车轮毂轴承应用', captionEn: 'Automotive Hub Bearing' },
  { img: '/pic/small2/2020-11-19-20-21-35.jpg', caption: '工程机械行走机构', captionEn: 'Engineering Machinery Undercarriage' },
  { img: '/pic/small2/2020-11-19-20-20-9.jpg', caption: '工业减速机配套', captionEn: 'Industrial Reducer Application' },
  { img: '/pic/small2/2020-11-19-20-19-55.jpg', caption: '农机传动部件', captionEn: 'Agricultural Transmission Parts' },
]

export const heroSlides = [
  {
    bg: '/resource/n07/assets/images/hero/hero-s2.jpg',
    h4: '上海赛铌斯 · Synergy',
    h1: '专业汽车与工业轴承制造商',
    p: '深耕轴承研发、制造与外贸30余年，客户遍布亚洲、欧洲、南美洲、非洲及北美，为汽车与工业装备提供可靠旋转支撑方案。',
    h4c: '#000000',
    h1c: '#000000',
    pc: '#000000',
    showBtn: true,
    btnHref: ROUTE_CN_ABOUT,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s3.jpg',
    h4: '国际标准 · 精密制造',
    h1: '高品质精密轴承解决方案',
    p: '深沟球轴承、圆锥滚子轴承、轮毂轴承等全系列产品，服务汽车、工程机械与工业装备等领域。',
    h4c: '#000000',
    h1c: '#000000',
    pc: '#000000',
    showBtn: true,
    btnHref: ROUTE_PRODUCTS,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s4.jpg',
    h4: '全球化供应与服务',
    h1: '远销亚洲、欧洲及美洲市场',
    p: '依托山东、宁波生产基地与上海总部，为客户提供从选型、定制到售后的一站式轴承配套服务。',
    h4c: '#000000',
    h1c: '#000000',
    pc: '#000000',
    showBtn: true,
    btnHref: ROUTE_CN_CONTACT,
  },
]

/** 目标站英文版首页轮播 */
export const heroSlidesEn = [
  {
    bg: '/resource/n07/assets/images/hero/hero-s2.jpg',
    h4: 'Shanghai Synergy · Synergy Bearings',
    h1: 'Automotive & Industrial Bearing Manufacturer',
    p: 'Over 30 years in bearing R&D, manufacturing and global trade — serving customers across Asia, Europe, South America, Africa and North America.',
    h4c: '#ffffff',
    h1c: '#ffffff',
    pc: '#ffffff',
    showBtn: true,
    btnHref: ROUTE_CN_ABOUT,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s3.jpg',
    h4: 'Precision Manufacturing Excellence',
    h1: 'High-Quality Precision Bearings',
    p: 'Full range of deep groove, taper roller, hub and pillow block bearings for automotive, engineering machinery and industrial equipment.',
    h4c: '#ffffff',
    h1c: '#ffffff',
    pc: '#ffffff',
    showBtn: true,
    btnHref: ROUTE_PRODUCTS,
  },
  {
    bg: '/resource/n07/assets/images/hero/hero-s4.jpg',
    h4: 'Global Supply & Service',
    h1: 'Serving Markets Worldwide',
    p: 'Backed by production bases in Shandong and Ningbo, we deliver one-stop bearing solutions from selection and customization to after-sales support.',
    h4c: '#ffffff',
    h1c: '#ffffff',
    pc: '#ffffff',
    showBtn: true,
    btnHref: ROUTE_CN_CONTACT,
  },
]

export function getHeroSlides(lang = 'zh') {
  return lang === 'en' ? heroSlidesEn : heroSlides
}

/** 产品分类（slug 对应路由 /products/:slug） */
export const productCategories = [
  { title: '深沟球轴承', slug: 'deep-groove' },
  { title: '圆锥滚子轴承', slug: 'taper-roller' },
  {
    title: '外球面轴承',
    slug: 'pillow-block',
    children: [
      { title: 'UCP 系列' },
      { title: 'UCF 系列' },
      { title: 'UCFL 系列' },
      { title: 'UCT 系列' },
      { title: 'UCFB 系列' },
      { title: 'UCFA 系列' },
    ],
  },
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

export const categoryTitleEnBySlug = {
  'deep-groove': 'Deep Groove Ball Bearing',
  'taper-roller': 'Taper Roller Bearing',
  'pillow-block': 'Pillow Block Bearing',
  'self-aligning-ball': 'Self-aligning Ball Bearing',
  'spherical-roller': 'Spherical Roller Bearing',
  'thrust-ball': 'Thrust Ball Bearing',
  'angular-contact': 'Angular Contact Ball Bearings',
  'cylindrical-roller': 'Cylindrical Roller Bearings',
  'bearing-units': 'Bearing Units',
  needle: 'Needle Roller Bearings',
  ceramic: 'Ceramic Bearings',
  sealed: 'Sealed Bearings',
  joint: 'Ge Joint Bearing',
  'rod-end': 'Rod End Joint Bearing',
  hub: 'Automotive Hub Wheel Bearings',
}

const productTitleEnBySlug = {
  'rod-end-sa-tk': 'Rod End Joint Bearing SA..TK Series',
  'joint-ge': 'Ge Joint Bearing',
  'self-aligning-2200': 'Self-alignimg Ball Bearing 2200 Series',
  'spherical-24100': 'Spherical Roller Bearing 24100 Series',
  'spherical-23100': 'Spherical Roller Bearing 23100 Series',
  'needle-nk-nks': 'Needle Roller Bearing NK NKS Series',
  'needle-hk-bk': 'Needle Roller Bearing HK BK Series',
  'pillow-ucfb': 'Pillow Block Bearing UCFB Series',
  'needle-k': 'Needle Roller Bearing K Series',
  'pillow-ucfa': 'Pillow Block Bearing UCFA Series',
  'pillow-ucpa': 'Pillow Block Bearing UCPA Series',
  'pillow-ucph': 'Pillow Block Bearing UCPH Series',
  'pillow-ucfc': 'Pillow Block Bearing UCFC Series',
  'deep-groove-6400': 'Deep Groove Ball Bearing 6400 Series',
  'taper-32000': 'Taper Roller Bearing 32000 Series',
  'deep-groove-6300': 'Deep Groove Ball Bearing 6300 Series',
  'hub-bearing': 'Automotive Hub Wheel Bearings',
  'rod-end-pos': 'Rod End Joint Bearing POS Series',
  'rod-end-phs': 'Rod End Joint Bearing PHS Series',
  'rod-end-sitk': 'Rod End Joint Bearing SI..TK Series',
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

export function localizeCategory(category, lang = 'zh') {
  if (!category) return category
  if (lang !== 'en') return category
  return {
    ...category,
    title: categoryTitleEnBySlug[category.slug] || category.title,
  }
}

export function localizeCategories(categories, lang = 'zh') {
  return categories.map((c) => localizeCategory(c, lang))
}

export function localizeProduct(product, lang = 'zh') {
  if (!product) return product
  if (lang !== 'en') return product
  return {
    ...product,
    title: productTitleEnBySlug[product.slug] || product.title,
    category: categoryTitleEnBySlug[product.categorySlug] || product.category,
  }
}

export function localizeProducts(items, lang = 'zh') {
  return items.map((p) => localizeProduct(p, lang))
}

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
