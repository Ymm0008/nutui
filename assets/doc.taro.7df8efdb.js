import{c as t,o as e,C as d}from"./vendor.ed841bd5.js";const o={class:"markdown-body"},a=d('<h1>Rate 评分</h1><h3>介绍</h3><p>用于快速的评级操作，或对评价进行展示。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Rate } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Rate);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-rate v-model=&quot;value&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\nsetup() {\n    const value = ref(3);\n    return { value }\n}\n</code></pre><h3>自定义icon</h3><pre><code class="language-html">&lt;nut-rate checked-icon=&quot;heart-fill1&quot; unchecked-icon=&quot;heart&quot; v-model=&quot;value&quot; /&gt;\n</code></pre><h3>自定义数量</h3><pre><code class="language-html">&lt;nut-rate :total=&quot;6&quot; v-model=&quot;value&quot; /&gt;\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html">&lt;nut-rate active-color=&quot;#FFC800&quot; v-model=&quot;value&quot; /&gt;\n</code></pre><h3>禁用状态</h3><pre><code class="language-html">&lt;nut-rate disabled v-model=&quot;value&quot; /&gt;\n</code></pre><h3>只读</h3><pre><code class="language-html">&lt;nut-rate v-model=&quot;value&quot; readOnly /&gt;\n</code></pre><h3>绑定事件</h3><pre><code class="language-html">&lt;nut-rate v-model=&quot;value&quot; @change=&quot;onChange&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\nsetup() {\n    const value = ref(3);\n    const onChange = (val)=&gt;{\n        Toast.text(val);\n    }\n    return { value }\n}\n</code></pre><h3>自定义尺寸</h3><pre><code class="language-html">&lt;nut-rate v-model=&quot;value&quot; icon-size=&quot;35&quot; /&gt;\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前 star 数，可使用 v-model 双向绑定数据</td><td>Number</td><td>-</td></tr><tr><td>count</td><td>star 总数</td><td>Number</td><td>5</td></tr><tr><td>icon-size</td><td>star 大小</td><td>Number</td><td>18</td></tr><tr><td>active-color</td><td>图标选中颜色</td><td>String</td><td>#fa200c</td></tr><tr><td>void-color</td><td>图标未选中颜色</td><td>String</td><td>#ccc</td></tr><tr><td>unchecked-icon</td><td>使用图标(未选中)</td><td>String</td><td>star-n</td></tr><tr><td>checked-icon</td><td>使用图标(选中)</td><td>String</td><td>star-fill-n</td></tr><tr><td>allow-half</td><td>是否半星</td><td>Boolean</td><td>false</td></tr><tr><td>readonly</td><td>是否只读</td><td>Boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>spacing</td><td>间距</td><td>Number</td><td>20</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前分值修改时时触发的事件</td><td>当前值</td></tr></tbody></table>',28),r={expose:[],setup:d=>(d,r)=>(e(),t("div",o,[a]))};export default r;
