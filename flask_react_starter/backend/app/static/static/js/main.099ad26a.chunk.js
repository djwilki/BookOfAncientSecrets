(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports={tile_title:"content_tile_tile_title__u_6Hb",tile_container:"content_tile_tile_container__21SwH",tile_button:"content_tile_tile_button__22axj",tile_link:"content_tile_tile_link__2SNcC",tile_nav:"content_tile_tile_nav__1YWQk"}},17:function(e,t,a){e.exports={choose_path_container:"create_or_play_choose_path_container__1Ojfz",choose_image:"create_or_play_choose_image__3O5AB",outermost_choose_container:"create_or_play_outermost_choose_container__1qVB3"}},18:function(e,t,a){e.exports={outermost_form_container:"adventure_form_outermost_form_container__tpxbw",form_title_text:"adventure_form_form_title_text__3s3bb",form_button:"adventure_form_form_button__yTWSA",form_description_textarea:"adventure_form_form_description_textarea__3eWuJ",page_div:"adventure_form_page_div__2MRkU"}},22:function(e,t,a){e.exports={tile_list:"create_adventure_tile_list__1Jkw_",adventures_label:"create_adventure_adventures_label__3Zovy",page_div:"create_adventure_page_div__37w4F"}},28:function(e,t,a){e.exports={page_div:"adventure_view_page_div__1fN5K"}},33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return ee}));var n=a(0),r=a.n(n),c=a(20),u=a.n(c),s=(a(38),a(1)),l=a.n(s),o=a(3),i=a(5),m=a(4),v=a(6),p=a(12),d=a.n(p),_="session/SET_USER",f=function(e,t){var a=d.a.get("XSRF-TOKEN");return function(){var n=Object(o.a)(l.a.mark((function n(r){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/session/login",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":a},body:JSON.stringify({email_or_username:e,password:t,csrf_token:a})});case 2:return c=n.sent,n.next=5,c.json();case 5:return c.data=n.sent,console.log(c.data),c.ok&&r((u=c.data.user,{type:_,user:u})),n.abrupt("return",c);case 9:case"end":return n.stop()}var u}),n)})));return function(e){return n.apply(this,arguments)}}()};window.login=f;var E=function(){var e=d.a.get("XSRF-TOKEN");return function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/session/logout",{method:"DELETE",headers:{"X-CSRFTOKEN":e}});case 2:return n=t.sent,console.log(n.data),t.next=6,n.json();case 6:return n.data=t.sent,n.ok&&a({type:"session/LOGOUT_USER"}),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h={userId:null,selectedAdventureId:null};var b=Object(m.f)((function(e){var t=e.history,a=Object(v.b)(),n=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(f("Owen","password"));case 3:if(!e.sent.ok){e.next=7;break}return t.replace("/choose"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(E());case 3:if(!e.sent.ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"My Home Page"),r.a.createElement("button",{type:"button",onClick:n},"Log in as Demo User"),r.a.createElement("button",{type:"button",onClick:c},"Logout Demo User"))})),O=a(16);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Username:")," ",e.user.username,r.a.createElement("br",null),r.a.createElement("strong",null,"Email:")," ",e.user.email,r.a.createElement("br",null),r.a.createElement("hr",null))};var j=function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),c=a[0],u=a[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a.users);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=c.map((function(e){return r.a.createElement(g,{key:e.id,user:e})}));return console.log("____Rendering User List____"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User List: "),s)},x=a(17),N=a.n(x);var k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:N.a.outermost_choose_container},r.a.createElement("div",{className:N.a.choose_path_container},r.a.createElement("img",{alt:"",className:N.a.choose_image,src:"https://i.pinimg.com/originals/18/fc/90/18fc90e504fe07c87f25af84c44e144d.jpg"}),r.a.createElement(i.b,{className:"Navlink",to:"/create-adventure",activeclass:"active"},"Expand Your Adventures"),r.a.createElement(i.b,{className:"Navlink",to:"/create-character",activeclass:"active"},"Create Your Characters")),r.a.createElement("div",{className:N.a.choose_path_container},r.a.createElement("img",{alt:"",className:N.a.choose_image,src:"https://immarpalomera.files.wordpress.com/2010/12/dungeon-delve1.jpg"}),r.a.createElement(i.b,{className:"Navlink",to:"/characters",activeclass:"active"},"Select Your Character"),r.a.createElement(i.b,{className:"Navlink",to:"/adventures",activeclass:"active"},"Start an Adventure"))))},y=a(11),w=a.n(y),S=a(15),T=a(27),C="adventure/SET_USER_ADVENTURES",R=function(e){return{type:"adventure/DELETE_ADVENTURE",adventureId:e}},A=function(e,t,a,n){var r=d.a.get("XSRF-TOKEN");return function(){var c=Object(o.a)(l.a.mark((function c(u){var s,o;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("/api/adventures/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":r},body:JSON.stringify({title:e,description:t,published:a,ownerId:n,csrf_token:r})});case 2:return s=c.sent,c.next=5,s.json();case 5:return o=c.sent,s.data=o,s.ok&&u({type:"adventure/CREATE_ADVENTURE",adventure:s.data}),c.abrupt("return",s);case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},U=function(e){return console.log("setting"),function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/users/".concat(e,"/adventures"));case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,console.log(n.data),n.ok&&a((r=n.data,{type:C,adventures:r})),t.abrupt("return",n);case 9:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){var t=d.a.get("XSRF-TOKEN"),a="api/adventures/".concat(e);return function(){var n=Object(o.a)(l.a.mark((function n(r){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFTOKEN":t}});case 2:return c=n.sent,n.next=5,c.json();case 5:c.data=n.sent,console.log(c.data),c.ok&&r(R(e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};var I=Object(m.f)((function(e){e.tempkey;var t=e.title,a=e.contentId,n=(e.path,e.history),c=Object(v.b)(),u=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(D(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c({type:"session/",adventureId:a});case 3:n.replace("/adventure-view");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:w.a.tile_container},r.a.createElement("div",{className:w.a.tile_title},r.a.createElement("h1",null,t),r.a.createElement("hr",null),r.a.createElement("div",{className:w.a.tile_nav},r.a.createElement("button",{className:w.a.tile_link,onClick:s},"View"),r.a.createElement("button",{className:w.a.tile_button,onClick:u},"Delete"))))}));var F=function(e){return r.a.createElement("div",{className:w.a.tile_container},r.a.createElement("div",{className:w.a.tile_title},r.a.createElement("h1",null,"New"),r.a.createElement("hr",null),r.a.createElement("div",{className:w.a.tile_nav},r.a.createElement(i.b,{className:w.a.tile_link,to:"/adventure-form"}," Create New "))))},L=a(22),K=a.n(L);var X=function(){var e=Object(v.c)((function(e){return e.session.userId})),t=Object(v.c)((function(e){return e.entities.adventures})),a=Object(v.b)();Object(n.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(U(e));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[a,e]),console.log(t);var c=Object.values(t).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(I,{title:e.title,contentId:e.id,path:"/adventure",deletePath:"/adventures"}))}));return r.a.createElement("div",{className:K.a.page_div},r.a.createElement("h1",{className:K.a.adventures_label},"Your Adventures"),r.a.createElement("hr",null),r.a.createElement("h3",null,"Available Adventures"),r.a.createElement("div",null,"Your published adventures are available to other users for play!"),r.a.createElement("ul",{className:K.a.tile_list},c,r.a.createElement(F,{type:"adventure"})))},V=a(18),J=a.n(V);var P=Object(m.f)((function(e){var t=e.history,a=Object(n.useState)(""),c=Object(O.a)(a,2),u=c[0],s=c[1],i=Object(n.useState)(""),m=Object(O.a)(i,2),p=m[0],d=m[1],_=Object(n.useState)(!1),f=Object(O.a)(_,2),E=f[0],h=f[1],b=Object(v.c)((function(e){return e.session.userId}));console.log(b);var g=Object(v.b)(),j=function(){var e=Object(o.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=0,"on"===E&&(n=1),e.next=5,g(A(u,p,n,b));case 5:if(!e.sent.ok){e.next=9;break}return t.replace("/"),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:J.a.page_div},r.a.createElement("div",{className:J.a.outermost_form_container},r.a.createElement("h1",null,"Create an Adventure"),r.a.createElement("hr",null),r.a.createElement("h3",null,"Adventure Title"),r.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:J.a.form_title_text,type:"text",placeholder:"Enter a name"}),r.a.createElement("h3",null,"Description"),r.a.createElement("textarea",{onChange:function(e){return d(e.target.value)},className:J.a.form_description_textarea}),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",onChange:function(e){return h(e.target.value)}}),r.a.createElement("span",null,"Publish")),r.a.createElement("button",{className:J.a.form_button,onClick:j},"Add Adventure")))})),Y=a(28),H=a.n(Y);var B=function(e){console.log(e);var t=Object(v.c)((function(e){return e.session.selectedAdventureId})),a=Object(v.c)((function(e){return e.entities.adventures[t]}));return Object(v.b)(),r.a.createElement("div",{className:H.a.page_div},r.a.createElement("h1",{className:H.a.adventures_label},a.title),r.a.createElement("hr",null),r.a.createElement("div",null,a.description),r.a.createElement("hr",null))};var G=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",activeclass:"active"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/users",activeclass:"active"},"Users")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/choose",activeclass:"active"},"Create or Play")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/create-adventure",activeclass:"active"},"Create Adventure")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/adventure-form",activeclass:"active"},"Adventure Form")))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/users"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/choose"},r.a.createElement(k,null)),r.a.createElement(m.a,{path:"/create-adventure"},r.a.createElement(X,null)),r.a.createElement(m.a,{path:"/adventure-form"},r.a.createElement(P,null)),r.a.createElement(m.a,{path:"/adventure-view"},r.a.createElement(B,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(b,null))))};var M,W=function(){return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/csrf");case 2:if(!e.sent.ok){e.next=5;break}return e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(i.a,null,r.a.createElement(G,null))},q=a(13),z=a(32);var Q=Object(q.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signup/CREATE_USER":return t.user;case"session/LOGOUT_USER":return{};case"users/SET_USER":return Object(S.a)({},t.user.id,t.user);default:return e}},adventures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"adventure/CREATE_ADVENTURE":return Object(T.a)(Object(T.a)({},e),{},Object(S.a)({},t.adventure.id,t.adventure));case C:return console.log(a),t.adventures;case"adventure/DELETE_ADVENTURE":return delete a[t.adventureId],a;default:return e}}}),Z=Object(q.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case _:return a.userId=t.user.userId,a;case"session/LOGOUT_USER":return{};case"session/":return a.selectedAdventureId=t.adventureId,a;default:return e}},entities:Q});M=Object(q.a)(z.a);var $,ee=Object(q.d)(Z,$,M);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:ee},r.a.createElement(W,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.099ad26a.chunk.js.map