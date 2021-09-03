import { ref } from 'vue'
import { db } from '@/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let getDoc = db.collection(collection)
        .orderBy('createdAt')
        
    getDoc.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })
    return { error, documents }
}

export default getCollection