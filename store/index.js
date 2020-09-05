export const state = () => ({
  events: [],
  error: {}
})

export const getters = {
  eventsReady: state => state.events.length > 0
}

export const actions = {
  getGithubUserEvents: async ({ commit }, yubathom) => {
    try {
      const { data } = await yubathom('events')
      commit('SET', { data, key: 'events' })
    } catch (error) {
      commit('SET', { data: error, key: 'error' })
    }
  }
}
export const mutations = {
  SET: (state, { data, key }) => { state[key] = data }
}
