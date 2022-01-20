<template>
  <div class="footer">
        <h2>{{text}}---{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ["title"],
  data () {
    return {
      text:'CopyRight 2018 Vue Demo'
    }
  }
  
}
</script>

<style scoped >
  .footer{
     padding: 6px;
      background-color: #222;
  }
  .footer h2{
      color:lightgreen;
      text-align: center;
  }
</style>
