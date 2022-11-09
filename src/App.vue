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
  overflow: hidden;
  color: black;
  font-weight: 100;
  font-style: normal;
  max-height: 100vh;
  min-height: 100vh;
  list-style-type: none;
  padding: 20px 0 0 0;
  background-color: #f7f7f7;
}
</style>
