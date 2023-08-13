import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#f44336',
    secondary: '#9575CD',
    accent: '#9c27b0',
    error: '#f44336',
    warning: '#3949AB',
    info: '#2196f3',
    success: '#4caf50'
  }
})
Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDfEZV6wz4JH4SPS_SQvXwohMRgp7zLRSM',
      authDomain: 'itc-ads-baed5.firebaseapp.com',
      databaseURL: 'https://itc-ads-baed5-default-rtdb.firebaseio.com/',
      projectId: 'itc-ads-baed5',
      storageBucket: 'itc-ads-baed5.appspot.com',
      messagingSenderId: '248640665893',
      appId: '1:248640665893:web:cf5825c89b04cec8b442cc',
      measurementId: 'G-XVT1M1JH9Q'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
