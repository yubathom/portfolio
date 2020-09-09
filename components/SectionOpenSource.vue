<template>
  <section
    v-observe-visibility="{
      callback: visibilityChanged
    }"
    class="section-open-source"
    :class="{
      'section-open-source--is-visible': isVisible
    }"
  >
    <h2>Open source</h2>
    <p v-if="!eventsReady" class="section-open-source__preloader">
      <span>Loading...</span>
    </p>
    <template v-else>
      <article v-for="({ id, type, created_at, payload, repo }) in events" :key="id">
        <section-open-source-pull-requests
          v-if="validateByTypeEvent('pullRequests', type)"
          class="section-open-source__section"
          :type="type"
          :created-at-from-now="getCreatedAtFromNow(created_at)"
          :payload="payload"
          :repo="repo"
        />
        <section-open-source-issues
          v-if="validateByTypeEvent('issues', type)"
          class="section-open-source__section"
          :type="type"
          :created-at-from-now="getCreatedAtFromNow(created_at)"
          :payload="payload"
          :repo="repo"
        />
        <section-open-source-pushes
          v-if="validateByTypeEvent('pushes', type)"
          class="section-open-source__section"
          :type="type"
          :created-at-from-now="getCreatedAtFromNow(created_at)"
          :payload="payload"
          :repo="repo"
        />
      </article>
    </template>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'SectionOpenSource',
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    ...mapState(['events']),
    ...mapGetters(['eventsReady'])
  },
  methods: {
    ...mapActions(['getGithubUserEvents']),
    visibilityChanged (isVisible) {
      this.isVisible = isVisible
      if (isVisible && !this.eventsReady) {
        this.getGithubUserEvents(this.$yubathom.get)
      }
    },
    validateByTypeEvent (key, val) {
      const events = {
        issues: [
          'IssueCommentEvent',
          'IssuesEvent'
        ],
        pushes: ['PushEvent'],
        pullRequests: [
          'PullRequestEvent',
          'PullRequestReviewEvent',
          'PullRequestReviewCommentEvent'
        ]
      }
      return events[key].includes(val)
    },
    getCreatedAtFromNow (datetime) {
      return this.$moment(datetime).fromNow()
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source {
  @include is-visible-opacity;
  border-top: 1px solid white;
  margin-bottom: 3rem;
  &__preloader {
    min-height: 50vh;
    background: $grey-2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient($grey-1, $grey-2);
    span {
      background: transparent;
      animation: pulse 1s infinite;
      animation-direction: alternate;
      padding-bottom: 5rem;
    }
  }
  &__section {
    margin-bottom: 0.25rem;
  }
}

h2 {
  @include font-title;
}
</style>
