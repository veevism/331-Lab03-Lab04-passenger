<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import PassengerService from '@/services/PassengerService'

const passengers: Ref<Array<Passenger>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  PassengerService.getPassengers(10, props.page).then((response) => {
    passengers.value = response.data
  })
})
</script>

<template>
  <main class="container">
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"></PassengerCard>
  </main>
</template>

<style scoped>
.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}

@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
