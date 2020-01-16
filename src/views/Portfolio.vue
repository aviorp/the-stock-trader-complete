<template>
  <div>
      <v-row>
          <v-col v-for="(item ,index ) in portfolio"  :key="item.id" >
              <transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" >     
     <app-item 
      :title="item.name"
      :price="item.price"
      :id="item.id"
      :color="'red'"
      :key="item.id"
      :quantity="item.quantity"
      :btn="'Sell'"
      :index="index"
      :btnFunction="sellStock"
      
      class="">
      </app-item>
      </transition-group>
          </v-col>
   </v-row>
   </div>
</template>

<script>
import appItem from '../components/Item.vue';
    import {mapGetters, mapActions} from 'vuex';
    export default {
        components: {
            appItem
        },
        methods: {
            ...mapActions(['sellStock' , 'buyStock'])
        },
        computed: {
            ...mapGetters(['portfolio']),
        }
    }
</script>

<style scoped>

</style>