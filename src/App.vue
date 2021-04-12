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
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Proxima+Nova:300,400,500,600,700,800,900');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: 1;
}
body{
  margin: 0;
}
html{
  scroll-behavior: smooth;
}
</style>
