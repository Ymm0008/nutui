/*! NutUI v1.1.1 Fri Mar 30 2018 10:22:08 GMT+0800 (中国标准时间) */
webpackJsonpnutui([43],{1064:function(t,v,_){var e=_(892);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("742cf34d",e,!0)},746:function(t,v,_){function e(t){_(1064)}var d=_(1)(_(827),_(981),e,null,null);t.exports=d.exports},827:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var e=_(20);!function(t){t&&t.__esModule}(e);v.default={data:function(){return{initShow:!0,demo1:'<nut-advertisemask \n  imgSrc="/asset/img/advertising/adver.png"\n  linkHref = \'https://m.jd.com/\'\n  :picWidth="5" \n  :picHeight="6"\n  :clickMask="true" \n  :showClose=\'true\'\n  :showBtn=\'true\'\n  :closeTop="3"\n  :closeRight="0.8"\n  :closeScale="1.2"\n  :circleShow="true"\n  :initShow.sync="initShow"\n  @jumpTo="jumpToFun"\n  @closeMask="closeMaskFun"\n  @maskClose="maskClose"\n  @maskOpen="maskOpen"\n  >\n</nut-advertisemask>'}},components:{},methods:{jumpToFun:function(){console.log("点击了跳转")},closeMaskFun:function(){console.log("关闭了蒙层")}}}},892:function(t,v,_){v=t.exports=_(2)(),v.push([t.i,"",""])},981:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("h1",[t._v("advertisemask")]),t._v(" "),_("p",[t._v("一种用于打开APP后显示的图片广告弹层。")]),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("a",{staticClass:"button button-primary",attrs:{href:"/demo.html#/advertisemask",target:"_blank"}},[t._v("Demo")]),t._v(" "),_("p",[t._v("默认用法")]),t._v(" "),_("pre",[_("code",{directives:[{name:"highlight",rawName:"v-highlight"}],domProps:{textContent:t._s(t.demo1)}})]),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("imgSrc")]),t._v(" "),_("td",[t._v("广告图片的来源，必填项")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("''")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("linkHref")]),t._v(" "),_("td",[t._v("点击按钮跳转的链接地址")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'javascript:void(0)'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("picWidth")]),t._v(" "),_("td",[t._v("广告图片的宽度，必填项（单位：rem）")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("--")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("picHeight")]),t._v(" "),_("td",[t._v("广告图片的高度，必填项（单位：rem）")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("--")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("clickMask")]),t._v(" "),_("td",[t._v("点击遮罩层是否关闭")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("showClose")]),t._v(" "),_("td",[t._v("是否显示关闭按钮")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("closeTop")]),t._v(" "),_("td",[t._v("关闭按钮相对于整个屏幕距离顶部的距离（单位：rem）")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("closeRight")]),t._v(" "),_("td",[t._v("关闭按钮相对于整个屏幕距离右侧的距离（单位：rem）")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("closeScale")]),t._v(" "),_("td",[t._v("关闭按钮放大倍数")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("circleShow")]),t._v(" "),_("td",[t._v("是否显示关闭按钮外侧圆圈")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("initShow")]),t._v(" "),_("td",[t._v("是否显示广告蒙层")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("jumpTo")]),t._v(" "),_("td",[t._v("点击跳转按钮时触发的回调事件")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("closeMask")]),t._v(" "),_("td",[t._v("点击关闭按钮时触发的回调事件")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("maskClose")]),t._v(" "),_("td",[t._v("遮罩层隐藏时触发")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("maskOpen")]),t._v(" "),_("td",[t._v("遮罩层显示时触发")]),t._v(" "),_("td",[t._v("--")])])])])])}]}}});
//# sourceMappingURL=43.js.map