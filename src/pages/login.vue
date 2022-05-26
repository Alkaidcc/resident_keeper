<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="login-form">
      <div class="box">
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details</p>
        <form>
          <div class="input-group">
            <label for="email">Email</label>
            <input id="email" required placeholder="Enter your email">
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input id="password" type="password" required>
          </div>
          <div class="input-group">
            <input id="rem" type="checkbox" name="remember">
            <label for="rem">Remember for 30 days</label>
            <a href="https://www.baidu.com">Forgot password</a>
          </div>
          <div class="input-group">
            <button type="submit">
              Sign in
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <a href="https://www.baidu.com">Sign up</a>
        </p>
      </div>
    </div>
    <div class="land-picture">
      <div class="circle">
        <div class="shade" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .container {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.land-picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f1f2f7;
}

.circle {
  position: relative;
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  background-color: #633eba;
  border-radius: 50%;
}

.shade {
  backdrop-filter: blur(15px);
  position: absolute;
  top: 50%;
  left: -50%;
  width: 200%;
  height: 80%;
}

.box:last-child {
  margin-left: auto;
  margin-right: auto;
}

.box p {
  color: #888888;
  margin-top: 12px;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 75%;
  padding: 20px;
}

form {
  margin-top: 40px;
}

#email {
  display: block;
}

#password {
  display: block;
}

.input-group {
  margin-top: 18px;
}

input {
  width: 100%;
  margin-top: 4px;
  border-radius: 4px;
  height: 35px;
  border: 2px solid #ccc;
  padding: 0 12px;
}

button {
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 8px;
  background-color: #633eba;
  color: white;
  margin-top: 12px;
  cursor: pointer;
}

#rem {
  display: inline-block;
  width: auto;
  height: auto;
}

a {
  color: #633eba;
  text-decoration: none;
  font-size: 14px;
  float: right;
} */
</style>
