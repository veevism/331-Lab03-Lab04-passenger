import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import PassengerDetailView from '../views/details/PassengerDetailView.vue'
import PassengerLayoutView from '../views/details/PassengerLayoutView.vue'
import PassengerAirlineView from '../views/details/PassengerAirlineView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PassengerEditView from '../views/details/PassengerEditView.vue'
import NProgress from 'nprogress'
import PassengerService from '@/services/PassengerService'
import { usePassengerStore, useAirlineStore } from '@/stores/passenger'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list',
      component: PassengerListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1')
      })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout',
      component: PassengerLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const passengerStore = usePassengerStore()
        const airlineStore = useAirlineStore()
        PassengerService.getPassengerById(id)
          .then((response) => {
            passengerStore.setPassenger(response.data)
            PassengerService.getAirlineById(Number(response.data.airlineId))
              .then((response) => {
                airlineStore.setAirline(response.data)
              })
              .catch((error) => {
                console.log(error)
                if (error.response && error.response.status === 404) {
                  return { name: '404-resource', params: { resource: 'AirlineId' } }
                }
              })
          })
          .catch((error) => {
            console.log(error)
            if (error.response && error.response.status === 404) {
              return { name: '404-resource', params: { resource: 'PassengerId' } }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView,
          props: true
        },
        {
          path: 'airline',
          name: 'passenger-airline',
          component: PassengerAirlineView,
          props: true
        },
        {
          path: 'edit',
          name: 'passenger-edit',
          component: PassengerEditView,
          props: true
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
