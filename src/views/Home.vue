<script setup>
import { computed } from 'vue'

import { RouterLink } from 'vue-router'
import HeroSwiper from '../components/HeroSwiper.vue'
import ProductPortfolio from '../components/ProductPortfolio.vue'
import {
  img,
  products,
  localizeProducts,
  showcaseCases,
  ROUTE_CN_ABOUT,
  ROUTE_CN_CASE,
} from '../site.js'
import { useLocale } from '../composables/useLocale'
import { getPack } from '../locales/translate.js'

const SERVICE_ICONS = [
  '/assets/images/feature-1.png',
  '/assets/images/feature2.png',
  '/assets/images/feature3.png',
  '/assets/images/feature4.png',
]

const { lang, t } = useLocale()
const displayProducts = computed(() => localizeProducts(products, lang.value))
const displayServices = computed(() => {
  const pack = getPack(lang.value)
  const list = pack.home.services
  return list.map((s, i) => ({
    icon: SERVICE_ICONS[i],
    title: s.title,
    html: s.html,
  }))
})
</script>

<template>
  <div class="home-view">
    <HeroSwiper />

    <ProductPortfolio :title="t('home.recommendProducts')" :items="displayProducts" :lang="lang" />
    <ProductPortfolio :title="t('home.newProducts')" :items="displayProducts" :lang="lang" section-class="bg-2" />

    <div class="about-section style-5 pt-75">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head text-center pb-60">
              <h5>// {{ t('home.about.sectionTag') }}</h5>
              <h2>{{ t('home.about.sectionTitle') }}</h2>
              <span class="section-head-bar-2"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="about-content-container">
              <div class="section-head-container">
                <div class="section-head">
                  <h5>// {{ t('home.about.companyH5') }}</h5>
                  <p>{{ t('home.about.introP') }}</p>
                  <p><br /></p>
                </div>
              </div>
              <div class="common-video style-5 mb-35">
                <h3 class="btn-common text-center">
                  <RouterLink :to="ROUTE_CN_ABOUT">&nbsp;{{ t('common.learnMore') }}&nbsp;</RouterLink>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="section-thumb">
              <img :src="img('/pic/other/2024-6-20-17-1-57.jpg')" :alt="t('aboutPage.imageAlt')" loading="lazy" />
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
              <h5>// {{ t('home.advantages.sectionTag') }}</h5>
              <h2>{{ t('home.advantages.sectionTitle') }}</h2>
              <span class="section-head-bar-2"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(s, i) in displayServices" :key="i" class="col-sm-12 col-md-6 col-lg-3 pl-0 pr-0">
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
                <h5>// {{ t('home.teamCase.sectionTag') }}</h5>
                <h3>{{ t('home.teamCase.sectionTitle') }}</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8">
              <div class="section-head-content">
                <p class="pt-0 pb-0">{{ t('home.teamCase.body') }}</p>
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
                <img :src="img(c.img)" :alt="t('home.caseAlt')" loading="lazy" />
              </div>
              <div class="team-member-intro-section">
                <p>{{ lang === 'en' && c.captionEn ? c.captionEn : c.caption }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-50">
          <div class="col-lg-12">
            <div class="team-btn text-center">
              <div class="btn-common text-center">
                <RouterLink :to="ROUTE_CN_CASE">
                  &nbsp;{{ t('common.learnMore') }}&nbsp; <i class="fas fa-angle-right"></i>
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
              <h5>// {{ t('home.testimonial.sectionTag') }}</h5>
              <h2>{{ t('home.testimonial.sectionTitle') }}</h2>
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
                  :alt="t('meta.testimonialAlt')"
                  loading="lazy"
                />
                <div class="testimonial-icon">
                  <span><i class="fas fa-quote-left"></i></span>
                </div>
              </div>
              <div class="testimonial-content">
                <p class="testimonial-content-text">{{ t('home.testimonial.quote') }}</p>
                <h4>{{ t('home.testimonial.author') }}</h4>
                <p class="testimonial-designation">{{ t('home.testimonial.role') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
