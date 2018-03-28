import Vue from 'vue';
import App from './App.vue';
import Home from './components/home/Home.vue';
import Rotas from './router/Rotas';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {
	  'Access-Control-Allow-Origin': '*',
	},
});

new Vue({
  el: '#app',
  router: Rotas,
  components: { App },
  template: '<App/>'
});
