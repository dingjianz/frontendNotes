<template>
    <div class="counter">
        <input type="button" value="增加" @click="add">
        <input type="button" value="减少" @click="decrease"><br>
        <input type="text" :value="$store.state.count">
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$store.commit('increment')
            },
          decrease(){
                this.$store.commit('decrease',3)
          }
        }
    }
</script>


<style lang="less" scoped>

</style>
