<template>
  <div class="home">
    <div class="content">
      <h1><b>PreScripted</b></h1>
      <h4 class="subtitle">Medical prescriptions, now in the cloud</h4>
      <p>A web app that tracks prescriptions, so you don't lose them on your next visit</p>
      <button class="butn"><router-link to="/login">Login</router-link></button>
      <button class="butn"><router-link to="/register">Sign Up</router-link> </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
$color: #fa7268;
* {
  margin: 0;
  padding: 0;
  color: white;
}

.home {
  position: absolute;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  background: url(../sass/background.svg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.content {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 5em;
}

.subtitle {
  margin: 0.25em;
}
button { 
  border:none; 
  margin: 2em 1em;
} 

.butn{
  cursor: pointer;
  display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($color, 15%);
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}



</style>