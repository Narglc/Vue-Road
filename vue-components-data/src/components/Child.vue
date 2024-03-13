<template>
    <hr>
    <h3>子组件</h3>
    <p>从祖父组件传递过来的数据: {{ title }}</p>
    <p>从爷爷那里继承过来的东西: {{ message }}</p>
</template>

<script>
export default{
    inject:{
        message:{
            type:String
        }
    },
    data(){
        return{
            
        }
    },
    props:{
        title:{
            type:String
        }
    }
}
</script>