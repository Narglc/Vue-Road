<template>
  <!-- <UserComp></UserComp> -->
  <button @click="changeTab">切换组件</button>
  <!-- 组件保活,不被卸载 -->
  <keep-alive>
    <component :is="tabComp"></component>
  </keep-alive>
</template>

<script>
import UserComp from "./components/UserComp.vue";

import CompA from "./components/CompA.vue";
import CompB from "./components/CompB.vue";

export default{
  data(){
    return{
      tabComp:"CompA"
    }
  },
  components:{
    UserComp,
    CompA,
    CompB
  },
  methods:{
    changeTab(){
      if (this.tabComp == "CompA"){
        this.tabComp = "CompB"
      }else{
        this.tabComp = "CompA"
      }
      // 或者
      // this.tabComp = this.tabComp == "CompA"?"CompB":"CompA"
    }
  }
}

</script>