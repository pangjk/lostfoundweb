<template class="registerContainer">
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>



    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import router from "@/router";
import { ref, getCurrentInstance } from "vue";

// import axios from 'axios'
export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert("submit!");
          // ctx.$axios.post("url",props.registerUser)
          // .then((res:any) => {
            
            
          // });
          // router.push("/")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { handleRegister };
  },
};
</script>
<style scoped>

*{
  display: none;
}

.submit-btn{
  width: 100px;
  background: linear-gradient(90.17deg, #B7FBEB 2.32%, #95B8FC 99.94%);
  position: absolute;
  left: 25%;
  top: 10%;
}

</style>