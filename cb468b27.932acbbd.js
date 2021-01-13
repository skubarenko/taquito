(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?r.a.createElement(u,c(c({ref:t},b),{},{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(106)),i={title:"Upgrading to v7/delphi",author:"Roxane Letourneau"},c={unversionedId:"v7_breaking_changes",id:"v7_breaking_changes",isDocsHomePage:!1,title:"Upgrading to v7/delphi",description:"With this major number update to support the delphi Tezos protocol, we have also implemented some breaking changes to the Taquito API. This document explains how to update your projects.",source:"@site/../docs/v7_breaking_changes.md",slug:"/v7_breaking_changes",permalink:"/docs/v7_breaking_changes",version:"current",sidebar:"docs",previous:{title:"RPC nodes",permalink:"/docs/rpc_nodes_integration_test"}},l=[{value:"Removed the default RPC Node URL",id:"removed-the-default-rpc-node-url",children:[{value:"Change required in your code:",id:"change-required-in-your-code",children:[]},{value:"Example Errors if you were using the Tezos singleton",id:"example-errors-if-you-were-using-the-tezos-singleton",children:[]},{value:"Example Errors when the URL is not set:",id:"example-errors-when-the-url-is-not-set",children:[]}]},{value:"Changed the name of the contracts default entrypoint",id:"changed-the-name-of-the-contracts-default-entrypoint",children:[{value:"Changes required in your code:",id:"changes-required-in-your-code",children:[]},{value:"Error when not replacing main with default:",id:"error-when-not-replacing-main-with-default",children:[]}]},{value:"Removed the <code>importKey</code> method from TezosToolkit class",id:"removed-the-importkey-method-from-tezostoolkit-class",children:[{value:"Change required in your code:",id:"change-required-in-your-code-1",children:[]},{value:"Error when the <code>importKey</code> function is not replaced",id:"error-when-the-importkey-function-is-not-replaced",children:[]}]},{value:"Fetching <code>constants</code> from the RPC",id:"fetching-constants-from-the-rpc",children:[{value:"Example of breaking change:",id:"example-of-breaking-change",children:[]}]},{value:"DerivationType renamed in the LedgerSigner",id:"derivationtype-renamed-in-the-ledgersigner",children:[{value:"Change required in your code:",id:"change-required-in-your-code-2",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Breaking changes")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"With this major number update to support the ",Object(o.b)("inlineCode",{parentName:"p"},"delphi")," Tezos protocol, we have also implemented some breaking changes to the Taquito API. This document explains how to update your projects."))),Object(o.b)("p",null,"This page explains each breaking change, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the reasons that motivated it,"),Object(o.b)("li",{parentName:"ul"},"code examples that explain how to update your code (how it was in prior versions versus how it needs to be using v7), and"),Object(o.b)("li",{parentName:"ul"},"potential errors you might get when updating to v7 without making the fixes.")),Object(o.b)("h2",{id:"removed-the-default-rpc-node-url"},"Removed the default RPC Node URL"),Object(o.b)("p",null,"Prior version 7, Taquito shipped with a default RPC node URL. We have removed the default URL, forcing developers to specify the RPC node they wish to use. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rpc_nodes"}),"RPC Nodes")," for a list of public and private nodes options."),Object(o.b)("p",null,"The previous default was set in the constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"RpcClient"),' class. We took this approach so that users can get started quickly, and Taquito should "just work" with minimal fiddling. Users could import a ready-to-use ',Object(o.b)("inlineCode",{parentName:"p"},"Tezos")," singleton, an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"TezosToolkit")," class using the default RPC URL.    "),Object(o.b)("p",null,"However, in version 7 of Taquito, we decided to remove the default RPC node URL. The reason behind this choice is to encourage developers to make their own informed choice on which Tezos RPC node (public or private) is best for them. This change also helps avoid dApps using Taquito from centralizing on one public RPC node. Decentralization is an important part of Tezos, including the node infrastructure level."),Object(o.b)("p",null,"This change impacts the following classes, where it is now required to specify an RPC node in their constructor:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RpcClient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Context"),"  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TezosToolkit")," ")),Object(o.b)("p",null,"When creating an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"TezosToolkit"),", one must specify the RPC node. It can be a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," or a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rpc_package"}),Object(o.b)("inlineCode",{parentName:"a"},"RpcClient"))," object. A list of community-run nodes can be accessed ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rpc_nodes#list-of-community-run-nodes"}),"here"),". ",Object(o.b)("strong",{parentName:"p"},"The ",Object(o.b)("inlineCode",{parentName:"strong"},"Tezos")," singleton, which was a ready-to-use instance of the ",Object(o.b)("inlineCode",{parentName:"strong"},"TezosToolkit")," class, is no longer supported.")),Object(o.b)("h3",{id:"change-required-in-your-code"},"Change required in your code:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nconst tezos = new TezosToolkit();\n// or\nimport { Tezos } from '@taquito/taquito';\n// ready-to-use Tezos singleton\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Since version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nconst tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL_NOW_REQUIRED');\n// or\n// Those who were using the Tezos singleton may consider naming the variable like the singleton to avoid renaming it everywhere in their code:\nconst Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL_NOW_REQUIRED');\n")),Object(o.b)("h3",{id:"example-errors-if-you-were-using-the-tezos-singleton"},"Example Errors if you were using the Tezos singleton"),Object(o.b)("p",null,"Here is an example of the compilation error you would get when updating Taquito to version 7, if you do not replace the Tezos singleton by an instance of the TezosToolkit: "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Module '\"../../node_modules/@taquito/taquito/dist/types/taquito\"' has no exported member 'Tezos'.")," "),Object(o.b)("h3",{id:"example-errors-when-the-url-is-not-set"},"Example Errors when the URL is not set:"),Object(o.b)("p",null,"Here are examples of the compilation error you would get when updating Taquito to version 7, if the RPC URL is not specified: "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"An argument for '_rpc' was not provided. Expected 1-2 arguments, but got 0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Type '(rpcClient: string | RpcClient) => TezosToolkit' is missing the following properties from type 'TezosToolkit': _rpc, _context, _stream, _options, and 20 more.")),Object(o.b)("h2",{id:"changed-the-name-of-the-contracts-default-entrypoint"},"Changed the name of the contracts default entrypoint"),Object(o.b)("p",null,"Version 7 of Taquito introduces a breaking change for implementations that use the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," method for calling the default entrypoint of a contract."),Object(o.b)("p",null,"Before version 7, there was a synthetic method called ",Object(o.b)("inlineCode",{parentName:"p"},"main")," in Taquito to interact with the default entrypoint of a contract. The ",Object(o.b)("inlineCode",{parentName:"p"},"main")," name was confusing because it referred to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://tezos.gitlab.io/whitedoc/michelson.html#the-default-entrypoint"}),"default")," entrypoint in Michelson."),Object(o.b)("p",null,"In version 7, this synthetic entrypoint name has been renamed from ",Object(o.b)("inlineCode",{parentName:"p"},"main")," to ",Object(o.b)("inlineCode",{parentName:"p"},"default"),"."),Object(o.b)("h3",{id:"changes-required-in-your-code"},"Changes required in your code:"),Object(o.b)("p",null,"This change applies to you if you use the default ",Object(o.b)("inlineCode",{parentName:"p"},"main")," entrypoint in your code when calling a Tezos smart contract."),Object(o.b)("p",null,"For example, the contract ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://better-call.dev/carthagenet/KT1FUF3yapxt5pKGsYgnekrJR4e25oJjYvCp/operations"}),"KT1FUF3yapxt5pKGsYgnekrJR4e25oJjYvCp")," (deployed on Carthagenet) has a single entrypoint (default)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contract = await tezos.contract.at('KT1FUF3yapxt5pKGsYgnekrJR4e25oJjYvCp')\nconst opMethod = await contract.methods.main(\"2\").send();\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Since version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contract = await tezos.contract.at('KT1FUF3yapxt5pKGsYgnekrJR4e25oJjYvCp')\nconst opMethod = await contract.methods.default(\"2\").send();\n")),Object(o.b)("h3",{id:"error-when-not-replacing-main-with-default"},"Error when not replacing main with default:"),Object(o.b)("p",null,"If you update to version 7 without replacing main with default in your code, you might get the following error at runtime:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"contract.methods.main is not a function")),Object(o.b)("h2",{id:"removed-the-importkey-method-from-tezostoolkit-class"},"Removed the ",Object(o.b)("inlineCode",{parentName:"h2"},"importKey")," method from TezosToolkit class"),Object(o.b)("p",null,"This method was marked as deprecated in March 2020 and recommended to use the signer provider: ",Object(o.b)("inlineCode",{parentName:"p"},"@taquito/signer importKey"),".\nThe purpose of this change was to remove the ",Object(o.b)("inlineCode",{parentName:"p"},"@taquito/signer")," dependency from ",Object(o.b)("inlineCode",{parentName:"p"},"@taquito/taquito")," because it increased the bundle size by ~1.1mb while being not necessary for most browser-based use-cases."),Object(o.b)("h3",{id:"change-required-in-your-code-1"},"Change required in your code:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\n\nconst tezos = new TezosToolkit('your_rpc_node')\ntezos.importKey(email,password,mnemonic,secret);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Since version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nimport { importKey } from \"@taquito/signer\";\n\nconst tezos = new TezosToolkit('your_rpc_node')\nimportKey(tezos, email, password, mnemonic, secret);\n")),Object(o.b)("h3",{id:"error-when-the-importkey-function-is-not-replaced"},"Error when the ",Object(o.b)("inlineCode",{parentName:"h3"},"importKey")," function is not replaced"),Object(o.b)("p",null,"If you update to version 7 without replacing the ",Object(o.b)("inlineCode",{parentName:"p"},"importKey")," method in your code, you might get the following compilation error:\n",Object(o.b)("inlineCode",{parentName:"p"},"Property 'importKey' does not exist on type 'TezosToolkit'.")),Object(o.b)("p",null,"or this error at runtime:\n",Object(o.b)("inlineCode",{parentName:"p"},"importKey is not a function"),"."),Object(o.b)("h2",{id:"fetching-constants-from-the-rpc"},"Fetching ",Object(o.b)("inlineCode",{parentName:"h2"},"constants")," from the RPC"),Object(o.b)("p",null,"Taquito now uses a type union that is composed of specific types for each protocol's economic constants."),Object(o.b)("p",null,"Each protocol can add, change or remove constants. Prior to v7 Taquito used a single type with optional parameters. For correctness and to avoid bloat over time, we now implement specific types for each protocol's constants."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ConstantsResponse")," interface in the Taquito RPC package is used when querying the RPC for constants with the ",Object(o.b)("inlineCode",{parentName:"p"},"getConstants")," method of the ",Object(o.b)("inlineCode",{parentName:"p"},"RpcClient")," class. Changes made to the interface ",Object(o.b)("inlineCode",{parentName:"p"},"ConstantsResponse")," are in the table below. Note that not all of them are breaking changes; some new or missing properties are added. "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Proto"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max_anon_ops_per_block?"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"New in Delphinet, optional in Taquito because not in previous protocols")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"max_revelations_per_block?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 to 6"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Changed to optional because not in proto 7"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"block_reward?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BigNumber"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 to 5"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Changed to optional because not in proto 6 and 7"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"initial_endorsers?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"type correction, string","[ ]"," changed to number"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"delay_per_missing_endorsement?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BigNumber"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"type correction, number changed to BigNumber"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"endorsement_reward")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BigNumber or BigNumber[]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Added BigNumber","[ ]"," for proto 6 and 7, BigNumber before"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"baking_reward_per_endorsement?"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BigNumber[]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6 and 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Was missing in Taquito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"test_chain_duration?"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BigNumber"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Was missing in Taquito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"origination_size?"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Was missing in Taquito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"origination_burn?")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 and 2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Changed to optional because only in proto 1 and 2"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max_proposals_per_delegate?"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3 to 7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Was missing in Taquito")))),Object(o.b)("h3",{id:"example-of-breaking-change"},"Example of breaking change:"),Object(o.b)("p",null,"The constant ",Object(o.b)("inlineCode",{parentName:"p"},"max_revelations_per_block")," is part of protocols 1 to 6, but not 7. Thus, we have changed it to an optional property in Taquito. Projects which use  ",Object(o.b)("inlineCode",{parentName:"p"},"max_revelations_per_block")," property in their code need to add a check to ensure that the property is defined. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const client = new RpcClient('your_rpc');\nconst response = await client.getConstants();\n\nconst maxRevPerBlock = response.max_revelations_per_block;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Since version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const client = new RpcClient('your_rpc');\nconst response = await client.getConstants();\n\nif (response.max_revelations_per_block) {\n    const maxRevelatioknsPerBlock = response.max_revelations_per_block;\n}\n")),Object(o.b)("h2",{id:"derivationtype-renamed-in-the-ledgersigner"},"DerivationType renamed in the LedgerSigner"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Early Adopters of the Taquito Ledger Signer")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Ledger support was pre-released in September. Taquito never officially released this package until v7, but some teams adopted the pre-release package early, and this section is relevant only to those early adopters."))),Object(o.b)("p",null,"This breaking change can impact the users of the pre-released ",Object(o.b)("inlineCode",{parentName:"p"},"ledger-signer")," package. "),Object(o.b)("p",null,"We have renamed the enum ",Object(o.b)("inlineCode",{parentName:"p"},"DerivationType")," members to use the curve name. Now ",Object(o.b)("inlineCode",{parentName:"p"},"tz1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tz2"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"tz3")," become ",Object(o.b)("inlineCode",{parentName:"p"},"ED25519"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SECP256K1"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"P256"),". This enum is used in the optional ",Object(o.b)("inlineCode",{parentName:"p"},"derivationType")," parameter of the constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"LedgerSigner")," class."),Object(o.b)("p",null,"There is another derivation type (",Object(o.b)("inlineCode",{parentName:"p"},"BIPS32_ED25519"),"), which also uses the tz1 prefix. It is used by the ",Object(o.b)("inlineCode",{parentName:"p"},"tezos-client")," CLI when paired with a ledger device but is not implemented so far in the ",Object(o.b)("inlineCode",{parentName:"p"},"ledger-signer")," package. The derivation types being named ",Object(o.b)("inlineCode",{parentName:"p"},"tz1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tz2")," and ",Object(o.b)("inlineCode",{parentName:"p"},"tz3")," were potentially an area of confusion in the future, whereas different derivation types use the same signature scheme. "),Object(o.b)("h3",{id:"change-required-in-your-code-2"},"Change required in your code:"),Object(o.b)("p",null,"No change is required if you are using the default ",Object(o.b)("inlineCode",{parentName:"p"},"derivationType")," parameter."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In early version 7 pre-released:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ledgerSigner = new LedgerSigner(transport, \"44'/1729'/0'/0'\", true, DerivationType.tz2);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Since version 7:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ledgerSigner = new LedgerSigner(transport, \"44'/1729'/0'/0'\", true, DerivationType.SECP256K1);\n")))}p.isMDXComponent=!0}}]);