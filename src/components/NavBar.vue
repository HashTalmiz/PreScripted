<template>
  <nav>
      <div class="nav-wrapper pink">
        <div class="container">
          <router-link to="/"><b style="font-size: 2rem">PreScripted</b></router-link>    
          <ul class="right">
            <li v-if="isLoggedIn"><span class="email white-text hide-on-small-only">{{currentUser}}</span></li>
            <li v-if="isLoggedIn"><router-link to="/dashboard" >Dashboard</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/login" class="yellow-text">Login</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/register" class="yellow-text">Register</router-link></li>
             <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>

</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  
  name: 'navbar',
 data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style lang="scss" scoped>

.email {
  padding-right: 10px;
}
</style>