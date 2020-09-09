import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import "firebase/auth";
import './Firebase/firebaseinit';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer);

Vue.config.productionTip = false
let app;
firebase.auth().onAuthStateChanged(function () {
  if(!app)
  {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

