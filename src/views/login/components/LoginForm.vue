<script setup lang='ts'>
import { Avatar, Lock, RefreshLeft, User } from '@element-plus/icons-vue'
import type { FormRules } from 'element-plus/es'
import type { Login } from '@/api/interface/index'
import { useStore } from '@/store/index'
import { MD5_Encrypt } from '@/utils/crypto'

const { user } = useStore()
const router = useRouter()
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const loginForm = reactive<Login.ReqLoginForm>({
  username: '',
  password: '',
})

/**
 * @description 重置函数
 * @param formEl 表单实例
 */
const resetForm = (formEl: FormInstance | undefined) => {
  user.cancelRemember()
  if (!formEl)
    return
  formEl.resetFields()
}

/**
 * @description: 登录函数
 * @param formEl 表单实例
 */
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    if (valid) {
      try {
        const requestLoginForm: Login.ReqLoginForm = {
          username: loginForm.username,
          password: MD5_Encrypt(loginForm.password),
        }
        ElMessage.success('登录成功')
        router.push({ name: 'Home' })
      }
      catch (e) {
        ElMessage.error('登录失败')
      }
    }
  })
}
</script>

<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名" size="large">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" show-password placeholder="密码" size="large">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <el-checkbox v-model="user.isRemembered" mt="-12px" pr="8px" float-right label="记住密码" size="large" />
  <div mt="40px" flex justify="between" w="full" whitespace="nowrap">
    <el-button round size="large" :icon="RefreshLeft" @click="resetForm(loginFormRef)">
      重置
    </el-button>

    <el-button round :icon="Avatar" type="primary" size="large" @click="login(loginFormRef)">
      登录
    </el-button>
  </div>
</template>

<style scoped>
.el-form-item {
  margin-bottom: 20px;
}
.el-button {
  margin-top: 10px;
  width: 180px;
}
</style>
