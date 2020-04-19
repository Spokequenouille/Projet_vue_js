<template>
  <div>    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetPokemon',
  created() { //appel de la fonction getAll a la creation du component
    this.getAll();
  },
  methods: { //methodes pour récupérer les données stockées dans l'api de pokeapi
      getAll() {  
            let nb_pokemon = 807;
            let pokemonList = [];
            for(let idx =1; idx <= nb_pokemon; idx++){ 
              axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idx}/`) //Récupération de l'id, catégorie, évolution, nom, description de tous les pokémons dans une liste grâce à un appel
              .then(response=>{                                              // API de pokemon-species
                pokemonList[response.data.id-1]={
                    id:response.data.id,
                    categorie:response.data.genera[6].genus,
                    nom:response.data.names[6].name,
                    description:response.data.flavor_text_entries[5].flavor_text
                };
              }).catch(error => console.log(error) )
              axios.get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)      //Récupération des images, de la taille, du poids, du talent et du type de tous les pokémons dans une liste grâce à un appel
                .then(response=>{                                         // API de pokemon
                    pokemonList[response.data.id-1].imagePokedex = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`,
                    pokemonList[response.data.id-1].imagePokemon = `https://eternia.fr/public/media/pokedex/artworks/${('00' + idx).slice(-3)}.png`,
                    pokemonList[response.data.id-1].taille = response.data.height;
                    pokemonList[response.data.id-1].poids = response.data.weight;
                    pokemonList[response.data.id-1].talent = response.data.abilities[0].ability.name;
                    pokemonList[response.data.id-1].type1 = response.data.types[0].type.name ;
                    pokemonList[response.data.id-1].type2 = response.data.types[1].type.name ;
                    pokemonList[response.data.id-1].stats = response.data.stats;
                    })
                .catch(error => console.log(error) )
            }
            this.$store.commit('setPokemons', pokemonList);
          }
  }
}
 
</script>

<style scoped>
</style>
