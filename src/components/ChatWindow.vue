<template>
  <div class="chat-window">
      <div v-if="error">{{ error }}</div>
      <div v-if="documents" class="messages" ref="messages">
          <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
              <span class="created-at">{{ doc.createdAt }}</span>
              <span class="name">{{ doc.name }}</span>
              <span class="message">{{ doc.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'

import getCollection from '@/composables/getCollection'

import { formatDistanceToNow } from 'date-fns'

export default {
    setup() {
        const { error, documents } = getCollection('messages')

        // format timestamp
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
            }
        })
        // auto-scroll to bottom of messages
        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style scoped>
.chat-window {
    background: #dff9fb;
    padding: 30px 20px;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #535c68;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}
.messages {
    max-height: 350px !important;
    overflow: auto;
}
.messages::-webkit-scrollbar {
    width: 5px;
}
.messages::-webkit-scrollbar-track {
    background: white;
    border-radius: 3px;
}
.messages::-webkit-scrollbar-thumb {
    background: #30336b;
    border-radius: 3px;
}
</style>