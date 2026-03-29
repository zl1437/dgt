<script setup>
import { RouterLink } from 'vue-router'
import HeroSwiper from '../components/HeroSwiper.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import {
  img,
  products,
  showcaseCases,
  newsItems,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
} from '../site.js'

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
                  <h5>// 上海赛铌斯实业有限公司</h5>
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
              <img :src="img('/pic/other/2024-6-20-17-1-57.jpg')" alt="上海赛铌斯实业有限公司" loading="lazy" />
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
          <div v-for="(c, i) in showcaseCases" :key="i" class="col-sm-12 col-md-6 col-lg-3">
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
          <div v-for="item in newsItems" :key="item.id" class="col-md-6 mb-4">
            <div class="blog-single-carousel">
              <div class="blog-thumb">
                <RouterLink :to="`/c_news/${item.id}`">
                  <img :src="img(item.cover)" :alt="item.title" loading="lazy" />
                </RouterLink>
              </div>
              <div class="blog-content">
                <h5>
                  <RouterLink :to="`/c_news/${item.id}`">{{ item.title }}</RouterLink>
                </h5>
                <div class="blog-learn-more">
                  <RouterLink :to="`/c_news/${item.id}`">
                    &nbsp;更多&nbsp;
                    <i class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
