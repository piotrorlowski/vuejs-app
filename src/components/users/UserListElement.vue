<template>
  <div class="UserListElement">
    <p class="UserListElement-userName">{{ user.name }}</p>
    <button class="UserListElement-deleteUserButton">
      <i class="UserListElement-deleteIcon material-icons">clear</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserListElement',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.UserListElement {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 80%;
  background-color: #f2f8fd;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  margin: 0 0 20px;
  padding: 0 10px 0;
}
.UserListElement-deleteUserButton {
}
.UserListElement-userName {
  color: #236e98;
  font-size: 24px;
  font-weight: 600;
}
.UserListElement-deleteIcon {
  font-weight: 600;
  color: #236e98;
}
</style>
