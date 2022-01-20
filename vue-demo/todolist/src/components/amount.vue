<template>
    <div class="amount">
        <h3>总共数量为：{{$store.getters.optCount}} <h2>{{num}}</h2></h3>
    
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
    export default {
        computed:{
            ...mapState(["num"])
        },
        methods:{
            ...mapActions(["getListAction"])
        },
        created(){
            this.getListAction()
        }
    }
</script>


<style lang="less" scoped>

</style>
