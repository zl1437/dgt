<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="nuoer-app">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
