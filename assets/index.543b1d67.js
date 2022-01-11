var x=Object.defineProperty,w=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))S.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>w(e,v(t));import{j as n,G as $,c as O,p as U,r as h,a,b,T as z,R as j,d as P}from"./vendor.e6abff84.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};G();var l;(function(e){e.setColorTheme="SET_COLOR_THEME"})(l||(l={}));const L=e=>({type:l.setColorTheme,payload:e}),E=({palette:e})=>O("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;}",""),M={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},R=()=>n($,{styles:E});var i;(function(e){e.light="light",e.dark="dark"})(i||(i={}));const m=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,A={[i.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(236, 33%, 92%)",text:"hsl(235, 19%, 35%)"},[i.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(0, 0%, 100%)",text:"hsl(234, 39%, 85%)"}},D=e=>{var t;return{palette:f(g({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(t=A[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:m(450),mdUp:m(768),xlUp:m(1440)}}},y={colorTheme:i.dark},H=U((e,t)=>{switch(t.type){case l.setColorTheme:{e.colorTheme=t.payload;break}}}),k=h.exports.createContext([y,()=>{}]),T=()=>h.exports.useContext(k),N=({children:e})=>{const t=h.exports.useReducer(H,y);return n(k.Provider,{value:t,children:e})},B=a("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),F=a("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:t}})=>`
    color: ${e.white};
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: 0.37em;
    text-transform: uppercase;

    ${t.smUp} {
      font-size: 3.4rem;
    }

    ${t.mdUp} {
      font-size: 4rem;
    }
  `,""),I=a("button",{target:"e13n8af10"})(({theme:{palette:e,mq:t}})=>`
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${e.colorTheme===i.dark?"sun":"moon"}.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${t.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),_=()=>{const[{colorTheme:e},t]=T(),r=e===i.dark,c=()=>{t(L(r?i.light:i.dark))};return b(B,{children:[n(F,{children:"Todo"}),n(I,{role:"switch","aria-checked":r,onClick:c,children:n("span",{css:M,children:"Dark theme"})})]})},J=a("div",{target:"e1db1otb1"})(({theme:{mq:e,palette:t}})=>`
    background: top center / 100% auto no-repeat
      url('./bg-mobile-${t.colorTheme}.jpg');
    padding: 4.8rem 2.4rem;
    min-height: 100vh;

    ${e.smUp} {
      background-image: url('./bg-desktop-${t.colorTheme}.jpg');
      background-size: auto;
      padding: 6.4rem 3rem;
    }

    ${e.mdUp} {
      padding: 7.8rem 3rem;
    }

    ${e.xlUp} {
      background-size: 100%;
    }
  `,""),K=a("div",{target:"e1db1otb0"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),W=()=>{const[{colorTheme:e}]=T();return b(z,{theme:D(e),children:[n(R,{}),n(J,{children:n(K,{children:n(_,{})})})]})};j.render(n(P.StrictMode,{children:n(N,{children:n(W,{})})}),document.getElementById("root"));
//# sourceMappingURL=index.543b1d67.js.map
