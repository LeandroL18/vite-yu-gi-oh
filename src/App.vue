<script>
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import CharactersList from './components/CharactersList.vue'

import {store} from './store'

export default{
  components:{
    AppHeader,
    AppSearch,
    CharactersList,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    // metodo di chiamata
    getCharacters(){

      // per accorciare la chiamata
      // axios.get(`${store.apiUrl}?num=${store.num}&offset=${store.offset}`)

      // condizione di selezione
      if(store.searchArchetype){
        store.apiURL += `&archetype=${store.searchArchetype}`
      }

      axios.get(store.apiURL)

      .then((res) => {
        console.log(res.data.data);
        // salvo l'array in charactersList
        store.charactersList = res.data.data;
      })

      .catch((err)=>{
        console.log("Errori = ",err);
      })
    },

    // metodo di chiamata archetipi
    getArchetypes(){
      axios.get(store.archetypeURL)

      .then((res) => {
        store.archetypeArray = res.data;
      })

      .catch((error) => {
        console.log("Error = ", error);
      })
    }
  },

  created(){
    // chiamata all'apertura dell'app
    this.getCharacters();
    this.getArchetypes();
  }
}
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <AppSearch @filtro="getCharacters"/>
  </main>

</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>
