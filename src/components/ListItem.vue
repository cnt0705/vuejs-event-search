<template>
  <li>
    <p>{{event.title}}</p>
    <p>{{event.started_at}}</p>
    <p><a href="{event.event_url}">{{event.event_url}}</a></p>
  </li>
</template>

<script>
  export default {
    props: {
      event: Object
    }
  }
</script>
