(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{70:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(6),i=(t(0),t(88)),a={title:"TezBridge Signer",author:"Simon Boissonneault-Robert"},c={unversionedId:"tezbridge_signer",id:"tezbridge_signer",isDocsHomePage:!1,title:"TezBridge Signer",description:"Usage",source:"@site/../docs/tezbridge_signer.md",permalink:"/docs/tezbridge_signer",sidebar:"docs",previous:{title:"In Memory Signer",permalink:"/docs/inmemory_signer"},next:{title:"Working with contracts having complex storage/parameters",permalink:"/docs/complex_parameters"}},p=[{value:"Usage",id:"usage",children:[]}],s={rightToc:p};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You first need to include ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tezbridge.com/plugin.js"}),"https://www.tezbridge.com/plugin.js")," in your application to use this signer"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { TezBridgeSigner } from '@taquito/tezbridge-signer'\nimport { Tezos } from '@taquito/taquito'\n\nTezos.setProvider({signer: new TezBridgeSigner()})\n")),Object(i.b)("p",null,"For more information on how to use TezBridge see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.tezbridge.com/"}),"https://docs.tezbridge.com/")))}u.isMDXComponent=!0},88:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},g=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),g=n,b=l["".concat(a,".").concat(g)]||l[g]||d[g]||i;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);