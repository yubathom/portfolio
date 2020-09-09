<template>
  <div class="element-desktop-gif-displayer">
    <img
      class="element-desktop-gif-displayer__image"
      :src="fullSource"
    >
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'ElementDesktopGifDisplayer',
  props: {
    source: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '200, 0, 0'
    },
    description: {
      type: String,
      default: 'gif description'
    },
    width: {
      type: Number,
      required: true
    },
    heigth: {
      type: Number,
      required: true
    },
    assetsBasePath: {
      type: String,
      required: true
    }
  },
  computed: {
    fullSource () {
      return this.assetsBasePath + this.source
    }
  }
}
</script>
<style lang="scss" scoped>
.element-desktop-gif-displayer {
  &__image {
    max-width: 100%;
  }
}
</style>
