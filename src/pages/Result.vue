<template>
  <div class="result-content">
    <search-view
      @searchEvents="searchEvents">
    </search-view>
    <list-view
      v-if="hasEvent"
      :events="events"
      @addItemToFav="addItemToFav">
    </list-view>
    <p v-else>イベントを検索してください。</p>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  import SearchView from '../components/Search'
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
        'addItemToFav',
        'searchEvents'
      ])
    },
    components: {
      ListView,
      SearchView
    }
  }
</script>
