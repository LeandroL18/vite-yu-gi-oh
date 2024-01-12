<script>
import {store} from '../store'

import CharactersList from './CharactersList.vue';

export default{
    name:'AppSearch',
    components:{
        CharactersList
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div id="container_generale">
        <select v-model="store.searchArchetype" @change="$emit('filtro')" >
            <option value="" disabled selected>Scegli l'archetipo</option>
            <option v-for="(archetype,i) in store.archetypeArray" :key="i" :value="archetype.archetype_name">
                {{ archetype.archetype_name }}
            </option>
        </select>

        <CharactersList/>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    #container_generale{
        width: 100%;
        background-color: rgb(203, 132, 45);
        padding-bottom: 50px;
    }

    select{
        padding: 5px;
        border-radius: 5px;
        margin: 20px 0 20px 100px;
    }
</style>