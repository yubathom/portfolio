export const state = () => ({
  events: [],
  fetching: false,
  error: {}
})

export const getters = {
  eventsReady: (state) => {
    return state.events.length > 0
  },
  pullRequests: (state) => {
    if (state.events.length === 0) { return [] }
    const validEvents = [
      'PullRequestEvent',
      'PullRequestReviewEvent',
      'PullRequestReviewCommentEvent'
    ]
    return state.events.filter(({ type }) => validEvents.includes(type))
  },
  pushes: (state) => {
    if (state.events.length === 0) { return [] }
    return state.events.filter(({ type }) => type === 'PushEvent')
  },
  issues: (state) => {
    if (state.events.length === 0) { return [] }
    const validEvents = [
      'IssueCommentEvent',
      'IssuesEvent'
    ]
    return state.events.filter(({ type }) => validEvents.includes(type))
  }
}

export const actions = {
  getGithubUserEvents: async ({ commit }, yubathom) => {
    commit('SET', { data: true, key: 'fetching' })
    try {
      const { data } = await yubathom('events')
      commit('SET', { data, key: 'events' })
    } catch (error) {
      commit('SET', { data: error, key: 'error' })
    } finally {
      commit('SET', { data: false, key: 'fetching' })
    }
  }
}
export const mutations = {
  SET: (state, { data, key }) => { state[key] = data }
}
