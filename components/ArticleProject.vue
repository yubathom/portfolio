<template>
  <article class="project">
    <h3 class="project__title">
      {{ title }}
    </h3>
    <div class="project__info">
      <p>{{ tags }} | {{ year }} </p>
    </div>
    <div class="project__media">
      <element-gif-displayer />
    </div>
    <p class="project__description">
      {{ description }}
    </p>
    <ul class="project__context-urls">
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
  name: 'ArticleProject',
  props: {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
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
    gifs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.project {
  @include  grid-col-5;
  grid-template-rows: 75px max-content max-content;
  border-top: 1px solid white;
  &__title, &__info {
    line-height: 75px;
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
  }
  &__description {
   grid-area: 3 / 1 / 4 / 4;
  }
  &__context-urls {
    grid-area: 3 / 4 / 4 / 6;
    text-align: right;
    line-height: 2.2;
  }
}
</style>
