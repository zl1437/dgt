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
</script>

<template>
  <InnerPageLayout page-title="联系我们" :banner-bg="DEFAULT_INNER_BANNER_BG">
    <div class="container pt-75 pb-75">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="footer-widget-title mb-3">
            <h5>联系我们</h5>
          </div>
          <p><b>地址 :</b> 上海市嘉定工业区叶城路925号B区4幢J</p>
          <p>
            <b>电话:</b>
            <a :href="`tel:${TEL_MOBILE_HREF}`">{{ TEL_MOBILE_DISPLAY }}</a>
            &nbsp;&nbsp;
            <a :href="`tel:${TEL_LANDLINE_HREF}`">{{ TEL_LANDLINE_DISPLAY }}</a>
          </p>
          <p>
            <b>邮箱:</b>
            <a :href="MAILTO">{{ CONTACT_EMAIL }}</a>
          </p>
          <p>
            <b>网址:</b>
            <a :href="REMOTE_SITE" target="_blank" rel="noopener noreferrer">{{ REMOTE_SITE }}</a>
          </p>
        </div>
        <div class="col-md-6">
          <div class="footer-widget-title mb-3">
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
                <input
                  class="subscribe-submit-btn"
                  type="submit"
                  value=" 提交留言 "
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
