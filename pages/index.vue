<template>
  <div class="container">
    <h2>{{ description }}</h2>
    <h3>{{ about }}</h3>
    <article>
      {{ projects }}
    </article>
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
