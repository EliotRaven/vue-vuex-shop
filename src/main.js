import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './stores';
import './registerServiceWorker';
import currency from './helpers/currency';
import 'vue-material/dist/vue-material.min.css';

Vue.filter('currency', currency);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
