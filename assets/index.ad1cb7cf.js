var $=Object.defineProperty,C=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))S.call(t,r)&&y(e,r,t[r]);return e},T=(e,t)=>C(e,w(t));import{c as i,j as n,G as U,a as O,n as m,p as L,r as p,b as h,T as E,R as G,d as j}from"./vendor.8202d757.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};P();var D=i("div",{target:"e1wulm1d0"})(({theme:{palette:e}})=>`
    background-color: ${e.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,""),c;(function(e){e.setColorTheme="SET_COLOR_THEME",e.toggleTodoCompletion="TOGGLE_TASK_COMPLETION",e.deleteTodo="DELETE_TODO"})(c||(c={}));const M=e=>({type:c.setColorTheme,payload:e}),H=e=>({type:c.toggleTodoCompletion,payload:e}),R=e=>({type:c.deleteTodo,payload:e}),_=({palette:e})=>O("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;letter-spacing:-0.015em;word-break:break-word;}",""),g={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},I=()=>n(U,{styles:_});var d;(function(e){e.light="light",e.dark="dark"})(d||(d={}));const u=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,N={[d.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(0, 0%, 100%)",bgHover:"hsl(233, 11%, 84%)",text:"hsl(235, 19%, 35%)",muted:"hsl(234, 39%, 85%)"},[d.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(235, 24%, 19%)",bgHover:"hsl(235, 21%, 11%)",text:"hsl(234, 39%, 85%)",muted:"hsl(233, 14%, 35%)"}},A=e=>{var t;return{palette:T(k({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(t=N[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:u(450),mdUp:u(768),xlUp:u(1440)}}},v={colorTheme:d.dark,todos:[{id:m(),task:"Complete online JavaScript course",completed:!0},{id:m(),task:"Jog around the park 3x",completed:!1},{id:m(),task:"10 minutes meditation",completed:!1},{id:m(),task:"Read for 1 hour",completed:!1},{id:m(),task:"Pick up groceries",completed:!1},{id:m(),task:"Complete Todo App on Frontend Mentor",completed:!1}]},B=L((e,t)=>{switch(t.type){case c.setColorTheme:{e.colorTheme=t.payload;break}case c.toggleTodoCompletion:{const r=e.todos.find(({id:a})=>a===t.payload);r&&(r.completed=!r.completed);break}case c.deleteTodo:{const r=e.todos.findIndex(({id:a})=>a===t.payload);r!==-1&&e.todos.splice(r,1);break}}}),x=p.exports.createContext([v,()=>{}]),b=()=>p.exports.useContext(x),F=({children:e})=>{const t=p.exports.useReducer(B,v);return n(x.Provider,{value:t,children:e})},J=i("label",{target:"ejxft1h0"})(({theme:{mq:e,palette:t},checked:r})=>`
    --size: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    ${r?"":`border: 0.1rem solid ${t.muted};`}
    border-radius: 50%;
    background:
      center no-repeat url('./icon-check.svg'),
      linear-gradient(
        135deg,
        ${t.bgGradient.from},
        ${t.bgGradient.to}
      );

    &:hover {
      border: 0;
    }

    ${e.smUp} {
      --size: 2.4rem;
    }

    & > input {
      grid-area: 1 / 1 / -1 / -1;
      appearance: none;
      margin: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }

    & > span:last-of-type {
      display: block;
      grid-area: 1 / 1 / -1 / -1;
      width: calc(var(--size) - 0.2rem);
      height: calc(var(--size) - 0.2rem);
      border-radius: 50%;
      ${r?"":`background-color: ${t.bgSecondary};`}
    }
  `,""),K=({checked:e,onChange:t})=>h(J,{checked:e,children:[n("span",{css:g,children:e?"Completed":"To do"}),n("span",{}),n("input",{type:"checkbox",checked:e,onChange:t})]}),W=i("ul",{target:"e911m033"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),Q=i("li",{target:"e911m032"})(({theme:{mq:e,palette:t}})=>`
    display: flex;
    align-items: center;
    padding: 1.4rem 2rem;
    box-sizing: content-box;

    &:not(:first-of-type) {
      border-top: 0.1rem solid ${t.muted};
    }

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }

    ${e.smUp} {
      padding: 1.6rem 2.2rem;

      & > :not(:last-child) {
        margin-right: 1.8rem;
      }

      &:hover > button {
        opacity: 1;
      }
    }

    ${e.mdUp} {
      padding: 2rem 2.4rem;

      & > :not(:last-child) {
        margin-right: 2.4rem;
      }
    }
  `,""),V=i("p",{target:"e911m031"})(({theme:{mq:e,palette:t},completed:r})=>`
    flex: 1;
    font-size: 1.2rem;

    ${r&&`
        text-decoration: line-through;
        color: ${t.muted};
      `}

    ${e.smUp} {
      font-size: 1.5rem;
    }

    ${e.mdUp} {
      font-size: 1.8rem;
    }
  `,""),X=i("button",{target:"e911m030"})(({theme:{mq:e,palette:t}})=>`
    --size: 1.2rem;
    width: 3.4rem;
    height: 3.4rem;
    border: 0;
    border-radius: 0.4rem;
    padding: 0;
    margin: calc((3.4rem - var(--size)) / -2);
    background: center / var(--size) no-repeat url('./icon-cross.svg');
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover,
    &:active {
      background-color: ${t.bgHover};
    }

    ${e.smUp} {
      --size: 1.5rem;
      opacity: 0;
    }

    ${e.mdUp} {
      --size: 1.8rem;
    }
  `,""),Y=()=>{const[{todos:e},t]=b(),r=o=>()=>{t(H(o))},a=o=>()=>{t(R(o))};return n(W,{id:"todo-list",children:e.map(({id:o,task:s,completed:l})=>h(Q,{children:[n(K,{checked:l,onChange:r(o)}),n(V,{completed:l,children:s}),n(X,{type:"button",onClick:a(o),children:n("span",{css:g,children:"Delete task"})})]},o))})};var Z={name:"qrw9l4",styles:"margin-top:1.6rem"};const q=()=>n(D,{as:"main",css:Z,children:n(Y,{})}),ee=i("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),te=i("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),re=i("button",{target:"e13n8af10"})(({theme:{palette:e,mq:t}})=>`
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${e.colorTheme===d.dark?"sun":"moon"}.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${t.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),oe=()=>{const[{colorTheme:e},t]=b(),r=e===d.dark,a=()=>{t(M(r?d.light:d.dark))};return h(ee,{children:[n(te,{children:"Todo"}),n(re,{role:"switch","aria-checked":r,onClick:a,children:n("span",{css:g,children:"Dark theme"})})]})},ne=i("div",{target:"e1db1otb1"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),se=i("div",{target:"e1db1otb0"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),ie=()=>{const[{colorTheme:e}]=b();return h(E,{theme:A(e),children:[n(I,{}),n(ne,{children:h(se,{children:[n(oe,{}),n(q,{})]})})]})};G.render(n(j.StrictMode,{children:n(F,{children:n(ie,{})})}),document.getElementById("root"));
//# sourceMappingURL=index.ad1cb7cf.js.map
