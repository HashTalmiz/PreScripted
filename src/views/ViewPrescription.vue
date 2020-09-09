<template>
<div id="view-prescription">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{reasonForConsultation}}</h4></li>
      <li class="collection-item"><b>Prescription ID#:</b> {{pid}}</li>
      <li class="collection-item"><b>Doctor's Name:</b> {{drName}}</li>
      <li class="collection-item"><b>Doctor's Specialization:</b> {{drSpecialization}}</li>
      <li class="collection-item"><b>Date:</b> {{date}}</li>
      <li class="collection-item"><b>Details:</b><div> {{details}}</div></li>
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

    <div v-if="NotGuest" class="fixed-action-btn">
      <router-link  v-if="pid" v-bind:to="{ name: 'edit-prescription', params: { pid: pid }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
      <h5 style="display:inline" v-else>
        Guest Account Has Edit Mode Disabled
      </h5>
    <Footer/>
  </div>
   
</template>

<script>
import firebase from 'firebase';
import db from "@/firebaseSettings/firebaseinit";
import Footer from "../components/Footer";
export default {

  name: 'view-prescription',
  components: {
    Footer
  },
  computed: {
    NotGuest() {
      return firebase.auth().currentUser.email!=='guest@gmail.com'
    }
  },
  data(){
    return {
      pid: null,
      reasonForConsultation: null,
      drName: null,
      drSpecialization: null,
      date: null,
      details: null,
      image: null,
      options: {
        inline: false, navbar: true, title: false, toolbar: true, tooltip: true, movable: false, zoomable: false, rotatable: true, scalable: false, transition: true, fullscreen: true, keyboard: false
      }
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
            vm.drSpecialization = doc.data().drSpecialization;
            vm.date = doc.data().date;
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
  }
}
</script>

<style>
img {
  max-width: 100%;
}
textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 10px;
}
</style>