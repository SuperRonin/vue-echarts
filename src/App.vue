<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Tabar></Tabar>
  </div>
</template>

<script>
import Tabar from './components/tabar'
export default {
  name: 'App',
  components: { Tabar }
}
</script>

<style>
  @import "./assets/reset";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
