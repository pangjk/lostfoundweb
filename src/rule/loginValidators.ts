import { ref } from "vue";

interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: "",
  password: "",
});

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}

// 校验规则
export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "邮箱有误...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "长度在6到30个字符...",
      trigger: "blur",
    },
  ],
});