<template>
  <main class="index">
    <section class="main-description">
      <h2>{{ description }}</h2>
      <h3>{{ about }}</h3>
    </section>
    <section class="projects">
      <section-project
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
        :assets-base-path="$assetsBasePath"
      />
    </section>
    <section-open-source />
  </main>
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
    @media (max-width: $phone) {
      margin-top: 1.2rem
    }
  }
  @media (max-width: $phone) {
    justify-content: center;
    align-items: center;
  }
}
</style>
