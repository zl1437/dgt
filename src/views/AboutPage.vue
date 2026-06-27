<script setup>
import InnerPageLayout from '../components/InnerPageLayout.vue'
import { img, DEFAULT_INNER_BANNER_BG } from '../site.js'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <InnerPageLayout :page-title="t('pageTitle.about')" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="about-section style-5 pt-75 pb-75">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="about-content-container">
              <div class="section-head-container">
                <div class="section-head">
                  <h5>// {{ t('aboutPage.companyH5') }}</h5>
                  <p>{{ t('aboutPage.intro') }}</p>
                </div>
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
  </InnerPageLayout>
</template>
