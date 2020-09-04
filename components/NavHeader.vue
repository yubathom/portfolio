<template>
  <header>
    <nav>
      <nuxt-link to="/" tag="a">
        work
      </nuxt-link>
      <nuxt-link to="/about" tag="a">
        about / contact
      </nuxt-link>
      <a href="https://yubathom.github.io/cv/?lang=en">cv</a>
    </nav>
    <h1>Thomas Yuba</h1>
  </header>
</template>
<script>
export default {
  name: 'NavHeader'
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid white;
}
.nuxt-link-exact-active {
  border-bottom: 5px solid white;
}
a {
  margin-right: 1rem;
}
</style>
