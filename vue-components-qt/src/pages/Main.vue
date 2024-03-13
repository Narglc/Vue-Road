<template>
    <div class="main">
        <h3>Main</h3>
        <div>
            <Article />
            <Article />
        </div>
    </div>
</template>

<script>
import Article from "./Article.vue"

export default {
    components: {
        Article
    }
}
</script>

<style scoped>
.main {
    float: left;
    width: 70%;
    height: 600px;
    border: 5px solid #999;
    box-sizing: border-box;
    /* border-top: 1px; */
}
</style>