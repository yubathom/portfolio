<template>
  <a class="el-anchor" :href="href"><slot /></a>
</template>
<script>
export default {
  name: 'ElementAnchor',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.el-anchor {
  padding: 5px;
  background: $grey-2;
}
</style>
