<script setup>
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { img, DEFAULT_INNER_BANNER_BG } from '../site.js'
</script>

<template>
  <InnerPageLayout page-title="关于我们" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="about-section style-5 pt-75 pb-75">
      <div class="container">
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
                </div>
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
  </InnerPageLayout>
</template>
