var v=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&k(e,t,r[t]);if(f)for(var t of f(r))U.call(r,t)&&k(e,t,r[t]);return e},$=(e,r)=>w(e,z(r));import{n as m,p as O,r as u,j as o,c as a,G as D,a as L,b as l,T as E,R as j,d as G}from"./vendor.af99ea86.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};P();var i;(function(e){e.setColorTheme="SET_COLOR_THEME",e.addTodo="ADD_TODO",e.toggleTodoCompletion="TOGGLE_TASK_COMPLETION",e.deleteTodo="DELETE_TODO",e.clearCompleted="CLEAR_COMPLETED"})(i||(i={}));const H=e=>({type:i.setColorTheme,payload:e}),M=e=>({type:i.addTodo,payload:e}),N=e=>({type:i.toggleTodoCompletion,payload:e}),F=e=>({type:i.deleteTodo,payload:e}),R=()=>({type:i.clearCompleted});var c;(function(e){e.light="light",e.dark="dark"})(c||(c={}));const b=e=>`@media (min-width: ${(e/16).toFixed(2)}em)`,_={[c.light]:{bgPrimary:"hsl(0, 0%, 98%)",bgSecondary:"hsl(0, 0%, 100%)",bgHover:"hsl(233, 11%, 84%)",text:"hsl(235, 19%, 35%)",textSecondary:"hsl(236, 9%, 61%)",muted:"hsl(234, 39%, 85%)"},[c.dark]:{bgPrimary:"hsl(235, 21%, 11%)",bgSecondary:"hsl(235, 24%, 19%)",bgHover:"hsl(235, 21%, 11%)",text:"hsl(234, 39%, 85%)",textSecondary:"hsl(234, 11%, 52%)",muted:"hsl(233, 14%, 35%)"}},I=e=>{var r;return{palette:$(y({accent:"hsl(220, 98%, 61%)",bgGradient:{from:"hsl(192, 100%, 67%)",to:"hsl(280, 87%, 65%)"},white:"hsl(0, 0%, 100%)"},(r=_[e])!=null?r:{}),{colorTheme:e}),mq:{smUp:b(450),mdUp:b(768),xlUp:b(1440)}}},x={colorTheme:c.dark,todos:[{id:m(),task:"Complete online JavaScript course",completed:!0},{id:m(),task:"Jog around the park 3x",completed:!1},{id:m(),task:"10 minutes meditation",completed:!1},{id:m(),task:"Read for 1 hour",completed:!1},{id:m(),task:"Pick up groceries",completed:!1},{id:m(),task:"Complete Todo App on Frontend Mentor",completed:!1}]},B=O((e,r)=>{switch(r.type){case i.setColorTheme:{e.colorTheme=r.payload;break}case i.addTodo:{const t={id:m(),task:r.payload,completed:!1};e.todos.push(t);break}case i.toggleTodoCompletion:{const t=e.todos.find(({id:d})=>d===r.payload);t&&(t.completed=!t.completed);break}case i.deleteTodo:{const t=e.todos.findIndex(({id:d})=>d===r.payload);t!==-1&&e.todos.splice(t,1);break}case i.clearCompleted:{const t=e.todos.filter(({completed:d})=>!d);e.todos=t;break}}}),T=u.exports.createContext([x,()=>{}]),p=()=>u.exports.useContext(T),A=({children:e})=>{const r=u.exports.useReducer(B,x);return o(T.Provider,{value:r,children:e})};var C=a("div",{target:"e1wulm1d0"})(({theme:{palette:e}})=>`
    background-color: ${e.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,"");const J=({palette:e})=>L("html{font-size:62.5%;}body{background-color:",e.bgPrimary,";color:",e.text,";font-size:1.6rem;font-family:'Josefin Sans',sans-serif;line-height:normal;letter-spacing:-0.015em;word-break:break-word;}",""),g={name:"91ig8t",styles:"position:absolute;width:1px;height:1px;padding:0;border:0;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)"},K=()=>o(D,{styles:J}),W=a("label",{target:"ejxft1h0"})(({theme:{mq:e,palette:r},checked:t})=>`
    --size: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    ${t?"":`border: 0.1rem solid ${r.muted};`}
    border-radius: 50%;
    background:
      center no-repeat url('./icon-check.svg'),
      linear-gradient(
        135deg,
        ${r.bgGradient.from},
        ${r.bgGradient.to}
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
      ${t?"":`background-color: ${r.bgSecondary};`}
    }
  `,""),Q=({checked:e,onChange:r})=>l(W,{checked:e,children:[o("span",{css:g,children:e?"Completed":"To do"}),o("span",{}),o("input",{type:"checkbox",checked:e,onChange:r})]}),V=a("ul",{target:"e911m033"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),X=a("li",{target:"e911m032"})(({theme:{mq:e,palette:r}})=>`
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    box-sizing: content-box;
    border-bottom: 0.1rem solid ${r.muted};

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }

    ${e.smUp} {
      padding: 1.8rem 2.2rem;

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
  `,""),Y=a("p",{target:"e911m031"})(({theme:{mq:e,palette:r},completed:t})=>`
    flex: 1;
    font-size: 1.2rem;

    ${t?`
          text-decoration: line-through;
          color: ${r.textSecondary};
        `:""}

    ${e.smUp} {
      font-size: 1.5rem;
    }

    ${e.mdUp} {
      font-size: 1.8rem;
    }
  `,""),Z=a("button",{target:"e911m030"})(({theme:{mq:e,palette:r}})=>`
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
      background-color: ${r.bgHover};
    }

    ${e.smUp} {
      --size: 1.5rem;
      opacity: 0;
    }

    ${e.mdUp} {
      --size: 1.8rem;
    }
  `,""),q=()=>{const[{todos:e},r]=p(),t=n=>()=>{r(N(n))},d=n=>()=>{r(F(n))};return o(V,{id:"todo-list",children:e.map(({id:n,task:s,completed:h})=>l(X,{children:[o(Q,{checked:h,onChange:t(n)}),o(Y,{completed:h,children:s}),o(Z,{type:"button",onClick:d(n),children:o("span",{css:g,children:"Delete task"})})]},n))})},ee=a(C,{target:"e10xdka92"})(({theme:{mq:e}})=>`
    margin-top: 1.6rem;

    ${e.mdUp} {
      margin-top: 2.4rem;
    }
  `,""),re=a("div",{target:"e10xdka91"})(({theme:{palette:e,mq:r}})=>`
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem 2rem;
    color: ${e.textSecondary};
    font-size: 1.2rem;

    ${r.smUp} {
      padding: 1.9rem 2.4rem 1.7rem;
      font-size: 1.4rem;
    }
  `,""),te=a("button",{target:"e10xdka90"})(({theme:{palette:e}})=>`
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
  `,""),oe=()=>{const[{todos:e},r]=p(),t=`${e.length} item${e.length===1?"":"s"} left`,d=()=>{r(R())};return l(ee,{as:"main",children:[o(q,{}),l(re,{children:[o("span",{children:t}),o(te,{type:"button",onClick:d,children:"Clear Completed"})]})]})},ne=a("header",{target:"e13n8af12"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),ae=a("h1",{target:"e13n8af11"})(({theme:{palette:e,mq:r}})=>`
    color: ${e.white};
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: 0.37em;
    text-transform: uppercase;

    ${r.smUp} {
      font-size: 3.4rem;
    }

    ${r.mdUp} {
      font-size: 4rem;
    }
  `,""),de=a("button",{target:"e13n8af10"})(({theme:{palette:e,mq:r}})=>`
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

    ${r.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,""),se=()=>{const[{colorTheme:e},r]=p(),t=e===c.dark,d=()=>{r(H(t?c.light:c.dark))};return l(ne,{children:[o(ae,{children:"Todo"}),o(de,{role:"switch","aria-checked":t,onClick:d,children:o("span",{css:g,children:"Dark theme"})})]})},ie=a(C.withComponent("form",{target:"e1r2t7rn4"}),{target:"e1r2t7rn3"})(({theme:{mq:e}})=>`
    margin-top: 3.3rem;

    ${e.mdUp} {
      margin-top: 4rem;
    }
  `,""),ce=a("label",{target:"e1r2t7rn2"})({name:"mh4ozg",styles:"display:grid;align-items:center"}),le=a("div",{target:"e1r2t7rn1"})(({theme:{palette:e,mq:r}})=>`
    --size: 2rem;
    grid-area: 1 / 1 / 2 / -1;
    margin-left: 2rem;
    width: var(--size);
    height: var(--size);
    border: 0.1rem solid ${e.muted};
    border-radius: 50%;

    ${r.smUp} {
      --size: 2.4rem;
      margin-left: 2.2rem;
    }

    ${r.mdUp} {
      margin-left: 2.4rem;
    }
  `,""),me=a("input",{target:"e1r2t7rn0"})(({theme:{palette:e,mq:r}})=>`
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

    ${r.smUp} {
      padding: 2rem 2.2rem 2rem 6.4rem;
      font-size: 1.6rem;
    }

    ${r.mdUp} {
      padding: 2.4rem 2.4rem 2.2rem 7.2rem;
      font-size: 1.8rem;
    }
  `,""),he=()=>{const[,e]=p();return o(ie,{onSubmit:t=>{var s;t.preventDefault();const d=t.currentTarget,n=(s=new FormData(d).get("new-todo").trim())!=null?s:"";e(M(n)),d.reset()},children:l(ce,{children:[o("span",{css:g,children:"New task"}),o(le,{}),o(me,{type:"text",name:"new-todo",placeholder:"Create a new todo\u2026"})]})})},pe=a("div",{target:"e1db1otb2"})(({theme:{mq:e,palette:r}})=>`
    background: top center / 100% auto no-repeat
      url('./bg-mobile-${r.colorTheme}.jpg');
    padding: 4.8rem 2.4rem;
    min-height: 100vh;

    ${e.smUp} {
      background-image: url('./bg-desktop-${r.colorTheme}.jpg');
      background-size: auto;
      padding: 6.4rem 3rem;
    }

    ${e.mdUp} {
      padding: 7.8rem 3rem;
    }

    ${e.xlUp} {
      background-size: 100%;
    }
  `,""),ge=a("div",{target:"e1db1otb1"})({name:"1ddyh2h",styles:"max-width:54rem;margin:0 auto"}),ue=a("p",{target:"e1db1otb0"})(({theme:{palette:e,mq:r}})=>`
    margin-top: 4.3rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${e.textSecondary};

    ${r.mdUp} {
      margin-top: 5.2rem;
    }
  `,""),be=()=>{const[{colorTheme:e}]=p();return l(E,{theme:I(e),children:[o(K,{}),o(pe,{children:l(ge,{children:[o(se,{}),o(he,{}),o(oe,{}),o(ue,{children:"Drag and drop to reorder list"})]})})]})};j.render(o(G.StrictMode,{children:o(A,{children:o(be,{})})}),document.getElementById("root"));
//# sourceMappingURL=index.7661100d.js.map
