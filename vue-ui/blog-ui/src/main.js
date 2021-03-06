import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from 'axios'
Vue.use(Element)

Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
