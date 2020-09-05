<template>
  <div class="section-open-source-pushes">
    <section-open-source-item-header :created-at-from-now="createdAtFromNow">
      <template v-slot:icon>
        <icon-push />
      </template>
    </section-open-source-item-header>
    <div class="section-open-source-pushes__content">
      <h5>
        Pushed to {{ branch }} at <element-anchor :href="url">
          {{ repo.name }}
        </element-anchor>
      </h5>
      <ul class="section-open-source-pushes__commits">
        <li v-for="({ sha, message }) in payload.commits" :key="sha">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionOpenSourcePushes',
  props: {
    type: {
      type: String,
      required: true
    },
    createdAtFromNow: {
      type: String,
      required: true
    },
    payload: {
      type: Object,
      required: true
    },
    repo: {
      type: Object,
      required: true
    }
  },
  computed: {
    branch () {
      const { ref } = this.payload
      return ref.replace('refs/heads/', '')
    },
    url () {
      return `https://github.com/${this.repo.name}`
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source-pushes {
  &__content {
    font-size: small;
    border-left: solid 1px white;
    margin-left: 11px;
    padding-left: 1rem;
  }
  &__commits {
    margin-top: 0.25rem;
    font-size: small;
  }
}
</style>
