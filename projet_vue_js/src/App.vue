<template>

  <div id="app">
        <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/pokedex'>Pokedex</router-link>
        <router-link to='/pokemon/1'>Pokemon</router-link>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getAll')
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
