<template>
  <div class="favs-content">
    <list-view v-if="hasFavs" :events="favs"></list-view>
    <p v-else>お気に入りのイベントはありません。</p>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'favs'
      ]),
      hasFavs() {
        return this.favs.length
      }
    },
    components: {
      ListView
    }
  }
</script>

<style scoped>
  .favs-content {
    padding: 20px;
  }
</style>
