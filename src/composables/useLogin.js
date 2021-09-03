import { ref } from 'vue'
import { appAuth } from '@/firebase/config'

const error = ref(null)

const login = async (email, password) => {
    error.value = null
    
    try {
        const res = await appAuth.signInWithEmailAndPassword(email,password)
        error.value = null
        console.log(res)
        
        return res
    } catch (err) {
        console.log(err.value)
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin