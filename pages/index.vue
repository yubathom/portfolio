<template>
  <div class="index">
    <section class="main-description">
      <h2>{{ description }}</h2>
      <h3>{{ about }}</h3>
    </section>
    <section class="projects">
      <section-projects
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
        :assets-base-path="$assetsBasePath"
      />
    </section>
    <section-open-source />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ $content }) {
    const { description, about, projects } = await $content('home').fetch()

    return {
      description, about, projects
    }
  }
}
</script>
<style lang="scss" scoped>
.main-description {
  @include grid-col-4;
  min-height: calc(100vh - 4rem);
  h2, h3 {
    display: flex;
    align-items: center;
  }
  h2 {
    @include font-hero;
    grid-area: 1 / 1 / 2 / 4;
  }
  h3 {
     grid-area: 1 / 4 / 2 / 6;
  }
}
</style>
