import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: function (state) {
        return !!state.token // !! turns a value (represented as string) into a boolean
    }
};

const actions = {
    login: function () { api.login(); },




    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token',
            query.access_token);
        router.push('/');


    },

    logout: function ({ commit }) {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token')
    },
};

const mutations = {
    setToken: function (state, token) {
        state.token = token;
    }

};

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}