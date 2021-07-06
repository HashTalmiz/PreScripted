<template>
  <div class="container">
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel pink white-text center">
          <h3>Login</h3>
          <form action="index.html">
            <div class="input-field white-text">
              <i class="material-icons prefix">email</i>
              <input placeholder="Email" type="email" id="email" class="white-text" v-model="email">
              <!-- <label class="white-text" for="email">Email Address</label> -->
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input placeholder="Password" type="password" id="password" class="white-text" v-model="password">
              <!-- <label class="white-text" for="password">Password</label> -->
            </div>
            <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
            <button @click="guestLogin" class="btn btn-large grey lighten-4 black-text" style="margin-left: 10px">Login as Guest</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {

  },
  methods: {
    setGuestCredentials() {
      this.email = 'guest@gmail.com';
      this.password = 'guest123'
    },
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          result => {
            alert(`You are logged in as ${result.user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    guestLogin(event) {
      this.setGuestCredentials();
      this.login(event)
    },
  }
};
</script>
