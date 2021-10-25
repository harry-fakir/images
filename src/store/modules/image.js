import api from '../../api/imgur'

const state = {

    images: []

};

const getters = {
    allImages: function (state) {
        state.images
    }
};


const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },

    async uploadImages({ commit }, images) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        return Promise.all(promises);
    },

};

const mutations = {
    setImages: function (state, images) {
        state.images = images;

    }

};

export default {
    state,
    getters,
    actions,
    mutations
}