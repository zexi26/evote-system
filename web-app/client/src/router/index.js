import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import CastBallot from '@/components/CastBallot'
import QueryWithQueryString from '@/components/QueryWithQueryString'
import Checkpick from '@/components/Checkpick'
import GetCurrentStanding from '@/components/GetCurrentStanding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/castBallot',
      name: 'CastBallot',
      component: CastBallot
    },
    // {
    //   path: '/queryWithQueryString',
    //   name: 'QueryWithQueryString',
    //   component: QueryWithQueryString
    // },
    {
      path: '/Checkpick',
      name: 'Checkpick',
      component: Checkpick
    },
    {
      path: '/getCurrentStanding',
      name: 'GetCurrentStanding',
      component: GetCurrentStanding
    }
  ]
})
