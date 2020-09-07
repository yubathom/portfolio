<template>
  <article
    :id="id"
    class="section-project"
    :class="{ 'section-project--is-visible': isVisible }"
  >
    <h3 class="section-project__title">
      {{ title }}
    </h3>
    <div class="section-project__info">
      <p>{{ tags }} | {{ year }} </p>
    </div>
    <div
      v-observe-visibility="{
        callback: visibilityChanged
      }"
      class="section-project__media"
    >
      <ul v-if="videos.length" class="smartphone">
        <li v-for="(video, videoIndex) in videos" :key="videoIndex">
          <element-video v-bind="video" :assets-base-path="assetsBasePath" />
        </li>
      </ul>
      <ul v-if="smartphoneGifs.length" class="smartphone">
        <li v-for="(gif, gifIndex) in smartphoneGifs" :key="gifIndex">
          <element-phone-gif-displayer v-bind="gif" :assets-base-path="assetsBasePath" />
        </li>
      </ul>
      <ul v-if="desktopGifs.length" class="desktop">
        <li v-for="(gif, deskTopgifIndex) in desktopGifs" :key="deskTopgifIndex">
          <element-desktop-gif-displayer v-bind="gif" :assets-base-path="assetsBasePath" />
        </li>
      </ul>
      <element-iframe
        v-if="displayIframe"
        class="iframe"
        :src="iframe.src"
        :width="iframe.width"
        :height="iframe.height"
        :inner-width="innerWidth"
      />
    </div>
    <p class="section-project__description">
      {{ description }}
    </p>
    <ul class="section-project__context-urls">
      <li v-for="(contextUrl, indexUrl) in contextUrls" :key="indexUrl">
        <element-anchor :href="contextUrl.url">
          {{ contextUrl.title }}
        </element-anchor>
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  name: 'SectionArticleProject',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    contextUrls: {
      type: Array,
      required: true
    },
    smartphoneGifs: {
      type: Array,
      default: () => []
    },
    desktopGifs: {
      type: Array,
      default: () => []
    },
    iframe: {
      type: Object,
      default: () => {
        return {
          src: '',
          height: 0,
          width: 0
        }
      }
    },
    videos: {
      type: Array,
      default: () => []
    },
    assetsBasePath: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isVisible: false,
      scrolledBy: false,
      innerWidth: window.innerWidth
    }
  },
  computed: {
    displayIframe () {
      return this.iframe.src !== '' && this.scrolledBy
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible

      if (!this.scrolledBy) {
        this.scrolledBy = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.section-project {
  @include  grid-col-5;
  @include is-visible-opacity;
  grid-template-rows: 75px max-content max-content;
  border-top: 1px solid white;
  row-gap: 2rem;
  &__description, &__context-urls {
    padding-bottom: 5rem;
  }

  &__title {
    @include font-title;
    grid-area: 1 / 1 / 2 / 5;
    @media (max-width: $tablet) {
      grid-area: 1 / 1 / 2 / 4;
      display: flex;
      align-items: center;
    }
  }
  &__info {
    grid-area: 1 / 5 / 2 / 6;
    text-align: right;
    line-height: 75px;
    @media (max-width: $tablet) {
      line-height: 1.2;
      margin-top: 1rem;
      grid-area: 1 / 4 / 2 / 6;
    }
    @media (max-width: $phone) {
      text-align: left;
      margin-top: -1.5rem
    }
  }
  &__media{
    grid-area: 2 / 1 / 3 / 6;
    .smartphone, .desktop, .iframe {
      display: flex;
      margin: 0 auto 2rem 0;
      flex-wrap: wrap;
    }
    .smartphone {
      @media (max-width: $phone) {
        flex-direction: column;
      }
    }
  }
  &__description {
   grid-area: 3 / 1 / 4 / 4;
  @media (max-width: $phone) {
    padding-bottom: 0;
  }
  }
  &__context-urls {
    grid-area: 3 / 4 / 4 / 6;
    text-align: right;
    line-height: 2.2;
    @media (max-width: $phone) {
      text-align: left;
    }
  }
}
</style>
