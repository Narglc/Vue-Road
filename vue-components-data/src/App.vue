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
    // 注意: 
    //    1. provide 和 injec 只能由上到下的传递
    //    2. 除了在一个组件中提供依赖, 我们还可以在整个应用层面提供依赖 (即在 main.js 中使用 provide)
    //        const app = creatApp({})
    //        app.provide("message-key","hello-val")
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