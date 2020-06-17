<template>
  <div id="app">
<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <el-button>hello</el-button>-->
<!--      <el-main>Main</el-main>-->
<!--    </el-container>-->
    <router-link to="/test">mytest</router-link>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
