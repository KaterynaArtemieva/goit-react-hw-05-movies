"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[150],{216:function(n,e,r){r.d(e,{LI:function(){return u},Mc:function(){return p},wr:function(){return c}});var t=r(861),a=r(757),i=r.n(a),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d3bfd9e3078e7fbc5691e64e118089ee",c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/week",{params:{api_key:s}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results.map((function(n){return{id:n.id,title:n.title,url:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie",{params:{api_key:s,query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results.map((function(n){return{id:n.id,title:n.title,url:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(e).concat(r),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},998:function(n,e,r){r.d(e,{Z:function(){return p}});var t=r(861),a=r(439),i=r(757),o=r.n(i),s=r(689),c=r(791),u=r(216);function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(0,c.useState)(null),r=(0,a.Z)(e,2),i=r[0],p=r[1],d=(0,c.useState)(!1),l=(0,a.Z)(d,2),f=l[0],h=l[1],x=(0,c.useState)(null),v=(0,a.Z)(x,2),m=v[0],g=v[1],w=(0,s.UO)(),j=w.movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,u.Mc)(r,n);case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();e(j)}),[j,n]),{movieInfo:i,isLoading:f,error:m}}},150:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a,i,o,s,c=r(689),u=r(791),p=r(998),d=r(458),l=r(168),f=r(444),h=r(87),x=f.ZP.button(t||(t=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  color: white;\n  background-color: orangered;\n  border: none;\n  margin-left: 8px;\n  cursor: pointer;\n  width: 100px;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),v=f.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  gap: 24px;\n  max-width: 1024px;\n  margin: 0 auto;\n"]))),m=f.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  gap: 24px;\n  max-width: 1024px;\n  margin: 0 auto;\n"]))),g=f.ZP.img(o||(o=(0,l.Z)(["\n  max-width: 300px;\n"]))),w=(0,f.ZP)(h.rU)(s||(s=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  color: white;\n  background-color: orangered;\n  border: none;\n  margin-left: 8px;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),j=r(184),Z=function(n){var e=n.movie,r=e.title,t=e.release_date,a=e.overview,i=e.poster_path,o=e.vote_average,s=e.genres,u=(0,c.TH)(),p=(0,c.s0)();return(0,j.jsxs)(d.x,{children:[(0,j.jsx)(x,{type:"button",onClick:function(){var n,e;p(null!==(n=null===u||void 0===u||null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(i),alt:r}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[r," (",new Date(t).getFullYear(),")"]}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*o)," %"]}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:s.map((function(n){return n.name})).join(", ")}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:a})]})]}),(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsxs)(m,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(w,{to:"cast",state:u.state,children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(w,{to:"reviews",state:u.state,children:"Reviews"})})]})]})},b=r(521),k=function(){var n=(0,p.Z)(),e=n.movieInfo,r=n.isLoading,t=n.error;return(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)(b.a,{}),e&&(0,j.jsx)(Z,{movie:e}),t&&(0,j.jsx)("p",{children:"Ooops!"}),(0,j.jsx)(u.Suspense,{fallback:(0,j.jsx)(b.a,{}),children:(0,j.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=150.073e4f42.chunk.js.map