<template>
  <article
    :id="id"
    class="section-article-project"
    :class="{ 'section-article-project--is-visible': isVisible }"
  >
    <h3 class="section-article-project__title">
      {{ title }}
    </h3>
    <div class="section-article-project__info">
      <p>{{ tags }} | {{ year }} </p>
    </div>
    <div
      v-observe-visibility="{
        callback: visibilityChanged
      }"
      class="section-article-project__media"
    >
      <ul v-if="smartphoneGifs.length" class="smartphone">
        <li v-for="(gif, gifIndex) in smartphoneGifs" :key="gifIndex">
          <element-phone-gif-displayer v-bind="gif" />
        </li>
      </ul>
      <ul v-if="desktopGifs.length" class="desktop">
        <li v-for="(gif, deskTopgifIndex) in desktopGifs" :key="deskTopgifIndex">
          <element-desktop-gif-displayer v-bind="gif" />
        </li>
      </ul>
      <iframe
        v-if="haveIframe"
        class="iframe"
        :src="iframe.src"
        frameborder="0"
        :width="iframe.width"
        :height="iframe.height"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
    <p class="section-article-project__description">
      {{ description }}
    </p>
    <ul class="section-article-project__context-urls">
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
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    haveIframe () {
      return this.iframe.src !== ''
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.section-article-project {
  @include  grid-col-5;
  grid-template-rows: 75px max-content max-content;
  border-top: 1px solid white;
  row-gap: 2rem;
  opacity: 0.1;
  transition: ease-in-out 1s opacity;
  &__title, &__info {
    line-height: 75px;
  }

  &__description, &__context-urls {
    padding-bottom: 5rem;
  }

  &__title {
    @include font-title;
    grid-area: 1 / 1 / 2 / 5;
  }
  &__info {
    grid-area: 1 / 5 / 2 / 6;
    text-align: right;
  }
  &__media{
    grid-area: 2 / 1 / 3 / 6;
    .smartphone, .desktop, .iframe {
      display: flex;
      margin: 0 auto 2rem 0;
    }
  }
  &__description {
   grid-area: 3 / 1 / 4 / 4;
  }
  &__context-urls {
    grid-area: 3 / 4 / 4 / 6;
    text-align: right;
    line-height: 2.2;
  }
  &--is-visible {
    opacity: 1;
  }
}
</style>
