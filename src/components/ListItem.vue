<template>
  <li>
    <p>{{event.title}}</p>
    <p>{{event.started_at}}</p>
    <p><a href="{event.event_url}" target="_blank">{{event.event_url}}</a></p>
    <button
      :disabled="isFavItem"
      @click="addItemToFav(index)">
      fav
    </button>
  </li>
</template>

<script>
  export default {
    props: {
      event: Object,
      index: Number
    },
    computed: {
      isFavItem() {
        return this.event.favId !== undefined
      }
    },
    methods: {
      addItemToFav(index) {
        this.$emit('addItemToFav', index)
      }
    }
  }
</script>
