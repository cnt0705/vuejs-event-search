<template>
  <ul>
    <list-item v-for="event in events" :event="event"></list-item>
  </ul>
</template>

<script>
  import ListItem from './ListItem'

  export default {
    props: {
      events: Array
    },
    components: {
      ListItem
    }
  }
</script>
