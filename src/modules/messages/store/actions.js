export default {
  readItem(state, item) {
    setTimeout(() => state.commit('itemIsRead', { item }), 500);
  },
};