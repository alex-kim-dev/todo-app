var S=Object.defineProperty,U=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&x(e,r,t[r]);if($)for(var r of $(t))L.call(t,r)&&x(e,r,t[r]);return e},w=(e,t)=>U(e,O(t));import{n as g,p as E,r as h,j as o,G as D,c as j,a,b as c,T as N,R as P,d as G}from"./vendor.3276dfbe.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};M();var l;(function(e){e.setColorTheme="SET_COLOR_THEME",e.addTodo="ADD_TODO",e.toggleTodoCompletion="TOGGLE_TASK_COMPLETION",e.deleteTodo="DELETE_TODO",e.clearCompleted="CLEAR_COMPLETED",e.setFilter="SET_FILTER"})(l||(l={}));const I=e=>({type:l.setColorTheme,payload:e}),H=e=>({type:l.addTodo,payload:e}),R=e=>({type:l.toggleTodoCompletion,payload:e}),_=e=>({type:l.deleteTodo,payload:e}),B=()=>({type:l.clearCompleted}),J=e=>({type:l.setFilter,payload:e});var m;(function(e){e.light="light",e.dark="dark"})(m||(m={}));var p;(function(e){e.all="all",e.active="active",e.completed="completed"})(p||(p={}));const v={colorTheme:window.matchMedia("(prefers-color-scheme: dark)").matches?m.dark:m.light,todos:[{id:g(),task:"Complete online JavaScript course",completed:!0},{id:g(),task:"Jog around the park 3x",completed:!1},{id:g(),task:"10 minutes meditation",completed:!1},{id:g(),task:"Read for 1 hour",completed:!1},{id:g(),task:"Pick up groceries",completed:!1},{id:g(),task:"Complete Todo App on Frontend Mentor",completed:!1}],todosFilter:p.all},A=E((e,t)=>{switch(t.type){case l.setColorTheme:{e.colorTheme=t.payload;break}case l.addTodo:{const r={id:g(),task:t.payload,completed:!1};e.todos.push(r);break}case l.toggleTodoCompletion:{const r=e.todos.find(({id:s})=>s===t.payload);r&&(r.completed=!r.completed);break}case l.deleteTodo:{const r=e.todos.findIndex(({id:s})=>s===t.payload);r!==-1&&e.todos.splice(r,1);break}case l.clearCompleted:{const r=e.todos.filter(({completed:s})=>!s);e.todos=r;break}case l.setFilter:{e.todosFilter=t.payload;break}}}),C=h.exports.createContext([v,()=>{}]),u=()=>h.exports.useContext(C),K=({children:e})=>{const[t,r]=h.exports.useReducer(A,v,n=>{try{const i=window.localStorage.getItem("global-state");return i?JSON.parse(i):n}catch{return console.error("Local storage is not accessible, the app state won't be saved!"),n}});h.exports.useEffect(()=>{try{window.localStorage.setItem("global-state",JSON.stringify(t))}catch{}},[t]);const s=h.exports.useMemo(()=>[t,r],[t]);return o(C.Provider,{value:s,children:e})},W=({palette:e})=>j("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;letter-spacing:-0.015em;word-break:break-word;}",""),b={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},X=()=>o(D,{styles:W});var f=a("div",{target:"e1wulm1d0"})(({theme:{palette:e}})=>`
    background-color: ${e.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,"");const Q=a(f.withComponent("fieldset",{target:"egp8u9a2"}),{target:"egp8u9a1"})(({theme:{mq:e}})=>`
    margin: 1.6rem 0 0;
    padding: 1.8rem 1.6rem 1.6rem;
    border: 0;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;

    ${e.mdUp} {
      position: absolute;
      bottom: 0;
      left: 50%;
      max-width: 22rem;
      background-color: transparent;
      box-shadow: none;
      transform: translateX(-50%);
    }
  `,""),V=a("label",{target:"egp8u9a0"})(({theme:{palette:e},checked:t})=>`
    display: inline-block;
    position: relative;
    color: ${t?e.accent:e.textSecondary};
    text-transform: capitalize;
    transition: color 0.15s;

    &:not(:first-of-type) {
      margin-left: 1.8rem;
    }

    &:hover {
      ${t?"":`color: ${e.text};`}
    }

    & > input {
      appearance: none;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  `,""),Y=({option:e,onChange:t})=>c(Q,{"aria-controls":"todo-list",children:[o("legend",{css:b,children:"Filter todos"}),Object.values(p).map(r=>c(V,{checked:e===r,children:[r,o("input",{type:"radio",name:"filter",value:r,checked:e===r,onChange:t})]},r))]}),Z=a("label",{target:"ejxft1h0"})(({theme:{mq:e,palette:t},checked:r})=>`
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
  `,""),q=({checked:e,onChange:t})=>c(Z,{checked:e,children:[o("span",{css:b,children:e?"Completed":"To do"}),o("span",{}),o("input",{type:"checkbox",checked:e,onChange:t})]}),ee=a("ul",{target:"e911m033"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),te=a("li",{target:"e911m032"})(({theme:{mq:e,palette:t}})=>`
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    box-sizing: content-box;
    border-bottom: 0.1rem solid ${t.muted};

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }

    ${e.smUp} {
      padding: 1.8rem 2.2rem;

      & > :not(:last-child) {
        margin-right: 1.8rem;
      }

      &:hover > button {
        background-image: url('./icon-cross.svg');
      }
    }

    ${e.mdUp} {
      padding: 2rem 2.4rem;

      & > :not(:last-child) {
        margin-right: 2.4rem;
      }
    }
  `,""),re=a("p",{target:"e911m031"})(({theme:{mq:e,palette:t},completed:r})=>`
    flex: 1;
    font-size: 1.2rem;

    ${r?`
          text-decoration: line-through;
          color: ${t.textSecondary};
        `:""}

    ${e.smUp} {
      font-size: 1.5rem;
    }

    ${e.mdUp} {
      font-size: 1.8rem;
    }
  `,""),oe=a("button",{target:"e911m030"})(({theme:{mq:e,palette:t}})=>`
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

    &:focus {
      background-image: url('./icon-cross.svg');
    }

    ${e.smUp} {
      --size: 1.5rem;
      background-image: none;
    }

    ${e.mdUp} {
      --size: 1.8rem;
    }
  `,""),ne={[p.all]:()=>!0,[p.active]:e=>!e,[p.completed]:e=>e},ae=()=>{const[{todos:e,todosFilter:t},r]=u(),s=d=>()=>{r(R(d))},n=d=>()=>{r(_(d))},i=e.filter(({completed:d})=>ne[t](d));return o(ee,{id:"todo-list","aria-label":"Todo list",children:i.map(({id:d,task:z,completed:y})=>c(te,{children:[o(q,{checked:y,onChange:s(d)}),o(re,{completed:y,children:z}),o(oe,{type:"button",onClick:n(d),"aria-controls":"todo-list",children:o("span",{css:b,children:"Delete task"})})]},d))})},se=a("main",{target:"e10xdka92"})(({theme:{mq:e}})=>`
    position: relative;
    margin-top: 1.6rem;

    ${e.mdUp} {
      margin-top: 2.4rem;
    }
  `,""),ie=a("div",{target:"e10xdka91"})(({theme:{palette:e,mq:t}})=>`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem 2rem 2rem;
    color: ${e.textSecondary};
    font-size: 1.2rem;

    & > span {
      grid-area: 1 / 1 / -1 / 2;
    }

    & > button {
      justify-self: end;
      grid-area: 1 / -2 / -1 / -1;
    }

    ${t.smUp} {
      padding: 1.9rem 2.4rem 1.7rem;
      font-size: 1.4rem;
    }

    ${t.mdUp} {
      grid-template-columns: 1fr 22rem 1fr;
      min-height: 5rem;
    }
  `,""),de=a("button",{target:"e10xdka90"})(({theme:{palette:e}})=>`
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
  `,""),le=()=>{const[{todos:e,todosFilter:t},r]=u(),s=`${e.length} item${e.length===1?"":"s"} left`,n=()=>{r(B())},i=({currentTarget:d})=>{r(J(d.value))};return c(se,{children:[c(f,{children:[o(ae,{}),c(ie,{children:[o("span",{role:"status",children:s}),o(de,{type:"button",onClick:n,children:"Clear Completed"})]})]}),o(Y,{option:t,onChange:i})]})},ce=a("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),me=a("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),ge=a("button",{target:"e13n8af10"})(({theme:{palette:e,mq:t}})=>`
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${e.colorTheme===m.dark?"sun":"moon"}.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${t.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),pe=()=>{const[{colorTheme:e},t]=u(),r=e===m.dark,s=()=>{t(I(r?m.light:m.dark))};return c(ce,{children:[o(me,{children:"Todo"}),o(ge,{type:"button",role:"switch","aria-checked":r,onClick:s,children:o("span",{css:b,children:"Dark theme"})})]})},he=a(f.withComponent("form",{target:"e1r2t7rn4"}),{target:"e1r2t7rn3"})(({theme:{mq:e}})=>`
    margin-top: 3.3rem;

    ${e.mdUp} {
      margin-top: 4rem;
    }
  `,""),ue=a("label",{target:"e1r2t7rn2"})({name:"mh4ozg",styles:"display:grid;align-items:center"}),be=a("span",{target:"e1r2t7rn1"})(({theme:{palette:e,mq:t}})=>`
    --size: 2rem;
    grid-area: 1 / 1 / 2 / -1;
    display: block;
    margin-left: 2rem;
    width: var(--size);
    height: var(--size);
    border: 0.1rem solid ${e.muted};
    border-radius: 50%;

    ${t.smUp} {
      --size: 2.4rem;
      margin-left: 2.2rem;
    }

    ${t.mdUp} {
      margin-left: 2.4rem;
    }
  `,""),fe=a("input",{target:"e1r2t7rn0"})(({theme:{palette:e,mq:t}})=>`
    grid-area: 1 / 1 / -1 / -1;
    padding: 1.9rem 2rem 1.7rem 5.2rem;
    width: 100%;
    border: 0;
    background-color: transparent;
    font-size: 1.2rem;
    color: ${e.text};

    &::placeholder {
      color: ${e.textSecondary};
    }

    ${t.smUp} {
      padding: 2rem 2.2rem 2rem 6.4rem;
      font-size: 1.6rem;
    }

    ${t.mdUp} {
      padding: 2.4rem 2.4rem 2.2rem 7.2rem;
      font-size: 1.8rem;
    }
  `,""),ke=()=>{const[,e]=u();return o(he,{"aria-label":"New todo form",onSubmit:r=>{r.preventDefault();const s=r.currentTarget,n=new FormData(s).get("new-todo").trim();!n||(e(H(n)),s.reset())},children:c(ue,{children:[o("span",{css:b,children:"New task"}),o(be,{}),o(fe,{type:"text",name:"new-todo",placeholder:"Create a new todo\u2026"})]})})},k=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,ye={[m.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(0, 0%, 100%)",bgHover:"hsl(233, 11%, 84%)",text:"hsl(235, 19%, 35%)",textSecondary:"hsl(236, 9%, 61%)",muted:"hsl(234, 39%, 85%)"},[m.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(235, 24%, 19%)",bgHover:"hsl(235, 21%, 11%)",text:"hsl(234, 39%, 85%)",textSecondary:"hsl(234, 11%, 52%)",muted:"hsl(233, 14%, 35%)"}},$e=e=>{var t;return{palette:w(T({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(t=ye[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:k(450),mdUp:k(768),xlUp:k(1440)}}},xe=a("div",{target:"e1db1otb2"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),Te=a("div",{target:"e1db1otb1"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),we=a("p",{target:"e1db1otb0"})(({theme:{palette:e,mq:t}})=>`
    margin-top: 4.3rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${e.textSecondary};

    ${t.mdUp} {
      margin-top: 5.2rem;
    }
  `,""),ve=()=>{const[{colorTheme:e}]=u();return c(N,{theme:$e(e),children:[o(X,{}),o(xe,{children:c(Te,{children:[o(pe,{}),o(ke,{}),o(le,{}),o(we,{children:"Drag and drop to reorder list"})]})})]})};P.render(o(G.StrictMode,{children:o(K,{children:o(ve,{})})}),document.getElementById("root"));
//# sourceMappingURL=index.5b169b46.js.map
