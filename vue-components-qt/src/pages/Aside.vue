<template>
    <div class="aside">
        <h3>Aside</h3>
        <div>
            <Item />
            <Item />
            <Item />
        </div>
    </div>
</template>

<script>
import Item from "./Item.vue"
export default {
    components: {
        Item
    }
}
</script>

<style scoped>
.aside {
    float: right;
    width: 30%;
    height: 600px;
    border: 5px dotted #999;
    box-sizing: border-box;
}
</style>