import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/app.css';
import Home from './components/Home.vue'


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '', component: Home }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
