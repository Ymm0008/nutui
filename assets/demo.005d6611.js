var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,t=(l,a,n)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n;import{c as d,e as r}from"./mobile.e1a8929d.js";import{a as s,A as c,x as v,y as m,r as g,o as h,c as p,f as V,t as i,s as C}from"./vendor.6c8f51ae.js";import"./index.8d8f94cc.js";const{createDemo:f}=d("range");var b=f({props:{},setup(){const e=s({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60,value10:50});return d=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&t(e,a,l[a]);if(n)for(var a of n(l))u.call(l,a)&&t(e,a,l[a]);return e})({},c(e)),l(d,a({onChange:e=>r.text("当前值："+e)}));var d}});const _=C();v("data-v-57fc1486");const j={class:"demo"},y=V("h2",null,"基础用法",-1),O=V("h2",null,"双滑块",-1),U=V("h2",null,"指定范围",-1),x=V("h2",null,"设置步长",-1),P=V("h2",null,"隐藏范围",-1),w=V("h2",null,"隐藏标签",-1),D=V("h2",null,"禁用",-1),I=V("h2",null,"自定义样式",-1),A=V("h2",null,"自定义按钮",-1),E={class:"custom-button"};m();const S=_(((e,l,a,n,o,u)=>{const t=g("nut-range"),d=g("nut-cell");return h(),p("div",j,[y,V(d,{class:"cell"},{default:_((()=>[V(t,{modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value1=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),O,V(d,{class:"cell"},{default:_((()=>[V(t,{range:"",modelValue:e.value2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value2=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),U,V(d,{class:"cell"},{default:_((()=>[V(t,{modelValue:e.value3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value3=l),max:10,min:-10,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),x,V(d,{class:"cell"},{default:_((()=>[V(t,{modelValue:e.value4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.value4=l),step:5,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),P,V(d,{class:"cell"},{default:_((()=>[V(t,{"hidden-range":"",modelValue:e.value5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.value5=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),w,V(d,{class:"cell"},{default:_((()=>[V(t,{"hidden-tag":"",modelValue:e.value6,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value6=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),D,V(d,{class:"cell"},{default:_((()=>[V(t,{disabled:"",modelValue:e.value7,"onUpdate:modelValue":l[7]||(l[7]=l=>e.value7=l)},null,8,["modelValue"])])),_:1}),I,V(d,{class:"cell"},{default:_((()=>[V(t,{modelValue:e.value8,"onUpdate:modelValue":l[8]||(l[8]=l=>e.value8=l),onChange:e.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])])),_:1}),A,V(d,{class:"cell"},{default:_((()=>[V(t,{modelValue:e.value9,"onUpdate:modelValue":l[9]||(l[9]=l=>e.value9=l),onChange:e.onChange},{button:_((()=>[V("div",E,i(e.value10),1)])),_:1},8,["modelValue","onChange"])])),_:1})])}));b.render=S,b.__scopeId="data-v-57fc1486";export default b;
