<template>

  <v-toolbar dense>
    <v-toolbar-title>The Stock Trader</v-toolbar-title>
    <v-toolbar-items class="ma-5">
      <v-list-item text class="mr-2" active-class="gray" to="/portfolio">Portfolio</v-list-item>
      <v-list-item text class="mr-2" active-class="gray" to="/stocks">Stock</v-list-item>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items class="ma-5">
      <v-list-item text align="center" @click="randomStocksPrice">End Day</v-list-item>
      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            Save & Load
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="saveData">Save Data</v-list-item>
          <v-list-item @click="loadData">Load Data</v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-list-item text class="mx-auto"><strong> Funds : {{this.$store.state.funds  | numberFormat | USD}}</strong> </v-list-item>
    </v-toolbar-items>


  </v-toolbar>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        on: false,

      }
    },
    methods: {
      ...mapMutations(['randomStocksPrice' , 'saveData' ,'loadData']),

    },
  }
</script>

<style scoped>
.gray  {
  background-color: rgb(160, 157, 157);
  color: white;
  border-bottom: 2px solid black;
}
</style>