import { ref, watchEffect } from 'vue'
import { db } from '@/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let getDoc = db.collection(collection)
        .orderBy('createdAt')

    const unsub = getDoc.onSnapshot((snap) => {
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

    watchEffect((onInvalidate) => {
        // Unsubscribe from previeous collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { error, documents }
}

export default getCollection