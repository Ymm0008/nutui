import{c as t,o as e,A as n}from"./vendor.e0b7d5c2.js";const u={class:"markdown-body"},o=n('<h1>Menu 菜单组件</h1><h3>介绍</h3><p>下拉选择菜单组件</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Menu } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Menu);\n\n</code></pre><h2>代码演示</h2><h3>基础用法1</h3><p><code>Menu</code> 属性支持传入列表数据menuList和title名称设置。</p><pre><code class="language-html">&lt;nut-menu&gt;\n  &lt;nut-menu-item :menuList=&quot;menuList&quot; title=&quot;最新商品&quot; &gt;&lt;/nut-menu-item&gt;\n  &lt;nut-menu-item :menuList=&quot;menuList&quot; :title=&quot;title&quot; &gt;&lt;/nut-menu-item&gt;\n&lt;/nut-menu&gt;\n</code></pre><pre><code class="language-js"> setup() {\n    const resData = reactive({\n      title: &#39;热门推荐&#39;,\n      menuList: [\n        {value: &#39;手机&#39;},\n        {value: &#39;电脑&#39;},\n        {value: &#39;家用电器&#39;},\n        {value: &#39;日用百货&#39;}\n      ]\n    });\n }\n\n</code></pre><h3>菜单多列展示</h3><p><code>Menu</code> 的 <code> multiStyle</code> 属性配置1列、2列、3列展示菜单列表，默认单列展示。 <code>maxHeight</code> 属性可控制菜单列表的最大高度。</p><pre><code class="language-html">&lt;nut-menu&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList2&quot; title=&quot;单列展示&quot; multiStyle=&quot;1&quot; maxHeight=&quot;200&quot;&gt;&lt;/nut-menu-item&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList2&quot; title=&quot;双列展示&quot;  multiStyle=&quot;2&quot;&gt;&lt;/nut-menu-item&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList2&quot; title=&quot;三列展示&quot;  multiStyle=&quot;3&quot;&gt;&lt;/nut-menu-item&gt;\n&lt;/nut-menu&gt;\n</code></pre><h3>禁用操作</h3><p><code>Menu</code> 的 <code>disabled</code> 属性可对菜单列表进行禁用操作。 <code>autoClose</code> 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。</p><pre><code class="language-html">&lt;nut-menu&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList&quot; title=&quot;最新商品&quot;&gt;&lt;/nut-menu-item&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList&quot; :title=&quot;title&quot; :autoClose=&quot;false&quot;&gt;&lt;/nut-menu-item&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList2&quot; title=&quot;筛选&quot; disabled &gt;&lt;/nut-menu-item&gt;\n&lt;/nut-menu&gt;\n</code></pre><h3>禁止蒙层展示</h3><p>属性<code>hasMask</code>控制是否有蒙层，默认为 <code>true</code>展示蒙层</p><pre><code class="language-html">&lt;nut-menu :hasMask=&quot;false&quot;&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList&quot; title=&quot;最新商品&quot;&gt;\n    &lt;/nut-menu-item&gt;\n    &lt;nut-menu-item :menuList=&quot;menuList&quot; :title=&quot;title&quot;&gt;\n    &lt;/nut-menu-item&gt;\n&lt;/nut-menu&gt;\n</code></pre><h3>点击事件</h3><p><code>Menu</code> 的 <code>@menu-click</code> 事件返回点击的菜单标题，<code>@on-change</code>事件返回菜单列表选中的数据。</p><pre><code class="language-html">&lt;nut-menu&gt;\n    &lt;nut-menu-item\n        :menuList=&quot;menuList2&quot;\n        title=&quot;选择菜单列表项&quot;\n        multiStyle=&quot;2&quot;\n        @menu-click=&quot;alertText($event, &#39;title&#39;)&quot;\n        @on-change=&quot;getChecked&quot;\n    &gt;&lt;/nut-menu-item&gt;\n    &lt;nut-menu-item\n        :menuList=&quot;menuList2&quot;\n        title=&quot;选中标题触发&quot;\n        disabled\n        @menu-click=&quot;alertText&quot;\n    &gt;&lt;/nut-menu-item&gt;\n &lt;/nut-menu&gt;\n</code></pre><pre><code class="language-js">const getChecked = (info: any, name: string) =&gt; {\n    alert(&#39;选择菜单选项：&#39; + name);\n    console.log(11, info, name);\n};\nconst alertText = (info, type) =&gt; {\n    console.log(info, type);\n    if (type == &#39;title&#39;) {\n        alert(&#39;菜单标题点击：&#39; + info);\n    } else {\n        alert(&#39;禁用操作&#39;);\n    }\n};\n</code></pre><h3>自定义内容</h3><pre><code class="language-html">&lt;nut-menu&gt;\n    &lt;nut-menu-item title=&quot;自定义选项&quot;&gt;\n        &lt;div class=&quot;user-style&quot;&gt;\n          &lt;nut-cell&gt;\n            设置为默认 &lt;nut-switch&gt;&lt;/nut-switch&gt;\n          &lt;/nut-cell&gt;\n          &lt;nut-cell&gt;\n            &lt;nut-button size=&quot;large&quot; type=&quot;primary&quot;&gt;确认提交&lt;/nut-button&gt;\n          &lt;/nut-cell&gt;\n        &lt;/div&gt;\n    &lt;/nut-menu-item&gt;\n&lt;/nut-menu&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>菜单标题名称或可为菜单列表第一项，必填</td><td>String</td><td>-</td></tr><tr><td>menuList</td><td>菜单列表数据，必填</td><td>Array</td><td>-</td></tr><tr><td>multiStyle</td><td>列表列数设置，默认1列，可选值 <code>1</code> <code>2</code> <code>3</code></td><td>String, Number</td><td>1</td></tr><tr><td>disabled</td><td>是否开启禁用设置，默认不开启</td><td>Boolean</td><td>false</td></tr><tr><td>maxHeight</td><td>菜单列表最大高度，单位px</td><td>String, Number</td><td>-</td></tr><tr><td>autoClose</td><td>选择后下拉菜单列表是否自动收起，默认自动收起</td><td>Boolean</td><td>true</td></tr><tr><td>hasMask</td><td>是否有蒙层</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>menu-click</td><td>点击菜单标题触发，返回菜单标题名称</td><td>event: Event</td></tr><tr><td>on-change</td><td>点击菜单列表选项触发，返回选中菜单项数据、名称</td><td>event: Event</td></tr></tbody></table>',30),l={expose:[],setup:n=>(n,l)=>(e(),t("div",u,[o]))};export default l;
