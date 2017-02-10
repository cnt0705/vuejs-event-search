<template>
  <div class="search mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="inputForm" @change="searchEvents($event.target.value)">
    <label class="mdl-textfield__label" for="inputForm">Text...</label>
  </div>
</template>

<script>
  export default {
    methods: {
      searchEvents(value) {
        this.$emit('searchEvents', value)
      }
    }
  }
</script>

<style scoped>
  .search {
    display: block;
    width: 400px;
    margin: 0 auto;
  }
</style>
