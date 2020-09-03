<template>
  <div class="container">
    <nav-header />
    <nuxt />
    <nav-footer />
  </div>
</template>

<style lang="scss">
@import '~/assets/reset';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  background: $grey-1;
}

body {
  margin: 1rem;
  font-family: $font;
  font-weight: 400;
  color: white;
  line-height: 1.52;
}
a {
  color: white;
  text-decoration: none
}

.container {
  max-width: 1400px;
  margin: auto;
}
</style>
