<template>
    <h3> Slot 再续集</h3>
    <slot :msg="childmessage"></slot>
</template>

<script>
export default{
    data(){
        return{
            childmessage:"子组件数据"
        }
    }
}</script>