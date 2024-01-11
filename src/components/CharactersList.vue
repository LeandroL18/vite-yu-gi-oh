<script>
import {store} from '../store'
import ProductCard from './ProductCard.vue'

export default{
    name:'CharactersList',
    components:{
        ProductCard
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
        <select name="" id="">
            <option value="">Alien</option>
        </select>
        <div id="bg_white">
            <div id="bg_black">Found 20 cards</div>
            <div id="container_cards">
                <div v-for="(character,i) in store.charactersList" :key="i">
                    <ProductCard :info="character"/>
                </div>
            </div>
        </div>
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
        display: flex;
        flex-wrap: wrap;
        gap: 9.1px;
    }
</style>