import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Washhands from '../views/vaskhænder.vue'
import Keepdistance from '../views/holdafstand.vue'
import Physicalcontact from '../views/fysiskkontakt.vue'
import Cleanyourspace from '../views/rengøring.vue'
import Coughandsneeze from '../views/nysoghost.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/washhands',
    name: 'washhands',
    component: Washhands,
  },
  {
    path: '/keepdistance',
    name: 'keepdistance',
    component: Keepdistance,
  },
  {
    path: '/physicalcontact',
    name: 'physicalcontact',
    component: Physicalcontact,
  },
  {
  path: '/cleanyourspace',
  name: 'cleanyourspace',
  component: Cleanyourspace,
},
{
  path: '/coughandsneeze',
  name: '/coughandsneeze',
  component: Coughandsneeze,
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
