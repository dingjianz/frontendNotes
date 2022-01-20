<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 灵活</h5>
    <translateForm @fn="tans"></translateForm>
    <translateOut  v-text="translatedText"></translateOut>
  </div>
</template>

<script>
import TranslateForm from "./components/TranslateForm";
import TranslateOut from "./components/TranslateOut";
export default {
  name: "App",
  data() {
    return {
      translatedText:''
    };
  },
  
  methods: {
    tans(text,languageType) {
      this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180713T122920Z.ad2677fd11102ad9.0f005a8fb3f125eba3483ac0fa56e508d57f5ce4&lang="+languageType+"&text="+text).then((res)=>{
          this.translatedText=res.body.text[0];
      },(err)=>{
        throw err;
      });
    }
  },
  components: {
    TranslateForm,
    TranslateOut
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
