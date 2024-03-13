<template>
    <h3>style 绑定</h3>
    <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定对象</p>

    <p :style="styleObject">绑定对象：更推荐使用</p>
</template>

<script>
export default {
    data() {
        return {
            activeColor: 'green',
            fontSize: 24,
            // 更推荐
            styleObject: {
                color: 'red',
                fontSize: '25px'
            }
        }

    }
}
</script>