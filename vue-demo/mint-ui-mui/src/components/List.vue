<template>
    <div id="list">
        <button @click="getData">数据</button>
        <ul>
            <li v-for="(item,index) in items" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods:{
            getData(){

            }
        }
    }

</script>

<style scoped>

</style>

