<template>
  <div class="container">
    <the-navbar />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import getUser from '@/composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { TheNavbar },
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