<template>
    <h3> Slot 续集</h3>
    <hr>
    <slot>
        <p>2.[插槽默认值] 如果父组件没有传递插槽,可使用此部分的默认值进行显示</p>
    </slot>
    <hr>
    <slot></slot>
</template>

<script>
export default{
    data(){
        return{

        }
    }
}</script>