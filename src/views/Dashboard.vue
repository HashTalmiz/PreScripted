<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>My Prescriptions</h4></li>
      <li v-for="rx in prescriptions" v-bind:key="rx.pid" class="collection-item">
        <div class="chip">{{rx.pid}}</div>
        {{rx.reasonForConsultation}}: {{rx.DrName}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-prescription', params: { pid:rx.pid }}"><i class="fa fa-eye"></i></router-link>
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
// import db from "@/FireBase/firebaseinit";
export default {
    name: 'dashboard',
    data() {
        return {
          prescriptions: [],
          loading: false
        }
    },
    // created () {
    //   db.collection("users").doc(firebase.auth().currentUser.uid)
    //     .collection('prescriptions')
    //     .orderBy('date')
    //     .get()
    //     .then(querySnapshot => {
    //       this.loading = false;
    //       querySnapshot.forEach(doc => {
    //         const data = {
    //           pid: doc.id,
    //           reasonForConsultation: doc.data().visit,
    //           DrName: doc.data().DrName,
    //           DrSpecialization: doc.data().DrSpecialization,
    //           date: doc.data().date,
    //           details: doc.data().details
    //           image: doc.data().image
    //         };
    //         this.prescriptions.push(data);
    //       });
    //     });
    // }
}
</script>