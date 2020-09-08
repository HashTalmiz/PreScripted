import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from 'firebase';
import './Firebase/firebaseinit';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
