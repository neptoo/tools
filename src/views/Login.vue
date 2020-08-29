<template>
  <div class="login">
    <h1>Login</h1>
    <div class="account">
      <account-login :rule-form="ruleForm" :rules="rules"
      @submit="submit" @errHandle="errHandle"></account-login>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: `The username cann't be empty.`,
            trigger: "blur",
          },
          {
            min: 2,
            max: 6,
            message: `The username is between 2 and 6 characters.`,
            trigger: "blur",
          }
        ],
        password: [
          {
            required: true,
            message: `The password cann't be empty.`,
            trigger: "blur",
          },
          {
            min: 6,
            max: 10,
            message: `Min.6 char`,
            trigger: "blur",
          }
        ]
      },
    };
  },
  methods: {
    submit(){
      this.$message.success('Submitted successfully')
    },
    errHandle(){
      this.$message.error('Please check your username and password and try again.')
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 30px;
  margin-left: 30px;
}
.account {
  width: 360px;
}
</style>
