<script setup>
import InnerPageLayout from '../components/InnerPageLayout.vue'
import {
  MAILTO,
  CONTACT_EMAIL,
  TEL_MOBILE_DISPLAY,
  TEL_LANDLINE_DISPLAY,
  TEL_MOBILE_HREF,
  TEL_LANDLINE_HREF,
  REMOTE_SITE,
  DEFAULT_INNER_BANNER_BG,
} from '../site.js'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <InnerPageLayout :page-title="t('pageTitle.contact')" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="footer-widget-title mb-3">
            <h5>{{ t('footer.contactTitle') }}</h5>
          </div>
          <p><b>{{ t('common.address') }} :</b> 上海市嘉定工业区叶城路925号B区4幢J</p>
          <p>
            <b>{{ t('common.phone') }}:</b>
            <a :href="`tel:${TEL_MOBILE_HREF}`">{{ TEL_MOBILE_DISPLAY }}</a>
            &nbsp;&nbsp;
            <a :href="`tel:${TEL_LANDLINE_HREF}`">{{ TEL_LANDLINE_DISPLAY }}</a>
          </p>
          <p>
            <b>{{ t('common.email') }}:</b>
            <a :href="MAILTO">{{ CONTACT_EMAIL }}</a>
          </p>
          <p>
            <b>{{ t('common.website') }}:</b>
            <a :href="REMOTE_SITE" target="_blank" rel="noopener noreferrer">{{ REMOTE_SITE }}</a>
          </p>
        </div>
        <div class="col-md-6">
          <div class="footer-widget-title mb-3">
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
    </div>
  </InnerPageLayout>
</template>
