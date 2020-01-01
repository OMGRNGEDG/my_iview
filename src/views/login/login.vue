<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form
            ref="loginForm"
            :model="form"
            :rules="rules"
            @keydown.enter.native="handleSubmit"
          >
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
              >
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ];
      }
    }
  },
  data() {
    return {
      form: {
        userName: "test07",
        password: ""
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    ...mapActions(["login"]),
    async handleSubmit() {
      const isFlag = await this.$refs.loginForm.validate(valid => {
        return valid;
      });
      if (isFlag === false) return;
      this.login({ userName: this.form.userName, password: this.form.password })
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        })
        .catch(err => {
          this.$Message.error(err);
        });
    }
  }
};
</script>
<style lang="less">
@import "./login.less";
</style>
