<template>
    <div class="container">{{ message }} </div>
</template>
  
<script>
export default {
    data() {
        return {
            message: "组件基础组成"
        }
    }
}
</script>
  
<!-- scoped: 让当前样式只在当前组件中生效，否则将成为全局样式 [作用域]-->
<style scoped>
.container {
    font-size: 30px;
    color: red;
}
</style>
  