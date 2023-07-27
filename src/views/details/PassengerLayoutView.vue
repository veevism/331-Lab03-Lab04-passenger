<script setup lang="ts">
import { ref } from 'vue'
import { usePassengerStore, useAirlineStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';

const storePassenger = usePassengerStore()
const passenger = storeToRefs(storePassenger).passenger
const storeAirline = useAirlineStore()
const airline = storeToRefs(storeAirline).airline
const id = ref(passenger?.value?.id)
</script>

<template>
  <div v-if="passenger">
    <div class="nav">
      <router-link :to="{ name: 'passenger-detail', params: { id } }">Detail</router-link> | 
      <router-link :to="{ name: 'passenger-airline', params: { id } }">Airline</router-link> | 
      <router-link :to="{ name: 'passenger-edit', params: { id } }">Edit</router-link>
    </div>

    <RouterView :passenger="passenger" :airline="airline"></RouterView>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: inline-block;
  padding: 0 0.5rem;
  color: #2c3e50;
}
</style>
