import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import db from "@/firebaseSettings/firebaseinit";
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    prescriptions: []
  },
  mutations: {
    populatePrescriptions: (state, payload)=> {
      state.prescriptions = payload;
    },
    addPrescription: (state, payload) => {
      state.prescriptions.push(payload);
    },
    deletePrescription: (state, payload) => {
      state.prescriptions = state.prescriptions.filter(item => item.pid !== payload);
    },
    updatePrescription: (state, payload) => {
      state.prescriptions = state.prescriptions.map(x => {
         if (x.pid === payload.pid)
            return payload;
          return x;
      });
    }
  },
  actions: {
    async getPrescriptions({ commit }) {
      // if(state.prescriptions.length) // Add this when triggers to listen to changes are setup 
        // return;

      sessionStorage.clear(); // Vuex locally stored in the session for persistence

      const querySnapshot = await db.collection("users").doc(firebase.auth().currentUser.uid)
      .collection('prescriptions')
      .get();
        
      const prescriptions = []
      querySnapshot.forEach(doc=> {
          prescriptions.push({
            pid: doc.id,
            ...doc.data()
          });
      });
       
      commit('populatePrescriptions',prescriptions);
    },
    async addPrescription({ commit }, payload) {
      const docRef = await db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').add({
        ...payload,
        // createdAt: db.FieldValue.serverTimestamp()
      })
      // await dispatch('getPrescriptions');
      commit('addPrescription', {pid: docRef.id,...payload})
        // .catch(error => {
          // console.error('Error adding prescription: ', error)
        // })

      // return docRef;
    },
    async updatePrescription({ commit }, payload) {
      const {pid, ...prescriptionData} = payload;
      

      await db.collection("users").doc(firebase.auth().currentUser.uid).collection('prescriptions').doc(pid)
        .update(prescriptionData)
        commit('updatePrescription', payload);
    },
    async deletePrescription( { commit }, pid) {
      const querySnapshot = await db.collection("users").doc(firebase.auth().currentUser.uid)
        .collection('prescriptions')
        .where(firebase.firestore.FieldPath.documentId(), '==', pid)
        .get()
        
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
          commit('deletePrescription',pid)
    }
  },
  getters: {
    getPrescriptionByPid: (state) => (pid) => {
      return state.prescriptions.find(pres => pres.pid === pid)
    }
  },
  modules: {
  }
})