<template>
    <h3>事件修饰符</h3>
    <div>
        <p> @click.prevent 阻止默认事件</p>
        <a @click.prevent="clickHandle" href="https://www.baidu.com">百度</a>
    </div>

    <div @click="clickDiv">
        <p>阻止事件冒泡</p>
        <p @click.stop="clickP"> 测试冒泡 </p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        clickHandle(e) {
            // 阻止默认事件,也可在click处理
            // e.preventDefault();
            console.log("点击了");
        },
        clickDiv() {
            console.log("Div");
        },
        clickP(e) {
            // 阻止事件冒泡，即 会向上触发导致 clickDiv方法也会执行 
            // e.stopPropagation();
            console.log("P");
        }
    }
}
</script>