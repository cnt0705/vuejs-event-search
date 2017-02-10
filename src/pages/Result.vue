<template>
  <list-view v-if="hasEvent" :events="events" @addItemToFav="addItemToFav"></list-view>
  <p v-else>イベントを検索してください。</p>
</template>

<script>
  import ListView from '../components/ListView'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'events'
      ]),
      hasEvent() {
        return this.events.length
      }
    },
    methods:{
      ...mapActions([
        'addItemToFav'
      ])
    },
    components: {
      ListView
    }
  }
</script>
