<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import {store} from './store'

export default{
  components:{
    AppHeader,
    CharactersList,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCharacters(){
      axios.get(store.apiURL)
      .then((res => {
        console.log(res.data.data);
      }))
      .catch((err)=>{
        console.log("Errori = ",err);
      })
    }
  },
  created(){
    this.getCharacters();
  }
}
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <CharactersList/>
  </main>

</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>
