
<template>
  <div>
    <h3>模版语法</h3>
    <p>{{ msg }}</p>
    <p>{{ hello }}</p>
    <br>
  </div>

  <div>
    <h3>使用JavaScript表达式</h3>
    <p :class="fontStyle">每个绑定仅支持<b>单一表达式</b>, 即 return 后的语句</p>
    <p>number:{{ number + 100 }}</p>
    <p>bool:{{ ok ? "YES" : "NO" }}</p>
    <p>split:{{ message.split("").reverse().join("") }}</p>
    <br>
  </div>


  <div>
    <h3>原始HTML: v-html </h3>
    <p>原始文本:{{ rawHtml }}</p>
    <p>渲染后HTML: <span v-html="rawHtml"></span></p>
    <p v-html="rawHtml"></p>
    <div v-html="rawHtml"></div>
    <br>
  </div>

  <div>
    <h3> 属性绑定：v-binds</h3>
    双打括号不能在 HTML attributes 中使用。
    <div v-bind:id="dynamicId" v-bind:class="dynamicClass" v-bind:title="dynamicTitle">测试AppId, null或者undefined,则属性会被移除
    </div>
    <div :id="dynamicId" :class="dynamicTitle" :title="dynamicTitle">简写</div>
    <button :disabled="isDisabled">bool属性</button>
    <div v-bind="objectOfAttrs">动态绑定多个值</div>
    <br>
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
      rawHtml: "<a href='wwww.baidu.com'>百度搜索</a>",
      dynamicClass: "appclass",
      dynamicId: "appid",
      dynamicTitle: null,
      isDisabled: false,
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      },
      fontStyle: "fontClass"
    }
  }
}

</script>


<style>
.appclass {
  color: red;
  font-size: 20px;
}

.fontClass {
  color: blue;
  font-size: medium;
}
</style>