<template>
    <h3> Slot 再续集</h3>
    <slot :msg="childmessage"></slot>

    <slot name="nameSlot" :msg="nameSlotMsg"></slot>

    <slot name="main" :job="jobMsg"></slot>
</template>

<script>
export default{
    data(){
        return{
            childmessage:"子组件数据",
            nameSlotMsg:"具名插槽的子组件数据",
            jobMsg:"工作内容"
        }
    }
}</script>