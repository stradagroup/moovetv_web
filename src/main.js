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
import '../vue-tabs.css'
import tabs from './tabs.js'

const vueTaber = new VueTaber({
    tabs
})


library.add(faUserSecret, faSpinner, faAlignLeft, faCar, faDesktop, faTabletAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VModal, VueTaber)
// Vue.use(vue-jquery);
window.$ = require('jquery')
window.JQuery = require('jquery')

new Vue({
  router,
    taber: vueTaber,
  render: h => h(App)

}).$mount('#app')
