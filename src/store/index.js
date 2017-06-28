import Vue from 'vue';
import Vuex from 'vuex';
import messages from '@/modules/messages/store';
import people from '@/modules/people/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    messages,
    people,
  },
  strict: debug,
});
