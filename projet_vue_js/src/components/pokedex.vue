<template>
  <div id="Pokedex">
        <div class="contenu">
          <p>POKEDEX</p>
          <div class="card" v-for="pokemon in pokemons" :key="pokemon.id">
              <router-link :to="{path:'pokemon/'+pokemon.id}">
                      <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.id+'.png'" alt="Pokemon" style="width:100%">
                      <div class="container">
                          <h4><b>N°{{pokemon.id}}</b></h4>
                          <p>{{pokemon.nom}}</p>
                      </div>
              </router-link>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Pokedex',
  data:function(){
    return {
      loading:true
    };
  },
  computed: {
    pokemons() {
      this.refresh();
      if(this.loading == true) return undefined;
      return this.$store.getters.getPokemons;
    },
  }, 
  methods: {
    refresh(){
      if(this.$store.getters.getPokemons.length < 806){
        setTimeout(this.refresh,1500);
      } else {
        this.loading = false;
      }
    }
  } 
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 18%;
  margin:1%;
  float:left;
}
.card:hover {
  -webkit-transform: scale(1.2);
	transform: scale(1.2);
}
.container {
  padding: 2px 16px;
  background-color: rgb(58, 58, 58);
  color:white;
}

.contenu{
  width: 70%;
  margin-left: 17%;
}

b{
  border-radius: 12px;
  text-align: left;
}
</style>