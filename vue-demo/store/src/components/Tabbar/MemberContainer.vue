<template>
    <div class="member">
        <h3>member</h3>
        <p>{{new Date() | dateFormat("YYYY-MM-DD")}}</p>
    </div>
</template>

<script>
import {dateFormat} from "../../filters/dateFormat"
    export default {

    }
</script>

<style lang="less" scoped>

</style>
