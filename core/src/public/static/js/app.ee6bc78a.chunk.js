(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{112:function(e,n,t){e.exports=t.p+"static/media/gift_box.9136e068.png"},216:function(e,n,t){"use strict";var r=t(0),a=t.n(r),u=t(303),o=t(17),c=t.n(o),s=t(6),l=t.n(s),i=t(15),p=t.n(i),f=t(29),m=t(23),x=t.n(m),d=t(24);function g(){var e=x()(["\n    margin-top: 50px;\n"]);return g=function(){return e},e}function b(){var e=x()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return b=function(){return e},e}function h(){var e=x()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return h=function(){return e},e}function v(){var e=x()(["\n\twidth: 130px;\n\theight: 95px;\n\tmargin-top: 36px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return v=function(){return e},e}function w(){var e=x()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return w=function(){return e},e}d.a.SafeAreaView(w()),d.a.Image(v()),d.a.Text(h()),d.a.Text(b()),d.a.View(g());function E(){var e=x()(["\n    flex: 1;\n    font-size: 18px;\n    color: #3A527B;\n    margin-left: 10px;\n"]);return E=function(){return e},e}function F(){var e=x()(["\n"]);return F=function(){return e},e}function y(){var e=x()(["\n    font-size: 16px;\n    color: #FF5A5A;\n    margin-bottom: 8px;\n    margin-top: 10px;\n    \n"]);return y=function(){return e},e}function k(){var e=x()(["\n    width: 100%;\n    height: 50px;\n    background-color: #ffffff;\n    flex-direction: row;\n    border-radius:10px;\n    margin-bottom: 15px;\n    align-items: center;\n    border: 1px solid #FF5A5A;\n"]);return k=function(){return e},e}var j=d.a.View(k()),P=d.a.Text(y()),A=d.a.View(F()),O=d.a.TextInput(E()),S=function(e){var n=e.txtLabel,t=e.placeholder,r=e.value,u=e.onChangeText,o=e.password;return a.a.createElement(A,null,a.a.createElement(P,null,n),a.a.createElement(j,null,a.a.createElement(O,{placeholder:t,placeholderColor:"#FF5A5A",value:r,onChangeText:u,secureTextEntry:o})))};function T(){var e=x()(["\n    font-size: 24px;\n    color: #FFFFFF;\n"]);return T=function(){return e},e}function C(){var e=x()(["\n    height: 60px;\n    background-color: #FF5A5A;\n    border-radius: 7px;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);return C=function(){return e},e}var I=d.a.TouchableOpacity(C()),N=d.a.Text(T()),L=function(e){var n=e.txtLabel,t=e.onPress;return a.a.createElement(I,{onPress:t},a.a.createElement(N,null,n))};function z(){var e=x()(["\n    font-size: 24px;\n    color: #FF5A5A;\n"]);return z=function(){return e},e}function R(){var e=x()(["\n    height: 60px;\n    background-color: #F8F8F8;\n    border-radius: 7px;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #F8F8F8;\n    margin-top: 15px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);return R=function(){return e},e}var D=d.a.TouchableOpacity(R()),U=d.a.Text(z()),V=function(e){var n=e.txtLabel,t=e.onPress;return a.a.createElement(D,{onPress:t},a.a.createElement(U,null,n))},B=t(71),_=(t(292),t(101)),H=t.n(_),q=function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(H.a.load("token"));case 2:if(!(e=n.sent)){n.next=5;break}return n.abrupt("return",e);case 5:return n.next=7,l.a.awrap(B.a.getItem("token"));case 7:return e=n.sent,n.next=10,l.a.awrap(H.a.save("token",e,{path:"/"}));case 10:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),null,null,null,Promise)},J=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(H.a.save("token",e,{path:"/"}));case 2:return n.next=4,l.a.awrap(B.a.setItem("token",e));case 4:case"end":return n.stop()}}),null,null,null,Promise)},M=function(e,n,t){var r,a,u;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-access-token":t},body:JSON.stringify(e)},o.next=3,l.a.awrap(fetch("https://dibr.cc"+n,r));case 3:if(a=o.sent,console.log("Response: ",a),!a.json){o.next=11;break}return console.log("status: "+a.status),o.next=9,l.a.awrap(a.json());case 9:return u=o.sent,o.abrupt("return",u);case 11:return o.abrupt("return",a);case 12:case"end":return o.stop()}}),null,null,null,Promise)},W=function(e,n){var t,r,a;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","x-access-token":n}},u.next=3,l.a.awrap(fetch("https://dibr.cc"+e,t));case 3:if(!(r=u.sent).json){u.next=10;break}return u.next=7,l.a.awrap(r.json());case 7:return a=u.sent,console.log("status: "+r.status),u.abrupt("return",a);case 10:return u.abrupt("return",r);case 11:case"end":return u.stop()}}),null,null,null,Promise)},G="https://dibr.cc",K=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(W("/api/auth/refresh",e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},Q=function(e,n){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(M({user_name:e,password:n},"/api/singin"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},X=function(e,n,t){return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.awrap(M({name:e,user_name:n,password:t},"/api/user"));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),null,null,null,Promise)},Y=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(W("/api/url",e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},Z=function(e,n,t){return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.awrap(M({url:n,slug:t},"/api/url",e));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),null,null,null,Promise)},$=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(q());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},ee=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(J(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)},ne=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(H.a.remove("token",{path:"/"}));case 2:return e.next=4,l.a.awrap(B.a.removeItem("token"));case 4:case"end":return e.stop()}}),null,null,null,Promise));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},te=function(e){var n;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(q());case 2:return n=t.sent,t.next=5,l.a.awrap(W("/api/url/"+e,n));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),null,null,null,Promise)},re=(t(160),t(304)),ae=t(305),ue=t(306),oe=t(298),ce=t(299),se=t(300),le=t(209),ie=t(301),pe=t(208),fe=t(302),me=t(112),xe=t.n(me);t(269);function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var be=function(){var e=Object(r.useState)(""),n=p()(e,2),t=n[0],u=n[1],o=Object(r.useState)(""),c=p()(o,2),s=c[0],i=c[1],m=Object(r.useState)([{addr:"http://test.com",slug:"",access:0}]),x=p()(m,2),d=x[0],g=x[1],b=Object(r.useState)({slug:!0}),h=p()(b,2),v=h[0],w=h[1],E=Object(f.useNavigation)(),F=function(){var e,n;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(B.a.getItem("token"));case 2:if(!(e=t.sent)){t.next=9;break}return t.next=6,l.a.awrap(Y(e));case 6:return n=t.sent,g(n),t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),null,null,null,Promise)};Object(r.useEffect)((function(){F()}),[]);var y=function(e){var n=e.target.name,t=e.target.value;"URL"==n?(u(t),console.log(s),""===s&&i(k(5))):"slug"==n&&(i(t),j(t))},k=function(e){for(var n="",t="abcdefghijklmnopqrstuvwxyz0123456789",r=t.length,a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*r));return n},j=function(e){var n;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(te(e));case 2:(n=t.sent)&&n.isRegistered?w(ge(ge({},v),{slug:!1})):w(ge(ge({},v),{slug:!0}));case 4:case"end":return t.stop()}}),null,null,null,Promise)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(re.a,{bg:"dark"},a.a.createElement(re.a.Brand,{href:"#home"},a.a.createElement("img",{src:xe.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),a.a.createElement(re.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(ae.a,{className:"mr-auto"}),a.a.createElement(ue.a,{inline:!0},a.a.createElement(oe.a,{variant:"outline-success",onClick:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(ne());case 2:E.navigate("SignIn");case 3:case"end":return e.stop()}}),null,null,null,Promise)}},"Sair")))),a.a.createElement(ce.a,null,a.a.createElement("section",{className:"url-shortener"},a.a.createElement("h2",{className:"title mb-0"},"Encurte seu link:"),a.a.createElement("form",null,a.a.createElement(se.a,null,a.a.createElement(le.a,null,a.a.createElement(ie.a,{className:"mb-3",value:t,onChange:function(e){return y(e)}},a.a.createElement(pe.a,{placeholder:"cole sua url aqui","aria-label":"ole sua url aqui","aria-describedby":"basic-addon1",name:"URL"})))),a.a.createElement(se.a,null,a.a.createElement(le.a,{sm:"10"},a.a.createElement(ie.a,{className:"mb-3",value:s},a.a.createElement(pe.a,{placeholder:"apelido",value:s,onChange:function(e){return y(e)},"aria-label":"apelido","aria-describedby":"basic-addon1",name:"slug",style:v.slug?{}:{color:"#f00"}}))),a.a.createElement(le.a,{sm:"2"},a.a.createElement(oe.a,{variant:"primary",onClick:function(e){var n,r;return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=3;break}return alert("Informe um URL"),e.abrupt("return");case 3:if(""!==s){e.next=6;break}return alert("Informe um Slug"),e.abrupt("return");case 6:return e.next=8,l.a.awrap(B.a.getItem("token"));case 8:if(!(n=e.sent)){e.next=19;break}return e.next=12,l.a.awrap(Z(n,t,s));case 12:return r=e.sent,console.log("ret"),console.log(r),r.message&&alert(r.message),r.fields_errors&&alert(r.fields_errors[0].message),F(),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),null,null,null,Promise)}},"Encurtar link")," ")))),a.a.createElement(fe.a,{striped:!0,bordered:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"URL"),a.a.createElement("th",null,"Slug"),a.a.createElement("th",null,"Acessos"))),a.a.createElement("tbody",null,d.map((function(e){var n=G+"/"+e.slug;return a.a.createElement("tr",{key:e.slug},a.a.createElement("td",null,e.addr),a.a.createElement("td",null,a.a.createElement("a",{href:n},n),a.a.createElement(oe.a,{variant:"outline-secondary",onClick:function(){navigator.clipboard.writeText(n)}},"Copy")),a.a.createElement("td",null,e.access))}))))))};function he(){var e=x()(["\n    margin-top: 50px;\n"]);return he=function(){return e},e}function ve(){var e=x()(["\n    background-color: #s3C2D1;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n"]);return ve=function(){return e},e}a.a.createElement(se.a,null,a.a.createElement(le.a,null,"1 of 1"));var we=d.a.SafeAreaView(ve()),Ee=d.a.ActivityIndicator(he()),Fe=function(){var e,n;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap($());case 2:if(!(e=t.sent)){t.next=14;break}return t.next=6,l.a.awrap(K(e));case 6:if((n=t.sent).token){t.next=11;break}return t.next=10,l.a.awrap(ne());case 10:return t.abrupt("return",!1);case 11:return t.next=13,l.a.awrap(ee(n.token));case 13:return t.abrupt("return",!0);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),null,null,null,Promise)},ye=function(){var e=Object(f.useNavigation)();return Object(r.useEffect)((function(){l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(Fe());case 2:if(!n.sent){n.next=6;break}e.reset({routes:[{name:"Home"}]}),n.next=7;break;case 6:e.navigate("SignIn");case 7:case"end":return n.stop()}}),null,null,null,Promise)}),[]),a.a.createElement(we,null,a.a.createElement(Ee,{size:"large",color:"#FFFFFF"}))};function ke(){var e=x()(["\n    margin-top: 50px;\n"]);return ke=function(){return e},e}function je(){var e=x()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return je=function(){return e},e}function Pe(){var e=x()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return Pe=function(){return e},e}function Ae(){var e=x()(["\n\twidth: 130px;\n\theight: 95px;\n\tmargin-top: 36px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return Ae=function(){return e},e}function Oe(){var e=x()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return Oe=function(){return e},e}d.a.SafeAreaView(Oe());var Se=d.a.Image(Ae()),Te=d.a.Text(Pe()),Ce=(d.a.Text(je()),d.a.View(ke())),Ie=function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(e),console.log(e.token),e.token){n.next=4;break}return n.abrupt("return",!1);case 4:return n.next=6,l.a.awrap(ee(e.token));case 6:return console.log("#.4"),n.next=9,l.a.awrap($());case 9:return n.sent,n.abrupt("return",!0);case 11:case"end":return n.stop()}}),null,null,null,Promise)},Ne=function(){var e=Object(r.useState)(""),n=p()(e,2),u=n[0],o=n[1],c=Object(r.useState)(""),s=p()(c,2),i=s[0],m=s[1],x=Object(f.useNavigation)(),d=function(e){var n=e.target.name,t=e.target.value;"email"==n?o(t):"password"==n&&m(t)};return a.a.createElement(ce.a,null,a.a.createElement(Se,{source:t(112)}),a.a.createElement(Te,null,"Login"),a.a.createElement(ie.a,{className:"mb-3",value:u,onChange:function(e){return d(e)}},a.a.createElement(pe.a,{placeholder:"Nome de Usu\xe1rio","aria-label":"Nome de Usu\xe1rio","aria-describedby":"basic-addon1",name:"email"})),a.a.createElement(ie.a,{className:"mb-3",value:i,onChange:function(e){return d(e)}},a.a.createElement(pe.a,{placeholder:"Digite sua senha","aria-label":"Digite sua senha","aria-describedby":"basic-addon1",name:"password",type:"password"})),a.a.createElement(Ce,null,a.a.createElement(oe.a,{variant:"primary",onClick:function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""==u||""==i){n.next=13;break}return n.next=3,l.a.awrap(Q(u,i));case 3:return e=n.sent,n.next=6,l.a.awrap(Ie(e));case 6:if(!n.sent){n.next=10;break}x.reset({routes:[{name:"Home"}]}),n.next=11;break;case 10:alert("E-mail e/ou senha invalidos");case 11:n.next=14;break;case 13:alert("Informe email e senha!");case 14:case"end":return n.stop()}}),null,null,null,Promise)}},"Login"),a.a.createElement("div",{className:"login-or",style:{position:"relative",fontSize:"18px",color:"#aaa",marginTop:"10px",marginBottom:"10px",paddingTop:"10px",paddingBottom:"10px"}},a.a.createElement("hr",{className:"hr-or",style:{backgroundColor:"#cdcdcd",height:"1px",marginTop:"0px",marginBottom:"0px"}})),a.a.createElement(oe.a,{variant:"secondary",onClick:function(){x.reset({routes:[{name:"SignUp"}]})}},"Registre-se")))};function Le(){var e=x()(["\n    margin-top: 50px;\n"]);return Le=function(){return e},e}function ze(){var e=x()(["\n    font-size: 14px;\n    color: #FF5A5A;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto;\n  text-decoration: underline;\n  text-decoration-color: #FF5A5A;\n"]);return ze=function(){return e},e}function Re(){var e=x()(["\n    font-size: 36px;\n    color: #FF5A5A;\n    font-weight: bold;\n"]);return Re=function(){return e},e}function De(){var e=x()(["\n\twidth: 130px;\n\theight: 95px;\n\tmargin-top: 36px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return De=function(){return e},e}function Ue(){var e=x()(["\n    background-color: #FFFFFF;\n    flex: 1;\n    padding-left: 30px;\n    padding-right: 30px;\n"]);return Ue=function(){return e},e}var Ve=d.a.SafeAreaView(Ue()),Be=d.a.Image(De()),_e=d.a.Text(Re()),He=(d.a.Text(ze()),d.a.View(Le())),qe=function(){var e=Object(r.useState)(""),n=p()(e,2),u=n[0],o=n[1],c=Object(r.useState)(""),s=p()(c,2),i=s[0],m=s[1],x=Object(r.useState)(""),d=p()(x,2),g=d[0],b=d[1],h=Object(f.useNavigation)();return a.a.createElement(Ve,null,a.a.createElement(Be,{source:t(112)}),a.a.createElement(_e,null,"Registrar"),a.a.createElement(S,{txtLabel:"Nome Completo",placeholder:"Digite seu nome",value:u,onChangeText:function(e){return o(e)}}),a.a.createElement(S,{txtLabel:"E-Mail",placeholder:"Digite seu e-mail",value:i,onChangeText:function(e){return m(e)}}),a.a.createElement(S,{txtLabel:"Senha",placeholder:"Digite sua senha",password:!0,value:g,onChangeText:function(e){return b(e)}}),a.a.createElement(He,null,a.a.createElement(L,{txtLabel:"Registre-se",onPress:function(){var e,n;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(u&&""!==u){t.next=3;break}return alert("Informe seu nome: "+u),t.abrupt("return");case 3:if(i&&""!==i){t.next=6;break}return alert("Informe seu E-mail"),t.abrupt("return");case 6:if(g&&""!==g){t.next=9;break}return alert("Informe a senha."),t.abrupt("return");case 9:return t.next=11,l.a.awrap(X(u,i,g));case 11:return e=t.sent,t.next=14,l.a.awrap(Ie(e));case 14:n=t.sent,console.log("validaUserResponse: "+n),n?h.reset({routes:[{name:"Home"}]}):alert("Erro no cadastro");case 17:case"end":return t.stop()}}),null,null,null,Promise)}}),a.a.createElement(V,{txtLabel:"Login",onPress:function(){h.reset({routes:[{name:"SignIn"}]})}})))},Je=Object(u.a)(),Me=function(){return a.a.createElement(Je.Navigator,{initialRouteName:"Preload",screenOptions:{headerShown:!1}},a.a.createElement(Je.Screen,{name:"Preload",component:ye}),a.a.createElement(Je.Screen,{name:"SignIn",component:Ne}),a.a.createElement(Je.Screen,{name:"SignUp",component:qe}),a.a.createElement(Je.Screen,{name:"Home",component:be}))},We=t(178);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){})).catch((function(e){}))}));n.a=function(){return a.a.createElement(We.a,null,a.a.createElement(Me,null))}},227:function(e,n,t){e.exports=t(294)}},[[227,1,2]]]);
//# sourceMappingURL=app.ee6bc78a.chunk.js.map