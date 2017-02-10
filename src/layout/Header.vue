<template>
  <header class="header">
    <header-menu></header-menu>
    <header-search></header-search>
  </header>
</template>

<script>
  import HeaderMenu from '../components/HeaderMenu'
  import HeaderSearch from '../components/HeaderSearch'

  export default {
    components: {
      HeaderMenu,
      HeaderSearch
    }
  }
</script>
