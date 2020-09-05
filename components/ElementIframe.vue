<template>
  <iframe
    class="element-iframe"
    :src="src"
    frameborder="0"
    :width="responsive.width"
    :height="responsive.height"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
  />
</template>
<script>
export default {
  name: 'ElementIframe',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    innerWidth: {
      type: Number,
      required: true
    }
  },
  computed: {
    responsive () {
      if (this.width > this.innerWidth) {
        const margin = 32

        const proportionalWidth = this.innerWidth - margin
        const proportionalHeight = (proportionalWidth * this.height) / this.width

        return {
          width: proportionalWidth,
          height: proportionalHeight
        }
      }
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.element-iframe {
  background-color: $grey-2;
}
</style>
