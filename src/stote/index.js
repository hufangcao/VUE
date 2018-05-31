import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state/state'
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
