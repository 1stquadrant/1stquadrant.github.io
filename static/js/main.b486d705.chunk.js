(this["webpackJsonp1stquadrant.github.io"]=this["webpackJsonp1stquadrant.github.io"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(4),r=n.n(i),s=(n(9),n(10),n(3)),u=n(0);function a(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),a=(r[0],r[1]);return Object(c.useEffect)((function(){fetch("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=dd4fba161f787299af518125880e903f&photoset_id=72157710252541547&user_id=153252113@N08&extras=url_o,url_c&format=json&nojsoncallback=1").then((function(t){return t.json()})).then((function(t){console.log(t.photoset.photo),o(t.photoset.photo)}))}),[o]),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:n.length?n.map((function(t,e){return Object(u.jsx)("div",{onClick:function(){return a(h(t))},children:Object(u.jsx)("img",{src:h(t)})},e)})):Object(u.jsx)("div",{children:"Loading..."})})})}function h(t){return t.url_c}var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(a,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),d()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b486d705.chunk.js.map