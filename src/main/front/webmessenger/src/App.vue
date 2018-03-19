<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.title = 'Messenger'

export default {
  name: 'Messenger'
}
</script>

<style>
@font-face {
  font-family: 'Roboto Regular';
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto Bold';
  src: url('./assets/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Open-Sans Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
