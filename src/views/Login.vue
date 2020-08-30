<template>
  <div class="login">
    <h1>Login</h1>
    <div class="account">
      <account-login
        :rule-form="ruleForm"
        :rules="rules"
        @submit="submit"
        @errHandle="errHandle"
      ></account-login>
    </div>
    <h1>Phone Login</h1>
    <div class="phone">
      <phone-login
        :rule-form="phoneForm"
        @send="send"
        @submit="submit"
        @errHandle="errHandle"
        :countDown = "30"
      ></phone-login>
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
          },
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
          },
        ],
      },
      phoneForm: {
        phone: "",
        code: "",
      },
    };
  },
  methods: {
    submit() {
      this.$message.success("Submitted successfully");
    },
    errHandle() {
      this.$message.error(
        "Please check your form filling and try again."
      );
    },
    send() {
      this.$message.info("Verification code has been sent successfully");
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 30px;
  margin-left: 30px;
}
.account,
.phone {
  width: 500px;
}
</style>
