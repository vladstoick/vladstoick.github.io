(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return i});var a=n(0),r=n(150);t.default=function(e){return a.createElement(r.a,null,a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}))};var i="230679584"},140:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return d});var a=n(146),r=n.n(a),i=n(0),c=n.n(i),o=n(153),u=n.n(o),l=function(e){return c.a.createElement("div",{className:u()(r.a.container,e.className)},e.children)},s=function(e){return c.a.createElement("div",{className:u()(r.a.row,e.className)},e.children)},d=function(e){return c.a.createElement("div",{className:u()(r.a.centeredRow,e.className)},e.children)}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(139),u=n.n(o);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(142),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},142:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Vlad Stoica",avatar:"http://gravatar.com/avatar/32ca7438bc506ad3ca9b3d3c2210d5f5?s=400",navigation:[{path:"/",name:"home"},{path:"/work/",name:"work"},{path:"/education/",name:"education"}]}}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(49),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,n){e.exports={container:"style-module--container--3oPFS",row:"style-module--row--3XtLX",centeredRow:"style-module--centeredRow--lHiTe",column:"style-module--column--XyFqf"}},147:function(e,t,n){e.exports={navigationContainer:"style-module--navigationContainer--1Tvz5",navigationLink:"style-module--navigationLink--3f-8Z",link:"style-module--link--3U7NS",active:"style-module--active--GCDVe"}},148:function(e,t,n){e.exports={avatarContainer:"style-module--avatarContainer--Xhlnn"}},149:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(144),r=n(141),i=n(0),c=n(151),o=n.n(c),u=(n(34),n(48),n(143),n(152),n(140)),l=n(147),s=n.n(l),d=function(e){return i.createElement("li",{className:s.a.navigationLink},i.createElement(r.Link,{to:e.path,className:s.a.link,activeClassName:s.a.active},e.name))},m=function(e){return i.createElement(u.a,null,i.createElement("ul",{className:s.a.navigationContainer},e.links.map(function(e){return i.createElement(d,Object.assign({},e,{key:e.path}))})))},f=n(148),p=n.n(f),v=function(e){return i.createElement("div",{className:p.a.avatarContainer},i.createElement("img",{src:e.imageUrl}),i.createElement("h1",null,e.name))};n(149),t.a=function(e){return i.createElement(r.StaticQuery,{query:"1024071770",render:function(t){return i.createElement(i.Fragment,null,i.createElement(o.a,{title:t.site.siteMetadata.title}),i.createElement(u.b,null,i.createElement(u.a,null,i.createElement(v,{imageUrl:t.site.siteMetadata.avatar,name:t.site.siteMetadata.title})),i.createElement(m,{links:t.site.siteMetadata.navigation}),e.children))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-17a0c67129bda842d4ba.js.map