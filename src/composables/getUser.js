import { ref } from 'vue'
import { appAuth } from '@/firebase/config'

// refs
const user = ref(appAuth.currentUser)

// listen for auth changes outside of function
// so only 1 listener is ever attached
appAuth.onAuthStateChanged(_user => {

  user.value = _user
});

const getUser = () => {
  return { user } 
}

export default getUser