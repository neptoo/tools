<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <el-input placeholder="username" v-model="ruleForm.username">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="password"
          show-password
          v-model="ruleForm.password"
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="loginBtn" @click="login"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // if valid, dispatch event
          this.$emit("submit");
        } else {
          // if false, error handle
          this.$emit("errHandle");
        }
      });
    },
  },
};
</script>

<style scoped>
.loginBtn {
  width: 100%;
}
</style>
