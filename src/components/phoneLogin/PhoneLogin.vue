<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="phone">
        <el-input placeholder="cell phone number" v-model="ruleForm.phone">
          <i slot="prefix" class="el-icon-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-input placeholder="auth code" v-model="ruleForm.code">
              <i slot="prefix" class="el-icon-tickets"></i>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button @click="sendCode" :disabled="disabled">{{
              btnText
            }}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="phoneLogin"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PhoneLogin",
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    countDown: {
      type: Number,
      default: 60,
    },
  },
  methods: {
    sendCode() {
      this.$refs.ruleForm.validateField("phone", (errMsg) => {
        if (errMsg) {
          this.$message.error(errMsg);
        } else {
          // 1.时间开始倒数
          // 2.按钮进入禁用状态
          // 3.如果倒计时结束，按钮恢复可用状态 按钮文字变为重新发送
          // 4.倒计时过程中 按钮文字为 多少s后重新发送
          let timer = setInterval(() => {
            this.time--;
            this.btnText = `${this.time}s后重新发送`;
            this.disabled = true;
            if (this.time === 0) {
              this.disabled = false;
              this.btnText = "重新发送";
              this.time = this.countDown;
              clearInterval(timer);
            }
          }, 1000);
          this.$emit("send");
        }
      });
    },
    phoneLogin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit");
        } else {
          this.$emit("errHandle");
        }
      });
    },
  },
  mounted() {
    this.time = this.countDown;
  },
  data() {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(`The cell phone number cannot be empty`));
      } else {
        let reg = /^1[3|4|5|7|8|9]\d{9}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(
            new Error(`Please enter the correct cell phone number`)
          );
        }
      }
    };
    return {
      disabled: false,
      btnText: "发送验证码",
      time: 0,
      rules: {
        phone: [{ validator: checkPhone, trigger: "change" }],
        code: [
          {
            required: true,
            message: `The auth code cannot be empty`,
            trigger: "blur",
          },
          {
            min: 3,
            max: 6,
            message: `Min.3 char`,
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
