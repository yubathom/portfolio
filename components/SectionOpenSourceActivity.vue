<template>
  <section
    v-observe-visibility="{
      callback: visibilityChanged
    }"
    class="section-open-source-activity"
  >
    <h2>Open source contributions</h2>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SectionOpenSourceActivity',
  computed: {
    ...mapGetters(['eventsReady', 'pullRequests', 'pushes', 'issues'])
  },
  methods: {
    ...mapActions(['getGithubUserEvents']),
    visibilityChanged (isVisible) {
      if (isVisible && !this.eventsReady) {
        this.getGithubUserEvents(this.$yubathom.get)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source-activity {
  border-top: 1px solid white;
}
h2 {
  @include font-title;
}
</style>
