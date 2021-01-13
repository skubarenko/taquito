(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||r;return n?i.a.createElement(d,s(s({ref:t},u),{},{components:n})):i.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(106)),o={title:"Estimate Operations",author:"Edmond Lee & Roxane Letourneau"},s={unversionedId:"estimate",id:"estimate",isDocsHomePage:!1,title:"Estimate Operations",description:"Taquito's estimate method can be used to estimate fees, gas and storage associated with an operation.",source:"@site/../docs/estimate.md",slug:"/estimate",permalink:"/docs/estimate",version:"current",sidebar:"docs",previous:{title:"Working with Smart Contracts",permalink:"/docs/smartcontracts"},next:{title:"Validation functions",permalink:"/docs/validators"}},c=[{value:"Estimate Values",id:"estimate-values",children:[{value:"Estimate a transfer operation",id:"estimate-a-transfer-operation",children:[]},{value:"Estimate a smart contract call",id:"estimate-a-smart-contract-call",children:[]},{value:"Estimate a contract origination",id:"estimate-a-contract-origination",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Taquito's estimate method can be used to estimate fees, gas and storage associated with an operation."),Object(r.b)("h2",{id:"estimate-values"},"Estimate Values"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#burnfeemutez"}),Object(r.b)("inlineCode",{parentName:"a"},"burnFeeMutez")),": The number of Mutez that will be burned for the storage of the operation. Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#gaslimit"}),Object(r.b)("inlineCode",{parentName:"a"},"gasLimit")),": The limit on the amount of gas a given operation can consume. Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#minimalfeemutez"}),Object(r.b)("inlineCode",{parentName:"a"},"minimalFeeMutez")),": Minimum fees for the operation according to baker defaults. Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#storagelimit"}),Object(r.b)("inlineCode",{parentName:"a"},"storageLimit")),": The limit on the amount of storage an operation can use. Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#suggestedfeemutez"}),Object(r.b)("inlineCode",{parentName:"a"},"suggestedFeeMutez:"))," The suggested fee for the operation which includes minimal fees and a small buffer. Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#totalcost"}),Object(r.b)("inlineCode",{parentName:"a"},"totalCost")),": The sum of ",Object(r.b)("inlineCode",{parentName:"p"},"minimalFeeMutez")," + ",Object(r.b)("inlineCode",{parentName:"p"},"burnFeeMutez"),". Returns a number."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.estimate.html#usingbasefeemutez"}),Object(r.b)("inlineCode",{parentName:"a"},"usingBaseFeeMutez")),": Fees according to your specified base fee will ensure that at least minimum fees are used."),Object(r.b)("h3",{id:"estimate-a-transfer-operation"},"Estimate a transfer operation"),Object(r.b)("p",null,"The following example shows an estimate of the fees associated with transferring 2\ua729 to ",Object(r.b)("inlineCode",{parentName:"p"},"tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY")," address. For demonstration purpose, the signer is configured using a throw-away private key."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\nconst amount = 2;\nconst address = 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY';\n\nprintln(`Estimating the transfer of ${amount} \ua729 to ${address} : `);\nTezos.estimate.transfer({ to: address, amount: amount })\n  .then(est => {\n    println(`burnFeeMutez : ${est.burnFeeMutez}, \n    gasLimit : ${est.gasLimit}, \n    minimalFeeMutez : ${est.minimalFeeMutez}, \n    storageLimit : ${est.storageLimit}, \n    suggestedFeeMutez : ${est.suggestedFeeMutez}, \n    totalCost : ${est.totalCost}, \n    usingBaseFeeMutez : ${est.usingBaseFeeMutez}`);\n  })\n  .catch(error => console.table(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h3",{id:"estimate-a-smart-contract-call"},"Estimate a smart contract call"),Object(r.b)("p",null,"This example will demonstrate how to estimate the fees related to calling a smart contract. The Ligo source code for the smart contract used in this example can be found at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ide.ligolang.org/p/N2QTykOAXBkXmiKcRCyg3Q"}),"Ligo Web IDE"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\nTezos.contract.at('KT1JVErLYTgtY8uGGZ4mso2npTSxqVLDRVbC')\n.then(contract => {\n    const i = 7;\n\n    return contract.methods.increment(i).toTransferParams({});\n  })\n  .then(op => {\n    println(`Estimating the smart contract call : `);\n    return Tezos.estimate.transfer(op)\n  })\n  .then(est => {\n    println(`burnFeeMutez : ${est.burnFeeMutez}, \n    gasLimit : ${est.gasLimit}, \n    minimalFeeMutez : ${est.minimalFeeMutez}, \n    storageLimit : ${est.storageLimit}, \n    suggestedFeeMutez : ${est.suggestedFeeMutez}, \n    totalCost : ${est.totalCost}, \n    usingBaseFeeMutez : ${est.usingBaseFeeMutez}`)\n    })\n  .catch(error => console.table(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h3",{id:"estimate-a-contract-origination"},"Estimate a contract origination"),Object(r.b)("p",null,"In this example, we will use the estimate method of Taquito on a contract origination. The ",Object(r.b)("inlineCode",{parentName:"p"},"genericMultisigJSONfile")," variable contains a Michelson Smart Contract."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\nprintln(`Estimating the contract origination : `);\n  Tezos.estimate.originate({\n    code: genericMultisigJSONfile,\n    storage: {\n      stored_counter: 0,\n      threshold: 1,\n      keys: ['edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t']\n    }\n  })\n  .then (originationOp => {\n    println(`burnFeeMutez : ${originationOp.burnFeeMutez}, \n    gasLimit : ${originationOp.gasLimit}, \n    minimalFeeMutez : ${originationOp.minimalFeeMutez}, \n    storageLimit : ${originationOp.storageLimit}, \n    suggestedFeeMutez : ${originationOp.suggestedFeeMutez}, \n    totalCost : ${originationOp.totalCost}, \n    usingBaseFeeMutez : ${originationOp.usingBaseFeeMutez}`)\n    })\n  .catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")))}l.isMDXComponent=!0}}]);