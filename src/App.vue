<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 20px;
  overflow: hidden;
  background: linear-gradient(18deg, #7d74da, #53a0fd 100%);
  color: white;
  font-weight: 100;
  font-style: normal;
  max-height: 100vh;
  min-height: 100vh;
}
</style>
