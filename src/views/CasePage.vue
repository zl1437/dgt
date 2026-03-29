<script setup>
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { img, showcaseCases, DEFAULT_INNER_BANNER_BG } from '../site.js'
</script>

<template>
  <InnerPageLayout page-title="案例展示" :banner-bg="DEFAULT_INNER_BANNER_BG">
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
                  以下为典型产品应用场景与效果图展示，涵盖工业机械、农机、工程机械等多领域配套轴承应用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team-section pb-75" style="background: #fff">
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
      </div>
    </div>
  </InnerPageLayout>
</template>
