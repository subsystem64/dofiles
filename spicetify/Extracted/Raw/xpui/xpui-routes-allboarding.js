"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[335],{99326:(e,t,a)=>{a.r(t),a.d(t,{Allboarding:()=>Z,SEARCH_INPUT_TIMER:()=>W,default:()=>K});var n=a(67294),l=a.n(n),r=a(94184),c=a.n(r),i=a(6060),s=a(96685),o=a(99450),u=a(89294),m=a(59713),d=a.n(m);const h=e=>Boolean(e.squircleArtist);var v=a(91930);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){d()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const E=(e,t)=>t.filter(h).find((({squircleArtist:t})=>t.uri===e.squircleArtist.uri)),f=(e,t,a,n)=>{const l=[];for(let a=0;a<t.length;a+=1){const r=t[a];if(E(r,e)||l.push(r),l.length>=n)break}const r=[...e];return r.splice(a,0,...l),r},g={wrapperContainer:"g5yaUFhsjvWiOMwo1hef",sleeveContainer:"oVBkTOo1tQh0TXHJihlh",loadingContainer:"NQgsQDgDQXCQAOKuXNq6",headerSection:"NKMpbeinI1H_7L6jKfDa",loadingText:"T3J8_JOOa1a_WrDRGkw_",titleContainer:"uMONVSXLSDuXz6m_OWr5",searchBarBottomGradient:"UhMWaM8HV9E3GHyN9vac",searchContainer:"gwQCGhc6mzk6o1M13yVe",searchInput:"ba5siQ28Dou6ShHZVM__",searchInputIconContainer:"jIsU9pw2cq_JBw_zpeA0",searchInputIcon:"_bnFRj_rCJ_Frn5OK2xq",searchInputSearchIcon:"__415d3v_vj__BkGyfY5",searchInputClearButton:"i6SVvVSl_jwLCeLlItfZ",actionContainer:"VWzC_L_OkK_GYlr_oV9T"};var b=a(78034),S=a(86446),_=a(20657),k=a(98742),y=a(64005),w=a(56802),I=a(7739),x=a(8498),N=a(64230);const A="X_Ml7khEPla_QJcCAgIg",O="_5yY_gSAU7JQvpvWrg6L",R="kPPARgPp82XbCDLirMUd",T="l5cfSXQS8JZc3B7_PGbO";var P=a(4383),B=a(23957);const j=(0,n.forwardRef)(((e,t)=>{const{name:a,uri:r,images:c,onSelectionChange:i}=e,[o,u]=(0,P.Z)(r),m=(0,n.useCallback)((async()=>{try{const e=!o;i(e),await u(e)}catch(e){}}),[u,i,o]);return l().createElement("button",{className:A,type:"button",onClick:m,title:a,role:"checkbox","aria-checked":o,ref:t,tabIndex:-1},o?l().createElement("span",{className:T},l().createElement(B.k,{semanticColor:"textBase"})):null,l().createElement("div",{className:O},l().createElement(x.x,{"aria-hidden":!0,isCircular:!0,images:c,fallback:{Component:N.d,viewBox:"-25 -22 100 100"}})),l().createElement(s.LF,{className:R,as:"div",variant:s.LF.mestoBold,semanticColor:"textBase"},a))})),L=e=>null!=e&&e.value?[{url:e.value}]:[],M="_iLPX6M_EZ0dNX_iwhSn";function D({stepArtists:e,lastSearchSelectedURI:t,artistButtonReference:a,handleSelectionChange:n}){if(null!=e&&e.length){const r=4,c=Math.floor(e.length-1/r)+1,i=e.map((({squircleArtist:e},c)=>{const{text:i,uri:s,image_url:o}=e,u=c%r+1,m=Math.floor(c/4)+1,d=s===t?a:null;return l().createElement("div",{key:s,role:"gridcell","aria-rowindex":m,"aria-colindex":u},l().createElement(j,{onSelectionChange:t=>n(e,t),ref:d,name:i,uri:s,images:L(o)}))}));return l().createElement(I.j,{className:M,"aria-rowcount":c,"aria-colcount":4,"aria-live":"polite","aria-label":"Artist picker",isFluid:!0},i)}return null}const F="i9tRcnHEqgl6pon_8CyC",q="Hr2u6aJ3tRQw0m0rrsZm",z="FDijPkeXRCgnTa1xRi7_",X=e=>{const{title:t,subtitle:a,uri:r,images:c,onSelect:i}=e,[o,u]=(0,P.Z)(r),m=(0,n.useCallback)((async()=>{try{const e=!o;i(),e&&await u(e)}catch(e){}}),[u,i,o]);return l().createElement("button",{key:r,onClick:m,className:F},l().createElement("div",{className:q},l().createElement(x.x,{isCircular:!0,images:c,fallback:{Component:N.d,viewBox:"-25 -22 100 100"}})),l().createElement("div",{className:z},l().createElement("div",null,l().createElement(s.LF,{semanticColor:"textBase",variant:s.LF.mestoBold},t)),l().createElement("div",null,a&&l().createElement(s.LF,{variant:s.LF.mesto},a))))},H="pjcRUfM56z3fTSD9jMnq",Q="Z0XSIGIZ0E_yD7Pzkl6G";function U({searchResults:e,handleSearchSelectionChange:t,searchInput:a}){if(e){const n=e.filter((e=>e)).map(((e,a)=>{const{text:n,subtitle:r,uri:c,image_url:i}=e;return l().createElement("div",{key:c,role:"row","aria-rowindex":a},l().createElement("div",{role:"gridcell","aria-colindex":0},l().createElement(X,{title:n,subtitle:null==r?void 0:r.value,uri:c,images:L(i),onSelect:()=>t(e)})))}));return l().createElement(I.j,{className:H,"aria-rowcount":n.length,"aria-colcount":1,"aria-label":"Search results"},n.length?n:l().createElement("div",{className:Q},l().createElement("div",null,l().createElement(s.LF,{variant:"canon",semanticColor:"textBase"},_.ag.get("search.empty-results-title",a))),l().createElement("div",null,l().createElement(s.LF,{variant:"mesto",semanticColor:"textBase"},_.ag.get("search.empty-results-text")))))}return null}var G=a(47886),J=a(69518),V=a.n(J);const W=200,Z=({entryPoint:e,onComplete:t})=>{var a,r,m,d;const p=(e=>{var t;return null===(t=V().from(e))||void 0===t?void 0:t.toURI()})((0,G.TH)().pathname),{step:I,nextAction:x,searchAction:N,loadMoreArtist:A}=((e,t)=>{const a=(0,n.useContext)(v.P),[l,r]=(0,n.useState)(null),[c,i]=(0,n.useState)({}),s=(0,n.useCallback)((async()=>{if(a){const n=await a.start(e,t);r(n)}}),[a,t,e,r]),o=(0,n.useCallback)((async t=>{var n,r;const c=null==l||null===(n=l.next.action)||void 0===n||null===(r=n.link)||void 0===r?void 0:r.value;if(!c)throw new Error("This step either does not exist, OR does not have a next action to perform!");{const n=t.map((e=>({uri:e})));await(null==a?void 0:a.submitSelection({selectedItems:n},c,e))}}),[a,l,e]),u=(0,n.useCallback)((async(e,t=0)=>{var n;const r=null==l||null===(n=l.search)||void 0===n?void 0:n.search_url;return a&&r?a.search(e,t,r):[]}),[a,l]),m=(0,n.useCallback)((async e=>{var t;const n=null==l||null===(t=l.sections[0])||void 0===t?void 0:t.items;if(!l||!n||c[e.uri])return;i(C(C({},c),{},{[e.uri]:!0}));let s=n;E({squircleArtist:e},n)||(s=f(n,[{squircleArtist:e}],0,1));const o=e.more_url.value;if(a&&o&&n){const t=s.findIndex((t=>!!h(t)&&t.squircleArtist.uri===e.uri)),n=(await a.loadMore(o)).map((e=>({squircleArtist:e})));s=f(s,n,t+1,e.expansion_limit),r(C(C({},l),{},{sections:[C(C({},l.sections[0]),{},{items:s})]}))}}),[c,a,l]);return(0,n.useEffect)((()=>{s()}),[s]),{step:l,nextAction:o,searchAction:u,loadMoreArtist:m}})(e,p),O=(0,w.o)(),[R,T]=(0,n.useState)([]),[P,B]=(0,n.useState)(""),[j,L]=(0,n.useState)(null),[M,F]=(0,n.useState)(!1),[q,z]=(0,n.useState)(null),[X,H]=(0,n.useState)(!1),[Q,J]=(0,n.useState)("ARTIST_PICKER"),Z=null==I||null===(a=I.sections[0])||void 0===a?void 0:a.items,K=(0,n.useMemo)((()=>{if(!Z)return[];return Z.filter(h)}),[Z]),[Y,$]=(0,n.useState)(""),ee=(0,n.useCallback)((async()=>{B(""),L(null),J("ARTIST_PICKER")}),[]),te=(0,n.useCallback)((e=>{e&&e.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}),[]),ae=(0,n.useCallback)(((e,t)=>{const{uri:a}=e;t?R.includes(a)||(T([...R,a]),A(e)):T(R.filter((e=>e!==a)))}),[R,T,A]),ne=(0,n.useCallback)((e=>{const{uri:t}=e;R.includes(t)||(T([...R,t]),A(e)),ee(),$(t)}),[R,ee,A]),le=(0,y.y)((async e=>{J("SEARCH");const t=await N(e);L(t)}),W),re=(0,n.useCallback)((e=>{const t=e.target.value;B(t),t.length?le(t):(L(null),J("ARTIST_PICKER"))}),[B,L,le]),ce=(0,n.useCallback)((async()=>{try{F(!0),q&&clearTimeout(q);const e=setTimeout((()=>{t&&t(!1),H(!0)}),5e3);z(e),O({intent:"taste_onboarding_done",type:"click",itemIdSuffix:`${R.length}`}),await Promise.all([x(R),new Promise((e=>setTimeout(e,500)))]),F(!1),clearTimeout(e),z(null),t&&!X&&t(!0)}catch(e){F(!1),q&&(clearTimeout(q),z(null))}}),[R,X,q,x,t,O]),ie=(0,n.useCallback)((e=>{"Enter"===e.key&&e.preventDefault(),"Escape"===e.key&&P&&ee()}),[P,ee]),[se,oe]=(0,n.useState)(!1);(0,n.useEffect)((()=>{se||(null==I?void 0:I.step)!==u.dW.ARTIST||(O({type:"view",intent:"taste_onboarding",targetUri:"/allboarding/origin/signup"}),oe(!0))}),[se,O,null==I?void 0:I.step]),(0,n.useEffect)((()=>{(null==I?void 0:I.step)===u.dW.DONE&&t&&t(!1)}),[t,I]);const ue=null==I||null===(r=I.next)||void 0===r||null===(m=r.button_label)||void 0===m?void 0:m.value,me=ue&&(null==I?void 0:I.min_selections)&&R.length>=(null==I?void 0:I.min_selections),[de,he]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{!de&&me&&(O({intent:"taste_onboarding_done",type:"view"}),he(!0))}),[de,me,O]),I?M?l().createElement("div",{className:c()([g.wrapperContainer,"encore-dark-theme"])},l().createElement("div",{"data-testid":"loading-container",className:g.loadingContainer},l().createElement(i.T,{indicatorSize:"md"}),l().createElement("span",{className:g.loadingText},l().createElement(s.LF,{variant:s.LF.canon,semanticColor:"textBase"},null==I||null===(ve=I.next.screen)||void 0===ve?void 0:ve.loading_text.value)))):l().createElement("div",{className:c()([g.wrapperContainer,"encore-dark-theme"])},l().createElement("div",{className:g.sleeveContainer},l().createElement("div",{className:g.headerSection},l().createElement("div",{className:g.titleContainer},l().createElement(s.LF,{variant:s.LF.canon,semanticColor:"textBase"},null===(d=I.title)||void 0===d?void 0:d.value)),l().createElement("div",{className:g.searchContainer},I.search&&[l().createElement("form",{key:"search-form",role:"search"},l().createElement("input",{className:c()(g.searchInput,b.Z.ballad),placeholder:I.search.placeholder,"aria-label":`${I.search.placeholder.toLowerCase()}-input`,type:"text",value:P,onChange:re,onKeyDown:ie})),l().createElement("div",{key:"search-icons",className:g.searchInputIconContainer},l().createElement("span",{className:g.searchInputSearchIcon},l().createElement(S.W,{size:24,viewBox:"0 0 512 512",className:g.searchInputIcon,"aria-hidden":!0})),P&&l().createElement("button",{className:g.searchInputClearButton,onClick:ee,"aria-label":_.ag.get("search.a11y.clear-input")},l().createElement(k.T,{size:24,className:g.searchInputIcon})))])),l().createElement("div",{className:g.artistCardsContainerTopGradient}),"SEARCH"===Q?l().createElement(U,{searchResults:j,handleSearchSelectionChange:ne,searchInput:P}):l().createElement(D,{stepArtists:K,lastSearchSelectedURI:Y,artistButtonReference:te,handleSelectionChange:ae}),me&&l().createElement("div",{className:g.actionContainer},l().createElement(o.D,{"aria-hidden":!me,buttonSize:"lg",onClick:ce},ue)))):null;var ve};const K=Z},86446:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(67294),l=a.n(n),r=a(87523);const c=e=>l().createElement(r.J,e,l().createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor"}))}}]);
//# sourceMappingURL=xpui-routes-allboarding.js.map