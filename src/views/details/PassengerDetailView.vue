<script setup lang="ts">
import { type Passenger } from '@/type'
import type { PropType } from 'vue'

defineProps({
  passenger: {
    type: Object as PropType<Passenger>,
    require: true
  }
})
</script>

<template>
  <div v-if="passenger">
    <div class="card-wrapper">
      <div class="card-body">
        <h2>
          {{ passenger?.first_name }} {{ passenger?.last_name }} 
        </h2>
        <p><span>Email:</span> {{ passenger?.email }}</p>
        <p><span>Gender:</span> {{ passenger?.gender }}</p>
        <p><span>IP_Address:</span> {{ passenger?.ip_address }}</p>
        <p><span>Source:</span> {{ passenger?.Source }}</p>
        <p><span>Destination:</span> {{ passenger?.Destination }}</p>
        <p><span>Travel Date:</span> {{ passenger?.travelDate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body {
  line-height: 36pt;
  margin-top: 2rem;
}
span {
  font-weight: bold;
}
</style>
