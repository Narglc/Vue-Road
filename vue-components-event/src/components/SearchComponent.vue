<template>
    <h3>搜索页</h3>
    搜索: <input type="text" v-model="search">
</template>

<script>
export default{
    data(){
        return{
            search:""
        }
    },
    // 侦听器
    watch:{
        search(newVal,oldVal){
            this.$emit("searchEvent", newVal)
        }
    }
}
</script>