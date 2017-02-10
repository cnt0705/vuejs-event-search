<template>
  <nav class="mdl-navigation mdl-layout--large-screen-only">
    <router-link :to="{name: 'result'}" class="mdl-navigation__link" exact>
      <i class="fa fa-home fa-lg" aria-hidden="true"></i>
    </router-link>
    <router-link :to="{name: 'favs'}" class="mdl-navigation__link">
      <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </router-link>
  </nav>
</template>
