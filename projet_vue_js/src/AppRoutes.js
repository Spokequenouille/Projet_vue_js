import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokemon from './components/pokemon.vue';
import Pokedex from './components/pokedex.vue';

Vue.use(VueRouter)

let router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            component:Pokedex
        },
        {
            path:'/pokemon',
            component:Pokemon
        },
    ]
})

export default router
