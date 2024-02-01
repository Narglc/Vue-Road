
<template>
  <div>
    <h3>模版语法</h3>
    <p>{{ msg }}</p>
    <p>{{ hello }}</p>
    <br>
  </div>

  <div>
    <h3>使用JavaScript表达式</h3>
    <font color="red">每个绑定仅支持<b>单一表达式</b></font>, 即 return 后的语句
    <p>number:{{ number + 100 }}</p>
    <p>bool:{{ ok ? "YES" : "NO" }}</p>
    <p>split:{{ message.split("").reverse().join("") }}</p>
  </div>


  <div>
    <h3>原始HTML: v-html </h3>
    <p>原始文本:{{ rawHtml }}</p>
    <p>渲染后HTML: <span v-html="rawHtml"></span></p>
    <p v-html="rawHtml"></p>
    <div v-html="rawHtml"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "神奇的语法:`文本插值`",
      hello: "hello world",
      number: 10,
      ok: true,
      message: "大家好",
      rawHtml: "<a href='wwww.baidu.com'>百度搜索</a>"
    }
  }
}

</script>
