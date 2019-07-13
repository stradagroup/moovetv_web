import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import {ApiService} from "./services/api.service";
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faAlignLeft, faCar, faDesktop, faTabletAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons'
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
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
window.toastr = require('toastr');

Vue.prototype.$http = axios
// windows.axios=axios
ApiService.init('https://ivoholdings.com/api/v1');

// if (store.dispatch('isLoggedIn'))
//     ApiService.setHeader(store.getters.GET_AUTH_TOKEN);
// else
//     store.dispatch('UNSET_USER').then(() => {
//     });

library.add(faUserSecret, faSpinner, faAlignLeft, faCar, faDesktop, faTabletAlt, faFacebookF, faTwitter, faInstagram, faAngleDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VModal, VueTaber, VueTabs);
Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.use(VueToastr2);


// Vue.use(vue-jquery);
// window.$ = require('jquery')
// window.JQuery = require('jquery')
require('typeface-montserrat')

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

