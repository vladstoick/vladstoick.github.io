(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return r});var a=n(0),i=n(148);t.default=function(e){return a.createElement(i.a,null,a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}))};var r="2651863496"},142:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(141),i=a.b.div.withConfig({displayName:"grid__Container",componentId:"sc-18xpqzw-0"})(["max-width:900px;margin:0 auto;@media (max-width:900px){padding:10px;}"]),r=a.b.div.withConfig({displayName:"grid__Row",componentId:"sc-18xpqzw-1"})(["display:flex;"]),o=Object(a.b)(r).withConfig({displayName:"grid__CentredRow",componentId:"sc-18xpqzw-2"})(["justify-items:center;width:100%;"]),c=Object(a.b)(r).withConfig({displayName:"grid__Column",componentId:"sc-18xpqzw-3"})(["flex-direction:column;"])},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(140),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(144),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(35);n.d(t,"parsePath",function(){return s.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Vlad Stoica",avatar:"http://gravatar.com/avatar/32ca7438bc506ad3ca9b3d3c2210d5f5?s=400",navigation:[{path:"/",name:"home"},{path:"/work/",name:"work"},{path:"/education/",name:"education"}]}}}}},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(49),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,n){"use strict";var a=n(146),i=n(143),r=n(0),o=n(149),c=n.n(o),u=(n(145),n(141)),l=n(142),d=u.b.img.withConfig({displayName:"avatar__AvatarImage",componentId:"sc-12vl6to-0"})(["width:150px;height:150px;margin:10px auto;border-radius:75px;"]),s=u.b.h1.withConfig({displayName:"avatar__AvatarTitle",componentId:"sc-12vl6to-1"})(["font-weight:bold;font-weight:200;"]),m=Object(u.b)(l.b).withConfig({displayName:"avatar__CentredColumn",componentId:"sc-12vl6to-2"})(["margin:0 auto;"]),p=function(e){return r.createElement(m,null,r.createElement(d,{src:e.imageUrl}),r.createElement(s,null,e.name))},f=(n(34),n(48),u.b.ul.withConfig({displayName:"navigation__NavigationList",componentId:"gzgib6-0"})(["list-style:none;display:flex;margin:0 auto;padding:0;"])),g=u.b.li.withConfig({displayName:"navigation__NavigationItem",componentId:"gzgib6-1"})(["margin:0 10px;"]),h=u.b.a.withConfig({displayName:"navigation__NavigationLink2",componentId:"gzgib6-2"})(["color:red;font-weight:bold;"]),v=function(e){return r.createElement(g,null,r.createElement(h,{as:i.Link,to:e.path},e.name))},w=function(e){return r.createElement(l.a,null,r.createElement(f,null,e.links.map(function(e){return r.createElement(v,Object.assign({},e,{key:e.path}))})))},y=n(150),b=n.n(y);function x(){var e=b()(["\n  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700');\n\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 1.2em;\n    color: hsla(0,0%,0%,0.7);\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5 {\n    color: hsla(0,0%,0%,0.85);\n    font-weight: 200;\n  }\n\n  p {\n    line-height: 1.56em;\n  }\n\n  a, a:visited {\n    text-decoration: none;\n    color: #419EDA;\n\n    &:hover {\n      text-decoration: underline;\n      color: #2a6496;\n    }\n  }\n"]);return x=function(){return e},e}var E=Object(u.a)(x());t.a=function(e){return r.createElement("div",null,r.createElement(E,null),r.createElement(i.StaticQuery,{query:"3463061353",render:function(t){return r.createElement(r.Fragment,null,r.createElement(c.a,{title:t.site.siteMetadata.title}),r.createElement(l.c,null,r.createElement(l.a,null,r.createElement(p,{imageUrl:t.site.siteMetadata.avatar,name:t.site.siteMetadata.title})),r.createElement(w,{links:t.site.siteMetadata.navigation}),e.children))},data:a}))}}}]);
//# sourceMappingURL=component---src-pages-education-tsx-fda0172b48dad8f84afd.js.map