(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{532:function(e,t,s){Promise.resolve().then(s.bind(s,3218))},3218:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var r=s(3827),n=s(9508);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)(n.default,{}),(0,r.jsx)("div",{className:"container"})]})})}},9508:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(3827),n=s(4090),a=s(1754),i=s(9536),l=s(2388),o=s(8621),c=s(7960),m=s(8792),d=s(1047),u=s(2891);let h=[{name:"Home",href:"/",current:!1},{name:"Guidelines",href:"/guidelines",current:!1},{name:"Scores",href:"/scores",current:!1}];function x(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function f(){let e;e=localStorage.getItem("theme");let[t,s]=(0,n.useState)("dark"===e);(0,n.useEffect)(()=>{s("dark"===localStorage.getItem("theme"))},[]),(0,n.useEffect)(()=>{t?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);let f=()=>{localStorage.clear()};return(0,r.jsx)(a.p,{as:"nav",className:"w-screen bg-white",children:e=>{let{open:g}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-8 lg:px-12",children:(0,r.jsxs)("div",{className:"relative flex h-auto items-center justify-between py-3",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,r.jsxs)(a.p.Button,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-light-brown hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,r.jsx)("span",{className:"absolute -inset-0.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),g?(0,r.jsx)(o.Z,{className:"block h-6 w-6 stroke-light-brown","aria-hidden":"true"}):(0,r.jsx)(c.Z,{className:"block h-6 w-6 stroke-light-brown","aria-hidden":"true"})]})}),(0,r.jsxs)("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsx)("img",{className:"h-12 w-auto rounded-md bg-light-brown p-2",src:"".concat("/_next/static/media/logo_vit.308adc30.png"),alt:"Your Company"})}),(0,r.jsx)("div",{className:"hidden sm:ml-6 sm:block",children:(0,r.jsx)("div",{className:"flex space-x-4",children:h.map(e=>(0,r.jsx)(m.default,{href:e.href,className:x(e.current?"bg-light-brown text-white":"text-light-brown hover:bg-light-brown hover:text-white","rounded-md px-3 py-2 text-lg font-semibold"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]}),(0,r.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[(0,r.jsx)("button",{onClick:()=>s(e=>!e),children:t?(0,r.jsx)(d.Z,{className:"fill-white stroke-white"}):(0,r.jsx)(u.Z,{className:"fill-light-brown stroke-light-brown"})}),(0,r.jsxs)(i.v,{as:"div",className:"relative ml-3",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(i.v.Button,{className:"relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-brown",children:[(0,r.jsx)("span",{className:"absolute -inset-1.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-10 w-10 stroke-light-brown",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})})]})}),(0,r.jsx)(l.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(i.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,r.jsx)(i.v.Item,{children:()=>(0,r.jsx)(m.default,{href:"/profile",className:"block px-4 py-2 text-sm text-gray-900",children:"Your Profile"})}),(0,r.jsx)(i.v.Item,{children:()=>(0,r.jsx)(m.default,{href:"/login",className:"block px-4 py-2 text-sm text-gray-900",onClick:f,children:"Sign out"})})]})})]})]})]})}),(0,r.jsx)(a.p.Panel,{className:"sm:hidden",children:(0,r.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:h.map(e=>(0,r.jsx)(a.p.Button,{as:"a",href:e.href,className:x(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}})}}},function(e){e.O(0,[466,971,69,744],function(){return e(e.s=532)}),_N_E=e.O()}]);