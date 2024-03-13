<template>
    <hr>
    <h3>子组件</h3>
    <p>从祖父组件传递过来的数据: {{ title }}</p>
    <p>从爷爷那里继承过来的东西: {{ message }}</p>
    <p>本地data的数据: {{ fullMessage }}</p>
    <p>全局数据: {{ globalData }}</p>
</template>

<script>
export default{
    inject:{
        message:{
            type:String
        },
        globalData:{
            type:String
        }
    },
    data(){
        return{
            // 从 inject 中获取数据并赋值
            fullMessage: this.message
        }
    },
    props:{
        title:{
            type:String
        }
    }
}
</script>