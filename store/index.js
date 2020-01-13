import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)


export const state = () => ({
    counter: 0,
    articles: []
})
export const actions = {
    GET_ARTICLES({ commit }) {
        axios
            .get('http://localhost:1337/articles')
            .then((r) => r.data)
            .then((articles) => {
                commit('SET_ARTICLES', articles)
            })
    }
}

export const mutations = {
    SET_ARTICLES(state, articles) {
        state.articles = articles
    }
}