export default {
  readItem(state, item) {
    setTimeout(() => state.commit('itemIsRead', { item }), 500);
  },
  addPerson(state, person) {
    setTimeout(() => state.commit('personIsAdded', { person }), 500);
  },
};
