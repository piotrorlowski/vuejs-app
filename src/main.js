import 'es6-promise/auto';
import Vue from 'vue';
import App from '~/App.vue';
import store from '~/store';
import router from '~/router';
import { BootstrapVue } from 'bootstrap-vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({ render: h => h(App), store, router }).$mount('#app');
