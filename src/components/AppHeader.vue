<script>
    export default{
        name:'AppHeader'
    }
</script>

<template>
    <div>
        <img src="../assets/yugioh-logo-yu-gi-oh-11562857421zchdpnt0xu.png" alt="logo">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div{
        display: flex;
        padding: 15px;
    }

    img{
        width: 10%;
        margin-right: 20px;
    }
</style>