(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{4976:function(e,t,a){Promise.resolve().then(a.bind(a,5238))},5238:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(3827),r=a(4090),s=a(7907),o=a(3456);function c(){let[e,t]=(0,r.useState)(""),[a,c]=(0,r.useState)(""),[l,i]=(0,r.useState)(""),u=(0,s.useRouter)();async function d(t){t.preventDefault(),o.Z.login({email:e,password:a}).then(e=>{console.log(e),localStorage.setItem("token",e.token),localStorage.setItem("id",e.userData._id),u.push("/")}).catch(e=>{403===e.response.status&&i(e.response.data.info.message)})}return(0,r.useEffect)(()=>{localStorage.getItem("token")&&o.Z.verifyToken({token:localStorage.getItem("token")}).then(()=>{u.push("/")}).catch(e=>{401===e.response.status&&u.push("/login")})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"relative flex max-w-md flex-col rounded-md bg-white p-4 text-black lg:w-80",children:[(0,n.jsx)("div",{className:"mb-2 text-center text-2xl font-bold text-[#1e0e4b]",children:"Welcome back"}),(0,n.jsx)("div",{className:"mb-4 text-center text-sm font-normal text-[#1e0e4b]",children:"Log in to your account"}),(0,n.jsxs)("form",{className:"flex flex-col gap-3",children:[(0,n.jsxs)("div",{className:"relative block",children:[(0,n.jsx)("label",{htmlFor:"email",className:"mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600",children:"Email"}),(0,n.jsx)("input",{type:"text",id:"email",onChange:e=>t(e.target.value),className:"m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"})]}),(0,n.jsxs)("div",{className:"relative block",children:[(0,n.jsx)("label",{htmlFor:"password",className:"mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600",children:"Password"}),(0,n.jsx)("input",{type:"password",id:"password",onChange:e=>c(e.target.value),className:"m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"})]}),(0,n.jsx)("div",{className:"text-center text-sm text-gray-500",children:l||""}),(0,n.jsx)("button",{onClick:d,className:"m-auto w-max rounded bg-fuchsia-600 px-6 py-2 text-sm font-normal text-white hover:bg-fuchsia-500 active:bg-fuchsia-700",children:"Submit"})]}),(0,n.jsxs)("div",{className:"mt-[1.6rem] text-center text-sm",children:["Don’t have an account yet?"," ",(0,n.jsx)("a",{className:"text-sm text-fuchsia-600",href:"/signup",children:"Sign up"})]})]})})}function l(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex min-h-screen flex-col items-center justify-center bg-gray-100",children:(0,n.jsx)(c,{})})})}},3456:function(e,t,a){"use strict";var n=a(7908);let r="https://performance-appraisal-api.adaptable.app";t.Z={signup:e=>n.Z.post("".concat(r,"/signup"),e).then(e=>e.data),login:e=>n.Z.post("".concat(r,"/login"),e).then(e=>e.data),verifyToken:e=>n.Z.post("".concat(r,"/verifyToken"),e).then(e=>e.data),getUserProgress:()=>{let e=localStorage.getItem("token");return n.Z.get("".concat(r,"/userProgress"),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.data)},getCategories:()=>{let e=localStorage.getItem("token");return n.Z.get("".concat(r,"/categories"),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.data)},getUserScores:()=>{let e=localStorage.getItem("token");return n.Z.get("".concat(r,"/userScores"),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.data)},getUserDetails:()=>{let e=localStorage.getItem("token");return n.Z.get("".concat(r,"/userDetails"),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.data)}}},7907:function(e,t,a){"use strict";var n=a(5313);a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=4976)}),_N_E=e.O()}]);