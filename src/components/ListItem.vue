<template>
  <li class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{event.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <p>{{event.started_at}}</p>
      <p><a href="{event.event_url}" target="_blank">{{event.event_url}}</a></p>
      <button
        class="mdl-button mdl-js-button mdl-button--icon"
        :disabled="isFavItem"
        @click="addItemToFav(index)">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    </div>
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

<style lang="scss" scoped>
  .mdl-card {
    margin: 50px auto 0;

    &:first-child {
      margin-top: 0;
    }
  }

  .mdl-card__title {
    font-size: 14px;
  }

  .mdl-button--icon {
    width: 40px;
    height: 40px;
  }
</style>
