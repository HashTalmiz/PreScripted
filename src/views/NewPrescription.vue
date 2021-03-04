<template>
  <div id="new-prescription">
    <h3>New prescription</h3>
    <div class="row">
    <form @submit.prevent="savePrescription" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="prescription.reasonForConsultation" required>
          <label>Reason For Consultation</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="prescription.drName" required>
          <label>Doctor's Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="prescription.drSpecialization" required>
          <label>Dr's Specialization</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="prescription.date" required>
          <label>Date</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="prescription.details" cols="30" rows="10"></textarea>
          <label>Details</label>
        </div>
      </div>
      <div class="row">
        <input type="file" accept="image/*" @change="onFileUpload">
        <button @click.prevent="image=null" class="btn pink">Remove Image</button>
        <div v-if="image" v-viewer="this.options">
          <img :src="image" alt="img" />
        </div>
        <div v-else>
          No Image uploaded
        </div>  
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/dashboard" class="btn grey">Cancel</router-link>
    </form>
  </div>
  <Footer/>
  </div>
</template>

<script>
  // import firebase from "firebase";
  // import db from "@/firebaseSettings/firebaseinit";
  import Footer from "../components/Footer";
      import { mapActions } from 'vuex';

    export default {
      name: 'new-prescription',
      components: {
        Footer
      },
      data () {
        return {
          prescription: {},
          image:null, // two way binding isnt reactive inside the pres obj, so i kept it out
          options: {
            inline: false, navbar: true, title: false, toolbar: true, tooltip: true, movable: false, zoomable: false, rotatable: true, scalable: false, transition: true, fullscreen: true, keyboard: false
          }
        }
      },
      
          
      methods: {
        ...mapActions([
            'addPrescription', //also supports payload `this.nameOfAction(amount)` 
          ]),
        onFileUpload(event) {
          const image = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image)
          reader.onload = e => { 
            this.image = e.target.result;
          }
        },

        async savePrescription () {
           await this.addPrescription({
             ...this.prescription,
             image: this.image,
          })
            this.$router.push(`/dashboard`)
            // this.$router.push(`/${docRef.id}`)

          // .then(docRef => {
          // })
          // db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').add({
          //   reasonForConsultation: this.reasonForConsultation,
          //   drName: this.drName,
          //   drSpecialization: this.drSpecialization,
          //   date: this.date, // ADD DATE HERE WITH NEW LOGIC
          //   details: this.details,
          //   image: this.image,
          //   // createdAt: db.FieldValue.serverTimestamp()
          // })
          // .then(docRef => {
          //   this.$router.push(`/${docRef.id}`)
          // })
          // .catch(error => {
          //   console.error('Error adding prescription: ', error)
          // })
        },
      }
    }
</script>
<style scoped>
img {
  max-width: 100%;
}
.btn {
  margin: 0 5px;
}
</style>