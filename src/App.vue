<template>
<transition-group appear enter-active-class="animated fadeInLeftBig">
  <v-app key="app">
    <v-container>
      
      <app-header class="text-center mx-auto"></app-header>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>

    </v-container>

  </v-app>
  </transition-group>
</template>

<script>
  import appHeader from './components/Header'
  export default {
    components: {
      appHeader
    }
  }
</script>

<style scoped>

</style>