<template>
  <div>
    <div class="conteneur-pokemon">
      <p class="nom-pokemon"> {{ pokemon.nom }} N° {{ pokemon.id }}</p>
      <div class="image-pokemon">
       <img :src="pokemon.imagePokemon" alt="Pokemon" style="width:60%">
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
      <!-- Erreur lors de la récupération des stats pour certains pokemons. Permet de pouvoir afficher sans le diagramme-->
      <div class="stat-pokemon" v-if="typeof pokemon.stats !== 'undefined'"> 
        <StatPokemon style="display:inline;" v-if="typeof pokemon.stats !== undefined" v-bind:attack="pokemon.stats[4].base_stat" v-bind:defense="pokemon.stats[3].base_stat" v-bind:attack_spe="pokemon.stats[2].base_stat" v-bind:defense_spe="pokemon.stats[1].base_stat" v-bind:hp="pokemon.stats[5].base_stat" v-bind:vitesse="pokemon.stats[0].base_stat" />
      </div>
    </div>
  </div>
</template>
<script>

import TypePokemon from './TypePokemon.vue';
import StatPokemon from './StatPokemon.vue';

export default {
  name: 'Pokemon',
   computed: {
      //recupération des information sur le pokemon grace à l'id passe dans l'url
        pokemon() {
            return this.$store.getters.getPokemons[this.$route.params.id-1];
        }
    },
    components: {
      TypePokemon,
      StatPokemon
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
    margin-left: 50%;
    padding-bottom: 10px;

}

.image-pokemon{
  float:left;
}

.description{
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
    font-size: 112.5%;
    line-height: 150%;
    padding-left: 20%;
    padding-bottom: 5%;
    padding-right: 10%;

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
    padding-top: 10px;
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
  margin-left: 15%;
  padding-top:5%;
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
}

.evolution-pokemon{
  margin-left: 380px;
  font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
    padding-top:10px;
}

</style>
