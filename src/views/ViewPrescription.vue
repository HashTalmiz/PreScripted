<template>
<div id="view-prescription">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{reasonForConsultation}}</h4></li>
      <li class="collection-item">Prescription ID#: {{pid}}</li>
      <li class="collection-item">Doctor's Name: {{drName}}</li>
      <li class="collection-item">Doctor's Specialization: {{drSpecialization}}</li>
      <li class="collection-item">Date: {{date}}</li>
      <li class="collection-item">Details: {{details}}</li>
      <div class="row">
        <div v-if="image" v-viewer="this.options">
          <img :src="image" alt="image" />
        </div>
        <div v-else>
          No Image uploaded
        </div>  
      </div>
    </ul>
    <router-link to="/dashboard" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-if="pid" v-bind:to="{ name: 'edit-prescription', params: { pid: pid }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from "@/Firebase/firebaseinit";

export default {

  name: 'view-prescription',
  data(){
    return {
      pid: null,
      reasonForConsultation: null,
      drName: null,
      drSpecialization: null,
      date: null,
      details: null,
      image: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("users").doc(firebase.auth().currentUser.uid)
      .collection('prescriptions')
      .where('pid', '==', to.params.pid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.pid = doc.data().pid;
            vm.reasonForConsultation = doc.data().reasonForConsultation;
            vm.drName = doc.data().drName;
            vm.drSpecialization = doc.dat().drSpecialization;
            vm.date = doc.data().drSpecialization;
            vm.details = doc.data().details;
            vm.image = doc.data().image;
          });
        });
      });
  },
  watch: {
    $route: 'fetchData' 
    //that is for reacting to changes in route params. 
    //If this app had any system to go to pid from the same compoent then as the page does not refresh the employee_id won't change in this component state  
    //that is why to react to that route param change we need watcher
  },
  methods: {
    fetchData() {
      db.collection("users").doc(firebase.auth().currentUser.uid)
        .collection('prescriptions')
        .where('pid', '==', this.$route.params.pid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.pid = doc.data().pid,
            this.reasonForConsultation = doc.data().reasonForConsultation,
            this.drName = doc.data().drName,
            this.date = doc.data().drSpecialization,
            this.details = doc.data().details,
            this.image = doc.data().image
          });
        });
    },
    deleteEmployee() {
      if (confirm('Are you sure?')) {
        db.collection("users").doc(firebase.auth().currentUser.uid)
          .collection('prescriptions')
          .where('pid', '==', this.$route.params.pid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/dashboard');
            });
          });
      }
    }
  }
}
</script>

<style>

</style>