<template>
    <hr>
    <h3>子组件</h3>
    <p>从祖父组件传递过来的数据: {{ title }}</p>
</template>

<script>
export default{
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