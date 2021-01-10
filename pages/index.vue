<template>
  <section class="container">
    <div>
      <h2>Write to Firestore.</h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
    <div>
      <h2>Read from Firestore.</h2>
      <div>
        <button @click="readFromFirestore" :disabled="readSuccessful">
          <span v-if="!readSuccessful">Read now</span>
          <span v-else>Successful!</span>
        </button>
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: "",
    };
  },
  methods: {
    async readFromFirestore() {
      const ref = this.$fire.firestore.collection("test").doc("test");
      let snap;
      try {
        snap = await ref.get();
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.text = snap.data().text;
      this.readSuccessful = true;
    },
    async writeToFirestore() {
      const ref = this.$fire.firestore.collection("test").doc("test");
      const document = {
        text: "This is a test message saying LOL.",
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
  },
};
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>