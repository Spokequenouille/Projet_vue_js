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
        <div style="float:left; margin-left:20%">
          <span class="titre-attribut"> Taille </span>
          <br/>
          <span class="valeur-attribut"> {{ pokemon.taille }} m </span>
          <br/>
          <span class="titre-attribut"> Poids </span>
          <br/>
          <span class="valeur-attribut" > {{ pokemon.poids }} </span>
        </div>
        <div>
          <span class="titre-attribut"> Catégorie </span>
          <br/>
          <span class="valeur-attribut"> {{ pokemon.categorie }} </span>
          <br/>
          <span class="titre-attribut"> Talent </span>
          <br/>
          <span class="valeur-attribut"> oui </span>
        </div>

      </div>
      <div class="type-pokemon">
        <span> Type :  </span>
        <TypePokemon v-bind:type_un="pokemon.type1" v-bind:type_deux="pokemon.type2"/>
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
}

.valeur-attribut {
  font-family: "Flexo-Medium",arial,sans-serif;
    clear: both;
    color: #212121;
    white-space: normal;
    word-break: break-word;
}

.column {
    float: left;
    margin-top: 1%;
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
