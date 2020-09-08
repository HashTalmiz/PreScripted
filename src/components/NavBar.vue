<template>
  <nav>
      <div class="nav-wrapper pink">
        <div class="container">
          <router-link to="/dashboard" class="brand-logo">Employee Manager</router-link>    
          <ul class="right">
            <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
            <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
             <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>

</template>
<script>
// import firebase from 'firebase';

export default {
  
  name: 'navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  
  methods: {
    
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>