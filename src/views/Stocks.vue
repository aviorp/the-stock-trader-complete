<template>
  <div>
      <v-row>
          <v-col v-for="(item ,index ) in stocks"  :key="item.id" >
              <transition-group appear enter-active-class="animated fadeInLeftBig" leave-active-class="animated fadeOutRightBig" mode="out-in" >     
     <app-item 
      :title="item.name"
      :price="item.price"
      :id="item.id"
      :color="'green'"
      :key="item.id"
      :quantity="item.quantity"
      :btn="'Buy'"
      :index="index"
      :btnFunction="buyStock"
      
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
            ...mapGetters(['stocks']),
        }
    }
</script>

<style scoped>

</style>