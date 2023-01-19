export const accountRules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须为5-10个字母或数字',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 12, message: '长度应为5-8个字符', trigger: 'change' }
  ]
}

export const phoneRules = {
  phoneNumber: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    {
      pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
      message: '手机号格式错误',
      trigger: 'blur'
    }
  ],
  veriCode: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { min: 4, max: 4, message: '验证码格式错误', trigger: 'blur' }
  ]
}