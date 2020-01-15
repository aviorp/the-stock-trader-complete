import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as numeral from 'numeral';


Vue.config.productionTip = false;

Vue.filter('USD' , value => value  + '$')

Vue.filter('numberFormat', value => numeral(value).format());

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
