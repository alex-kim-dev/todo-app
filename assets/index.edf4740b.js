var f=Object.defineProperty,p=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&m(e,o,t[o]);if(c)for(var o of c(t))k.call(t,o)&&m(e,o,t[o]);return e},h=(e,t)=>p(e,b(t));import{j as s,G as x,c as v,a as u,b as j,T as P,R as S,d as U}from"./vendor.0b18e774.js";const $=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};$();const L=({palette:e})=>v("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;}",""),O=()=>s(x,{styles:L});var i;(function(e){e.light="light",e.dark="dark"})(i||(i={}));const d=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,T={[i.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(236, 33%, 92%)",text:"hsl(235, 19%, 35%)"},[i.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(0, 0%, 100%)",text:"hsl(234, 39%, 85%)"}},z=e=>{var t;return{palette:h(g({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"}},(t=T[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:d(450),mdUp:d(768),xlUp:d(1440)}}},G=u("div",{target:"e1db1otb1"})(({theme:{mq:e,palette:t}})=>`
    background: top center / 100% auto no-repeat
      url('./images/bg-mobile-${t.colorTheme}.jpg');
    padding: 4.8rem 2.4rem;
    min-height: 100vh;

    ${e.smUp} {
      background-image: url('./images/bg-desktop-${t.colorTheme}.jpg');
      background-size: auto;
      padding: 6.4rem 3rem;
    }

    ${e.mdUp} {
      padding: 7.8rem 3rem;
    }

    ${e.xlUp} {
      background-size: 100%;
    }
  `,""),M=u("div",{target:"e1db1otb0"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),w=()=>j(P,{theme:z(i.dark),children:[s(O,{}),s(G,{children:s(M,{children:s("h1",{children:"Todo app"})})})]});S.render(s(U.StrictMode,{children:s(w,{})}),document.getElementById("root"));
//# sourceMappingURL=index.edf4740b.js.map
