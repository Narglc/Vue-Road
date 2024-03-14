<template>
    <Header />
    <Main />
    <Aside />
  </template>
  
<script>
import Header from "./Header.vue"
import Main from "./Main.vue"
import Aside from "./Aside.vue"

export default {
    components: {
        Header,
        Main,
        Aside
    }
}
</script>