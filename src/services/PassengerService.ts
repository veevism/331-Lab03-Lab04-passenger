import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Passenger } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassengers(perPage: number, page: number): Promise<AxiosResponse<Passenger[]>> {
    return apiClient.get<Passenger[]>('/passenger?_page=' + page + '&_limit=' + perPage)
  },
  getPassengerById(id: number): Promise<AxiosResponse<Passenger>> {
    return apiClient.get<Passenger>('passenger/' + id.toString())
  },
  getAirlineById(id: number): Promise<AxiosResponse<Passenger>> {
    return apiClient.get<Passenger>('airline/' + id.toString())
  }
}
