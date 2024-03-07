<template>
  <!-- <Header />
  <Main />
  <Aside /> -->
  <Parent />
</template>

<script>
// import Header from "./pages/Header.vue"
// import Main from "./pages/Main.vue"
// import Aside from "./pages/Aside.vue"

import Parent from './components/Parent.vue';
import Child from './components/Child.vue';

export default {
  components: {
    // Header,
    // Main,
    // Aside
    Parent,
    Child
  }
}
</script>

<style scoped></style>
