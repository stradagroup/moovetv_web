import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faAlignLeft, faCar, faDesktop, faTabletAlt } from '@fortawesome/free-solid-svg-icons'
// import vue-jquery from 'vue-jquery'
import VueTaber from 'vue-tabs'
// import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import {VueTabs, VTab} from 'vue-nav-tabs'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '../vue-tabs.css'
// import tabs from '../tabs.js'

// const vueTaber = new VueTaber({
//     tabs
// })
import axios from 'axios'

Vue.prototype.$http = axios

library.add(faUserSecret, faSpinner, faAlignLeft, faCar, faDesktop, faTabletAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VModal, VueTaber, VueTabs);
Vue.use(BootstrapVue);
// Vue.use(vue-jquery);
// window.$ = require('jquery')
// window.JQuery = require('jquery')

new Vue({
  router,
    VueTabs,
    VTab,
    data () {
        return {
            info: null
        }
    },
  render: h => h(App)

}).$mount('#app')

