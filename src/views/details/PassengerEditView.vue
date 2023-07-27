<script setup lang="ts">
import { type Passenger } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import NProgress from 'nprogress'

const props = defineProps({
  passenger: {
    type: Object as PropType<Passenger>,
    require: true
  }
})

const router = useRouter()
const store = useMessageStore()
const { message } = storeToRefs(store)

const edit = () => {
  NProgress.start()
  store.updateMessage('The update is in progress...')
  setTimeout(() => {
    store.resetMessage()
    NProgress.done()
    router.push({ name: 'passenger-list' })
  }, 5000)
}
</script>

<template>
  <div class="center">
    <div class="edit-body">
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <p>Edit the <span>detail</span> here &nbsp;<button @click="edit">Edit Me</button></p>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
span {
  font-weight: bold;
}
#flashMessage {
  border: 1px solid rgba(74,194,107,0.4);
  padding: 20px 16px;
  border-radius: 6px;
  background-color: #dafbe1;
  color: #1f2328;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
