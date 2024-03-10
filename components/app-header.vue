<template>
  <header class="header">
    <img src="/logo.jpg" alt="Logo" class="header__logo" />
    <nav>
      <ul class="header__links">
        <li><nuxt-link to="/" class="header__link header__link_active">Home</nuxt-link></li>
        <li><nuxt-link to="/" class="header__link">Find a doctor</nuxt-link></li>
        <li><nuxt-link to="/" class="header__link">Apps</nuxt-link></li>
        <li><nuxt-link to="/" class="header__link">Testimonials</nuxt-link></li>
        <li><nuxt-link to="/about" class="header__link">About Us</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 10px 0;
}

.header__logo {
  object-fit: contain;
}

.header__links {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.header__link {
  text-decoration: none;
  color: var(--primary-font-light-color);
}

.header__link_active {
  color: var(--primary-font-color);
}
</style>