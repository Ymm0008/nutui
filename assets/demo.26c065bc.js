import{c as l}from"./mobile.972c6322.js";import{a as t,s as e,x as s,r as c,o as a,c as m,f as i,t as u,q as f}from"./vendor.e0b7d5c2.js";import"./index.a3e587b5.js";const{createDemo:g}=l("swiper");var o=g({props:{},setup(){const l=t({page:2,page2:0,page3:0,page4:0,current:1});return{state:l,change:t=>{l.current=t+1}}}});const n=f("data-v-25ff7371");e("data-v-25ff7371");const p={class:"demo"},b=i("h2",null,"基本用法",-1),_={class:"demo-box"},d=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171",alt:""},null,-1),r=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg",alt:""},null,-1),j=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg",alt:""},null,-1),x=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171",alt:""},null,-1),h=i("h2",null,"自定义大小",-1),y={class:"demo-box"},E=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171",alt:""},null,-1),v=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg",alt:""},null,-1),w=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg",alt:""},null,-1),C=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171",alt:""},null,-1),q=i("h2",null,"自定义指示器",-1),D={class:"demo-box"},I=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171",alt:""},null,-1),k=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg",alt:""},null,-1),z=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg",alt:""},null,-1),A=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171",alt:""},null,-1),B={class:"page"},F=i("h2",null,"垂直方向",-1),G={class:"demo-box"},H=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171",alt:""},null,-1),J=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg",alt:""},null,-1),K=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg",alt:""},null,-1),L=i("img",{src:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171",alt:""},null,-1);s();const M=n(((l,t,e,s,f,g)=>{const o=c("nut-swiper-item"),M=c("nut-swiper");return a(),m("div",p,[b,i("view",_,[i(M,{"init-page":l.state.page,"pagination-visible":!0,"pagination-color":"#426543","auto-play":"3000"},{default:n((()=>[i(o,null,{default:n((()=>[d])),_:1}),i(o,null,{default:n((()=>[r])),_:1}),i(o,null,{default:n((()=>[j])),_:1}),i(o,null,{default:n((()=>[x])),_:1})])),_:1},8,["init-page"])]),h,i("view",y,[i(M,{"init-page":l.state.page2,loop:!1,width:"300"},{default:n((()=>[i(o,null,{default:n((()=>[E])),_:1}),i(o,null,{default:n((()=>[v])),_:1}),i(o,null,{default:n((()=>[w])),_:1}),i(o,null,{default:n((()=>[C])),_:1})])),_:1},8,["init-page"])]),q,i("view",D,[i(M,{"init-page":l.state.page3,loop:!0,onChange:l.change},{page:n((()=>[i("div",B,u(l.state.current)+"/4 ",1)])),default:n((()=>[i(o,null,{default:n((()=>[I])),_:1}),i(o,null,{default:n((()=>[k])),_:1}),i(o,null,{default:n((()=>[z])),_:1}),i(o,null,{default:n((()=>[A])),_:1})])),_:1},8,["init-page","onChange"])]),F,i("view",G,[i(M,{"init-page":l.state.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:n((()=>[i(o,null,{default:n((()=>[H])),_:1}),i(o,null,{default:n((()=>[J])),_:1}),i(o,null,{default:n((()=>[K])),_:1}),i(o,null,{default:n((()=>[L])),_:1})])),_:1},8,["init-page"])])])}));o.render=M,o.__scopeId="data-v-25ff7371";export default o;
