var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;import{c as i}from"./mobile.e1a8929d.js";import{a as o,A as d,x as u,y as b,r as f,o as p,c as r,f as _,F as h,h as m,t as y,n as g,s as v,j}from"./vendor.6c8f51ae.js";import"./index.8d8f94cc.js";const{createDemo:w}=i("tab");var O=w({props:{},setup(){const t=o({editList:[{title:"标签一"},{title:"标签二"}]});return i=((t,e)=>{for(var a in e||(e={}))n.call(e,a)&&c(t,a,e[a]);if(l)for(var a of l(e))s.call(e,a)&&c(t,a,e[a]);return t})({},d(t)),e(i,a({changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}}));var i}});const L=v();u("data-v-47b14134");const x={class:"demo full"},T=_("h2",null,"基础用法",-1),P=_("p",{class:"content"},"这里是页签全部内容",-1),k=_("p",{class:"content"},"这里是页签待付款内容",-1),I=_("p",{class:"content"},"这里是页签待收获内容",-1),S=_("p",{class:"content"},"这里是页签已完成内容",-1),C=_("h2",null,"defaultIndex设置默认显示tab",-1),D=_("h2",null,"switchTab监听切换tab返回事件",-1),A=_("p",{class:"content"},"这里是页签全部内容",-1),E=_("p",{class:"content"},"这里是页签待付款内容",-1),F=_("p",{class:"content"},"这里是页签待收获内容",-1),q=_("p",{class:"content"},"这里是页签已完成内容",-1),z=_("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),B=_("p",{class:"content"},"这里是页签全部内容",-1),G=_("p",{class:"content"},"这里是页签待付款内容",-1),H=_("p",{class:"content"},"这里是页签待收获内容",-1),J=_("p",{class:"content"},"这里是页签已完成内容",-1),K=_("h2",null," 禁止tab内容滑动",-1),M=_("p",{class:"content"},"这里是页签全部内容",-1),N=_("p",{class:"content"},"这里是页签待付款内容",-1),Q=_("p",{class:"content"},"这里是页签待收获内容",-1),R=_("p",{class:"content"},"这里是页签已完成内容",-1),U=_("h2",null,"标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。",-1),V=_("p",{class:"content"},"这里是页签全部内容",-1),W=_("p",{class:"content"},"这里是页签待付款内容",-1),X=_("p",{class:"content"},"这里是页签待收获内容",-1),Y=_("p",{class:"content"},"这里是页签已完成内容",-1),Z=_("p",{class:"content"},"这里是页签已取消内容",-1),$=_("p",{class:"content"},"这里是页签待评价内容",-1),tt=_("h2",null,"设置slot:header可以自定义标签",-1),et=_("p",{class:"content"},"这里是页签全部内容",-1),at=_("p",{class:"content"},"这里是页签待付款内容",-1),lt=_("p",{class:"content"},"这里是页签待收获内容",-1),nt=_("p",{class:"content"},"这里是页签已完成内容",-1),st=_("p",{class:"content"},"这里是页签已取消内容",-1),ct=_("p",{class:"content"},"这里是页签待评价内容",-1),it=_("h2",null,"左右tab布局",-1),ot=_("p",{class:"content"},"这里是页签一内容",-1),dt=_("p",{class:"content"},"这里是页签二内容",-1),ut=_("p",{class:"content"},"这里是页签三内容",-1),bt=_("p",{class:"content"},"这里是页签四内容",-1),ft=_("p",{class:"content"},"这里是页签五内容",-1),pt=_("p",{class:"content"},"这里是页签六内容",-1),rt=_("p",{class:"content"},"这里是页签七内容",-1),_t=_("h2",null,"异步操作",-1),ht={class:"content"},mt=j("改变数据");b();const yt=L(((t,e,a,l,n,s)=>{const c=f("nut-tab-panel"),i=f("nut-tab"),o=f("nut-icon"),d=f("nut-button");return p(),r("div",x,[T,_(i,null,{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[P])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[k])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[I])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[S])),_:1})])),_:1}),C,D,_(i,{"default-index":1,onSwitchTab:t.switchTab},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[A])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[E])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[F])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[q])),_:1})])),_:1},8,["onSwitchTab"]),z,_(i,{"animated-time":500},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[B])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[G])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[H])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[J])),_:1})])),_:1}),K,_(i,{"no-swiping":!0},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[M])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[N])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[Q])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[R])),_:1})])),_:1}),U,_(i,{"animated-time":500},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[V])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[W])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[X])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[Y])),_:1}),_(c,{"tab-title":"已取消"},{default:L((()=>[Z])),_:1}),_(c,{"tab-title":"待评价"},{default:L((()=>[$])),_:1})])),_:1}),tt,_(i,null,{default:L((()=>[_(c,{"tab-title":"全部"},{header:L((()=>[_(o,{name:"dongdong"})])),default:L((()=>[et])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[at])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[lt])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[nt])),_:1}),_(c,{"tab-title":"已取消"},{default:L((()=>[st])),_:1}),_(c,{"tab-title":"待评价"},{default:L((()=>[ct])),_:1})])),_:1}),it,_(i,{direction:"vertical","animated-time":500,"default-index":2},{default:L((()=>[_(c,{"tab-title":"页签一"},{default:L((()=>[ot])),_:1}),_(c,{"tab-title":"页签二"},{default:L((()=>[dt])),_:1}),_(c,{"tab-title":"页签三"},{default:L((()=>[ut])),_:1}),_(c,{"tab-title":"页签四"},{default:L((()=>[bt])),_:1}),_(c,{"tab-title":"页签五"},{default:L((()=>[ft])),_:1}),_(c,{"tab-title":"页签六"},{default:L((()=>[pt])),_:1}),_(c,{"tab-title":"页签七"},{default:L((()=>[rt])),_:1})])),_:1}),_t,t.editList.length>0?(p(),r(i,{key:0,"animated-time":500},{default:L((()=>[(p(!0),r(h,null,m(t.editList,((t,e)=>(p(),r(c,{"tab-title":t.title,key:e},{default:L((()=>[_("p",ht,"这里是页签"+y(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):g("",!0),_(d,{type:"primary",onClick:t.changeList},{default:L((()=>[mt])),_:1},8,["onClick"])])}));O.render=yt,O.__scopeId="data-v-47b14134";export default O;
