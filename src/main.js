import Vue from 'vue';
import timeline from 'vue-route-timeline';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(timeline.plugin, store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
