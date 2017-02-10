import {
  CHANGE_KEYWORD,
  SEARCH,
  ADD_FAVS
} from './mutation-types'

/**
 * State
 */
const state = {
  keyword: '',
  events: [],
  favs: []
}

/**
 * Getters
 */
const getters = {
  events: state => state.events
}

/**
 * Actions
 */
const actions = {
  searchEvents({ commit, state }, keyword) {
    commit(CHANGE_KEYWORD, keyword)

    _methods.getEvents(state.keyword)
      .then(data => {
        commit(SEARCH, data)
      }).catch()
  }
}

const _methods = {
  getEvents(query) {
    const params = encodeURIComponent(query).replace(/%20/g, '+')

    let target = document.createElement('script')
    target.id = 'eventJson'
    target.charset = 'utf-8'
    target.src = `https://connpass.com/api/v1/event/?keyword_or=${params}&callback=getJsonData`

    const eventJsonElm = document.querySelector('#eventJson')
    if (eventJsonElm) eventJsonElm.parentNode.removeChild(eventJsonElm);
    document.body.appendChild(target);

    return new Promise((resolve, reject) => {
      window.getJsonData = res => {
        if (res) {
          resolve(res);
        } else {
          reject();
        }
      }
    });
  }
}

/**
 * Mutations
 */
const mutations = {
  [CHANGE_KEYWORD](state, keyword) {
    state.keyword = keyword
  },
  [SEARCH](state, data) {
    state.events = data.events
  },
  [ADD_FAVS](state, data) {
    state.favs = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
