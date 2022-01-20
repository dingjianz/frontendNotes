<template>
    <div>
        <h3>这是app组件</h3>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">GoodList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

</style>
