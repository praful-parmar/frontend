(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);m&&m(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return c.p+"js/"+({account:"account",login:"login",register:"register"}[t]||t)+"."+{account:"bbf13d87",login:"c8a89204",register:"62455b99"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(t);var u=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0613":function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{user:{id:"",username:"",email:"",admin:!1}},mutations:{mutateUser:function(t,e){t.user.id=e.user_id,t.user.username=e.username,t.user.email=e.email,t.user.admin=e.admin}},actions:{setUser:function(t,e){var n=t.commit;n("mutateUser",e)},clearUser:function(t){var e=t.commit;e("mutateUser",{id:"",username:"",email:"",admin:!1})}},modules:{}})},"0f0c":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var r=n("1da1"),o=(n("96cf"),n("d3b7"),n("99af"),n("160a"));function a(t){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/user/register",{method:"POST",body:JSON.stringify({username:e.username,email:e.email,password:e.password}),headers:Object(o["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error,"."));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function c(t){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/user/login",{method:"POST",body:JSON.stringify({email:e.email,password:e.password}),headers:Object(o["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/user/authenticate",{method:"POST",headers:Object(o["a"])()});case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error("Error ".concat(e.status," : ").concat(n.error));case 8:return t.abrupt("return",n.user);case 9:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function m(t,e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/user/".concat(e,"/delete"),{method:"POST",body:JSON.stringify({password:n}),headers:Object(o["a"])()});case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,r.ok){t.next=8;break}throw new Error("Error ".concat(r.status," : ").concat(a.error));case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}},"160a":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("cfbe");function o(){var t={"Content-type":"application/json",Authorization:""},e=Object(r["a"])();return e&&(t.Authorization=e),t}},"3d5f":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("0613");function o(){r["a"].dispatch("clearUser"),sessionStorage.clear()}},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a8e4:function(t,e,n){t.exports=n.p+"img/icon-left-font-tight.8ea46e1b.png"},afbc:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0");var r=n("2b0e"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("NewPost",{on:{"post-created":t.addPost}}),n("NewsFeed",{attrs:{posts:t.posts}})],1)},s=[],c=n("d4ec"),i=n("bee2"),u=n("262e"),l=n("2caf"),m=n("9ab4"),p=n("1b40"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("form",{staticClass:"post-form"},[n("h1",{attrs:{id:"write-post-title"}},[t._v("Rédiger un article")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.new_post.content,expression:"new_post.content"}],staticClass:"form-field new-post-field",attrs:{"aria-labelledby":"write-post-title",placeholder:"Mon article rédigé…"},domProps:{value:t.new_post.content},on:{input:function(e){e.target.composing||t.$set(t.new_post,"content",e.target.value)}}}),n("label",{attrs:{for:"post-image-url"}},[t._v("URL d'une image (optionnel) :")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.new_post.image_url,expression:"new_post.image_url"}],staticClass:"form-field new-post-field",attrs:{id:"post-image-url",type:"url",placeholder:"https://giphy.gif"},domProps:{value:t.new_post.image_url},on:{input:function(e){e.target.composing||t.$set(t.new_post,"image_url",e.target.value)}}}),n("fieldset",{staticClass:"new-post-buttons"},[n("input",{staticClass:"button cancel",attrs:{type:"reset",value:"Annuler"}}),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.createPost}},[t._v(" Publier ")])]),t.error?n("p",[t._v(t._s(t.error))]):t._e()])])},h=[],d=n("1da1"),b=(n("96cf"),n("159b"),n("99af"),function t(e,n,r,o,a,s,i){Object(c["a"])(this,t),this.id=e,this.content=n,this.image_url=i,this.author=r,this.postdate=o.toLocaleString(),this.comments_number=a,this.comments=s}),v=n("160a");function _(){return g.apply(this,arguments)}function g(){return g=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/posts",{headers:Object(v["a"])()});case 2:if(e=t.sent,e.ok){t.next=5;break}throw new Error("Error ".concat(e.status," : List of posts could not be retrieved."));case 5:return n=[],t.next=8,e.json();case 8:return r=t.sent,r.forEach((function(t){var e=t.post_id,r=t.post_content,o=t.image_url,a=t.post_author,s=new Date(t.post_date),c=t.comments_number,i=t.last_comment?[t.last_comment]:[],u=new b(e,r,a,s,c,i,o);n.push(u)})),t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function w(t,e){return O.apply(this,arguments)}function O(){return O=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var r,o,a,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:null,t.next=3,fetch("http://localhost:3000/posts",{method:"POST",body:JSON.stringify({content:e,user:n,image_url:r}),headers:Object(v["a"])()});case 3:return o=t.sent,t.next=6,o.json();case 6:if(a=t.sent,o.ok){t.next=9;break}throw new Error("Error ".concat(o.status," : ").concat(a.error));case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function j(t){return y.apply(this,arguments)}function y(){return y=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/posts/".concat(e,"/delete"),{method:"POST",headers:Object(v["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}var k=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.new_post={content:"",image_url:""},t.error="",t}return Object(i["a"])(n,[{key:"user",get:function(){return this.$store.state.user}},{key:"createPost",value:function(){var t=this;w(this.new_post.content,this.user.id,this.new_post.image_url).then((function(e){t.$emit("post-created",new b(e.created_post.id,t.new_post.content,t.user.username,new Date(Date.now()),0,[],t.new_post.image_url)),t.new_post.content="",t.new_post.image_url="",t.error=""})).catch((function(e){t.error=e.message,console.log("Something went wrong with your new post… Please try again. ")}))}}]),n}(p["d"]);k=Object(m["a"])([p["a"]],k);var x=k,C=x,E=n("2877"),P=Object(E["a"])(C,f,h,!1,null,null,null),R=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Fil d'actualité")]),t.posts&&0!==t.posts.length?t._e():n("p",[t._v("There are no post to show.")]),t._l(t.posts,(function(e,r){return n("Post",{key:e.id,attrs:{position_in_array:r,post:e},on:{"post-deleted":t.deletePost}})}))],2)},$=[],T=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post"},[n("div",{staticClass:"post-content"},[n("header",{staticClass:"post-header"},[n("div",[n("p",{staticClass:"post-author"},[t._v(t._s(t.post.author))]),n("time",{attrs:{datetime:t.post.postdate}},[t._v(t._s(t.post.postdate))])]),t.is_admin?n("button",{staticClass:"button delete-button delete-post",on:{click:t.erasePost}},[t._v(" Supprimer l'article ")]):t._e()]),n("div",{staticClass:"post-image-container"},[t.is_image_valid?n("img",{staticClass:"post-image",attrs:{src:t.post.image_url,alt:""},on:{error:t.invalidateImage}}):t._e()]),n("p",{staticClass:"text-content"},[t._v(t._s(t.post.content))])]),t.error?n("p",[t._v(t._s(t.error))]):t._e(),n("hr"),n("NewComment",{attrs:{post:t.post},on:{"new-comment-posted":t.addComment}}),this.post.comments.length>0?n("hr"):t._e(),n("CommentsList",{attrs:{post:t.post}})],1)}),L=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"comment-form"},[t.show_comment_form?t._e():n("button",{ref:"openCommentFormButton",staticClass:"button show-comment-form",on:{click:t.displayCommentForm}},[t._v(" Ajouter un commentaire ")]),t.show_comment_form?n("div",{staticClass:"comment-form-fields"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.new_comment.content,expression:"new_comment.content"}],ref:"newCommentTextarea",staticClass:"form-field new-comment-field",attrs:{"aria-label":"Entrez un commentaire"},domProps:{value:t.new_comment.content},on:{input:function(e){e.target.composing||t.$set(t.new_comment,"content",e.target.value)}}}),n("fieldset",{staticClass:"new-comment-buttons"},[n("input",{staticClass:"button cancel",attrs:{type:"reset",value:"Annuler"},on:{click:t.close}}),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.addComment}},[t._v(" Commenter ")])])]):t._e(),t.error?n("p",[t._v(t._s(t.error))]):t._e()])},A=[],U=n("5530");function F(t){return M.apply(this,arguments)}function M(){return M=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/posts/".concat(e.post,"/comments"),{method:"POST",body:JSON.stringify({content:e.content,user_id:e.author}),headers:Object(v["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function J(t){return I.apply(this,arguments)}function I(){return I=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/posts/".concat(e,"/comments"),{headers:Object(v["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error));case 8:return o=[],r.forEach((function(t){o.push(t)})),t.abrupt("return",o);case 11:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function D(t){return z.apply(this,arguments)}function z(){return z=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/comments/".concat(e,"/delete"),{method:"POST",headers:Object(v["a"])()});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error("Error ".concat(n.status," : ").concat(r.error));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}var B=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.show_comment_form=!1,t.error="",t.new_comment={author:t.$store.state.user.id,content:"",post:t.post.id},t}return Object(i["a"])(n,[{key:"displayCommentForm",value:function(){var t=this;this.show_comment_form=!0,this.$nextTick((function(){return t.newCommentTextarea.focus()}))}},{key:"addComment",value:function(){var t=this;F(this.new_comment).then((function(){t.$emit("new-comment-posted",Object(U["a"])(Object(U["a"])({},t.new_comment),{},{author:t.$store.state.user.username})),t.close()})).catch((function(e){t.error=e.message}))}},{key:"close",value:function(){var t=this;this.new_comment.content="",this.error="",this.show_comment_form=!1,this.$nextTick((function(){return t.openCommentFormButton.focus()}))}}]),n}(p["d"]);Object(m["a"])([Object(p["b"])()],B.prototype,"post",void 0),Object(m["a"])([Object(p["c"])()],B.prototype,"newCommentTextarea",void 0),Object(m["a"])([Object(p["c"])()],B.prototype,"openCommentFormButton",void 0),B=Object(m["a"])([p["a"]],B);var G=B,H=G,q=Object(E["a"])(H,N,A,!1,null,null,null),V=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"comments-list-section"},[this.post.comments.length>0?n("ul",{staticClass:"comments-list"},t._l(this.post.comments,(function(e,r){return n("Comment",{key:e.id,attrs:{position_in_array:r,comment:e},on:{"comment-deleted":t.deleteComment}})})),1):t._e(),t.are_all_comments_shown?t._e():n("button",{staticClass:"button more-comments",attrs:{type:"button"},on:{click:t.showAllComments}},[t._v(" Afficher le reste des commentaires ("+t._s(t.post.comments_number-1)+") ")])])},Q=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment"},[n("header",[n("p",{staticClass:"comment-author"},[t._v(t._s(t.comment.author))])]),n("p",{staticClass:"text-content"},[t._v(t._s(t.comment.content))]),t.is_admin?n("button",{staticClass:"button delete-button",on:{click:t.eraseComment}},[t._v(" Supprimer le commentaire ")]):t._e(),t.error?n("p",[t._v(t._s(t.error))]):t._e()])},X=[],Y=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.error="",t.is_admin=t.$store.state.user.admin,t}return Object(i["a"])(n,[{key:"eraseComment",value:function(){var t=this;this.comment.id?D(this.comment.id).then((function(){t.$emit("comment-deleted",t.position_in_array),t.error=""})).catch((function(e){t.error=e.message})):this.error="Comment id is not defined…"}}]),n}(p["d"]);Object(m["a"])([Object(p["b"])()],Y.prototype,"comment",void 0),Object(m["a"])([Object(p["b"])()],Y.prototype,"position_in_array",void 0),Y=Object(m["a"])([p["a"]],Y);var Z=Y,tt=Z,et=Object(E["a"])(tt,W,X,!1,null,"ceb22f08",null),nt=et.exports,rt=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.are_all_comments_shown=!1,t}return Object(i["a"])(n,[{key:"mounted",value:function(){this.are_all_comments_shown=!(this.post.comments_number>1)}},{key:"showAllComments",value:function(){var t=this;J(this.post.id).then((function(e){return t.post.comments=e})),this.are_all_comments_shown=!0}},{key:"deleteComment",value:function(t){this.post.comments.splice(t,1)}}]),n}(p["d"]);Object(m["a"])([Object(p["b"])()],rt.prototype,"post",void 0),rt=Object(m["a"])([Object(p["a"])({components:{Comment:nt}})],rt);var ot=rt,at=ot,st=Object(E["a"])(at,K,Q,!1,null,null,null),ct=st.exports,it=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.is_admin=t.$store.state.user.admin,t.error="",t.is_image_valid=!1,t}return Object(i["a"])(n,[{key:"mounted",value:function(){this.is_image_valid=!!this.post.image_url}},{key:"invalidateImage",value:function(){this.is_image_valid=!1}},{key:"addComment",value:function(t){this.post.comments.unshift(t)}},{key:"erasePost",value:function(){var t=this;j(this.post.id).then((function(){t.$emit("post-deleted",t.position_in_array),t.error=""})).catch((function(e){t.error=e.message}))}}]),n}(p["d"]);Object(m["a"])([Object(p["b"])()],it.prototype,"post",void 0),Object(m["a"])([Object(p["b"])()],it.prototype,"position_in_array",void 0),it=Object(m["a"])([Object(p["a"])({components:{NewComment:V,CommentsList:ct}})],it);var ut=it,lt=ut,mt=Object(E["a"])(lt,T,L,!1,null,null,null),pt=mt.exports,ft=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"deletePost",value:function(t){this.posts.splice(t,1)}}]),n}(p["d"]);Object(m["a"])([Object(p["b"])()],ft.prototype,"posts",void 0),ft=Object(m["a"])([Object(p["a"])({components:{NewPost:R,Post:pt}})],ft);var ht=ft,dt=ht,bt=Object(E["a"])(dt,S,$,!1,null,null,null),vt=bt.exports,_t=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.posts=[],t}return Object(i["a"])(n,[{key:"mounted",value:function(){var t=this;_().then((function(e){t.posts=e})).catch((function(t){return console.log("COULD NOT RETRIEVE POSTS")}))}},{key:"addPost",value:function(t){this.posts.unshift(t)}}]),n}(p["d"]);_t=Object(m["a"])([Object(p["a"])({components:{NewPost:R,NewsFeed:vt}})],_t);var gt=_t,wt=gt,Ot=Object(E["a"])(wt,a,s,!1,null,null,null),jt=Ot.exports,yt=n("cfbe"),kt=n("0f0c"),xt=n("0613"),Ct=n("3d5f");r["a"].use(o["a"]);var Et=[{path:"/",name:"Main",component:jt},{path:"/account",name:"Account",component:function(){return n.e("account").then(n.bind(null,"77be"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"*",redirect:{name:"Main"}}],Pt=new o["a"]({mode:"hash",base:"",routes:Et});Pt.beforeEach((function(t,e,n){if(!Object(yt["a"])())return Object(Ct["a"])(),"Login"!==t.name&&"Register"!==t.name&&n({name:"Login"}),void n();Object(kt["a"])().then((function(e){xt["a"].dispatch("setUser",e),"Login"!==t.name&&"Register"!==t.name||n({name:"Main"}),n()})).catch((function(){Object(Ct["a"])(),"Login"!==t.name&&"Register"!==t.name&&n({name:"Login"})}))}));e["a"]=Pt},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},a=[],s=n("d4ec"),c=n("262e"),i=n("2caf"),u=n("9ab4"),l=n("1b40"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"site-header"},[r("div",{staticClass:"logo-container"},[r("router-link",{attrs:{to:"/",title:"Go to homepage"}},[r("img",{staticClass:"logo",attrs:{alt:"Logo de Groupomania",src:n("a8e4")}})])],1),t.isLoggedIn?t._e():r("nav",["/register"!==t.currentRoute?r("router-link",{staticClass:"button connection",attrs:{to:"/register"}},[t._v("Register")]):t._e(),"/login"!==t.currentRoute?r("router-link",{staticClass:"button connection",attrs:{to:"/login"}},[t._v("Login")]):t._e()],1),t.username?r("router-link",{staticClass:"button account",attrs:{to:"/account",title:"Go to your account page"}},[t._v(t._s(t.username))]):t._e()],1)},p=[],f=n("bee2"),h=function(t){Object(c["a"])(n,t);var e=Object(i["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(f["a"])(n,[{key:"username",get:function(){return this.$store.state.user.username}},{key:"isLoggedIn",get:function(){return!!this.$store.state.user.id}},{key:"currentRoute",get:function(){return this.$route.path}}]),n}(l["d"]);h=Object(u["a"])([Object(l["a"])({})],h);var d=h,b=d,v=n("2877"),_=Object(v["a"])(b,m,p,!1,null,null,null),g=_.exports,w=function(t){Object(c["a"])(n,t);var e=Object(i["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);w=Object(u["a"])([Object(l["a"])({components:{Header:g}})],w);var O=w,j=O,y=(n("5c0b"),Object(v["a"])(j,o,a,!1,null,null,null)),k=y.exports,x=n("afbc"),C=n("0613");r["a"].config.productionTip=!1,new r["a"]({router:x["a"],store:C["a"],render:function(t){return t(k)}}).$mount("#app")},cfbe:function(t,e,n){"use strict";function r(){var t=sessionStorage.getItem("token");return t||null}n.d(e,"a",(function(){return r}))}});
//# sourceMappingURL=app.fc4b0558.js.map