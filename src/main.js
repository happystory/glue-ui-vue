import Vue from 'vue';
import App from './App.vue';

import Button from './components/button.vue';
import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/input.vue';

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Input.name, Input);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
