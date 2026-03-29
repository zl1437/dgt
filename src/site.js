/** 目标站资源根路径（图片沿用线上地址） */
export const SITE = ''

/** 本项目 Vue Router 路径（与目标站中文栏目对应） */
export const ROUTE_HOME = '/'
export const ROUTE_CN_ABOUT = '/cnabout'
export const ROUTE_CN_CASE = '/cncase'
export const ROUTE_CN_NEWS = '/c_news'
export const ROUTE_CN_CONTACT = '/cncontact'

export const CONTACT_EMAIL = 'easondu@synergybearings.com | vicky@synergybearings.com'
export const MAILTO = `mailto:${CONTACT_EMAIL}`
export const TEL_MOBILE_DISPLAY = '+8618839713991 | +8617821086766'
export const TEL_LANDLINE_DISPLAY = '+8618839713991 | +8617821086766'
/** E.164，用于 tel: */
export const TEL_MOBILE_HREF = '+8618839713991 | +8617821086766'
export const TEL_LANDLINE_HREF = '+8618839713991 | +8617821086766'
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=8618839713991'

export const PAGE_CN_ABOUT = `${SITE}/cnabout.html`
/** 嵌入 iframe 用的目标站完整 URL */
export const PAGE_CN_CASE = `${SITE}/cncase/`
export const PAGE_CN_NEWS_LIST = `${SITE}/c_news/`
export const PAGE_CN_CONTACT = `${SITE}/cncontact.html`
export const PAGE_PRIVACY = `${SITE}/privacy.html`
export const PAGE_PRODUCTS = `${SITE}/c_products/`

/** 与 cnnews/3.html 面包图同图（pic/flash/...） */
export const NEWS_COVER_7TH = '/pic/flash/2024-6-25-15-20-37.jpg'

export const footerLegalLinks = [
  { label: 'About Us', to: ROUTE_CN_ABOUT },
  { label: 'Privacy Policy', href: PAGE_PRIVACY },
  { label: 'Services', href: PAGE_PRODUCTS },
]

export const img = (path) => {
  if (path.startsWith('http')) return path
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE}${p}`
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

export const products = [
  {
    title: '杆端关节轴承 SA..TK 系列',
    category: '杆端关节轴承',
    small: '/pic/small/2025-9-17-9-37-33.jpg',
    big: '/pic/big/2025-9-17-9-37-33.jpg',
    href: `${SITE}/cnproducts/52-Rod-End-Joint-Bearing-SA..TK-Series.html`,
  },
  {
    title: '关节轴承',
    category: 'GE 系列',
    small: '/pic/small/2025-9-12-16-31-41.jpg',
    big: '/pic/big/2025-9-12-16-31-41.jpg',
    href: `${SITE}/cnproducts/49-Ge-Joint-Bearing.html`,
  },
  {
    title: '调心球轴承 2200 系列',
    category: '调心球轴承',
    small: '/pic/small/2025-9-12-14-24-1.jpg',
    big: '/pic/big/2025-9-12-14-24-1.jpg',
    href: `${SITE}/cnproducts/47-Self-alignimg-ball-bearing-2200-Series.html`,
  },
  {
    title: '调心滚子轴承 24100 系列',
    category: '调心滚子轴承',
    small: '/pic/small/2025-9-11-9-24-37.jpg',
    big: '/pic/big/2025-9-11-9-24-37.jpg',
    href: `${SITE}/cnproducts/39-Spherical-roller-bearing-24100-Series.html`,
  },
  {
    title: '调心滚子轴承 23100 系列',
    category: '调心滚子轴承',
    small: '/pic/small/2025-9-11-8-19-10.jpg',
    big: '/pic/big/2025-9-11-8-19-10.jpg',
    href: `${SITE}/cnproducts/35-Spherical-roller-bearing-23100-Series.html`,
  },
  {
    title: '滚针轴承NK NKS系列',
    category: '滚针轴承',
    small: '/pic/small/2025-9-19-14-55-50.gif',
    big: '/pic/big/2025-9-19-14-55-50.gif',
    href: `${SITE}/cnproducts/65-Needle-Roller-Bearing-NK-NKS-Series.html`,
  },
  {
    title: '滚针轴承 HK BK系列',
    category: '滚针轴承',
    small: '/pic/small/2025-9-19-14-15-51.jpg',
    big: '/pic/big/2025-9-19-14-15-51.jpg',
    href: `${SITE}/cnproducts/64-Needle-Roller-Bearing-HK BK Series.html`,
  },
  {
    title: '外球面轴承UCFB系列',
    category: '外球面轴承',
    small: '/pic/small/2025-9-19-11-58-30.jpg',
    big: '/pic/big/2025-9-19-11-58-30.jpg',
    href: `${SITE}/cnproducts/63-Pillow-Block-Bearing-UCFB-Series.html`,
  },
]

export const productCategories = [
  { title: '深沟球轴承', href: `${SITE}/cnlist/25-this-catalogue-name.html` },
  { title: '圆锥滚子轴承', href: `${SITE}/cnlist/31-Taper-Roller-Bearing.html` },
  { title: '外球面轴承', href: `${SITE}/cnlist/32-Pillow-Block-Bearing.html` },
  { title: '调心球轴承', href: `${SITE}/cnlist/33-Self-aligning-ball-bearing.html` },
  { title: '调心滚子轴承', href: `${SITE}/cnlist/34-Spherical-Roller-Bearing.html` },
  { title: '推力球轴承', href: `${SITE}/cnlist/35-Thrust-Ball-Bearing.html` },
  { title: '角接触球轴承', href: `${SITE}/cnlist/36-Angular-Contact-Ball-Bearings.html` },
  { title: '圆柱滚子轴承', href: `${SITE}/cnlist/37-Cylindrical-Roller-Bearings.html` },
  { title: '带座轴承', href: `${SITE}/cnlist/38-Bearing-Units.html` },
  { title: '滚针轴承', href: `${SITE}/cnlist/39-Needle-Roller-Bearings.html` },
  { title: '陶瓷轴承', href: `${SITE}/cnlist/40-Ceramic-Bearings.html` },
  { title: '密封轴承', href: `${SITE}/cnlist/41-Sealed-Bearings.html` },
  { title: '关节轴承', href: `${SITE}/cnlist/42-.html` },
  { title: '杆端关节轴承', href: `${SITE}/cnlist/43-.html` },
  { title: '轮毂轴承', href: `${SITE}/cnlist/44-Automotive-Hub-Wheel-Bearings.html` },
]

export const socialIcons = [
  {
    href: 'https://www.facebook.com',
    src: 'https://www.sohokey.cn/pic/other/16315208455554075.jpg',
    alt: 'facebook',
  },
  {
    href: 'https://www.twitter.com',
    src: 'https://www.sohokey.cn/pic/other/16315208455474973.jpg',
    alt: 'twitter',
  },
  {
    href: 'https://www.linkedin.com/',
    src: 'https://www.sohokey.cn/pic/other/16315208452083494.jpg',
    alt: 'linkedin',
  },
]
