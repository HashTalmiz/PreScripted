<template>
  <footer>
      <div>© PreScripted {{year}} | Talmiz Ahmed</div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear() 
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
    font-size: 1.2rem;
    padding: 3em 0;
    text-align: center;
}
</style>