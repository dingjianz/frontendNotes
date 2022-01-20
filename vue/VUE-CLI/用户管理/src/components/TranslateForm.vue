<template>
  <div class="row" id="transForm">
    <div class=" col-md-6  col-md-offset-3">
      <form  @submit="formSubmit" class="well  form-inline">
        <input type="text" placeholder="输入需要翻译的内容" v-model="text" class="form-control">
        <select v-model="languageType" name="translate" class="form-control">
          <option value="en" selected>English</option>
          <option value="ja">Janpenese</option>
          <option value="ko">Korean</option>
          <option value="ru">Russian</option>
        </select>
        <input type="submit" value="翻译" class="btn  btn-primary">
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "translateForm",
  data() {
    return {
      text: "",
      languageType: ""
    };
  },
  created() {
    this.languageType = "en";
  },
  methods: {
    formSubmit(e) {
      this.$emit("fn", this.text, this.languageType);
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
form {
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
