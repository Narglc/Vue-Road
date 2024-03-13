<template>
  <!-- <SlotBase>
    <h3> 插槽标题</h3>
    <p> 插槽内容</p>
  </SlotBase> -->

  <!-- <SlotTwo>
    <template v-slot:slot1_part>
      <p>1.[插槽动态数据] 插槽中的动态数据要在父组件中定义</p>
      <h3>{{message}}</h3>
    </template>
    <template #slot2_part>
      <p> 内容二</p>
    </template>
  </SlotTwo> -->

  <SlotAttr v-slot="slotProps">
    <h3>{{ currentText }} - {{ slotProps.msg }}</h3>
  </SlotAttr>
</template>

<script>
import SlotBase from "./components/SlotBase.vue"
import SlotTwo  from "./components/SlotTwo.vue"
import SlotAttr from "./components/SlotAttr.vue"

export default{
  data(){
    return{
      message:"插槽的内容",
      currentText:"父组件数据"
    }
  },
  components:{
    SlotBase,
    SlotTwo,
    SlotAttr
  }
}
</script>

<style>
</style>