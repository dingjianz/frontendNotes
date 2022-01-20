<template>
  <div class="users">
    <ul>
      <li v-for="user in some" :key="user">
        <h4>{{user.name}}</h4>
        <p>{{user.email}}</p>
      </li>
    </ul>
    <!-- Standard button -->
<button type="button" class="btn btn-default">（默认样式）Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">（首选项）Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">（成功）Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">（一般信息）Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">（警告）Warning</button>
  </div>
</template>

<script>
export default {
  name: "Users",
  // props: ["some"],
  props:{
    some:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
     
    };
  }
};
</script>

<style scoped >
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  text-align: center;
  border: 1px solid #000;
  padding: 30px;
  margin: 10px;
  flex-basis: 200px;
  flex-grow: 1;
}
</style>
