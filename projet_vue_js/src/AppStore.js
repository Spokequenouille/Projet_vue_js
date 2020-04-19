import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
    },
    getters: {
        getPokemons: state => {
            return state.pokemons
        },
    },
    mutations: {
        setPokemons(state, payload) {
            if(payload) {
                state.pokemons = payload;
            }
        },
    }
})