import Vue from 'vue';

export default {
  itemIsRead(state, payload) {
    const item = state.items.find(i => i.id === payload.item.id);
    Vue.set(item, 'read', true);
  },
  personIsAdded(state, payload) {
    state.items.push(payload.person);
  },
};
