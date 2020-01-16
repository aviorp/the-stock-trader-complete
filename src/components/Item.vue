<template>
  <v-col>
    <v-card dark :color="color" width="400px">
      <v-card-title>{{title}}</v-card-title>
      <v-card-subtitle>
        (Price :{{price}}
        <span v-if="quantity">, Quantity: {{quantity}}</span>)
      </v-card-subtitle>
      <hr />
      <v-card-text style="background-color:white;">
        <v-row>
          <v-col cols="9">
            <v-text-field light solo label="Quantity" v-model="productQuantity" dense text></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              light
              :disabled="productQuantity <=0"
              @click="btnFunction({quantity:productQuantity ,index}) ; productQuantity=''"
            >{{btn}}</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    color: String,
    quantity: Number,
    id: Number,
    btn: String,
    index: Number,
    btnFunction: Function
  },
  data() {
    return {
      productQuantity: null
    };
  },
  updated() {},
  methods: {
    showId(id) {
      console.log(id);
    }
  }
};
</script>

<style scoped>
</style>