<template>
  <button @click="changTabComp">切换父组件</button>
  <component :is="tabCompList[count]"></component>
</template>

<script>
import View from "./pages/View.vue"

import Parent from './components/Parent.vue';

import CompontentA from './components/ComponentA.vue'

export default {
  data(){
    return{
      tabCompList:["View","Parent","CompontentA"],
      count:0
    }
  },
  methods:{
    changTabComp(){
      this.count = (this.count + 1) % this.tabCompList.length
    }
  },
  components: {
    View,
    Parent,
    CompontentA
  }
}
</script>

<style scoped></style>
