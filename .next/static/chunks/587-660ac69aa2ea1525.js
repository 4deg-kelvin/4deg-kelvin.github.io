"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{7188:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1462).Z)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]])},8874:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1462).Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},6303:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1462).Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},2608:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(1462).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},3009:function(e,t,n){n.d(t,{VY:function(){return tc},fC:function(){return ts},xz:function(){return tu}});var r,o,i=n(7294);function l(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var a=n(5893);function s(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),l=n.length;function s(t){let{scope:n,children:r,...s}=t,u=n?.[e][l]||o,c=i.useMemo(()=>s,Object.values(s));return(0,a.jsx)(u.Provider,{value:c,children:r})}return n=[...n,r],s.displayName=t+"Provider",[s,function(n,a){let s=a?.[e][l]||o,u=i.useContext(s);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}function u(e){let t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...e)=>t.current?.(...e),[])}var c=n(8771);let f=["top","right","bottom","left"],d=Math.min,p=Math.max,h=Math.round,m=Math.floor,g=e=>({x:e,y:e}),v={left:"right",right:"left",bottom:"top",top:"bottom"},y={start:"end",end:"start"};function w(e,t){return"function"==typeof e?e(t):e}function x(e){return e.split("-")[0]}function b(e){return e.split("-")[1]}function E(e){return"x"===e?"y":"x"}function R(e){return"y"===e?"height":"width"}function C(e){return["top","bottom"].includes(x(e))?"y":"x"}function P(e){return e.replace(/start|end/g,e=>y[e])}function O(e){return e.replace(/left|right|bottom|top/g,e=>v[e])}function T(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function L(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function S(e,t,n){let r,{reference:o,floating:i}=e,l=C(t),a=E(C(t)),s=R(a),u=x(t),c="y"===l,f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;switch(u){case"top":r={x:f,y:o.y-i.height};break;case"bottom":r={x:f,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(b(t)){case"start":r[a]-=p*(n&&c?-1:1);break;case"end":r[a]+=p*(n&&c?-1:1)}return r}let A=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:f}=S(u,r,s),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:i,fn:m}=a[n],{x:g,y:v,data:y,reset:w}=await m({x:c,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});c=null!=g?g:c,f=null!=v?v:f,p={...p,[i]:{...p[i],...y}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:c,y:f}=S(u,d,s)),n=-1)}return{x:c,y:f,placement:d,strategy:o,middlewareData:p}};async function N(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=w(t,e),h=T(p),m=a[d?"floating"===f?"reference":"floating":f],g=L(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===f?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,y=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),x=await (null==i.isElement?void 0:i.isElement(y))&&await (null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},b=L(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:y,strategy:s}):v);return{top:(g.top-b.top+h.top)/x.y,bottom:(b.bottom-g.bottom+h.bottom)/x.y,left:(g.left-b.left+h.left)/x.x,right:(b.right-g.right+h.right)/x.x}}function k(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function D(e){return f.some(t=>e[t]>=0)}async function M(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),l=x(n),a=b(n),s="y"===C(n),u=["left","top"].includes(l)?-1:1,c=i&&s?-1:1,f=w(t,e),{mainAxis:d,crossAxis:p,alignmentAxis:h}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&"number"==typeof h&&(p="end"===a?-1*h:h),s?{x:p*c,y:d*u}:{x:d*u,y:p*c}}function j(){return"undefined"!=typeof window}function H(e){return _(e)?(e.nodeName||"").toLowerCase():"#document"}function W(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function F(e){var t;return null==(t=(_(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function _(e){return!!j()&&(e instanceof Node||e instanceof W(e).Node)}function z(e){return!!j()&&(e instanceof Element||e instanceof W(e).Element)}function $(e){return!!j()&&(e instanceof HTMLElement||e instanceof W(e).HTMLElement)}function B(e){return!!j()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof W(e).ShadowRoot)}function I(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function U(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function V(e){let t=Z(),n=z(e)?q(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function Z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function Y(e){return["html","body","#document"].includes(H(e))}function q(e){return W(e).getComputedStyle(e)}function X(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function G(e){if("html"===H(e))return e;let t=e.assignedSlot||e.parentNode||B(e)&&e.host||F(e);return B(t)?t.host:t}function K(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=G(t);return Y(n)?t.ownerDocument?t.ownerDocument.body:t.body:$(n)&&I(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=W(o);if(i){let e=J(l);return t.concat(l,l.visualViewport||[],I(o)?o:[],e&&n?K(e):[])}return t.concat(o,K(o,[],n))}function J(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Q(e){let t=q(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=$(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=h(n)!==i||h(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function ee(e){return z(e)?e:e.contextElement}function et(e){let t=ee(e);if(!$(t))return g(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Q(t),l=(i?h(n.width):n.width)/r,a=(i?h(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let en=g(0);function er(e){let t=W(e);return Z()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:en}function eo(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=ee(e),a=g(1);t&&(r?z(r)&&(a=et(r)):a=et(e));let s=(void 0===(o=n)&&(o=!1),r&&(!o||r===W(l))&&o)?er(l):g(0),u=(i.left+s.x)/a.x,c=(i.top+s.y)/a.y,f=i.width/a.x,d=i.height/a.y;if(l){let e=W(l),t=r&&z(r)?W(r):r,n=e,o=J(n);for(;o&&r&&t!==n;){let e=et(o),t=o.getBoundingClientRect(),r=q(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,c*=e.y,f*=e.x,d*=e.y,u+=i,c+=l,o=J(n=W(o))}}return L({width:f,height:d,x:u,y:c})}function ei(e,t){let n=X(e).scrollLeft;return t?t.left+n:eo(F(e)).left+n}function el(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=W(e),r=F(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;let e=Z();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}(e,n);else if("document"===t)r=function(e){let t=F(e),n=X(e),r=e.ownerDocument.body,o=p(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=p(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+ei(e),a=-n.scrollTop;return"rtl"===q(r).direction&&(l+=p(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}(F(e));else if(z(t))r=function(e,t){let n=eo(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=$(e)?et(e):g(1),l=e.clientWidth*i.x;return{width:l,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{let n=er(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return L(r)}function ea(e){return"static"===q(e).position}function es(e,t){if(!$(e)||"fixed"===q(e).position)return null;if(t)return t(e);let n=e.offsetParent;return F(e)===n&&(n=n.ownerDocument.body),n}function eu(e,t){let n=W(e);if(U(e))return n;if(!$(e)){let t=G(e);for(;t&&!Y(t);){if(z(t)&&!ea(t))return t;t=G(t)}return n}let r=es(e,t);for(;r&&["table","td","th"].includes(H(r))&&ea(r);)r=es(r,t);return r&&Y(r)&&ea(r)&&!V(r)?n:r||function(e){let t=G(e);for(;$(t)&&!Y(t);){if(V(t))return t;if(U(t))break;t=G(t)}return null}(e)||n}let ec=async function(e){let t=this.getOffsetParent||eu,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=$(t),o=F(t),i="fixed"===n,l=eo(e,!0,i,t),a={scrollLeft:0,scrollTop:0},s=g(0);if(r||!r&&!i){if(("body"!==H(t)||I(o))&&(a=X(t)),r){let e=eo(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=ei(o))}let u=0,c=0;if(o&&!r&&!i){let e=o.getBoundingClientRect();c=e.top+a.scrollTop,u=e.left+a.scrollLeft-ei(o,e)}return{x:l.left+a.scrollLeft-s.x-u,y:l.top+a.scrollTop-s.y-c,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ef={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i="fixed"===o,l=F(r),a=!!t&&U(t.floating);if(r===l||a&&i)return n;let s={scrollLeft:0,scrollTop:0},u=g(1),c=g(0),f=$(r);if((f||!f&&!i)&&(("body"!==H(r)||I(l))&&(s=X(r)),$(r))){let e=eo(r);u=et(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-s.scrollLeft*u.x+c.x,y:n.y*u.y-s.scrollTop*u.y+c.y}},getDocumentElement:F,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i=[..."clippingAncestors"===n?U(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=K(e,[],!1).filter(e=>z(e)&&"body"!==H(e)),o=null,i="fixed"===q(e).position,l=i?G(e):e;for(;z(l)&&!Y(l);){let t=q(l),n=V(l);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||I(l)&&!n&&function e(t,n){let r=G(t);return!(r===n||!z(r)||Y(r))&&("fixed"===q(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):o=t,l=G(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],l=i[0],a=i.reduce((e,n)=>{let r=el(t,n,o);return e.top=p(r.top,e.top),e.right=d(r.right,e.right),e.bottom=d(r.bottom,e.bottom),e.left=p(r.left,e.left),e},el(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:eu,getElementRects:ec,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=Q(e);return{width:t,height:n}},getScale:et,isElement:z,isRTL:function(e){return"rtl"===q(e).direction}},ed=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:u,padding:c=0}=w(e,t)||{};if(null==u)return{};let f=T(c),h={x:n,y:r},m=E(C(o)),g=R(m),v=await l.getDimensions(u),y="y"===m,x=y?"clientHeight":"clientWidth",P=i.reference[g]+i.reference[m]-h[m]-i.floating[g],O=h[m]-i.reference[m],L=await (null==l.getOffsetParent?void 0:l.getOffsetParent(u)),S=L?L[x]:0;S&&await (null==l.isElement?void 0:l.isElement(L))||(S=a.floating[x]||i.floating[g]);let A=S/2-v[g]/2-1,N=d(f[y?"top":"left"],A),k=d(f[y?"bottom":"right"],A),D=S-v[g]-k,M=S/2-v[g]/2+(P/2-O/2),j=p(N,d(M,D)),H=!s.arrow&&null!=b(o)&&M!==j&&i.reference[g]/2-(M<N?N:k)-v[g]/2<0,W=H?M<N?M-N:M-D:0;return{[m]:h[m]+W,data:{[m]:j,centerOffset:M-j-W,...H&&{alignmentOffset:W}},reset:H}}}),ep=(e,t,n)=>{let r=new Map,o={platform:ef,...n},i={...o.platform,_c:r};return A(e,t,{...o,platform:i})};var eh=n(3935),em="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function eg(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!eg(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!eg(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ev(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ey(e,t){let n=ev(e);return Math.round(t*n)/n}function ew(e){let t=i.useRef(e);return em(()=>{t.current=e}),t}let ex=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ed({element:n.current,padding:r}).fn(t):{}:n?ed({element:n,padding:r}).fn(t):{}}}),eb=(e,t)=>{var n;return{...(void 0===(n=e)&&(n=0),{name:"offset",options:n,async fn(e){var t,r;let{x:o,y:i,placement:l,middlewareData:a}=e,s=await M(e,n);return l===(null==(t=a.offset)?void 0:t.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:l}}}}),options:[e,t]}},eE=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"shift",options:n,async fn(e){let{x:t,y:r,placement:o}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=w(n,e),u={x:t,y:r},c=await N(e,s),f=C(x(o)),h=E(f),m=u[h],g=u[f];if(i){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=m+c[e],r=m-c[t];m=p(n,d(m,r))}if(l){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",n=g+c[e],r=g-c[t];g=p(n,d(g,r))}let v=a.fn({...e,[h]:m,[f]:g});return{...v,data:{x:v.x-t,y:v.y-r,enabled:{[h]:i,[f]:l}}}}}),options:[e,t]}},eR=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{options:n,fn(e){let{x:t,y:r,placement:o,rects:i,middlewareData:l}=e,{offset:a=0,mainAxis:s=!0,crossAxis:u=!0}=w(n,e),c={x:t,y:r},f=C(o),d=E(f),p=c[d],h=c[f],m=w(a,e),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(s){let e="y"===d?"height":"width",t=i.reference[d]-i.floating[e]+g.mainAxis,n=i.reference[d]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(u){var v,y;let e="y"===d?"width":"height",t=["top","left"].includes(x(o)),n=i.reference[f]-i.floating[e]+(t&&(null==(v=l.offset)?void 0:v[f])||0)+(t?0:g.crossAxis),r=i.reference[f]+i.reference[e]+(t?0:(null==(y=l.offset)?void 0:y[f])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[d]:p,[f]:h}}}),options:[e,t]}},eC=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"flip",options:n,async fn(e){var t,r,o,i,l;let{placement:a,middlewareData:s,rects:u,initialPlacement:c,platform:f,elements:d}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...T}=w(n,e);if(null!=(t=s.arrow)&&t.alignmentOffset)return{};let L=x(a),S=C(c),A=x(c)===c,k=await (null==f.isRTL?void 0:f.isRTL(d.floating)),D=m||(A||!y?[O(c)]:function(e){let t=O(e);return[P(e),t,P(t)]}(c)),M="none"!==v;!m&&M&&D.push(...function(e,t,n,r){let o=b(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(x(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(P)))),i}(c,y,v,k));let j=[c,...D],H=await N(e,T),W=[],F=(null==(r=s.flip)?void 0:r.overflows)||[];if(p&&W.push(H[L]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=b(e),o=E(C(e)),i=R(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=O(l)),[l,O(l)]}(a,u,k);W.push(H[e[0]],H[e[1]])}if(F=[...F,{placement:a,overflows:W}],!W.every(e=>e<=0)){let e=((null==(o=s.flip)?void 0:o.index)||0)+1,t=j[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(i=F.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(g){case"bestFit":{let e=null==(l=F.filter(e=>{if(M){let t=C(e.placement);return t===S||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[e,t]}},eP=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"size",options:n,async fn(e){var t,r;let o,i;let{placement:l,rects:a,platform:s,elements:u}=e,{apply:c=()=>{},...f}=w(n,e),h=await N(e,f),m=x(l),g=b(l),v="y"===C(l),{width:y,height:E}=a.floating;"top"===m||"bottom"===m?(o=m,i=g===(await (null==s.isRTL?void 0:s.isRTL(u.floating))?"start":"end")?"left":"right"):(i=m,o="end"===g?"top":"bottom");let R=E-h.top-h.bottom,P=y-h.left-h.right,O=d(E-h[o],R),T=d(y-h[i],P),L=!e.middlewareData.shift,S=O,A=T;if(null!=(t=e.middlewareData.shift)&&t.enabled.x&&(A=P),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(S=R),L&&!g){let e=p(h.left,0),t=p(h.right,0),n=p(h.top,0),r=p(h.bottom,0);v?A=y-2*(0!==e||0!==t?e+t:p(h.left,h.right)):S=E-2*(0!==n||0!==r?n+r:p(h.top,h.bottom))}await c({...e,availableWidth:A,availableHeight:S});let k=await s.getDimensions(u.floating);return y!==k.width||E!==k.height?{reset:{rects:!0}}:{}}}),options:[e,t]}},eO=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"hide",options:n,async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...o}=w(n,e);switch(r){case"referenceHidden":{let n=k(await N(e,{...o,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:D(n)}}}case"escaped":{let n=k(await N(e,{...o,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:D(n)}}}default:return{}}}}),options:[e,t]}},eT=(e,t)=>({...ex(e),options:[e,t]});var eL=n(8426),eS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=i.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?eL.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),eA=i.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return(0,a.jsx)(eS.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,a.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eA.displayName="Arrow";var eN=globalThis?.document?i.useLayoutEffect:()=>{},ek="Popper",[eD,eM]=s(ek),[ej,eH]=eD(ek),eW=e=>{let{__scopePopper:t,children:n}=e,[r,o]=i.useState(null);return(0,a.jsx)(ej,{scope:t,anchor:r,onAnchorChange:o,children:n})};eW.displayName=ek;var eF="PopperAnchor",e_=i.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,l=eH(eF,n),s=i.useRef(null),u=(0,c.e)(t,s);return i.useEffect(()=>{l.onAnchorChange(r?.current||s.current)}),r?null:(0,a.jsx)(eS.div,{...o,ref:u})});e_.displayName=eF;var ez="PopperContent",[e$,eB]=eD(ez),eI=i.forwardRef((e,t)=>{let{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:l="center",alignOffset:s=0,arrowPadding:f=0,avoidCollisions:h=!0,collisionBoundary:g=[],collisionPadding:v=0,sticky:y="partial",hideWhenDetached:w=!1,updatePositionStrategy:x="optimized",onPlaced:b,...E}=e,R=eH(ez,n),[C,P]=i.useState(null),O=(0,c.e)(t,e=>P(e)),[T,L]=i.useState(null),S=function(e){let[t,n]=i.useState(void 0);return eN(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(T),A=S?.width??0,N=S?.height??0,k="number"==typeof v?v:{top:0,right:0,bottom:0,left:0,...v},D=Array.isArray(g)?g:[g],M=D.length>0,j={padding:k,boundary:D.filter(eY),altBoundary:M},{refs:H,floatingStyles:W,placement:_,isPositioned:z,middlewareData:$}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:l,floating:a}={},transform:s=!0,whileElementsMounted:u,open:c}=e,[f,d]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);eg(p,r)||h(r);let[m,g]=i.useState(null),[v,y]=i.useState(null),w=i.useCallback(e=>{e!==R.current&&(R.current=e,g(e))},[]),x=i.useCallback(e=>{e!==C.current&&(C.current=e,y(e))},[]),b=l||m,E=a||v,R=i.useRef(null),C=i.useRef(null),P=i.useRef(f),O=null!=u,T=ew(u),L=ew(o),S=ew(c),A=i.useCallback(()=>{if(!R.current||!C.current)return;let e={placement:t,strategy:n,middleware:p};L.current&&(e.platform=L.current),ep(R.current,C.current,e).then(e=>{let t={...e,isPositioned:!1!==S.current};N.current&&!eg(P.current,t)&&(P.current=t,eh.flushSync(()=>{d(t)}))})},[p,t,n,L,S]);em(()=>{!1===c&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let N=i.useRef(!1);em(()=>(N.current=!0,()=>{N.current=!1}),[]),em(()=>{if(b&&(R.current=b),E&&(C.current=E),b&&E){if(T.current)return T.current(b,E,A);A()}},[b,E,A,T,O]);let k=i.useMemo(()=>({reference:R,floating:C,setReference:w,setFloating:x}),[w,x]),D=i.useMemo(()=>({reference:b,floating:E}),[b,E]),M=i.useMemo(()=>{let e={position:n,left:0,top:0};if(!D.floating)return e;let t=ey(D.floating,f.x),r=ey(D.floating,f.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...ev(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,s,D.floating,f.x,f.y]);return i.useMemo(()=>({...f,update:A,refs:k,elements:D,floatingStyles:M}),[f,A,k,D,M])}({strategy:"fixed",placement:r+("center"!==l?"-"+l:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,c=ee(e),f=i||l?[...c?K(c):[],...K(t)]:[];f.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)});let h=c&&s?function(e,t){let n,r=null,o=F(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function l(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),i();let{left:u,top:c,width:f,height:h}=e.getBoundingClientRect();if(a||t(),!f||!h)return;let g=m(c),v=m(o.clientWidth-(u+f)),y={rootMargin:-g+"px "+-v+"px "+-m(o.clientHeight-(c+h))+"px "+-m(u)+"px",threshold:p(0,d(1,s))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==s){if(!w)return l();t?l(!1,t):n=setTimeout(()=>{l(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...y,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),i}(c,n):null,g=-1,v=null;a&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===c&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),n()}),c&&!u&&v.observe(c),v.observe(t));let y=u?eo(e):null;return u&&function t(){let r=eo(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;f.forEach(e=>{i&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)}),null==h||h(),null==(e=v)||e.disconnect(),v=null,u&&cancelAnimationFrame(o)}})(...e,{animationFrame:"always"===x}),elements:{reference:R.anchor},middleware:[eb({mainAxis:o+N,alignmentAxis:s}),h&&eE({mainAxis:!0,crossAxis:!1,limiter:"partial"===y?eR():void 0,...j}),h&&eC({...j}),eP({...j,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),T&&eT({element:T,padding:f}),eq({arrowWidth:A,arrowHeight:N}),w&&eO({strategy:"referenceHidden",...j})]}),[B,I]=eX(_),U=u(b);eN(()=>{z&&U?.()},[z,U]);let V=$.arrow?.x,Z=$.arrow?.y,Y=$.arrow?.centerOffset!==0,[q,X]=i.useState();return eN(()=>{C&&X(window.getComputedStyle(C).zIndex)},[C]),(0,a.jsx)("div",{ref:H.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:z?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:q,"--radix-popper-transform-origin":[$.transformOrigin?.x,$.transformOrigin?.y].join(" "),...$.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,a.jsx)(e$,{scope:n,placedSide:B,onArrowChange:L,arrowX:V,arrowY:Z,shouldHideArrow:Y,children:(0,a.jsx)(eS.div,{"data-side":B,"data-align":I,...E,ref:O,style:{...E.style,animation:z?void 0:"none"}})})})});eI.displayName=ez;var eU="PopperArrow",eV={top:"bottom",right:"left",bottom:"top",left:"right"},eZ=i.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=eB(eU,n),i=eV[o.placedSide];return(0,a.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,a.jsx)(eA,{...r,ref:t,style:{...r.style,display:"block"}})})});function eY(e){return null!==e}eZ.displayName=eU;var eq=e=>({name:"transformOrigin",options:e,fn(t){let{placement:n,rects:r,middlewareData:o}=t,i=o.arrow?.centerOffset!==0,l=i?0:e.arrowWidth,a=i?0:e.arrowHeight,[s,u]=eX(n),c={start:"0%",center:"50%",end:"100%"}[u],f=(o.arrow?.x??0)+l/2,d=(o.arrow?.y??0)+a/2,p="",h="";return"bottom"===s?(p=i?c:`${f}px`,h=`${-a}px`):"top"===s?(p=i?c:`${f}px`,h=`${r.floating.height+a}px`):"right"===s?(p=`${-a}px`,h=i?c:`${d}px`):"left"===s&&(p=`${r.floating.width+a}px`,h=i?c:`${d}px`),{data:{x:p,y:h}}}});function eX(e){let[t,n="center"]=e.split("-");return[t,n]}i.forwardRef((e,t)=>{let{container:n,...r}=e,[o,l]=i.useState(!1);eN(()=>l(!0),[]);let s=n||o&&globalThis?.document?.body;return s?eh.createPortal((0,a.jsx)(eS.div,{...r,ref:t}),s):null}).displayName="Portal";var eG=e=>{let t,n;let{present:r,children:o}=e,l=function(e){var t,n;let[r,o]=i.useState(),l=i.useRef({}),a=i.useRef(e),s=i.useRef("none"),[u,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>n[e][t]??e,t));return i.useEffect(()=>{let e=eK(l.current);s.current="mounted"===u?e:"none"},[u]),eN(()=>{let t=l.current,n=a.current;if(n!==e){let r=s.current,o=eK(t);e?c("MOUNT"):"none"===o||t?.display==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),a.current=e}},[e,c]),eN(()=>{if(r){let e=e=>{let t=eK(l.current).includes(e.animationName);e.target===r&&t&&eh.flushSync(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(s.current=eK(l.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:i.useCallback(e=>{e&&(l.current=getComputedStyle(e)),o(e)},[])}}(r),a="function"==typeof o?o({present:l.isPresent}):i.Children.only(o),s=(0,c.e)(l.ref,(t=Object.getOwnPropertyDescriptor(a.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?a.ref:(t=Object.getOwnPropertyDescriptor(a,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?a.props.ref:a.props.ref||a.ref);return"function"==typeof o||l.isPresent?i.cloneElement(a,{ref:s}):null};function eK(e){return e?.animationName||"none"}eG.displayName="Presence";var eJ="dismissableLayer.update",eQ=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),e0=i.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:f,onInteractOutside:d,onDismiss:p,...h}=e,m=i.useContext(eQ),[g,v]=i.useState(null),y=g?.ownerDocument??globalThis?.document,[,w]=i.useState({}),x=(0,c.e)(t,e=>v(e)),b=Array.from(m.layers),[E]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),R=b.indexOf(E),C=g?b.indexOf(g):-1,P=m.layersWithOutsidePointerEventsDisabled.size>0,O=C>=R,T=function(e,t=globalThis?.document){let n=u(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){e2("dismissableLayer.pointerDownOutside",n,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!O||n||(s?.(e),d?.(e),e.defaultPrevented||p?.())},y),L=function(e,t=globalThis?.document){let n=u(e),r=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!r.current&&e2("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(f?.(e),d?.(e),e.defaultPrevented||p?.())},y);return!function(e,t=globalThis?.document){let n=u(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{C!==m.layers.size-1||(o?.(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},y),i.useEffect(()=>{if(g)return n&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(r=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(g)),m.layers.add(g),e1(),()=>{n&&1===m.layersWithOutsidePointerEventsDisabled.size&&(y.body.style.pointerEvents=r)}},[g,y,n,m]),i.useEffect(()=>()=>{g&&(m.layers.delete(g),m.layersWithOutsidePointerEventsDisabled.delete(g),e1())},[g,m]),i.useEffect(()=>{let e=()=>w({});return document.addEventListener(eJ,e),()=>document.removeEventListener(eJ,e)},[]),(0,a.jsx)(eS.div,{...h,ref:x,style:{pointerEvents:P?O?"auto":"none":void 0,...e.style},onFocusCapture:l(e.onFocusCapture,L.onFocusCapture),onBlurCapture:l(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:l(e.onPointerDownCapture,T.onPointerDownCapture)})});function e1(){let e=new CustomEvent(eJ);document.dispatchEvent(e)}function e2(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&eh.flushSync(()=>o.dispatchEvent(i)):o.dispatchEvent(i)}e0.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(eQ),r=i.useRef(null),o=(0,c.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(eS.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var e5="HoverCard",[e3,e4]=s(e5,[eM]),e6=eM(),[e8,e7]=e3(e5),e9=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:o,onOpenChange:l,openDelay:s=700,closeDelay:c=300}=e,f=e6(t),d=i.useRef(0),p=i.useRef(0),h=i.useRef(!1),m=i.useRef(!1),[g=!1,v]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),l=u(t);return i.useEffect(()=>{o.current!==r&&(l(r),o.current=r)},[r,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:r,s=u(n);return[a,i.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else o(t)},[l,e,o,s])]}({prop:r,defaultProp:o,onChange:l}),y=i.useCallback(()=>{clearTimeout(p.current),d.current=window.setTimeout(()=>v(!0),s)},[s,v]),w=i.useCallback(()=>{clearTimeout(d.current),h.current||m.current||(p.current=window.setTimeout(()=>v(!1),c))},[c,v]),x=i.useCallback(()=>v(!1),[v]);return i.useEffect(()=>()=>{clearTimeout(d.current),clearTimeout(p.current)},[]),(0,a.jsx)(e8,{scope:t,open:g,onOpenChange:v,onOpen:y,onClose:w,onDismiss:x,hasSelectionRef:h,isPointerDownOnContentRef:m,children:(0,a.jsx)(eW,{...f,children:n})})};e9.displayName=e5;var te="HoverCardTrigger",tt=i.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,o=e7(te,n),i=e6(n);return(0,a.jsx)(e_,{asChild:!0,...i,children:(0,a.jsx)(eS.a,{"data-state":o.open?"open":"closed",...r,ref:t,onPointerEnter:l(e.onPointerEnter,ta(o.onOpen)),onPointerLeave:l(e.onPointerLeave,ta(o.onClose)),onFocus:l(e.onFocus,o.onOpen),onBlur:l(e.onBlur,o.onClose),onTouchStart:l(e.onTouchStart,e=>e.preventDefault())})})});tt.displayName=te;var[tn,tr]=e3("HoverCardPortal",{forceMount:void 0}),to="HoverCardContent",ti=i.forwardRef((e,t)=>{let n=tr(to,e.__scopeHoverCard),{forceMount:r=n.forceMount,...o}=e,i=e7(to,e.__scopeHoverCard);return(0,a.jsx)(eG,{present:r||i.open,children:(0,a.jsx)(tl,{"data-state":i.open?"open":"closed",...o,onPointerEnter:l(e.onPointerEnter,ta(i.onOpen)),onPointerLeave:l(e.onPointerLeave,ta(i.onClose)),ref:t})})});ti.displayName=to;var tl=i.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:f,...d}=e,p=e7(to,n),h=e6(n),m=i.useRef(null),g=(0,c.e)(t,m),[v,y]=i.useState(!1);return i.useEffect(()=>{if(v){let e=document.body;return o=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=o,e.style.webkitUserSelect=o}}},[v]),i.useEffect(()=>{if(m.current){let e=()=>{y(!1),p.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(p.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),p.hasSelectionRef.current=!1,p.isPointerDownOnContentRef.current=!1}}},[p.isPointerDownOnContentRef,p.hasSelectionRef]),i.useEffect(()=>{m.current&&(function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t})(m.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,a.jsx)(e0,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:f,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:l(u,e=>{e.preventDefault()}),onDismiss:p.onDismiss,children:(0,a.jsx)(eI,{...h,...d,onPointerDown:l(d.onPointerDown,e=>{e.currentTarget.contains(e.target)&&y(!0),p.hasSelectionRef.current=!1,p.isPointerDownOnContentRef.current=!0}),ref:g,style:{...d.style,userSelect:v?"text":void 0,WebkitUserSelect:v?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})});function ta(e){return t=>"touch"===t.pointerType?void 0:e()}i.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,o=e6(n);return(0,a.jsx)(eZ,{...o,...r,ref:t})}).displayName="HoverCardArrow";var ts=e9,tu=tt,tc=ti}}]);