<template>
  <div>
    <input type="text" @change="searchEvents($event.target.value)">
    <!-- <button>submit</button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'searchEvents'
    ])
  }
}
</script>
