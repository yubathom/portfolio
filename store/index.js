export const state = () => ({
  events: [],
  fetching: false,
  error: {}
})

export const getters = {
  eventsReady: (state) => {
    return state.events.length > 0
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
