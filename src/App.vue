<template>
  <div id="app">
    <header-view></header-view>
    <content-view></content-view>
  </div>
</template>

<script>
  import HeaderView from './layout/Header.vue'
  import ContentView from './layout/Content.vue'

  export default {
    name: 'app',
    components: {
      HeaderView,
      ContentView
    }
  }
</script>

<style>
  @import '../static/common.css';
</style>
