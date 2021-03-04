System.register(["./vendor-legacy.c830061d.js"],(function(t){"use strict";var o,a,d;return{setters:[function(t){o=t.c,a=t.o,d=t.A}],execute:function(){const r={class:"markdown-body"},l=d('<h1>Radio 单选按钮</h1><h2>Radio 基本用法</h2><p>通过 <strong>v-model</strong> 绑定值当前选中项的 <strong>label</strong> ，二者一致时 <strong>Radio</strong> 选中。</p><pre><code class="language-html">&lt;nut-radio v-model=&quot;radioVal&quot; :label=&quot;b&quot;&gt;备选项1&lt;/nut-radio&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioVal:&quot;a&quot;,\n  };\n}\n</code></pre><h2>组合使用 Radio</h2><pre><code class="language-html">&lt;nut-radio v-model=&quot;radioVal&quot; :label=&quot;1&quot;&gt;备选项1&lt;/nut-radio&gt;\n&lt;nut-radio v-model=&quot;radioVal&quot; :label=&quot;2&quot;&gt;备选项2&lt;/nut-radio&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioVal:&quot;2&quot;,\n  };\n}\n</code></pre><h2>RadioGroup基本用法</h2><pre><code class="language-html">&lt;nut-radiogroup v-model=&quot;radioGroupVal&quot;&gt;\n  &lt;nut-radio label=&quot;a&quot;&gt;备选项1&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;b&quot;&gt;备选项2&lt;/nut-radio&gt;\n&lt;/nut-radiogroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioGroupVal:&quot;b&quot;,\n  };\n}\n</code></pre><h2>Radio 禁用</h2><p>通过给 <strong>disabled</strong> 传布尔值 <strong>false</strong> ，可将组件禁用</p><pre><code class="language-html">&lt;nut-radio :disabled=&quot;true&quot; label=&quot;禁用&quot;&gt;备选项1&lt;/nut-radio&gt;\n</code></pre><h2>RadioGroup 整体禁用</h2><pre><code class="language-html">&lt;nut-radiogroup v-model=&quot;radioGroupVal&quot; :animated=&quot;false&quot;&gt;\n  &lt;nut-radio label=&quot;a&quot;&gt;备选项1&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;b&quot;&gt;备选项2&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;c&quot;&gt;备选项3&lt;/nut-radio&gt;\n&lt;/nut-radiogroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioGroupVal:&quot;c&quot;,\n  };\n}\n</code></pre><h2>Radio 自定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p><pre><code class="language-html">&lt;nut-radio size=&quot;small&quot;&gt;小号&lt;/nut-radio&gt;\n&lt;nut-radio size=&quot;base&quot;&gt;默认&lt;/nut-radio&gt;\n&lt;nut-radio size=&quot;large&quot;&gt;大号&lt;/nut-radio&gt;\n</code></pre><h2>RadioGroup整体定义尺寸</h2><p>内置 <strong>small</strong>，<strong>base</strong>，<strong>large</strong> 三种规格供使用。</p><pre><code class="language-html">&lt;nut-radiogroup v-model=&quot;radioGroupVal&quot; size=&quot;large&quot;&gt;\n  &lt;nut-radio label=&quot;1&quot;&gt;备选项1&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;2&quot;&gt;备选项2&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;3&quot;&gt;备选项3&lt;/nut-radio&gt;\n&lt;/nut-radiogroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioGroupVal:&quot;2&quot;,\n  };\n}\n</code></pre><h2>禁用动效</h2><p>通过给 <strong>animated</strong> 传布尔值 <strong>false</strong> ，禁用自带动效</p><pre><code class="language-html">&lt;nut-radio :animated=&quot;false&quot; v-model=&quot;radioVal&quot; label=&quot;a&quot;&gt;备选项1&lt;/nut-radio&gt;\n&lt;nut-radio :animated=&quot;false&quot; v-model=&quot;radioVal&quot; label=&quot;b&quot;&gt;备选项2&lt;/nut-radio&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioVal: &#39;b&#39;,\n  };\n}\n</code></pre><h2>RadioGroup 禁用动效</h2><pre><code class="language-html">&lt;nut-radiogroup v-model=&quot;radioGroupVal&quot; :animated=&quot;false&quot;&gt;\n  &lt;nut-radio label=&quot;a&quot;&gt;备选项1&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;b&quot;&gt;备选项2&lt;/nut-radio&gt;\n  &lt;nut-radio label=&quot;c&quot;&gt;备选项3&lt;/nut-radio&gt;\n&lt;/nut-radiogroup&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n  return {\n    radioGroupVal: &#39;c&#39;,\n  };\n}\n</code></pre><h2>新增自定义class</h2><pre><code class="language-html">&lt;nut-radio class=&quot;my-radio&quot;&gt;备选项&lt;/nut-radio&gt;\n</code></pre><p><strong>RadioGroup</strong> 也支持新增自定义class</p><h2>Prop</h2><h3>Radio</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，与label值一致时呈选中状态</td><td>任意类型</td><td>-</td></tr><tr><td>label</td><td>标识符，与v-model值一致时呈选中状态</td><td>任意类型</td><td>-</td></tr><tr><td>size</td><td>尺寸，可选值small/base/large</td><td>String</td><td>base</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>animated</td><td>是否需要动效</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>RadioGroup</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，与label值一致时呈选中状态</td><td>任意类型</td><td>-</td></tr><tr><td>size</td><td>尺寸，可选值small/base/large</td><td>String</td><td>base</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>animated</td><td>是否需要动效</td><td>Boolean</td><td>true</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>当前选中项值（label）【设置label后有值、默认为空】,event</td></tr></tbody></table>',41);t("default",{expose:[],setup:t=>(t,d)=>(a(),o("div",r,[l]))})}}}));
