(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{10:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(8);var c=n(6),i=n(2),a=n(1),l=(n(10),n(0)),r=function(e){return Object(l.jsx)("div",{className:"preview-section",children:e.children})},s=function(e){return Object(l.jsx)("h2",{children:e.title})},o=function(e){return Object(l.jsx)("div",{className:"notes-section",children:e.children})},j=function(e){return Object(l.jsx)("ul",{className:"notes-list",children:e.children})},u=function(e){var t=e.title,n=e.noteClicked,c=e.active;return Object(l.jsx)("li",{className:"note-item ".concat(c&&"active"),onClick:n,children:t})},d=function(e){var t=e.title,n=e.content,c=e.changeContentHandler,i=e.changeTitleHandler,a=e.clickHandler,r=e.formTitle;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:r}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",name:"title",className:"form-input mb-30",placeholder:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646",value:t,onChange:i}),Object(l.jsx)("textarea",{rows:"10",name:"content",className:"form-input",placeholder:"\u0627\u0644\u0646\u0635",value:n,onChange:c}),Object(l.jsx)("a",{href:"#",className:"button green",onClick:a,children:"\u062d\u0641\u0638"})]})]})},b=function(e){return e.validateMessages.map((function(e,t){console.log(e)})),Object(l.jsx)("div",{className:"alert-container",children:Object(l.jsx)("ul",{children:e.validateMessages.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})})};var f=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],f=t[1],O=Object(a.useState)(!1),h=Object(i.a)(O,2),x=h[0],v=h[1],m=Object(a.useState)(""),g=Object(i.a)(m,2),p=g[0],N=g[1],S=Object(a.useState)(""),k=Object(i.a)(S,2),C=k[0],H=k[1],I=Object(a.useState)([]),T=Object(i.a)(I,2),w=T[0],J=T[1],y=Object(a.useState)(null),M=Object(i.a)(y,2),E=M[0],A=M[1],B=Object(a.useState)([]),D=Object(i.a)(B,2),q=D[0],z=D[1],F=function(){var e=[],t=!0;return p||(e.push(" \u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t=!1),C||(e.push("\u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t=!1),z(e),t};Object(a.useEffect)((function(){localStorage.getItem("notes")?J(JSON.parse(localStorage.getItem("notes"))):localStorage.setItem("notes",JSON.stringify([]))}),[]);var G=function(e,t){localStorage.setItem(e,JSON.stringify(t))},K=function(e){N(e.target.value)},L=function(){if(F()){var e={id:new Date,title:p,content:C},t=[e].concat(Object(c.a)(w));G("notes",t),J(t),f(!1),A(e.id),N(e.title),H(e.content)}},P=function(e){H(e.target.value)},Q=function(e){f(!1),v(!0)},R=function(){if(F()){var e=Object(c.a)(w);e[w.findIndex((function(e){return e.id===E}))]={id:E,title:p,content:C},G("notes",e),J(e),v(!1),N(""),H("")}},U=function(){var e=w,t=w.findIndex((function(e){return e.id===E}));e.splice(t,1),G("notes",e),J(e),v(!1),f(!1),A(null),N(""),H("")};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(o,{children:[Object(l.jsx)(j,{children:w.map((function(e){return Object(l.jsx)(u,{title:e.title,noteClicked:function(){return function(e){var t=w.find((function(t){return t.id===e}));f(!1),v(!1),A(e),N(t.title),H(t.content)}(e.id)},active:E===e.id},e.id)}))}),Object(l.jsx)("button",{className:"add-btn",onClick:function(e){f(!0),v(!1),A(null),N(""),H("")},children:"+"})]}),Object(l.jsx)(r,{children:n?Object(l.jsx)(d,{formTitle:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",title:p,content:C,changeTitleHandler:K,changeContentHandler:P,clickHandler:L}):x?Object(l.jsx)(d,{formTitle:"\u062a\u0639\u062f\u064a\u0644 \u0645\u0644\u0627\u062d\u0638\u0629",title:p,content:C,changeTitleHandler:K,changeContentHandler:P,clickHandler:R}):function(){if(0===w.length)return Object(l.jsx)(s,{title:"\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0644\u0639\u0631\u0636\u0647\u0627"});if(!E)return Object(l.jsx)(s,{title:"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0627\u062d\u0638\u0629 \u0644\u0639\u0631\u0636\u0647\u0627"});var e=w.find((function(e){return e.id===E}));return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"note-operations",children:[Object(l.jsx)("a",{href:"#",onClick:Q,children:Object(l.jsx)("i",{className:"fa fa-pencil-alt"})}),Object(l.jsx)("a",{href:"#",onClick:U,children:Object(l.jsx)("i",{className:"fa fa-trash"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.content})]})]})}()}),0!==q.length&&Object(l.jsx)(b,{validateMessages:q})]})},O=n(7);n.n(O).a.render(Object(l.jsx)(f,{}),document.getElementById("root"))},8:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.c7af605f.chunk.js.map