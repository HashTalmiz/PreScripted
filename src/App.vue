<template>
  <div id="app">
  <nav-bar/>
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
import NavBar  from "./components/NavBar";
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>