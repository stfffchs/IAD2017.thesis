(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{249:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(148),a=n(271),c=n.n(a),u=n(264),s=n.n(u),f=n(269),l=n(71),p=n(313),T=n(314);n(241);var d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=c()(this,"props.data.site.siteMetadata.title"),e=c()(this,"props.data.site.siteMetadata.description"),n=c()(this,"props.data.posts.edges"),r=c()(this,"props.data.post");return o.a.createElement(T.a,{location:this.props.location},o.a.createElement(s.a,{htmlAttributes:{lang:"de"},meta:[{name:"description",content:e}],title:t}),r&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,r.frontmatter.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}),o.a.createElement(l.MDXProvider,{components:{}},o.a.createElement(f.MDXRenderer,null,r.body))),n&&n.map((function(t){var e=t.node,n=c()(e,"frontmatter.title")||"--no title--";return o.a.createElement("div",{className:"Index--item",key:e.fields.slug},o.a.createElement("h2",{className:"Index--title"},o.a.createElement(i.Link,{to:e.fields.slug},n)),o.a.createElement("div",{className:"Index--meta"},o.a.createElement(p.a,{author:e.frontmatter.author,date:e.frontmatter.date})),e.frontmatter.description&&o.a.createElement("p",null,e.frontmatter.description)||o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))})))},r}(o.a.Component);n.d(e,"homeQuery",(function(){return h}));var E=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,this.props))},r}(o.a.Component),h=(e.default=E,"2734777786")},250:function(t,e,n){var r=n(262)(Object,"create");t.exports=r},251:function(t,e,n){var r=n(299);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},252:function(t,e,n){n(53);var r=n(305);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},253:function(t,e,n){n(70);var r=Array.isArray;t.exports=r},254:function(t,e,n){var r=n(261),o=n(278),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},255:function(t,e,n){var r=n(256).Symbol;t.exports=r},256:function(t,e,n){var r=n(275),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},257:function(t,e,n){var r=n(4),o=n(151),i=n(13).f,a=n(75).f,c=n(106),u=n(74),s=r.RegExp,f=s,l=s.prototype,p=/a/g,T=/a/g,d=new s(p)!==p;if(n(9)&&(!d||n(10)((function(){return T[n(3)("match")]=!1,s(p)!=p||s(T)==T||"/a/i"!=s(p,"i")})))){s=function(t,e){var n=this instanceof s,r=c(t),i=void 0===e;return!n&&r&&t.constructor===s&&i?t:o(d?new f(r&&!i?t.source:t,e):f((r=t instanceof s)?t.source:t,r&&i?u.call(t):e),n?this:l,s)};for(var E=function(t){t in s||i(s,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},h=a(f),y=0;h.length>y;)E(h[y++]);l.constructor=s,s.prototype=l,n(17)(r,"RegExp",s)}n(104)("RegExp")},258:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},259:function(t,e,n){n(145),n(16),n(11),n(8),n(22),n(53),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},260:function(t,e,n){var r=n(1),o=n(55),i=n(30),a=n(5),c=n(6),u=n(10),s=n(150),f=(n(4).Reflect||{}).construct,l=u((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!u((function(){f((function(){}))}));r(r.S+r.F*(l||p),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var u=n.prototype,T=o(c(u)?u:Object.prototype),d=Function.apply.call(t,T,e);return c(d)?d:T}})},261:function(t,e,n){var r=n(255),o=n(276),i=n(277),a="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:a:u&&u in Object(t)?o(t):i(t)}},262:function(t,e,n){var r=n(286),o=n(291);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},263:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},264:function(t,e,n){n(70),n(147),n(16),n(11),n(8),n(22),n(42),n(144),n(102),n(29),n(103),n(18),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=l(n(0)),a=l(n(56)),c=l(n(265)),u=l(n(267)),s=n(268),f=n(259);function l(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var T,d,E,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(T=h,E=d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case f.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case f.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=c,e.titleAttributes=r({},a),e));case f.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case f.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=p(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case f.TAG_NAMES.LINK:case f.TAG_NAMES.META:case f.TAG_NAMES.NOSCRIPT:case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=p(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(i.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var t=T.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},265:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n(29),n(53),n(72),n(102),n(103);var o=n(0),i=r(o),a=r(n(266));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function l(){s=t(f.map((function(t){return t.props}))),p.canUseDOM?e(s):n&&(s=n(s))}var p=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,f=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){f.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),l()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},266:function(t,e,n){n(76),n(16),n(11),n(8),n(22),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var f=t[s],l=e[s];if(!1===(o=n?n.call(r,f,l,s):void 0)||void 0===o&&f!==l)return!1}return!0}},267:function(t,e,n){"use strict";n(72),n(149),n(69),n(101),n(257),n(16),n(11),n(8),n(22),n(70);var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,f=r(e),l=r(n);if(f&&l){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(f!=l)return!1;var p=e instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var h=o(e);if((u=h.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,h[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=h[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},268:function(t,e,n){(function(t){n(147),n(43),n(78),n(42),n(70),n(29),n(16),n(11),n(8),n(22),n(77),n(53),n(145),n(12),n(18),n(54),n(19),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=u(n(0)),a=u(n(105)),c=n(259);function u(t){return t&&t.__esModule?t:{default:t}}var s,f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(t){var e=h(t,c.TAG_NAMES.TITLE),n=h(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=h(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},p=function(t){return h(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},E=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&m("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();-1===e.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var f=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][f]&&(r[n][f]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u],f=(0,a.default)({},o[s],r[s]);o[s]=f}return t}),[]).reverse()},h=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},y=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){y(t)}),0)}),v=function(t){return clearTimeout(t)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:t.cancelAnimationFrame||v,m=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,S=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.onChangeClientState,f=t.scriptTags,l=t.styleTags,p=t.title,T=t.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),O(p,T);var d={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,u),scriptTags:P(c.TAG_NAMES.SCRIPT,f),styleTags:P(c.TAG_NAMES.STYLE,l)},E={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),s(t,E,h)},g=function(t){return Array.isArray(t)?t.join(""):t},O=function(t,e){void 0!==t&&document.title!==t&&(document.title=g(t)),R(c.TAG_NAMES.TITLE,e)},R=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var s=a[u],f=e[s]||"";n.getAttribute(s)!==f&&n.setAttribute(s,f),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},M=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=w(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=M(n),i=g(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(e)},toString:function(){return M(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+f(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){b&&A(b),t.defer?b=_((function(){S(t,(function(){b=null}))})):(S(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.scriptTags,f=t.styleTags,l=t.title,p=void 0===l?"":l,T=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,i,r),meta:C(c.TAG_NAMES.META,a,r),noscript:C(c.TAG_NAMES.NOSCRIPT,u,r),script:C(c.TAG_NAMES.SCRIPT,s,r),style:C(c.TAG_NAMES.STYLE,f,r),title:C(c.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,t),defer:h(t,c.HELMET_PROPS.DEFER),encode:h(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:p(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:l(t),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=_,e.warn=m}).call(this,n(258))},269:function(t,e,n){var r=n(270);t.exports={MDXRenderer:r}},270:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(41),n(11),n(22),n(73),n(146),n(54),n(19),n(16),n(144),n(69),n(8),n(260),n(260),n(144),n(73),n(146),n(69),n(54),n(41),n(19),n(16),n(11),n(8),n(22);var s=n(0),f=n(71),l=f.useMDXComponents,p=f.mdx,T=n(107).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,a=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=l(n),f=T(e),d=s.useMemo((function(){if(!o)return null;var t=c({React:s,mdx:p},f),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(i(e),[""+o])).apply(void 0,[{}].concat(i(n)))}),[o,e]);return s.createElement(d,c({components:u},a))}},271:function(t,e,n){var r=n(272);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},272:function(t,e,n){var r=n(273),o=n(312);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},273:function(t,e,n){var r=n(253),o=n(274),i=n(279),a=n(309);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},274:function(t,e,n){var r=n(253),o=n(254),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},275:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(258))},276:function(t,e,n){n(69),n(101),n(8);var r=n(255),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}},277:function(t,e,n){n(69),n(101),n(8);var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},278:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},279:function(t,e,n){n(12);var r=n(280),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=a},280:function(t,e,n){var r=n(281),o=500;t.exports=function(t){var e=r(t,(function(t){return n.size===o&&n.clear(),t})),n=e.cache;return e}},281:function(t,e,n){var r=n(282),o="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(i.Cache||r),n}i.Cache=r,t.exports=i},282:function(t,e,n){var r=n(283),o=n(304),i=n(306),a=n(307),c=n(308);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},283:function(t,e,n){var r=n(284),o=n(296),i=n(303);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},284:function(t,e,n){var r=n(285),o=n(292),i=n(293),a=n(294),c=n(295);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},285:function(t,e,n){var r=n(250);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},286:function(t,e,n){n(12),n(257),n(69),n(101),n(8);var r=n(287),o=n(288),i=n(263),a=n(290),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:c).test(a(t))}},287:function(t,e,n){var r=n(261),o=n(263),i="[object AsyncFunction]",a="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==a||e==c||e==i||e==u}},288:function(t,e,n){n(16),n(11),n(8);var r,o=n(289),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},289:function(t,e,n){var r=n(256)["__core-js_shared__"];t.exports=r},290:function(t,e,n){n(69),n(101),n(8);var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},291:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},292:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},293:function(t,e,n){var r=n(250),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return i.call(e,t)?e[t]:void 0}},294:function(t,e,n){var r=n(250),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},295:function(t,e,n){var r=n(250),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},296:function(t,e,n){var r=n(297),o=n(298),i=n(300),a=n(301),c=n(302);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},297:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},298:function(t,e,n){var r=n(251),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},299:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},300:function(t,e,n){var r=n(251);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},301:function(t,e,n){var r=n(251);t.exports=function(t){return r(this.__data__,t)>-1}},302:function(t,e,n){var r=n(251);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},303:function(t,e,n){var r=n(262)(n(256),"Map");t.exports=r},304:function(t,e,n){var r=n(252);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},305:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},306:function(t,e,n){var r=n(252);t.exports=function(t){return r(this,t).get(t)}},307:function(t,e,n){var r=n(252);t.exports=function(t){return r(this,t).has(t)}},308:function(t,e,n){var r=n(252);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},309:function(t,e,n){var r=n(310);t.exports=function(t){return null==t?"":r(t)}},310:function(t,e,n){n(69),n(101),n(8);var r=n(255),o=n(311),i=n(253),a=n(254),c=1/0,u=r?r.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-c?"-0":n}},311:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},312:function(t,e,n){var r=n(254),o=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},313:function(t,e,n){"use strict";n(12);var r=n(0),o=n.n(r);n(218);var i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t,e=this.props,n=e.author,r=e.date,i=e.words,a=Math.round((i||1)/179)||1;return o.a.createElement("div",{className:"column__text Meta--root"},i&&o.a.createElement("span",{className:"Meta--timeToRead"},"~",a," min",o.a.createElement("span",{className:"Meta--dot"}," · ")),n,o.a.createElement("span",{className:"Meta--dot"}," · "),(t=r,new Date(Date.parse(t)).toLocaleDateString("de-CH",{year:"numeric",month:"long",day:"numeric"})).replace(/ /g," "))},r}(o.a.Component);e.a=i},314:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(148);n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236);var a=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t,e=this.props,n=e.location,r=e.children;return"/"!==n.pathname&&(t=o.a.createElement("h3",{className:"layout__home"},o.a.createElement(i.Link,{to:"/"},"← Home"))),o.a.createElement("div",{className:"layout__content"},t,r)},r}(o.a.Component);e.a=a}}]);
//# sourceMappingURL=component---src-pages-index-js-d71cdfe6a755c3e235fc.js.map