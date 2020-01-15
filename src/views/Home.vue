<template>
 <v-row>
     <v-col class="mx-auto" cols="5">
         <v-card  >
             <v-row >
                 <v-col >
             <v-card-title>Trade or View Your Portfolio</v-card-title>
            
             <v-card-text>You may Save & Load Data</v-card-text>
              <v-card-text>Click on 'End Day' to begin a new day!</v-card-text>
               <hr>
                 <v-card-title>Your Funds : {{this.$store.state.funds | numberFormat  | USD}}</v-card-title>
             </v-col>
             </v-row>
         </v-card>
     </v-col>
 </v-row>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>