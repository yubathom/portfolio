<template>
  <div
    class="element-phone-gif-displayer"
    :class="{
      'element-phone-gif-displayer--grabbing': grabbing
    }"
  >
    <svg
      v-observe-visibility="{
        callback: visibilityChanged
      }"
      class="element-phone-gif-displayer__svg-frame"
      width="335"
      height="675"
      viewBox="0 0 335 675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @mousedown="grab(true)"
      @mouseleave="grab(false)"
      @mouseup="grab(false)"
      @touchstart="grab(true)"
      @touchend="grab(false)"
      @touchcancel="grab(false)"
    >
      <g clip-path="url(#clip0)">
        <path d="M169.03 23.9896C166.676 23.9896 164.793 22.1081 164.793 19.7562C164.793 17.4042 166.676 15.5227 169.03 15.5227C171.384 15.5227 173.268 17.4042 173.268 19.7562C173.268 22.1081 171.384 23.9896 169.03 23.9896ZM169.03 16.6987C167.382 16.6987 165.97 18.1098 165.97 19.7562C165.97 21.4025 167.382 22.8136 169.03 22.8136C170.678 22.8136 172.091 21.4025 172.091 19.7562C172.091 18.1098 170.678 16.6987 169.03 16.6987Z" fill="#808080" />
        <path d="M116.061 47.9791C112.765 47.9791 110.176 45.392 110.176 42.0993C110.176 38.8066 112.765 36.2195 116.061 36.2195C119.357 36.2195 121.947 38.8066 121.947 42.0993C121.711 45.392 119.122 47.9791 116.061 47.9791ZM116.061 37.6306C113.472 37.6306 111.353 39.7474 111.353 42.3345C111.353 44.9216 113.472 47.0383 116.061 47.0383C118.651 47.0383 120.769 44.9216 120.769 42.3345C120.534 39.5122 118.415 37.6306 116.061 37.6306Z" fill="#808080" />
        <path d="M192.807 44.4514H144.076C142.428 44.4514 141.015 43.0403 141.015 41.3939C141.015 39.7476 142.428 38.3364 144.076 38.3364H192.807C194.455 38.3364 195.868 39.7476 195.868 41.3939C195.868 43.0403 194.455 44.4514 192.807 44.4514ZM144.076 39.5124C143.134 39.5124 142.192 40.4532 142.192 41.3939C142.192 42.3347 143.134 43.2755 144.076 43.2755H192.807C193.749 43.2755 194.691 42.3347 194.691 41.3939C194.691 40.4532 193.749 39.5124 192.807 39.5124H144.076Z" fill="#808080" />
        <path d="M168.559 653.362C156.082 653.362 145.959 643.249 145.959 630.784C145.959 618.319 156.082 608.206 168.559 608.206C181.037 608.206 191.16 618.319 191.16 630.784C191.16 643.249 181.037 653.362 168.559 653.362ZM168.559 609.382C156.788 609.382 147.136 619.024 147.136 630.784C147.136 642.544 156.788 652.186 168.559 652.186C180.33 652.186 189.982 642.544 189.982 630.784C189.982 619.024 180.33 609.382 168.559 609.382Z" fill="#808080" />
        <path d="M168.559 657.596C153.728 657.596 141.486 645.601 141.486 630.549C141.486 615.732 153.493 603.502 168.559 603.502C183.391 603.502 195.632 615.496 195.632 630.549C195.397 645.601 183.391 657.596 168.559 657.596ZM168.559 604.913C154.434 604.913 142.663 616.437 142.663 630.784C142.663 644.895 154.199 656.655 168.559 656.655C182.684 656.655 194.455 645.131 194.455 630.784C194.22 616.437 182.684 604.913 168.559 604.913Z" fill="#808080" />
        <path d="M4.70835 111.716H0.706238V84.1985H4.70835V111.716ZM1.88333 110.54H3.76667V85.3744H1.88333V110.54Z" fill="#808080" />
        <path d="M4.70835 193.562H0.706238V141.82H4.70835V193.562ZM1.88333 192.387H3.76667V142.996H1.88333V192.387Z" fill="#808080" />
        <path d="M4.70835 255.653H0.706238V203.676H4.70835V255.653ZM1.88333 254.477H3.76667V204.852H1.88333V254.477Z" fill="#808080" />
        <path d="M312 591H25V82H312V591ZM25.941 589.826H310.589V83.1739H25.941V589.826V589.826Z" fill="#808080" />
        <rect :fill="defFill" x="26" y="83" width="285" height="507" />
        <text class="element-phone-gif-displayer__preloader-message" x="130" y="310">Loading...</text>
        <path d="M280.854 667.004H55.5587C30.8398 667.004 10.5938 646.777 10.5938 622.082V52.9182C10.5938 28.2231 30.6044 7.99658 55.5587 7.99658H280.854C305.573 7.99658 325.819 28.2231 325.819 52.9182V622.082C325.819 647.012 305.573 667.004 280.854 667.004ZM55.5587 9.17254C31.3106 9.17254 11.7709 28.6935 11.7709 52.9182V622.082C11.7709 646.307 31.3106 665.828 55.5587 665.828H280.854C305.102 665.828 324.642 646.307 324.642 622.082V52.9182C324.642 28.6935 305.102 9.17254 280.854 9.17254H55.5587V9.17254Z" fill="#808080" />
        <path d="M289.564 675H48.4961C23.3064 675 2.82502 654.538 2.82502 629.373V256.359H0V203.206H3.06044V194.268H0V141.115H3.06044V112.422H0V83.493H3.06044V45.6272C3.06044 20.4617 23.5418 0 48.4961 0H289.564C314.754 0 335.235 20.4617 335.235 45.6272V629.608C335 654.538 314.519 675 289.564 675ZM2.35418 254.007H5.41462V629.608C5.41462 653.362 24.7189 672.883 48.7316 672.883H289.564C313.342 672.883 332.881 653.598 332.881 629.608V45.6272C332.646 21.6376 313.342 2.35192 289.564 2.35192H48.4961C24.7189 2.35192 5.41462 21.6376 5.41462 45.6272V86.0801H2.35418V110.07H5.41462V143.467H2.35418V191.681H5.41462V205.322H2.35418V254.007Z" fill="#808080" />
      </g>
      <image
        class="element-phone-gif-displayer__gif"
        :class="{
          intersecting,
          loaded
        }"
        y="83"
        x="25"
        :href="fullSource"
        height="507"
        width="287"
        @load="onImageLoad"
      />
      <defs>
        <clipPath id="clip0">
          <rect width="335" height="675" fill="white" />
        </clipPath>
        <linearGradient :id="`preloader-background__${gifIndex}`" gradientTransform="rotate(90)">
          <stop offset="30%" :stop-color="`rgba(${color}, 1)`" />
          <stop offset="120%" :stop-color="`rgba(${color}, 0)`" />
        </linearGradient>
      </defs>
    </svg>
    <p class="element-phone-gif-displayer__description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ElementPhoneGifDisplayer',
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
    assetsBasePath: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loaded: false,
      intersecting: false,
      play: false,
      grabbing: false
    }
  },
  computed: {
    gifIndex () {
      return this.color
        .replace(',', '')
        .replace(' ', '')
    },
    defFill () {
      return `url(#preloader-background__${this.gifIndex})`
    },
    fullSource () {
      return this.assetsBasePath + this.source
    }
  },
  methods: {
    onImageLoad () {
      this.loaded = true
    },
    visibilityChanged (isIntersecting) {
      this.intersecting = isIntersecting
    },
    grab (state) {
      this.grabbing = state
    }
  }
}
</script>
<style lang="scss" scoped>
.element-phone-gif-displayer {
  margin-right: 20px;
  margin-top: 1rem;
  &__gif {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    transition-delay: 1s;
    &.loaded.intersecting {
      opacity: 1;
    }
  }
  &__description {
    text-align: center;
    font-size: small;
    padding: 0.7rem 0;
    border-bottom: 1px solid #808080;
    @media(max-width: $phone) {
      text-align: left;
    }
  }
  &__preloader-message {
    fill: white;
    animation: pulse 2s infinite;
    animation-direction: alternate;
  }
  @media (max-width: $tablet) {
    cursor: grab;
    &--grabbing {
      cursor: grabbing;
    }
  }
  @media(max-width: $phone) {
    margin: 1rem 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
