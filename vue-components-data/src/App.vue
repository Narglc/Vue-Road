<template>
  <h3> 祖宗 </h3>
  <Parent :title="titleStr"/>
</template>

<script>
import Parent from './components/Parent.vue';

export default{
  // provide:{
  //   message:"爷爷的财产"
  // },
  provide(){
    // 使用函数的形式，可以访问到this数据
    return{
      message: this.otherData
    }
  },
  components:{
    Parent
  },
  data(){
    return{
      titleStr:"我也不知道该用什么标题",
      otherData:"其他的可变数据"
    }
  }
}

</script>