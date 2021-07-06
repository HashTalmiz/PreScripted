<template>
  <div id="app">
  <nav-bar/>
  <div class="">
    <router-view/>
  </div>
  </div>
</template>

<script>
import NavBar  from "./components/NavBar";
export default {
  components: {
    NavBar,
  },
  created() {
    document.title = 'PreScripted | Your Prescriptions now safe in the cloud'
  }
}
</script>

<style>

</style>