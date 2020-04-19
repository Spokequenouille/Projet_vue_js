<template>
  <div>
    <div class="conteneur-pokemon">
      <p class="nom-pokemon"> {{ pokemon.nom }} N° {{ pokemon.id }}</p>
      <div class="image-pokemon">
       <img :src="pokemon.imagePokemon" alt="Pokemon" style="width:40%">
      </div>
      <div class="description">
          <span> {{ pokemon.description }} </span>
      </div>
      <div class="statistique">
        <div class="column1">
          <span class="titre-attribut"> Taille </span>
          <span class="valeur-attribut"> {{ pokemon.taille / 10 }} m </span>
          <span class="titre-attribut"> Poids test </span>
          <span class="valeur-attribut" > {{ pokemon.poids / 10 }} kg </span>
        </div>
        <div class="column2">
          <span class="titre-attribut"> Catégorie </span>
          <span class="valeur-attribut"> {{ pokemon.categorie }} </span>
          <span class="titre-attribut"> Talent </span>
          <span class="valeur-attribut"> {{ pokemon.talent }} </span>
        </div>
      </div>
      <div class="type-pokemon">
        <span style="display:inline"> Type :  </span>
        <TypePokemon style="display:inline;"  v-bind:type_un="pokemon.type1" v-bind:type_deux="pokemon.type2"/>
      </div>
      <div class="evolution-pokemon">
        <span> Evolution : {{ pokemon.evolution_url.url }} </span>
        
      </div>
    </div>
  </div>
</template>
<script>

import TypePokemon from './TypePokemon.vue';

export default {
  name: 'Pokemon',
   computed: {
        pokemon() {
            console.log(this.$store.getters.getPokemons);
            return this.$store.getters.getPokemons[this.$route.params.id-1];
        }
    },
    components: {
      TypePokemon
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


.statistique {
    background-color: #30a7d7;
    border-radius: 10px;
    width: 30%;
    margin-left: 35%;

}

.description{
  margin-top: 5%;
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
    font-size: 112.5%;
    line-height: 150%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;

}

.conteneur-pokemon{
  background-color:darkgray;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:15px;
  height: 80%;
  width: 50%;
  margin-left:25%;
  float:left;
}

.titre-attribut {
  font-family: "Flexo-Medium",arial,sans-serif;
    clear: both;
    color: #fff;
    font-size: 100%;
    text-transform: none;
    white-space: normal;
    word-break: break-word;
    display: block;
}

.valeur-attribut {
  font-family: "Flexo-Medium",arial,sans-serif;
    clear: both;
    color: #212121;
    white-space: normal;
    word-break: break-word;
}

.column1 {
  float: left;
  margin-left: 10%;
}

.column2 {
  display: inline-block;
}

.nom-pokemon {
    font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
    float: left;
    font-size: 225%;
    margin-top: 0.5em;
    text-align: center;
    width: 100%;
    word-break: break-word;
}

.type-pokemon{
  padding-top:10px;
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
}

.evolution-pokemon{
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
    padding-top:10px;
}

</style>
