import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard.vue";
import NewPrescription from "../views/NewPrescription.vue";
import EditPrescription from "../views/EditPrescription.vue";
import ViewPrescription from "../views/ViewPrescription";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path:'/new',
    name: 'new-prescription',
    component: NewPrescription
  },
  {
    path:'/edit/:pid',
    name: 'edit-prescription',
    component: EditPrescription
  },
  {
    path:'/:pid',
    name: 'view-prescription',
    component: ViewPrescription
  },
]

const router = new VueRouter({
  routes
})

export default router