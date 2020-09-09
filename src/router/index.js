import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard.vue";
import NewPrescription from "../views/NewPrescription.vue";
import EditPrescription from "../views/EditPrescription.vue";
import ViewPrescription from "../views/ViewPrescription";
import Login from "../views/Login";
import Register from "../views/Register";
import firebase from "firebase";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/new',
    name: 'new-prescription',
    component: NewPrescription,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/edit/:pid',
    name: 'edit-prescription',
    component: EditPrescription,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/:pid',
    name: 'view-prescription',
    component: ViewPrescription,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  routes
})

//Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router
