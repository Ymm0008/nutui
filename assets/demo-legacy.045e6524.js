System.register(["./mobile-legacy.ce9cd1b8.js","./vendor-legacy.fc686e0d.js","./index-legacy.3883e5e8.js"],(function(e){"use strict";var t,n,l,a,i,o;return{setters:[function(e){t=e.c},function(e){n=e.k,l=e.r,a=e.o,i=e.c,o=e.f},function(){}],execute:function(){const{createDemo:s}=t("datepicker");var d=e("default",s({props:{},setup(){const e=n(!1),t=n(!1),l=n(!1),a=n(!1),i=n(!1),o=[e,t,l,a,i],s=new Date(2020,0,1),d=n("2020-1-1"),c=n("2020-1-1"),m=n("2020年-1月-1日-0时-0分"),u=n("0时-0分-0秒"),r=n("0时-0分-0秒"),p=[d,c,m,u,r];return{show:e,show2:t,show3:l,show4:a,show5:i,desc1:d,desc2:c,desc3:m,desc4:u,desc5:r,currentDate:s,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),open:e=>{o[e].value=!0},confirm:(e,t)=>{p[e].value=t.join("-")}}}}));const c={class:"demo"},m=o("h2",null,"每列不显示中文",-1),u=o("h2",null,"限制开始结束时间",-1),r=o("h2",null,"限制开始结束时间（有默认值）",-1),p=o("h2",null,"限制开始结束小时",-1),D=o("h2",null,"分钟数递增步长设置",-1);d.render=function(e,t,n,s,d,h){const v=l("nut-cell"),f=l("nut-datepicker");return a(),i("div",c,[m,o(v,{title:"日期选择",desc:e.desc1,onClick:t[1]||(t[1]=t=>e.open(0))},null,8,["desc"]),u,o(v,{title:"日期选择",desc:e.desc2,onClick:t[2]||(t[2]=t=>e.open(1))},null,8,["desc"]),r,o(v,{title:"日期时间选择",desc:e.desc3,onClick:t[3]||(t[3]=t=>e.open(2))},null,8,["desc"]),p,o(v,{title:"时间选择",desc:e.desc4,onClick:t[4]||(t[4]=t=>e.open(3))},null,8,["desc"]),D,o(v,{title:"时间选择",desc:e.desc5,onClick:t[5]||(t[5]=t=>e.open(4))},null,8,["desc"]),o(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[6]||(t[6]=t=>e.currentDate=t),onConfirm:t[7]||(t[7]=t=>{e.confirm(0,t)}),visible:e.show,"onUpdate:visible":t[8]||(t[8]=t=>e.show=t),"is-show-chinese":!1},null,8,["modelValue","visible"]),o(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[9]||(t[9]=t=>e.currentDate=t),title:"日期选择","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[10]||(t[10]=t=>{e.confirm(1,t)}),visible:e.show2,"onUpdate:visible":t[11]||(t[11]=t=>e.show2=t),"is-show-chinese":!1},null,8,["modelValue","min-date","max-date","visible"]),o(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[12]||(t[12]=t=>e.currentDate=t),title:"日期时间选择",type:"datetime","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[13]||(t[13]=t=>{e.confirm(2,t)}),visible:e.show3,"onUpdate:visible":t[14]||(t[14]=t=>e.show3=t)},null,8,["modelValue","min-date","max-date","visible"]),o(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[15]||(t[15]=t=>e.currentDate=t),title:"时间选择",type:"time","min-date":e.minDate,"max-date":e.maxDate,onConfirm:t[16]||(t[16]=t=>{e.confirm(3,t)}),visible:e.show4,"onUpdate:visible":t[17]||(t[17]=t=>e.show4=t)},null,8,["modelValue","min-date","max-date","visible"]),o(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[18]||(t[18]=t=>e.currentDate=t),title:"时间选择",type:"time","min-date":e.minDate,"minute-step":5,"max-date":e.maxDate,onConfirm:t[19]||(t[19]=t=>{e.confirm(4,t)}),visible:e.show5,"onUpdate:visible":t[20]||(t[20]=t=>e.show5=t)},null,8,["modelValue","min-date","max-date","visible"])])}}}}));
