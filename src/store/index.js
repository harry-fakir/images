import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/image'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth,
        images: images,

    }
});