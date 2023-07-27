<template>
  <RouterLink class="passenger-link" :to="{ name: 'passenger-detail', params: { id: passenger?.id } }">
    <article>
      <div class="card-wrapper">
        <div class="card-body">
          <h2>
            {{ passenger?.first_name }} {{ passenger?.last_name }} <span>({{ passenger?.gender }})</span>
          </h2>
          <p class="card-email">{{ passenger?.email }}</p>
          <!-- <p>@176.3.147.168</p> -->
          <p>{{ passenger?.Source }} ---&gt; {{ passenger?.Destination }}</p>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Passenger } from '@/type'
import type { PropType } from 'vue'

const props = defineProps({
  passenger: {
    type: Object as PropType<Passenger>,
    require: true
  }
})
</script>

<style scoped>
.card-wrapper {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  /* margin-bottom: 18px; */
  border-radius: 8px;
}

.card-wrapper:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.passenger-link {
  color: #2c3e50;
  text-decoration: none;
}

.card-body h2 {
  margin: 0 0 12px 0;
  font-size: 1.6rem;
  font-weight: bold;
}

.card-body h2>span {
  font-size: 16px;
  color: #818181;
}

.card-body .card-email {
  margin: 0 0 12px 0;
  color: #818181;
}

.card-body p {
  margin: 0 0 12px 0;
}
</style>
