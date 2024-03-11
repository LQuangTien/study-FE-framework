<script lang="ts" setup>
import AppHeader from "./components/app-header.vue";
</script>

<template>
  <app-header class="header" />
  <UMain class="px-4 sm:px-6 lg:px-8 max-w-7xl">
    <NuxtLayout>
      <nuxt-page page-key="static" />
    </NuxtLayout>
  </UMain>
</template>