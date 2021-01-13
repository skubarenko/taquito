(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,u=l["".concat(s,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(106)),s={title:"Making Transfers",author:"Simon Boissonneault-Robert"},i={unversionedId:"making_transfers",id:"making_transfers",isDocsHomePage:!1,title:"Making Transfers",description:"Examples demonstrating transfers between various address types",source:"@site/../docs/making_transfers.md",slug:"/making_transfers",permalink:"/docs/making_transfers",version:"current",sidebar:"docs",previous:{title:"Wallet API",permalink:"/docs/wallet_API"},next:{title:"Originating (Deploying) Contracts",permalink:"/docs/originate"}},c=[{value:"Transfer from an implicit tz1 address to a tz1 address",id:"transfer-from-an-implicit-tz1-address-to-a-tz1-address",children:[]},{value:"Transfers involving &quot;originated&quot; KT1 addresses",id:"transfers-involving-originated-kt1-addresses",children:[]},{value:"Transfer 0.00005 (50 mutez) tokens from a KT1 address to a tz1 address",id:"transfer-000005-50-mutez-tokens-from-a-kt1-address-to-a-tz1-address",children:[{value:"Example transfer from a KT1 to a tz1 address on Carthage/Proto006",id:"example-transfer-from-a-kt1-to-a-tz1-address-on-carthageproto006",children:[]}]},{value:"Transfer 0.000001 (1 mutez) tokens from a KT1 address to a KT1 address",id:"transfer-0000001-1-mutez-tokens-from-a-kt1-address-to-a-kt1-address",children:[{value:"Example for Babylon/Proto005 or higher",id:"example-for-babylonproto005-or-higher",children:[]}]}],p={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"examples-demonstrating-transfers-between-various-address-types"},"Examples demonstrating transfers between various address types"),Object(o.b)("p",null,"In Tezos a transfer operation will transfer tokens between two addresses."),Object(o.b)("p",null,"When the ",Object(o.b)("inlineCode",{parentName:"p"},"Babylon/proto005")," protocol amendment came into affect, it changed how token transfer involving KT1 addresses work. In order to transfer tokens ",Object(o.b)("em",{parentName:"p"},"from")," a KT1 account, the transfer must be completed by calling the KT1's smart contract ",Object(o.b)("inlineCode",{parentName:"p"},"do")," method. The ",Object(o.b)("inlineCode",{parentName:"p"},"do")," method takes a lambda function, and it is the logic of this function that causes the desired transfer of tokens to happen."),Object(o.b)("p",null,"The Taquito ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ecadlabs/taquito/blob/master/integration-tests/manager-contract-scenario.spec.ts"}),"integration tests")," can be useful to see how this works."),Object(o.b)("h2",{id:"transfer-from-an-implicit-tz1-address-to-a-tz1-address"},"Transfer from an implicit tz1 address to a tz1 address"),Object(o.b)("p",null,"This is the simplest token transfer scenario"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await Tezos.contract.transfer({ to: contract.address, amount: 1 })\n")),Object(o.b)("p",null,"In the following example we will transfer 0.5\ua729 from a ",Object(o.b)("inlineCode",{parentName:"p"},"tz1aaYoabvj2DQtpHz74Z83fSNjY29asdBfZ")," address that will sign the operation to ",Object(o.b)("inlineCode",{parentName:"p"},"tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\nrender(`Fetching a private key...`);\nfetch('https://api.tez.ie/keys/carthagenet/', {\n    method: 'POST',\n    headers: { 'Authorization': 'Bearer taquito-example' }\n  })\n  .then(response => response.text())\n  .then(privateKey => {\n    render(`Importing the private key...`);\n    return importKey(Tezos, privateKey);\n  })\n  .then(() => {\n    const amount = 0.5;\n    const address = 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY';\n\n    render(`Transfering ${amount} \ua729 to ${address}...`);\n    return Tezos.contract.transfer({ to: address, amount: amount });\n  })\n  .then(op => {\n    render(`Waiting for ${op.hash} to be confirmed...`);\n    return op.confirmation(1).then(() => op.hash);\n  })\n  .then(hash => render(`Operation injected: https://carthagenet.tzstats.com/${hash}`))\n  .catch(error => render(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h2",{id:"transfers-involving-originated-kt1-addresses"},'Transfers involving "originated" KT1 addresses'),Object(o.b)("p",null,"Pre-",Object(o.b)("inlineCode",{parentName:"p"},"Babylon/proto005"),' it was common to have "script-less" KT1 addresses. This changed when the Tezos blockchain migrated to the new ',Object(o.b)("inlineCode",{parentName:"p"},"Babylon/proto005")," protocol."),Object(o.b)("p",null,"During the migration form ",Object(o.b)("inlineCode",{parentName:"p"},"proto004")," to ",Object(o.b)("inlineCode",{parentName:"p"},"proto005")," all KT1 addresses were migrated so that they got a contract called ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts/manager.tz"}),"manager.tz"),'. This meant that there are no longer any "script-less" KT1 addresses in Tezos.'),Object(o.b)("p",null,"In order to transfer tokens from a KT1 addresses with the new ",Object(o.b)("inlineCode",{parentName:"p"},"manager.tz")," contract, a call to the KT1's smart contract's ",Object(o.b)("inlineCode",{parentName:"p"},"do")," method is required. The ",Object(o.b)("inlineCode",{parentName:"p"},"do")," method takes a lambda function, and it is this lambda function that causes changes to occur in the KT1 address."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The examples following only apply to KT1 addresses that were migrated as part of the ",Object(o.b)("inlineCode",{parentName:"p"},"Babylon/proto005")," upgrade. Transfers involving ",Object(o.b)("em",{parentName:"p"},"other")," types of smart-contracts, will depend on those contracts specifically.")),Object(o.b)("h2",{id:"transfer-000005-50-mutez-tokens-from-a-kt1-address-to-a-tz1-address"},"Transfer 0.00005 (50 mutez) tokens from a KT1 address to a tz1 address"),Object(o.b)("p",null,"Sending 50 mutez from ",Object(o.b)("inlineCode",{parentName:"p"},"kt1...")," to ",Object(o.b)("inlineCode",{parentName:"p"},"tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh"),"."),Object(o.b)("h3",{id:"example-transfer-from-a-kt1-to-a-tz1-address-on-carthageproto006"},"Example transfer from a KT1 to a tz1 address on Carthage/Proto006"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const contract = await Tezos.contract.at("kt1...")\nawait contract.methods.do(transferImplicit("tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh", 50)).send({ amount: 0 })\n')),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"transferImplicit")," is a function that returns the necessary Michelson lambda. It looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'export const transferImplicit = (key: string, mutez: number) => {\n    return [{ "prim": "DROP" },\n    { "prim": "NIL", "args": [{ "prim": "operation" }] },\n    {\n        "prim": "PUSH",\n        "args":\n            [{ "prim": "key_hash" },\n            { "string": key }]\n    },\n    { "prim": "IMPLICIT_ACCOUNT" },\n    {\n        "prim": "PUSH",\n        "args": [{ "prim": "mutez" }, { "int": `${mutez}` }]\n    },\n    { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" },\n    { "prim": "CONS" }]\n}\n')),Object(o.b)("h2",{id:"transfer-0000001-1-mutez-tokens-from-a-kt1-address-to-a-kt1-address"},"Transfer 0.000001 (1 mutez) tokens from a KT1 address to a KT1 address"),Object(o.b)("p",null,"Sending 1 mutez to ",Object(o.b)("inlineCode",{parentName:"p"},"KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK")," from ",Object(o.b)("inlineCode",{parentName:"p"},"KT1...")),Object(o.b)("h3",{id:"example-for-babylonproto005-or-higher"},"Example for Babylon/Proto005 or higher"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const contract = await Tezos.contract.at("KT1...")\nawait contract.methods.do(transferToContract("KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK", 1)).send({ amount: 0 })\n')),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"transferToContract")," is a function that looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'export const transferToContract = (key: string, amount: number) => {\n    return [{ "prim": "DROP" },\n    { "prim": "NIL", "args": [{ "prim": "operation" }] },\n    {\n        "prim": "PUSH",\n        "args":\n            [{ "prim": "address" },\n            { "string": key }]\n    },\n    { "prim": "CONTRACT", "args": [{ "prim": "unit" }] },\n    [{\n        "prim": "IF_NONE",\n        "args":\n            [[[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]],\n            []]\n    }],\n    {\n        "prim": "PUSH",\n        "args": [{ "prim": "mutez" }, { "int": `${amount}` }]\n    },\n    { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" },\n    { "prim": "CONS" }]\n}\n')))}d.isMDXComponent=!0}}]);