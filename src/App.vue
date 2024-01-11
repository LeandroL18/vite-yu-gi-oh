<script>
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'


export default{
  components:{
    AppHeader,
    CharactersList,
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
