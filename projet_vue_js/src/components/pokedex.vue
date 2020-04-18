<template>

  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <li v-for="pokemon in info" :key="pokemon.name">
        {{ pokemon.name }}
    </li> 
    <button v-on:click="changeURL(previous)">Previous</button>
    <button v-on:click="changeURL(next)">Next</button>

  {{url_api}}

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Pokedex',
 data () {
    return {
      previous: null,
      next: null,
      info: null,
      url_api : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
      count: 0
    }
  },mounted () {
    axios
      .get(this.url_api)
      .then(response => {
        (this.info = response.data.results),
        (this.previous = response.data.previous),
        (this.next = response.data.next)
      }
    )
  }, 
   methods: {
    changeURL: function (url) {
      this.url_api = url
    }
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
