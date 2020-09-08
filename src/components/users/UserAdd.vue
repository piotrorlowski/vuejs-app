<template>
  <div class="UserAdd">
    <b-form-group
      id="fieldset-1"
      class="UserAdd-inputGroup"
      label="Enter your first name"
      label-for="userFirstName"
      label-class="UserAdd-inputLabel"
    >
      <b-form-input id="userFirstName" class="UserAdd-input" trim></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      class="UserAdd-inputGroup"
      label="Enter your second name"
      label-for="userSecondName"
      label-class="UserAdd-inputLabel"
    >
      <b-form-input id="userSecondName" class="UserAdd-input" trim></b-form-input>
    </b-form-group>
    <b-button class="UserAdd-button">Add new user</b-button>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
};
</script>
<style lang="scss" scoped>
.UserAdd {
  width: 50%;
  height: 500px;
  background-color: #5284cf;
  border-radius: 5px;
  border: 1px solid #74a1cc;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 50px 0 0;
}
.UserAdd-inputGroup {
  width: 90%;
}

/deep/ .UserAdd-inputLabel {
  margin: 0 0 10px;
  color: #fff;
  font-size: 24px;
}

/deep/ .UserAdd-input {
  font-family: 'Source Sans Pro', sans-serif;
  color: #236e98;
  font-weight: 600;
  font-size: 24px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  &:focus {
    color: #236e98;
  }
}

.UserAdd-button {
  width: 350px;
  height: 50px;
  font-size: 24px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.33);
  margin: 50px 0 0;
  background-color: #d7fffe;
  border: 1px solid #d7fffe;
  color: #236e98;
  font-weight: 600;
  outline: unset;
  &:hover {
    background-color: #b1fdfc;
    border: 1px solid #b1fdfc;
    outline: unset;
    color: #236e98;
  }
}
</style>
