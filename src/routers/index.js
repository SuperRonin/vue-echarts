import Vue from 'vue'
import Router from 'vue-router'
import first from '@/pages/first'
import sec from '@/pages/sec'
import third from '@/pages/third'
import fouth from '@/pages/fouth'
import scale from '@/components/scale'
import map from '@/components/map'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/sec',
      name: 'sec',
      component: sec
    },
    {
      path: '/third',
      name: 'third',
      component: third
    },
    {
      path: '/fouth',
      name: 'fouth',
      component: fouth
    },
    {
      path: '/scale',
      name: 'scale',
      component: scale
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
