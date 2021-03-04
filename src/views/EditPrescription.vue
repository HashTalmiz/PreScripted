<template>
   <div id="new-prescription">
    <h3>Edit prescription</h3>
    <div class="row">
    <form @submit.prevent="updatePrescription" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Reason For Consultation" v-model="prescription.reasonForConsultation" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Dr Name" v-model="prescription.drName" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Dr Specialization" v-model="prescription.drSpecialization" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Date" v-model="prescription.date" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
            <textarea v-model="prescription.details" placeholder="Details" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="row">
        <input type="file" accept="image/*" @change="onFileUpload">
        <button @click.prevent="image=null" class="btn red">Remove Image</button>
        <div v-if="image" v-viewer="this.options">
          <img :src="image" alt="Prescription Image" />
        </div>  
        <div v-else>No image uploaded</div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <button @click="deleteEmployee" class="btn right red">Delete Prescription</button>

      <router-link to="/dashboard" class="btn grey">Cancel</router-link>
    </form>
  </div>
  <Footer/>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from "@/firebaseSettings/firebaseinit";
import Footer from "../components/Footer";
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';


export default {
    name:'edit-prescription',
    components: {
      Footer
    },
    beforeMount() {
      this.retrievePrescription();
    },
    data () {
      return {
        prescription: {},
        image: null,
        options: {
            inline: false, navbar: true, title: false, toolbar: true, tooltip: true, movable: false, zoomable: false, rotatable: true, scalable: false, transition: true, fullscreen: true, keyboard: false
        }
      }
    },
    // beforeRouteEnter (to, from, next) {
    //   db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where(firebase.firestore.FieldPath.documentId(), '==', to.params.pid).get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       next(vm => {
    //         vm.reasonForConsultation = doc.data().reasonForConsultation;
    //         vm.drName = doc.data().drName;
    //         vm.drSpecialization = doc.data().drSpecialization;
    //         vm.date = doc.data().drSpecialization;
    //         vm.details = doc.data().details;
    //         vm.image = doc.data().image;
    //       })
    //     })
    //   })
    // },
    watch: {
      '$route': 'retrievePrescription'
    },
    computed: {
      ...mapGetters([
        'getPrescriptionByPid',
      ])
    },
    methods: {
      ...mapMutations([
      'updatePrescription',
      'deletePrescription', //also supports payload `this.nameOfMutation(amount)` 
    ]),
    retrievePrescription() {
      this.prescription = this.getPrescriptionByPid(this.$route.params.pid)
      this.image = this.prescription.image
    },
      onFileUpload(event) {
          const image = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image)
          reader.onload = e => {
            this.image = e.target.result;
          }
        },
      // fetchData () {
      //   db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where('prescription_id', '==', this.$route.params.prescription_id).get().then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       this.reasonForConsultation = doc.data().reasonForConsultation
      //       this.drName = doc.data().drName
      //       this.drSpecialization = doc.data().drSpecialization
      //       this.date = doc.data().date // ADD DATE HERE WITH NEW LOGIC().
      //       this.details = doc.data().details
      //       this.image = doc.data().image
      //     })
      //   })
      // },
      updatePrescription () {
        db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').where(firebase.firestore.FieldPath.documentId(), '==', this.$route.params.pid).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
                reasonForConsultation: this.prescription.reasonForConsultation,
                drName: this.prescription.drName,
                drSpecialization: this.prescription.drSpecialization,
                date: this.prescription.date, 
                details: this.prescription.details,
                image: this.image,
            })
            .then(() => {
              this.updatePrescription({
                ...this.prescription,
                image: this.image
              })
              this.$router.push({ name: 'view-prescription', params: { pid: this.$route.params.pid }})
            });
          })
        })
      },
      deleteEmployee() {
      if (confirm('Are you sure?')) {
        db.collection("users").doc(firebase.auth().currentUser.uid)
          .collection('prescriptions')
          .where(firebase.firestore.FieldPath.documentId(), '==', this.$route.params.pid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              // this.deletePrescription(this.$route.params.pid);
              console.log("Deleted Prescription")
              this.$router.push('/dashboard');
            });
          });
      }
    }
    },
}

</script>

<style scoped>
.btn {
  margin: 0 5px;
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