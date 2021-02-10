import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import validator from 'vee-validate'
import TextInput from '@/components/TextInput.vue'
import Toasted from 'vue-toasted';


Vue.config.productionTip = false
Vue.use(validator)
Vue.use(Toasted)

Vue.component('text-input',TextInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
