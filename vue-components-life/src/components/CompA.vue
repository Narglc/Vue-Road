<template>
    <h3>CompA</h3>
    <p>{{ message }}</p>
    <button @click="updateData">更新数据</button>
</template>

<script>
export default{
    data(){
        return{
            message:"老数据"
        }
    },
    beforeUnmount(){
        console.log("组件卸载之前");
    },
    unmounted(){
        console.log("组件卸载之后");
    },
    methods:{
        updateData(){
            this.message="变更为新数据了"
        }
    }
}
</script>