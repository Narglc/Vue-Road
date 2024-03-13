<template>
    <h3>透传属性: 使用场景很少</h3>
</template>

<script>
export default{
    // 禁止父子组件间的属性继承
    inheritAttrs:false,
    data(){
        return{

        }
    }
}</script>

<style>
.attr-container{
    color: red;
}</style>