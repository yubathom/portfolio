<template>
  <div class="section-open-source-issues">
    <section-open-source-item-header :created-at-from-now="createdAtFromNow">
      <template v-slot:icon>
        <icon-issue />
      </template>
    </section-open-source-item-header>
    <h5 class="section-open-source-issues__title">
      {{ action }} an issue on <element-anchor :href="url">
        {{ urlText }}
      </element-anchor>
    </h5>
  </div>
</template>
<script>
export default {
  name: 'SectionOpenSourceIssues',
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
    action () {
      const { action } = this.payload
      const firstLetter = action.charAt(0).toUpperCase()
      const otherLetters = action.substr(1)
      return `${firstLetter}${otherLetters}`
    },
    urlText () {
      const { issue } = this.payload
      return issue.html_url.replace('https://github.com/', '')
    },
    url () {
      return this.payload.issue.html_url
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source-issues {
  &__title {
    font-size: small;
    border-left: solid 1px white;
    margin-left: 11px;
    padding-left: 1rem;
  }
}
</style>
