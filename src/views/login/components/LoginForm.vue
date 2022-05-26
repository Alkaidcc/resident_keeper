<script setup lang='ts'>
import { Avatar, Lock, RefreshLeft, User } from '@element-plus/icons-vue'

const isRemember = ref(false)

const loginForm = reactive({
  username: 'admin',
  password: '888888',
})

const resetForm = () => {
  loginForm.username = ''
  loginForm.password = ''
}
</script>

<template>
  <el-form>
    <el-form-item>
      <el-input v-model="loginForm.username" placeholder="用户名" size="large">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginForm.password" type="password" show-password placeholder="密码" size="large">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <el-checkbox v-model="isRemember" mt="-12px" pr="8px" float-right label="记住密码" size="large" />
  <div mt="40px" flex justify="between" w="full" whitespace="nowrap">
    <el-button round size="large" :icon="RefreshLeft" @click="resetForm">
      重置
    </el-button>

    <el-button round :icon="Avatar" type="primary" size="large">
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
