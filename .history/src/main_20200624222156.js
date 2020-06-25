import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/app.css';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import PageNotFound from './components/PageNotFound.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '*', component: PageNotFound }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
