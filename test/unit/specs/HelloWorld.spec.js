import Vue from 'vue';
import TheCounter from '@/components/TheCounter';

describe('TheCounter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TheCounter);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.admin'))
      .toMatchSnapshot();
  });
});
