<template>
    <div>
      <form @submit.prevent="handleSignin">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" required />
          <label for="password">password</label>
          <input type="password" name="password" id="password" v-model="password" required />
          <div class="error">{{ error }}</div>
          <button>Login</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {
    setup(props, context) {

        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSignin = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                context.emit('login')
            }
        }

        return { email, password, handleSignin, error }
    }

}
</script>

<style>

</style>