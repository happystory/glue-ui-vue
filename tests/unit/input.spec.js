import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';
import Input from '../../src/components/input.vue';

describe('HelloWorld.vue', () => {
  it('存在', () => {
    expect(Input).to.exist;
  });

  // it('接收value', () => {
  //   const msg = 'new message';
  //   const wrapper = shallowMount(Input, {
  //     propsData: {
  //       value: msg
  //     }
  //   });
  //   expect(wrapper.querySelect('input').value).to.equal(msg);
  // });
});
