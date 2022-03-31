var P=Object.defineProperty,j=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&L(e,r,t[r]);if($)for(var r of $(t))I.call(t,r)&&L(e,r,t[r]);return e},C=(e,t)=>j(e,H(t));var R=(e,t)=>{var r={};for(var n in e)U.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&I.call(e,n)&&(r[n]=e[n]);return r};import{n as h,p as K,r as m,j as o,G as B,c as _,a as d,b as l,u as J,C as A,d as W,e as w,T as X,M as Q,f as V,S as Y,v as Z,D as q,g as ee,s as te,K as re,h as oe,i as ne,R as ae}from"./vendor.fc53a0b7.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};se();var p=(e=>(e.setColorTheme="SET_COLOR_THEME",e.addTodo="ADD_TODO",e.toggleTodoCompletion="TOGGLE_TASK_COMPLETION",e.deleteTodo="DELETE_TODO",e.clearCompleted="CLEAR_COMPLETED",e.setFilter="SET_FILTER",e.reorderTodos="REORDER_TODOS",e))(p||{});const de=e=>({type:"SET_COLOR_THEME",payload:e}),ie=e=>({type:"ADD_TODO",payload:e}),ce=e=>({type:"TOGGLE_TASK_COMPLETION",payload:e}),le=e=>({type:"DELETE_TODO",payload:e}),me=()=>({type:"CLEAR_COMPLETED"}),ge=e=>({type:"SET_FILTER",payload:e}),pe=e=>({type:"REORDER_TODOS",payload:e});var g=(e=>(e.light="light",e.dark="dark",e))(g||{}),f=(e=>(e.all="all",e.active="active",e.completed="completed",e))(f||{});const M={colorTheme:window.matchMedia("(prefers-color-scheme: dark)").matches?g.dark:g.light,todos:[{id:h(),task:"Complete online JavaScript course",completed:!0},{id:h(),task:"Jog around the park 3x",completed:!1},{id:h(),task:"10 minutes meditation",completed:!1},{id:h(),task:"Read for 1 hour",completed:!1},{id:h(),task:"Pick up groceries",completed:!1},{id:h(),task:"Complete Todo App on Frontend Mentor",completed:!1}],todosFilter:f.all},he=K((e,t)=>{switch(t.type){case p.setColorTheme:{e.colorTheme=t.payload;break}case p.addTodo:{const r={id:h(),task:t.payload,completed:!1};e.todos.push(r);break}case p.toggleTodoCompletion:{const r=e.todos.find(({id:n})=>n===t.payload);r&&(r.completed=!r.completed);break}case p.deleteTodo:{const r=e.todos.findIndex(({id:n})=>n===t.payload);r!==-1&&e.todos.splice(r,1);break}case p.clearCompleted:{const r=e.todos.filter(({completed:n})=>!n);e.todos=r;break}case p.setFilter:{e.todosFilter=t.payload;break}case p.reorderTodos:{const{todos:r}=e,n=r.findIndex(({id:c})=>c===t.payload.move),a=r.findIndex(({id:c})=>c===t.payload.after),[s]=r.splice(n,1);r.splice(a,0,s);break}}}),G=m.exports.createContext([M,()=>{}]),k=()=>m.exports.useContext(G),ue=({children:e})=>{const[t,r]=m.exports.useReducer(he,M,a=>{try{const s=window.localStorage.getItem("global-state");return s?JSON.parse(s):a}catch{return console.error("Local storage is not accessible, the app state won't be saved!"),a}});m.exports.useEffect(()=>{try{window.localStorage.setItem("global-state",JSON.stringify(t))}catch{}},[t]);const n=m.exports.useMemo(()=>[t,r],[t]);return o(G.Provider,{value:n,children:e})},be=({palette:e})=>_("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;letter-spacing:-0.015em;word-break:break-word;}",""),T={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},fe=()=>o(B,{styles:be});var z=d("div",{target:"e1wulm1d0"})(({theme:{palette:e}})=>`
    background-color: ${e.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,"");const ye=d(z.withComponent("fieldset",{target:"egp8u9a2"}),{target:"egp8u9a1"})(({theme:{mq:e}})=>`
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
  `,""),ke=d("label",{target:"egp8u9a0"})(({theme:{palette:e},checked:t})=>`
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
  `,""),Te=({option:e,onChange:t})=>l(ye,{"aria-controls":"todo-list",children:[o("legend",{css:T,children:"Filter todos"}),Object.values(f).map(r=>l(ke,{checked:e===r,children:[r,o("input",{type:"radio",name:"filter",value:r,checked:e===r,onChange:t})]},r))]}),xe=d("label",{target:"ejxft1h0"})(({theme:{mq:e,palette:t},checked:r})=>`
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
  `,""),$e=({checked:e,onChange:t})=>l(xe,{checked:e,children:[o("span",{css:T,children:e?"Completed":"To do"}),o("span",{}),o("input",{type:"checkbox",checked:e,onChange:t})]}),Se=d("li",{target:"e12cxbpg3"})(({theme:{palette:e},isDragging:t,isOverlay:r})=>`
    margin-top: -0.1rem;
    border-bottom: 0.1rem solid ${e.muted};
    background-color: ${e.bgSecondary};
    ${t?"opacity: 0;":""}
    ${r?`outline: 0.2rem solid ${e.accent};`:""}

    &:not(:first-of-type) {
      border-top: 0.1rem solid ${e.muted};
    }
  `,""),ve=d("div",{target:"e12cxbpg2"})(({theme:{mq:e}})=>`
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    box-sizing: content-box;

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
  `,""),Ce=d("p",{target:"e12cxbpg1"})(({theme:{mq:e,palette:t},completed:r})=>`
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
  `,""),we=d("button",{target:"e12cxbpg0"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),De=m.exports.forwardRef((E,y)=>{var x=E,{todo:e,onComplete:t=()=>{},onDelete:r,className:n,isDragging:a=!1,isOverlay:s=!1}=x,c=R(x,["todo","onComplete","onDelete","className","isDragging","isOverlay"]);const{task:S,completed:v}=e;return m.exports.useEffect(()=>{if(!!s)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[s]),o(Se,{isDragging:a,isOverlay:s,children:l(ve,C(b({ref:y,className:n},c),{children:[o($e,{checked:v,onChange:t}),o(Ce,{completed:v,children:S}),o(we,{type:"button",onClick:r,"aria-controls":"todo-list",children:o("span",{css:T,children:"Delete task"})})]}))})});var N=m.exports.memo(De);const ze=e=>{const{todo:t}=e,{attributes:r,listeners:n,setNodeRef:a,transform:s,transition:c,isDragging:y}=J({id:t.id});return o(N,b(b(b({ref:a,css:_({transform:A.Transform.toString(s),transition:c},"",""),isDragging:y},n),r),e))},F={delay:400,tolerance:5},Ee={id:"0",task:"",completed:!1},Oe=d("ul",{target:"e911m030"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),Le={[f.all]:()=>!0,[f.active]:e=>!e,[f.completed]:e=>e},Ue=()=>{var O;const[{todos:e,todosFilter:t},r]=k(),[n,a]=m.exports.useState(null),s=(O=e.find(({id:i})=>i===n))!=null?O:Ee,c=e.map(({id:i})=>i),y=e.filter(({completed:i})=>Le[t](i)),E=W(w(Q,{activationConstraint:F}),w(X,{activationConstraint:F}),w(re,{coordinateGetter:te})),x=i=>()=>{r(ce(i))},S=i=>()=>{r(le(i))};return o(Oe,{id:"todo-list","aria-label":"Todo list",children:l(ee,{sensors:E,collisionDetection:V,onDragStart:i=>{const{active:u}=i;a(u.id)},onDragEnd:({active:i,over:u})=>{u!=null&&u.id&&r(pe({move:i.id,after:u.id})),a(null)},children:[o(Y,{items:c,strategy:Z,children:y.map(i=>o(ze,{todo:i,onComplete:x(i.id),onDelete:S(i.id)},i.id))}),o(q,{children:n&&o(N,{todo:s,isOverlay:!0})})]})})},Ie=d("main",{target:"e10xdka92"})(({theme:{mq:e}})=>`
    position: relative;
    margin-top: 1.6rem;

    ${e.mdUp} {
      margin-top: 2.4rem;
    }
  `,""),Re=d("div",{target:"e10xdka91"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),Fe=d("button",{target:"e10xdka90"})(({theme:{palette:e}})=>`
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
  `,""),_e=()=>{const[{todos:e,todosFilter:t},r]=k(),n=`${e.length} item${e.length===1?"":"s"} left`,a=()=>{r(me())},s=({currentTarget:c})=>{r(ge(c.value))};return l(Ie,{children:[l(z,{children:[o(Ue,{}),l(Re,{children:[o("span",{role:"status","data-testid":"todo-counter",children:n}),o(Fe,{type:"button",onClick:a,children:"Clear Completed"})]})]}),o(Te,{option:t,onChange:s})]})},Me=d("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),Ge=d("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),Ne=d("button",{target:"e13n8af10"})(({theme:{palette:e,mq:t}})=>`
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${e.colorTheme===g.dark?"sun":"moon"}.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${t.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),Pe=()=>{const[{colorTheme:e},t]=k(),r=e===g.dark,n=()=>{t(de(r?g.light:g.dark))};return l(Me,{children:[o(Ge,{children:"Todo"}),o(Ne,{type:"button",role:"switch","aria-checked":r,onClick:n,children:o("span",{css:T,children:"Dark theme"})})]})},je=d(z.withComponent("form",{target:"e1r2t7rn4"}),{target:"e1r2t7rn3"})(({theme:{mq:e}})=>`
    margin-top: 3.3rem;

    ${e.mdUp} {
      margin-top: 4rem;
    }
  `,""),He=d("label",{target:"e1r2t7rn2"})({name:"mh4ozg",styles:"display:grid;align-items:center"}),Ke=d("span",{target:"e1r2t7rn1"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),Be=d("input",{target:"e1r2t7rn0"})(({theme:{palette:e,mq:t}})=>`
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
  `,""),Je=()=>{const[,e]=k();return o(je,{"aria-label":"New todo form",onSubmit:r=>{r.preventDefault();const n=r.currentTarget,a=new FormData(n).get("new-todo").trim();!a||(e(ie(a)),n.reset())},children:l(He,{children:[o("span",{css:T,children:"New task"}),o(Ke,{}),o(Be,{type:"text",name:"new-todo",placeholder:"Create a new todo\u2026"})]})})},D=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,Ae={[g.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(0, 0%, 100%)",bgHover:"hsl(233, 11%, 84%)",text:"hsl(235, 19%, 35%)",textSecondary:"hsl(236, 9%, 61%)",muted:"hsl(234, 39%, 85%)"},[g.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(235, 24%, 19%)",bgHover:"hsl(235, 21%, 11%)",text:"hsl(234, 39%, 85%)",textSecondary:"hsl(234, 11%, 52%)",muted:"hsl(233, 14%, 35%)"}},We=e=>{var t;return{palette:C(b({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(t=Ae[e])!=null?t:{}),{colorTheme:e}),mq:{smUp:D(450),mdUp:D(768),xlUp:D(1440)}}},Xe=d("div",{target:"e1db1otb2"})(({theme:{mq:e,palette:t}})=>`
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
  `,""),Qe=d("div",{target:"e1db1otb1"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),Ve=d("p",{target:"e1db1otb0"})(({theme:{palette:e,mq:t}})=>`
    margin-top: 4.3rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${e.textSecondary};

    ${t.mdUp} {
      margin-top: 5.2rem;
    }
  `,""),Ye=()=>{const[{colorTheme:e}]=k();return l(oe,{theme:We(e),children:[o(fe,{}),o(Xe,{children:l(Qe,{children:[o(Pe,{}),o(Je,{}),o(_e,{}),o(Ve,{children:"Drag and drop to reorder list"})]})})]})},Ze=document.getElementById("root"),qe=ne(Ze);qe.render(o(ae.StrictMode,{children:o(ue,{children:o(Ye,{})})}));
//# sourceMappingURL=index.032fb68f.js.map
