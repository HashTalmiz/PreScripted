<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>My Prescriptions</h4></li>
      <li v-for="rx in prescriptions" v-bind:key="rx.pid" class="collection-item">
        <div class="chip">{{rx.pid}}</div>
        {{rx.reasonForConsultation}}: {{rx.DrName}} 
         <router-link v-if="!loading" class="secondary-content" v-bind:to="{ name: 'view-prescription', params: { pid:rx.pid }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/Firebase/firebaseinit";

export default {
    name: 'dashboard',
    data() {
        return {
          prescriptions: [],
          loading: true
        }
    },
    created () {
      db.collection("users").doc(firebase.auth().currentUser.uid)
        .collection('prescriptions')
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            const data = {
              pid: doc.id,
              reasonForConsultation: doc.data().reasonForConsultation,
              DrName: doc.data().drName,
              DrSpecialization: doc.data().drSpecialization,
              date: doc.data().date,
            };
            this.prescriptions.push(data);
          });
              this.loading = false;
        });
    }
}
</script>