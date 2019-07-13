import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Moovetv from './views/Moovetv.vue'
// import Testjs from 'components/Testjs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        meta: {
            title: "Home",

        }
    },
    {
      path: '/Moovetv',
      name: 'moovetv',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        component: Moovetv,
        meta: {
            title: "Moovetv",

        }
    },

      // {
      //     path: '/components',
      //     name: 'Testjs',
      //     component: Testjs,
      //     meta: {
      //         title: "Testjs",
      //
      //     }
      // },

  ],
    mode:'history'
})
