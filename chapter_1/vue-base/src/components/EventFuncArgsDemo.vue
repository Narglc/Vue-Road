<template>
    <h3>事件传参</h3>
    <div>
        <button @click="addCount('hello')">Add</button>
        <p>您点击了 {{ count }} 次! </p>
    </div>
    <div>
        <p>如果要传参event, 则只能放在最后，且$不能丢</p>
        <p @click="getNameHandlcer(item, $event)" v-for="(item, idx) of names" :key="idx">{{ item }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            names: ["narglc", "jacques", "lolita"]
        }
    },
    // 所有的方法或函数都放在这里
    methods: {
        addCount(msg) {
            // Vue 中的event对象，就是原生JS的Event对象，（名字随便起）
            console.log(msg)
            this.count += 1
        },
        getNameHandlcer(name, e) {
            console.log(name)
            console.log(e);
        }
    }
}
</script>