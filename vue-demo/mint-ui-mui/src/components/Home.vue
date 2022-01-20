<template>
    <div id="home">
        <button @click="getData">获取数据</button>
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
                //发送请求
                this.$axios.get("../axios.php").then(res=>{
                    console.log(res);
                    
                })
            }
        }
    }

</script>

<style scoped>

</style>

