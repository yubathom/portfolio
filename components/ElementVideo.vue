<template>
  <div
    class="element-video"
  >
    <p class="element-video__description">
      {{ description }}
    </p>
    <svg
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true
      }"
      class="element-video__frame"
      width="326"
      height="725"
      viewBox="0 0 326 725"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M323.022 30.6467L315.691 17.6105L307.214 8.9196L287.5 1.5C205.069 1.5 122.428 2.36517 39.9999 1.5L20.6184 8.9196L9.16377 23.3281L3.20734 42.0821L3.99994 687.5L8.99994 702C14.4756 709.419 18.1418 712.917 25.6585 718.139L41.0078 723.857H286.825L302.174 718.139L314.774 708.991L321.876 697.555L324.625 686.12V42.0821L323.022 30.6467ZM316.378 679.259C316.378 679.259 313.171 697.098 302.862 705.331C292.781 713.565 280.915 716.995 274.5 716.995C198.976 716.995 125.925 716.995 50.4006 716.995C44.2151 716.995 34.8222 713.336 24.513 705.331C14.4329 697.098 11.2256 679.259 11.2256 679.259C11.2256 679.259 10.9965 53.9291 10.9965 48.7146C10.9965 43.5 12.8293 31.5616 23.8257 20.5836C34.8222 9.60572 50.8588 8.46219 50.8588 8.46219H276.974C276.974 8.46219 293.011 9.60572 303.778 20.5836C314.774 31.5616 316.607 48.7146 316.607 48.7146L316.378 679.259Z" fill="#6B6B6B" />
        <path d="M164.489 23.3282C162.198 23.3282 160.365 21.4985 160.365 19.2114C160.365 16.9244 162.198 15.0947 164.489 15.0947C166.78 15.0947 168.613 16.9244 168.613 19.2114C168.613 21.4985 166.78 23.3282 164.489 23.3282ZM164.489 16.2383C162.885 16.2383 161.511 17.6105 161.511 19.2114C161.511 20.8124 162.885 22.1846 164.489 22.1846C166.093 22.1846 167.467 20.8124 167.467 19.2114C167.467 17.6105 166.093 16.2383 164.489 16.2383Z" fill="#808080" />
        <path d="M4.58194 108.636H0.687347V81.877H4.58194V108.636ZM1.83281 107.492H3.66556V83.0205H1.83281V107.492Z" fill="#808080" />
        <path d="M4.58194 188.226H0.687347V137.91H4.58194V188.226ZM1.83281 187.082H3.66556V139.054H1.83281V187.082Z" fill="#808080" />
        <path d="M4.58194 248.604H0.687347V198.06H4.58194V248.604ZM1.83281 247.461H3.66556V199.203H1.83281V247.461Z" fill="#808080" />
        <path d="M273.308 717.224H54.0661C30.0112 717.224 10.3092 697.555 10.3092 673.541V51.4591C10.3092 27.4449 29.7821 7.77612 54.0661 7.77612H273.308C297.363 7.77612 317.065 27.4449 317.065 51.4591V673.541C317.065 697.784 297.363 717.224 273.308 717.224ZM54.0661 8.91966C30.4694 8.91966 11.4547 27.9023 11.4547 51.4591V673.541C11.4547 697.098 30.4694 716.081 54.0661 716.081H273.308C296.905 716.081 315.92 697.098 315.92 673.541V51.4591C315.92 27.9023 296.905 8.91966 273.308 8.91966H54.0661V8.91966Z" fill="#808080" />
        <path d="M281.785 725H47.1933C22.6803 725 2.74912 705.103 2.74912 680.631V249.29H0V197.603H2.97821V188.912H0V137.224H2.97821V109.322H0V81.1909H2.97821V44.3691C2.97821 19.8975 22.9093 0 47.1933 0H281.785C306.298 0 326.229 19.8975 326.229 44.3691V680.86C326 705.103 306.069 725 281.785 725ZM2.29093 247.003H5.26915V680.86C5.26915 703.959 24.0548 722.942 47.4223 722.942H281.785C304.923 722.942 323.938 704.188 323.938 680.86V44.3691C323.709 21.041 304.923 2.28707 281.785 2.28707H47.1933C24.0548 2.28707 5.26915 21.041 5.26915 44.3691V83.7066H2.29093V107.035H5.26915V139.511H2.29093V186.396H5.26915V199.661H2.29093V247.003Z" fill="#808080" />
      </g>
    </svg>
    <video
      v-if="intersected"
      :ref="`video-${_uid}`"
      key="video"
      class="element-video__video"
      controls
      muted
      width="304"
      height="658"
      :poster="`${assetsBasePath}${poster}`"
      @canplay="setVideoPlayer"
    >
      <source
        :src="`${assetsBasePath}${source}`"
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
    <p
      v-else
      key="preloader"
      :style="`background: linear-gradient(#5F5F5F, rgb(${color}))`"
      class="element-video__video element-video__video--loading"
    >
      <span>Loading...</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ElementVideo',
  props: {
    color: {
      type: String,
      default: '0, 0, 0'
    },
    source: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
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
      intersected: false,
      canplay: false
    }
  },
  methods: {
    visibilityChanged (status) {
      this.intersected = status
    },
    setVideoPlayer () {
      this.canplay = true
    }
  }
}
</script>
<style lang="scss" scoped>
.element-video {
  margin-right: 20px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &__description {
    text-align: center;
    font-size: small;
    padding: 0.7rem 0;
    border-top: 1px solid #808080;
    width: 100%;
  }
  &__svg {
    position: absolute;
    top: 0;
    left: 0;
  };
  &__video {
    position: absolute;
    z-index: 10;
    top: 79px;
    border-radius: 17px;
    transition: 0.5s ease-in-out opacity;
    &:focus {
      outline: none;
    }
    &--loading {
      font-size: small;
      width: 304px;
      height: 658px;
      padding: 3rem 1rem 1rem;
      text-align: center;
      span {
        animation: pulse 2s infinite;
        animation-direction: alternate;
        padding: 0.1rem;
      }
    }
  }
}

</style>
