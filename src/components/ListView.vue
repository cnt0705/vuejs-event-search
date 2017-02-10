<template>
  <ul>
    <list-item
      v-for="(event, index) in events"
      :event="event"
      :index='index'
      @addItemToFav="addItemToFav">
    </list-item>
  </ul>
</template>

<script>
  import ListItem from './ListItem'

  export default {
    props: {
      events: Array
    },
    methods: {
      addItemToFav(index) {
        this.$emit('addItemToFav', index)
      }
    },
    components: {
      ListItem
    }
  }
</script>

<style>
  ul {
    padding: 0;
  }
</style>
