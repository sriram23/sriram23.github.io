import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutation from './mutation'
import action from './action'

Vue.use(Vuex)

const store= new Vuex.Store({
    state,
    mutation,
    action
})

export default store