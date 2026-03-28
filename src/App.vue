<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div class="nuoer-app">
    <SiteHeader />
    <RouterView />
  </div>
</template>
