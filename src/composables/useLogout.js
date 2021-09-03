import { ref } from 'vue'
import { appAuth } from '@/firebase/config'

// refs
const error = ref(null)

// logout function
const logout = async () => {
  error.value = null

  try {
    await appAuth.signOut()
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout