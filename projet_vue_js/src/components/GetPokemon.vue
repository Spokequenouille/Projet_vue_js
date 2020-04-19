<template>
  <div class="hello">    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetPokemon',
  created() {
    this.getAll();
  },
  methods: {
      getAll() {  
            let nb_pokemon = 807;
            let pokemonList = [];
            for(let idx =1; idx <= nb_pokemon; idx++){ 
              axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idx}/`)
              .then(response=>{
                pokemonList[response.data.id-1]={
                    id:response.data.id,
                    categorie:response.data.genera[6].genus,
                    evolution_url:response.data.evolution_chain,
                    nom:response.data.names[6].name,
                    description:response.data.flavor_text_entries[5].flavor_text //trouver comment recup que du francais
                };
              }).catch(error => console.log(error) )
              axios.get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
                .then(response=>{
                    pokemonList[response.data.id-1].imagePokedex = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`,
                    pokemonList[response.data.id-1].imagePokemon = `https://eternia.fr/public/media/pokedex/artworks/${('00' + idx).slice(-3)}.png`,
                    pokemonList[response.data.id-1].taille = response.data.height;
                    pokemonList[response.data.id-1].poids = response.data.weight;
                    pokemonList[response.data.id-1].talent = response.data.abilities[0].ability.name;
                    pokemonList[response.data.id-1].type1 = response.data.types[0].type.name ;
                    pokemonList[response.data.id-1].type2 = response.data.types[1].type.name ;
                })
                .catch(error => console.log(error) )

            }
            this.$store.commit('setPokemons', pokemonList);
          }
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
