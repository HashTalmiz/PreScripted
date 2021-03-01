import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import db from "@/firebaseSettings/firebaseinit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prescriptions: []
  },
  mutations: {
    updatePrescriptions: (state, payload)=> {
      state.prescriptions = payload;
    }
  },
  actions: {
    async getPrescriptions({state, commit}) {
      if(state.prescriptions.length) 
        return;

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
       
      return commit('updatePrescriptions',prescriptions);
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