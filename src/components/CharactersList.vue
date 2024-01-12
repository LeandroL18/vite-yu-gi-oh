<script>
import {store} from '../store'
import ProductCard from './ProductCard.vue'

export default{
    name:'CharactersList',
    components:{
        ProductCard,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
        <div id="bg_white">
            <div id="bg_black">Found cards</div>
            <div id="container_cards">
                <!-- visualizzazione cards -->
                <div v-for="(character,i) in store.charactersList" :key="i">
                    <ProductCard :info="character"/>
                </div>
            </div>
        </div>    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;


    #bg_white{
        background-color: white;
        width: 85%;
        margin: 0 auto;
        padding: 35px;
    }

    #bg_black{
        background-color: black;
        color: white;
        padding: 15px;
    }

    #container_cards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 9.1px;
    }
</style>