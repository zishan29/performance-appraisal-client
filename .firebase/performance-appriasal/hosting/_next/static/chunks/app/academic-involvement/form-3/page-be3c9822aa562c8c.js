(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{1984:function(e,t,s){Promise.resolve().then(s.bind(s,8587))},8587:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var a=s(3827),n=s(4090),r=s(9508),i=s(9313),l=s(8792),o=s(3167);function c(){let[e,t]=(0,n.useState)(1.5),[s,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)([]),[m,h]=(0,n.useState)(!0),[p,x]=(0,n.useState)([{state:"a",benchmark:"1",feedback:"0",attendees:"0",totalStudents:"0",mapping:"1.5"},{state:"a",benchmark:"1",feedback:"0",attendees:"0",totalStudents:"0",mapping:"1.5"}]);async function f(){c(!0);let e=localStorage.getItem("token");try{let t=await fetch("https://performance-appraisal-api.adaptable.app/submission?name=AI-2",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(t.ok){let e=await t.json();console.log(e.submission),u(e.submission)}}catch(e){console.log(e)}finally{c(!1)}}(0,n.useEffect)(()=>{f()},[]);let g="Industry Expert",v="Industry Expert",j="International / National VP and above / Unicorn StartUp - CXO",b="SME",N="International / National VP and above / Unicorn StartUp - CXO",y="SME";"a"!==p[0].state&&(g="Top University / Institute",j="International / National Professor",b="State Professor"),"a"!==p[1].state&&(v="Top University / Institute",N="International / National Professor",y="State Professor");let w=(e,t,s)=>{let a=[...p];a[e][t]=s,x(a),console.log(p)};async function k(e){e.preventDefault(),c(!0);let t=localStorage.getItem("token"),s={submissionName:"AI-2",categoryId:localStorage.getItem("Academic Involvement")};console.log(s);try{(await fetch("https://performance-appraisal-api.adaptable.app/submissions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(s)})).ok&&f()}catch(e){console.log(e)}finally{c(!1)}}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{className:"main",children:[(0,a.jsx)(r.default,{}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(i.Z,{categoryName:"Academic Involvement"}),(0,a.jsxs)("div",{className:"form-container",children:[(0,a.jsx)("div",{className:"title",children:"BSA - Guest Lecture"}),(0,a.jsxs)("form",{action:"",id:"taughtCourses",className:"form",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"noOfHours",className:"label",children:"Have you performed under this parameter?"}),(0,a.jsxs)("select",{name:"",id:"",className:"input",onChange:e=>h("1"===e.target.value),value:m?"1":"0",disabled:!1===m&&d.length>0||d.length>0,children:[(0,a.jsx)("option",{value:"1",children:"Yes"}),(0,a.jsx)("option",{value:"0",children:"No"})]}),(0,a.jsxs)("div",{className:(0,o.Z)("mt-2 text-sm text-gray-700",{hidden:m}),children:["The score for this parameter will be calculated as 'Zero', and you will not need to go through this worksheet for this parameter. ",(0,a.jsx)("br",{}),"Note: Please click submit after selecting 'No'"]})]}),m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:p.map((e,t)=>(0,a.jsxs)("div",{className:"rounded-md border border-gray-200 p-4",children:[(0,a.jsxs)("div",{className:(0,o.Z)("mb-1 text-center font-semibold",{hidden:p.length<2}),children:["Guest lecture ",t+1]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"qualityOfSpeaker",className:"label",children:"Quality of speaker"}),(0,a.jsxs)("select",{name:"qualityOfSpeaker",id:"qualityOfSpeaker",className:"input",onChange:e=>w(t,"state",e.target.value),children:[(0,a.jsx)("option",{value:"a",children:"Industry Expert"}),(0,a.jsx)("option",{value:"b",children:"Top University / Institute"})]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"qualityBenchmark",className:"label",children:t+1===1?g:v}),(0,a.jsxs)("select",{name:"qualityBenchmark",id:"qualityBenchmark",className:"input",onChange:e=>w(t,"benchmark",e.target.value),children:[(0,a.jsx)("option",{value:"1",children:t+1===1?j:N}),(0,a.jsx)("option",{value:"0.5",children:t+2===2?b:y})]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"feedbackReceived",className:"label",children:"Feedback received"}),(0,a.jsx)("input",{type:"number",min:"0",max:"4",id:"feedbackReceived",className:"input",onChange:e=>w(t,"feedback",e.target.value)})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{htmlFor:"noOfAttendees",className:"label",children:["No. of Attendees:"," "]}),(0,a.jsx)("input",{type:"number",id:"noOfAttendees",className:"input",onChange:e=>w(t,"attendees",e.target.value)})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{htmlFor:"totalStudents",className:"label",children:["Total Students:"," "]}),(0,a.jsx)("input",{type:"number",id:"totalStudents",className:"input",onChange:e=>w(t,"totalStudents",e.target.value)})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"mapping",className:"label",children:"Mapping"}),(0,a.jsxs)("select",{name:"mapping",id:"mapping",className:"input",onChange:e=>w(t,"mapping",e.target.value),children:[(0,a.jsx)("option",{value:"1.5",children:"Strongly to PO"}),(0,a.jsx)("option",{value:"1",children:"Strongly to CO"}),(0,a.jsx)("option",{value:"1",children:"Moderately to PO"}),(0,a.jsx)("option",{value:"0.8",children:"Moderately to CO"}),(0,a.jsx)("option",{value:"0",children:"Neither mapping to PO or CO"})]})]})]},t))})}):"",(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)(l.default,{href:"/academic-involvement/form-2",className:"input-button",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-arrow-left",children:[(0,a.jsx)("path",{d:"m12 19-7-7 7-7"}),(0,a.jsx)("path",{d:"M19 12H5"})]}),"Previous"]}),(0,a.jsx)("button",{className:(0,o.Z)("input-button",{"bg-gray-400":d.length>0,"cursor-not-allowed":d.length>0}),onClick:k,disabled:d.length>0,children:s?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"dot-spinner-button",children:[(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"}),(0,a.jsx)("div",{className:"dot-spinner__dot"})]})}):d.length>0?"submitted":"submit"}),(0,a.jsxs)(l.default,{href:"/academic-involvement/form-4",className:"input-button",children:["Next",(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-arrow-right",children:[(0,a.jsx)("path",{d:"M5 12h14"}),(0,a.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]})]})]})]})]})})}},9313:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a=s(3827),n=s(8792);let r=[{AI:["Certifications for courses","Taught Courses","Guest lectures","Industrial lectures","Co-curricular","Mini project","Lab work / Case study","Course / Lab outcome","Innovations","Contributions"]}];function i(e){let{categoryName:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:"sticky top-10 mt-10 flex h-max w-4/12 flex-col gap-3 overflow-y-auto px-3",children:[(0,a.jsx)("div",{children:t}),r[0].AI.map((e,t)=>(0,a.jsxs)(n.default,{href:"/academic-involvement/form-".concat(t+1),className:"w-full px-2 py-1 hover:bg-fuchsia-600 hover:text-white",children:["-",e]},e))]})})}},9508:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(3827),n=s(4090),r=s(1754),i=s(9536),l=s(2388),o=s(8621),c=s(7960),d=s(1640),u=s(7907),m=s(8792);let h=[{name:"Home",href:"/",current:!1},{name:"Guidelines",href:"/guidelines",current:!1},{name:"Scores",href:"/scores",current:!1}];function p(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function x(){(0,u.useRouter)();let e=()=>{localStorage.clear()};return(0,a.jsx)(r.p,{as:"nav",className:"w-screen bg-white",children:t=>{let{open:s}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"relative flex h-auto items-center justify-between py-3",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,a.jsxs)(r.p.Button,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,a.jsx)("span",{className:"absolute -inset-0.5"}),(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),s?(0,a.jsx)(o.Z,{className:"block h-6 w-6 stroke-stone-800","aria-hidden":"true"}):(0,a.jsx)(c.Z,{className:"block h-6 w-6 stroke-stone-800","aria-hidden":"true"})]})}),(0,a.jsxs)("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[(0,a.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,a.jsx)("img",{className:"h-10 w-auto rounded-md bg-stone-800 p-2",src:"".concat("/_next/static/media/logo_vit.308adc30.png"),alt:"Your Company"})}),(0,a.jsx)("div",{className:"hidden sm:ml-6 sm:block",children:(0,a.jsx)("div",{className:"flex space-x-4",children:h.map(e=>(0,a.jsx)(m.default,{href:e.href,className:p(e.current?"bg-stone-800 text-white":"text-stone-800 hover:bg-stone-800 hover:text-white","text-md rounded-md px-3 py-2 font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]}),(0,a.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[(0,a.jsxs)("button",{type:"button",className:"relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800",children:[(0,a.jsx)("span",{className:"absolute -inset-1.5"}),(0,a.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,a.jsx)(d.Z,{className:"h-6 w-6 stroke-stone-800","aria-hidden":"true"})]}),(0,a.jsxs)(i.v,{as:"div",className:"relative ml-3",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(i.v.Button,{className:"relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800",children:[(0,a.jsx)("span",{className:"absolute -inset-1.5"}),(0,a.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-8 w-8 stroke-stone-800",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})})]})}),(0,a.jsx)(l.u,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsxs)(i.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,a.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,a.jsx)(m.default,{href:"/profile",className:p(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Your Profile"})}}),(0,a.jsx)(i.v.Item,{children:t=>{let{active:s}=t;return(0,a.jsx)(m.default,{href:"/login",className:p(s?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),onClick:e,children:"Sign out"})}})]})})]})]})]})}),(0,a.jsx)(r.p.Panel,{className:"sm:hidden",children:(0,a.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:h.map(e=>(0,a.jsx)(r.p.Button,{as:"a",href:e.href,className:p(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}})}},3167:function(e,t,s){"use strict";t.Z=function(){for(var e,t,s=0,a="",n=arguments.length;s<n;s++)(e=arguments[s])&&(t=function e(t){var s,a,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var r=t.length;for(s=0;s<r;s++)t[s]&&(a=e(t[s]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a)}return n}(e))&&(a&&(a+=" "),a+=t);return a}}},function(e){e.O(0,[422,971,69,744],function(){return e(e.s=1984)}),_N_E=e.O()}]);