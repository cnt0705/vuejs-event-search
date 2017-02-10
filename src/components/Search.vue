<template>
  <div>
    <input type="text" @change="searchEvents($event.target.value)">
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
