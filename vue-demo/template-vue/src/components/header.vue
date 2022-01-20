<template>
    <div>

        <el-container>
            <el-header>Header
                <button @click="handle">点击</button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/register">注册</router-link>
                    <router-link to="/denglu">返回登录页</router-link>
                </el-aside>
                <el-main>Main

                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  methods: {
    handle() {
      console.log(this.$local.save);
    }
  }
};
</script>

<style lang="less" scoped>
body,
html {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

