<script>
    export default{
        name:'ProductCard',
        props:{
            info: Object
        }
    }
</script>

<template>
    <!-- card -->
    <div>
        <img :src="info.card_images[0].image_url" alt="img">
        <h3>{{ info.name }}</h3>
        <span>{{ info.archetype }}</span>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div{
        width: 162.1px;
        background-color: rgb(203, 132, 45);
        text-align: center;
        height: 380px;
    }

    img{
        width: 100%;
    }

    h3{
        color: white;
        margin-bottom: 30px;
    }
</style>