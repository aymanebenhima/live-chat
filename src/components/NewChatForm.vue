<template>
  <form>
      <textarea 
        placeholder="Type a message and hit enter to send..."
        v-model="msg"
        @keypress.enter.passive="sendMsg"
        ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'

export default {
    setup() {
        const { user } = getUser()

        const msg = ref('')

        const sendMsg = async () => {
            const chat = {
                name: user.value.displayName,
                message: msg.value,
                createdAt: timestamp()
            }
            console.log(chat)
            msg.value = ''
        }

        return { msg, sendMsg }
    }
}
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
.error {
    text-align: center;
    color: #eb4d4b;
    font-size: 12px;
    padding: 10px 0;
}
</style>