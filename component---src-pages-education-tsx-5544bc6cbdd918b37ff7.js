(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});var a=n(0),r=n(150),i=n(149);t.default=function(e){return a.createElement(r.a,null,a.createElement("div",null,Object(i.a)(e.data.markdownRemark.htmlAst)))};var o="4208267913"},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(139),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(144),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,n){"use strict";var a=n(0),r=n(140);var i=Object(r.b)(function(e){return"h1"===e.type?a.createElement("h1",{className:e.className},e.children):"h2"===e.type?a.createElement("h2",{className:e.className},e.children):"h3"===e.type?a.createElement("h3",{className:e.className},e.children):"p"===e.type?a.createElement("p",{className:e.className},e.children):"span"===e.type?a.createElement("span",{className:e.className},e.children):void 0}).withConfig({displayName:"text__StyledText",componentId:"sc-1hhsu6y-0"})(["font-weight:",";font-style:",";color:",";"],function(e){return function(e){return"bold"===e.fontWeight?700:"h1"===e.type||"h2"===e.type||"h3"===e.type?200:400}(e)},function(e){return null!==e.fontStyle?e.fontStyle:"normal"},function(e){return null!==e.color?e.color:"hsla(0, 0 %, 0 %, 0.7)"});t.a=i},143:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o});var a=n(140),r=a.b.div.withConfig({displayName:"grid__Container",componentId:"sc-1v50idk-0"})(["max-width:900px;margin:0 auto;@media (max-width:900px){padding:10px;}"]),i=a.b.div.withConfig({displayName:"grid__Row",componentId:"sc-1v50idk-1"})(["display:flex;"]),o=Object(a.b)(i).withConfig({displayName:"grid__CentredRow",componentId:"sc-1v50idk-2"})(["justify-items:center;width:100%;"]);Object(a.b)(i).withConfig({displayName:"grid__Column",componentId:"sc-1v50idk-3"})(["display:flex;flex-direction:column;"])},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Vlad Stoica",avatar:"http://gravatar.com/avatar/32ca7438bc506ad3ca9b3d3c2210d5f5?s=400",navigation:[{path:"/",name:"home"},{path:"/work/",name:"work"},{path:"/education/",name:"education"}]}}}}},148:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(49),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(141),r=n(0),i=n(154),o=n.n(i),c=n(142),l=new o.a({createElement:function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n=[]),"h1"===e?r.createElement(c.a,{type:"h1",key:t.key},n):"h2"===e?r.createElement(c.a,{type:"h2",key:t.key},n):"h3"===e?r.createElement(c.a,{type:"h3",key:t.key},n):"p"===e?r.createElement(c.a,{type:"p",key:t.key},n):"strong"===e?r.createElement(c.a,{type:"span",fontWeight:"bold",key:t.key},n):"em"===e?r.createElement(c.a,{type:"span",fontStyle:"italic",key:t.key},n):"a"===e?r.createElement(a.Link,{to:t.href,key:t.key},n):"div"===e?r.createElement(e,t,n):"ul"===e?r.createElement("ul",{key:t.key},n):"li"===e?r.createElement("li",{key:t.key},n):r.createElement("div",null,"NOT ABLE TO HANDLE ",e)}}).Compiler},150:function(e,t,n){"use strict";var a=n(152),r=n.n(a),i=n(147),o=n(141),c=n(0),l=n(153),u=n.n(l),s=n(140),d=(n(145),n(142)),m=s.b.div.withConfig({displayName:"avatar__AvatarContainer",componentId:"sc-7615fp-0"})(["margin:0 auto;"]),p=s.b.img.withConfig({displayName:"avatar__AvatarImage",componentId:"sc-7615fp-1"})(["width:150px;height:150px;margin:10px auto;border-radius:75px;"]),f=function(e){return c.createElement(m,null,c.createElement(p,{src:e.imageUrl}),c.createElement(d.a,{type:"h1",fontWeight:"bold"},e.name))},h=(n(34),n(48),n(143)),y=s.b.ul.withConfig({displayName:"navigation__NavigationContainer",componentId:"sc-10qao95-0"})(["list-style:none;display:flex;margin:0 auto 1rem auto;padding:0;"]),g=s.b.li.withConfig({displayName:"navigation__NavigationLinkContainer",componentId:"sc-10qao95-1"})(["margin:0 10px;"]),v=Object(s.b)(o.Link).attrs({activeClassName:"active"}).withConfig({displayName:"navigation__StyledLink",componentId:"sc-10qao95-2"})(["color:lightgrey;font-weight:bold;&:hover{color:lightblue;text-decoration:none;border-bottom:2px solid lightblue;}&.active{color:black;border-bottom:2px solid grey;}"]),b=function(e){return c.createElement(g,null,c.createElement(v,{to:e.path},e.name))},E=function(e){return c.createElement(h.a,null,c.createElement(y,null,e.links.map(function(e){return c.createElement(b,Object.assign({},e,{key:e.path}))})))};function k(){var e=r()(['\n  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,700");\n\n  html {\n    font: 112.5%/1.56 "Source Sans Pro", sans-serif;\n    /* font-family: \'Source Sans Pro\', sans-serif;\n      font-size: 18px; */\n    font-weight: 400;\n    margin: 0;\n    color: hsla(0, 0%, 0%, 0.7);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    font-weight: 200;\n    margin: 0;\n    padding: 0;\n    color: hsla(0, 0%, 0%, 0.85);\n  }\n\n  a {\n    text-decoration: none;\n    color: #419eda;\n  }\n\n  a:hover {\n    text-decoration: underline;\n    color: #2a6496;\n  }\n']);return k=function(){return e},e}var w=Object(s.a)(k());t.a=function(e){return c.createElement(o.StaticQuery,{query:"1024071770",render:function(t){return c.createElement(c.Fragment,null,c.createElement(w,null),c.createElement(u.a,{title:t.site.siteMetadata.title}),c.createElement(h.b,null,c.createElement(h.a,null,c.createElement(f,{imageUrl:t.site.siteMetadata.avatar,name:t.site.siteMetadata.title})),c.createElement(E,{links:t.site.siteMetadata.navigation}),e.children))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-education-tsx-5544bc6cbdd918b37ff7.js.map