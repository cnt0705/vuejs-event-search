<template>
  <list-view v-if="hasEvent" :events="events"></list-view>
  <p v-else>イベントを検索してください。</p>
</template>

<script>
  import ListView from '../components/ListView'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'events'
      ]),
      hasEvent() {
        return this.events.length
      }
    },

    components: {
      ListView
    }
  }
</script>
