import api from '../../api/imgur';
import { router } from '../../main';

const state = {

    images: []

};

const getters = {
    allImages: function (state) {
        return state.images;
    }
};


const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },

    async uploadImages({ rootState }, images) {
        // Get the access token
        const { token } = rootState.auth;

        // Call our API module to do the upload
        await api.uploadImages(images, token);

        // Redirect our user to ImageList component
        router.push('/');
    },

};

const mutations = {
    setImages: function (state, images) {
        state.images = images;
        console.log(images);

    }

};

export default {
    state,
    getters,
    actions,
    mutations
}