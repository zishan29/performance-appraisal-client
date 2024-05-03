"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{4270:function(e,t,n){let o,a,r,c;n.d(t,{ZP:function(){return e3}});var l,i=n(3787),s=n(4090),u=n.t(s,2),d=n(6976),m=n(5239),f=n(9542),p=n.t(f,2),g=(0,m.Z)({},p),v=g.version,h=g.render;g.unmountComponentAtNode;try{Number((v||"").split(".")[0])>=18&&(l=g.createRoot)}catch(e){}function y(e){var t=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&"object"===(0,d.Z)(t)&&(t.usingClientEntryPoint=e)}var b="__rc_react_root__";let C=s.createContext({});var E=n(7499),x=n(8985),O=n(7689),k=n(1475),j=n(9950),w=n(9233),S=(0,s.createContext)(void 0);Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),Object.assign({},{placeholder:"Select time",rangePlaceholder:["Start time","End time"]});let P="${label} is not a valid ${type}";var M={Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:P,method:P,array:P,object:P,number:P,date:P,boolean:P,integer:P,float:P,regexp:P,email:P,url:P,hex:P},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}}};Object.assign({},M.Modal);let N=[],Z=()=>N.reduce((e,t)=>Object.assign(Object.assign({},e),t),M.Modal),R=(0,s.createContext)(void 0);var $=e=>{let{locale:t={},children:n,_ANT_MARK__:o}=e;s.useEffect(()=>(function(e){if(e){let t=Object.assign({},e);return N.push(t),Z(),()=>{N=N.filter(e=>e!==t),Z()}}Object.assign({},M.Modal)})(t&&t.Modal),[t]);let a=s.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return s.createElement(R.Provider,{value:a},n)},_=n(4264),T=n(6864),D=n(2215),A=n(6336),I=n(2127),F=n(6766);let L="-ant-".concat(Date.now(),"-").concat(Math.random()),V=s.createContext(!1),Y=e=>{let{children:t,disabled:n}=e,o=s.useContext(V);return s.createElement(V.Provider,{value:null!=n?n:o},t)},z=s.createContext(void 0),W=e=>{let{children:t,size:n}=e,o=s.useContext(z);return s.createElement(z.Provider,{value:n||o},t)};var H=n(2536);let{useId:K}=Object.assign({},u);var B=void 0===K?()=>"":K,q=n(8054),U=n(4750);function G(e){let{children:t}=e,[,n]=(0,U.ZP)(),{motion:o}=n,a=s.useRef(!1);return(a.current=a.current||!1===o,a.current)?s.createElement(q.zt,{motion:o},t):t}var X=()=>null,Q=n(8030),J=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};let ee=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];function et(){return o||"ant"}function en(){return a||E.oR}let eo=()=>({getPrefixCls:(e,t)=>t||(e?"".concat(et(),"-").concat(e):et()),getIconPrefixCls:en,getRootPrefixCls:()=>o||et(),getTheme:()=>r,holderRender:c}),ea=e=>{let{children:t,csp:n,autoInsertSpaceInButton:o,alert:a,anchor:r,form:c,locale:l,componentSize:i,direction:u,space:d,virtual:m,dropdownMatchSelectWidth:f,popupMatchSelectWidth:p,popupOverflow:g,legacyLocale:v,parentContext:h,iconPrefixCls:y,theme:b,componentDisabled:C,segmented:P,statistic:N,spin:Z,calendar:R,carousel:D,cascader:A,collapse:I,typography:F,checkbox:L,descriptions:V,divider:z,drawer:K,skeleton:q,steps:U,image:et,layout:en,list:eo,mentions:ea,modal:er,progress:ec,result:el,slider:ei,breadcrumb:es,menu:eu,pagination:ed,input:em,textArea:ef,empty:ep,badge:eg,radio:ev,rate:eh,switch:ey,transfer:eb,avatar:eC,message:eE,tag:ex,table:eO,card:ek,tabs:ej,timeline:ew,timePicker:eS,upload:eP,notification:eM,tree:eN,colorPicker:eZ,datePicker:eR,rangePicker:e$,flex:e_,wave:eT,dropdown:eD,warning:eA,tour:eI,floatButtonGroup:eF}=e,eL=s.useCallback((t,n)=>{let{prefixCls:o}=e;if(n)return n;let a=o||h.getPrefixCls("");return t?"".concat(a,"-").concat(t):a},[h.getPrefixCls,e.prefixCls]),eV=y||h.iconPrefixCls||E.oR,eY=n||h.csp;(0,Q.Z)(eV,eY);let ez=function(e,t,n){var o;(0,w.ln)("ConfigProvider");let a=e||{},r=!1!==a.inherit&&t?t:Object.assign(Object.assign({},_.u_),{hashed:null!==(o=null==t?void 0:t.hashed)&&void 0!==o?o:_.u_.hashed,cssVar:null==t?void 0:t.cssVar}),c=B();return(0,k.Z)(()=>{var o,l;if(!e)return t;let i=Object.assign({},r.components);Object.keys(e.components||{}).forEach(t=>{i[t]=Object.assign(Object.assign({},i[t]),e.components[t])});let s="css-var-".concat(c.replace(/:/g,"")),u=(null!==(o=a.cssVar)&&void 0!==o?o:r.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:null==n?void 0:n.prefixCls},"object"==typeof r.cssVar?r.cssVar:{}),"object"==typeof a.cssVar?a.cssVar:{}),{key:"object"==typeof a.cssVar&&(null===(l=a.cssVar)||void 0===l?void 0:l.key)||s});return Object.assign(Object.assign(Object.assign({},r),a),{token:Object.assign(Object.assign({},r.token),a.token),components:i,cssVar:u})},[a,r],(e,t)=>e.some((e,n)=>{let o=t[n];return!(0,H.Z)(e,o,!0)}))}(b,h.theme,{prefixCls:eL("")}),eW={csp:eY,autoInsertSpaceInButton:o,alert:a,anchor:r,locale:l||v,direction:u,space:d,virtual:m,popupMatchSelectWidth:null!=p?p:f,popupOverflow:g,getPrefixCls:eL,iconPrefixCls:eV,theme:ez,segmented:P,statistic:N,spin:Z,calendar:R,carousel:D,cascader:A,collapse:I,typography:F,checkbox:L,descriptions:V,divider:z,drawer:K,skeleton:q,steps:U,image:et,input:em,textArea:ef,layout:en,list:eo,mentions:ea,modal:er,progress:ec,result:el,slider:ei,breadcrumb:es,menu:eu,pagination:ed,empty:ep,badge:eg,radio:ev,rate:eh,switch:ey,transfer:eb,avatar:eC,message:eE,tag:ex,table:eO,card:ek,tabs:ej,timeline:ew,timePicker:eS,upload:eP,notification:eM,tree:eN,colorPicker:eZ,datePicker:eR,rangePicker:e$,flex:e_,wave:eT,dropdown:eD,warning:eA,tour:eI,floatButtonGroup:eF},eH=Object.assign({},h);Object.keys(eW).forEach(e=>{void 0!==eW[e]&&(eH[e]=eW[e])}),ee.forEach(t=>{let n=e[t];n&&(eH[t]=n)});let eK=(0,k.Z)(()=>eH,eH,(e,t)=>{let n=Object.keys(e),o=Object.keys(t);return n.length!==o.length||n.some(n=>e[n]!==t[n])}),eB=s.useMemo(()=>({prefixCls:eV,csp:eY}),[eV,eY]),eq=s.createElement(s.Fragment,null,s.createElement(X,{dropdownMatchSelectWidth:f}),t),eU=s.useMemo(()=>{var e,t,n,o;return(0,j.T)((null===(e=M.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(n=null===(t=eK.locale)||void 0===t?void 0:t.Form)||void 0===n?void 0:n.defaultValidateMessages)||{},(null===(o=eK.form)||void 0===o?void 0:o.validateMessages)||{},(null==c?void 0:c.validateMessages)||{})},[eK,null==c?void 0:c.validateMessages]);Object.keys(eU).length>0&&(eq=s.createElement(S.Provider,{value:eU},eq)),l&&(eq=s.createElement($,{locale:l,_ANT_MARK__:"internalMark"},eq)),(eV||eY)&&(eq=s.createElement(O.Z.Provider,{value:eB},eq)),i&&(eq=s.createElement(W,{size:i},eq)),eq=s.createElement(G,null,eq);let eG=s.useMemo(()=>{let e=ez||{},{algorithm:t,token:n,components:o,cssVar:a}=e,r=J(e,["algorithm","token","components","cssVar"]),c=t&&(!Array.isArray(t)||t.length>0)?(0,x.jG)(t):_.uH,l={};Object.entries(o||{}).forEach(e=>{let[t,n]=e,o=Object.assign({},n);"algorithm"in o&&(!0===o.algorithm?o.theme=c:(Array.isArray(o.algorithm)||"function"==typeof o.algorithm)&&(o.theme=(0,x.jG)(o.algorithm)),delete o.algorithm),l[t]=o});let i=Object.assign(Object.assign({},T.Z),n);return Object.assign(Object.assign({},r),{theme:c,token:i,components:l,override:Object.assign({override:i},l),cssVar:a})},[ez]);return b&&(eq=s.createElement(_.Mj.Provider,{value:eG},eq)),eK.warning&&(eq=s.createElement(w.G8.Provider,{value:eK.warning},eq)),void 0!==C&&(eq=s.createElement(Y,{disabled:C},eq)),s.createElement(E.E_.Provider,{value:eK},eq)},er=e=>{let t=s.useContext(E.E_),n=s.useContext(R);return s.createElement(ea,Object.assign({parentContext:t,legacyLocale:n},e))};er.ConfigContext=E.E_,er.SizeContext=z,er.config=e=>{let{prefixCls:t,iconPrefixCls:n,theme:l,holderRender:i}=e;void 0!==t&&(o=t),void 0!==n&&(a=n),"holderRender"in e&&(c=i),l&&(Object.keys(l).some(e=>e.endsWith("Color"))?function(e,t){let n=function(e,t){let n={},o=(e,t)=>{let n=e.clone();return(n=(null==t?void 0:t(n))||n).toRgbString()},a=(e,t)=>{let a=new A.C(e),r=(0,D.R_)(a.toRgbString());n["".concat(t,"-color")]=o(a),n["".concat(t,"-color-disabled")]=r[1],n["".concat(t,"-color-hover")]=r[4],n["".concat(t,"-color-active")]=r[6],n["".concat(t,"-color-outline")]=a.clone().setAlpha(.2).toRgbString(),n["".concat(t,"-color-deprecated-bg")]=r[0],n["".concat(t,"-color-deprecated-border")]=r[2]};if(t.primaryColor){a(t.primaryColor,"primary");let e=new A.C(t.primaryColor),r=(0,D.R_)(e.toRgbString());r.forEach((e,t)=>{n["primary-".concat(t+1)]=e}),n["primary-color-deprecated-l-35"]=o(e,e=>e.lighten(35)),n["primary-color-deprecated-l-20"]=o(e,e=>e.lighten(20)),n["primary-color-deprecated-t-20"]=o(e,e=>e.tint(20)),n["primary-color-deprecated-t-50"]=o(e,e=>e.tint(50)),n["primary-color-deprecated-f-12"]=o(e,e=>e.setAlpha(.12*e.getAlpha()));let c=new A.C(r[0]);n["primary-color-active-deprecated-f-30"]=o(c,e=>e.setAlpha(.3*e.getAlpha())),n["primary-color-active-deprecated-d-02"]=o(c,e=>e.darken(2))}t.successColor&&a(t.successColor,"success"),t.warningColor&&a(t.warningColor,"warning"),t.errorColor&&a(t.errorColor,"error"),t.infoColor&&a(t.infoColor,"info");let r=Object.keys(n).map(t=>"--".concat(e,"-").concat(t,": ").concat(n[t],";"));return"\n  :root {\n    ".concat(r.join("\n"),"\n  }\n  ").trim()}(e,t);(0,I.Z)()&&(0,F.hq)(n,"".concat(L,"-dynamic-theme"))}(et(),l):r=l)},er.useConfig=function(){return{componentDisabled:(0,s.useContext)(V),componentSize:(0,s.useContext)(z)}},Object.defineProperty(er,"SizeContext",{get:()=>z});var ec=n(9537),el=n(7136),ei=n(2110),es={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},eu=n(688),ed=s.forwardRef(function(e,t){return s.createElement(eu.Z,(0,ei.Z)({},e,{ref:t,icon:es}))}),em={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},ef=s.forwardRef(function(e,t){return s.createElement(eu.Z,(0,ei.Z)({},e,{ref:t,icon:em}))}),ep=n(9334),eg=n(6480),ev=n.n(eg),eh=n(406),ey=n(6787),eb=n(833),eC={ENTER:13},eE="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function ex(e,t){return 0===e.indexOf(t)}var eO=s.forwardRef(function(e,t){var n=e.prefixCls,o=e.style,a=e.className,r=e.duration,c=void 0===r?4.5:r,l=e.eventKey,i=e.content,u=e.closable,f=e.closeIcon,p=void 0===f?"x":f,g=e.props,v=e.onClick,h=e.onNoticeClose,y=e.times,b=e.hovering,C=s.useState(!1),E=(0,eh.Z)(C,2),x=E[0],O=E[1],k=b||x,j=function(){h(l)};s.useEffect(function(){if(!k&&c>0){var e=setTimeout(function(){j()},1e3*c);return function(){clearTimeout(e)}}},[c,k,y]);var w=s.useMemo(function(){return"object"===(0,d.Z)(u)&&null!==u?u:u?{closeIcon:p}:{}},[u,p]),S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,m.Z)({},n);var o={};return Object.keys(e).forEach(function(n){(t.aria&&("role"===n||ex(n,"aria-"))||t.data&&ex(n,"data-")||t.attr&&eE.includes(n))&&(o[n]=e[n])}),o}(w,!0),P="".concat(n,"-notice");return s.createElement("div",(0,ei.Z)({},g,{ref:t,className:ev()(P,a,(0,eb.Z)({},"".concat(P,"-closable"),u)),style:o,onMouseEnter:function(e){var t;O(!0),null==g||null===(t=g.onMouseEnter)||void 0===t||t.call(g,e)},onMouseLeave:function(e){var t;O(!1),null==g||null===(t=g.onMouseLeave)||void 0===t||t.call(g,e)},onClick:v}),s.createElement("div",{className:"".concat(P,"-content")},i),u&&s.createElement("a",(0,ei.Z)({tabIndex:0,className:"".concat(P,"-close"),onKeyDown:function(e){("Enter"===e.key||"Enter"===e.code||e.keyCode===eC.ENTER)&&j()},"aria-label":"Close"},S,{onClick:function(e){e.preventDefault(),e.stopPropagation(),j()}}),w.closeIcon))}),ek=s.createContext({}),ej=function(e){var t=e.children,n=e.classNames;return s.createElement(ek.Provider,{value:{classNames:n}},t)},ew=function(e){var t,n,o,a={offset:8,threshold:3,gap:16};return e&&"object"===(0,d.Z)(e)&&(a.offset=null!==(t=e.offset)&&void 0!==t?t:8,a.threshold=null!==(n=e.threshold)&&void 0!==n?n:3,a.gap=null!==(o=e.gap)&&void 0!==o?o:16),[!!e,a]},eS=["className","style","classNames","styles"],eP=function(e){var t=e.configList,n=e.placement,o=e.prefixCls,a=e.className,r=e.style,c=e.motion,l=e.onAllNoticeRemoved,u=e.onNoticeClose,d=e.stack,f=(0,s.useContext)(ek).classNames,p=(0,s.useRef)({}),g=(0,s.useState)(null),v=(0,eh.Z)(g,2),h=v[0],y=v[1],b=(0,s.useState)([]),C=(0,eh.Z)(b,2),E=C[0],x=C[1],O=t.map(function(e){return{config:e,key:String(e.key)}}),k=ew(d),j=(0,eh.Z)(k,2),w=j[0],S=j[1],P=S.offset,M=S.threshold,N=S.gap,Z=w&&(E.length>0||O.length<=M),R="function"==typeof c?c(n):c;return(0,s.useEffect)(function(){w&&E.length>1&&x(function(e){return e.filter(function(e){return O.some(function(t){return e===t.key})})})},[E,O,w]),(0,s.useEffect)(function(){var e,t;w&&p.current[null===(e=O[O.length-1])||void 0===e?void 0:e.key]&&y(p.current[null===(t=O[O.length-1])||void 0===t?void 0:t.key])},[O,w]),s.createElement(q.V4,(0,ei.Z)({key:n,className:ev()(o,"".concat(o,"-").concat(n),null==f?void 0:f.list,a,(0,eb.Z)((0,eb.Z)({},"".concat(o,"-stack"),!!w),"".concat(o,"-stack-expanded"),Z)),style:r,keys:O,motionAppear:!0},R,{onAllRemoved:function(){l(n)}}),function(e,t){var a=e.config,r=e.className,c=e.style,l=e.index,d=a.key,g=a.times,v=String(d),y=a.className,b=a.style,C=a.classNames,k=a.styles,j=(0,ey.Z)(a,eS),S=O.findIndex(function(e){return e.key===v}),M={};if(w){var R=O.length-1-(S>-1?S:l-1),$="top"===n||"bottom"===n?"-50%":"0";if(R>0){M.height=Z?null===(_=p.current[v])||void 0===_?void 0:_.offsetHeight:null==h?void 0:h.offsetHeight;for(var _,T,D,A,I=0,F=0;F<R;F++)I+=(null===(A=p.current[O[O.length-1-F].key])||void 0===A?void 0:A.offsetHeight)+N;var L=(Z?I:R*P)*(n.startsWith("top")?1:-1),V=!Z&&null!=h&&h.offsetWidth&&null!==(T=p.current[v])&&void 0!==T&&T.offsetWidth?((null==h?void 0:h.offsetWidth)-2*P*(R<3?R:3))/(null===(D=p.current[v])||void 0===D?void 0:D.offsetWidth):1;M.transform="translate3d(".concat($,", ").concat(L,"px, 0) scaleX(").concat(V,")")}else M.transform="translate3d(".concat($,", 0, 0)")}return s.createElement("div",{ref:t,className:ev()("".concat(o,"-notice-wrapper"),r,null==C?void 0:C.wrapper),style:(0,m.Z)((0,m.Z)((0,m.Z)({},c),M),null==k?void 0:k.wrapper),onMouseEnter:function(){return x(function(e){return e.includes(v)?e:[].concat((0,i.Z)(e),[v])})},onMouseLeave:function(){return x(function(e){return e.filter(function(e){return e!==v})})}},s.createElement(eO,(0,ei.Z)({},j,{ref:function(e){S>-1?p.current[v]=e:delete p.current[v]},prefixCls:o,classNames:C,styles:k,className:ev()(y,null==f?void 0:f.notice),style:b,times:g,key:d,eventKey:d,onNoticeClose:u,hovering:w&&E.length>0})))})},eM=s.forwardRef(function(e,t){var n=e.prefixCls,o=void 0===n?"rc-notification":n,a=e.container,r=e.motion,c=e.maxCount,l=e.className,u=e.style,d=e.onAllRemoved,p=e.stack,g=e.renderNotifications,v=s.useState([]),h=(0,eh.Z)(v,2),y=h[0],b=h[1],C=function(e){var t,n=y.find(function(t){return t.key===e});null==n||null===(t=n.onClose)||void 0===t||t.call(n),b(function(t){return t.filter(function(t){return t.key!==e})})};s.useImperativeHandle(t,function(){return{open:function(e){b(function(t){var n,o=(0,i.Z)(t),a=o.findIndex(function(t){return t.key===e.key}),r=(0,m.Z)({},e);return a>=0?(r.times=((null===(n=t[a])||void 0===n?void 0:n.times)||0)+1,o[a]=r):(r.times=0,o.push(r)),c>0&&o.length>c&&(o=o.slice(-c)),o})},close:function(e){C(e)},destroy:function(){b([])}}});var E=s.useState({}),x=(0,eh.Z)(E,2),O=x[0],k=x[1];s.useEffect(function(){var e={};y.forEach(function(t){var n=t.placement,o=void 0===n?"topRight":n;o&&(e[o]=e[o]||[],e[o].push(t))}),Object.keys(O).forEach(function(t){e[t]=e[t]||[]}),k(e)},[y]);var j=function(e){k(function(t){var n=(0,m.Z)({},t);return(n[e]||[]).length||delete n[e],n})},w=s.useRef(!1);if(s.useEffect(function(){Object.keys(O).length>0?w.current=!0:w.current&&(null==d||d(),w.current=!1)},[O]),!a)return null;var S=Object.keys(O);return(0,f.createPortal)(s.createElement(s.Fragment,null,S.map(function(e){var t=O[e],n=s.createElement(eP,{key:e,configList:t,placement:e,prefixCls:o,className:null==l?void 0:l(e),style:null==u?void 0:u(e),motion:r,onNoticeClose:C,onAllNoticeRemoved:j,stack:p});return g?g(n,{prefixCls:o,key:e}):n})),a)}),eN=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],eZ=function(){return document.body},eR=0,e$=e=>{let[,,,,t]=(0,U.ZP)();return t?"".concat(e,"-css-var"):""},e_=n(1761),eT=n(1303),eD=n(7453),eA=n(316);let eI=e=>{let{componentCls:t,iconCls:n,boxShadow:o,colorText:a,colorSuccess:r,colorError:c,colorWarning:l,colorInfo:i,fontSizeLG:s,motionEaseInOutCirc:u,motionDurationSlow:d,marginXS:m,paddingXS:f,borderRadiusLG:p,zIndexPopup:g,contentPadding:v,contentBg:h}=e,y="".concat(t,"-notice"),b=new x.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:f,transform:"translateY(0)",opacity:1}}),C=new x.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:f,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),E={padding:f,textAlign:"center",["".concat(t,"-custom-content > ").concat(n)]:{verticalAlign:"text-bottom",marginInlineEnd:m,fontSize:s},["".concat(y,"-content")]:{display:"inline-block",padding:v,background:h,borderRadius:p,boxShadow:o,pointerEvents:"all"},["".concat(t,"-success > ").concat(n)]:{color:r},["".concat(t,"-error > ").concat(n)]:{color:c},["".concat(t,"-warning > ").concat(n)]:{color:l},["".concat(t,"-info > ").concat(n,",\n      ").concat(t,"-loading > ").concat(n)]:{color:i}};return[{[t]:Object.assign(Object.assign({},(0,eT.Wf)(e)),{color:a,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:g,["".concat(t,"-move-up")]:{animationFillMode:"forwards"},["\n        ".concat(t,"-move-up-appear,\n        ").concat(t,"-move-up-enter\n      ")]:{animationName:b,animationDuration:d,animationPlayState:"paused",animationTimingFunction:u},["\n        ".concat(t,"-move-up-appear").concat(t,"-move-up-appear-active,\n        ").concat(t,"-move-up-enter").concat(t,"-move-up-enter-active\n      ")]:{animationPlayState:"running"},["".concat(t,"-move-up-leave")]:{animationName:C,animationDuration:d,animationPlayState:"paused",animationTimingFunction:u},["".concat(t,"-move-up-leave").concat(t,"-move-up-leave-active")]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{["".concat(y,"-wrapper")]:Object.assign({},E)}},{["".concat(t,"-notice-pure-panel")]:Object.assign(Object.assign({},E),{padding:0,textAlign:"start"})}]};var eF=(0,eD.I$)("Message",e=>[eI((0,eA.TS)(e,{height:150}))],e=>({zIndexPopup:e.zIndexPopupBase+e_.u6+10,contentBg:e.colorBgElevated,contentPadding:"".concat((e.controlHeightLG-e.fontSize*e.lineHeight)/2,"px ").concat(e.paddingSM,"px")})),eL=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};let eV={info:s.createElement(ef,null),success:s.createElement(ec.Z,null),error:s.createElement(el.Z,null),warning:s.createElement(ed,null),loading:s.createElement(ep.Z,null)},eY=e=>{let{prefixCls:t,type:n,icon:o,children:a}=e;return s.createElement("div",{className:ev()("".concat(t,"-custom-content"),"".concat(t,"-").concat(n))},o||eV[n],s.createElement("span",null,a))};var ez=n(1183);function eW(e){let t;let n=new Promise(n=>{t=e(()=>{n(!0)})}),o=()=>{null==t||t()};return o.then=(e,t)=>n.then(e,t),o.promise=n,o}var eH=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};let eK=e=>{let{children:t,prefixCls:n}=e,o=e$(n),[a,r,c]=eF(n,o);return a(s.createElement(ej,{classNames:{list:ev()(r,c,o)}},t))},eB=(e,t)=>{let{prefixCls:n,key:o}=t;return s.createElement(eK,{prefixCls:n,key:o},e)},eq=s.forwardRef((e,t)=>{let{top:n,prefixCls:o,getContainer:a,maxCount:r,duration:c=3,rtl:l,transitionName:u,onAllRemoved:d}=e,{getPrefixCls:m,getPopupContainer:f,message:p,direction:g}=s.useContext(E.E_),v=o||m("message"),h=s.createElement("span",{className:"".concat(v,"-close-x")},s.createElement(ez.Z,{className:"".concat(v,"-close-icon")})),[y,b]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getContainer,n=void 0===t?eZ:t,o=e.motion,a=e.prefixCls,r=e.maxCount,c=e.className,l=e.style,u=e.onAllRemoved,d=e.stack,m=e.renderNotifications,f=(0,ey.Z)(e,eN),p=s.useState(),g=(0,eh.Z)(p,2),v=g[0],h=g[1],y=s.useRef(),b=s.createElement(eM,{container:v,ref:y,prefixCls:a,motion:o,maxCount:r,className:c,style:l,onAllRemoved:u,stack:d,renderNotifications:m}),C=s.useState([]),E=(0,eh.Z)(C,2),x=E[0],O=E[1],k=s.useMemo(function(){return{open:function(e){var t=function(){for(var e={},t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.forEach(function(t){t&&Object.keys(t).forEach(function(n){var o=t[n];void 0!==o&&(e[n]=o)})}),e}(f,e);(null===t.key||void 0===t.key)&&(t.key="rc-notification-".concat(eR),eR+=1),O(function(e){return[].concat((0,i.Z)(e),[{type:"open",config:t}])})},close:function(e){O(function(t){return[].concat((0,i.Z)(t),[{type:"close",key:e}])})},destroy:function(){O(function(e){return[].concat((0,i.Z)(e),[{type:"destroy"}])})}}},[]);return s.useEffect(function(){h(n())}),s.useEffect(function(){y.current&&x.length&&(x.forEach(function(e){switch(e.type){case"open":y.current.open(e.config);break;case"close":y.current.close(e.key);break;case"destroy":y.current.destroy()}}),O(function(e){return e.filter(function(e){return!x.includes(e)})}))},[x]),[k,b]}({prefixCls:v,style:()=>({left:"50%",transform:"translateX(-50%)",top:null!=n?n:8}),className:()=>ev()({["".concat(v,"-rtl")]:null!=l?l:"rtl"===g}),motion:()=>({motionName:null!=u?u:"".concat(v,"-move-up")}),closable:!1,closeIcon:h,duration:c,getContainer:()=>(null==a?void 0:a())||(null==f?void 0:f())||document.body,maxCount:r,onAllRemoved:d,renderNotifications:eB});return s.useImperativeHandle(t,()=>Object.assign(Object.assign({},y),{prefixCls:v,message:p})),b}),eU=0;function eG(e){let t=s.useRef(null);return(0,w.ln)("Message"),[s.useMemo(()=>{let e=e=>{var n;null===(n=t.current)||void 0===n||n.close(e)},n=n=>{if(!t.current){let e=()=>{};return e.then=()=>{},e}let{open:o,prefixCls:a,message:r}=t.current,c="".concat(a,"-notice"),{content:l,icon:i,type:u,key:d,className:m,style:f,onClose:p}=n,g=eH(n,["content","icon","type","key","className","style","onClose"]),v=d;return null==v&&(eU+=1,v="antd-message-".concat(eU)),eW(t=>(o(Object.assign(Object.assign({},g),{key:v,content:s.createElement(eY,{prefixCls:a,type:u,icon:i},l),placement:"top",className:ev()(u&&"".concat(c,"-").concat(u),m,null==r?void 0:r.className),style:Object.assign(Object.assign({},null==r?void 0:r.style),f),onClose:()=>{null==p||p(),t()}})),()=>{e(v)}))},o={open:n,destroy:n=>{var o;void 0!==n?e(n):null===(o=t.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach(e=>{o[e]=(t,o,a)=>{let r,c;return"function"==typeof o?c=o:(r=o,c=a),n(Object.assign(Object.assign({onClose:c,duration:r},t&&"object"==typeof t&&"content"in t?t:{content:t}),{type:e}))}}),o},[]),s.createElement(eq,Object.assign({key:"message-holder"},e,{ref:t}))]}let eX=null,eQ=e=>e(),eJ=[],e0={};function e4(){let{getContainer:e,duration:t,rtl:n,maxCount:o,top:a}=e0,r=(null==e?void 0:e())||document.body;return{getContainer:()=>r,duration:t,rtl:n,maxCount:o,top:a}}let e1=s.forwardRef((e,t)=>{let{messageConfig:n,sync:o}=e,{getPrefixCls:a}=(0,s.useContext)(E.E_),r=e0.prefixCls||a("message"),c=(0,s.useContext)(C),[l,i]=eG(Object.assign(Object.assign(Object.assign({},n),{prefixCls:r}),c.message));return s.useImperativeHandle(t,()=>{let e=Object.assign({},l);return Object.keys(e).forEach(t=>{e[t]=function(){return o(),l[t].apply(l,arguments)}}),{instance:e,sync:o}}),i}),e6=s.forwardRef((e,t)=>{let[n,o]=s.useState(e4),a=()=>{o(e4)};s.useEffect(a,[]);let r=eo(),c=r.getRootPrefixCls(),l=r.getIconPrefixCls(),i=r.getTheme(),u=s.createElement(e1,{ref:t,sync:a,messageConfig:n});return s.createElement(er,{prefixCls:c,iconPrefixCls:l,theme:i},r.holderRender?r.holderRender(u):u)});function e8(){if(!eX){let e=document.createDocumentFragment(),t={fragment:e};eX=t,eQ(()=>{!function(e,t){if(l){var n;y(!0),n=t[b]||l(t),y(!1),n.render(e),t[b]=n;return}h(e,t)}(s.createElement(e6,{ref:e=>{let{instance:n,sync:o}=e||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=o,e8())})}}),e)});return}eX.instance&&(eJ.forEach(e=>{let{type:t,skipped:n}=e;if(!n)switch(t){case"open":eQ(()=>{let t=eX.instance.open(Object.assign(Object.assign({},e0),e.config));null==t||t.then(e.resolve),e.setCloseFn(t)});break;case"destroy":eQ(()=>{null==eX||eX.instance.destroy(e.key)});break;default:eQ(()=>{var n;let o=(n=eX.instance)[t].apply(n,(0,i.Z)(e.args));null==o||o.then(e.resolve),e.setCloseFn(o)})}}),eJ=[])}let e2={open:function(e){let t=eW(t=>{let n;let o={type:"open",config:e,resolve:t,setCloseFn:e=>{n=e}};return eJ.push(o),()=>{n?eQ(()=>{n()}):o.skipped=!0}});return e8(),t},destroy:e=>{eJ.push({type:"destroy",key:e}),e8()},config:function(e){e0=Object.assign(Object.assign({},e0),e),eQ(()=>{var e;null===(e=null==eX?void 0:eX.sync)||void 0===e||e.call(eX)})},useMessage:function(e){return eG(e)},_InternalPanelDoNotUseOrYouWillBeFired:e=>{let{prefixCls:t,className:n,type:o,icon:a,content:r}=e,c=eL(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:l}=s.useContext(E.E_),i=t||l("message"),u=e$(i),[d,m,f]=eF(i,u);return d(s.createElement(eO,Object.assign({},c,{prefixCls:i,className:ev()(n,m,"".concat(i,"-notice-pure-panel"),f,u),eventKey:"pure",duration:null,content:s.createElement(eY,{prefixCls:i,type:o,icon:a},r)})))}};["success","info","warning","error","loading"].forEach(e=>{e2[e]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(e,t){eo();let n=eW(n=>{let o;let a={type:e,args:t,resolve:n,setCloseFn:e=>{o=e}};return eJ.push(a),()=>{o?eQ(()=>{o()}):a.skipped=!0}});return e8(),n}(e,n)}});var e3=e2}}]);