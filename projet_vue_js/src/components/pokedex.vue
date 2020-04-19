<template>

  <div id="app">

      CHEPLU
      {{typeof pokemons}}
      <li v-for="poke in pokemons" :key="poke.id">
        {{ poke.id }}
        <img :src="poke.image">
        {{poke.types}}
      </li>
  </div>
</template>
<script>

//import ListePokemon from './liste_pokemon.vue';

export default {
  name: 'Pokedex',
 data () {
    return {
    }
  },
  components:{
    //ListePokemon
  },
  computed: {
    pokemons() {
      return this.$store.getters.getPokemons;
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
