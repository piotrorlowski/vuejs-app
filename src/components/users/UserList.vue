<template>
  <div class="UserList">
    <h2 class="UserList-heading">Users</h2>
    <UserListElement v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserListElement from '~/components/users/UserListElement';
import { mapState } from 'vuex';

export default {
  name: 'UserList',
  components: {
    UserListElement,
  },
  computed: {
    ...mapState('users', ['users']),
  },
};
</script>

<style lang="scss" scoped>
.UserList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 30px 0;
  width: 45%;
  height: auto;
  background-color: #5284cf;
  border-radius: 5px;
  border: 1px solid #74a1cc;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
}

.UserList-heading {
  font-size: 32px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  margin: 0 0 20px;
}
</style>
