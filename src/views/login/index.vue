<script setup lang='ts'>
import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <div h="full" bg="gray-100 center cover" flex justify="center" items="center" min-w="550px" min-h="500px" class="login_bg">
    <div
      w="96/100" h="94/100" rounded py="0" pr="8/100" pl="50px" box="border" flex items="center" justify="around"
      bg="white opacity-85"
    >
      <div w="900px">
        <img w="full" h="full" src="@/assets/images/login_left.svg" alt="login">
      </div>
      <div w="400px" pt="50px" px="40px" pb="45px" rounded="xl" shadow="md">
        <div flex items="center" justify="center" mb="45px">
          <img w="60px" h="52px" src="@/assets/images/logo.svg" alt="logo">
          <p font="bold" text="3xl gray-900" whitespace="nowrap" pl="25px">
            Resident-Keeper
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login_bg {
  background-image: url(@/assets/images/login_bg.svg);
}
</style>
