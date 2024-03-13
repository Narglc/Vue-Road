<template>
  <SlotBase>
    <h3> 插槽标题</h3>
    <p> 插槽内容</p>
  </SlotBase>
</template>

<script>
import SlotBase from "./components/SlotBase.vue"
export default{
  components:{
    SlotBase
  }
}
</script>

<style>
</style>