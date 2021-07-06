<template>
  <div id="home" class="container">
      <h4 class="collection-header">My Prescriptions</h4>
    <ul v-for="rx in prescriptions" v-bind:key="rx.pid" class="collection with-header">
      <router-link v-bind:to="{ name: 'view-prescription', params: { pid:rx.pid }}">
      <li class="collection-item">
        <h6>{{rx.reasonForConsultation}}</h6>
        <div class="chip pink white-text">{{rx.date}}</div>
        <div class="chip blue yellow-text">{{rx.drName}}</div>
        <div class="chip yellow blue-text">{{rx.drSpecialization}}</div>
      </li>
         </router-link>
    </ul>
      <div v-if="!isGuest" class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large red">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
      <div v-else class="fixed-action-btn">
        <p> Adding new prescription is disabled in Guest Account</p>
      </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import db from "@/firebaseSettings/firebaseinit";
import { mapActions } from 'vuex';
  import { mapState } from 'vuex';


  
export default {
    name: 'dashboard',
    data() {
        return {
          // prescriptions: [],
          // loading: true
        }
    },
    computed: {
      ...mapState([
        'prescriptions',
      ]),
      isGuest() {
        return firebase.auth().currentUser.email==='guest@gmail.com'
      },
    },
    methods: {
    ...mapActions([
      'getPrescriptions', //also supports payload `this.nameOfAction(amount)` 
    ])
  },
    async created () {
      await this.getPrescriptions()
    }
}

</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>