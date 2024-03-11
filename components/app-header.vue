<script setup lang="ts">
import type { NavigationLink } from '#ui-pro/types';

const links: NavigationLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Find a doctor',
    to: '/find-a-doctor',
  },
  {
    label: 'Apps',
    to: '/apps',
  },
  {
    label: 'Testimonials',
    to: '/testimonials',
  },
  {
    label: 'About us',
    to: '/about',
  },
];

const ui = {
  container: 'w-full max-w-full',
};

</script>
<template>
  <UHeader :links="links" :ui="ui" class="header">
    <template #logo>
      <img src="/logo.jpg" alt="Logo" class="header__logo" />
    </template>

    <template #panel>
      <UNavigationTree :links="links" class="header__navigation" />
    </template>
  </UHeader>
</template>
<style scoped>
.header {
  border: none;
}

.header,
.header__navigation {
  --color-primary-DEFAULT: var(--primary-font-color);
  color: var(--primary-font-light-color);
}

.header :deep(.text-primary),
.header__navigation :deep(.text-primary) {
  color: var(--primary-font-color);
}

.header__logo {
  object-fit: contain;
}
</style>
