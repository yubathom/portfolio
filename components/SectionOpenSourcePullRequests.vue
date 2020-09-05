<template>
  <div class="section-open-source-pull-requests">
    <section-open-source-item-header :created-at-from-now="createdAtFromNow">
      <template v-slot:icon>
        <icon-pull-request />
      </template>
    </section-open-source-item-header>
    <h5 class="section-open-source-pull-requests__title">
      {{ action }} {{ description }} to <element-anchor :href="payload.pull_request.html_url">
        {{ repo.name }}
      </element-anchor>
    </h5>
  </div>
</template>
<script>
export default {
  name: 'SectionOpenSourcePullRequests',
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
    description () {
      const templates = {
        PullRequestEvent: 'a pull request',
        PullRequestReviewEvent: 'a pull request review',
        PullRequestReviewCommentEvent: 'a pull request comment'
      }
      return templates[this.type]
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source-pull-requests {
  &__title {
    font-size: small;
    border-left: solid 1px white;
    margin-left: 11px;
    padding-left: 1rem;
  }
}
</style>
