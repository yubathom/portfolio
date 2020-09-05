<template>
  <footer class="footer">
    <a href="https://github.com/yubathom/portfolio" class="footer__ico"><icon-github /></a><p>
      Thomas Yuba © 2020 <element-anchor href="https://github.com/yubathom/portfolio/blob/master/LICENSE">
        License GPLv3
      </element-anchor>
    </p>
  </footer>
</template>
<script>
export default {
  name: 'NavFooter'
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  height: 50px;
  border-top: solid 1px white;
  &__ico {
    margin-right: 10px;
    height: 26px;
    width: 25px;
  }
}
</style>
