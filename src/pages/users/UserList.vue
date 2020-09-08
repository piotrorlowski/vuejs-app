<template>
  <div class="UserList">
    <UserListElement v-for="user in userList" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserListElement from '~/components/users/UserListElement';

export default {
  name: 'UserList',
  components: {
    UserListElement,
  },
  data() {
    return {
      userList: [
        { id: 1, name: 'User_1' },
        { id: 2, name: 'User_2' },
        { id: 3, name: 'User_3' },
        { id: 4, name: 'User_4' },
        { id: 5, name: 'User_5' },
        { id: 6, name: 'User_6' },
        { id: 7, name: 'User_7' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.UserList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 50px 0;
  width: 45%;
  height: auto;
  background-color: #5284cf;
  border-radius: 5px;
  border: 1px solid #74a1cc;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
}
</style>
