var $=Object.defineProperty,T=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&k(e,r,t[r]);if(f)for(var r of f(t))S.call(t,r)&&k(e,r,t[r]);return e},x=(e,t)=>T(e,z(t));import{n as h,p as U,r as g,j as o,c as a,G as O,a as L,b as l,T as E,R as j,d as D}from"./vendor.af99ea86.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};G();var d;(function(e){e.setColorTheme="SET_COLOR_THEME",e.toggleTodoCompletion="TOGGLE_TASK_COMPLETION",e.deleteTodo="DELETE_TODO",e.clearCompleted="CLEAR_COMPLETED"})(d||(d={}));const P=e=>({type:d.setColorTheme,payload:e}),H=e=>({type:d.toggleTodoCompletion,payload:e}),M=e=>({type:d.deleteTodo,payload:e}),R=()=>({type:d.clearCompleted});var c;(function(e){e.light="light",e.dark="dark"})(c||(c={}));const u=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,_={[c.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(0, 0%, 100%)",bgHover:"hsl(233, 11%, 84%)",text:"hsl(235, 19%, 35%)",textSecondary:"hsl(236, 9%, 61%)",muted:"hsl(234, 39%, 85%)"},[c.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(235, 24%, 19%)",bgHover:"hsl(235, 21%, 11%)",text:"hsl(234, 39%, 85%)",textSecondary:"hsl(234, 11%, 52%)",muted:"hsl(233, 14%, 35%)"}},B=e=>{var t;return{palette:x(y({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(t=_[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:u(450),mdUp:u(768),xlUp:u(1440)}}},C={colorTheme:c.dark,todos:[{id:h(),task:"Complete online JavaScript course",completed:!0},{id:h(),task:"Jog around the park 3x",completed:!1},{id:h(),task:"10 minutes meditation",completed:!1},{id:h(),task:"Read for 1 hour",completed:!1},{id:h(),task:"Pick up groceries",completed:!1},{id:h(),task:"Complete Todo App on Frontend Mentor",completed:!1}]},I=U((e,t)=>{switch(t.type){case d.setColorTheme:{e.colorTheme=t.payload;break}case d.toggleTodoCompletion:{const r=e.todos.find(({id:s})=>s===t.payload);r&&(r.completed=!r.completed);break}case d.deleteTodo:{const r=e.todos.findIndex(({id:s})=>s===t.payload);r!==-1&&e.todos.splice(r,1);break}case d.clearCompleted:{const r=e.todos.filter(({completed:s})=>!s);e.todos=r;break}}}),v=g.exports.createContext([C,()=>{}]),p=()=>g.exports.useContext(v),N=({children:e})=>{const t=g.exports.useReducer(I,C);return o(v.Provider,{value:t,children:e})};var A=a("div",{target:"e1wulm1d0"})(({theme:{palette:e}})=>`
    background-color: ${e.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,"");const F=({palette:e})=>L("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;letter-spacing:-0.015em;word-break:break-word;}",""),b={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},J=()=>o(O,{styles:F}),K=a("label",{target:"ejxft1h0"})(({theme:{mq:e,palette:t},checked:r})=>`
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
  `,""),W=({checked:e,onChange:t})=>l(K,{checked:e,children:[o("span",{css:b,children:e?"Completed":"To do"}),o("span",{}),o("input",{type:"checkbox",checked:e,onChange:t})]}),Q=a("ul",{target:"e911m033"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),V=a("li",{target:"e911m032"})(({theme:{mq:e,palette:t}})=>`
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    box-sizing: content-box;
    border-bottom: 0.1rem solid ${t.muted};

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
  `,""),X=a("p",{target:"e911m031"})(({theme:{mq:e,palette:t},completed:r})=>`
    flex: 1;
    font-size: 1.2rem;

    ${r&&`
        text-decoration: line-through;
        color: ${t.textSecondary};
      `}

    ${e.smUp} {
      font-size: 1.5rem;
    }

    ${e.mdUp} {
      font-size: 1.8rem;
    }
  `,""),Y=a("button",{target:"e911m030"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),Z=()=>{const[{todos:e},t]=p(),r=n=>()=>{t(H(n))},s=n=>()=>{t(M(n))};return o(Q,{id:"todo-list",children:e.map(({id:n,task:i,completed:m})=>l(V,{children:[o(W,{checked:m,onChange:r(n)}),o(X,{completed:m,children:i}),o(Y,{type:"button",onClick:s(n),children:o("span",{css:b,children:"Delete task"})})]},n))})},q=a("div",{target:"e10xdka91"})(({theme:{palette:e,mq:t}})=>`
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem 2rem;
    color: ${e.textSecondary};
    font-size: 1.2rem;

    ${t.smUp} {
      padding: 1.9rem 2.4rem 1.7rem;
      font-size: 1.4rem;
    }
  `,""),ee=a("button",{target:"e10xdka90"})(({theme:{palette:e}})=>`
    margin: -1rem -0.4rem;
    padding: 1rem 0.4rem;
    border: 0;
    border-radius: 0.5rem;
    background: none;
    color: inherit;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover, &:active {
      background-color: ${e.bgHover};
      color: ${e.text};
    }
  `,"");var te={name:"qrw9l4",styles:"margin-top:1.6rem"};const re=()=>{const[{todos:e},t]=p(),r=`${e.length} item${e.length===1?"":"s"} left`,s=()=>{t(R())};return l(A,{as:"main",css:te,children:[o(Z,{}),l(q,{children:[o("span",{children:r}),o(ee,{type:"button",onClick:s,children:"Clear Completed"})]})]})},oe=a("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),ne=a("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),se=a("button",{target:"e13n8af10"})(({theme:{palette:e,mq:t}})=>`
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${e.colorTheme===c.dark?"sun":"moon"}.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${t.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),ae=()=>{const[{colorTheme:e},t]=p(),r=e===c.dark,s=()=>{t(P(r?c.light:c.dark))};return l(oe,{children:[o(ne,{children:"Todo"}),o(se,{role:"switch","aria-checked":r,onClick:s,children:o("span",{css:b,children:"Dark theme"})})]})},ie=a("div",{target:"e1db1otb2"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),de=a("div",{target:"e1db1otb1"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),ce=a("p",{target:"e1db1otb0"})(({theme:{palette:e,mq:t}})=>`
    margin-top: 4.3rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${e.textSecondary};

    ${t.mdUp} {
      margin-top: 5.2rem;
    }
  `,""),le=()=>{const[{colorTheme:e}]=p();return l(E,{theme:B(e),children:[o(J,{}),o(ie,{children:l(de,{children:[o(ae,{}),o(re,{}),o(ce,{children:"Drag and drop to reorder list"})]})})]})};j.render(o(D.StrictMode,{children:o(N,{children:o(le,{})})}),document.getElementById("root"));
//# sourceMappingURL=index.dd1b31ce.js.map
