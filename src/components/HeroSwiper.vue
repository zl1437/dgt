<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { heroSlides } from '../site.js'

function isExternalHref(href) {
  return typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'))
}
</script>

<template>
  <div class="swiper-slider style-four">
    <div class="container-fluid">
      <div class="row">
        <Swiper
          :modules="[Navigation]"
          :navigation="true"
          :loop="true"
          class="swiper-container-one hero-swiper"
        >
          <SwiperSlide
            v-for="(slide, i) in heroSlides"
            :key="i"
            class="slide-1"
            :style="{ background: `url(${slide.bg}) no-repeat center/cover` }"
          >
            <div class="swiper-slider-content">
              <div class="container text-left">
                <h4 :style="{ color: slide.h4c }">{{ slide.h4 }}</h4>
                <h1 :style="{ color: slide.h1c }">{{ slide.h1 }}</h1>
                <p v-if="slide.p" :style="{ color: slide.pc }">{{ slide.p }}</p>
                <div v-if="slide.showBtn" class="btn-common btn-hero">
                  <a
                    :href="slide.btnHref"
                    :target="isExternalHref(slide.btnHref) ? '_blank' : undefined"
                    :rel="isExternalHref(slide.btnHref) ? 'noopener noreferrer' : undefined"
                  >
                    &nbsp;更多&nbsp; <i class="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
