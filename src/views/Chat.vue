<template>
  <div class="container">
    <the-navbar />
    <chat-window />
    <new-chat-form />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

import getUser from '@/composables/getUser'

import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { TheNavbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {

      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })
  },
}
</script>

<style>

</style>