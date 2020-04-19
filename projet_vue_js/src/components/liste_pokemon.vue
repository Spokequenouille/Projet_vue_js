<template>

  <div id="app">
      {{pokemons}}
  </div>
</template>
<script>

export default {
  name: 'ListePokemon',

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
