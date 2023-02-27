<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="55px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 注册/找回 -->
    <div class="tiparea">
      <button @click="changeRegister" style="float:left" class="btnRegist">用户注册</button>
      <a href="" style="float:right">忘记密码</a>
    </div>
  </el-form>
</template>

<script lang="ts">
import router from "@/router";
import { ref, getCurrentInstance } from "vue";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert("已提交");
          // ctx.$axios.post("",props.loginUser)
          // .then((res: object) => {
          //   console.log(res.data);
          //   //close
          //   router.push("/")
          // })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    const changeRegister = () => {
      
    }
    return { handleLogin, changeRegister };
  },
};
</script>
<style scoped>
/* form */



.submit-btn{
  width: 100px;
  background: linear-gradient(90.17deg, #B7FBEB 2.32%, #95B8FC 99.94%);
  position: absolute;
  left: 25%;
  top: 10%;
}

/*伪造 a链接*/
.btnRegist{
  border-style: none;
  background-color: transparent;
  color: #409eff;
  font-size: 15px;
  text-decoration:underline;
}

/* .signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 44%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
} */
.tiparea{
  padding-top: 20px;
  text-align: end;
  padding-right: 5px;
}

.tiparea a {
  color: #409eff;
}
</style>