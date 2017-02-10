<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Event Search</span>
      <div class="mdl-layout-spacer"></div>
      <header-menu></header-menu>
    </div>
  </header>
</template>

<script>
  import HeaderMenu from '../components/HeaderMenu'

  export default {
    components: {
      HeaderMenu
    }
  }
</script>
