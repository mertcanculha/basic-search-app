import Vue from 'vue'
import VueRouter from 'vue-router'
import RecordPage from '../modules/recordPage/index.vue'
import HomePage from '../modules/homePage/index.vue'
import Results from '../modules/results/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/recordPage',
    name: 'RecordPage',
    component: RecordPage
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },

]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
})

export default router
