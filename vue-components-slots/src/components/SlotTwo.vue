<template>
    <h3> Slot 续集</h3>
    <hr>
    <slot name="slot1_part">具名插槽</slot>
    <hr>
    <slot>
        <p>2.[插槽默认值] 如果父组件没有传递插槽,可使用此部分的默认值进行显示</p>
    </slot>
    <hr>
    <slot name="slot2_part"></slot>
    
</template>

<script>
export default{
    data(){
        return{

        }
    }
}</script>