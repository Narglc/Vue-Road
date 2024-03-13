<template>
  <h3> 祖宗 </h3>
  <Parent :title="titleStr"/>
</template>

<script>
import Parent from './components/Parent.vue';

export default{
  components:{
    Parent
  },
  data(){
    return{
      titleStr:"我也不知道该用什么标题"
    }
  }
}

</script>