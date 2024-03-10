<script lang="ts" setup>
import AppHeader from "./components/app-header.vue";
</script>

<template>
  <app-header class="header" />
  <main class="main">
    <nuxt-page page-key="static" />
  </main>
</template>

<style scoped>
.header, .main {
  --horizontal-spacing: 60px;
  
  padding-inline: var(--horizontal-spacing);
}
</style>
