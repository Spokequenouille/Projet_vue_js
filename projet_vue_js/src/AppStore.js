import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
    },
    getters: {
        getPokemons: state => state.pokemons,
    },
    mutations: {
        setPokemons(state, payload) {
            if(payload) {
                state.pokemons = payload;
            }
        }
    },
    actions: {
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
              })
              axios.get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
                .then(response=>{
                    pokemonList[response.data.id-1].image = `https://pokeres.bastionbot.org/images/pokemon/${idx}.png`;
                    pokemonList[response.data.id-1].taille = response.data.height;
                    pokemonList[response.data.id-1].poids = response.data.weight;
                    pokemonList[response.data.id-1].talent = response.data.abilities;
                    pokemonList[response.data.id-1].type = response.data.types;

                        /*image:response.data.sprites.font_default,
                        taille:response.data.height,
                        poids:response.data.weight,
                        talent:response.data.abilities,
                        type:response.data.types,
                    });*/
                })
                .catch(error => console.log(error) )

            }
            console.log(pokemonList)
          }
    }
})

/*actions: {
    //cats
    getCatsList(context) {
      //loading...
      context.commit("SET_CATS_LIST_STATUS_PENDING", true);
      context.commit("SET_CATS_LIST", []);

      axios
        .get("https://localhost:3000/cats-list")
        //success
        .then(({ data }) => {
          context.commit("SET_CATS_LIST", data);
          context.commit("SET_CATS_LIST_STATUS_SUCCESS", true);
          context.commit("SET_CATS_LIST_STATUS_FAIL", false);
        })
        //fail
        .catch(e => {
          context.commit("SET_CATS_LIST", null);
          context.commit("SET_CATS_LIST_STATUS_SUCCESS", false);
          context.commit("SET_CATS_LIST_STATUS_FAIL", true);
        })
        //finally
        .finally(() => {
          context.commit("SET_CATS_LIST_STATUS_PENDING", false);
        });
    },
  }*/