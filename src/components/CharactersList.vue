<script>
import ProductCard from './ProductCard.vue'
    export default{
        name:'CharactersList',
        components:{
            ProductCard
        }
    }
</script>

<template>
    <ProductCard/>
    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>