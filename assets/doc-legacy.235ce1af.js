System.register(["./vendor-legacy.fc686e0d.js"],(function(t){"use strict";var e,d,o;return{setters:[function(t){e=t.c,d=t.o,o=t.B}],execute:function(){const n={class:"markdown-body"},u=o('<h1>InputNumber 数字输入框</h1><h3>介绍</h3><p>通过点击按钮控制数字增减。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { InputNumber,Icon } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(InputNumber).use(Icon);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p>初始化一个默认值</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\n\nexport default {\n  setup() {\n    const value = ref(1);\n    return { value };\n  },\n};\n</code></pre><h3>步长设置</h3><p>设置步长 <code>step</code> 5</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; step=&quot;5&quot; /&gt;\n</code></pre><h3>限制输入范围</h3><p><code>min</code> 和 <code>max</code> 属性分别表示最小值和最大值</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; min=&quot;10&quot; max=&quot;20&quot; /&gt;\n</code></pre><h3>禁用状态</h3><p><code>disabled</code> 禁用状态下无法点击按钮或修改输入框。</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; disabled /&gt;\n</code></pre><h3>只读禁用输入框</h3><p><code>readonly</code> 设置只读禁用输入框输入行为</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; readonly /&gt;\n</code></pre><h3>支持小数点</h3><p>设置步长 <code>step</code> 0.1 <code>decimal-places</code> 小数保留1位</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot; step=&quot;0.1&quot; decimal-places=&quot;1&quot; /&gt;\n</code></pre><h3>支持异步修改</h3><p>通过 <code>change</code> 事件和 <code>model-value</code> 进行异步修改</p><pre><code class="language-html">&lt;nut-inputnumber :model-value=&quot;value&quot; @change=&quot;onChange&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\n\nexport default {\n  setup() {\n    const value = ref(1);\n    const onChange = (value: number) =&gt; {\n      setTimeout(() =&gt; {\n        value.value = value;\n      }, 2000);\n    };\n    return { value,onChange };\n  },\n};\n</code></pre><h3>自定义按钮大小</h3><p>设置步长 <code>step</code> 0.1 <code>decimal-places</code> 小数保留1位</p><pre><code class="language-html">&lt;nut-inputnumber v-model=&quot;value&quot;  button-size=&quot;30&quot; input-width=&quot;50&quot; /&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>初始值</td><td>String、Number</td><td>-</td></tr><tr><td>input-width</td><td>输入框宽度</td><td>String</td><td><code>40px</code></td></tr><tr><td>button-size</td><td>操作符+、-尺寸</td><td>String</td><td><code>20px</code></td></tr><tr><td>min</td><td>最小值限制</td><td>String、Number</td><td><code>1</code></td></tr><tr><td>max</td><td>最大值限制</td><td>String、Number</td><td><code>9999</code></td></tr><tr><td>step</td><td>步长</td><td>String、Number</td><td><code>1</code></td></tr><tr><td>decimal-places</td><td>设置保留的小数位</td><td>String、Number</td><td><code>0</code></td></tr><tr><td>disabled</td><td>禁用所有功能</td><td>Boolean</td><td>false</td></tr><tr><td>readonly</td><td>只读状态禁用输入框操作行为</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>点击增加按钮时触发</td><td>event: Event</td></tr><tr><td>reduce</td><td>点击减少按钮时触发</td><td>event: Event</td></tr><tr><td>overlimit</td><td>点击不可用的按钮时触发</td><td>event: Event</td></tr><tr><td>change</td><td>值改变时触发</td><td>value: number , event : Event</td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td>event: Event</td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td>event: Event</td></tr></tbody></table>',37);t("default",{expose:[],setup:t=>(t,o)=>(d(),e("div",n,[u]))})}}}));
