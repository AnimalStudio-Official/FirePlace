"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[235],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_position:8},i="Middleware",o={unversionedId:"middleware",id:"middleware",title:"Middleware",description:"Crystal's networking layer uses the Comm module internally, which allows for middleware to be introduced at both the inbound and outbound level. For example, if a service had a client method called GetMoney(player), and the client called that method, your service would then fire that function. If there is any inbound middleware on the server, the inbound middleware would fire before GetMoney is fired. And the outbound middleware would fire after GetMoney is fired.",source:"@site/docs/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/Crystal/docs/middleware",draft:!1,editUrl:"https://github.com/AnimalStudio-Official/Crystal/edit/master/docs/middleware.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Examples",permalink:"/Crystal/docs/examples"},next:{title:"VS Code Snippets",permalink:"/Crystal/docs/vscodesnippets"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:3},{value:"Logger",id:"logger",level:4},{value:"Manipulation",id:"manipulation",level:4},{value:"Per-Service Example",id:"per-service-example",level:4},{value:"Serialization",id:"serialization",level:4}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"Crystal's networking layer uses the ",(0,r.kt)("a",{parentName:"p",href:"https://sleitnick.github.io/RbxUtil/api/Comm/"},"Comm")," module internally, which allows for middleware to be introduced at both the inbound and outbound level. For example, if a service had a client method called ",(0,r.kt)("inlineCode",{parentName:"p"},"GetMoney(player)"),", and the client called that method, your service would then fire that function. If there is any inbound middleware on the server, the inbound middleware would fire ",(0,r.kt)("em",{parentName:"p"},"before")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GetMoney")," is fired. And the outbound middleware would fire ",(0,r.kt)("em",{parentName:"p"},"after")," GetMoney is fired."),(0,r.kt)("p",null,"Middleware can be used to both transform inbound/outbound arguments, and also decide to drop requests/responses. This is useful for many use-cases, such as automatically serializing/deserializing complex data types over the network, or sanitizing incoming data."),(0,r.kt)("p",null,"Middleware can be added on both the server and client, and affects functions and signals. Middleware can either be added at the Crystal global level, or per service."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Middleware is added when Crystal is started: ",(0,r.kt)("inlineCode",{parentName:"p"},"Crystal.Start({Middleware = {Inbound = {...}, Outbound = {...}}})")," ",(0,r.kt)("em",{parentName:"p"},"or"),' on each service. Each "middleware" item in the tables is a function. On the client, this function takes an array table containing all the arguments passed along. On the server, it is nearly the same, except the first argument before the arguments table is the player.'),(0,r.kt)("p",null,"Each function should return a boolean, indicating whether or not to continue to the request/response. If ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", an optional variadic list of items can be returned, which will be returned back to the caller (essentially a short-circuit, but still returning data)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client middleware function signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"(args: {any}) -> (boolean, ...)")),(0,r.kt)("li",{parentName:"ul"},"Server middleware function signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"(player: Player, args: {any}) -> (boolean, ...)"))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"logger"},"Logger"),(0,r.kt)("p",null,"Here's an example on the client which logs all inbound data from the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function Logger(args: {any})\n    print(args)\n    return true\nend\n\nCrystal.Start({\n    Middleware = {Inbound = {Logger}}\n})\n")),(0,r.kt)("p",null,"Here's the same thing, but on the server. As you can see, the only difference is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," argument is added to the middleware function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function Logger(player: Player, args: {any})\n    print(player, args)\n    return true\nend\n\nCrystal.Start({\n    Middleware = {Inbound = {Logger}}\n})\n")),(0,r.kt)("h4",{id:"manipulation"},"Manipulation"),(0,r.kt)("p",null,"A more complex example, where any inbound number to the client is multiplied by 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local function DoubleNumbers(args)\n    for i,v in ipairs(args) do\n        if type(v) == "number" then\n            args[i] *= 2\n        end\n    end\n    return true\nend\n\nCrystal.Start({Middleware = {Inbound = {DoubleNumbers}}})\n')),(0,r.kt)("h4",{id:"per-service-example"},"Per-Service Example"),(0,r.kt)("p",null,"Middleware can also be targeted per-service, which will override the global level middleware for the given service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Server-side:\nlocal MyService = Crystal.CreateService {\n    Name = "MyService",\n    Client = {},\n    Middleware = {\n        Inbound = {Logger},\n        Outbound = {},\n    },\n}\n')),(0,r.kt)("p",null,"On the client, things look a little different. Middleware is still per-service, not controller, so the definitions of per-service middleware need to go within ",(0,r.kt)("inlineCode",{parentName:"p"},"Crystal.Start()")," on the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Client-side:\nCrystal.Start({\n    PerServiceMiddleware = {\n        -- Mapped by name of the service\n        MyService = {\n            Inbound = {Logger},\n            Outbound = {},\n        },\n    },\n})\n")),(0,r.kt)("h4",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"Another example, where a simple class is serialized/deserialized on the client before/after remote network communication occurs. A similar setup could be used server-side to complete the loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-----------------------------------------------------\n-- Setup a simple class:\nlocal MyClass = {}\nMyClass.__index = MyClass\nMyClass.ClassName = "MyClass"\n\nfunction MyClass.new()\n    return setmetatable({\n        SomeData = "",\n    }, MyClass)\nend\n\nfunction MyClass:Serialize()\n    return {_CN = self.ClassName, D = self.SomeData}\nend\n\nfunction MyClass.deserialize(data)\n    local myClass = MyClass.new()\n    myClass.SomeData = data\n    return myClass\nend\n-----------------------------------------------------\n\n-- Setup middleware for class serialization/deserialization on client:\n\nlocal function InboundClass(args)\n    for i,v in ipairs(args) do\n        if type(v) == "table" and v._CN == "MyClass" then\n            args[i] = MyClass.deserialize(v)\n        end\n    end\n    return true\nend\n\nlocal function OutboundClass(args)\n    for i,v in ipairs(args) do\n        if type(v) == "table" and v.ClassName == "MyClass" then\n            args[i] = v:Serialize()\n        end\n    end\n    return true\nend\n\nCrystal.Start({\n    Middleware = {\n        Inbound = {InboundClass},\n        Outbound = {OutboundClass},\n    },\n})\n')))}c.isMDXComponent=!0}}]);