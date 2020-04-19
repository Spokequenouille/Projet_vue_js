<template>

  <div id="app">
    <Navbar/>
    <GetPokemon/>
    <router-view/>
  </div>
</template>
<script>

import Navbar from './components/Navbar'
import GetPokemon from './components/GetPokemon'
export default {
  name: 'App',
  components: {
    Navbar,
    GetPokemon
  }
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
