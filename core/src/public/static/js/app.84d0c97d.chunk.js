(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{204:function(e,n,a){e.exports=a.p+"static/media/gift_box.9136e068.png"},217:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(306),c=a(17),u=a.n(c),s=a(6),l=a.n(s),i=a(14),m=a.n(i),p=a(29),d=a(24),f=a.n(d),g=a(25);function b(){var e=f()(["\n    margin-top: 50px;\n"]);return b=function(){return e},e}function x(){var e=f()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return x=function(){return e},e}function v(){var e=f()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return v=function(){return e},e}function h(){var e=f()(["\n\twidth: 130px;\n\theight: 95px;\n\tmargin-top: 36px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return h=function(){return e},e}function E(){var e=f()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return E=function(){return e},e}g.a.SafeAreaView(E()),g.a.Image(h()),g.a.Text(v()),g.a.Text(x()),g.a.View(b());function w(){var e=f()(["\n    flex: 1;\n    font-size: 18px;\n    color: #3A527B;\n    margin-left: 10px;\n"]);return w=function(){return e},e}function y(){var e=f()(["\n"]);return y=function(){return e},e}function F(){var e=f()(["\n    font-size: 16px;\n    color: #FF5A5A;\n    margin-bottom: 8px;\n    margin-top: 10px;\n    \n"]);return F=function(){return e},e}function k(){var e=f()(["\n    width: 100%;\n    height: 50px;\n    background-color: #ffffff;\n    flex-direction: row;\n    border-radius:10px;\n    margin-bottom: 15px;\n    align-items: center;\n    border: 1px solid #FF5A5A;\n"]);return k=function(){return e},e}g.a.View(k()),g.a.Text(F()),g.a.View(y()),g.a.TextInput(w());function j(){var e=f()(["\n    font-size: 24px;\n    color: #FFFFFF;\n"]);return j=function(){return e},e}function N(){var e=f()(["\n    height: 60px;\n    background-color: #FF5A5A;\n    border-radius: 7px;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);return N=function(){return e},e}g.a.TouchableOpacity(N()),g.a.Text(j());function O(){var e=f()(["\n    font-size: 24px;\n    color: #FF5A5A;\n"]);return O=function(){return e},e}function C(){var e=f()(["\n    height: 60px;\n    background-color: #F8F8F8;\n    border-radius: 7px;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #F8F8F8;\n    margin-top: 15px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);return C=function(){return e},e}g.a.TouchableOpacity(C()),g.a.Text(O());var A=a(71),S=(a(294),a(101)),P=a.n(S),R=function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(P.a.load("token"));case 2:if(!(e=n.sent)){n.next=5;break}return n.abrupt("return",e);case 5:return n.next=7,l.a.awrap(A.a.getItem("token"));case 7:return e=n.sent,n.next=10,l.a.awrap(P.a.save("token",e,{path:"/"}));case 10:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),null,null,null,Promise)},T=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(P.a.save("token",e,{path:"/"}));case 2:return n.next=4,l.a.awrap(A.a.setItem("token",e));case 4:case"end":return n.stop()}}),null,null,null,Promise)},I=function(e,n,a){var t,r,o;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-access-token":a},body:JSON.stringify(e)},c.next=3,l.a.awrap(fetch("https://4br.cc"+n,t));case 3:if(r=c.sent,console.log("Response: ",r),!r.json){c.next=11;break}return console.log("status: "+r.status),c.next=9,l.a.awrap(r.json());case 9:return o=c.sent,c.abrupt("return",o);case 11:return c.abrupt("return",r);case 12:case"end":return c.stop()}}),null,null,null,Promise)},Q=function(e,n){var a,t,r;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","x-access-token":n}},o.next=3,l.a.awrap(fetch("https://4br.cc"+e,a));case 3:if(!(t=o.sent).json){o.next=10;break}return o.next=7,l.a.awrap(t.json());case 7:return r=o.sent,console.log("status: "+t.status),o.abrupt("return",r);case 10:return o.abrupt("return",t);case 11:case"end":return o.stop()}}),null,null,null,Promise)},z="https://4br.cc",V=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(Q("/api/auth/refresh",e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},q=function(e,n){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(I({user_name:e,password:n},"/api/singin"));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),null,null,null,Promise)},D=function(e,n,a){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(I({name:e,user_name:n,password:a},"/api/user"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},B=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(Q("/api/url",e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},L=function(e,n,a){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(I({url:n,slug:a},"/api/url",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},U=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(R());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},G=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(T(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},_=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(P.a.remove("token",{path:"/"}));case 2:return e.next=4,l.a.awrap(A.a.removeItem("token"));case 4:case"end":return e.stop()}}),null,null,null,Promise));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},H=function(e){var n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(R());case 2:return n=a.sent,a.next=5,l.a.awrap(Q("/api/url/"+e,n));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),null,null,null,Promise)},J=(a(160),a(307)),W=a(308),M=a(309),K=a(300),X=a(301),Y=a(302),Z=a(210),$=a(303),ee=a(209),ne=a(304),ae=a(204),te=a.n(ae);a(269);function re(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function oe(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?re(Object(a),!0).forEach((function(n){u()(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var ce=function(){var e=Object(t.useState)(""),n=m()(e,2),a=n[0],o=n[1],c=Object(t.useState)(""),u=m()(c,2),s=u[0],i=u[1],d=Object(t.useState)([{addr:"http://test.com",slug:"",access:0}]),f=m()(d,2),g=f[0],b=f[1],x=Object(t.useState)({slug:!0}),v=m()(x,2),h=v[0],E=v[1],w=Object(p.useNavigation)(),y=function(){var e,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(A.a.getItem("token"));case 2:if(!(e=a.sent)){a.next=9;break}return a.next=6,l.a.awrap(B(e));case 6:return n=a.sent,b(n),a.abrupt("return",!0);case 9:return a.abrupt("return",!1);case 10:case"end":return a.stop()}}),null,null,null,Promise)};Object(t.useEffect)((function(){y()}),[]);var F=function(e){var n=e.target.name,a=e.target.value;"URL"==n?(o(a),console.log(s),""===s&&i(k(5))):"slug"==n&&(i(a),j(a))},k=function(e){for(var n="",a="abcdefghijklmnopqrstuvwxyz0123456789",t=a.length,r=0;r<e;r++)n+=a.charAt(Math.floor(Math.random()*t));return n},j=function(e){var n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(H(e));case 2:(n=a.sent)&&n.isRegistered?E(oe(oe({},h),{slug:!1})):E(oe(oe({},h),{slug:!0}));case 4:case"end":return a.stop()}}),null,null,null,Promise)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{bg:"dark"},r.a.createElement(J.a.Brand,{href:"#home"},r.a.createElement("img",{src:te.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),r.a.createElement(J.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(W.a,{className:"mr-auto"}),r.a.createElement(M.a,{inline:!0},r.a.createElement(K.a,{variant:"outline-success",onClick:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(_());case 2:w.navigate("SignIn");case 3:case"end":return e.stop()}}),null,null,null,Promise)}},"Sair")))),r.a.createElement(X.a,null,r.a.createElement("section",{className:"url-shortener"},r.a.createElement("h2",{className:"title mb-0"},"Encurte seu link:"),r.a.createElement("form",null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement($.a,{className:"mb-3",value:a,onChange:function(e){return F(e)}},r.a.createElement(ee.a,{placeholder:"cole sua url aqui","aria-label":"ole sua url aqui","aria-describedby":"basic-addon1",name:"URL"})))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,{sm:"10"},r.a.createElement($.a,{className:"mb-3",value:s},r.a.createElement(ee.a,{placeholder:"apelido",value:s,onChange:function(e){return F(e)},"aria-label":"apelido","aria-describedby":"basic-addon1",name:"slug",style:h.slug?{}:{color:"#f00"}}))),r.a.createElement(Z.a,{sm:"2"},r.a.createElement(K.a,{variant:"primary",onClick:function(e){var n,t;return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=3;break}return alert("Informe um URL"),e.abrupt("return");case 3:if(""!==s){e.next=6;break}return alert("Informe um Slug"),e.abrupt("return");case 6:return e.next=8,l.a.awrap(A.a.getItem("token"));case 8:if(!(n=e.sent)){e.next=19;break}return e.next=12,l.a.awrap(L(n,a,s));case 12:return t=e.sent,console.log("ret"),console.log(t),t.message&&alert(t.message),t.fields_errors&&alert(t.fields_errors[0].message),y(),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),null,null,null,Promise)}},"Encurtar link")," ")))),r.a.createElement(ne.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"URL"),r.a.createElement("th",null,"Slug"),r.a.createElement("th",null,"Acessos"))),r.a.createElement("tbody",null,g.map((function(e){var n=z+"/"+e.slug;return r.a.createElement("tr",{key:e.slug},r.a.createElement("td",null,e.addr),r.a.createElement("td",null,r.a.createElement("a",{href:n},n),r.a.createElement(K.a,{variant:"outline-secondary",onClick:function(){navigator.clipboard.writeText(n)}},"Copy")),r.a.createElement("td",null,e.access))}))))))};function ue(){var e=f()(["\n    margin-top: 50px;\n"]);return ue=function(){return e},e}function se(){var e=f()(["\n    background-color: #s3C2D1;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n"]);return se=function(){return e},e}r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,"1 of 1"));var le=g.a.SafeAreaView(se()),ie=g.a.ActivityIndicator(ue()),me=function(){var e,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(U());case 2:if(!(e=a.sent)){a.next=14;break}return a.next=6,l.a.awrap(V(e));case 6:if((n=a.sent).token){a.next=11;break}return a.next=10,l.a.awrap(_());case 10:return a.abrupt("return",!1);case 11:return a.next=13,l.a.awrap(G(n.token));case 13:return a.abrupt("return",!0);case 14:return a.abrupt("return",!1);case 15:case"end":return a.stop()}}),null,null,null,Promise)},pe=function(){var e=Object(p.useNavigation)();return Object(t.useEffect)((function(){l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(me());case 2:if(!n.sent){n.next=6;break}e.reset({routes:[{name:"Home"}]}),n.next=7;break;case 6:e.navigate("SignIn");case 7:case"end":return n.stop()}}),null,null,null,Promise)}),[]),r.a.createElement(le,null,r.a.createElement(ie,{size:"large",color:"#FFFFFF"}))},de=a(305),fe=function(e){return r.a.createElement(Y.a,{className:"row py-5 mt-4 align-items-center"},r.a.createElement("div",{className:"col-md-5 pr-lg-5 mb-5 mb-md-0"},r.a.createElement(de.a,{src:a(280),fluid:!0,alt:"",className:"img-fluid mb-3 d-none d-md-block"}),r.a.createElement("h1",null,"4BR: Encurtar liks e gerar QR Code"),r.a.createElement("p",{className:"font-italic text-muted mb-0"},"...")),r.a.createElement("div",{className:"col-md-7 col-lg-6 ml-auto"},e.children))};function ge(){var e=f()(["\n    margin-top: 50px;\n"]);return ge=function(){return e},e}function be(){var e=f()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return be=function(){return e},e}function xe(){var e=f()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return xe=function(){return e},e}function ve(){var e=f()(["\n\twidth: 130px;\n\theight: 95px;\n\tmargin-top: 36px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return ve=function(){return e},e}function he(){var e=f()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return he=function(){return e},e}g.a.SafeAreaView(he()),g.a.Image(ve()),g.a.Text(xe()),g.a.Text(be());var Ee=g.a.View(ge()),we=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(e),console.log(e.token),e.token){n.next=4;break}return n.abrupt("return",!1);case 4:return n.next=6,l.a.awrap(G(e.token));case 6:return console.log("#.4"),n.next=9,l.a.awrap(U());case 9:return n.sent,n.abrupt("return",!0);case 11:case"end":return n.stop()}}),null,null,null,Promise)},ye=function(){var e=Object(t.useState)(""),n=m()(e,2),a=n[0],o=n[1],c=Object(t.useState)(""),u=m()(c,2),s=u[0],i=u[1],d=Object(p.useNavigation)(),f=function(e){var n=e.target.name,a=e.target.value;"email"==n?o(a):"password"==n&&i(a)};return r.a.createElement(X.a,null,r.a.createElement("div",{className:"container-box title"},r.a.createElement("h3",{className:"switch to-sign-in tagline"},"Login"),r.a.createElement("br",null)),r.a.createElement($.a,{className:"mb-3",value:a,onChange:function(e){return f(e)}},r.a.createElement(ee.a,{placeholder:"Nome de Usu\xe1rio","aria-label":"Nome de Usu\xe1rio","aria-describedby":"basic-addon1",name:"email"})),r.a.createElement($.a,{className:"mb-3",value:s,onChange:function(e){return f(e)}},r.a.createElement(ee.a,{placeholder:"Digite sua senha","aria-label":"Digite sua senha","aria-describedby":"basic-addon1",name:"password",type:"password"})),r.a.createElement(Ee,null,r.a.createElement(K.a,{variant:"primary",onClick:function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""==a||""==s){n.next=13;break}return n.next=3,l.a.awrap(q(a,s));case 3:return e=n.sent,n.next=6,l.a.awrap(we(e));case 6:if(!n.sent){n.next=10;break}d.reset({routes:[{name:"Home"}]}),n.next=11;break;case 10:alert("E-mail e/ou senha invalidos");case 11:n.next=14;break;case 13:alert("Informe email e senha!");case 14:case"end":return n.stop()}}),null,null,null,Promise)}},"Login"),r.a.createElement("div",{className:"login-or",style:{position:"relative",fontSize:"18px",color:"#aaa",marginTop:"10px",marginBottom:"10px",paddingTop:"10px",paddingBottom:"10px"}},r.a.createElement("hr",{className:"hr-or",style:{backgroundColor:"#cdcdcd",height:"1px",marginTop:"0px",marginBottom:"0px"}})),r.a.createElement(K.a,{variant:"secondary",onClick:function(){d.reset({routes:[{name:"SignUp"}]})}},"Registre-se")))},Fe=function(){return r.a.createElement("div",null,r.a.createElement(J.a,null),r.a.createElement(X.a,null,r.a.createElement(fe,null,r.a.createElement(ye,null)),r.a.createElement("div",{style:{height:100,marginBottom:0}}),r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"heading-h2 heading-h2--center"},"N\xe3o conhe\xe7o QR Codes. O que devo saber?"),r.a.createElement("p",{className:"paragraph--center"},"Descubra o que voc\xea precisa saber para come\xe7ar."))),r.a.createElement(Y.a,null,r.a.createElement("button",{className:"btn","data-toggle":"collapse"},r.a.createElement("h3",null,"O que \xe9 um QR Code?")),r.a.createElement("p",null,'O QR Code \xe9 uma vers\xe3o bidimensional do c\xf3digo de barras, composto de padr\xf5es de pixels em preto e branco. A Denso Wave pertence \xe0 Denso, uma fornecedora da Toyota, e desenvolveu os c\xf3digos QR para identifica\xe7\xe3o de componentes, a fim de acelerar os processos log\xedsticos de sua produ\xe7\xe3o de autom\xf3veis. Agora, com o uso generalizado de smartphones, o QR Code encontrou seu caminho para o mercado. "QR" significa "Quick Response" (Resposta R\xe1pida), o que se refere ao acesso instant\xe2neo \xe0s informa\xe7\xf5es ocultas no Code (c\xf3digo).')),r.a.createElement(Y.a,null,r.a.createElement("button",{className:"btn","data-toggle":"collapse"},r.a.createElement("h3",null,"Quais s\xe3o os benef\xedcios de usar QR Codes?")),r.a.createElement("p",null,"Os QR Codes est\xe3o ganhando popularidade por causa da sua multiplicidade. Voc\xea pode us\xe1-los para obter feedback a fim de melhorar seus produtos e servi\xe7os, aumentar o envolvimento do cliente com imagens ou v\xeddeos e at\xe9 divulgar seus neg\xf3cios com eventos e cupons. Tudo isso com apenas um scan!")),r.a.createElement(Y.a,null,r.a.createElement("button",{className:"btn","data-toggle":"collapse"},r.a.createElement("h3",null,"Como posso escanear um QR Code?")),r.a.createElement("p",null,"Isso depende do seu dispositivo, alguns celulares j\xe1 v\xeam com um leitor ou scanner integrado. Abra a c\xe2mera do seu smartphone e deixe-a apontada em dire\xe7\xe3o ao QR Code por alguns segundos at\xe9 uma notifica\xe7\xe3o aparecer. Se nada acontecer, veja nas configura\xe7\xf5es se o leitor de QR Codes est\xe1 ativado. Ainda n\xe3o funciona? N\xe3o se preocupe, apenas instale um QR Code scanner da sua loja de aplicativos."))))};function ke(){var e=f()(["\n    margin-top: 50px;\n"]);return ke=function(){return e},e}function je(){var e=f()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return je=function(){return e},e}function Ne(){var e=f()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return Ne=function(){return e},e}function Oe(){var e=f()(["\n\twidth: 130px;\n\theight:30px;\n"]);return Oe=function(){return e},e}function Ce(){var e=f()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return Ce=function(){return e},e}g.a.SafeAreaView(Ce()),g.a.Image(Oe()),g.a.Text(Ne()),g.a.Text(je());var Ae=g.a.View(ke()),Se=function(){var e=Object(t.useState)(""),n=m()(e,2),a=n[0],o=n[1],c=Object(t.useState)(""),u=m()(c,2),s=u[0],i=u[1],d=Object(t.useState)(""),f=m()(d,2),g=f[0],b=f[1],x=Object(t.useState)(""),v=m()(x,2),h=v[0],E=v[1],w=Object(t.useState)(!1),y=m()(w,2),F=y[0],k=y[1],j=Object(p.useNavigation)(),N=function(e){var n=e.target.name,a=e.target.value;"email"==n?i(a):"password"==n?b(a):"fullname"==n?o(a):"repassword"==n&&E(a)};return r.a.createElement("div",null,r.a.createElement("div",{className:"container-box title"},r.a.createElement("h3",{className:"switch to-sign-in tagline"},"Inscreva-se e comece a encurtar"),r.a.createElement("br",null)),r.a.createElement(M.a,{noValidate:!0,validated:F,onSubmit:function(e){var n,t;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(k(!0),n=e.currentTarget,console.log(n),e.preventDefault(),e.stopPropagation(),n.checkValidity()){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,l.a.awrap(D(a,s,g));case 10:return t=r.sent,r.next=13,l.a.awrap(we(t));case 13:r.sent?j.reset({routes:[{name:"Home"}]}):alert(t.message);case 15:case"end":return r.stop()}}),null,null,null,Promise)}},r.a.createElement(M.a.Group,{className:"mb-3",value:a,onChange:function(e){return N(e)}},r.a.createElement(M.a.Control,{placeholder:"Nome Completo","aria-label":"Nome Completo","aria-describedby":"basic-addon1",name:"fullname",required:!0})),r.a.createElement(M.a.Group,{className:"mb-3",value:s,onChange:function(e){return N(e)}},r.a.createElement(M.a.Control,{placeholder:"E-mail","aria-label":"E-mail","aria-describedby":"basic-addon1",name:"email",required:!0})),r.a.createElement(M.a.Group,{className:"mb-3",value:g,onChange:function(e){return N(e)},method:"post"},r.a.createElement(M.a.Control,{placeholder:"Senha","aria-label":"Senha","aria-describedby":"basic-addon1",name:"password",type:"password",required:!0})),r.a.createElement(M.a.Group,{className:"mb-3",value:h,onChange:function(e){return N(e)}},r.a.createElement(M.a.Control,{placeholder:"Confirmar Senha","aria-label":"Confirmar Senha","aria-describedby":"basic-addon1",name:"repassword",type:"password",required:!0}),r.a.createElement(M.a.Control.Feedback,{type:"invalid"},"As senhas n\xe3o s\xe3o iguais. Tente novamente.")),r.a.createElement(Ae,null,r.a.createElement(K.a,{type:"submit",variant:"primary",disabled:null==g||""==g||g!=h},"Registre-se"),r.a.createElement("div",{className:"form-group col-lg-12 mx-auto d-flex align-items-center my-4"},r.a.createElement("div",{className:"border-bottom w-100 ml-5"}),r.a.createElement("span",{className:"px-2 small text-muted font-weight-bold text-muted"},"ou"),r.a.createElement("div",{className:"border-bottom w-100 mr-5"})),r.a.createElement(K.a,{variant:"secondary",onClick:function(){j.reset({routes:[{name:"SignIn"}]})}},"Login"))))},Pe=function(){return r.a.createElement("div",null,r.a.createElement(J.a,null),r.a.createElement(X.a,null,r.a.createElement(fe,null,r.a.createElement(Se,null))))},Re=Object(o.a)(),Te=function(){return r.a.createElement(Re.Navigator,{initialRouteName:"Preload",screenOptions:{headerShown:!1}},r.a.createElement(Re.Screen,{name:"Preload",component:pe}),r.a.createElement(Re.Screen,{name:"SignIn",component:Fe}),r.a.createElement(Re.Screen,{name:"SignUp",component:Pe}),r.a.createElement(Re.Screen,{name:"Home",component:ce}))},Ie=a(178);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){})).catch((function(e){}))}));n.a=function(){return r.a.createElement(Ie.a,null,r.a.createElement(Te,null))}},227:function(e,n,a){e.exports=a(296)},279:function(e,n,a){e.exports=a.p+"static/media/4br.fb9c7251.png"},280:function(e,n,a){e.exports=a.p+"static/media/demo.fbea4d7d.svg"}},[[227,1,2]]]);
//# sourceMappingURL=app.84d0c97d.chunk.js.map