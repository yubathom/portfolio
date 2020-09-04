<template>
  <div class="element-desktop-gif-displayer">
    <img
      class="element-desktop-gif-displayer__image"
      :src="source"
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
    preloaderRGB: {
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
