import{c as s,T as t}from"./mobile.df6f9fac.js";import{r as o,o as i,c as n,f as a}from"./vendor.8cdc485e.js";import"./index.c87c49f3.js";const{createDemo:e}=s("toast"),c=e({setup:()=>({textToast:s=>{t.text(s)},successToast:s=>{t.success(s)},errorToast:s=>{t.fail(s)},warningToast:s=>{t.warn(s)},loadingToast:s=>{t.loading(s)}})}),l={class:"demo"},r=a("h2",null,"基本用法",-1);c.render=function(s,t,e,c,d,T){const f=o("nut-cell");return i(),n("div",l,[r,a(f,{title:"Text 文字提示","is-link":"",onClick:t[1]||(t[1]=t=>s.textToast("网络失败，请稍后再试~"))}),a(f,{title:"Success 成功提示","is-link":"",onClick:t[2]||(t[2]=t=>s.successToast("成功提示"))}),a(f,{title:"Error 失败提示","is-link":"",onClick:t[3]||(t[3]=t=>s.errorToast("失败提示"))}),a(f,{title:"Warning 警告提示","is-link":"",onClick:t[4]||(t[4]=t=>s.warningToast("警告提示"))}),a(f,{title:"Loading 加载提示","is-link":"",onClick:t[5]||(t[5]=t=>s.loadingToast("加载中"))})])};export default c;
