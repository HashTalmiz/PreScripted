<template>
   <div id="new-prescription">
    <h3>Edit prescription</h3>
    <div class="row">
    <form @submit.prevent="updatePrescription" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="reasonForConsultation" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="drName" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="drSpecialization" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="date" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
            <textarea v-model="details" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="row">
        <input type="file" accept="image/*" @change="onFileUpload">
        <button @click.prevent="image=null">Remove Image</button>
        <div v-if="image" v-viewer="this.options">
          <img :src="image" alt="Prescription Image" />
        </div>  
        <div v-else>No image uploaded</div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/dashboard" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from "@/Firebase/firebaseinit";

export default {
    name:'edit-prescription',
    data () {
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
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where('pid', '==', to.params.pid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.pid = doc.data().pid;
            vm.reasonForConsultation = doc.data().reasonForConsultation;
            vm.drName = doc.data().drName;
            vm.drSpecialization = doc.dat().drSpecialization;
            vm.date = doc.data().drSpecialization;
            vm.details = doc.data().details;
            vm.image = doc.data().image;
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      onFileUpload(event) {
          const image = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image)
          reader.onload = e => {
            this.image = e.target.result;
          }
        },
      fetchData () {
        db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where('prescription_id', '==', this.$route.params.prescription_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.pid = doc.data().pid
            this.reasonForConsultation = doc.data().reasonForConsultation
            this.drName = doc.data().drName
            this.drSpecialization = doc.data().drSpecialization
            this.date = doc.data().date // ADD DATE HERE WITH NEW LOGIC().
            this.details = doc.data().details
            this.image = doc.data().image
          })
        })
      },
      updatePrescription () {
        db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where('pid', '==', this.$route.params.pid).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
                reasonForConsultation: this.reasonForConsultation,
                drName: this.drName,
                drSpecialization: this.drSpecialization,
                date: this.date, 
                details: this.details,
                image: this.image,
            })
            .then(() => {
              this.$router.push({ name: 'view-prescription', params: { pid: this.pid }})
            });
          })
        })
      }
    },
}

</script>

<style>

</style>