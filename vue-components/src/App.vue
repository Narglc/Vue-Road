
<script>
// 1. 引入组件
import MyComponent from './components/MyComponent.vue';

// 注入组件
export default {
  components: {
    MyComponent: MyComponent
  }
}
</script>

/**
template 是必须存在
 */ 
<template>
  // 3. 显示组件, 推荐使用第一种方式
  <MyComponent />
  // 或者
  <my-component />
</template>



<style></style>
