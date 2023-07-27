import type { Passenger } from '@/type'
import { defineStore } from 'pinia'

export const usePassengerStore = defineStore('passenger', {
  state: () => ({
    passenger: null as Passenger | null
  }),
  actions: {
    setPassenger(passenger: Passenger) {
      this.passenger = passenger
    }
  }
})

export const useAirlineStore = defineStore('airline', {
  state: () => ({
    airline: null as Passenger | null
  }),
  actions: {
    setAirline(airline: Passenger) {
      this.airline = airline
    }
  }
})
