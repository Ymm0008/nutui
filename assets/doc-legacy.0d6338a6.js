System.register(["./vendor-legacy.c830061d.js"],(function(t){"use strict";var d,e,n;return{setters:[function(t){d=t.c,e=t.o,n=t.A}],execute:function(){const o={class:"markdown-body"},r=n('<h1>notify组件</h1><h3>介绍</h3><p>在页面顶部展示消息提示</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Notify } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Notify);\n</code></pre><h2>基本用法</h2><pre><code class="language-javascript">export default {\n  mounted() {\n      Notify.text(&#39;通知内容&#39;, {\n        onClosed() {\n          console.log(&#39;close&#39;);\n        },\n        onClick: () =&gt; {\n          console.log(&#39;click&#39;);\n        }\n      });\n  }\n}\n</code></pre><h2>通知类型</h2><h3>主要通知</h3><pre><code class="language-javascript">    mounted(){\n      Notify.primary(&#39;通知内容&#39;);\n    }\n</code></pre><h3>成功通知</h3><pre><code class="language-javascript">    mounted(){\n      Notify.success(&#39;通知内容&#39;);\n    }\n</code></pre><h3>危险通知</h3><pre><code class="language-javascript">    mounted(){\n      Notify.danger(&#39;通知内容&#39;);\n    }\n</code></pre><h3>警告通知</h3><pre><code class="language-javascript">    mounted(){\n      Notify.warn(&#39;通知内容&#39;);\n    }\n</code></pre><h2>自定义</h2><h3>自定义样式</h3><pre><code class="language-javascript">    mounted(){\n      Notify.text(val, {\n        color: &#39;#ad0000&#39;,\n        background: &#39;#ffe1e1&#39;\n      });\n    }\n</code></pre><h3>自定义时长</h3><pre><code class="language-javascript">    mounted(){\n      Notify.text(val, {\n        duration: 10000\n      });\n    }\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示的信息</td><td>String</td><td>空</td></tr><tr><td>message</td><td>展示文案，支持通过\\n换行</td><td>Boolean</td><td>false</td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，notify 不会消失</td><td>String</td><td>空</td></tr><tr><td>color</td><td>字体颜色</td><td>String</td><td>空</td></tr><tr><td>background</td><td>背景颜色</td><td>String</td><td>空</td></tr><tr><td>className</td><td>自定义类名</td><td>String/Number</td><td>1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>onClick</td><td>点击事件回调</td><td>无</td></tr><tr><td>onClose</td><td>关闭事件回调</td><td>无</td></tr></tbody></table>',26);t("default",{expose:[],setup:t=>(t,n)=>(e(),d("div",o,[r]))})}}}));
