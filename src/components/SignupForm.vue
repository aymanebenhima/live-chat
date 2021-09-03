<template>
  <div>
      <form @submit.prevent="handleSignup">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="displayName" required />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" required />
          <label for="password">password</label>
          <input type="password" name="password" id="password" v-model="password" required />
          <div class="error">{{ error }}</div>
          <button>Signup</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/useSignup'

export default {
    setup(props, context) {
        const { error, signup } = useSignup()

        // ref
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSignup = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                context.emit('signup')
            }
        }

        return { displayName, email, password, handleSignup, error }
    }
}
</script>

<style>

</style>