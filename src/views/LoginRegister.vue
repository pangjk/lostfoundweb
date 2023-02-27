<template>
    <div class="container">
        <!--form表单容器-->
        <div class="forms-container">
            <div class="logo">
              <h1 class="logo">用户登录</h1>
            </div>
            <div class="signin-signup">
              <div class="surplus"></div>
              <LoginForm :loginUser="loginUser" :rules="rules" /> 
              <RegisterForm :registerUser="registerUser" :registerRules="registerRules"/>

            </div>
        </div>
        <!--css—— 坑 -->
        <!-- <img src="" alt=""> 球状 -->
    </div> 
    
</template>
  
  
<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { loginUser, rules } from "@/rule/loginValidators";
import { registerUser, registerRules } from "@/rule/registerValidators";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "LoginRegister",
  components: { LoginForm, RegisterForm },
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
    const signUpMode = ref<boolean>(false);
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return {
      handleLogin,
      signUpMode,
      loginUser,
      rules,
      registerUser,
      registerRules,
    };
  },
};
</script>
  
  
  
<style>
.container {
    position: absolute;
    width: 390px;
    height: 844px;
    
    /* background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(42.5px); */
    background: url(./蓝色背景1.png);
    
    /* position: absolute; */
    /* width: 390px;
    height: 844px; */
	  
    /* position: relative;
    width: 100%;
     
    min-height: 100vh;
    overflow: hidden; */
}

.forms-container{
    position: absolute;
    width: 390px;
    height: 844px;
    
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(42.5px);
}

.logo{
  text-align: center;
  padding-top: 20%;
  font-size: xx-large;
  font-family: STHupo;
  line-height: 34px;
  letter-spacing: -0.28px;
  color: #FFFFFF;
}

.signin-signup {
  position: relative;
  width: 90%;
  height: 30%;
  top: 15%;
  left: 5%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  /* filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;  */
}

.surplus{
  height: 30%;
}

</style>