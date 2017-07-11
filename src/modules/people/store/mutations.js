import Vue from 'vue';

export default {
  personIsAdded(state, payload) {
    state.items.push(payload.person);
  },
  personIsRemoved(state, payload) {
    const items = state.items.filter(item => item.id !== payload.personId);
    Vue.set(state, 'items', items);
  },
};
