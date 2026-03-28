<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSwiper from '../components/HeroSwiper.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import {
  SITE,
  img,
  products,
  socialIcons,
  MAILTO,
  CONTACT_EMAIL,
  TEL_MOBILE_DISPLAY,
  TEL_LANDLINE_DISPLAY,
  TEL_MOBILE_HREF,
  TEL_LANDLINE_HREF,
  footerLegalLinks,
  NEWS_COVER_7TH,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
} from '../site.js'

const showToTop = ref(false)

function onScroll() {
  showToTop.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const services = [
  {
    icon: '/assets/images/feature-1.png',
    title: '服务：365天全程服务',
    html: '<p>强大的售后服务系统，全年在线，完美解答售后客户销售系列问题</p>',
  },
  {
    icon: '/assets/images/feature2.png',
    title: '营销：全网品牌推广',
    html: '<p>与各大互联网平台合作，全国联动营销推广。</p>',
  },
  {
    icon: '/assets/images/feature3.png',
    title: '指导：一对一指导',
    html: '<p>终端门店开业支持，免费提供店面搭配、形象设计。</p>',
  },
  {
    icon: '/assets/images/feature4.png',
    title: '团队：团队保障',
    html: '<p>强大的生产团队、研发团队、营销团队，实力保证。</p>',
  },
]

const cases = [
  { img: '/pic/small2/5_0.jpg', caption: '产品效果图1' },
  { img: '/pic/small2/2020-11-19-20-21-35.jpg', caption: '产品效果图2' },
  { img: '/pic/small2/2020-11-19-20-20-9.jpg', caption: '产品效果图3' },
  { img: '/pic/small2/2020-11-19-20-19-55.jpg', caption: '产品效果图4' },
]

</script>

<template>
  <div class="home-view">
    <HeroSwiper />

    <ProductPortfolio title="推荐产品" :items="products" />
    <ProductPortfolio title="新产品" :items="products" section-class="bg-2" />

    <div class="about-section style-5 pt-75">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head text-center pb-60">
              <h5>// 关于我们</h5>
              <h2>关于我们</h2>
              <span class="section-head-bar-2"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="about-content-container">
              <div class="section-head-container">
                <div class="section-head">
                  <h5>// 临清市诺尔轴承有限公司</h5>
                  <p>LQB® and NUOER® brand have a good reputation in the national and abroad market.</p>
                  <p>
                    LINQING CITY NUOER BEARING CO., LTD. is a professional bearing manufacturer which has more than 20 years experience in bearings production, bearings research and bearing quality control system. NUOER BEARING produces and sells 10 million sets of bearings each year, widely used in automobiles, railways, ships, industrial machinery, agricultural machinery, engineering machinery, mineral machinery and other fields. Can undertake a variety of bearing OEM and non-standard bearings customized.
                  </p>
                  <p>
                    NUOER has established horizontal collaboration with some other high-quality manufacturing companies to achieve complementary advantages. All bearings and supporting products, auto parts, and motors are sold at factory prices.
                  </p>
                  <p><br /></p>
                </div>
              </div>
              <div class="common-video style-5 mb-35">
                <h3 class="btn-common text-center">
                  <RouterLink :to="ROUTE_CN_ABOUT">&nbsp;更多&nbsp;</RouterLink>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="section-thumb">
              <img :src="img('/pic/other/2024-6-20-17-1-57.jpg')" alt="临清市诺尔轴承有限公司" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="services-section style-eight pt-75">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head text-center pb-60">
              <h5>// 我们的优势</h5>
              <h2>我们能提供什么</h2>
              <span class="section-head-bar-2"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(s, i) in services" :key="i" class="col-sm-12 col-md-6 col-lg-3 pl-0 pr-0">
            <div class="services-single-items">
              <div class="services-single-content">
                <div class="services-single-icon">
                  <img :src="img(s.icon)" :alt="s.title" loading="lazy" />
                </div>
                <div class="services-content-inner">
                  <h2>{{ s.title }}</h2>
                  <p v-html="s.html"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team-section-head pt-75">
      <div class="container">
        <div class="section-head pb-65">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="section-title pb-10">
                <h5>// 案例展示</h5>
                <h3>产品应用场景</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8">
              <div class="section-head-content">
                <p class="pt-0 pb-0">
                  这里写一些中文的案例应用场景说明，或者其他内容都可以这里写一些中文的案例应用场景说明，或者其他内容都可以这里写一些中文的案例应用场景说明，或者其他内容都可以这里写一些中文的案例应用场景说明，或者其他内容都可以
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team-section pb-50" style="background: #fff">
      <div class="container">
        <div class="row">
          <div v-for="(c, i) in cases" :key="i" class="col-sm-12 col-md-6 col-lg-3">
            <div class="single-team-member">
              <div class="team-member-thumb">
                <img :src="img(c.img)" alt="案例展示" loading="lazy" />
              </div>
              <div class="team-member-intro-section">
                <p>{{ c.caption }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-50">
          <div class="col-lg-12">
            <div class="team-btn text-center">
              <div class="btn-common text-center">
                <RouterLink :to="ROUTE_CN_CASE">
                  &nbsp;更多&nbsp; <i class="fas fa-angle-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonial-section style-3 pt-80 pb-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head text-center pb-55">
              <h5>// 用户评价</h5>
              <h2>我们的客户这么说</h2>
              <span class="section-head-bar-2"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="testimonial-single-item" style="max-width: 720px; margin: 0 auto">
              <div class="testimonial-thumb">
                <img
                  :src="img('/assets/images/testi-2.png')"
                  style="border-radius: 50%"
                  alt="娃哈哈"
                  loading="lazy"
                />
                <div class="testimonial-icon">
                  <span><i class="fas fa-quote-left"></i></span>
                </div>
              </div>
              <div class="testimonial-content">
                <p class="testimonial-content-text">
                  例如这家企业很棒，Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.
                </p>
                <h4>娃哈哈</h4>
                <p class="testimonial-designation">优秀企业家</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-section pt-80 bg-2 pb-70">
      <div class="container">
        <div class="section-head text-center mb-75">
          <h5>// 新闻中心</h5>
          <h2 class="text-white">最新的 <span>公司新闻</span></h2>
          <span class="section-head-bar-2"></span>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="blog-single-carousel">
              <div class="blog-thumb">
                <a :href="`${SITE}/cnnews/3.html`" target="_blank" rel="noopener">
                  <img
                    :src="img(NEWS_COVER_7TH)"
                    alt="以匠心铸品质，以创新启未来——致诺尔轴承成立七周年"
                    loading="lazy"
                  />
                </a>
              </div>
              <div class="blog-content">
                <h5>
                  <a :href="`${SITE}/cnnews/3.html`" target="_blank" rel="noopener">以匠心铸品质，以创新启未来——致诺尔轴承成立七周年</a>
                </h5>
                <div class="blog-learn-more">
                  <a :href="`${SITE}/cnnews/3.html`" target="_blank" rel="noopener">
                    &nbsp;更多&nbsp;
                    <i class="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="blog-single-carousel">
              <div class="blog-thumb">
                <a :href="`${SITE}/cnnews/2.html`" target="_blank" rel="noopener">
                  <img :src="img('/pic/other/2025-6-16-18-28-34.png')" alt="诺尔轴承有限公司成立公告" loading="lazy" />
                </a>
              </div>
              <div class="blog-content">
                <h5>
                  <a :href="`${SITE}/cnnews/2.html`" target="_blank" rel="noopener">诺尔轴承有限公司成立公告</a>
                </h5>
                <div class="blog-learn-more">
                  <a :href="`${SITE}/cnnews/2.html`" target="_blank" rel="noopener">
                    &nbsp;更多&nbsp;
                    <i class="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <div class="row footer-hr">
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <div class="footer-contact">
                <div class="footer-widget-title">
                  <h5>关于我们</h5>
                </div>
                <p>
                  我们始终以“技术为本、品质为根”为核心理念：团队汇聚10余年行业经验的研发与生产专家，深耕材料科学、精密加工与仿真测试技术，确保每一款产品兼具性能与耐用性；生产基地引进国际先进的智能化生产线，从原材料筛选到成品检测，全流程严格遵循ISO国际质量标准，以“零缺陷”出厂为目标，为客户创造可信赖的价值。
                </p>
                <div class="footer-about-social-icon">
                  <ul>
                    <li v-for="s in socialIcons" :key="s.alt + '-f'">
                      <a :href="s.href" target="_blank" rel="noopener noreferrer">
                        <img :src="s.src" :alt="s.alt" style="border-radius: 50%" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <div class="footer-contact">
                <div class="footer-widget-title">
                  <h5>联系我们</h5>
                </div>
                <p><b>地址 : </b>中国山东省聊城市临清市大辛庄办事处大辛庄村东</p>
                <p>
                  <b>电话: </b>
                  <a :href="TEL_MOBILE_HREF">{{ TEL_MOBILE_DISPLAY }}</a>
                  &nbsp;&nbsp;
                  <a :href="TEL_LANDLINE_HREF">{{ TEL_LANDLINE_DISPLAY }}</a>
                </p>
                <p>
                  <b>邮箱: </b>
                  <a :href="MAILTO">{{ CONTACT_EMAIL }}</a>
                </p>
                <p>
                  <b>网址:</b>
                  <a :href="SITE" target="_blank" rel="noopener noreferrer">{{ SITE }}</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <div class="footer-popular-post">
                <div class="footer-widget-title">
                  <h5>留言内容</h5>
                </div>
                <form class="rd-mailform_style-1" @submit.prevent>
                  <div class="row">
                    <div class="form-wrap col-md-6">
                      <input type="text" placeholder="您的称呼" required />
                    </div>
                    <div class="form-wrap col-md-6" style="margin-top: 0">
                      <input type="email" placeholder="您的邮箱" required />
                    </div>
                  </div>
                  <div class="form-wrap">
                    <textarea placeholder="留言内容" required></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <input class="subscribe-submit-btn" type="submit" value=" 提交留言 " style="position: relative; margin-bottom: 30px; top: 0; right: 0; font-size: 14px" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copyright-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="footer-copyright-text">
              <p>&copy; 2026 - 临清市诺尔轴承有限公司 &nbsp; 版权所有.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="footer-copyright-link text-md-right">
              <ul>
                <li v-for="item in footerLegalLinks" :key="item.label">
                  <RouterLink v-if="item.to" :to="item.to">{{ item.label }}</RouterLink>
                  <a v-else :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button id="to-top" type="button" :style="{ visibility: showToTop ? 'visible' : 'hidden', opacity: showToTop ? 1 : 0 }" @click="scrollTop">
      <i class="fa fa-angle-up"></i>
    </button>
  </div>
</template>

<style scoped>
#to-top {
  transition: opacity 0.2s ease;
}
</style>
