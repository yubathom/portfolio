<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true
    }"
    class="element-iframe"
  >
    <p
      v-if="!isVisible"
      class="element-iframe--loading"
      :style="`background: linear-gradient(#5F5F5F, rgb(${color})); width: ${responsive.width}px; height:${responsive.height}px`"
    >
      <span>Loading...</span>
    </p>
    <iframe
      v-else
      class="element-iframe_frame"
      :src="src"
      frameborder="0"
      :width="responsive.width"
      :height="responsive.height"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    />
  </div>
</template>
<script>
export default {
  name: 'ElementIframe',
  props: {
    src: {
      type: String,
      required: true
    },
    color: {
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
  data () {
    return {
      isVisible: false
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
  },
  methods: {
    visibilityChanged (state) {
      this.isVisible = state
    }
  }
}
</script>
<style lang="scss" scoped>
.element-iframe {
  &__frame {
    background-color: white;
  }
  &--loading {
    font-size: small;
    text-align: center;
    padding-top: 5rem;
    span {
      animation: pulse 2s infinite;
      animation-direction: alternate;
      padding: 0.1rem;
    }
  }
}
</style>
