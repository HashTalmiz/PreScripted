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
      state.prescriptions = state.prescriptions.map( x => {
         if (x.pid === payload.pid)
            return payload;
          return x;
      });
    }
  },
  actions: {
    async getPrescriptions({ commit }) {
      // localStorage.clear()
      sessionStorage.clear();

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