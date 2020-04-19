import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokemon from './components/pokemon.vue';
import Pokedex from './components/pokedex.vue';
import Home from './components/home.vue';

Vue.use(VueRouter)

let router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            component:Home
        },
        {
            path:'/pokedex',
            component:Pokedex
        },
        {
            path:'/pokemon/:id',
            component:Pokemon
        },
    ]
})

export default router
