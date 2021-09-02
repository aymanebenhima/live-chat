<template>
  <div class="home container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <login-form />
      <p>No account yet? <span @click="showLogin = false">Signup</span> insted</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <signup-form />
      <p>Already registred? <span @click="showLogin = true">Login</span> </p>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    SignupForm,
    LoginForm

  },
  data() {
    return {
      showLogin: true
    }
  },
}
</script>

<style>
  .home {
    text-align: center;
    padding: 20px 0;
  }
  /* Form style */
  .home form {
    display: block;
    margin: 20px auto;
  }
  .home label {
    display: block;
    margin: 20px 0 10px;
  }
  .home input {
    width: 80%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #95afc0;
    outline: none;
    color: #535c68;
    margin: 10px auto;
  }
  .home button {
    display: block;
    margin:auto;
  }
  .home span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
