System.register(["./mobile-legacy.d414952f.js","./vendor-legacy.c830061d.js","./index-legacy.e2fbc0e8.js"],(function(n){"use strict";var e,o,l,t,s,i,c,u,a,d,r;return{setters:[function(n){e=n.b,o=n.c},function(n){l=n.d,t=n.f,s=n.Z,i=n.s,c=n.x,u=n.r,a=n.o,d=n.c,r=n.q},function(){}],execute:function(){const f=l(e),m={type:"base",showPopup:!1,msg:"",color:void 0,background:void 0,duration:3e3,className:"",onClosed:null,onClick:null,onOpened:null,textTimer:null,unmount:null};let y=[],p=[];const g=n=>{if(n){const e=document.getElementById(n);p=p.filter((e=>e.id!==n)),y=y.filter((e=>e!==n)),e&&document.body.removeChild(e)}else y.forEach((n=>{const e=document.getElementById(n);e&&document.body.removeChild(e)})),p=[],y=[]},h=n=>{let e;if(n.unmount=g,n.id){if(e=n.id,y.find((e=>e===n.id)))return(n=>{const e=document.getElementById(n.id);if(e){const o=p.find((e=>e.id===n.id));n=o?{...m,...o,...n}:{...m,...n};const l=t(f,n);return s(l,e),l.component.ctx}})(n)}else e=(new Date).getTime()+"";(n={...m,...n}).id=e,y.push(n.id),p.push(n);const o=document.createElement("div");o.id=n.id;const l=t(f,n);return s(l,o),document.body.appendChild(o),console.log(l.component),setTimeout((()=>{l.showPopup=!0,console.log(l.component,"====")}),0),l.component.ctx},k=n=>{n||console.warn("[NutUI Notify]: msg不能为空")},b={text:(n,e={})=>(k(n),h({...e,msg:n})),primary:(n,e={})=>(k(n),h({...e,msg:n,type:"primary"})),success:(n,e={})=>(k(n),h({...e,msg:n,type:"success"})),danger:(n,e={})=>(k(n),h({...e,msg:n,type:"danger"})),warn:(n,e={})=>(k(n),h({...e,msg:n,type:"warning"})),hide(){g()}},{createDemo:N}=o("notify");var w=n("default",N({setup:()=>({baseNotify:n=>{b.text(n,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:n=>{b.primary(n)},successNotify:n=>{b.success(n)},errorNotify:n=>{b.danger(n)},warningNotify:n=>{b.warn(n)},cusBgNotify:n=>{b.text(n,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:n=>{b.text(n,{duration:1e4})}})}));const C=r("data-v-314ae48c");i("data-v-314ae48c");const v={class:"demo"},I=t("h2",null,"基础用法",-1),x=t("span",null,[t("label",null,"基础用法")],-1),_=t("h2",null,"通知类型",-1),L=t("span",null,[t("label",null,"主要通知")],-1),B=t("span",null,[t("label",null,"成功通知")],-1),E=t("span",null,[t("label",null,"危险通知")],-1),j=t("span",null,[t("label",null,"警告通知")],-1),T=t("h2",null,"自定义样式",-1),D=t("span",null,[t("label",null,"自定义背景色和字体颜色")],-1),P=t("h2",null,"自定义时长",-1),q=t("span",null,[t("label",null,"自定义时长")],-1);c();const O=C(((n,e,o,l,s,i)=>{const c=u("nut-cell");return a(),d("div",v,[I,t(c,{showIcon:!0,isLink:!0,onClick:e[1]||(e[1]=e=>n.baseNotify("基础用法"))},{default:C((()=>[x])),_:1}),_,t(c,{showIcon:!0,isLink:!0,onClick:e[2]||(e[2]=e=>n.primaryNotify("主要通知"))},{default:C((()=>[L])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[3]||(e[3]=e=>n.successNotify("成功通知"))},{default:C((()=>[B])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[4]||(e[4]=e=>n.errorNotify("危险通知"))},{default:C((()=>[E])),_:1}),t(c,{showIcon:!0,isLink:!0,onClick:e[5]||(e[5]=e=>n.warningNotify("警告通知"))},{default:C((()=>[j])),_:1}),T,t(c,{showIcon:!0,isLink:!0,onClick:e[6]||(e[6]=e=>n.cusBgNotify("自定义背景色和字体颜色"))},{default:C((()=>[D])),_:1}),P,t(c,{showIcon:!0,isLink:!0,onClick:e[7]||(e[7]=e=>n.timeNotify("自定义时长"))},{default:C((()=>[q])),_:1})])}));w.render=O,w.__scopeId="data-v-314ae48c"}}}));
