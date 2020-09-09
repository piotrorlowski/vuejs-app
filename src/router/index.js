import Vue from 'vue';
import VueRouter from 'vue-router';
import UserDetails from '~/components/users/UserDetails';
import Users from '~/pages/users';

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'userList', component: Users },
  { path: '/details/:id', name: 'userDetails', component: UserDetails },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
