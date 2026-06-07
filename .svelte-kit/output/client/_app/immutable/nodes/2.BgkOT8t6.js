import{b as Yc,a as Ce,d as hn,c as ct,f as ut}from"../chunks/BimzPX6F.js";import{s as Ct}from"../chunks/BHm_P5Ce.js";import{m as ns,I as $l,aN as Xl,h as yt,z as qi,q as ql,a as _a,C as ie,av as jc,J as Kc,$ as $a,ad as hi,x as ui,a9 as Zc,ai as Jc,Y as Xa,N as Gi,aO as Cn,L as Sr,aP as Qc,au as eu,aK as Yl,aQ as jl,ah as La,aR as tu,aS as nu,an as Kl,E as qa,aT as iu,aE as ru,at as Zl,M as Jl,aU as Ps,G as Ql,aV as su,aW as au,af as ou,O as lu,Z as us,ab as cu,aX as uu,a1 as du,k as hu,o as fu,as as ec,aY as pu,aZ as tc,aw as nc,a_ as Ya,a$ as ja,b0 as mu,b1 as gu,b2 as _u,b3 as vu,b4 as xu,b5 as Tr,b6 as Mu,b7 as Su,b8 as Eu,b9 as yu,ba as bu,bb as Tu,bc as Au,bd as wu,be as Ru,ap as Cu,b as ds,D as Lu,c as Pu,ao as Du,u as Er,r as Ka,bf as Uu,bg as Hi,aJ as Iu,p as xi,d as Mi,j as te,g as W,f as st,i as G,ar as is,bh as Nu,t as ft,_ as Tt,aq as rs,ak as En}from"../chunks/YK3oDBfS.js";import{B as Fu,l as wt,p as Ei,s as It,i as _t,a as ir,d as pt,b as Ou,c as Bu}from"../chunks/DQdumUKV.js";import{i as zu,a as ku,d as Rt,b as Ar,c as Gu,n as Hu,e as Vu,s as Xe}from"../chunks/aaScoccQ.js";import{w as Za,d as rn,g as lt}from"../chunks/DxTIuSTY.js";function Ft(i,e){return e}function Wu(i,e,t){for(var n=[],r=e.length,s,o=e.length,a=0;a<r;a++){let p=e[a];Jl(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var h=i.outrogroups;va(i,La(s.done)),h.delete(s),h.size===0&&(i.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;ou(u),u.append(c),i.items.clear()}va(i,e,!l)}else s={pending:new Set(e),done:new Set},(i.outrogroups??(i.outrogroups=new Set)).add(s)}function va(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const o of i.pending.values())for(const a of o)n.add(i.items.get(a).e)}for(var r=0;r<e.length;r++){var s=e[r];if(n!=null&&n.has(s)){s.f|=Cn;const o=document.createDocumentFragment();lu(s,o)}else us(e[r],t)}}var Ja;function Dt(i,e,t,n,r,s=null){var o=i,a=new Map,l=(e&Xl)!==0;if(l){var c=i;o=yt?qi(ql(c)):c.appendChild(ns())}yt&&_a();var u=null,p=Yl(()=>{var M=t();return jl(M)?M:M==null?[]:La(M)}),h,m=new Map,_=!0;function v(M){T.effect.f&ru||(T.pending.delete(M),T.fallback=u,$u(T,h,o,e,n),u!==null&&(h.length===0?u.f&Cn?(u.f^=Cn,_r(u,null,o)):Zl(u):Jl(u,()=>{u=null})))}function f(M){T.pending.delete(M)}var d=$l(()=>{h=ie(p);var M=h.length;let L=!1;if(yt){var U=jc(o)===Kc;U!==(M===0)&&(o=$a(),qi(o),hi(!1),L=!0)}for(var P=new Set,y=Gi,N=eu(),g=0;g<M;g+=1){yt&&ui.nodeType===Zc&&ui.data===Jc&&(o=ui,L=!0,hi(!1));var b=h[g],I=n(b,g),B=_?null:a.get(I);B?(B.v&&Xa(B.v,b),B.i&&Xa(B.i,g),N&&y.unskip_effect(B.e)):(B=Xu(a,_?o:Ja??(Ja=ns()),b,I,g,r,e,t),_||(B.e.f|=Cn),a.set(I,B)),P.add(I)}if(M===0&&s&&!u&&(_?u=Sr(()=>s(o)):(u=Sr(()=>s(Ja??(Ja=ns()))),u.f|=Cn)),M>P.size&&Qc(),yt&&M>0&&qi($a()),!_)if(m.set(y,P),N){for(const[ne,D]of a)P.has(ne)||y.skip_effect(D.e);y.oncommit(v),y.ondiscard(f)}else v(y);L&&hi(!0),ie(p)}),T={effect:d,items:a,pending:m,outrogroups:null,fallback:u};_=!1,yt&&(o=ui)}function cr(i){for(;i!==null&&!(i.f&su);)i=i.next;return i}function $u(i,e,t,n,r){var b,I,B,ne,D,w,C,$,H;var s=(n&au)!==0,o=e.length,a=i.items,l=cr(i.effect.first),c,u=null,p,h=[],m=[],_,v,f,d;if(s)for(d=0;d<o;d+=1)_=e[d],v=r(_,d),f=a.get(v).e,f.f&Cn||((I=(b=f.nodes)==null?void 0:b.a)==null||I.measure(),(p??(p=new Set)).add(f));for(d=0;d<o;d+=1){if(_=e[d],v=r(_,d),f=a.get(v).e,i.outrogroups!==null)for(const k of i.outrogroups)k.pending.delete(f),k.done.delete(f);if(f.f&Ps&&(Zl(f),s&&((ne=(B=f.nodes)==null?void 0:B.a)==null||ne.unfix(),(p??(p=new Set)).delete(f))),f.f&Cn)if(f.f^=Cn,f===l)_r(f,null,t);else{var T=u?u.next:l;f===i.effect.last&&(i.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Gn(i,u,f),Gn(i,f,T),_r(f,T,t),u=f,h=[],m=[],l=cr(u.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(h.length<m.length){var M=m[0],L;u=M.prev;var U=h[0],P=h[h.length-1];for(L=0;L<h.length;L+=1)_r(h[L],M,t);for(L=0;L<m.length;L+=1)c.delete(m[L]);Gn(i,U.prev,P.next),Gn(i,u,U),Gn(i,P,M),l=M,u=P,d-=1,h=[],m=[]}else c.delete(f),_r(f,l,t),Gn(i,f.prev,f.next),Gn(i,f,u===null?i.effect.first:u.next),Gn(i,u,f),u=f;continue}for(h=[],m=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),m.push(l),l=cr(l.next);if(l===null)continue}f.f&Cn||h.push(f),u=f,l=cr(f.next)}if(i.outrogroups!==null){for(const k of i.outrogroups)k.pending.size===0&&(va(i,La(k.done)),(D=i.outrogroups)==null||D.delete(k));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var y=[];if(c!==void 0)for(f of c)f.f&Ps||y.push(f);for(;l!==null;)!(l.f&Ps)&&l!==i.fallback&&y.push(l),l=cr(l.next);var N=y.length;if(N>0){var g=n&Xl&&o===0?t:null;if(s){for(d=0;d<N;d+=1)(C=(w=y[d].nodes)==null?void 0:w.a)==null||C.measure();for(d=0;d<N;d+=1)(H=($=y[d].nodes)==null?void 0:$.a)==null||H.fix()}Wu(i,y,g)}}s&&Ql(()=>{var k,J;if(p!==void 0)for(f of p)(J=(k=f.nodes)==null?void 0:k.a)==null||J.apply()})}function Xu(i,e,t,n,r,s,o,a){var l=o&tu?o&nu?qa(t):Kl(t,!1,!1):null,c=o&iu?qa(r):null;return{v:l,i:c,e:Sr(()=>(s(e,l??t,c??r,a),()=>{i.delete(n)}))}}function _r(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,s=e&&!(e.f&Cn)?e.nodes.start:t;n!==null;){var o=cu(n);if(s.before(n),n===r)return;n=o}}function Gn(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function qu(i,e,t,n,r,s){let o=yt;yt&&_a();var a=null;yt&&ui.nodeType===uu&&(a=ui,_a());var l=yt?ui:i,c=new Fu(l,!1);$l(()=>{const u=e()||null;var p=pu;if(u===null){c.ensure(null,null);return}return c.ensure(u,h=>{if(u){if(a=yt?a:hu(u,p),Yc(a,a),n){var m=null;yt&&zu(u)&&a.append(m=document.createComment(""));var _=yt?ql(a):a.appendChild(ns());yt&&(_===null?hi(!1):qi(_)),n(a,_),m==null||m.remove()}fu.nodes.end=a,h.before(a)}yt&&qi(h)}),()=>{}},du),ec(()=>{}),o&&(hi(!0),qi(l))}function Yu(i,e){var t=void 0,n;tc(()=>{t!==(t=e())&&(n&&(us(n),n=null),t&&(n=Sr(()=>{nc(()=>t(i))})))})}function ic(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=ic(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function ju(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=ic(i))&&(n&&(n+=" "),n+=e);return n}function Yi(i){return typeof i=="object"?ju(i):i??""}const Qa=[...` 	
\r\f \v\uFEFF`];function Ku(i,e,t){var n=i==null?"":""+i;if(t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var s=r.length,o=0;(o=n.indexOf(r,o))>=0;){var a=o+s;(o===0||Qa.includes(n[o-1]))&&(a===n.length||Qa.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function eo(i,e=!1){var t=e?" !important;":";",n="";for(var r of Object.keys(i)){var s=i[r];s!=null&&s!==""&&(n+=" "+r+": "+s+t)}return n}function Ds(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function Zu(i,e){if(e){var t="",n,r;if(Array.isArray(e)?(n=e[0],r=e[1]):n=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(Ds)),r&&l.push(...Object.keys(r).map(Ds));var c=0,u=-1;const v=i.length;for(var p=0;p<v;p++){var h=i[p];if(a?h==="/"&&i[p-1]==="*"&&(a=!1):s?s===h&&(s=!1):h==="/"&&i[p+1]==="*"?a=!0:h==='"'||h==="'"?s=h:h==="("?o++:h===")"&&o--,!a&&s===!1&&o===0){if(h===":"&&u===-1)u=p;else if(h===";"||p===v-1){if(u!==-1){var m=Ds(i.substring(c,u).trim());if(!l.includes(m)){h!==";"&&p++;var _=i.substring(c,p).trim();t+=" "+_+";"}}c=p+1,u=-1}}}}return n&&(t+=eo(n)),r&&(t+=eo(r,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function tn(i,e,t,n,r,s){var o=i[Ya];if(yt||o!==t||o===void 0){var a=Ku(t,n,s);(!yt||a!==i.getAttribute("class"))&&(a==null?i.removeAttribute("class"):e?i.className=a:i.setAttribute("class",a)),i[Ya]=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&i.classList.toggle(l,c)}return s}function Us(i,e={},t,n){for(var r in t){var s=t[r];e[r]!==s&&(t[r]==null?i.style.removeProperty(r):i.style.setProperty(r,s,n))}}function jt(i,e,t,n){var r=i[ja];if(yt||r!==e){var s=Zu(e,n);(!yt||s!==i.getAttribute("style"))&&(s==null?i.removeAttribute("style"):i.style.cssText=s),i[ja]=e}else n&&(Array.isArray(n)?(Us(i,t==null?void 0:t[0],n[0]),Us(i,t==null?void 0:t[1],n[1],"important")):Us(i,t,n));return n}function xa(i,e,t=!1){if(i.multiple){if(e==null)return;if(!jl(e))return mu();for(var n of i.options)n.selected=e.includes(to(n));return}for(n of i.options){var r=to(n);if(gu(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Ju(i){var e=new MutationObserver(()=>{xa(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ec(()=>{e.disconnect()})}function to(i){return"__value"in i?i.__value:i.value}const ur=Symbol("class"),dr=Symbol("style"),rc=Symbol("is custom element"),sc=Symbol("is html"),Qu=Tr?"link":"LINK",no=Tr?"input":"INPUT",ed=Tr?"option":"OPTION",td=Tr?"select":"SELECT",nd=Tr?"progress":"PROGRESS";function Vi(i){if(yt){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;ve(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var r=i.checked;ve(i,"checked",null),i.checked=r}}};i[yu]=t,Ql(t),bu()}}function Lr(i,e){var t=Pa(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==nd)||(i.value=e??"")}function id(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function ve(i,e,t,n){var r=Pa(i);yt&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName===Qu)||r[e]!==(r[e]=t)&&(e==="loading"&&(i[Au]=t),t==null?i.removeAttribute(e):typeof t!="string"&&ac(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function rd(i,e,t,n,r=!1,s=!1){if(yt&&r&&i.nodeName===no){var o=i,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||Vi(o)}var l=Pa(i),c=l[rc],u=!l[sc];let p=yt&&c;p&&hi(!1);var h=e||{},m=i.nodeName===ed;for(var _ in e)_ in t||(t[_]=null);t.class?t.class=Yi(t.class):t[ur]&&(t.class=null),t[dr]&&(t.style??(t.style=null));var v=ac(i);if(i.nodeName===no&&"type"in t&&("value"in t||"__value"in t)){var f=t.type;(f!==h.type||f===void 0&&i.hasAttribute("type"))&&(h.type=f,ve(i,"type",f))}for(const y in t){let N=t[y];if(m&&y==="value"&&N==null){i.value=i.__value="",h[y]=N;continue}if(y==="class"){var d=i.namespaceURI==="http://www.w3.org/1999/xhtml";tn(i,d,N,n,e==null?void 0:e[ur],t[ur]),h[y]=N,h[ur]=t[ur];continue}if(y==="style"){jt(i,N,e==null?void 0:e[dr],t[dr]),h[y]=N,h[dr]=t[dr];continue}var T=h[y];if(!(N===T&&!(N===void 0&&i.hasAttribute(y)))){h[y]=N;var M=y[0]+y[1];if(M!=="$$")if(M==="on"){const g={},b="$$"+y;let I=y.slice(2);var L=Vu(I);if(ku(I)&&(I=I.slice(0,-7),g.capture=!0),!L&&T){if(N!=null)continue;i.removeEventListener(I,h[b],g),h[b]=null}if(L)Rt(I,i,N),Ar([I]);else if(N!=null){let B=function(ne){h[y].call(this,ne)};h[b]=Gu(I,i,B,g)}}else if(y==="style")ve(i,y,N);else if(y==="autofocus")Su(i,!!N);else if(!c&&(y==="__value"||y==="value"&&N!=null))i.value=i.__value=N;else if(y==="selected"&&m)id(i,N);else{var U=y;u||(U=Hu(U));var P=U==="defaultValue"||U==="defaultChecked";if(N==null&&!c&&!P)if(l[y]=null,U==="value"||U==="checked"){let g=i;const b=e===void 0;if(U==="value"){let I=g.defaultValue;g.removeAttribute(U),g.defaultValue=I,g.value=g.__value=b?I:null}else{let I=g.defaultChecked;g.removeAttribute(U),g.defaultChecked=I,g.checked=b?I:!1}}else i.removeAttribute(y);else P||v.includes(U)&&(c||typeof N!="string")?(i[U]=N,U in l&&(l[U]=Eu)):typeof N!="function"&&ve(i,U,N)}}}return p&&hi(!0),h}function io(i,e,t=[],n=[],r=[],s,o=!1,a=!1){_u(r,t,n,l=>{var c=void 0,u={},p=i.nodeName===td,h=!1;if(tc(()=>{var _=e(...l.map(ie)),v=rd(i,c,_,s,o,a);h&&p&&"value"in _&&xa(i,_.value);for(let d of Object.getOwnPropertySymbols(u))_[d]||us(u[d]);for(let d of Object.getOwnPropertySymbols(_)){var f=_[d];d.description===Mu&&(!c||f!==c[d])&&(u[d]&&us(u[d]),u[d]=Sr(()=>Yu(i,()=>f))),v[d]=f}c=v}),p){var m=i;nc(()=>{xa(m,c.value,!0),Ju(m)})}h=!0})}function Pa(i){var e;return i[e=vu]??(i[e]={[rc]:i.nodeName.includes("-"),[sc]:i.namespaceURI===xu})}var ro=new Map;function ac(i){var e=i.getAttribute("is")||i.nodeName,t=ro.get(e);if(t)return t;ro.set(e,t=[]);for(var n,r=i,s=Element.prototype;s!==r;){n=wu(r);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.push(o);r=Tu(r)}return t}function sd(i,e,t=e){var n=new WeakSet;Ru(i,"input",async r=>{var s=r?i.defaultValue:i.value;if(s=Is(i)?Ns(s):s,t(s),Gi!==null&&n.add(Gi),await Cu(),s!==(s=e())){var o=i.selectionStart,a=i.selectionEnd,l=i.value.length;if(i.value=s??"",a!==null){var c=i.value.length;o===a&&a===l&&c>l?(i.selectionStart=c,i.selectionEnd=c):(i.selectionStart=o,i.selectionEnd=Math.min(a,c))}}}),(yt&&i.defaultValue!==i.value||ds(e)==null&&i.value)&&(t(Is(i)?Ns(i.value):i.value),Gi!==null&&n.add(Gi)),Lu(()=>{var r=e();if(i===document.activeElement){var s=Gi;if(n.has(s))return}Is(i)&&r===Ns(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Is(i){var e=i.type;return e==="number"||e==="range"}function Ns(i){return i===""?null:+i}function wr(i=!1){const e=Pu,t=e.l.u;if(!t)return;let n=()=>Hi(e.s);if(i){let r=0,s={};const o=Iu(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});n=()=>ie(o)}t.b.length&&Du(()=>{so(e,n),Ka(t.b)}),Er(()=>{const r=ds(()=>t.m.map(Uu));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Er(()=>{so(e,n),Ka(t.a)})}function so(i,e){if(i.l.s)for(const t of i.l.s)ie(t);e()}const ad=!1,n0=Object.freeze(Object.defineProperty({__proto__:null,ssr:ad},Symbol.toStringTag,{value:"Module"})),Ht=["#f59e0b","#3b82f6","#10b981","#8b5cf6"],od={solstices:[{label:"夏至",month:6,day:21},{label:"冬至",month:12,day:21}],equinoxes:[{label:"春分",month:3,day:20},{label:"秋分",month:9,day:23}],quarterly:[{label:"立春",month:2,day:4},{label:"立夏",month:5,day:5},{label:"立秋",month:8,day:7},{label:"立冬",month:11,day:7}]},ss={solstices:["#ef4444","#3b82f6"],equinoxes:["#10b981","#f59e0b"],quarterly:["#22c55e","#eab308","#f97316","#8b5cf6"]},ld=Math.PI/180,cd=180/Math.PI;function Ln(i){return i*ld}function hs(i){return i*cd}function Da(i){const e=new Date(i.getFullYear(),0,0),t=i.getTime()-e.getTime(),n=1e3*60*60*24;return Math.floor(t/n)}function Ua(i){return-23.45*Math.cos(Ln(360/365*(i+10)))}function oc(i){const e=Ln(.9863013698630136*(i-81));return 9.87*Math.sin(2*e)-7.53*Math.cos(e)-1.5*Math.sin(e)}function Ji(i,e,t=0){const n=Da(i),r=Ua(n),s=i.getHours()+i.getMinutes()/60+i.getSeconds()/3600,o=oc(n),l=(s+4*t/60+o/60-12)*15,c=Ln(e),u=Ln(r),p=Ln(l),h=Math.sin(c)*Math.sin(u)+Math.cos(c)*Math.cos(u)*Math.cos(p),m=hs(Math.asin(Math.max(-1,Math.min(1,h)))),_=(Math.sin(u)-Math.sin(c)*h)/(Math.cos(c)*Math.cos(Ln(m))),v=hs(Math.acos(Math.max(-1,Math.min(1,_)))),f=l>0?360-v:v;return{altitude:m,azimuth:f,declination:r,hourAngle:l}}function ji(i,e,t=0){const n=Da(i),r=Ua(n),s=oc(n),o=Ln(e),a=Ln(r);let l=-Math.tan(o)*Math.tan(a);if(l>1)return{sunrise:12,sunset:12,dayLength:0};if(l<-1)return{sunrise:0,sunset:24,dayLength:24};const c=hs(Math.acos(l)),u=12-t/15-s/60,p=u-c/15,h=u+c/15,m=2*c/15;return{sunrise:Math.max(0,Math.min(24,p)),sunset:Math.max(0,Math.min(24,h)),dayLength:m}}function ao(i,e,t=0){return Ji(i,e,t).altitude>0}function Fs(i,e,t=0,n=96){const r=[],{sunrise:s,sunset:o}=ji(i,e,t);for(let a=0;a<=n;a++){const l=s+(o-s)*(a/n),c=new Date(i);c.setHours(Math.floor(l),l%1*60,0,0);const u=Ji(c,e,t);r.push({hour:l,altitude:Math.max(0,u.altitude),azimuth:u.azimuth})}return r}function lc(i,e,t=0){const n=Da(i),r=Ua(n),s=Ln(e),o=Ln(r),a=Math.sin(s)*Math.sin(o)+Math.cos(s)*Math.cos(o);return hs(Math.asin(Math.max(-1,Math.min(1,a))))}function Pn(i,e,t,n,r=0){const s=new Date(i,e-1,t),o=s.toISOString().split("T")[0],{dayLength:a}=ji(s,n,r),l=lc(s,n,r);return{date:o,dayLength:a,maxAltitude:l}}function ud(i,e,t=0){const n=i.getFullYear(),r=Pn(n,6,21,e,t),s=Pn(n,12,21,e,t),o=Pn(n,3,20,e,t),a=Pn(n,9,23,e,t),l=[Pn(n,2,4,e,t),Pn(n,5,5,e,t),Pn(n,8,7,e,t),Pn(n,11,7,e,t)],c=Pn(i.getFullYear(),i.getMonth()+1,i.getDate(),e,t);return{solstices:{summer:r,winter:s},equinoxes:{spring:o,autumn:a},quarterly:l,currentDay:c}}const dd=Math.PI/180,hd=180/Math.PI;function un(i){return i*dd}function fs(i){return i*hd}function fd(i,e,t,n){if(i.altitude<=0)return null;un(i.declination),un(i.hourAngle);const r=e*Math.tan(un(i.hourAngle)),s=e,o=Math.sqrt(r*r+s*s),a=fs(Math.atan2(r,s));return{x:r,y:s,length:o,angle:a,hour:n??12+i.hourAngle/15}}function pd(i,e,t,n){if(i.altitude<=0)return null;const r=un(i.altitude),s=un(i.azimuth),o=t/Math.tan(r),a=o*Math.sin(s),l=o*Math.cos(s),c=o,u=i.azimuth;return{x:a,y:l,length:c,angle:u,hour:n??12+i.hourAngle/15}}function md(i,e,t,n){if(i.altitude<=0)return null;const r=un(i.altitude),s=un(i.azimuth),o=Math.sin(s),a=t/(Math.tan(r)*Math.abs(o)),l=a*Math.cos(s)/Math.abs(o),c=Math.sqrt(l*l+a*a),u=fs(Math.atan2(l,a));return{x:l,y:-a,length:c,angle:u,hour:n??12+i.hourAngle/15}}function ps(i,e,t,n,r){switch(i){case"equatorial":return fd(e,n,t,r);case"horizontal":return pd(e,t,n,r);case"vertical":return md(e,t,n,r);default:return null}}function gd(i,e,t){const n=(e-12)*15;switch(i){case"equatorial":return n;case"horizontal":const r=un(t),s=un(n),o=Math.sin(s)/(Math.cos(s)*Math.sin(r)+Math.tan(un(23.45))*Math.cos(r));return fs(Math.atan(o));case"vertical":const a=un(t),l=un(n),c=Math.sin(l)/(Math.cos(l)*Math.cos(a)-Math.tan(un(23.45))*Math.sin(a));return fs(Math.atan(c));default:return n}}function as(i,e,t,n,r=96){const s=[],{sunrise:o,sunset:a}=ji(e,t,0);for(let l=0;l<=r;l++){const c=o+(a-o)*(l/r),u=new Date(e);u.setHours(Math.floor(c),c%1*60,0,0);const p=Ji(u,t,0),h=ps(i,p,t,n,c);h&&s.push(h)}return s}function _d(i,e,t){const n=[];for(let r=6;r<=18;r++){const s=gd(i,r,e);n.push({hour:r,angle:s,radius:t*1.5})}return n}function oo(i,e,t,n){const r=as(i,e,t,n,96);return r.length===0?0:Math.max(...r.map(s=>s.length))}function lo(i,e,t,n){const r=new Date(e);r.setHours(12,0,0,0);const s=Ji(r,t,0),o=ps(i,s,t,n,12);return o?{angle:o.angle,length:o.length}:null}const cc="sundial-presets",vd=20,xd=4;function Md(){if(typeof localStorage>"u")return[];try{const i=localStorage.getItem(cc);return i?JSON.parse(i):[]}catch{return[]}}function co(i){typeof localStorage>"u"||localStorage.setItem(cc,JSON.stringify(i))}function Sd(){const i=new Date;return{type:"horizontal",latitude:39.9,date:i.toISOString().split("T")[0],timeHours:i.getHours()+i.getMinutes()/60,gnomonLength:1,showTrack:!0,showCurrentPoint:!0,compareMode:!1,comparePresetIds:[],analysisMode:"single",keyDateMode:"single"}}function Ed(){const i=Za(Sd()),e=Za([]);typeof localStorage<"u"&&e.set(Md());const t=rn(i,w=>{const C=new Date(w.date),$=Math.floor(w.timeHours),H=Math.floor((w.timeHours-$)*60);return C.setHours($,H,0,0),C}),n=rn([i,t],([w,C])=>Ji(C,w.latitude,0)),r=rn([i,t],([w,C])=>ao(C,w.latitude,0)),s=rn([i,t],([w,C])=>ji(C,w.latitude,0)),o=rn([i,t],([w,C])=>Fs(C,w.latitude,0,96)),a=rn([i,t],([w,C])=>ud(C,w.latitude,0)),l=rn([i,n,r],([w,C,$])=>$?ps(w.type,C,w.latitude,w.gnomonLength):null),c=rn([i,t],([w,C])=>as(w.type,C,w.latitude,w.gnomonLength,120)),u=rn([i],([w])=>_d(w.type,w.latitude,w.gnomonLength)),p=rn([i,e],([w,C])=>!w.compareMode||w.comparePresetIds.length===0?[]:w.comparePresetIds.map($=>C.find(H=>H.id===$)).filter($=>$!==void 0)),h=rn([p],([w])=>w.length===0?[]:w.map((C,$)=>{const H=new Date(C.date),k=Math.floor(C.timeHours),J=Math.floor((C.timeHours-k)*60);H.setHours(k,J,0,0);const se=Ji(H,C.latitude,0),ge=ao(H,C.latitude,0),q=ge?ps(C.type,se,C.latitude,C.gnomonLength||1):null,ce=as(C.type,H,C.latitude,C.gnomonLength||1,120),Se=ji(H,C.latitude,0),Le=oo(C.type,H,C.latitude,C.gnomonLength||1),Ee=lo(C.type,H,C.latitude,C.gnomonLength||1),Fe=Fs(H,C.latitude,0,96);return{preset:C,color:Ht[$%Ht.length],shadow:q,shadowTrack:ce,sunriseSunset:Se,solarPosition:se,sunVisible:ge,maxShadowLength:Le,noonShadowAngle:(Ee==null?void 0:Ee.angle)??0,noonShadowLength:(Ee==null?void 0:Ee.length)??0,altitudeCurve:Fe}})),m=rn([i,t],([w,C])=>oo(w.type,C,w.latitude,w.gnomonLength)),_=rn([i,t],([w,C])=>lo(w.type,C,w.latitude,w.gnomonLength)),v=rn([i,t],([w,C])=>{if(w.keyDateMode==="single")return[];const $=C.getFullYear(),H=od[w.keyDateMode],k=ss[w.keyDateMode];return H.map((J,se)=>{const ge=new Date($,J.month-1,J.day),q=ge.toISOString().split("T")[0],ce=as(w.type,ge,w.latitude,w.gnomonLength,120),Se=Fs(ge,w.latitude,0,96),Le=ji(ge,w.latitude,0),Ee=lc(ge,w.latitude,0);return{label:J.label,date:q,color:k[se],shadowTrack:ce,altitudeCurve:Se,sunriseSunset:Le,maxAltitude:Ee}})});function f(w){i.update(C=>({...C,type:w}))}function d(w){const C=Math.max(-90,Math.min(90,w));i.update($=>({...$,latitude:C}))}function T(w){i.update(C=>({...C,date:w}))}function M(w){const C=Math.max(0,Math.min(24,w));i.update($=>({...$,timeHours:C}))}function L(w){i.update(C=>({...C,gnomonLength:Math.max(.1,w)}))}function U(w){i.update(C=>({...C,showTrack:w}))}function P(w){i.update(C=>({...C,showCurrentPoint:w}))}function y(w){i.update(C=>({...C,compareMode:w,comparePresetIds:w?C.comparePresetIds:[]}))}function N(w){const C=lt(i);if(C.comparePresetIds.includes(w))i.update(H=>({...H,comparePresetIds:H.comparePresetIds.filter(k=>k!==w)}));else{if(C.comparePresetIds.length>=xd)return!1;i.update(H=>({...H,comparePresetIds:[...H.comparePresetIds,w],compareMode:!0}))}return!0}function g(w){i.update(C=>({...C,analysisMode:w}))}function b(w){i.update(C=>({...C,keyDateMode:w}))}function I(w){const C=lt(i),$=lt(e);if($.length>=vd)return!1;const H={id:Date.now().toString(),name:w||`方案 ${$.length+1}`,type:C.type,latitude:C.latitude,date:C.date,timeHours:C.timeHours,gnomonLength:C.gnomonLength,createdAt:Date.now()},k=[...$,H];return e.set(k),co(k),!0}function B(w){const $=lt(e).find(H=>H.id===w);$&&i.update(H=>({...H,type:$.type,latitude:$.latitude,date:$.date,timeHours:$.timeHours,gnomonLength:$.gnomonLength}))}function ne(w){const $=lt(e).filter(H=>H.id!==w);e.set($),co($),i.update(H=>({...H,comparePresetIds:H.comparePresetIds.filter(k=>k!==w)}))}function D(){const w=new Date;i.update(C=>({...C,date:w.toISOString().split("T")[0],timeHours:w.getHours()+w.getMinutes()/60}))}return{config:i,presets:e,currentDateTime:t,solarPosition:n,sunVisible:r,sunriseSunset:s,altitudeCurve:o,yearlyAnalysis:a,currentShadow:l,shadowTrack:c,hourMarks:u,maxShadowLength:m,noonShadow:_,keyDateTracks:v,comparePresets:p,comparePresetsData:h,setType:f,setLatitude:d,setDate:T,setTimeHours:M,setGnomonLength:L,setShowTrack:U,setShowCurrentPoint:P,setCompareMode:y,toggleComparePreset:N,setAnalysisMode:g,setKeyDateMode:b,savePreset:I,loadPreset:B,deletePreset:ne,resetToNow:D}}const rr=Ed();/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var bd=hn("<svg><!><!></svg>");function Nt(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]),n=wt(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);xi(e,!1);let r=Ei(e,"name",8),s=Ei(e,"color",8,"currentColor"),o=Ei(e,"size",8,24),a=Ei(e,"strokeWidth",8,2),l=Ei(e,"absoluteStrokeWidth",8,!1),c=Ei(e,"iconNode",8);wr();var u=bd();io(u,m=>({...yd,...n,width:o(),height:o(),stroke:s(),"stroke-width":m,class:(Hi(r()),Hi(t),ds(()=>`lucide-icon lucide lucide-${r()} ${t.class??""}`))}),[()=>(Hi(l()),Hi(a()),Hi(o()),ds(()=>l()?Number(a())*24/Number(o()):a()))]);var p=W(u);Dt(p,1,c,Ft,(m,_)=>{var v=is(()=>Nu(ie(_),2));let f=()=>ie(v)[0],d=()=>ie(v)[1];var T=ct(),M=st(T);qu(M,f,!0,(L,U)=>{io(L,()=>({...d()}))}),Ce(m,T)});var h=te(p);Ct(h,e,"default",{}),G(u),Ce(i,u),Mi()}function uo(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]];Nt(i,It({name:"activity"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Td(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M3 3v18h18"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];Nt(i,It({name:"bar-chart-3"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function uc(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];Nt(i,It({name:"calendar"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Ad(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];Nt(i,It({name:"check"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function wd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];Nt(i,It({name:"circle"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Rd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];Nt(i,It({name:"clock"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Os(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];Nt(i,It({name:"copy"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Cd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]];Nt(i,It({name:"eye"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Ld(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];Nt(i,It({name:"flower-2"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function ho(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];Nt(i,It({name:"globe"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Pd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]];Nt(i,It({name:"layers"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Dd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];Nt(i,It({name:"leaf"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function fo(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}],["polyline",{points:"17 21 17 13 7 13 7 21"}],["polyline",{points:"7 3 7 8 15 8"}]];Nt(i,It({name:"save"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Ud(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]];Nt(i,It({name:"snowflake"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Ia(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];Nt(i,It({name:"sun"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Id(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];Nt(i,It({name:"sunrise"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Nd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];Nt(i,It({name:"sunset"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Fd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];Nt(i,It({name:"trash-2"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Od(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]];Nt(i,It({name:"trending-up"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}function Bd(i,e){const t=wt(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Nt(i,It({name:"x"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=ct(),a=st(o);Ct(a,e,"default",{}),Ce(r,o)},$$slots:{default:!0}}))}var zd=ut('<button><div class="font-medium text-sm text-slate-100"> </div> <div class="text-xs text-slate-400"> </div></button>'),kd=ut('<div class="mt-2 px-3 py-2 bg-red-900/30 border border-red-700/30 rounded-lg text-red-400 text-xs">太阳位于地平线以下，无法显示影子</div>'),Gd=ut(`<div class="glass-card p-5 space-y-5 h-full overflow-y-auto"><div><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 日晷类型</h3> <div class="space-y-2"></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 纬度设置</h3> <div class="space-y-3"><div class="flex items-center gap-3"><input type="range" min="-90" max="90" step="0.1" class="flex-1 accent-amber-500"/> <input type="number" min="-90" max="90" step="0.1" class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center
                 focus:outline-none focus:border-amber-500/50"/></div> <div class="flex justify-between text-xs text-slate-500"><span>-90° 南极</span> <span>0° 赤道</span> <span>90° 北极</span></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 日期</h3> <input type="date" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
             focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div class="border-t border-slate-700/50 pt-5"><div class="flex items-center justify-between mb-3"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 时间</h3> <span class="text-2xl font-mono text-slate-100"> </span></div> <input type="range" min="0" max="24" step="0.05" class="w-full accent-amber-500"/> <div class="flex justify-between text-xs text-slate-500 mt-1"><span>00:00</span> <span>06:00</span> <span>12:00</span> <span>18:00</span> <span>24:00</span></div> <button class="w-full mt-3 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm
             border border-slate-600/50 transition-colors">重置为当前时间</button></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 太阳位置</h3> <div class="space-y-2 text-sm"><div class="flex justify-between items-center"><span class="text-slate-400">高度角</span> <span> </span></div> <div class="flex justify-between items-center"><span class="text-slate-400">方位角</span> <span> </span></div> <div class="flex justify-between items-center"><span class="text-slate-400">赤纬角</span> <span class="font-mono text-slate-200"> </span></div> <!></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3">日出日落</h3> <div class="grid grid-cols-2 gap-3"><div class="bg-slate-700/30 rounded-lg p-3 text-center"><!> <div class="text-xs text-slate-400">日出</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center"><!> <div class="text-xs text-slate-400">日落</div> <div class="font-mono text-sm text-slate-200"> </div></div></div> <div class="mt-3 text-center text-xs text-slate-400"> </div></div></div>`);function Hd(i,e){xi(e,!1);const t=()=>pt(l,"$config",o),n=()=>pt(c,"$solarPosition",o),r=()=>pt(u,"$sunVisible",o),s=()=>pt(p,"$sunriseSunset",o),[o,a]=ir(),{config:l,solarPosition:c,sunVisible:u,sunriseSunset:p,setType:h,setLatitude:m,setDate:_,setTimeHours:v,resetToNow:f}=rr,d=[{value:"equatorial",label:"赤道式",desc:"盘面平行于赤道面"},{value:"horizontal",label:"水平式",desc:"盘面水平放置"},{value:"vertical",label:"垂直式",desc:"盘面垂直南向"}];function T(Q){const oe=Math.floor(Q),K=Math.floor((Q-oe)*60);return`${oe.toString().padStart(2,"0")}:${K.toString().padStart(2,"0")}`}function M(Q){if(Q<0||Q>24)return"--:--";const oe=Math.floor(Q),K=Math.floor((Q-oe)*60);return`${oe.toString().padStart(2,"0")}:${K.toString().padStart(2,"0")}`}function L(Q){const oe=lt(l).type,K="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ";return oe===Q?K+"bg-amber-500/20 border-amber-500/50":K+"bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50"}function U(){return"font-mono text-slate-200 "+(lt(u)?"":"line-through")}function P(Q){const oe=parseFloat(Q.target.value);isNaN(oe)||m(oe)}wr();var y=Gd(),N=W(y),g=W(N),b=W(g);ho(b,{class:"w-4 h-4"}),Tt(),G(g);var I=te(g,2);Dt(I,5,()=>d,Ft,(Q,oe)=>{var K=zd(),R=W(K),ae=W(R,!0);G(R);var me=te(R,2),be=W(me,!0);G(me),G(K),ft(Pe=>{tn(K,1,Pe),Xe(ae,ie(oe).label),Xe(be,ie(oe).desc)},[()=>Yi(L(ie(oe).value))]),Rt("click",K,()=>h(ie(oe).value)),Ce(Q,K)}),G(I),G(N);var B=te(N,2),ne=W(B),D=W(ne);ho(D,{class:"w-4 h-4"}),Tt(),G(ne);var w=te(ne,2),C=W(w),$=W(C);Vi($);var H=te($,2);Vi(H),G(C),Tt(2),G(w),G(B);var k=te(B,2),J=W(k),se=W(J);uc(se,{class:"w-4 h-4"}),Tt(),G(J);var ge=te(J,2);Vi(ge),G(k);var q=te(k,2),ce=W(q),Se=W(ce),Le=W(Se);Rd(Le,{class:"w-4 h-4"}),Tt(),G(Se);var Ee=te(Se,2),Fe=W(Ee,!0);G(Ee),G(ce);var Re=te(ce,2);Vi(Re);var Ue=te(Re,4);G(q);var _e=te(q,2),F=W(_e),Ge=W(F);Ia(Ge,{class:"w-4 h-4"}),Tt(),G(F);var ee=te(F,2),pe=W(ee),he=te(W(pe),2),De=W(he);G(he),G(pe);var re=te(pe,2),S=te(W(re),2),x=W(S);G(S),G(re);var O=te(re,2),le=te(W(O),2),ue=W(le);G(le),G(O);var de=te(O,2);{var Te=Q=>{var oe=kd();Ce(Q,oe)};_t(de,Q=>{r()||Q(Te)})}G(ee),G(_e);var Me=te(_e,2),ye=te(W(Me),2),Ie=W(ye),ze=W(Ie);Id(ze,{class:"w-5 h-5 mx-auto text-orange-400 mb-1"});var fe=te(ze,4),qe=W(fe,!0);G(fe),G(Ie);var He=te(Ie,2),Be=W(He);Nd(Be,{class:"w-5 h-5 mx-auto text-orange-500 mb-1"});var Ne=te(Be,4),xe=W(Ne,!0);G(Ne),G(He),G(ye);var A=te(ye,2),Y=W(A);G(A),G(Me),G(y),ft((Q,oe,K,R,ae,me,be,Pe,We,$e)=>{Lr($,t().latitude),Lr(H,Q),Lr(ge,t().date),Xe(Fe,oe),Lr(Re,t().timeHours),tn(he,1,K),Xe(De,`${R??""}°`),tn(S,1,ae),Xe(x,`${me??""}°`),Xe(ue,`${be??""}°`),Xe(qe,Pe),Xe(xe,We),Xe(Y,`日照时长: ${$e??""} 小时`)},[()=>t().latitude.toFixed(1),()=>T(t().timeHours),()=>Yi(U()),()=>n().altitude.toFixed(1),()=>Yi(U()),()=>n().azimuth.toFixed(1),()=>n().declination.toFixed(1),()=>M(s().sunrise),()=>M(s().sunset),()=>s().dayLength.toFixed(1)]),Rt("input",$,Q=>m(parseFloat(Q.target.value))),Rt("input",H,P),Rt("input",ge,Q=>_(Q.target.value)),Rt("input",Re,Q=>v(parseFloat(Q.target.value))),Rt("click",Ue,f),Ce(i,y),Mi(),a()}Ar(["click","input"]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="160",yi={ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,po=1,Wd=2,dc=1,hc=2,On=3,Qn=0,an=1,Bn=2,Kn=0,Ki=1,mo=2,go=3,_o=4,$d=5,li=100,Xd=101,qd=102,vo=103,xo=104,Yd=200,jd=201,Kd=202,Zd=203,Ma=204,Sa=205,Jd=206,Qd=207,eh=208,th=209,nh=210,ih=211,rh=212,sh=213,ah=214,oh=0,lh=1,ch=2,ms=3,uh=4,dh=5,hh=6,fh=7,fc=0,ph=1,mh=2,Zn=0,gh=1,_h=2,vh=3,pc=4,xh=5,Mh=6,mc=300,Qi=301,er=302,Ea=303,ya=304,Ss=306,ba=1e3,bn=1001,Ta=1002,Jt=1003,Mo=1004,Bs=1005,mn=1006,Sh=1007,yr=1008,Jn=1009,Eh=1010,yh=1011,Fa=1012,gc=1013,Yn=1014,jn=1015,br=1016,_c=1017,vc=1018,fi=1020,bh=1021,Tn=1023,Th=1024,Ah=1025,pi=1026,tr=1027,wh=1028,xc=1029,Rh=1030,Mc=1031,Sc=1033,zs=33776,ks=33777,Gs=33778,Hs=33779,So=35840,Eo=35841,yo=35842,bo=35843,Ec=36196,To=37492,Ao=37496,wo=37808,Ro=37809,Co=37810,Lo=37811,Po=37812,Do=37813,Uo=37814,Io=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Vs=36492,Go=36494,Ho=36495,Ch=36283,Vo=36284,Wo=36285,$o=36286,yc=3e3,mi=3001,Lh=3200,Ph=3201,bc=0,Dh=1,_n="",Vt="srgb",kn="srgb-linear",Oa="display-p3",Es="display-p3-linear",gs="linear",Mt="srgb",_s="rec709",vs="p3",Ti=7680,Xo=519,Uh=512,Ih=513,Nh=514,Tc=515,Fh=516,Oh=517,Bh=518,zh=519,qo=35044,Yo="300 es",Aa=1035,zn=2e3,xs=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],os=Math.PI/180,wa=180/Math.PI;function Rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function kh(i,e){return(i%e+e)%e}function Ws(i,e,t){return(1-t)*i+t*e}function jo(i){return(i&i-1)===0&&i!==0}function Ra(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gh={DEG2RAD:os};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],m=n[5],_=n[8],v=r[0],f=r[3],d=r[6],T=r[1],M=r[4],L=r[7],U=r[2],P=r[5],y=r[8];return s[0]=o*v+a*T+l*U,s[3]=o*f+a*M+l*P,s[6]=o*d+a*L+l*y,s[1]=c*v+u*T+p*U,s[4]=c*f+u*M+p*P,s[7]=c*d+u*L+p*y,s[2]=h*v+m*T+_*U,s[5]=h*f+m*M+_*P,s[8]=h*d+m*L+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=t*p+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=p*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($s.makeScale(e,t)),this}rotate(e){return this.premultiply($s.makeRotation(-e)),this}translate(e,t){return this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new rt;function Ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=Ms("canvas");return i.style.display="block",i}const Ko={};function vr(i){i in Ko||(Ko[i]=!0,console.warn(i))}const Zo=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jo=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[kn]:{transfer:gs,primaries:_s,toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Mt,primaries:_s,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Es]:{transfer:gs,primaries:vs,toReference:i=>i.applyMatrix3(Jo),fromReference:i=>i.applyMatrix3(Zo)},[Oa]:{transfer:Mt,primaries:vs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jo),fromReference:i=>i.applyMatrix3(Zo).convertLinearToSRGB()}},Vh=new Set([kn,Es]),gt={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pr[e].toReference,r=Pr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pr[i].primaries},getTransfer:function(i){return i===_n?gs:Pr[i].transfer}};function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ms("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qs(r[o].image)):s.push(qs(r[o]))}else s=qs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class dn extends Si{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=bn,r=bn,s=mn,o=yr,a=Tn,l=Jn,c=dn.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Rr(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mi?Vt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?mi:yc}set encoding(e){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?Vt:_n}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=mc;dn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],_=l[9],v=l[2],f=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,L=(m+1)/2,U=(d+1)/2,P=(u+h)/4,y=(p+v)/4,N=(_+f)/4;return M>L&&M>U?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=y/n):L>U?L<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),n=P/r,s=N/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=y/s,r=N/s),this.set(n,r,s,t),this}let T=Math.sqrt((f-_)*(f-_)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(f-_)/T,this.y=(p-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?Vt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cc extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qh extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(p!==v||l!==h||c!==m||u!==_){let f=1-a;const d=l*h+c*m+u*_+p*v,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const U=Math.sqrt(M),P=Math.atan2(U,d*T);f=Math.sin(f*P)/U,a=Math.sin(a*P)/U}const L=a*T;if(l=l*f+h*L,c=c*f+m*L,u=u*f+_*L,p=p*f+v*L,f===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=U,c*=U,u*=U,p*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*p+l*m-c*h,e[t+1]=l*_+u*h+c*p-a*m,e[t+2]=c*_+u*m+a*h-l*p,e[t+3]=u*_-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),p=a(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"YXZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"ZXY":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"ZYX":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"YZX":this._x=h*u*p+c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p-h*m*_;break;case"XZY":this._x=h*u*p-c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*u,this.y=n+l*u+a*c-s*p,this.z=r+l*p+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new V,Qo=new _i;class Cr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Ur.subVectors(this.max,fr),wi.subVectors(e.a,fr),Ri.subVectors(e.b,fr),Ci.subVectors(e.c,fr),Hn.subVectors(Ri,wi),Vn.subVectors(Ci,Ri),ii.subVectors(wi,Ci);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ii.z,ii.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ii.z,0,-ii.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ii.y,ii.x,0];return!js(t,wi,Ri,Ci,Ur)||(t=[1,0,0,0,1,0,0,0,1],!js(t,wi,Ri,Ci,Ur))?!1:(Ir.crossVectors(Hn,Vn),t=[Ir.x,Ir.y,Ir.z],js(t,wi,Ri,Ci,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new V,new V,new V,new V,new V,new V,new V,new V],xn=new V,Dr=new Cr,wi=new V,Ri=new V,Ci=new V,Hn=new V,Vn=new V,ii=new V,fr=new V,Ur=new V,Ir=new V,ri=new V;function js(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ri.fromArray(i,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yh=new Cr,pr=new V,Ks=new V;class ys{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Ks)),this.expandByPoint(pr.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new V,Zs=new V,Nr=new V,Wn=new V,Js=new V,Fr=new V,Qs=new V;class Ba{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zs.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Zs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=Wn.dot(this.direction),l=-Wn.dot(Nr),c=Wn.lengthSq(),u=Math.abs(1-o*o);let p,h,m,_;if(u>0)if(p=o*l-a,h=o*a-l,_=s*u,p>=0)if(h>=-_)if(h<=_){const v=1/u;p*=v,h*=v,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Zs).addScaledVector(Nr,h),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){Js.subVectors(t,e),Fr.subVectors(n,e),Qs.crossVectors(Js,Fr);let o=this.direction.dot(Qs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Fr.crossVectors(Wn,Fr));if(l<0)return null;const c=a*this.direction.dot(Js.cross(Wn));if(c<0||l+c>o)return null;const u=-a*Wn.dot(Qs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,s,o,a,l,c,u,p,h,m,_,v,f){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,p,h,m,_,v,f)}set(e,t,n,r,s,o,a,l,c,u,p,h,m,_,v,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=m,d[7]=_,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*p,_=a*u,v=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*p,_=c*u,v=c*p;t[0]=h+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*p,_=c*u,v=c*p;t[0]=h-v*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*p,_=a*u,v=a*p;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*p,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*p,t[8]=_*p+m,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*p+_,t[10]=h-v*p}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+v,t[5]=o*u,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Kh)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),$n.crossVectors(n,ln),$n.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),$n.crossVectors(n,ln)),$n.normalize(),Or.crossVectors(ln,$n),r[0]=$n.x,r[4]=Or.x,r[8]=ln.x,r[1]=$n.y,r[5]=Or.y,r[9]=ln.y,r[2]=$n.z,r[6]=Or.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],m=n[13],_=n[2],v=n[6],f=n[10],d=n[14],T=n[3],M=n[7],L=n[11],U=n[15],P=r[0],y=r[4],N=r[8],g=r[12],b=r[1],I=r[5],B=r[9],ne=r[13],D=r[2],w=r[6],C=r[10],$=r[14],H=r[3],k=r[7],J=r[11],se=r[15];return s[0]=o*P+a*b+l*D+c*H,s[4]=o*y+a*I+l*w+c*k,s[8]=o*N+a*B+l*C+c*J,s[12]=o*g+a*ne+l*$+c*se,s[1]=u*P+p*b+h*D+m*H,s[5]=u*y+p*I+h*w+m*k,s[9]=u*N+p*B+h*C+m*J,s[13]=u*g+p*ne+h*$+m*se,s[2]=_*P+v*b+f*D+d*H,s[6]=_*y+v*I+f*w+d*k,s[10]=_*N+v*B+f*C+d*J,s[14]=_*g+v*ne+f*$+d*se,s[3]=T*P+M*b+L*D+U*H,s[7]=T*y+M*I+L*w+U*k,s[11]=T*N+M*B+L*C+U*J,s[15]=T*g+M*ne+L*$+U*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],m=e[14],_=e[3],v=e[7],f=e[11],d=e[15];return _*(+s*l*p-r*c*p-s*a*h+n*c*h+r*a*m-n*l*m)+v*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+f*(+t*c*p-t*a*m-s*o*p+n*o*m+s*a*u-n*c*u)+d*(-r*a*u-t*l*p+t*a*h+r*o*p-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],m=e[11],_=e[12],v=e[13],f=e[14],d=e[15],T=p*f*c-v*h*c+v*l*m-a*f*m-p*l*d+a*h*d,M=_*h*c-u*f*c-_*l*m+o*f*m+u*l*d-o*h*d,L=u*v*c-_*p*c+_*a*m-o*v*m-u*a*d+o*p*d,U=_*p*l-u*v*l-_*a*h+o*v*h+u*a*f-o*p*f,P=t*T+n*M+r*L+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/P;return e[0]=T*y,e[1]=(v*h*s-p*f*s-v*r*m+n*f*m+p*r*d-n*h*d)*y,e[2]=(a*f*s-v*l*s+v*r*c-n*f*c-a*r*d+n*l*d)*y,e[3]=(p*l*s-a*h*s-p*r*c+n*h*c+a*r*m-n*l*m)*y,e[4]=M*y,e[5]=(u*f*s-_*h*s+_*r*m-t*f*m-u*r*d+t*h*d)*y,e[6]=(_*l*s-o*f*s-_*r*c+t*f*c+o*r*d-t*l*d)*y,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*y,e[8]=L*y,e[9]=(_*p*s-u*v*s-_*n*m+t*v*m+u*n*d-t*p*d)*y,e[10]=(o*v*s-_*a*s+_*n*c-t*v*c-o*n*d+t*a*d)*y,e[11]=(u*a*s-o*p*s-u*n*c+t*p*c+o*n*m-t*a*m)*y,e[12]=U*y,e[13]=(u*v*r-_*p*r+_*n*h-t*v*h-u*n*f+t*p*f)*y,e[14]=(_*a*r-o*v*r-_*n*l+t*v*l+o*n*f-t*a*f)*y,e[15]=(o*p*r-u*a*r+u*n*l-t*p*l-o*n*h+t*a*h)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,p=a+a,h=s*c,m=s*u,_=s*p,v=o*u,f=o*p,d=a*p,T=l*c,M=l*u,L=l*p,U=n.x,P=n.y,y=n.z;return r[0]=(1-(v+d))*U,r[1]=(m+L)*U,r[2]=(_-M)*U,r[3]=0,r[4]=(m-L)*P,r[5]=(1-(h+d))*P,r[6]=(f+T)*P,r[7]=0,r[8]=(_+M)*y,r[9]=(f-T)*y,r[10]=(1-(h+v))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),a=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,p=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=p,Mn.elements[9]*=p,Mn.elements[10]*=p,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=zn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(a===zn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xs)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=zn){const l=this.elements,c=1/(t-e),u=1/(n-r),p=1/(o-s),h=(t+e)*c,m=(n+r)*u;let _,v;if(a===zn)_=(o+s)*p,v=-2*p;else if(a===xs)_=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new V,Mn=new Ut,jh=new V(0,0,0),Kh=new V(1,1,1),$n=new V,Or=new V,ln=new V,el=new Ut,tl=new _i;class bs{constructor(e=0,t=0,n=0,r=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const nl=new V,Pi=new _i,In=new Ut,Br=new V,mr=new V,Jh=new V,Qh=new _i,il=new V(1,0,0),rl=new V(0,1,0),sl=new V(0,0,1),ef={type:"added"},tf={type:"removed"};class Wt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new V,t=new bs,n=new _i,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(mr,Br,this.up):In.lookAt(Br,mr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(In),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new V(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new V,Nn=new V,ea=new V,Fn=new V,Di=new V,Ui=new V,al=new V,ta=new V,na=new V,ia=new V;let zr=!1;class yn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Sn.subVectors(r,t),Nn.subVectors(n,t),ea.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Nn),l=Sn.dot(ea),c=Nn.dot(Nn),u=Nn.dot(ea),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,r,s,o,a,l){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Nn.subVectors(e,t),Sn.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Sn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Di.subVectors(r,n),Ui.subVectors(s,n),ta.subVectors(e,n);const l=Di.dot(ta),c=Ui.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,r);const u=Di.dot(na),p=Ui.dot(na);if(u>=0&&p<=u)return t.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Di,o);ia.subVectors(e,s);const m=Di.dot(ia),_=Ui.dot(ia);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ui,a);const f=u*_-m*p;if(f<=0&&p-u>=0&&m-_>=0)return al.subVectors(s,r),a=(p-u)/(p-u+(m-_)),t.copy(r).addScaledVector(al,a);const d=1/(f+v+h);return o=v*d,a=h*d,t.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=kh(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(en(Yt.r*255,0,255))*65536+Math.round(en(Yt.g*255,0,255))*256+Math.round(en(Yt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Vt){gt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(kr);const n=Ws(Xn.h,kr.h,t),r=Ws(Xn.s,kr.s,t),s=Ws(Xn.l,kr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new at;at.NAMES=Pc;let nf=0;class sr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Ki,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xr extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new V,Gr=new Ke;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Dc extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const pn=new Ut,sa=new Wt,Ii=new V,cn=new Cr,gr=new Cr,kt=new V;class on extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Uc:Dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,gr.min),cn.expandByPoint(kt),kt.addVectors(cn.max,gr.max),cn.expandByPoint(kt)):(cn.expandByPoint(gr.min),cn.expandByPoint(gr.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(e,c),kt.add(Ii)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new V,u[b]=new V;const p=new V,h=new V,m=new V,_=new Ke,v=new Ke,f=new Ke,d=new V,T=new V;function M(b,I,B){p.fromArray(r,b*3),h.fromArray(r,I*3),m.fromArray(r,B*3),_.fromArray(o,b*2),v.fromArray(o,I*2),f.fromArray(o,B*2),h.sub(p),m.sub(p),v.sub(_),f.sub(_);const ne=1/(v.x*f.y-f.x*v.y);isFinite(ne)&&(d.copy(h).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(ne),T.copy(m).multiplyScalar(v.x).addScaledVector(h,-f.x).multiplyScalar(ne),c[b].add(d),c[I].add(d),c[B].add(d),u[b].add(T),u[I].add(T),u[B].add(T))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let b=0,I=L.length;b<I;++b){const B=L[b],ne=B.start,D=B.count;for(let w=ne,C=ne+D;w<C;w+=3)M(n[w+0],n[w+1],n[w+2])}const U=new V,P=new V,y=new V,N=new V;function g(b){y.fromArray(s,b*3),N.copy(y);const I=c[b];U.copy(I),U.sub(y.multiplyScalar(y.dot(I))).normalize(),P.crossVectors(N,I);const ne=P.dot(u[b])<0?-1:1;l[b*4]=U.x,l[b*4+1]=U.y,l[b*4+2]=U.z,l[b*4+3]=ne}for(let b=0,I=L.length;b<I;++b){const B=L[b],ne=B.start,D=B.count;for(let w=ne,C=ne+D;w<C;w+=3)g(n[w+0]),g(n[w+1]),g(n[w+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,p=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new An(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new Ut,si=new Ba,Hr=new ys,ll=new V,Ni=new V,Fi=new V,Oi=new V,aa=new V,Vr=new V,Wr=new Ke,$r=new Ke,Xr=new Ke,cl=new V,ul=new V,dl=new V,qr=new V,Yr=new V;class Qt extends Wt{constructor(e=new on,t=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],p=s[l];u!==0&&(aa.fromBufferAttribute(p,e),o?Vr.addScaledVector(aa,u):Vr.addScaledVector(aa.sub(t),u))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Hr.containsPoint(si.origin)===!1&&(si.intersectSphere(Hr,ll)===null||si.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(ol.copy(s).invert(),si.copy(e.ray).applyMatrix4(ol),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const f=h[_],d=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let L=T,U=M;L<U;L+=3){const P=a.getX(L),y=a.getX(L+1),N=a.getX(L+2);r=jr(this,d,e,n,c,u,p,P,y,N),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=_,d=v;f<d;f+=3){const T=a.getX(f),M=a.getX(f+1),L=a.getX(f+2);r=jr(this,o,e,n,c,u,p,T,M,L),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const f=h[_],d=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let L=T,U=M;L<U;L+=3){const P=L,y=L+1,N=L+2;r=jr(this,d,e,n,c,u,p,P,y,N),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,d=v;f<d;f+=3){const T=f,M=f+1,L=f+2;r=jr(this,o,e,n,c,u,p,T,M,L),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function sf(i,e,t,n,r,s,o,a){let l;if(e.side===an?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Qn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:i}}function jr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ni),i.getVertexPosition(l,Fi),i.getVertexPosition(c,Oi);const u=sf(i,e,t,n,Ni,Fi,Oi,qr);if(u){r&&(Wr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Xr.fromBufferAttribute(r,c),u.uv=yn.getInterpolation(qr,Ni,Fi,Oi,Wr,$r,Xr,new Ke)),s&&(Wr.fromBufferAttribute(s,a),$r.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,c),u.uv1=yn.getInterpolation(qr,Ni,Fi,Oi,Wr,$r,Xr,new Ke),u.uv2=u.uv1),o&&(cl.fromBufferAttribute(o,a),ul.fromBufferAttribute(o,l),dl.fromBufferAttribute(o,c),u.normal=yn.getInterpolation(qr,Ni,Fi,Oi,cl,ul,dl,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new V,materialIndex:0};yn.getNormal(Ni,Fi,Oi,p.normal),u.face=p}return u}class ar extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(p,2));function _(v,f,d,T,M,L,U,P,y,N,g){const b=L/y,I=U/N,B=L/2,ne=U/2,D=P/2,w=y+1,C=N+1;let $=0,H=0;const k=new V;for(let J=0;J<C;J++){const se=J*I-ne;for(let ge=0;ge<w;ge++){const q=ge*b-B;k[v]=q*T,k[f]=se*M,k[d]=D,c.push(k.x,k.y,k.z),k[v]=0,k[f]=0,k[d]=P>0?1:-1,u.push(k.x,k.y,k.z),p.push(ge/y),p.push(1-J/N),$+=1}}for(let J=0;J<N;J++)for(let se=0;se<y;se++){const ge=h+se+w*J,q=h+se+w*(J+1),ce=h+(se+1)+w*(J+1),Se=h+(se+1)+w*J;l.push(ge,q,Se),l.push(q,ce,Se),H+=6}a.addGroup(m,H,g),m+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const r in n)e[r]=n[r]}return e}function af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){return i.getRenderTarget()===null?i.outputColorSpace:gt.workingColorSpace}const of={clone:nr,merge:Zt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nc extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends Nc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class uf extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Bi,zi,e,t);r.layers=this.layers,this.add(r);const s=new gn(Bi,zi,e,t);s.layers=this.layers,this.add(s);const o=new gn(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new gn(Bi,zi,e,t);a.layers=this.layers,this.add(a);const l=new gn(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new gn(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Fc extends dn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class df extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?Vt:_n),this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Qt(r,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=mn),new uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const oa=new V,hf=new V,ff=new rt;class qn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=oa.subVectors(n,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ff.getNormalMatrix(e),r=this.coplanarPoint(oa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new ys,Kr=new V;class za{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,o=new qn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],p=r[6],h=r[7],m=r[8],_=r[9],v=r[10],f=r[11],d=r[12],T=r[13],M=r[14],L=r[15];if(n[0].setComponents(l-s,h-c,f-m,L-d).normalize(),n[1].setComponents(l+s,h+c,f+m,L+d).normalize(),n[2].setComponents(l+o,h+u,f+_,L+T).normalize(),n[3].setComponents(l-o,h-u,f-_,L-T).normalize(),n[4].setComponents(l-a,h-p,f-v,L-M).normalize(),t===zn)n[5].setComponents(l+a,h+p,f+v,L+M).normalize();else if(t===xs)n[5].setComponents(a,p,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const p=c.array,h=c.usage,m=p.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,p,h),c.onUploadCallback();let v;if(p instanceof Float32Array)v=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=i.SHORT;else if(p instanceof Uint32Array)v=i.UNSIGNED_INT;else if(p instanceof Int32Array)v=i.INT;else if(p instanceof Int8Array)v=i.BYTE;else if(p instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,p){const h=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(p,c),m.count===-1&&_.length===0&&i.bufferSubData(p,0,h),_.length!==0){for(let v=0,f=_.length;v<f;v++){const d=_[v];t?i.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);if(p===void 0)n.set(c,r(c,u));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,u),p.version=c.version}}return{get:o,remove:a,update:l}}class ka extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,p=e/a,h=t/l,m=[],_=[],v=[],f=[];for(let d=0;d<u;d++){const T=d*h-o;for(let M=0;M<c;M++){const L=M*p-s;_.push(L,-T,0),v.push(0,0,1),f.push(M/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const M=T+c*d,L=T+c*(d+1),U=T+1+c*(d+1),P=T+1+c*d;m.push(M,L,P),m.push(L,U,P)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:xf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:yf,batching_vertex:bf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:wf,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:If,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Hf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:$f,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:lp,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:rp,lights_lambert_fragment:sp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:hp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:Ep,map_pars_fragment:yp,map_particle_fragment:bp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:wp,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Pp,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Ip,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Gp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:$p,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:rm,specularmap_pars_fragment:sm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:hm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:vm,cube_frag:xm,depth_vert:Mm,depth_frag:Sm,distanceRGBA_vert:Em,distanceRGBA_frag:ym,equirect_vert:bm,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:wm,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Lm,meshlambert_frag:Pm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Im,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:zm,meshtoon_vert:km,meshtoon_frag:Gm,points_vert:Hm,points_frag:Vm,shadow_vert:Wm,shadow_frag:$m,sprite_vert:Xm,sprite_frag:qm},we={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Rn={basic:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Zt([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Zt([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Zt([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Zt([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Zt([we.lights,we.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Rn.physical={uniforms:Zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Zr={r:0,b:0,g:0};function Ym(i,e,t,n,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,p=null,h=0,m=null;function _(f,d){let T=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),T=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ss)?(u===void 0&&(u=new Qt(new ar(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:nr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=gt.getTransfer(M.colorSpace)!==Mt,(p!==M||h!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,h=M.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qt(new ka(2,2),new vi({name:"BackgroundMaterial",uniforms:nr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=gt.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,d){f.getRGB(Zr,Ic(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:_}}function jm(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function p(D,w,C,$,H){let k=!1;if(o){const J=v($,C,w);c!==J&&(c=J,m(c.object)),k=d(D,$,C,H),k&&T(D,$,C,H)}else{const J=w.wireframe===!0;(c.geometry!==$.id||c.program!==C.id||c.wireframe!==J)&&(c.geometry=$.id,c.program=C.id,c.wireframe=J,k=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,N(D,w,C,$),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,w,C){const $=C.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let k=H[w.id];k===void 0&&(k={},H[w.id]=k);let J=k[$];return J===void 0&&(J=f(h()),k[$]=J),J}function f(D){const w=[],C=[],$=[];for(let H=0;H<r;H++)w[H]=0,C[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:$,object:D,attributes:{},index:null}}function d(D,w,C,$){const H=c.attributes,k=w.attributes;let J=0;const se=C.getAttributes();for(const ge in se)if(se[ge].location>=0){const ce=H[ge];let Se=k[ge];if(Se===void 0&&(ge==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ge==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;J++}return c.attributesNum!==J||c.index!==$}function T(D,w,C,$){const H={},k=w.attributes;let J=0;const se=C.getAttributes();for(const ge in se)if(se[ge].location>=0){let ce=k[ge];ce===void 0&&(ge==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),ge==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),H[ge]=Se,J++}c.attributes=H,c.attributesNum=J,c.index=$}function M(){const D=c.newAttributes;for(let w=0,C=D.length;w<C;w++)D[w]=0}function L(D){U(D,0)}function U(D,w){const C=c.newAttributes,$=c.enabledAttributes,H=c.attributeDivisors;C[D]=1,$[D]===0&&(i.enableVertexAttribArray(D),$[D]=1),H[D]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,w),H[D]=w)}function P(){const D=c.newAttributes,w=c.enabledAttributes;for(let C=0,$=w.length;C<$;C++)w[C]!==D[C]&&(i.disableVertexAttribArray(C),w[C]=0)}function y(D,w,C,$,H,k,J){J===!0?i.vertexAttribIPointer(D,w,C,H,k):i.vertexAttribPointer(D,w,C,$,H,k)}function N(D,w,C,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const H=$.attributes,k=C.getAttributes(),J=w.defaultAttributeValues;for(const se in k){const ge=k[se];if(ge.location>=0){let q=H[se];if(q===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const ce=q.normalized,Se=q.itemSize,Le=t.get(q);if(Le===void 0)continue;const Ee=Le.buffer,Fe=Le.type,Re=Le.bytesPerElement,Ue=n.isWebGL2===!0&&(Fe===i.INT||Fe===i.UNSIGNED_INT||q.gpuType===gc);if(q.isInterleavedBufferAttribute){const _e=q.data,F=_e.stride,Ge=q.offset;if(_e.isInstancedInterleavedBuffer){for(let ee=0;ee<ge.locationSize;ee++)U(ge.location+ee,_e.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ee=0;ee<ge.locationSize;ee++)L(ge.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ee=0;ee<ge.locationSize;ee++)y(ge.location+ee,Se/ge.locationSize,Fe,ce,F*Re,(Ge+Se/ge.locationSize*ee)*Re,Ue)}else{if(q.isInstancedBufferAttribute){for(let _e=0;_e<ge.locationSize;_e++)U(ge.location+_e,q.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let _e=0;_e<ge.locationSize;_e++)L(ge.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let _e=0;_e<ge.locationSize;_e++)y(ge.location+_e,Se/ge.locationSize,Fe,ce,Se*Re,Se/ge.locationSize*_e*Re,Ue)}}else if(J!==void 0){const ce=J[se];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ge.location,ce);break;case 3:i.vertexAttrib3fv(ge.location,ce);break;case 4:i.vertexAttrib4fv(ge.location,ce);break;default:i.vertexAttrib1fv(ge.location,ce)}}}}P()}function g(){B();for(const D in a){const w=a[D];for(const C in w){const $=w[C];for(const H in $)_($[H].object),delete $[H];delete w[C]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const w=a[D.id];for(const C in w){const $=w[C];for(const H in $)_($[H].object),delete $[H];delete w[C]}delete a[D.id]}function I(D){for(const w in a){const C=a[w];if(C[D.id]===void 0)continue;const $=C[D.id];for(const H in $)_($[H].object),delete $[H];delete C[D.id]}}function B(){ne(),u=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:ne,dispose:g,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:L,disableUnusedAttributes:P}}function Km(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,p){i.drawArrays(s,u,p),t.update(p,s,1)}function l(u,p,h){if(h===0)return;let m,_;if(r)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,p,h),t.update(p,s,h)}function c(u,p,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(u[_],p[_]);else{m.multiDrawArraysWEBGL(s,u,0,p,0,h);let _=0;for(let v=0;v<h;v++)_+=p[v];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Zm(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,L=o||e.has("OES_texture_float"),U=M&&L,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:L,floatVertexTextures:U,maxSamples:P}}function Jm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new qn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||r;return r=h,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!r||_===null||_.length===0||s&&!f)s?u(null):c();else{const T=s?0:n,M=T*4;let L=d.clippingState||null;l.value=L,L=u(_,h,M,m);for(let U=0;U!==M;++U)L[U]=t[U];d.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,m,_){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const d=m+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<d)&&(f=new Float32Array(d));for(let M=0,L=m;M!==v;++M,L+=4)o.copy(p[M]).applyMatrix4(T,a),o.normal.toArray(f,L),f[L+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Qm(i){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=Qi:a===ya&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===ya)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new df(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bc extends Nc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,hl=[.125,.215,.35,.446,.526,.582],ci=20,la=new Bc,fl=new at;let ca=null,ua=0,da=0;const oi=(1+Math.sqrt(5))/2,ki=1/oi,pl=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,oi,ki),new V(0,oi,-ki),new V(ki,0,oi),new V(-ki,0,oi),new V(oi,ki,0),new V(-oi,ki,0)];class ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ua,da),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:br,format:Tn,colorSpace:kn,depthBuffer:!1},r=gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(s)),this._blurMaterial=tg(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,r){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(fl),u.toneMapping=Zn,u.autoClear=!1;const m=new xr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Qt(new ar,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(fl),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Jr(r,T*M,d>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pl[(r-1)%pl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Qt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ci-1),v=s/_,f=isFinite(s)?1+Math.floor(u*v):ci;f>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ci}`);const d=[];let T=0;for(let y=0;y<ci;++y){const N=y/v,g=Math.exp(-N*N/2);d.push(g),y===0?T+=g:y<f&&(T+=2*g)}for(let y=0;y<d.length;y++)d[y]=d[y]/T;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const L=this._sizeLods[r],U=3*L*(r>M-Wi?r-M+Wi:0),P=4*(this._cubeSize-L);Jr(t,U,P,3*L,2*L),l.setRenderTarget(t),l.render(p,la)}}function eg(i){const e=[],t=[],n=[];let r=i;const s=i-Wi+1+hl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Wi?l=hl[o-i+Wi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,_=6,v=3,f=2,d=1,T=new Float32Array(v*_*m),M=new Float32Array(f*_*m),L=new Float32Array(d*_*m);for(let P=0;P<m;P++){const y=P%3*2/3-1,N=P>2?0:-1,g=[y,N,0,y+2/3,N,0,y+2/3,N+1,0,y,N,0,y+2/3,N+1,0,y,N+1,0];T.set(g,v*_*P),M.set(h,f*_*P);const b=[P,P,P,P,P,P];L.set(b,d*_*P)}const U=new on;U.setAttribute("position",new An(T,v)),U.setAttribute("uv",new An(M,f)),U.setAttribute("faceIndex",new An(L,d)),e.push(U),r>Wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gl(i,e,t){const n=new gi(i,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tg(i,e,t){const n=new Float32Array(ci),r=new V(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function _l(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function vl(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===ya,u=l===Qi||l===er;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new ml(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new ml(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ig(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rg(i,e,t,n){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let f=0,d=v.length;f<d;f++)e.remove(v[f])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,d=v.length;f<d;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,_=p.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let M=0,L=T.length;M<L;M+=3){const U=T[M+0],P=T[M+1],y=T[M+2];h.push(U,P,P,y,y,U)}}else if(_!==void 0){const T=_.array;v=_.version;for(let M=0,L=T.length/3-1;M<L;M+=3){const U=M+0,P=M+1,y=M+2;h.push(U,P,P,y,y,U)}}else return;const f=new(Ac(h)?Uc:Dc)(h,1);f.version=v;const d=s.get(p);d&&e.remove(d),s.set(p,f)}function u(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function sg(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(s,_,a,m*l),t.update(_,s,1)}function p(m,_,v){if(v===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,_,a,m*l,v),t.update(_,s,v)}function h(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<v;d++)this.render(m[d]/l,_[d]);else{f.multiDrawElementsWEBGL(s,_,0,a,m,0,v);let d=0;for(let T=0;T<v;T++)d+=_[T];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=p,this.renderMultiDraw=h}function ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function og(i,e){return i[0]-e[0]}function lg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let D=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let N=0;T===!0&&(N=1),M===!0&&(N=2),L===!0&&(N=3);let g=u.attributes.position.count*N,b=1;g>e.maxTextureSize&&(b=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const I=new Float32Array(g*b*4*_),B=new Cc(I,g,b,_);B.type=jn,B.needsUpdate=!0;const ne=N*4;for(let w=0;w<_;w++){const C=U[w],$=P[w],H=y[w],k=g*b*4*w;for(let J=0;J<C.count;J++){const se=J*ne;T===!0&&(o.fromBufferAttribute(C,J),I[k+se+0]=o.x,I[k+se+1]=o.y,I[k+se+2]=o.z,I[k+se+3]=0),M===!0&&(o.fromBufferAttribute($,J),I[k+se+4]=o.x,I[k+se+5]=o.y,I[k+se+6]=o.z,I[k+se+7]=0),L===!0&&(o.fromBufferAttribute(H,J),I[k+se+8]=o.x,I[k+se+9]=o.y,I[k+se+10]=o.z,I[k+se+11]=H.itemSize===4?o.w:1)}}v={count:_,texture:B,size:new Ke(g,b)},s.set(u,v),u.addEventListener("dispose",D)}let f=0;for(let T=0;T<h.length;T++)f+=h[T];const d=u.morphTargetsRelative?1:1-f;p.getUniforms().setValue(i,"morphTargetBaseInfluence",d),p.getUniforms().setValue(i,"morphTargetInfluences",h),p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<m;M++){const L=_[M];L[0]=M,L[1]=h[M]}_.sort(lg);for(let M=0;M<8;M++)M<m&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(og);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let d=0;for(let M=0;M<8;M++){const L=a[M],U=L[0],P=L[1];U!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+M)!==v[U]&&u.setAttribute("morphTarget"+M,v[U]),f&&u.getAttribute("morphNormal"+M)!==f[U]&&u.setAttribute("morphNormal"+M,f[U]),r[M]=P,d+=P):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const T=u.morphTargetsRelative?1:1-d;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ug(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class zc extends dn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=Yn),n===void 0&&u===tr&&(n=fi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kc=new dn,Gc=new zc(1,1);Gc.compareFunction=Tc;const Hc=new Cc,Vc=new qh,Wc=new Fc,xl=[],Ml=[],Sl=new Float32Array(16),El=new Float32Array(9),yl=new Float32Array(4);function or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xl[r];if(s===void 0&&(s=new Float32Array(r),xl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ts(i,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;yl.set(n),i.uniformMatrix2fv(this.addr,!1,yl),Bt(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;El.set(n),i.uniformMatrix3fv(this.addr,!1,El),Bt(t,n)}}function _g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),Bt(t,n)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function Ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Gc:kc;t.setTexture2D(e||s,r)}function wg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vc,r)}function Rg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function Cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hc,r)}function Lg(i){switch(i){case 5126:return dg;case 35664:return hg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return yg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){const t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function Ug(i,e){const t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function Ig(i,e){const t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function Ng(i,e){const t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fg(i,e){const t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Og(i,e){const t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function kg(i,e){i.uniform3iv(this.addr,e)}function Gg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Vg(i,e){i.uniform2uiv(this.addr,e)}function Wg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){const n=this.cache,r=e.length,s=Ts(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kc,s[o])}function qg(i,e,t){const n=this.cache,r=e.length,s=Ts(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vc,s[o])}function Yg(i,e,t){const n=this.cache,r=e.length,s=Ts(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wc,s[o])}function jg(i,e,t){const n=this.cache,r=e.length,s=Ts(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hc,s[o])}function Kg(i){switch(i){case 5126:return Pg;case 35664:return Dg;case 35665:return Ug;case 35666:return Ig;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Gg;case 5125:return Hg;case 36294:return Vg;case 36295:return Wg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lg(t.type)}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class Qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function bl(i,e){i.seq.push(e),i.map[e.id]=e}function e_(i,e,t){const n=i.name,r=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),o=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bl(t,c===void 0?new Zg(a,i,e):new Jg(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Qg(a),bl(t,p)),t=p}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);e_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const t_=37297;let n_=0;function i_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function r_(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===vs&&t===_s?n="LinearDisplayP3ToLinearSRGB":e===_s&&t===vs&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case Es:return[n,"LinearTransferOETF"];case Vt:case Oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Al(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+i_(i.getShaderSource(e),o)}else return r}function s_(i,e){const t=r_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function a_(i,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="OptimizedCineon";break;case pc:t="ACESFilmic";break;case Mh:t="AgX";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function o_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($i).join(`
`)}function c_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $i(i){return i!==""}function wl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(d_,f_)}const h_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f_(i,e){let t=tt[e];if(t===void 0){const n=h_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(p_,m_)}function m_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ll(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function __(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function M_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=g_(t),c=__(t),u=v_(t),p=x_(t),h=M_(t),m=t.isWebGL2?"":o_(t),_=l_(t),v=c_(s),f=r.createProgram();let d,T,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($i).join(`
`),d.length>0&&(d+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($i).join(`
`),T.length>0&&(T+=`
`)):(d=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),T=[m,Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?a_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=Ca(o),o=wl(o,t),o=Rl(o,t),a=Ca(a),a=wl(a,t),a=Rl(a,t),o=Cl(o),a=Cl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const L=M+d+o,U=M+T+a,P=Tl(r,r.VERTEX_SHADER,L),y=Tl(r,r.FRAGMENT_SHADER,U);r.attachShader(f,P),r.attachShader(f,y),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function N(B){if(i.debug.checkShaderErrors){const ne=r.getProgramInfoLog(f).trim(),D=r.getShaderInfoLog(P).trim(),w=r.getShaderInfoLog(y).trim();let C=!0,$=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,P,y);else{const H=Al(r,P,"vertex"),k=Al(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+H+`
`+k)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(D===""||w==="")&&($=!1);$&&(B.diagnostics={runnable:C,programLog:ne,vertexShader:{log:D,prefix:d},fragmentShader:{log:w,prefix:T}})}r.deleteShader(P),r.deleteShader(y),g=new ls(r,f),b=u_(r,f)}let g;this.getUniforms=function(){return g===void 0&&N(this),g};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(f,t_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=y,this}let E_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b_(e),t.set(e,n)),n}}class b_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function T_(i,e,t,n,r,s,o){const a=new Lc,l=new y_,c=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return g===0?"uv":`uv${g}`}function f(g,b,I,B,ne){const D=B.fog,w=ne.geometry,C=g.isMeshStandardMaterial?B.environment:null,$=(g.isMeshStandardMaterial?t:e).get(g.envMap||C),H=$&&$.mapping===Ss?$.image.height:null,k=_[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const J=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,se=J!==void 0?J.length:0;let ge=0;w.morphAttributes.position!==void 0&&(ge=1),w.morphAttributes.normal!==void 0&&(ge=2),w.morphAttributes.color!==void 0&&(ge=3);let q,ce,Se,Le;if(k){const ht=Rn[k];q=ht.vertexShader,ce=ht.fragmentShader}else q=g.vertexShader,ce=g.fragmentShader,l.update(g),Se=l.getVertexShaderID(g),Le=l.getFragmentShaderID(g);const Ee=i.getRenderTarget(),Fe=ne.isInstancedMesh===!0,Re=ne.isBatchedMesh===!0,Ue=!!g.map,_e=!!g.matcap,F=!!$,Ge=!!g.aoMap,ee=!!g.lightMap,pe=!!g.bumpMap,he=!!g.normalMap,De=!!g.displacementMap,re=!!g.emissiveMap,S=!!g.metalnessMap,x=!!g.roughnessMap,O=g.anisotropy>0,le=g.clearcoat>0,ue=g.iridescence>0,de=g.sheen>0,Te=g.transmission>0,Me=O&&!!g.anisotropyMap,ye=le&&!!g.clearcoatMap,Ie=le&&!!g.clearcoatNormalMap,ze=le&&!!g.clearcoatRoughnessMap,fe=ue&&!!g.iridescenceMap,qe=ue&&!!g.iridescenceThicknessMap,He=de&&!!g.sheenColorMap,Be=de&&!!g.sheenRoughnessMap,Ne=!!g.specularMap,xe=!!g.specularColorMap,A=!!g.specularIntensityMap,Y=Te&&!!g.transmissionMap,Q=Te&&!!g.thicknessMap,oe=!!g.gradientMap,K=!!g.alphaMap,R=g.alphaTest>0,ae=!!g.alphaHash,me=!!g.extensions,be=!!w.attributes.uv1,Pe=!!w.attributes.uv2,We=!!w.attributes.uv3;let $e=Zn;return g.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:u,shaderID:k,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:ce,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:Le,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Re,instancing:Fe,instancingColor:Fe&&ne.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:kn,map:Ue,matcap:_e,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:H,aoMap:Ge,lightMap:ee,bumpMap:pe,normalMap:he,displacementMap:h&&De,emissiveMap:re,normalMapObjectSpace:he&&g.normalMapType===Dh,normalMapTangentSpace:he&&g.normalMapType===bc,metalnessMap:S,roughnessMap:x,anisotropy:O,anisotropyMap:Me,clearcoat:le,clearcoatMap:ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ze,iridescence:ue,iridescenceMap:fe,iridescenceThicknessMap:qe,sheen:de,sheenColorMap:He,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:xe,specularIntensityMap:A,transmission:Te,transmissionMap:Y,thicknessMap:Q,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Ki,alphaMap:K,alphaTest:R,alphaHash:ae,combine:g.combine,mapUv:Ue&&v(g.map.channel),aoMapUv:Ge&&v(g.aoMap.channel),lightMapUv:ee&&v(g.lightMap.channel),bumpMapUv:pe&&v(g.bumpMap.channel),normalMapUv:he&&v(g.normalMap.channel),displacementMapUv:De&&v(g.displacementMap.channel),emissiveMapUv:re&&v(g.emissiveMap.channel),metalnessMapUv:S&&v(g.metalnessMap.channel),roughnessMapUv:x&&v(g.roughnessMap.channel),anisotropyMapUv:Me&&v(g.anisotropyMap.channel),clearcoatMapUv:ye&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(g.sheenRoughnessMap.channel),specularMapUv:Ne&&v(g.specularMap.channel),specularColorMapUv:xe&&v(g.specularColorMap.channel),specularIntensityMapUv:A&&v(g.specularIntensityMap.channel),transmissionMapUv:Y&&v(g.transmissionMap.channel),thicknessMapUv:Q&&v(g.thicknessMap.channel),alphaMapUv:K&&v(g.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(he||O),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Pe,vertexUv3s:We,pointsUvs:ne.isPoints===!0&&!!w.attributes.uv&&(Ue||K),fog:!!D,useFog:g.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ne.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&gt.getTransfer(g.map.colorSpace)===Mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bn,flipSided:g.side===an,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:me&&g.extensions.derivatives===!0,extensionFragDepth:me&&g.extensions.fragDepth===!0,extensionDrawBuffers:me&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)b.push(I),b.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(T(b,g),M(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function T(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function L(g){const b=_[g.type];let I;if(b){const B=Rn[b];I=of.clone(B.uniforms)}else I=g.uniforms;return I}function U(g,b){let I;for(let B=0,ne=c.length;B<ne;B++){const D=c[B];if(D.cacheKey===b){I=D,++I.usedTimes;break}}return I===void 0&&(I=new S_(i,b,g,s),c.push(I)),I}function P(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),g.destroy()}}function y(g){l.remove(g)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:L,acquireProgram:U,releaseProgram:P,releaseShaderCache:y,programs:c,dispose:N}}function A_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function w_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,h,m,_,v,f){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:v,group:f},i[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=v,d.group=f),e++,d}function a(p,h,m,_,v,f){const d=o(p,h,m,_,v,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(p,h,m,_,v,f){const d=o(p,h,m,_,v,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(p,h){t.length>1&&t.sort(p||w_),n.length>1&&n.sort(h||Pl),r.length>1&&r.sort(h||Pl)}function u(){for(let p=e,h=i.length;p<h;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function R_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Dl,i.set(n,[o])):r>=s.length?(o=new Dl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function C_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new at};break;case"SpotLight":t={position:new V,direction:new V,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function L_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let P_=0;function D_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U_(i,e){const t=new C_,n=L_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new Ut,a=new Ut;function l(u,p){let h=0,m=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let v=0,f=0,d=0,T=0,M=0,L=0,U=0,P=0,y=0,N=0,g=0;u.sort(D_);const b=p===!0?Math.PI:1;for(let B=0,ne=u.length;B<ne;B++){const D=u[B],w=D.color,C=D.intensity,$=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=w.r*C*b,m+=w.g*C*b,_+=w.b*C*b;else if(D.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],C);g++}else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const J=D.shadow,se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,r.directionalShadow[v]=se,r.directionalShadowMap[v]=H,r.directionalShadowMatrix[v]=D.shadow.matrix,L++}r.directional[v]=k,v++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(w).multiplyScalar(C*b),k.distance=$,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[d]=k;const J=D.shadow;if(D.map&&(r.spotLightMap[y]=D.map,y++,J.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[d]=J.matrix,D.castShadow){const se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,r.spotShadow[d]=se,r.spotShadowMap[d]=H,P++}d++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(w).multiplyScalar(C),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=k,T++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*b),k.distance=D.distance,k.decay=D.decay,D.castShadow){const J=D.shadow,se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,se.shadowCameraNear=J.camera.near,se.shadowCameraFar=J.camera.far,r.pointShadow[f]=se,r.pointShadowMap[f]=H,r.pointShadowMatrix[f]=D.shadow.matrix,U++}r.point[f]=k,f++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(C*b),k.groundColor.copy(D.groundColor).multiplyScalar(C*b),r.hemi[M]=k,M++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==v||I.pointLength!==f||I.spotLength!==d||I.rectAreaLength!==T||I.hemiLength!==M||I.numDirectionalShadows!==L||I.numPointShadows!==U||I.numSpotShadows!==P||I.numSpotMaps!==y||I.numLightProbes!==g)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=T,r.point.length=f,r.hemi.length=M,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+y-N,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=g,I.directionalLength=v,I.pointLength=f,I.spotLength=d,I.rectAreaLength=T,I.hemiLength=M,I.numDirectionalShadows=L,I.numPointShadows=U,I.numSpotShadows=P,I.numSpotMaps=y,I.numLightProbes=g,r.version=P_++)}function c(u,p){let h=0,m=0,_=0,v=0,f=0;const d=p.matrixWorldInverse;for(let T=0,M=u.length;T<M;T++){const L=u[T];if(L.isDirectionalLight){const U=r.directional[h];U.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),h++}else if(L.isSpotLight){const U=r.spot[_];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(d),U.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),_++}else if(L.isRectAreaLight){const U=r.rectArea[v];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(d),a.identity(),o.copy(L.matrixWorld),o.premultiply(d),a.extractRotation(o),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),v++}else if(L.isPointLight){const U=r.point[m];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(d),m++}else if(L.isHemisphereLight){const U=r.hemi[f];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:r}}function Ul(i,e){const t=new U_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(p){n.push(p)}function a(p){r.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ul(i,e),t.set(s,[l])):o>=a.length?(l=new Ul(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class N_ extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F_ extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z_(i,e,t){let n=new za;const r=new Ke,s=new Ke,o=new Gt,a=new N_({depthPacking:Ph}),l=new F_,c={},u=t.maxTextureSize,p={[Qn]:an,[an]:Qn,[Bn]:Bn},h=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:O_,fragmentShader:B_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(P,y,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const g=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ne=d!==On&&this.type===On,D=d===On&&this.type!==On;for(let w=0,C=P.length;w<C;w++){const $=P[w],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const k=H.getFrameExtents();if(r.multiply(k),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,H.mapSize.y=s.y)),H.map===null||ne===!0||D===!0){const se=this.type!==On?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new gi(r.x,r.y,se),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const J=H.getViewportCount();for(let se=0;se<J;se++){const ge=H.getViewport(se);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),B.viewport(o),H.updateMatrices($,se),n=H.getFrustum(),L(y,N,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===On&&T(H,N),H.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(g,b,I)};function T(P,y){const N=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(y,null,N,h,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(y,null,N,m,v,null)}function M(P,y,N,g){let b=null;const I=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)b=I;else if(b=N.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=b.uuid,ne=y.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let w=D[ne];w===void 0&&(w=b.clone(),D[ne]=w,y.addEventListener("dispose",U)),b=w}if(b.visible=y.visible,b.wireframe=y.wireframe,g===On?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:p[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=N}return b}function L(P,y,N,g,b){if(P.visible===!1)return;if(P.layers.test(y.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===On)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),D=P.material;if(Array.isArray(D)){const w=ne.groups;for(let C=0,$=w.length;C<$;C++){const H=w[C],k=D[H.materialIndex];if(k&&k.visible){const J=M(P,k,g,b);P.onBeforeShadow(i,P,y,N,ne,J,H),i.renderBufferDirect(N,null,ne,J,P,H),P.onAfterShadow(i,P,y,N,ne,J,H)}}}else if(D.visible){const w=M(P,D,g,b);P.onBeforeShadow(i,P,y,N,ne,w,null),i.renderBufferDirect(N,null,ne,w,P,null),P.onAfterShadow(i,P,y,N,ne,w,null)}}const B=P.children;for(let ne=0,D=B.length;ne<D;ne++)L(B[ne],y,N,g,b)}function U(P){P.target.removeEventListener("dispose",U);for(const N in c){const g=c[N],b=P.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function k_(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const ae=new Gt;let me=null;const be=new Gt(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!R&&(i.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){R=Pe},setClear:function(Pe,We,$e,dt,ht){ht===!0&&(Pe*=dt,We*=dt,$e*=dt),ae.set(Pe,We,$e,dt),be.equals(ae)===!1&&(i.clearColor(Pe,We,$e,dt),be.copy(ae))},reset:function(){R=!1,me=null,be.set(-1,0,0,0)}}}function s(){let R=!1,ae=null,me=null,be=null;return{setTest:function(Pe){Pe?Re(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!R&&(i.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(me!==Pe){switch(Pe){case oh:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case uh:i.depthFunc(i.EQUAL);break;case dh:i.depthFunc(i.GEQUAL);break;case hh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Pe}},setLocked:function(Pe){R=Pe},setClear:function(Pe){be!==Pe&&(i.clearDepth(Pe),be=Pe)},reset:function(){R=!1,ae=null,me=null,be=null}}}function o(){let R=!1,ae=null,me=null,be=null,Pe=null,We=null,$e=null,dt=null,ht=null;return{setTest:function(nt){R||(nt?Re(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!R&&(i.stencilMask(nt),ae=nt)},setFunc:function(nt,mt,nn){(me!==nt||be!==mt||Pe!==nn)&&(i.stencilFunc(nt,mt,nn),me=nt,be=mt,Pe=nn)},setOp:function(nt,mt,nn){(We!==nt||$e!==mt||dt!==nn)&&(i.stencilOp(nt,mt,nn),We=nt,$e=mt,dt=nn)},setLocked:function(nt){R=nt},setClear:function(nt){ht!==nt&&(i.clearStencil(nt),ht=nt)},reset:function(){R=!1,ae=null,me=null,be=null,Pe=null,We=null,$e=null,dt=null,ht=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,p=new WeakMap;let h={},m={},_=new WeakMap,v=[],f=null,d=!1,T=null,M=null,L=null,U=null,P=null,y=null,N=null,g=new at(0,0,0),b=0,I=!1,B=null,ne=null,D=null,w=null,C=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=k>=2);let se=null,ge={};const q=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Se=new Gt().fromArray(q),Le=new Gt().fromArray(ce);function Ee(R,ae,me,be){const Pe=new Uint8Array(4),We=i.createTexture();i.bindTexture(R,We),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<me;$e++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(ae+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return We}const Fe={};Fe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Fe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(ms),re(!1),S(po),Re(i.CULL_FACE),he(Kn);function Re(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ue(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function _e(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function F(R,ae){let me=v,be=!1;if(R)if(me=_.get(ae),me===void 0&&(me=[],_.set(ae,me)),R.isWebGLMultipleRenderTargets){const Pe=R.texture;if(me.length!==Pe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let We=0,$e=Pe.length;We<$e;We++)me[We]=i.COLOR_ATTACHMENT0+We;me.length=Pe.length,be=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,be=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ge(R){return f!==R?(i.useProgram(R),f=R,!0):!1}const ee={[li]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[qd]:i.FUNC_REVERSE_SUBTRACT};if(n)ee[vo]=i.MIN,ee[xo]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ee[vo]=R.MIN_EXT,ee[xo]=R.MAX_EXT)}const pe={[Yd]:i.ZERO,[jd]:i.ONE,[Kd]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,ae,me,be,Pe,We,$e,dt,ht,nt){if(R===Kn){d===!0&&(Ue(i.BLEND),d=!1);return}if(d===!1&&(Re(i.BLEND),d=!0),R!==$d){if(R!==T||nt!==I){if((M!==li||P!==li)&&(i.blendEquation(i.FUNC_ADD),M=li,P=li),nt)switch(R){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}L=null,U=null,y=null,N=null,g.set(0,0,0),b=0,T=R,I=nt}return}Pe=Pe||ae,We=We||me,$e=$e||be,(ae!==M||Pe!==P)&&(i.blendEquationSeparate(ee[ae],ee[Pe]),M=ae,P=Pe),(me!==L||be!==U||We!==y||$e!==N)&&(i.blendFuncSeparate(pe[me],pe[be],pe[We],pe[$e]),L=me,U=be,y=We,N=$e),(dt.equals(g)===!1||ht!==b)&&(i.blendColor(dt.r,dt.g,dt.b,ht),g.copy(dt),b=ht),T=R,I=!1}function De(R,ae){R.side===Bn?Ue(i.CULL_FACE):Re(i.CULL_FACE);let me=R.side===an;ae&&(me=!me),re(me),R.blending===Ki&&R.transparent===!1?he(Kn):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const be=R.stencilWrite;c.setTest(be),be&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(R){B!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),B=R)}function S(R){R!==Vd?(Re(i.CULL_FACE),R!==ne&&(R===po?i.cullFace(i.BACK):R===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),ne=R}function x(R){R!==D&&(H&&i.lineWidth(R),D=R)}function O(R,ae,me){R?(Re(i.POLYGON_OFFSET_FILL),(w!==ae||C!==me)&&(i.polygonOffset(ae,me),w=ae,C=me)):Ue(i.POLYGON_OFFSET_FILL)}function le(R){R?Re(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function ue(R){R===void 0&&(R=i.TEXTURE0+$-1),se!==R&&(i.activeTexture(R),se=R)}function de(R,ae,me){me===void 0&&(se===null?me=i.TEXTURE0+$-1:me=se);let be=ge[me];be===void 0&&(be={type:void 0,texture:void 0},ge[me]=be),(be.type!==R||be.texture!==ae)&&(se!==me&&(i.activeTexture(me),se=me),i.bindTexture(R,ae||Fe[R]),be.type=R,be.texture=ae)}function Te(){const R=ge[se];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(R){Se.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Se.copy(R))}function Y(R){Le.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Le.copy(R))}function Q(R,ae){let me=p.get(ae);me===void 0&&(me=new WeakMap,p.set(ae,me));let be=me.get(R);be===void 0&&(be=i.getUniformBlockIndex(ae,R.name),me.set(R,be))}function oe(R,ae){const be=p.get(ae).get(R);u.get(ae)!==be&&(i.uniformBlockBinding(ae,be,R.__bindingPointIndex),u.set(ae,be))}function K(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ge={},m={},_=new WeakMap,v=[],f=null,d=!1,T=null,M=null,L=null,U=null,P=null,y=null,N=null,g=new at(0,0,0),b=0,I=!1,B=null,ne=null,D=null,w=null,C=null,Se.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Ue,bindFramebuffer:_e,drawBuffers:F,useProgram:Ge,setBlending:he,setMaterial:De,setFlipSided:re,setCullFace:S,setLineWidth:x,setPolygonOffset:O,setScissorTest:le,activeTexture:ue,bindTexture:de,unbindTexture:Te,compressedTexImage2D:Me,compressedTexImage3D:ye,texImage2D:Ne,texImage3D:xe,updateUBOMapping:Q,uniformBlockBinding:oe,texStorage2D:He,texStorage3D:Be,texSubImage2D:Ie,texSubImage3D:ze,compressedTexSubImage2D:fe,compressedTexSubImage3D:qe,scissor:A,viewport:Y,reset:K}}function G_(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,x){return m?new OffscreenCanvas(S,x):Ms("canvas")}function v(S,x,O,le){let ue=1;if((S.width>le||S.height>le)&&(ue=le/Math.max(S.width,S.height)),ue<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const de=x?Ra:Math.floor,Te=de(ue*S.width),Me=de(ue*S.height);p===void 0&&(p=_(Te,Me));const ye=O?_(Te,Me):p;return ye.width=Te,ye.height=Me,ye.getContext("2d").drawImage(S,0,0,Te,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Te+"x"+Me+")."),ye}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return jo(S.width)&&jo(S.height)}function d(S){return a?!1:S.wrapS!==bn||S.wrapT!==bn||S.minFilter!==Jt&&S.minFilter!==mn}function T(S,x){return S.generateMipmaps&&x&&S.minFilter!==Jt&&S.minFilter!==mn}function M(S){i.generateMipmap(S)}function L(S,x,O,le,ue=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let de=x;if(x===i.RED&&(O===i.FLOAT&&(de=i.R32F),O===i.HALF_FLOAT&&(de=i.R16F),O===i.UNSIGNED_BYTE&&(de=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(de=i.R8UI),O===i.UNSIGNED_SHORT&&(de=i.R16UI),O===i.UNSIGNED_INT&&(de=i.R32UI),O===i.BYTE&&(de=i.R8I),O===i.SHORT&&(de=i.R16I),O===i.INT&&(de=i.R32I)),x===i.RG&&(O===i.FLOAT&&(de=i.RG32F),O===i.HALF_FLOAT&&(de=i.RG16F),O===i.UNSIGNED_BYTE&&(de=i.RG8)),x===i.RGBA){const Te=ue?gs:gt.getTransfer(le);O===i.FLOAT&&(de=i.RGBA32F),O===i.HALF_FLOAT&&(de=i.RGBA16F),O===i.UNSIGNED_BYTE&&(de=Te===Mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function U(S,x,O){return T(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Jt&&S.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function P(S){return S===Jt||S===Mo||S===Bs?i.NEAREST:i.LINEAR}function y(S){const x=S.target;x.removeEventListener("dispose",y),g(x),x.isVideoTexture&&u.delete(x)}function N(S){const x=S.target;x.removeEventListener("dispose",N),I(x)}function g(S){const x=n.get(S);if(x.__webglInit===void 0)return;const O=S.source,le=h.get(O);if(le){const ue=le[x.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&b(S),Object.keys(le).length===0&&h.delete(O)}n.remove(S)}function b(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const O=S.source,le=h.get(O);delete le[x.__cacheKey],o.memory.textures--}function I(S){const x=S.texture,O=n.get(S),le=n.get(x);if(le.__webglTexture!==void 0&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(O.__webglFramebuffer[ue]))for(let de=0;de<O.__webglFramebuffer[ue].length;de++)i.deleteFramebuffer(O.__webglFramebuffer[ue][de]);else i.deleteFramebuffer(O.__webglFramebuffer[ue]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[ue])}else{if(Array.isArray(O.__webglFramebuffer))for(let ue=0;ue<O.__webglFramebuffer.length;ue++)i.deleteFramebuffer(O.__webglFramebuffer[ue]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ue=0;ue<O.__webglColorRenderbuffer.length;ue++)O.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[ue]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ue=0,de=x.length;ue<de;ue++){const Te=n.get(x[ue]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(x[ue])}n.remove(x),n.remove(S)}let B=0;function ne(){B=0}function D(){const S=B;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),B+=1,S}function w(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function C(S,x){const O=n.get(S);if(S.isVideoTexture&&De(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const le=S.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,S,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function $(S,x){const O=n.get(S);if(S.version>0&&O.__version!==S.version){Se(O,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function H(S,x){const O=n.get(S);if(S.version>0&&O.__version!==S.version){Se(O,S,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function k(S,x){const O=n.get(S);if(S.version>0&&O.__version!==S.version){Le(O,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const J={[ba]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},se={[Jt]:i.NEAREST,[Mo]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Sh]:i.LINEAR_MIPMAP_NEAREST,[yr]:i.LINEAR_MIPMAP_LINEAR},ge={[Uh]:i.NEVER,[zh]:i.ALWAYS,[Ih]:i.LESS,[Tc]:i.LEQUAL,[Nh]:i.EQUAL,[Bh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function q(S,x,O){if(O?(i.texParameteri(S,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,J[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,se[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,se[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==bn||x.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,P(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,P(x.minFilter)),x.minFilter!==Jt&&x.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Jt||x.minFilter!==Bs&&x.minFilter!==yr||x.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ce(S,x){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",y));const le=x.source;let ue=h.get(le);ue===void 0&&(ue={},h.set(le,ue));const de=w(x);if(de!==S.__cacheKey){ue[de]===void 0&&(ue[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ue[de].usedTimes++;const Te=ue[S.__cacheKey];Te!==void 0&&(ue[S.__cacheKey].usedTimes--,Te.usedTimes===0&&b(x)),S.__cacheKey=de,S.__webglTexture=ue[de].texture}return O}function Se(S,x,O){let le=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(le=i.TEXTURE_3D);const ue=ce(S,x),de=x.source;t.bindTexture(le,S.__webglTexture,i.TEXTURE0+O);const Te=n.get(de);if(de.version!==Te.__version||ue===!0){t.activeTexture(i.TEXTURE0+O);const Me=gt.getPrimaries(gt.workingColorSpace),ye=x.colorSpace===_n?null:gt.getPrimaries(x.colorSpace),Ie=x.colorSpace===_n||Me===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ze=d(x)&&f(x.image)===!1;let fe=v(x.image,ze,!1,r.maxTextureSize);fe=re(x,fe);const qe=f(fe)||a,He=s.convert(x.format,x.colorSpace);let Be=s.convert(x.type),Ne=L(x.internalFormat,He,Be,x.colorSpace,x.isVideoTexture);q(le,x,qe);let xe;const A=x.mipmaps,Y=a&&x.isVideoTexture!==!0&&Ne!==Ec,Q=Te.__version===void 0||ue===!0,oe=U(x,fe,qe);if(x.isDepthTexture)Ne=i.DEPTH_COMPONENT,a?x.type===jn?Ne=i.DEPTH_COMPONENT32F:x.type===Yn?Ne=i.DEPTH_COMPONENT24:x.type===fi?Ne=i.DEPTH24_STENCIL8:Ne=i.DEPTH_COMPONENT16:x.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===pi&&Ne===i.DEPTH_COMPONENT&&x.type!==Fa&&x.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Yn,Be=s.convert(x.type)),x.format===tr&&Ne===i.DEPTH_COMPONENT&&(Ne=i.DEPTH_STENCIL,x.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=fi,Be=s.convert(x.type))),Q&&(Y?t.texStorage2D(i.TEXTURE_2D,1,Ne,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,fe.width,fe.height,0,He,Be,null));else if(x.isDataTexture)if(A.length>0&&qe){Y&&Q&&t.texStorage2D(i.TEXTURE_2D,oe,Ne,A[0].width,A[0].height);for(let K=0,R=A.length;K<R;K++)xe=A[K],Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,xe.width,xe.height,He,Be,xe.data):t.texImage2D(i.TEXTURE_2D,K,Ne,xe.width,xe.height,0,He,Be,xe.data);x.generateMipmaps=!1}else Y?(Q&&t.texStorage2D(i.TEXTURE_2D,oe,Ne,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,He,Be,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,fe.width,fe.height,0,He,Be,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Y&&Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ne,A[0].width,A[0].height,fe.depth);for(let K=0,R=A.length;K<R;K++)xe=A[K],x.format!==Tn?He!==null?Y?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,fe.depth,He,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ne,xe.width,xe.height,fe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,fe.depth,He,Be,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ne,xe.width,xe.height,fe.depth,0,He,Be,xe.data)}else{Y&&Q&&t.texStorage2D(i.TEXTURE_2D,oe,Ne,A[0].width,A[0].height);for(let K=0,R=A.length;K<R;K++)xe=A[K],x.format!==Tn?He!==null?Y?t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xe.width,xe.height,He,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,xe.width,xe.height,He,Be,xe.data):t.texImage2D(i.TEXTURE_2D,K,Ne,xe.width,xe.height,0,He,Be,xe.data)}else if(x.isDataArrayTexture)Y?(Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ne,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,He,Be,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,He,Be,fe.data);else if(x.isData3DTexture)Y?(Q&&t.texStorage3D(i.TEXTURE_3D,oe,Ne,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,He,Be,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,He,Be,fe.data);else if(x.isFramebufferTexture){if(Q)if(Y)t.texStorage2D(i.TEXTURE_2D,oe,Ne,fe.width,fe.height);else{let K=fe.width,R=fe.height;for(let ae=0;ae<oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,Ne,K,R,0,He,Be,null),K>>=1,R>>=1}}else if(A.length>0&&qe){Y&&Q&&t.texStorage2D(i.TEXTURE_2D,oe,Ne,A[0].width,A[0].height);for(let K=0,R=A.length;K<R;K++)xe=A[K],Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,He,Be,xe):t.texImage2D(i.TEXTURE_2D,K,Ne,He,Be,xe);x.generateMipmaps=!1}else Y?(Q&&t.texStorage2D(i.TEXTURE_2D,oe,Ne,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Be,fe)):t.texImage2D(i.TEXTURE_2D,0,Ne,He,Be,fe);T(x,qe)&&M(le),Te.__version=de.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Le(S,x,O){if(x.image.length!==6)return;const le=ce(S,x),ue=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);const de=n.get(ue);if(ue.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+O);const Te=gt.getPrimaries(gt.workingColorSpace),Me=x.colorSpace===_n?null:gt.getPrimaries(x.colorSpace),ye=x.colorSpace===_n||Te===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,ze=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ie&&!ze?fe[K]=v(x.image[K],!1,!0,r.maxCubemapSize):fe[K]=ze?x.image[K].image:x.image[K],fe[K]=re(x,fe[K]);const qe=fe[0],He=f(qe)||a,Be=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type),xe=L(x.internalFormat,Be,Ne,x.colorSpace),A=a&&x.isVideoTexture!==!0,Y=de.__version===void 0||le===!0;let Q=U(x,qe,He);q(i.TEXTURE_CUBE_MAP,x,He);let oe;if(Ie){A&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,xe,qe.width,qe.height);for(let K=0;K<6;K++){oe=fe[K].mipmaps;for(let R=0;R<oe.length;R++){const ae=oe[R];x.format!==Tn?Be!==null?A?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,ae.width,ae.height,Be,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,ae.width,ae.height,Be,Ne,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,xe,ae.width,ae.height,0,Be,Ne,ae.data)}}}else{oe=x.mipmaps,A&&Y&&(oe.length>0&&Q++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,xe,fe[0].width,fe[0].height));for(let K=0;K<6;K++)if(ze){A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Be,Ne,fe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,xe,fe[K].width,fe[K].height,0,Be,Ne,fe[K].data);for(let R=0;R<oe.length;R++){const me=oe[R].image[K].image;A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,me.width,me.height,Be,Ne,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,xe,me.width,me.height,0,Be,Ne,me.data)}}else{A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Be,Ne,fe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,xe,Be,Ne,fe[K]);for(let R=0;R<oe.length;R++){const ae=oe[R];A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,Be,Ne,ae.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,xe,Be,Ne,ae.image[K])}}}T(x,He)&&M(i.TEXTURE_CUBE_MAP),de.__version=ue.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Ee(S,x,O,le,ue,de){const Te=s.convert(O.format,O.colorSpace),Me=s.convert(O.type),ye=L(O.internalFormat,Te,Me,O.colorSpace);if(!n.get(x).__hasExternalTextures){const ze=Math.max(1,x.width>>de),fe=Math.max(1,x.height>>de);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,ye,ze,fe,x.depth,0,Te,Me,null):t.texImage2D(ue,de,ye,ze,fe,0,Te,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),he(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ue,n.get(O).__webglTexture,0,pe(x)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ue,n.get(O).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(S,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let le=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||he(x)){const ue=x.depthTexture;ue&&ue.isDepthTexture&&(ue.type===jn?le=i.DEPTH_COMPONENT32F:ue.type===Yn&&(le=i.DEPTH_COMPONENT24));const de=pe(x);he(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,le,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,le,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const le=pe(x);O&&he(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,x.width,x.height):he(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const le=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ue=0;ue<le.length;ue++){const de=le[ue],Te=s.convert(de.format,de.colorSpace),Me=s.convert(de.type),ye=L(de.internalFormat,Te,Me,de.colorSpace),Ie=pe(x);O&&he(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ye,x.width,x.height):he(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ye,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ye,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),C(x.depthTexture,0);const le=n.get(x.depthTexture).__webglTexture,ue=pe(x);if(x.depthTexture.format===pi)he(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(x.depthTexture.format===tr)he(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ue(S){const x=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,S)}else if(O){x.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[le]),x.__webglDepthbuffer[le]=i.createRenderbuffer(),Fe(x.__webglDepthbuffer[le],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Fe(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(S,x,O){const le=n.get(S);x!==void 0&&Ee(le.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ue(S)}function F(S){const x=S.texture,O=n.get(S),le=n.get(x);S.addEventListener("dispose",N),S.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=x.version,o.memory.textures++);const ue=S.isWebGLCubeRenderTarget===!0,de=S.isWebGLMultipleRenderTargets===!0,Te=f(S)||a;if(ue){O.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Me]=[];for(let ye=0;ye<x.mipmaps.length;ye++)O.__webglFramebuffer[Me][ye]=i.createFramebuffer()}else O.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Me=0;Me<x.mipmaps.length;Me++)O.__webglFramebuffer[Me]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const Me=S.texture;for(let ye=0,Ie=Me.length;ye<Ie;ye++){const ze=n.get(Me[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&he(S)===!1){const Me=de?x:[x];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<Me.length;ye++){const Ie=Me[ye];O.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);const ze=s.convert(Ie.format,Ie.colorSpace),fe=s.convert(Ie.type),qe=L(Ie.internalFormat,ze,fe,Ie.colorSpace,S.isXRRenderTarget===!0),He=pe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,qe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),q(i.TEXTURE_CUBE_MAP,x,Te);for(let Me=0;Me<6;Me++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)Ee(O.__webglFramebuffer[Me][ye],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ye);else Ee(O.__webglFramebuffer[Me],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);T(x,Te)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const Me=S.texture;for(let ye=0,Ie=Me.length;ye<Ie;ye++){const ze=Me[ye],fe=n.get(ze);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),q(i.TEXTURE_2D,ze,Te),Ee(O.__webglFramebuffer,S,ze,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),T(ze,Te)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?Me=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,le.__webglTexture),q(Me,x,Te),a&&x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)Ee(O.__webglFramebuffer[ye],S,x,i.COLOR_ATTACHMENT0,Me,ye);else Ee(O.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,Me,0);T(x,Te)&&M(Me),t.unbindTexture()}S.depthBuffer&&Ue(S)}function Ge(S){const x=f(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let le=0,ue=O.length;le<ue;le++){const de=O[le];if(T(de,x)){const Te=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(de).__webglTexture;t.bindTexture(Te,Me),M(Te),t.unbindTexture()}}}function ee(S){if(a&&S.samples>0&&he(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,le=S.height;let ue=i.COLOR_BUFFER_BIT;const de=[],Te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(S),ye=S.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){de.push(i.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&de.push(Te);const ze=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ze===!1&&(S.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),ye){const fe=n.get(x[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,O,le,0,0,O,le,ue,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const ze=n.get(x[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function pe(S){return Math.min(r.maxSamples,S.samples)}function he(S){const x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function De(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function re(S,x){const O=S.colorSpace,le=S.format,ue=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Aa||O!==kn&&O!==_n&&(gt.getTransfer(O)===Mt?a===!1?e.has("EXT_sRGB")===!0&&le===Tn?(S.format=Aa,S.minFilter=mn,S.generateMipmaps=!1):x=wc.sRGBToLinear(x):(le!==Tn||ue!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=D,this.resetTextureUnits=ne,this.setTexture2D=C,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=_e,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=he}function H_(i,e,t){const n=t.isWebGL2;function r(s,o=_n){let a;const l=gt.getTransfer(o);if(s===Jn)return i.UNSIGNED_BYTE;if(s===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(s===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Eh)return i.BYTE;if(s===yh)return i.SHORT;if(s===Fa)return i.UNSIGNED_SHORT;if(s===gc)return i.INT;if(s===Yn)return i.UNSIGNED_INT;if(s===jn)return i.FLOAT;if(s===br)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bh)return i.ALPHA;if(s===Tn)return i.RGBA;if(s===Th)return i.LUMINANCE;if(s===Ah)return i.LUMINANCE_ALPHA;if(s===pi)return i.DEPTH_COMPONENT;if(s===tr)return i.DEPTH_STENCIL;if(s===Aa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wh)return i.RED;if(s===xc)return i.RED_INTEGER;if(s===Rh)return i.RG;if(s===Mc)return i.RG_INTEGER;if(s===Sc)return i.RGBA_INTEGER;if(s===zs||s===ks||s===Gs||s===Hs)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===So||s===Eo||s===yo||s===bo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===So)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ec)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===To||s===Ao)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===To)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ao)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wo||s===Ro||s===Co||s===Lo||s===Po||s===Do||s===Uo||s===Io||s===No||s===Fo||s===Oo||s===Bo||s===zo||s===ko)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ro)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Co)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Po)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Do)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Io)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===No)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ko)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vs||s===Go||s===Ho)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vs)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Go)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ho)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===Vo||s===Wo||s===$o)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class V_ extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),d=this._getHandJoint(c,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $_ extends Si{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,_=null;const v=t.getContextAttributes();let f=null,d=null;const T=[],M=[],L=new Ke;let U=null;const P=new gn;P.layers.enable(1),P.viewport=new Gt;const y=new gn;y.layers.enable(2),y.viewport=new Gt;const N=[P,y],g=new V_;g.layers.enable(1),g.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=T[q];return ce===void 0&&(ce=new fa,T[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=T[q];return ce===void 0&&(ce=new fa,T[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=T[q];return ce===void 0&&(ce=new fa,T[q]=ce),ce.getHandSpace()};function B(q){const ce=M.indexOf(q.inputSource);if(ce===-1)return;const Se=T[ce];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function ne(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",D);for(let q=0;q<T.length;q++){const ce=M[q];ce!==null&&(M[q]=null,T[q].disconnect(ce))}b=null,I=null,e.setRenderTarget(f),m=null,h=null,p=null,r=null,d=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new gi(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,Se=null,Le=null;v.depth&&(Le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?tr:pi,Se=v.stencil?fi:Yn);const Ee={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new gi(h.textureWidth,h.textureHeight,{format:Tn,type:Jn,depthTexture:new zc(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Fe=e.properties.get(d);Fe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(q){for(let ce=0;ce<q.removed.length;ce++){const Se=q.removed[ce],Le=M.indexOf(Se);Le>=0&&(M[Le]=null,T[Le].disconnect(Se))}for(let ce=0;ce<q.added.length;ce++){const Se=q.added[ce];let Le=M.indexOf(Se);if(Le===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=M.length){M.push(Se),Le=Fe;break}else if(M[Fe]===null){M[Fe]=Se,Le=Fe;break}if(Le===-1)break}const Ee=T[Le];Ee&&Ee.connect(Se)}}const w=new V,C=new V;function $(q,ce,Se){w.setFromMatrixPosition(ce.matrixWorld),C.setFromMatrixPosition(Se.matrixWorld);const Le=w.distanceTo(C),Ee=ce.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Re=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),_e=(Ee[9]+1)/Ee[5],F=(Ee[9]-1)/Ee[5],Ge=(Ee[8]-1)/Ee[0],ee=(Fe[8]+1)/Fe[0],pe=Re*Ge,he=Re*ee,De=Le/(-Ge+ee),re=De*-Ge;ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(De),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const S=Re+De,x=Ue+De,O=pe-re,le=he+(Le-re),ue=_e*Ue/x*S,de=F*Ue/x*S;q.projectionMatrix.makePerspective(O,le,ue,de,S,x),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function H(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.near=y.near=P.near=q.near,g.far=y.far=P.far=q.far,(b!==g.near||I!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,I=g.far);const ce=q.parent,Se=g.cameras;H(g,ce);for(let Le=0;Le<Se.length;Le++)H(Se[Le],ce);Se.length===2?$(g,P,y):g.projectionMatrix.copy(P.projectionMatrix),k(q,g,ce)};function k(q,ce,Se){Se===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=wa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let J=null;function se(q,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Le=!1;Se.length!==g.cameras.length&&(g.cameras.length=0,Le=!0);for(let Ee=0;Ee<Se.length;Ee++){const Fe=Se[Ee];let Re=null;if(m!==null)Re=m.getViewport(Fe);else{const _e=p.getViewSubImage(h,Fe);Re=_e.viewport,Ee===0&&(e.setRenderTargetTextures(d,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(d))}let Ue=N[Ee];Ue===void 0&&(Ue=new gn,Ue.layers.enable(Ee),Ue.viewport=new Gt,N[Ee]=Ue),Ue.matrix.fromArray(Fe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Fe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Re.x,Re.y,Re.width,Re.height),Ee===0&&(g.matrix.copy(Ue.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Le===!0&&g.cameras.push(Ue)}}for(let Se=0;Se<T.length;Se++){const Le=M[Se],Ee=T[Se];Le!==null&&Ee!==void 0&&Ee.update(Le,ce,c||o)}J&&J(q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const ge=new Oc;ge.setAnimationLoop(se),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}}function X_(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Ic(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,T,M,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),p(f,d)):d.isMeshPhongMaterial?(s(f,d),u(f,d)):d.isMeshStandardMaterial?(s(f,d),h(f,d),d.isMeshPhysicalMaterial&&m(f,d,L)):d.isMeshMatcapMaterial?(s(f,d),_(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),v(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,T,M):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===an&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===an&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(f.envMap.value=T,f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,T,M){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*T,f.scale.value=M*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,T){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){const T=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function q_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const L=M.program;n.uniformBlockBinding(T,L)}function c(T,M){let L=r[T.id];L===void 0&&(_(T),L=u(T),r[T.id]=L,T.addEventListener("dispose",f));const U=M.program;n.updateUBOMapping(T,U);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function u(T){const M=p();T.__bindingPointIndex=M;const L=i.createBuffer(),U=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,L),L}function p(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=r[T.id],L=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,y=L.length;P<y;P++){const N=Array.isArray(L[P])?L[P]:[L[P]];for(let g=0,b=N.length;g<b;g++){const I=N[g];if(m(I,P,g,U)===!0){const B=I.__offset,ne=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let w=0;w<ne.length;w++){const C=ne[w],$=v(C);typeof C=="number"||typeof C=="boolean"?(I.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,B+D,I.__data)):C.isMatrix3?(I.__data[0]=C.elements[0],I.__data[1]=C.elements[1],I.__data[2]=C.elements[2],I.__data[3]=0,I.__data[4]=C.elements[3],I.__data[5]=C.elements[4],I.__data[6]=C.elements[5],I.__data[7]=0,I.__data[8]=C.elements[6],I.__data[9]=C.elements[7],I.__data[10]=C.elements[8],I.__data[11]=0):(C.toArray(I.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,L,U){const P=T.value,y=M+"_"+L;if(U[y]===void 0)return typeof P=="number"||typeof P=="boolean"?U[y]=P:U[y]=P.clone(),!0;{const N=U[y];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return U[y]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(T){const M=T.uniforms;let L=0;const U=16;for(let y=0,N=M.length;y<N;y++){const g=Array.isArray(M[y])?M[y]:[M[y]];for(let b=0,I=g.length;b<I;b++){const B=g[b],ne=Array.isArray(B.value)?B.value:[B.value];for(let D=0,w=ne.length;D<w;D++){const C=ne[D],$=v(C),H=L%U;H!==0&&U-H<$.boundary&&(L+=U-H),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=L,L+=$.storage}}}const P=L%U;return P>0&&(L+=U-P),T.__size=L,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function f(T){const M=T.target;M.removeEventListener("dispose",f);const L=o.indexOf(M.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class $c{constructor(e={}){const{canvas:t=Hh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const M=this;let L=!1,U=0,P=0,y=null,N=-1,g=null;const b=new Gt,I=new Gt;let B=null;const ne=new at(0);let D=0,w=t.width,C=t.height,$=1,H=null,k=null;const J=new Gt(0,0,w,C),se=new Gt(0,0,w,C);let ge=!1;const q=new za;let ce=!1,Se=!1,Le=null;const Ee=new Ut,Fe=new Ke,Re=new V,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return y===null?$:1}let F=n;function Ge(E,z){for(let j=0;j<E.length;j++){const Z=E[j],X=t.getContext(Z,z);if(X!==null)return X}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),F=Ge(z,E),F===null)throw Ge(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,pe,he,De,re,S,x,O,le,ue,de,Te,Me,ye,Ie,ze,fe,qe,He,Be,Ne,xe,A,Y;function Q(){ee=new ig(F),pe=new Zm(F,ee,e),ee.init(pe),xe=new H_(F,ee,pe),he=new k_(F,ee,pe),De=new ag(F),re=new A_,S=new G_(F,ee,he,re,pe,xe,De),x=new Qm(M),O=new ng(M),le=new pf(F,pe),A=new jm(F,ee,le,pe),ue=new rg(F,le,De,A),de=new ug(F,ue,le,De),He=new cg(F,pe,S),ze=new Jm(re),Te=new T_(M,x,O,ee,pe,A,ze),Me=new X_(M,re),ye=new R_,Ie=new I_(ee,pe),qe=new Ym(M,x,O,he,de,h,l),fe=new z_(M,de,pe),Y=new q_(F,De,pe,he),Be=new Km(F,ee,De,pe),Ne=new sg(F,ee,De,pe),De.programs=Te.programs,M.capabilities=pe,M.extensions=ee,M.properties=re,M.renderLists=ye,M.shadowMap=fe,M.state=he,M.info=De}Q();const oe=new $_(M,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(w,C,!1))},this.getSize=function(E){return E.set(w,C)},this.setSize=function(E,z,j=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,C=z,t.width=Math.floor(E*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(w*$,C*$).floor()},this.setDrawingBufferSize=function(E,z,j){w=E,C=z,$=j,t.width=Math.floor(E*j),t.height=Math.floor(z*j),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,z,j,Z){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,z,j,Z),he.viewport(b.copy(J).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,z,j,Z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,z,j,Z),he.scissor(I.copy(se).multiplyScalar($).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){he.setScissorTest(ge=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(E=!0,z=!0,j=!0){let Z=0;if(E){let X=!1;if(y!==null){const Ae=y.texture.format;X=Ae===Sc||Ae===Mc||Ae===xc}if(X){const Ae=y.texture.type,Oe=Ae===Jn||Ae===Yn||Ae===Fa||Ae===fi||Ae===_c||Ae===vc,ke=qe.getClearColor(),Ve=qe.getClearAlpha(),Qe=ke.r,je=ke.g,Je=ke.b;Oe?(m[0]=Qe,m[1]=je,m[2]=Je,m[3]=Ve,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Qe,_[1]=je,_[2]=Je,_[3]=Ve,F.clearBufferiv(F.COLOR,0,_))}else Z|=F.COLOR_BUFFER_BIT}z&&(Z|=F.DEPTH_BUFFER_BIT),j&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ye.dispose(),Ie.dispose(),re.dispose(),x.dispose(),O.dispose(),de.dispose(),A.dispose(),Y.dispose(),Te.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ht),oe.removeEventListener("sessionend",nt),Le&&(Le.dispose(),Le=null),mt.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=De.autoReset,z=fe.enabled,j=fe.autoUpdate,Z=fe.needsUpdate,X=fe.type;Q(),De.autoReset=E,fe.enabled=z,fe.autoUpdate=j,fe.needsUpdate=Z,fe.type=X}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){const z=E.target;z.removeEventListener("dispose",me),be(z)}function be(E){Pe(E),re.remove(E)}function Pe(E){const z=re.get(E).programs;z!==void 0&&(z.forEach(function(j){Te.releaseProgram(j)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,j,Z,X,Ae){z===null&&(z=Ue);const Oe=X.isMesh&&X.matrixWorld.determinant()<0,ke=it(E,z,j,Z,X);he.setMaterial(Z,Oe);let Ve=j.index,Qe=1;if(Z.wireframe===!0){if(Ve=ue.getWireframeAttribute(j),Ve===void 0)return;Qe=2}const je=j.drawRange,Je=j.attributes.position;let bt=je.start*Qe,Kt=(je.start+je.count)*Qe;Ae!==null&&(bt=Math.max(bt,Ae.start*Qe),Kt=Math.min(Kt,(Ae.start+Ae.count)*Qe)),Ve!==null?(bt=Math.max(bt,0),Kt=Math.min(Kt,Ve.count)):Je!=null&&(bt=Math.max(bt,0),Kt=Math.min(Kt,Je.count));const Lt=Kt-bt;if(Lt<0||Lt===1/0)return;A.setup(X,Z,ke,j,Ve);let vn,xt=Be;if(Ve!==null&&(vn=le.get(Ve),xt=Ne,xt.setIndex(vn)),X.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*_e()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(X.isLine){let et=Z.linewidth;et===void 0&&(et=1),he.setLineWidth(et*_e()),X.isLineSegments?xt.setMode(F.LINES):X.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else X.isPoints?xt.setMode(F.POINTS):X.isSprite&&xt.setMode(F.TRIANGLES);if(X.isBatchedMesh)xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)xt.renderInstances(bt,Lt,X.count);else if(j.isInstancedBufferGeometry){const et=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ws=Math.min(j.instanceCount,et);xt.renderInstances(bt,Lt,ws)}else xt.render(bt,Lt)};function We(E,z,j){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,zt(E,z,j),E.side=Qn,E.needsUpdate=!0,zt(E,z,j),E.side=Bn):zt(E,z,j)}this.compile=function(E,z,j=null){j===null&&(j=E),f=Ie.get(j),f.init(),T.push(f),j.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),E!==j&&E.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(M._useLegacyLights);const Z=new Set;return E.traverse(function(X){const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const ke=Ae[Oe];We(ke,j,X),Z.add(ke)}else We(Ae,j,X),Z.add(Ae)}),T.pop(),f=null,Z},this.compileAsync=function(E,z,j=null){const Z=this.compile(E,z,j);return new Promise(X=>{function Ae(){if(Z.forEach(function(Oe){re.get(Oe).currentProgram.isReady()&&Z.delete(Oe)}),Z.size===0){X(E);return}setTimeout(Ae,10)}ee.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let $e=null;function dt(E){$e&&$e(E)}function ht(){mt.stop()}function nt(){mt.start()}const mt=new Oc;mt.setAnimationLoop(dt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(E){$e=E,oe.setAnimationLoop(E),E===null?mt.stop():mt.start()},oe.addEventListener("sessionstart",ht),oe.addEventListener("sessionend",nt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,z,y),f=Ie.get(E,T.length),f.init(),T.push(f),Ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(Ee),Se=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,Se),v=ye.get(E,d.length),v.init(),d.push(v),nn(E,z,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,k),this.info.render.frame++,ce===!0&&ze.beginShadows();const j=f.state.shadowsArray;if(fe.render(j,E,z),ce===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(v,E),f.setupLights(M._useLegacyLights),z.isArrayCamera){const Z=z.cameras;for(let X=0,Ae=Z.length;X<Ae;X++){const Oe=Z[X];wn(v,E,Oe,Oe.viewport)}}else wn(v,E,z);y!==null&&(S.updateMultisampleRenderTarget(y),S.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(M,E,z),A.resetDefaultState(),N=-1,g=null,T.pop(),T.length>0?f=T[T.length-1]:f=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function nn(E,z,j,Z){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){Z&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Oe=de.update(E),ke=E.material;ke.visible&&v.push(E,Oe,ke,j,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Oe=de.update(E),ke=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Re.copy(Oe.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(ke)){const Ve=Oe.groups;for(let Qe=0,je=Ve.length;Qe<je;Qe++){const Je=Ve[Qe],bt=ke[Je.materialIndex];bt&&bt.visible&&v.push(E,Oe,bt,j,Re.z,Je)}}else ke.visible&&v.push(E,Oe,ke,j,Re.z,null)}}const Ae=E.children;for(let Oe=0,ke=Ae.length;Oe<ke;Oe++)nn(Ae[Oe],z,j,Z)}function wn(E,z,j,Z){const X=E.opaque,Ae=E.transmissive,Oe=E.transparent;f.setupLightsView(j),ce===!0&&ze.setGlobalState(M.clippingPlanes,j),Ae.length>0&&ei(X,Ae,z,j),Z&&he.viewport(b.copy(Z)),X.length>0&&St(X,z,j),Ae.length>0&&St(Ae,z,j),Oe.length>0&&St(Oe,z,j),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ei(E,z,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ae=pe.isWebGL2;Le===null&&(Le=new gi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?br:Jn,minFilter:yr,samples:Ae?4:0})),M.getDrawingBufferSize(Fe),Ae?Le.setSize(Fe.x,Fe.y):Le.setSize(Ra(Fe.x),Ra(Fe.y));const Oe=M.getRenderTarget();M.setRenderTarget(Le),M.getClearColor(ne),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();const ke=M.toneMapping;M.toneMapping=Zn,St(E,j,Z),S.updateMultisampleRenderTarget(Le),S.updateRenderTargetMipmap(Le);let Ve=!1;for(let Qe=0,je=z.length;Qe<je;Qe++){const Je=z[Qe],bt=Je.object,Kt=Je.geometry,Lt=Je.material,vn=Je.group;if(Lt.side===Bn&&bt.layers.test(Z.layers)){const xt=Lt.side;Lt.side=an,Lt.needsUpdate=!0,vt(bt,j,Z,Kt,Lt,vn),Lt.side=xt,Lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(S.updateMultisampleRenderTarget(Le),S.updateRenderTargetMipmap(Le)),M.setRenderTarget(Oe),M.setClearColor(ne,D),M.toneMapping=ke}function St(E,z,j){const Z=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Ae=E.length;X<Ae;X++){const Oe=E[X],ke=Oe.object,Ve=Oe.geometry,Qe=Z===null?Oe.material:Z,je=Oe.group;ke.layers.test(j.layers)&&vt(ke,z,j,Ve,Qe,je)}}function vt(E,z,j,Z,X,Ae){E.onBeforeRender(M,z,j,Z,X,Ae),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(M,z,j,Z,E,Ae),X.transparent===!0&&X.side===Bn&&X.forceSinglePass===!1?(X.side=an,X.needsUpdate=!0,M.renderBufferDirect(j,z,Z,X,E,Ae),X.side=Qn,X.needsUpdate=!0,M.renderBufferDirect(j,z,Z,X,E,Ae),X.side=Bn):M.renderBufferDirect(j,z,Z,X,E,Ae),E.onAfterRender(M,z,j,Z,X,Ae)}function zt(E,z,j){z.isScene!==!0&&(z=Ue);const Z=re.get(E),X=f.state.lights,Ae=f.state.shadowsArray,Oe=X.state.version,ke=Te.getParameters(E,X.state,Ae,z,j),Ve=Te.getProgramCacheKey(ke);let Qe=Z.programs;Z.environment=E.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(E.isMeshStandardMaterial?O:x).get(E.envMap||Z.environment),Qe===void 0&&(E.addEventListener("dispose",me),Qe=new Map,Z.programs=Qe);let je=Qe.get(Ve);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Oe)return Ze(E,ke),je}else ke.uniforms=Te.getUniforms(E),E.onBuild(j,ke,M),E.onBeforeCompile(ke,M),je=Te.acquireProgram(ke,Ve),Qe.set(Ve,je),Z.uniforms=ke.uniforms;const Je=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Je.clippingPlanes=ze.uniform),Ze(E,ke),Z.needsLights=ot(E),Z.lightsStateVersion=Oe,Z.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function Ye(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ls.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ze(E,z){const j=re.get(E);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function it(E,z,j,Z,X){z.isScene!==!0&&(z=Ue),S.resetTextureUnits();const Ae=z.fog,Oe=Z.isMeshStandardMaterial?z.environment:null,ke=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:kn,Ve=(Z.isMeshStandardMaterial?O:x).get(Z.envMap||Oe),Qe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Je=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Kt=!!j.morphAttributes.color;let Lt=Zn;Z.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const vn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=vn!==void 0?vn.length:0,et=re.get(Z),ws=f.state.lights;if(ce===!0&&(Se===!0||E!==g)){const fn=E===g&&Z.id===N;ze.setState(Z,E,fn)}let At=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ws.state.version||et.outputColorSpace!==ke||X.isBatchedMesh&&et.batching===!1||!X.isBatchedMesh&&et.batching===!0||X.isInstancedMesh&&et.instancing===!1||!X.isInstancedMesh&&et.instancing===!0||X.isSkinnedMesh&&et.skinning===!1||!X.isSkinnedMesh&&et.skinning===!0||X.isInstancedMesh&&et.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&et.instancingColor===!1&&X.instanceColor!==null||et.envMap!==Ve||Z.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==je||et.morphTargets!==Je||et.morphNormals!==bt||et.morphColors!==Kt||et.toneMapping!==Lt||pe.isWebGL2===!0&&et.morphTargetsCount!==xt)&&(At=!0):(At=!0,et.__version=Z.version);let ti=et.currentProgram;At===!0&&(ti=zt(Z,z,X));let Va=!1,lr=!1,Rs=!1;const Xt=ti.getUniforms(),ni=et.uniforms;if(he.useProgram(ti.program)&&(Va=!0,lr=!0,Rs=!0),Z.id!==N&&(N=Z.id,lr=!0),Va||g!==E){Xt.setValue(F,"projectionMatrix",E.projectionMatrix),Xt.setValue(F,"viewMatrix",E.matrixWorldInverse);const fn=Xt.map.cameraPosition;fn!==void 0&&fn.setValue(F,Re.setFromMatrixPosition(E.matrixWorld)),pe.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,lr=!0,Rs=!0)}if(X.isSkinnedMesh){Xt.setOptional(F,X,"bindMatrix"),Xt.setOptional(F,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(pe.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Xt.setValue(F,"boneTexture",fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Xt.setOptional(F,X,"batchingTexture"),Xt.setValue(F,"batchingTexture",X._matricesTexture,S));const Cs=j.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&pe.isWebGL2===!0)&&He.update(X,j,ti),(lr||et.receiveShadow!==X.receiveShadow)&&(et.receiveShadow=X.receiveShadow,Xt.setValue(F,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ni.envMap.value=Ve,ni.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),lr&&(Xt.setValue(F,"toneMappingExposure",M.toneMappingExposure),et.needsLights&&Et(ni,Rs),Ae&&Z.fog===!0&&Me.refreshFogUniforms(ni,Ae),Me.refreshMaterialUniforms(ni,Z,$,C,Le),ls.upload(F,Ye(et),ni,S)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ls.upload(F,Ye(et),ni,S),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Xt.setValue(F,"center",X.center),Xt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Xt.setValue(F,"normalMatrix",X.normalMatrix),Xt.setValue(F,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let Ls=0,qc=fn.length;Ls<qc;Ls++)if(pe.isWebGL2){const Wa=fn[Ls];Y.update(Wa,ti),Y.bind(Wa,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Et(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function ot(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,z,j){re.get(E.texture).__webglTexture=z,re.get(E.depthTexture).__webglTexture=j;const Z=re.get(E);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const j=re.get(E);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,j=0){y=E,U=z,P=j;let Z=!0,X=null,Ae=!1,Oe=!1;if(E){const Ve=re.get(E);Ve.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1):Ve.__webglFramebuffer===void 0?S.setupRenderTarget(E):Ve.__hasExternalTextures&&S.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);const Qe=E.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);const je=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[z])?X=je[z][j]:X=je[z],Ae=!0):pe.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?X=re.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?X=je[j]:X=je,b.copy(E.viewport),I.copy(E.scissor),B=E.scissorTest}else b.copy(J).multiplyScalar($).floor(),I.copy(se).multiplyScalar($).floor(),B=ge;if(he.bindFramebuffer(F.FRAMEBUFFER,X)&&pe.drawBuffers&&Z&&he.drawBuffers(E,X),he.viewport(b),he.scissor(I),he.setScissorTest(B),Ae){const Ve=re.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,j)}else if(Oe){const Ve=re.get(E.texture),Qe=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,j||0,Qe)}N=-1},this.readRenderTargetPixels=function(E,z,j,Z,X,Ae,Oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){he.bindFramebuffer(F.FRAMEBUFFER,ke);try{const Ve=E.texture,Qe=Ve.format,je=Ve.type;if(Qe!==Tn&&xe.convert(Qe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===br&&(ee.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ee.has("EXT_color_buffer_float"));if(je!==Jn&&xe.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===jn&&(pe.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Z&&j>=0&&j<=E.height-X&&F.readPixels(z,j,Z,X,xe.convert(Qe),xe.convert(je),Ae)}finally{const Ve=y!==null?re.get(y).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(E,z,j=0){const Z=Math.pow(2,-j),X=Math.floor(z.image.width*Z),Ae=Math.floor(z.image.height*Z);S.setTexture2D(z,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,E.x,E.y,X,Ae),he.unbindTexture()},this.copyTextureToTexture=function(E,z,j,Z=0){const X=z.image.width,Ae=z.image.height,Oe=xe.convert(j.format),ke=xe.convert(j.type);S.setTexture2D(j,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,E.x,E.y,X,Ae,Oe,ke,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Oe,z.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Z,E.x,E.y,Oe,ke,z.image),Z===0&&j.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(E,z,j,Z,X=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=E.max.x-E.min.x+1,Oe=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,Ve=xe.convert(Z.format),Qe=xe.convert(Z.type);let je;if(Z.isData3DTexture)S.setTexture3D(Z,0),je=F.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)S.setTexture2DArray(Z,0),je=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const Je=F.getParameter(F.UNPACK_ROW_LENGTH),bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Kt=F.getParameter(F.UNPACK_SKIP_PIXELS),Lt=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES),xt=j.isCompressedTexture?j.mipmaps[X]:j.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(je,X,z.x,z.y,z.z,Ae,Oe,ke,Ve,Qe,xt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(je,X,z.x,z.y,z.z,Ae,Oe,ke,Ve,xt.data)):F.texSubImage3D(je,X,z.x,z.y,z.z,Ae,Oe,ke,Ve,Qe,xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),X===0&&Z.generateMipmaps&&F.generateMipmap(je),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){U=0,P=0,y=null,he.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oa?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Es?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?mi:yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?Vt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Y_ extends $c{}Y_.prototype.isWebGL1Renderer=!0;class j_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Mr extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new V,Nl=new V,Fl=new Ut,pa=new Ba,Qr=new ys;class cs extends Wt{constructor(e=new on,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Il.fromBufferAttribute(t,r-1),Nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Il.distanceTo(Nl);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;Fl.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,u=new V,p=new V,h=new V,m=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let M=d,L=T-1;M<L;M+=m){const U=_.getX(M),P=_.getX(M+1);if(c.fromBufferAttribute(f,U),u.fromBufferAttribute(f,P),pa.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||t.push({distance:N,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),T=Math.min(f.count,o.start+o.count);for(let M=d,L=T-1;M<L;M+=m){if(c.fromBufferAttribute(f,M),u.fromBufferAttribute(f,M+1),pa.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ol=new V,Bl=new V;class K_ extends cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ol.fromBufferAttribute(t,r),Bl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ol.distanceTo(Bl);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ha extends on{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new V,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const m=n+p/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class As extends on{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],m=[];let _=0;const v=[],f=n/2;let d=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(m,2));function T(){const L=new V,U=new V;let P=0;const y=(t-e)/n;for(let N=0;N<=s;N++){const g=[],b=N/s,I=b*(t-e)+e;for(let B=0;B<=r;B++){const ne=B/r,D=ne*l+a,w=Math.sin(D),C=Math.cos(D);U.x=I*w,U.y=-b*n+f,U.z=I*C,p.push(U.x,U.y,U.z),L.set(w,y,C).normalize(),h.push(L.x,L.y,L.z),m.push(ne,1-b),g.push(_++)}v.push(g)}for(let N=0;N<r;N++)for(let g=0;g<s;g++){const b=v[g][N],I=v[g+1][N],B=v[g+1][N+1],ne=v[g][N+1];u.push(b,I,ne),u.push(I,B,ne),P+=6}c.addGroup(d,P,0),d+=P}function M(L){const U=_,P=new Ke,y=new V;let N=0;const g=L===!0?e:t,b=L===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,f*b,0),h.push(0,b,0),m.push(.5,.5),_++;const I=_;for(let B=0;B<=r;B++){const D=B/r*l+a,w=Math.cos(D),C=Math.sin(D);y.x=g*C,y.y=f*b,y.z=g*w,p.push(y.x,y.y,y.z),h.push(0,b,0),P.x=w*.5+.5,P.y=C*.5*b+.5,m.push(P.x,P.y),_++}for(let B=0;B<r;B++){const ne=U+B,D=I+B;L===!0?u.push(D,D+1,ne):u.push(D+1,D,ne),N+=3}c.addGroup(d,N,L===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends As{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xc extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ma=new Ut,zl=new V,kl=new V;class Z_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J_ extends Z_{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q_ extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ev extends Xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tv extends K_{constructor(e=10,t=10,n=4473924,r=8947848){n=new at(n),r=new at(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,_=-a;h<=t;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=h===s?n:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new on;u.setAttribute("position",new $t(l,3)),u.setAttribute("color",new $t(c,3));const p=new Mr({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Hl={type:"change"},ga={type:"start"},Vl={type:"end"},ts=new Ba,Wl=new qn,nv=Math.cos(70*Gh.DEG2RAD);class iv extends Si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ie),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hl),n.update(),s=r.NONE},this.update=function(){const A=new V,Y=new _i().setFromUnitVectors(e.up,new V(0,1,0)),Q=Y.clone().invert(),oe=new V,K=new _i,R=new V,ae=2*Math.PI;return function(be=null){const Pe=n.object.position;A.copy(Pe).sub(n.target),A.applyQuaternion(Y),a.setFromVector3(A),n.autoRotate&&s===r.NONE&&B(b(be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(We)&&isFinite($e)&&(We<-Math.PI?We+=ae:We>Math.PI&&(We-=ae),$e<-Math.PI?$e+=ae:$e>Math.PI&&($e-=ae),We<=$e?a.theta=Math.max(We,Math.min($e,a.theta)):a.theta=a.theta>(We+$e)/2?Math.max(We,a.theta):Math.min($e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Q),Pe.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let dt=!1;if(n.zoomToCursor&&P){let ht=null;if(n.object.isPerspectiveCamera){const nt=A.length();ht=J(nt*c);const mt=nt-ht;n.object.position.addScaledVector(L,mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const nt=new V(U.x,U.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),dt=!0;const mt=new V(U.x,U.y,0);mt.unproject(n.object),n.object.position.sub(mt).add(nt),n.object.updateMatrixWorld(),ht=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ht!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ht).add(n.object.position):(ts.origin.copy(n.object.position),ts.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ts.direction))<nv?e.lookAt(n.target):(Wl.setFromNormalAndCoplanarPoint(n.object.up,n.target),ts.intersectPlane(Wl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),dt=!0);return c=1,P=!1,dt||oe.distanceToSquared(n.object.position)>o||8*(1-K.dot(n.object.quaternion))>o||R.distanceToSquared(n.target)>0?(n.dispatchEvent(Hl),oe.copy(n.object.position),K.copy(n.object.quaternion),R.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qe),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gl,l=new Gl;let c=1;const u=new V,p=new Ke,h=new Ke,m=new Ke,_=new Ke,v=new Ke,f=new Ke,d=new Ke,T=new Ke,M=new Ke,L=new V,U=new Ke;let P=!1;const y=[],N={};let g=!1;function b(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function I(A){const Y=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*Y)}function B(A){l.theta-=A}function ne(A){l.phi-=A}const D=function(){const A=new V;return function(Q,oe){A.setFromMatrixColumn(oe,0),A.multiplyScalar(-Q),u.add(A)}}(),w=function(){const A=new V;return function(Q,oe){n.screenSpacePanning===!0?A.setFromMatrixColumn(oe,1):(A.setFromMatrixColumn(oe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Q),u.add(A)}}(),C=function(){const A=new V;return function(Q,oe){const K=n.domElement;if(n.object.isPerspectiveCamera){const R=n.object.position;A.copy(R).sub(n.target);let ae=A.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Q*ae/K.clientHeight,n.object.matrix),w(2*oe*ae/K.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Q*(n.object.right-n.object.left)/n.object.zoom/K.clientWidth,n.object.matrix),w(oe*(n.object.top-n.object.bottom)/n.object.zoom/K.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(A,Y){if(!n.zoomToCursor)return;P=!0;const Q=n.domElement.getBoundingClientRect(),oe=A-Q.left,K=Y-Q.top,R=Q.width,ae=Q.height;U.x=oe/R*2-1,U.y=-(K/ae)*2+1,L.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function se(A){p.set(A.clientX,A.clientY)}function ge(A){k(A.clientX,A.clientX),d.set(A.clientX,A.clientY)}function q(A){_.set(A.clientX,A.clientY)}function ce(A){h.set(A.clientX,A.clientY),m.subVectors(h,p).multiplyScalar(n.rotateSpeed);const Y=n.domElement;B(2*Math.PI*m.x/Y.clientHeight),ne(2*Math.PI*m.y/Y.clientHeight),p.copy(h),n.update()}function Se(A){T.set(A.clientX,A.clientY),M.subVectors(T,d),M.y>0?$(I(M.y)):M.y<0&&H(I(M.y)),d.copy(T),n.update()}function Le(A){v.set(A.clientX,A.clientY),f.subVectors(v,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(v),n.update()}function Ee(A){k(A.clientX,A.clientY),A.deltaY<0?H(I(A.deltaY)):A.deltaY>0&&$(I(A.deltaY)),n.update()}function Fe(A){let Y=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),Y=!0;break}Y&&(A.preventDefault(),n.update())}function Re(A){if(y.length===1)p.set(A.pageX,A.pageY);else{const Y=xe(A),Q=.5*(A.pageX+Y.x),oe=.5*(A.pageY+Y.y);p.set(Q,oe)}}function Ue(A){if(y.length===1)_.set(A.pageX,A.pageY);else{const Y=xe(A),Q=.5*(A.pageX+Y.x),oe=.5*(A.pageY+Y.y);_.set(Q,oe)}}function _e(A){const Y=xe(A),Q=A.pageX-Y.x,oe=A.pageY-Y.y,K=Math.sqrt(Q*Q+oe*oe);d.set(0,K)}function F(A){n.enableZoom&&_e(A),n.enablePan&&Ue(A)}function Ge(A){n.enableZoom&&_e(A),n.enableRotate&&Re(A)}function ee(A){if(y.length==1)h.set(A.pageX,A.pageY);else{const Q=xe(A),oe=.5*(A.pageX+Q.x),K=.5*(A.pageY+Q.y);h.set(oe,K)}m.subVectors(h,p).multiplyScalar(n.rotateSpeed);const Y=n.domElement;B(2*Math.PI*m.x/Y.clientHeight),ne(2*Math.PI*m.y/Y.clientHeight),p.copy(h)}function pe(A){if(y.length===1)v.set(A.pageX,A.pageY);else{const Y=xe(A),Q=.5*(A.pageX+Y.x),oe=.5*(A.pageY+Y.y);v.set(Q,oe)}f.subVectors(v,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(v)}function he(A){const Y=xe(A),Q=A.pageX-Y.x,oe=A.pageY-Y.y,K=Math.sqrt(Q*Q+oe*oe);T.set(0,K),M.set(0,Math.pow(T.y/d.y,n.zoomSpeed)),$(M.y),d.copy(T);const R=(A.pageX+Y.x)*.5,ae=(A.pageY+Y.y)*.5;k(R,ae)}function De(A){n.enableZoom&&he(A),n.enablePan&&pe(A)}function re(A){n.enableZoom&&he(A),n.enableRotate&&ee(A)}function S(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",O)),He(A),A.pointerType==="touch"?ze(A):le(A))}function x(A){n.enabled!==!1&&(A.pointerType==="touch"?fe(A):ue(A))}function O(A){Be(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(Vl),s=r.NONE}function le(A){let Y;switch(A.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case yi.DOLLY:if(n.enableZoom===!1)return;ge(A),s=r.DOLLY;break;case yi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;q(A),s=r.PAN}else{if(n.enableRotate===!1)return;se(A),s=r.ROTATE}break;case yi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;se(A),s=r.ROTATE}else{if(n.enablePan===!1)return;q(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ga)}function ue(A){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(A);break;case r.DOLLY:if(n.enableZoom===!1)return;Se(A);break;case r.PAN:if(n.enablePan===!1)return;Le(A);break}}function de(A){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(A.preventDefault(),n.dispatchEvent(ga),Ee(Te(A)),n.dispatchEvent(Vl))}function Te(A){const Y=A.deltaMode,Q={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(Y){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return A.ctrlKey&&!g&&(Q.deltaY*=10),Q}function Me(A){A.key==="Control"&&(g=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(A){A.key==="Control"&&(g=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Ie(A){n.enabled===!1||n.enablePan===!1||Fe(A)}function ze(A){switch(Ne(A),y.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;Re(A),s=r.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;Ue(A),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(A),s=r.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(A),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ga)}function fe(A){switch(Ne(A),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ee(A),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(A),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(A),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(A),n.update();break;default:s=r.NONE}}function qe(A){n.enabled!==!1&&A.preventDefault()}function He(A){y.push(A.pointerId)}function Be(A){delete N[A.pointerId];for(let Y=0;Y<y.length;Y++)if(y[Y]==A.pointerId){y.splice(Y,1);return}}function Ne(A){let Y=N[A.pointerId];Y===void 0&&(Y=new Ke,N[A.pointerId]=Y),Y.set(A.pageX,A.pageY)}function xe(A){const Y=A.pointerId===y[0]?y[1]:y[0];return N[Y]}n.domElement.addEventListener("contextmenu",qe),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",de,{passive:!1}),document.addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}var rv=ut(`<div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm
                rounded-lg border border-slate-600/50 text-sm text-slate-300 z-10">太阳位于地平线以下</div>`),sv=ut('<div class="px-3 py-1.5 backdrop-blur-sm rounded-lg border text-xs flex items-center gap-2"><span class="w-2 h-2 rounded-full"></span> </div>'),av=ut('<div class="absolute top-4 right-4 flex flex-col gap-1 z-10"></div>'),ov=ut('<div class="w-full h-full relative"><!> <!> <div class="absolute bottom-4 left-4 text-xs text-slate-500 z-10">拖拽旋转 · 滚轮缩放</div></div>');function lv(i,e){xi(e,!0);const t=()=>pt(h,"$config",u),n=()=>pt(m,"$solarPosition",u),r=()=>pt(_,"$sunVisible",u),s=()=>pt(v,"$currentShadow",u),o=()=>pt(f,"$shadowTrack",u),a=()=>pt(T,"$comparePresetsData",u),l=()=>pt(M,"$keyDateTracks",u),c=()=>pt(d,"$hourMarks",u),[u,p]=ir(),{config:h,solarPosition:m,sunVisible:_,currentShadow:v,shadowTrack:f,hourMarks:d,comparePresetsData:T,keyDateTracks:M}=rr;let L=null,U,P,y,N,g,b,I,B,ne,D,w,C,$=[],H=[],k=[],J=rs(!1);function se(ee){const pe=ee.clientWidth,he=ee.clientHeight;U=new j_,U.background=new at(988970),P=new gn(50,pe/he,.1,1e3),P.position.set(4,3,5),y=new $c({antialias:!0}),y.setSize(pe,he),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=hc,y.toneMapping=pc,y.toneMappingExposure=1.2,ee.appendChild(y.domElement),N=new iv(P,y.domElement),N.enableDamping=!0,N.dampingFactor=.05,N.minDistance=3,N.maxDistance=15,N.target.set(0,.5,0),b=new ev(4210784,.4),U.add(b),g=new Q_(16774630,1.5),g.position.set(5,10,5),g.castShadow=!0,g.shadow.mapSize.width=2048,g.shadow.mapSize.height=2048,g.shadow.camera.near=.5,g.shadow.camera.far=50,g.shadow.camera.left=-10,g.shadow.camera.right=10,g.shadow.camera.top=10,g.shadow.camera.bottom=-10,U.add(g);const De=new Ha(8,64),re=new es({color:1976635,roughness:.8,metalness:.2}),S=new Qt(De,re);S.rotation.x=-Math.PI/2,S.receiveShadow=!0,U.add(S);const x=new tv(10,20,3359061,1976635);U.add(x),ne=new di,U.add(ne);const O=new As(1.5,1.5,.08,64),le=new es({color:13935988,roughness:.6,metalness:.4});B=new Qt(O,le),B.receiveShadow=!0,B.castShadow=!0,ne.add(B),C=new di,ne.add(C);const ue=new Xi(.05,1.2,16),de=new es({color:4674921,roughness:.4,metalness:.7});I=new Qt(ue,de),I.castShadow=!0,I.position.y=.6,ne.add(I);const Te=new Xi(.02,2,8),Me=new xr({color:0,transparent:!0,opacity:.3});D=new Qt(Te,Me),D.visible=!1,ne.add(D);for(let xe=0;xe<4;xe++){const A=new Xi(.02,2,8),Y=new xr({color:new at(Ht[xe]),transparent:!0,opacity:.5}),Q=new Qt(A,Y);Q.visible=!1,ne.add(Q),$.push(Q)}const ye=new on,Ie=new Mr({color:16096779,transparent:!0,opacity:.8});w=new cs(ye,Ie),ne.add(w);for(let xe=0;xe<4;xe++){const A=new on,Y=new Mr({color:new at(Ht[xe]),transparent:!0,opacity:.6}),Q=new cs(A,Y);Q.visible=!1,ne.add(Q),H.push(Q)}for(let xe=0;xe<4;xe++){const A=new on,Y=new Mr({color:16777215,transparent:!0,opacity:.7,linewidth:2}),Q=new cs(A,Y);Q.visible=!1,ne.add(Q),k.push(Q)}const ze=new di,fe=new xr({color:9741240}),qe=new Xi(.08,.2,4),He=new Qt(qe,fe);He.position.set(0,.1,-1.7),He.rotation.x=Math.PI/2,ze.add(He),U.add(ze);function Be(){requestAnimationFrame(Be),N.update(),y.render(U,P)}Be();function Ne(){if(!ee)return;const xe=ee.clientWidth,A=ee.clientHeight;P.aspect=xe/A,P.updateProjectionMatrix(),y.setSize(xe,A)}return window.addEventListener("resize",Ne),{cleanup:()=>window.removeEventListener("resize",Ne)}}function ge(ee,pe,he){for(;C.children.length>0;)C.remove(C.children[0]);const De=lt(d),re=1.5,S=new es({color:1976635,roughness:.5,metalness:.3});for(const x of De){const O=x.angle*Math.PI/180,le=Math.min(x.radius,re*.9),ue=Math.sin(O)*le,de=Math.cos(O)*le,Te=new ar(.02,.03,.1),Me=new Qt(Te,S);Me.position.set(ue,.06,de),Me.rotation.y=-O,C.add(Me)}}function q(){const ee=lt(h),pe=ee.type,he=ee.latitude,De=ee.gnomonLength;switch(ne.rotation.set(0,0,0),B.position.y=.04,I.position.set(0,De/2,0),I.rotation.set(0,0,0),pe){case"equatorial":ne.rotation.x=(90-he)*Math.PI/180,B.position.y=.8,I.rotation.x=0,I.position.y=De/2+.8;break;case"horizontal":B.position.y=.04,I.rotation.x=-he*Math.PI/180,I.position.set(0,De/2*Math.cos(he*Math.PI/180),0);break;case"vertical":ne.rotation.x=Math.PI/2,B.position.set(0,1.5,0),I.rotation.x=0,I.position.set(0,1.5,De/2),I.rotation.y=0;break}ge()}function ce(){const ee=lt(m);if(!lt(_)){g.intensity=.2,D.visible=!1;return}const he=ee.altitude*Math.PI/180,De=ee.azimuth*Math.PI/180,re=20,S=Math.sin(De)*Math.cos(he)*re,x=Math.sin(he)*re,O=Math.cos(De)*Math.cos(he)*re;g.position.set(S,x,O),g.intensity=1.5,Le()}function Se(ee,pe,he,De){const re=Math.min(pe.length,4);ee.scale.y=re/2;const S=pe.angle*Math.PI/180;if(he==="horizontal")ee.rotation.x=Math.PI/2,ee.position.x=Math.sin(S)*re/2,ee.position.z=Math.cos(S)*re/2,ee.position.y=.05;else if(he==="equatorial"){ee.position.y=.8+.05,ee.rotation.x=Math.PI/2-(90-De)*Math.PI/180;const x=S;ee.position.x=Math.sin(x)*re/2,ee.position.z=Math.cos(x)*re/2*Math.cos((90-De)*Math.PI/180)}else he==="vertical"&&(ee.rotation.x=0,ee.rotation.y=-S,ee.position.z=re/2,ee.position.y=1.5,ee.position.x=Math.sin(S)*re/2)}function Le(){const ee=lt(v),pe=lt(_),he=lt(h);!pe||!ee||!he.showCurrentPoint?D.visible=!1:(D.visible=!0,Se(D,ee,he.type,he.latitude));const De=lt(T);for(let re=0;re<4;re++)if(re<De.length&&he.compareMode&&he.showCurrentPoint){const S=De[re];S.shadow&&S.sunVisible?($[re].visible=!0,Se($[re],S.shadow,S.preset.type,S.preset.latitude)):$[re].visible=!1}else $[re].visible=!1}function Ee(ee,pe,he,De){const re=new Float32Array(pe.length*3);for(let S=0;S<pe.length;S++){const x=pe[S],O=x.angle*Math.PI/180,le=Math.min(x.length,4);if(he==="horizontal")re[S*3]=Math.sin(O)*le,re[S*3+1]=.05,re[S*3+2]=Math.cos(O)*le;else if(he==="equatorial"){const ue=(90-De)*Math.PI/180;re[S*3]=Math.sin(O)*le,re[S*3+1]=.8+Math.sin(ue)*le*Math.cos(O),re[S*3+2]=Math.cos(O)*le*Math.cos(ue)}else re[S*3]=Math.sin(O)*le,re[S*3+1]=1.5,re[S*3+2]=Math.cos(O)*le}ee.geometry.setAttribute("position",new An(re,3)),ee.geometry.computeBoundingSphere()}function Fe(){const ee=lt(h),pe=lt(f);!ee.showTrack||!pe||pe.length===0?w.visible=!1:(w.visible=!0,Ee(w,pe,ee.type,ee.latitude));const he=lt(T);for(let re=0;re<4;re++)if(re<he.length&&ee.compareMode&&ee.showTrack){const S=he[re];S.shadowTrack&&S.shadowTrack.length>0?(H[re].visible=!0,Ee(H[re],S.shadowTrack,S.preset.type,S.preset.latitude)):H[re].visible=!1}else H[re].visible=!1;const De=lt(M);for(let re=0;re<4;re++)if(re<De.length&&ee.showTrack){const S=De[re];S.shadowTrack&&S.shadowTrack.length>0?(k[re].visible=!0,k[re].material.color.set(S.color),Ee(k[re],S.shadowTrack,ee.type,ee.latitude)):k[re].visible=!1}else k[re].visible=!1}Er(()=>{ie(J)&&(t(),n(),r(),s(),o(),a(),l(),c(),q(),ce(),Le(),Fe())}),Er(()=>{if(!L)return;const{cleanup:ee}=se(L);return En(J,!0),q(),ce(),Le(),Fe(),()=>{ee(),y.dispose()}});var Re=ov(),Ue=W(Re);{var _e=ee=>{var pe=rv();Ce(ee,pe)};_t(Ue,ee=>{r()||ee(_e)})}var F=te(Ue,2);{var Ge=ee=>{var pe=av();Dt(pe,5,a,Ft,(he,De)=>{var re=sv(),S=W(re),x=te(S);G(re),ft(()=>{jt(re,`background-color: ${ie(De).color??""}20; border-color: ${ie(De).color??""}60; color: ${ie(De).color??""}`),jt(S,`background-color: ${ie(De).color??""}`),Xe(x,` ${ie(De).preset.name??""}`)}),Ce(he,re)}),G(pe),Ce(ee,pe)};_t(F,ee=>{t().compareMode&&a().length>0&&ee(Ge)})}Tt(2),G(Re),Ou(Re,ee=>L=ee,()=>L),Ce(i,Re),Mi(),p()}var cv=hn('<radialGradient cx="50%" cy="50%" r="50%"><stop offset="0%" stop-opacity="0.3"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient><filter><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>',1),uv=hn('<text fill="#64748b" font-size="10" font-family="Inter, sans-serif"> </text>'),dv=hn('<path fill="none" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"></path>'),hv=hn('<path fill="none" stroke-width="2.5" stroke-dasharray="8,4" opacity="0.8"></path>'),fv=hn('<path fill="none" stroke="#f59e0b" stroke-width="2" filter="url(#glow)" opacity="0.8"></path>'),pv=hn('<line stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle r="15"></circle><circle r="5"></circle><circle r="2" fill="#ffffff"></circle>',1),mv=hn('<line stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle r="15" fill="url(#trackGlow)"></circle><circle r="5" fill="#ef4444" filter="url(#glow)"></circle><circle r="2" fill="#ffffff"></circle>',1),gv=ut('<div class="flex justify-center"><svg class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><radialGradient id="trackGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop></radialGradient><!><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><circle fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"></circle><circle fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2,4"></circle><line stroke="#334155" stroke-width="1"></line><line stroke="#334155" stroke-width="1"></line><!><!><!><!><circle r="4" fill="#94a3b8"></circle><!><!></svg></div>'),_v=hn('<line stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4"></line><text text-anchor="end" fill="#64748b" font-size="9" font-family="Inter, sans-serif"> </text>',1),vv=hn('<line stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4"></line><text text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif"> </text>',1),xv=hn('<path fill="none" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"></path>'),Mv=hn('<path fill="none" stroke-width="2" stroke-dasharray="6,4" opacity="0.85"></path>'),Sv=hn('<circle r="5" fill="#ef4444" stroke="#fff" stroke-width="1.5"></circle>'),Ev=ut('<div class="flex justify-center"><svg class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><linearGradient id="altitudeGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"></stop></linearGradient></defs><!><!><rect fill="#f59e0b" opacity="0.05"></rect><line stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"></line><line stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"></line><!><!><path fill="url(#altitudeGradient)"></path><path fill="none" stroke="#f59e0b" stroke-width="2"></path><!><text text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">日出</text><text text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">日落</text></svg></div>'),yv=ut('<div class="p-2 rounded-lg border"><div class="text-xs font-medium flex items-center gap-2"><span class="w-2 h-2 rounded-full"></span> </div> <div class="text-xs text-slate-400 flex gap-3 mt-1"><span> </span> <span> </span></div></div>'),bv=ut('<div class="mt-3 space-y-2"></div>'),Tv=ut('<div class="flex items-center justify-between p-1.5 rounded-md"><div class="text-xs font-medium"> </div> <div class="text-xs text-slate-400"> </div></div>'),Av=ut('<div class="mt-3 space-y-1.5"><div class="text-xs text-slate-500 mb-1">关键日期轨迹</div> <!></div>'),wv=ut('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 影子轨迹</h3> <div class="flex gap-1"><button title="显示/隐藏轨迹线"><!> 轨迹</button> <button title="显示/隐藏当前位置"><!> 当前</button></div></div> <div class="flex gap-1 mb-3"><button><!> 轨迹视图</button> <button><!> 高度曲线</button></div> <!> <div class="mt-4 grid grid-cols-2 gap-3 text-center"><div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子长度</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子角度</div> <div class="font-mono text-sm text-slate-200"> </div></div></div> <!> <!> <div class="mt-3 text-center text-xs text-slate-500">当前时间: <span class="font-mono text-slate-300"> </span></div></div>');function Rv(i,e){xi(e,!1);const t=()=>pt(h,"$config",u),n=()=>pt(M,"$comparePresetsData",u),r=()=>pt(L,"$keyDateTracks",u),s=()=>pt(m,"$shadowTrack",u),o=()=>pt(v,"$sunVisible",u),a=()=>pt(_,"$currentShadow",u),l=()=>pt(d,"$altitudeCurve",u),c=()=>pt(T,"$solarPosition",u),[u,p]=ir(),{config:h,shadowTrack:m,currentShadow:_,sunVisible:v,sunriseSunset:f,altitudeCurve:d,solarPosition:T,comparePresetsData:M,keyDateTracks:L,setShowTrack:U,setShowCurrentPoint:P}=rr;let y=Kl("track");const N=280,g=24,b=N-g*2,I=N/2,B=N/2;function ne(Y){const Q=Math.floor(Y),oe=Math.floor((Y-Q)*60);return`${Q.toString().padStart(2,"0")}:${oe.toString().padStart(2,"0")}`}function D(){const Y=lt(m),Q=lt(M),oe=lt(L),K=[...Y||[]];for(const be of Q)K.push(...be.shadowTrack);for(const be of oe)K.push(...be.shadowTrack);if(!K||K.length===0)return .05;const R=Math.max(...K.map(be=>Math.abs(be.x))),ae=Math.max(...K.map(be=>Math.abs(be.y))),me=Math.max(R,ae)||1;return b/2/me*.9}function w(Y,Q){return!Y||Y.length===0?"":Y.map((oe,K)=>{const R=I+oe.x*Q,ae=B+oe.y*Q;return(K===0?"M":"L")+R.toFixed(2)+" "+ae.toFixed(2)}).join(" ")}function C(Y,Q){return!lt(v)||!Y?{x:I,y:B}:{x:I+Y.x*Q,y:B+Y.y*Q}}function $(){U(!lt(h).showTrack)}function H(){P(!lt(h).showCurrentPoint)}function k(Y){return!lt(v)||!Y?"--":Y.length.toFixed(2)}function J(Y){return!lt(v)||!Y?"--":Y.angle.toFixed(1)+"°"}function se(Y){if(!Y||Y.length===0)return"";const Q=N-g*2,oe=N-g*2-20,K=90;return Y.map((R,ae)=>{const me=g+R.hour/24*Q,be=g+oe-R.altitude/K*oe;return(ae===0?"M":"L")+me.toFixed(2)+" "+be.toFixed(2)}).join(" ")}function ge(Y){if(!Y||Y.length===0)return"";const Q=N-g*2,oe=N-g*2-20,K=90,R=g+oe;let ae=`M ${g} ${R} `;for(let be=0;be<Y.length;be++){const Pe=Y[be],We=g+Pe.hour/24*Q,$e=g+oe-Pe.altitude/K*oe;ae+=`L ${We.toFixed(2)} ${$e.toFixed(2)} `}const me=g+Y[Y.length-1].hour/24*Q;return ae+=`L ${me.toFixed(2)} ${R} Z`,ae}function q(){const Y=lt(f),Q=N-g*2;return{sunrise:g+Y.sunrise/24*Q,sunset:g+Y.sunset/24*Q}}const ce=[{x:I,y:g-4,label:"N",align:"middle"},{x:I,y:N-g+10,label:"S",align:"middle"},{x:g-8,y:B+4,label:"W",align:"end"},{x:N-g+8,y:B+4,label:"E",align:"start"}],Se=[0,6,12,18,24];wr();var Le=wv(),Ee=W(Le),Fe=W(Ee),Re=W(Fe);uo(Re,{class:"w-4 h-4"}),Tt(),G(Fe);var Ue=te(Fe,2),_e=W(Ue),F=W(_e);Cd(F,{class:"w-3 h-3"}),Tt(),G(_e);var Ge=te(_e,2),ee=W(Ge);wd(ee,{class:"w-3 h-3"}),Tt(),G(Ge),G(Ue),G(Ee);var pe=te(Ee,2),he=W(pe),De=W(he);uo(De,{class:"w-3 h-3"}),Tt(),G(he);var re=te(he,2),S=W(re);Od(S,{class:"w-3 h-3"}),Tt(),G(re),G(pe);var x=te(pe,2);{var O=Y=>{var Q=gv(),oe=W(Q);ve(oe,"width",N),ve(oe,"height",N);var K=W(oe),R=te(W(K));Dt(R,1,()=>Ht,Ft,(Ye,Ze,it)=>{var Et=cv(),ot=st(Et);ve(ot,"id",`compareGlow${it}`);var E=W(ot),z=te(E);G(ot);var j=te(ot);ve(j,"id",`compareFilter${it}`),ft(()=>{ve(E,"stop-color",ie(Ze)),ve(z,"stop-color",ie(Ze))}),Ce(Ye,Et)}),Tt(),G(K);var ae=te(K);ve(ae,"cx",I),ve(ae,"cy",B),ve(ae,"r",b/2-5);var me=te(ae);ve(me,"cx",I),ve(me,"cy",B),ve(me,"r",b/4);var be=te(me);ve(be,"x1",I),ve(be,"y1",g),ve(be,"x2",I),ve(be,"y2",N-g);var Pe=te(be);ve(Pe,"x1",g),ve(Pe,"y1",B),ve(Pe,"x2",N-g),ve(Pe,"y2",B);var We=te(Pe);Dt(We,1,()=>ce,Ft,(Ye,Ze)=>{var it=uv(),Et=W(it,!0);G(it),ft(()=>{ve(it,"x",ie(Ze).x),ve(it,"y",ie(Ze).y),ve(it,"text-anchor",ie(Ze).align),Xe(Et,ie(Ze).label)}),Ce(Ye,it)});var $e=te(We);{var dt=Ye=>{var Ze=ct(),it=st(Ze);Dt(it,1,n,Ft,(Et,ot,E)=>{var z=ct(),j=st(z);{var Z=X=>{var Ae=dv();ve(Ae,"filter",`url(#compareFilter${E})`),ft(Oe=>{ve(Ae,"d",Oe),ve(Ae,"stroke",ie(ot).color)},[()=>w(ie(ot).shadowTrack,D())]),Ce(X,Ae)};_t(j,X=>{ie(ot).shadowTrack&&ie(ot).shadowTrack.length>0&&X(Z)})}Ce(Et,z)}),Ce(Ye,Ze)};_t($e,Ye=>{t().compareMode&&n().length>0&&t().showTrack&&Ye(dt)})}var ht=te($e);{var nt=Ye=>{var Ze=ct(),it=st(Ze);Dt(it,1,r,Ft,(Et,ot)=>{var E=ct(),z=st(E);{var j=Z=>{var X=hv();ft(Ae=>{ve(X,"d",Ae),ve(X,"stroke",ie(ot).color)},[()=>w(ie(ot).shadowTrack,D())]),Ce(Z,X)};_t(z,Z=>{ie(ot).shadowTrack&&ie(ot).shadowTrack.length>0&&Z(j)})}Ce(Et,E)}),Ce(Ye,Ze)};_t(ht,Ye=>{r().length>0&&t().showTrack&&Ye(nt)})}var mt=te(ht);{var nn=Ye=>{var Ze=fv();ft(it=>ve(Ze,"d",it),[()=>w(s(),D())]),Ce(Ye,Ze)};_t(mt,Ye=>{t().showTrack&&Ye(nn)})}var wn=te(mt);ve(wn,"cx",I),ve(wn,"cy",B);var ei=te(wn);{var St=Ye=>{var Ze=ct(),it=st(Ze);Dt(it,1,n,Ft,(Et,ot,E)=>{var z=ct(),j=st(z);{var Z=X=>{var Ae=pv(),Oe=st(Ae);ve(Oe,"x1",I),ve(Oe,"y1",B);var ke=te(Oe);ve(ke,"fill",`url(#compareGlow${E})`);var Ve=te(ke);ve(Ve,"filter",`url(#compareFilter${E})`);var Qe=te(Ve);ft((je,Je,bt,Kt,Lt,vn,xt,et)=>{ve(Oe,"x2",je),ve(Oe,"y2",Je),ve(Oe,"stroke",ie(ot).color),ve(ke,"cx",bt),ve(ke,"cy",Kt),ve(Ve,"cx",Lt),ve(Ve,"cy",vn),ve(Ve,"fill",ie(ot).color),ve(Qe,"cx",xt),ve(Qe,"cy",et)},[()=>C(ie(ot).shadow,D()).x,()=>C(ie(ot).shadow,D()).y,()=>C(ie(ot).shadow,D()).x,()=>C(ie(ot).shadow,D()).y,()=>C(ie(ot).shadow,D()).x,()=>C(ie(ot).shadow,D()).y,()=>C(ie(ot).shadow,D()).x,()=>C(ie(ot).shadow,D()).y]),Ce(X,Ae)};_t(j,X=>{ie(ot).shadow&&ie(ot).sunVisible&&X(Z)})}Ce(Et,z)}),Ce(Ye,Ze)};_t(ei,Ye=>{t().compareMode&&n().length>0&&t().showCurrentPoint&&Ye(St)})}var vt=te(ei);{var zt=Ye=>{var Ze=mv(),it=st(Ze);ve(it,"x1",I),ve(it,"y1",B);var Et=te(it),ot=te(Et),E=te(ot);ft((z,j,Z,X,Ae,Oe,ke,Ve)=>{ve(it,"x2",z),ve(it,"y2",j),ve(Et,"cx",Z),ve(Et,"cy",X),ve(ot,"cx",Ae),ve(ot,"cy",Oe),ve(E,"cx",ke),ve(E,"cy",Ve)},[()=>C(a(),D()).x,()=>C(a(),D()).y,()=>C(a(),D()).x,()=>C(a(),D()).y,()=>C(a(),D()).x,()=>C(a(),D()).y,()=>C(a(),D()).x,()=>C(a(),D()).y]),Ce(Ye,Ze)};_t(vt,Ye=>{o()&&a()&&t().showCurrentPoint&&Ye(zt)})}G(oe),G(Q),Ce(Y,Q)},le=Y=>{var Q=Ev(),oe=W(Q);ve(oe,"width",N),ve(oe,"height",N);var K=te(W(oe));Dt(K,0,()=>[0,30,60,90],Ft,(St,vt)=>{var zt=_v(),Ye=st(zt);ve(Ye,"x1",g),ve(Ye,"x2",N-g);var Ze=te(Ye);ve(Ze,"x",g-4);var it=W(Ze);G(Ze),ft(()=>{ve(Ye,"y1",g+(N-g*2-20)*(1-vt/90)),ve(Ye,"y2",g+(N-g*2-20)*(1-vt/90)),ve(Ze,"y",g+(N-g*2-20)*(1-vt/90)+4),Xe(it,`${vt??""}°`)}),Ce(St,zt)});var R=te(K);Dt(R,1,()=>Se,Ft,(St,vt)=>{var zt=vv(),Ye=st(zt);ve(Ye,"y1",g),ve(Ye,"y2",N-g-20);var Ze=te(Ye);ve(Ze,"y",N-g-6);var it=W(Ze,!0);G(Ze),ft(Et=>{ve(Ye,"x1",g+ie(vt)/24*(N-g*2)),ve(Ye,"x2",g+ie(vt)/24*(N-g*2)),ve(Ze,"x",g+ie(vt)/24*(N-g*2)),Xe(it,Et)},[()=>ne(ie(vt))]),Ce(St,zt)});var ae=te(R);ve(ae,"y",g),ve(ae,"height",N-g*2-20);var me=te(ae);ve(me,"y1",g),ve(me,"y2",N-g-20);var be=te(me);ve(be,"y1",g),ve(be,"y2",N-g-20);var Pe=te(be);{var We=St=>{var vt=ct(),zt=st(vt);Dt(zt,1,n,Ft,(Ye,Ze)=>{var it=xv();ft(Et=>{ve(it,"d",Et),ve(it,"stroke",ie(Ze).color)},[()=>se(ie(Ze).altitudeCurve)]),Ce(Ye,it)}),Ce(St,vt)};_t(Pe,St=>{t().compareMode&&n().length>0&&St(We)})}var $e=te(Pe);{var dt=St=>{var vt=ct(),zt=st(vt);Dt(zt,1,r,Ft,(Ye,Ze)=>{var it=Mv();ft(Et=>{ve(it,"d",Et),ve(it,"stroke",ie(Ze).color)},[()=>se(ie(Ze).altitudeCurve)]),Ce(Ye,it)}),Ce(St,vt)};_t($e,St=>{r().length>0&&St(dt)})}var ht=te($e),nt=te(ht),mt=te(nt);{var nn=St=>{var vt=Sv();ft(()=>{ve(vt,"cx",g+t().timeHours/24*(N-g*2)),ve(vt,"cy",g+(N-g*2-20)*(1-c().altitude/90))}),Ce(St,vt)};_t(mt,St=>{o()&&St(nn)})}var wn=te(mt);ve(wn,"y",g-4);var ei=te(wn);ve(ei,"y",g-4),G(oe),G(Q),ft((St,vt,zt,Ye,Ze,it,Et,ot,E,z)=>{ve(ae,"x",St),ve(ae,"width",vt),ve(me,"x1",zt),ve(me,"x2",Ye),ve(be,"x1",Ze),ve(be,"x2",it),ve(ht,"d",Et),ve(nt,"d",ot),ve(wn,"x",E),ve(ei,"x",z)},[()=>q().sunrise,()=>q().sunset-q().sunrise,()=>q().sunrise,()=>q().sunrise,()=>q().sunset,()=>q().sunset,()=>ge(l()),()=>se(l()),()=>q().sunrise,()=>q().sunset]),Ce(Y,Q)};_t(x,Y=>{ie(y)==="track"?Y(O):Y(le,-1)})}var ue=te(x,2),de=W(ue),Te=te(W(de),2),Me=W(Te,!0);G(Te),G(de);var ye=te(de,2),Ie=te(W(ye),2),ze=W(Ie,!0);G(Ie),G(ye),G(ue);var fe=te(ue,2);{var qe=Y=>{var Q=bv();Dt(Q,5,n,Ft,(oe,K)=>{var R=yv(),ae=W(R),me=W(ae),be=te(me);G(ae);var Pe=te(ae,2),We=W(Pe),$e=W(We);G(We);var dt=te(We,2),ht=W(dt);G(dt),G(Pe),G(R),ft((nt,mt)=>{jt(R,`background-color: ${ie(K).color??""}10; border-color: ${ie(K).color??""}30`),jt(ae,`color: ${ie(K).color??""}`),jt(me,`background-color: ${ie(K).color??""}`),Xe(be,` ${ie(K).preset.name??""}`),Xe($e,`长度: ${nt??""}`),Xe(ht,`角度: ${mt??""}`)},[()=>ie(K).shadow?ie(K).shadow.length.toFixed(2):"--",()=>ie(K).shadow?ie(K).shadow.angle.toFixed(1)+"°":"--"]),Ce(oe,R)}),G(Q),Ce(Y,Q)};_t(fe,Y=>{t().compareMode&&n().length>0&&Y(qe)})}var He=te(fe,2);{var Be=Y=>{var Q=Av(),oe=te(W(Q),2);Dt(oe,1,r,Ft,(K,R)=>{var ae=Tv(),me=W(ae),be=W(me,!0);G(me);var Pe=te(me,2),We=W(Pe);G(Pe),G(ae),ft(($e,dt)=>{jt(ae,`background-color: ${ie(R).color??""}10; border-left: 3px solid ${ie(R).color??""}`),jt(me,`color: ${ie(R).color??""}`),Xe(be,ie(R).label),Xe(We,`${$e??""}h · ${dt??""}°`)},[()=>ie(R).sunriseSunset.dayLength.toFixed(1),()=>ie(R).maxAltitude.toFixed(0)]),Ce(K,ae)}),G(Q),Ce(Y,Q)};_t(He,Y=>{r().length>0&&Y(Be)})}var Ne=te(He,2),xe=te(W(Ne)),A=W(xe,!0);G(xe),G(Ne),G(Le),ft((Y,Q,oe)=>{tn(_e,1,`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               ${t().showTrack?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400"}`),tn(Ge,1,`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               ${t().showCurrentPoint?"bg-red-500/20 text-red-400":"bg-slate-700/30 text-slate-400"}`),tn(he,1,`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             ${ie(y)==="track"?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"}`),tn(re,1,`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             ${ie(y)==="altitude"?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"}`),Xe(Me,Y),Xe(ze,Q),Xe(A,oe)},[()=>k(a()),()=>J(a()),()=>ne(t().timeHours)]),Rt("click",_e,$),Rt("click",Ge,H),Rt("click",he,()=>{En(y,"track")}),Rt("click",re,()=>{En(y,"altitude")}),Ce(i,Le),Mi(),p()}Ar(["click"]);var Cv=ut(`<div class="absolute top-2 left-1/2 -translate-x-1/2 z-20 px-3 py-2 bg-red-500/90 text-white text-xs rounded-lg
                shadow-lg shadow-red-500/30 animate-pulse">最多只能对比 4 个方案</div>`),Lv=ut(`<div class="mb-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30"><input type="text" placeholder="方案名称（可选）" class="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-md text-sm
               focus:outline-none focus:border-amber-500/50 mb-2"/> <div class="flex gap-2"><button class="flex-1 py-1.5 bg-amber-500/30 hover:bg-amber-500/50 text-amber-500
                 rounded-md text-sm transition-colors">确认保存</button> <button class="flex-1 py-1.5 bg-slate-600/30 hover:bg-slate-600/50 text-slate-400
                 rounded-md text-sm transition-colors">取消</button></div></div>`),Pv=ut('<div class="flex items-center gap-1 px-2 py-0.5 rounded text-xs"><span class="w-1.5 h-1.5 rounded-full"></span> <span class="truncate max-w-16"> </span></div>'),Dv=ut('<div class="mb-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded-lg"><div class="flex items-center justify-between"><div class="text-xs text-blue-400 flex items-center gap-1"><!> </div> <button class="p-1 rounded hover:bg-blue-500/20 text-blue-400 transition-colors" title="清除对比"><!></button></div> <div class="flex gap-1.5 mt-2"></div></div>'),Uv=ut('<div class="text-center py-8 text-slate-500 text-sm">暂无保存的方案 <br/> <span class="text-xs">点击"保存"按钮保存当前参数</span></div>'),Iv=ut('<div><div class="flex items-start justify-between"><button class="flex-1 min-w-0 text-left mr-2"><div class="font-medium text-sm text-slate-100 truncate"> </div> <div class="text-xs text-slate-400 mt-1 space-y-0.5"><div class="flex gap-3"><span> </span> <span> </span></div> <div class="flex gap-3"><span> </span> <span> </span></div></div></button> <div class="flex items-center gap-1 flex-shrink-0"><button><!></button> <button class="p-1.5 rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors" title="删除"><!></button></div></div></div>'),Nv=ut(`<div class="glass-card p-5 h-full flex flex-col relative overflow-hidden"><!> <div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 参数方案</h3> <button class="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-500
             rounded-md transition-colors flex items-center gap-1"><!> 保存</button></div> <!> <!> <div class="flex-1 overflow-y-auto space-y-2 min-h-0"><!></div> <div class="mt-3 pt-3 border-t border-slate-700/50"><div class="text-xs text-slate-500">点击 <!> 按钮将方案加入对比（最多4个）</div></div></div>`);function Fv(i,e){xi(e,!0);const t=()=>pt(o,"$config",r),n=()=>pt(a,"$presets",r),[r,s]=ir(),{config:o,presets:a,savePreset:l,loadPreset:c,deletePreset:u,setCompareMode:p,toggleComparePreset:h}=rr;let m=rs(""),_=rs(!1),v=rs(!1),f=null;const d={equatorial:"赤道式",horizontal:"水平式",vertical:"垂直式"};function T(_e){const F=Math.floor(_e),Ge=Math.floor((_e-F)*60);return`${F.toString().padStart(2,"0")}:${Ge.toString().padStart(2,"0")}`}function M(_e){return _e}function L(){const _e=lt(o),F=ie(m).trim()||`${d[_e.type]} - ${_e.date}`;l(F)&&(En(m,""),En(_,!1))}function U(_e){h(_e)===!1&&(f&&clearTimeout(f),En(v,!0),f=setTimeout(()=>{En(v,!1)},2e3))}function P(_e){u(_e)}function y(_e){c(_e)}function N(_e){const Ge=lt(o).comparePresetIds.indexOf(_e);return Ge===-1?"transparent":Ht[Ge%Ht.length]}function g(_e){const Ge=lt(o).comparePresetIds.includes(_e),ee="p-1.5 rounded-md transition-colors ";return Ge?(N(_e),ee+"text-white"):ee+"hover:bg-slate-600/50 text-slate-400"}function b(_e){const Ge=lt(o).comparePresetIds.includes(_e),ee="p-3 rounded-lg border transition-all ";return Ge?(N(_e),ee+"bg-slate-700/30"):ee+"bg-slate-700/30 border-slate-600/30 hover:border-slate-500/50"}function I(){p(!1)}Er(()=>{const _e=t();_e.comparePresetIds.length===0&&_e.compareMode});var B=Nv(),ne=W(B);{var D=_e=>{var F=Cv();Ce(_e,F)};_t(ne,_e=>{ie(v)&&_e(D)})}var w=te(ne,2),C=W(w),$=W(C);fo($,{class:"w-4 h-4"}),Tt(),G(C);var H=te(C,2),k=W(H);fo(k,{class:"w-3 h-3"}),Tt(),G(H),G(w);var J=te(w,2);{var se=_e=>{var F=Lv(),Ge=W(F);Vi(Ge);var ee=te(Ge,2),pe=W(ee),he=te(pe,2);G(ee),G(F),Rt("keydown",Ge,De=>{De.key==="Enter"&&L()}),sd(Ge,()=>ie(m),De=>En(m,De)),Rt("click",pe,L),Rt("click",he,()=>{En(_,!1),En(m,"")}),Ce(_e,F)};_t(J,_e=>{ie(_)&&_e(se)})}var ge=te(J,2);{var q=_e=>{var F=Dv(),Ge=W(F),ee=W(Ge),pe=W(ee);Os(pe,{class:"w-3 h-3"});var he=te(pe);G(ee);var De=te(ee,2),re=W(De);Bd(re,{class:"w-3.5 h-3.5"}),G(De),G(Ge);var S=te(Ge,2);Dt(S,5,()=>t().comparePresetIds,Ft,(x,O,le)=>{const ue=is(()=>n().find(ye=>ye.id===ie(O)));var de=ct(),Te=st(de);{var Me=ye=>{var Ie=Pv(),ze=W(Ie),fe=te(ze,2),qe=W(fe,!0);G(fe),G(Ie),ft(()=>{jt(Ie,`background-color: ${Ht[le%Ht.length]??""}20; 
                     color: ${Ht[le%Ht.length]??""}`),jt(ze,`background-color: ${Ht[le%Ht.length]??""}`),Xe(qe,ie(ue).name)}),Ce(ye,Ie)};_t(Te,ye=>{ie(ue)&&ye(Me)})}Ce(x,de)}),G(S),G(F),ft(()=>Xe(he,` 对比模式 (${t().comparePresetIds.length??""}/4)`)),Rt("click",De,I),Ce(_e,F)};_t(ge,_e=>{t().compareMode&&t().comparePresetIds.length>0&&_e(q)})}var ce=te(ge,2),Se=W(ce);{var Le=_e=>{var F=Uv();Ce(_e,F)},Ee=_e=>{var F=ct(),Ge=st(F);Dt(Ge,1,n,ee=>ee.id,(ee,pe)=>{const he=is(()=>t().comparePresetIds.includes(ie(pe).id)),De=is(()=>t().comparePresetIds.indexOf(ie(pe).id));var re=Iv(),S=W(re),x=W(S),O=W(x),le=W(O,!0);G(O);var ue=te(O,2),de=W(ue),Te=W(de),Me=W(Te,!0);G(Te);var ye=te(Te,2),Ie=W(ye);G(ye),G(de);var ze=te(de,2),fe=W(ze),qe=W(fe,!0);G(fe);var He=te(fe,2),Be=W(He,!0);G(He),G(ze),G(ue),G(x);var Ne=te(x,2),xe=W(Ne),A=W(xe);{var Y=R=>{Ad(R,{class:"w-4 h-4"})},Q=R=>{Os(R,{class:"w-4 h-4"})};_t(A,R=>{ie(he)?R(Y):R(Q,-1)})}G(xe);var oe=te(xe,2),K=W(oe);Fd(K,{class:"w-4 h-4"}),G(oe),G(Ne),G(S),G(re),ft((R,ae,me,be,Pe)=>{tn(re,1,R),jt(re,ie(he)?`border-left: 3px solid ${Ht[ie(De)%Ht.length]}`:""),Xe(le,ie(pe).name),Xe(Me,d[ie(pe).type]),Xe(Ie,`纬度: ${ae??""}°`),Xe(qe,me),Xe(Be,be),tn(xe,1,Pe),ve(xe,"title",ie(he)?"取消对比":"加入对比"),jt(xe,ie(he)?`background-color: ${Ht[ie(De)%Ht.length]}40`:"")},[()=>Yi(b(ie(pe).id)),()=>ie(pe).latitude.toFixed(1),()=>ie(pe).date,()=>T(ie(pe).timeHours),()=>Yi(g(ie(pe).id))]),Rt("click",x,()=>y(ie(pe).id)),Rt("click",xe,()=>U(ie(pe).id)),Rt("click",oe,()=>P(ie(pe).id)),Ce(ee,re)}),Ce(_e,F)};_t(Se,_e=>{n().length===0?_e(Le):_e(Ee,-1)})}G(ce);var Fe=te(ce,2),Re=W(Fe),Ue=te(W(Re));Os(Ue,{class:"w-3 h-3 inline"}),Tt(),G(Re),G(Fe),G(B),Rt("click",H,()=>{En(_,!ie(_))}),Ce(i,B),Mi(),s()}Ar(["click","keydown"]);var Ov=ut('<div class="text-center py-6 text-slate-500 text-sm">选择 1-4 个方案进行对比 <div class="text-xs mt-1 text-slate-600">在下方预设列表中点击对比按钮</div></div>'),Bv=ut('<div class="rounded-lg p-3 border"><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full"></span> <span class="text-sm font-medium"> </span> <span class="text-xs text-slate-500 ml-auto"> </span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div></div></div>'),zv=ut('<div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-amber-500/30"><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full bg-amber-500"></span> <span class="text-sm font-medium text-amber-500">当前方案</span> <span class="text-xs text-slate-500 ml-auto"> </span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200"> </div></div></div></div> <!> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500"><span class="text-green-400">绿色</span> 表示优于当前方案 · <span class="text-red-400">红色</span> 表示劣于当前方案</div></div></div>'),kv=ut('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 方案差异摘要</h3></div> <!></div>');function Gv(i,e){xi(e,!1);const t=()=>pt(c,"$config",a),n=()=>pt(m,"$comparePresetsData",a),r=()=>pt(p,"$maxShadowLength",a),s=()=>pt(h,"$noonShadow",a),o=()=>pt(u,"$sunriseSunset",a),[a,l]=ir(),{config:c,sunriseSunset:u,maxShadowLength:p,noonShadow:h,comparePresetsData:m}=rr,_={equatorial:"赤道式",horizontal:"水平式",vertical:"垂直式"};function v(I){return I.toFixed(1)+" 小时"}function f(I){return I.toFixed(2)}function d(I){return I.toFixed(1)+"°"}function T(I,B){const ne=B-I;return Math.abs(ne)<.001?"text-slate-400":ne>0?"text-green-400":"text-red-400"}function M(I,B,ne=""){const D=B-I;return Math.abs(D)<.001?"—":(D>0?"+":"")+D.toFixed(2)+ne}wr();var L=kv(),U=W(L),P=W(U),y=W(P);Td(y,{class:"w-4 h-4"}),Tt(),G(P),G(U);var N=te(U,2);{var g=I=>{var B=Ov();Ce(I,B)},b=I=>{var B=zv(),ne=W(B),D=W(ne),w=te(W(D),4),C=W(w,!0);G(w),G(D);var $=te(D,2),H=W($),k=te(W(H),2),J=W(k,!0);G(k),G(H);var se=te(H,2),ge=te(W(se),2),q=W(ge,!0);G(ge),G(se);var ce=te(se,2),Se=te(W(ce),2),Le=W(Se,!0);G(Se),G(ce),G($),G(ne);var Ee=te(ne,2);Dt(Ee,1,n,Ft,(Fe,Re)=>{var Ue=Bv(),_e=W(Ue),F=W(_e),Ge=te(F,2),ee=W(Ge,!0);G(Ge);var pe=te(Ge,2),he=W(pe,!0);G(pe),G(_e);var De=te(_e,2),re=W(De),S=te(W(re),2),x=W(S,!0);G(S);var O=te(S,2),le=W(O,!0);G(O),G(re);var ue=te(re,2),de=te(W(ue),2),Te=W(de,!0);G(de);var Me=te(de,2),ye=W(Me,!0);G(Me),G(ue);var Ie=te(ue,2),ze=te(W(Ie),2),fe=W(ze,!0);G(ze);var qe=te(ze,2),He=W(qe,!0);G(qe),G(Ie),G(De),G(Ue),ft((Be,Ne,xe,A,Y,Q,oe,K,R)=>{jt(Ue,`background-color: ${ie(Re).color??""}08; border-color: ${ie(Re).color??""}30`),jt(F,`background-color: ${ie(Re).color??""}`),jt(Ge,`color: ${ie(Re).color??""}`),Xe(ee,ie(Re).preset.name),Xe(he,_[ie(Re).preset.type]),Xe(x,Be),tn(O,1,`text-xs ${Ne??""}`),Xe(le,xe),Xe(Te,A),tn(Me,1,`text-xs ${Y??""}`),Xe(ye,Q),Xe(fe,oe),tn(qe,1,`text-xs ${K??""}`),Xe(He,R)},[()=>f(ie(Re).maxShadowLength),()=>T(r(),ie(Re).maxShadowLength),()=>M(r(),ie(Re).maxShadowLength),()=>d(ie(Re).noonShadowAngle),()=>{var Be;return T(((Be=s())==null?void 0:Be.angle)??0,ie(Re).noonShadowAngle)},()=>{var Be;return M(((Be=s())==null?void 0:Be.angle)??0,ie(Re).noonShadowAngle,"°")},()=>v(ie(Re).sunriseSunset.dayLength),()=>T(o().dayLength,ie(Re).sunriseSunset.dayLength),()=>M(o().dayLength,ie(Re).sunriseSunset.dayLength,"h")]),Ce(Fe,Ue)}),Tt(2),G(B),ft((Fe,Re,Ue)=>{Xe(C,_[t().type]),Xe(J,Fe),Xe(q,Re),Xe(Le,Ue)},[()=>f(r()),()=>s()?d(s().angle):"--",()=>v(o().dayLength)]),Ce(I,B)};_t(N,I=>{!t().compareMode||n().length===0?I(g):I(b,-1)})}G(L),Ce(i,L),Mi(),l()}var Hv=ut("<button> </button>"),Vv=ut('<div class="flex items-center gap-1.5 mb-3 px-2 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg"><!> <span class="text-xs text-violet-400">叠加模式：已在视图中显示多条轨迹</span></div>'),Wv=ut('<div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"></div>'),$v=ut('<button><!> <div class="text-xs font-medium text-slate-200 pl-1"> </div> <div class="text-xs text-slate-500 mt-0.5 pl-1"> </div> <div class="text-xs text-amber-500/80 mt-1 pl-1"> </div></button>'),Xv=ut('<div class="opacity-90"><div class="flex items-center gap-2 mb-2"><!> <span class="text-xs font-medium text-slate-400"> </span></div> <div class="grid grid-cols-2 gap-2"></div></div>'),qv=ut('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 全年太阳轨迹分析</h3></div> <div class="flex gap-1 mb-4 bg-slate-800/40 rounded-lg p-1"></div> <!> <div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50"><div class="text-xs text-slate-400 mb-2">当前日期</div> <div class="flex items-center justify-between"><div><div class="font-mono text-sm text-slate-200"> </div> <div class="text-xs text-slate-500 mt-0.5"> </div></div></div></div> <!> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500 flex items-center gap-1"><!> <span>冬至日照最短 · 夏至日照最长</span></div></div></div></div>');function Yv(i,e){xi(e,!1);const t=()=>pt(o,"$config",r),n=()=>pt(a,"$yearlyAnalysis",r),[r,s]=ir(),{config:o,yearlyAnalysis:a,setDate:l,setKeyDateMode:c}=rr;function u(k){const J=new Date(k);return`${J.getMonth()+1}月${J.getDate()}日`}function p(k){l(k)}const h=[{mode:"single",label:"单日"},{mode:"solstices",label:"至日"},{mode:"equinoxes",label:"分日"},{mode:"quarterly",label:"四立"}];function m(k){c(k)}function _(k,J,se){const ge=lt(a);return k==="solstices"?ge.solstices[J]:k==="equinoxes"?ge.equinoxes[J]:k==="quarterly"&&se!==void 0?ge.quarterly[se]:null}const v=[{mode:"solstices",label:"至日",icon:Ia,colors:ss.solstices,dates:[{key:"summer",label:"夏至"},{key:"winter",label:"冬至"}]},{mode:"equinoxes",label:"分日",icon:Dd,colors:ss.equinoxes,dates:[{key:"spring",label:"春分"},{key:"autumn",label:"秋分"}]},{mode:"quarterly",label:"四立",icon:Ld,colors:ss.quarterly,dates:[{key:"q1",label:"立春",index:0},{key:"q2",label:"立夏",index:1},{key:"q3",label:"立秋",index:2},{key:"q4",label:"立冬",index:3}]}];wr();var f=qv(),d=W(f),T=W(d),M=W(T);uc(M,{class:"w-4 h-4"}),Tt(),G(T),G(d);var L=te(d,2);Dt(L,5,()=>h,Ft,(k,J)=>{var se=Hv(),ge=W(se,!0);G(se),ft(()=>{tn(se,1,`flex-1 py-1.5 text-xs font-medium rounded-md transition-all
               ${t().keyDateMode===ie(J).mode?"bg-amber-500/20 text-amber-500":"text-slate-400 hover:text-slate-300"}`),Xe(ge,ie(J).label)}),Rt("click",se,()=>m(ie(J).mode)),Ce(k,se)}),G(L);var U=te(L,2);{var P=k=>{var J=Vv(),se=W(J);Pd(se,{class:"w-3.5 h-3.5 text-violet-400"}),Tt(2),G(J),Ce(k,J)};_t(U,k=>{t().keyDateMode!=="single"&&k(P)})}var y=te(U,2),N=W(y),g=te(W(N),2),b=W(g),I=W(b),B=W(I,!0);G(I);var ne=te(I,2),D=W(ne);G(ne),G(b),G(g),G(N);var w=te(N,2);Dt(w,1,()=>v,Ft,(k,J)=>{var se=Xv(),ge=W(se),q=W(ge);Bu(q,()=>ie(J).icon,(Ee,Fe)=>{Fe(Ee,{class:"w-3.5 h-3.5 text-slate-400"})});var ce=te(q,2),Se=W(ce,!0);G(ce),G(ge);var Le=te(ge,2);Dt(Le,5,()=>ie(J).dates,Ft,(Ee,Fe,Re)=>{const Ue=Yl(()=>_(ie(J).mode,ie(Fe).key,ie(Fe).index));var _e=ct(),F=st(_e);{var Ge=ee=>{var pe=$v(),he=W(pe);{var De=de=>{var Te=Wv();ft(()=>jt(Te,`background-color: ${ie(J).colors[Re]??""};`)),Ce(de,Te)};_t(he,de=>{t().keyDateMode===ie(J).mode&&de(De)})}var re=te(he,2),S=W(re,!0);G(re);var x=te(re,2),O=W(x,!0);G(x);var le=te(x,2),ue=W(le);G(le),G(pe),ft((de,Te,Me)=>{tn(pe,1,`p-2 bg-slate-800/40 hover:bg-slate-700/50 rounded-lg border 
                       hover:border-amber-500/30 transition-all text-left relative overflow-hidden
                       ${t().keyDateMode===ie(J).mode?"border-slate-500/50":"border-slate-700/50"}`),Xe(S,ie(Fe).label),Xe(O,de),Xe(ue,`${Te??""}h · ${Me??""}°`)},[()=>u(ie(Ue).date),()=>ie(Ue).dayLength.toFixed(1),()=>ie(Ue).maxAltitude.toFixed(0)]),Rt("click",pe,()=>p(ie(Ue).date)),Ce(ee,pe)};_t(F,ee=>{ie(Ue)&&ee(Ge)})}Ce(Ee,_e)}),G(Le),G(se),ft(()=>Xe(Se,ie(J).label)),Ce(k,se)});var C=te(w,2),$=W(C),H=W($);Ud(H,{class:"w-3 h-3"}),Tt(2),G($),G(C),G(y),G(f),ft((k,J)=>{Xe(B,t().date),Xe(D,`日照: ${k??""}小时 · 
            最高: ${J??""}°`)},[()=>n().currentDay.dayLength.toFixed(1),()=>n().currentDay.maxAltitude.toFixed(1)]),Ce(i,f),Mi(),s()}Ar(["click"]);var jv=ut(`<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"><header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20"><div class="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600
                    flex items-center justify-center shadow-lg shadow-amber-500/20"><!></div> <div><h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">日晷模拟器</h1> <p class="text-xs text-slate-500">Sundial Simulator</p></div></div> <div class="text-sm text-slate-400 hidden sm:block">多方案对比 · 全年太阳轨迹分析</div></div></header> <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-6"><div class="grid grid-cols-12 gap-6 h-[calc(100vh-100px)]"><div class="col-span-12 lg:col-span-3 h-full overflow-hidden"><!></div> <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full"><div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0"><!></div> <div class="h-[280px] flex-shrink-0"><!></div></div> <div class="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full overflow-hidden"><div class="h-[380px] flex-shrink-0 overflow-hidden"><!></div> <div class="flex-1 min-h-0 overflow-hidden"><!></div> <div class="flex-1 min-h-0 overflow-hidden"><!></div></div></div></main></div>`);function i0(i){var e=jv(),t=W(e),n=W(t),r=W(n),s=W(r),o=W(s);Ia(o,{class:"w-6 h-6 text-white"}),G(s),Tt(2),G(r),Tt(2),G(n),G(t);var a=te(t,2),l=W(a),c=W(l),u=W(c);Hd(u,{}),G(c);var p=te(c,2),h=W(p),m=W(h);lv(m,{}),G(h);var _=te(h,2),v=W(_);Gv(v,{}),G(_),G(p);var f=te(p,2),d=W(f),T=W(d);Rv(T,{}),G(d);var M=te(d,2),L=W(M);Yv(L,{}),G(M);var U=te(M,2),P=W(U);Fv(P,{}),G(U),G(f),G(l),G(a),G(e),Ce(i,e)}export{i0 as component,n0 as universal};
