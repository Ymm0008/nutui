System.register(["./mobile-legacy.d414952f.js","./vendor-legacy.c830061d.js","./index-legacy.e2fbc0e8.js"],(function(t){"use strict";var e,a,l,n,c,s,i,d,u,o,f,b,_,p,r;return{setters:[function(t){e=t.c},function(t){a=t.a,l=t.z,n=t.s,c=t.x,s=t.r,i=t.o,d=t.c,u=t.f,o=t.F,f=t.g,b=t.t,_=t.h,p=t.q,r=t.j},function(){}],execute:function(){const{createDemo:h}=e("tab");var m=t("default",h({props:{},setup(){const t=a({editList:[{title:"标签一"},{title:"标签二"}]});return{...l(t),changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}}}}));const g=p("data-v-5c4081df");n("data-v-5c4081df");const v={class:"demo full"},y=u("h2",null,"基础用法",-1),L=u("p",{class:"content"},"这里是页签全部内容",-1),w=u("p",{class:"content"},"这里是页签待付款内容",-1),x=u("p",{class:"content"},"这里是页签待收获内容",-1),T=u("p",{class:"content"},"这里是页签已完成内容",-1),j=u("h2",null,"defaultIndex设置默认显示tab",-1),k=u("h2",null,"switchTab监听切换tab返回事件",-1),S=u("p",{class:"content"},"这里是页签全部内容",-1),C=u("p",{class:"content"},"这里是页签待付款内容",-1),I=u("p",{class:"content"},"这里是页签待收获内容",-1),q=u("p",{class:"content"},"这里是页签已完成内容",-1),z=u("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),D=u("p",{class:"content"},"这里是页签全部内容",-1),F=u("p",{class:"content"},"这里是页签待付款内容",-1),A=u("p",{class:"content"},"这里是页签待收获内容",-1),B=u("p",{class:"content"},"这里是页签已完成内容",-1),E=u("h2",null," 禁止tab内容滑动",-1),G=u("p",{class:"content"},"这里是页签全部内容",-1),H=u("p",{class:"content"},"这里是页签待付款内容",-1),J=u("p",{class:"content"},"这里是页签待收获内容",-1),K=u("p",{class:"content"},"这里是页签已完成内容",-1),M=u("h2",null,"标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。",-1),N=u("p",{class:"content"},"这里是页签全部内容",-1),O=u("p",{class:"content"},"这里是页签待付款内容",-1),P=u("p",{class:"content"},"这里是页签待收获内容",-1),Q=u("p",{class:"content"},"这里是页签已完成内容",-1),R=u("p",{class:"content"},"这里是页签已取消内容",-1),U=u("p",{class:"content"},"这里是页签待评价内容",-1),V=u("h2",null,"设置slot:header可以自定义标签",-1),W=u("p",{class:"content"},"这里是页签全部内容",-1),X=u("p",{class:"content"},"这里是页签待付款内容",-1),Y=u("p",{class:"content"},"这里是页签待收获内容",-1),Z=u("p",{class:"content"},"这里是页签已完成内容",-1),$=u("p",{class:"content"},"这里是页签已取消内容",-1),tt=u("p",{class:"content"},"这里是页签待评价内容",-1),et=u("h2",null,"左右tab布局",-1),at=u("p",{class:"content"},"这里是页签一内容",-1),lt=u("p",{class:"content"},"这里是页签二内容",-1),nt=u("p",{class:"content"},"这里是页签三内容",-1),ct=u("p",{class:"content"},"这里是页签四内容",-1),st=u("p",{class:"content"},"这里是页签五内容",-1),it=u("p",{class:"content"},"这里是页签六内容",-1),dt=u("p",{class:"content"},"这里是页签七内容",-1),ut=u("h2",null,"异步操作",-1),ot={class:"content"},ft=r("改变数据");c();const bt=g(((t,e,a,l,n,c)=>{const p=s("nut-tab-panel"),r=s("nut-tab"),h=s("nut-icon"),m=s("nut-button");return i(),d("div",v,[y,u(r,null,{default:g((()=>[u(p,{"tab-title":"全部"},{default:g((()=>[L])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[w])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[x])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[T])),_:1})])),_:1}),j,k,u(r,{"default-index":1,onSwitchTab:t.switchTab},{default:g((()=>[u(p,{"tab-title":"全部"},{default:g((()=>[S])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[C])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[I])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[q])),_:1})])),_:1},8,["onSwitchTab"]),z,u(r,{"animated-time":500},{default:g((()=>[u(p,{"tab-title":"全部"},{default:g((()=>[D])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[F])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[A])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[B])),_:1})])),_:1}),E,u(r,{"no-swiping":!0},{default:g((()=>[u(p,{"tab-title":"全部"},{default:g((()=>[G])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[H])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[J])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[K])),_:1})])),_:1}),M,u(r,{"animated-time":500},{default:g((()=>[u(p,{"tab-title":"全部"},{default:g((()=>[N])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[O])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[P])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[Q])),_:1}),u(p,{"tab-title":"已取消"},{default:g((()=>[R])),_:1}),u(p,{"tab-title":"待评价"},{default:g((()=>[U])),_:1})])),_:1}),V,u(r,null,{default:g((()=>[u(p,{"tab-title":"全部"},{header:g((()=>[u(h,{name:"dongdong"})])),default:g((()=>[W])),_:1}),u(p,{"tab-title":"待付款"},{default:g((()=>[X])),_:1}),u(p,{"tab-title":"待收获"},{default:g((()=>[Y])),_:1}),u(p,{"tab-title":"已完成"},{default:g((()=>[Z])),_:1}),u(p,{"tab-title":"已取消"},{default:g((()=>[$])),_:1}),u(p,{"tab-title":"待评价"},{default:g((()=>[tt])),_:1})])),_:1}),et,u(r,{direction:"vertical","animated-time":500,"default-index":2},{default:g((()=>[u(p,{"tab-title":"页签一"},{default:g((()=>[at])),_:1}),u(p,{"tab-title":"页签二"},{default:g((()=>[lt])),_:1}),u(p,{"tab-title":"页签三"},{default:g((()=>[nt])),_:1}),u(p,{"tab-title":"页签四"},{default:g((()=>[ct])),_:1}),u(p,{"tab-title":"页签五"},{default:g((()=>[st])),_:1}),u(p,{"tab-title":"页签六"},{default:g((()=>[it])),_:1}),u(p,{"tab-title":"页签七"},{default:g((()=>[dt])),_:1})])),_:1}),ut,t.editList.length>0?(i(),d(r,{key:0,"animated-time":500},{default:g((()=>[(i(!0),d(o,null,f(t.editList,((t,e)=>(i(),d(p,{"tab-title":t.title,key:e},{default:g((()=>[u("p",ot,"这里是页签"+b(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):_("",!0),u(m,{type:"primary",onClick:t.changeList},{default:g((()=>[ft])),_:1},8,["onClick"])])}));m.render=bt,m.__scopeId="data-v-5c4081df"}}}));
