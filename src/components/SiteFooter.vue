<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  REMOTE_SITE,
  socialIcons,
  MAILTO,
  CONTACT_EMAIL,
  TEL_MOBILE_DISPLAY,
  TEL_LANDLINE_DISPLAY,
  TEL_MOBILE_HREF,
  TEL_LANDLINE_HREF,
  footerLegalLinks,
} from '../site.js'
import { useLocale } from '../composables/useLocale'

const showToTop = ref(false)
const { t } = useLocale()

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
</script>

<template>
  <div class="site-footer-wrap">
    <div class="footer">
      <div class="container">
        <div class="row footer-hr">
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <div class="footer-contact">
                <div class="footer-widget-title">
                  <h5>{{ t('footer.aboutTitle') }}</h5>
                </div>
                <p>{{ t('footer.aboutBody') }}</p>
                <div class="footer-about-social-icon">
                  <ul>
                    <li v-for="s in socialIcons" :key="s.alt + '-f'">
                      <a class="footer-social-link" :href="s.href" target="_blank" rel="noopener noreferrer">
                        <img class="footer-social-img" :src="s.src" :alt="s.alt" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="widget">
              <div class="footer-contact">
                <div class="footer-widget-title">
                  <h5>{{ t('footer.contactTitle') }}</h5>
                </div>
                <p><b>{{ t('common.address') }} : </b>上海市嘉定工业区叶城路925号B区4幢J</p>
                <p>
                  <b>{{ t('common.phone') }}: </b>
                  <a :href="TEL_MOBILE_HREF">{{ TEL_MOBILE_DISPLAY }}</a>
                  &nbsp;&nbsp;
                  <a :href="TEL_LANDLINE_HREF">{{ TEL_LANDLINE_DISPLAY }}</a>
                </p>
                <p>
                  <b>{{ t('common.email') }}: </b>
                  <a :href="MAILTO">{{ CONTACT_EMAIL }}</a>
                </p>
                <p>
                  <b>{{ t('common.website') }}:</b>
                  <a :href="REMOTE_SITE" target="_blank" rel="noopener noreferrer">{{ REMOTE_SITE }}</a>
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4">
            <div class="widget">
              <div class="footer-popular-post">
                <div class="footer-widget-title">
                  <h5>{{ t('form.title') }}</h5>
                </div>
                <form class="rd-mailform_style-1" @submit.prevent>
                  <div class="row">
                    <div class="form-wrap col-md-6">
                      <input type="text" :placeholder="t('form.namePlaceholder')" required />
                    </div>
                    <div class="form-wrap col-md-6" style="margin-top: 0">
                      <input type="email" :placeholder="t('form.emailPlaceholder')" required />
                    </div>
                  </div>
                  <div class="form-wrap">
                    <textarea :placeholder="t('form.messagePlaceholder')" required></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <input
                        class="subscribe-submit-btn"
                        type="submit"
                        :value="` ${t('common.submit')} `"
                        style="position: relative; margin-bottom: 30px; top: 0; right: 0; font-size: 14px"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="footer-copyright-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="footer-copyright-text">
              <p>{{ t('footer.copyright') }}</p>
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
/* 与目标站页脚社交区一致：圆形图标，高度由全局 .footer-about-social-icon img 约束 */
.footer-social-link {
  display: inline-block;
  line-height: 0;
}
.footer-social-img {
  border-radius: 50%;
  height: 35px;
  width: auto;
  vertical-align: middle;
  object-fit: cover;
}
</style>
