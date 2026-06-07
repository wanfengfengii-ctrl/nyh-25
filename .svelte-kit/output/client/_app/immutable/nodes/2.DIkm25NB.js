import{c as Tt,a as Oe,f as lt,d as hn}from"../chunks/DO7rFoIb.js";import{s as bn}from"../chunks/D23tJsQ3.js";import{f as _t,p as hi,t as dt,i as fi,j as H,l as ee,as as Et,k as z,L as le,F as Ws,aM as Fr,K as _n,J as Ol,aN as ls,ab as Bl}from"../chunks/BkjGKTc9.js";import{d as ar,a as At,s as $e}from"../chunks/B7M7KZ4O.js";import{g as Or,a as Vr,i as ha,b as cs,C as Ot,K as zl,c as Br,d as Gl,e as kl,I as Tn,f as or,G as fa,h as Lt,j as Jo,k as Hl,S as ta,l as er,s as ur,m as Qt,n as Nt,r as Qi,o as jt,T as Vl,p as Me,q as pa,t as Wl,X as Xl,u as $l,v as ql,B as Yl,w as jl}from"../chunks/bit2PJ2i.js";import{l as An,s as wn,i as mt,a as Hi,c as ht,b as Kl}from"../chunks/D2zD_ctW.js";import{w as ma,d as Zt,g as ot}from"../chunks/CBkj99Qp.js";import{c as Zl}from"../chunks/DK2_QM3p.js";import{g as Jl}from"../chunks/DTGl7d-d.js";const Ql=!1,Gg=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ql},Symbol.toStringTag,{value:"Module"})),ec=Math.PI/180,tc=180/Math.PI;function sn(i){return i*ec}function Wr(i){return i*tc}function nc(i,e,t,n){if(i.altitude<=0)return null;sn(i.declination),sn(i.hourAngle);const r=e*Math.tan(sn(i.hourAngle)),s=e,o=Math.sqrt(r*r+s*s),a=Wr(Math.atan2(r,s));return{x:r,y:s,length:o,angle:a,hour:n??12+i.hourAngle/15}}function ic(i,e,t,n){if(i.altitude<=0)return null;const r=sn(i.altitude),s=sn(i.azimuth),o=t/Math.tan(r),a=o*Math.sin(s),l=o*Math.cos(s),c=o,u=i.azimuth;return{x:a,y:l,length:c,angle:u,hour:n??12+i.hourAngle/15}}function rc(i,e,t,n){if(i.altitude<=0)return null;const r=sn(i.altitude),s=sn(i.azimuth),o=Math.sin(s),a=t/(Math.tan(r)*Math.abs(o)),l=a*Math.cos(s)/Math.abs(o),c=Math.sqrt(l*l+a*a),u=Wr(Math.atan2(l,a));return{x:l,y:-a,length:c,angle:u,hour:n??12+i.hourAngle/15}}function Xr(i,e,t,n,r){switch(i){case"equatorial":return nc(e,n,t,r);case"horizontal":return ic(e,t,n,r);case"vertical":return rc(e,t,n,r);default:return null}}function sc(i,e,t){const n=(e-12)*15;switch(i){case"equatorial":return n;case"horizontal":const r=sn(t),s=sn(n),o=Math.sin(s)/(Math.cos(s)*Math.sin(r)+Math.tan(sn(23.45))*Math.cos(r));return Wr(Math.atan(o));case"vertical":const a=sn(t),l=sn(n),c=Math.sin(l)/(Math.cos(l)*Math.cos(a)-Math.tan(sn(23.45))*Math.sin(a));return Wr(Math.atan(c));default:return n}}function zr(i,e,t,n,r=96){const s=[],{sunrise:o,sunset:a}=Or(e,t,0);for(let l=0;l<=r;l++){const c=o+(a-o)*(l/r),u=new Date(e);u.setHours(Math.floor(c),c%1*60,0,0);const h=Vr(u,t,0),f=Xr(i,h,t,n,c);f&&s.push(f)}return s}function ac(i,e,t){const n=[];for(let r=6;r<=18;r++){const s=sc(i,r,e);n.push({hour:r,angle:s,radius:t*1.5})}return n}function ga(i,e,t,n){const r=zr(i,e,t,n,96);return r.length===0?0:Math.max(...r.map(s=>s.length))}function _a(i,e,t,n){const r=new Date(e);r.setHours(12,0,0,0);const s=Vr(r,t,0),o=Xr(i,s,t,n,12);return o?{angle:o.angle,length:o.length}:null}const Qo="sundial-presets",oc=20,lc=4;function cc(){if(typeof localStorage>"u")return[];try{const i=localStorage.getItem(Qo);return i?JSON.parse(i):[]}catch{return[]}}function va(i){typeof localStorage>"u"||localStorage.setItem(Qo,JSON.stringify(i))}function uc(){const i=new Date;return{type:"horizontal",latitude:39.9,date:i.toISOString().split("T")[0],timeHours:i.getHours()+i.getMinutes()/60,gnomonLength:1,showTrack:!0,showCurrentPoint:!0,compareMode:!1,comparePresetIds:[],analysisMode:"single",keyDateMode:"single"}}function dc(){const i=ma(uc()),e=ma([]);typeof localStorage<"u"&&e.set(cc());const t=Zt(i,T=>{const C=new Date(T.date),X=Math.floor(T.timeHours),V=Math.floor((T.timeHours-X)*60);return C.setHours(X,V,0,0),C}),n=Zt([i,t],([T,C])=>Vr(C,T.latitude,0)),r=Zt([i,t],([T,C])=>ha(C,T.latitude,0)),s=Zt([i,t],([T,C])=>Or(C,T.latitude,0)),o=Zt([i,t],([T,C])=>cs(C,T.latitude,0,96)),a=Zt([i,t],([T,C])=>kl(C,T.latitude,0)),l=Zt([i,n,r],([T,C,X])=>X?Xr(T.type,C,T.latitude,T.gnomonLength):null),c=Zt([i,t],([T,C])=>zr(T.type,C,T.latitude,T.gnomonLength,120)),u=Zt([i],([T])=>ac(T.type,T.latitude,T.gnomonLength)),h=Zt([i,e],([T,C])=>!T.compareMode||T.comparePresetIds.length===0?[]:T.comparePresetIds.map(X=>C.find(V=>V.id===X)).filter(X=>X!==void 0)),f=Zt([h],([T])=>T.length===0?[]:T.map((C,X)=>{const V=new Date(C.date),G=Math.floor(C.timeHours),J=Math.floor((C.timeHours-G)*60);V.setHours(G,J,0,0);const re=Vr(V,C.latitude,0),ge=ha(V,C.latitude,0),q=ge?Xr(C.type,re,C.latitude,C.gnomonLength||1):null,ce=zr(C.type,V,C.latitude,C.gnomonLength||1,120),Se=Or(V,C.latitude,0),Ce=ga(C.type,V,C.latitude,C.gnomonLength||1),Ee=_a(C.type,V,C.latitude,C.gnomonLength||1),Ne=cs(V,C.latitude,0,96);return{preset:C,color:Ot[X%Ot.length],shadow:q,shadowTrack:ce,sunriseSunset:Se,solarPosition:re,sunVisible:ge,maxShadowLength:Ce,noonShadowAngle:(Ee==null?void 0:Ee.angle)??0,noonShadowLength:(Ee==null?void 0:Ee.length)??0,altitudeCurve:Ne}})),m=Zt([i,t],([T,C])=>ga(T.type,C,T.latitude,T.gnomonLength)),v=Zt([i,t],([T,C])=>_a(T.type,C,T.latitude,T.gnomonLength)),M=Zt([i,t],([T,C])=>{if(T.keyDateMode==="single")return[];const X=C.getFullYear(),V=zl[T.keyDateMode],G=Br[T.keyDateMode];return V.map((J,re)=>{const ge=new Date(X,J.month-1,J.day),q=ge.toISOString().split("T")[0],ce=zr(T.type,ge,T.latitude,T.gnomonLength,120),Se=cs(ge,T.latitude,0,96),Ce=Or(ge,T.latitude,0),Ee=Gl(ge,T.latitude,0);return{label:J.label,date:q,color:G[re],shadowTrack:ce,altitudeCurve:Se,sunriseSunset:Ce,maxAltitude:Ee}})});function p(T){i.update(C=>({...C,type:T}))}function d(T){const C=Math.max(-90,Math.min(90,T));i.update(X=>({...X,latitude:C}))}function A(T){i.update(C=>({...C,date:T}))}function S(T){const C=Math.max(0,Math.min(24,T));i.update(X=>({...X,timeHours:C}))}function D(T){i.update(C=>({...C,gnomonLength:Math.max(.1,T)}))}function U(T){i.update(C=>({...C,showTrack:T}))}function P(T){i.update(C=>({...C,showCurrentPoint:T}))}function w(T){i.update(C=>({...C,compareMode:T,comparePresetIds:T?C.comparePresetIds:[]}))}function O(T){const C=ot(i);if(C.comparePresetIds.includes(T))i.update(V=>({...V,comparePresetIds:V.comparePresetIds.filter(G=>G!==T)}));else{if(C.comparePresetIds.length>=lc)return!1;i.update(V=>({...V,comparePresetIds:[...V.comparePresetIds,T],compareMode:!0}))}return!0}function g(T){i.update(C=>({...C,analysisMode:T}))}function y(T){i.update(C=>({...C,keyDateMode:T}))}function I(T){const C=ot(i),X=ot(e);if(X.length>=oc)return!1;const V={id:Date.now().toString(),name:T||`方案 ${X.length+1}`,type:C.type,latitude:C.latitude,date:C.date,timeHours:C.timeHours,gnomonLength:C.gnomonLength,createdAt:Date.now()},G=[...X,V];return e.set(G),va(G),!0}function W(T){const X=ot(e).find(V=>V.id===T);X&&i.update(V=>({...V,type:X.type,latitude:X.latitude,date:X.date,timeHours:X.timeHours,gnomonLength:X.gnomonLength}))}function ne(T){const X=ot(e).filter(V=>V.id!==T);e.set(X),va(X),i.update(V=>({...V,comparePresetIds:V.comparePresetIds.filter(G=>G!==T)}))}function L(){const T=new Date;i.update(C=>({...C,date:T.toISOString().split("T")[0],timeHours:T.getHours()+T.getMinutes()/60}))}return{config:i,presets:e,currentDateTime:t,solarPosition:n,sunVisible:r,sunriseSunset:s,altitudeCurve:o,yearlyAnalysis:a,currentShadow:l,shadowTrack:c,hourMarks:u,maxShadowLength:m,noonShadow:v,keyDateTracks:M,comparePresets:h,comparePresetsData:f,setType:p,setLatitude:d,setDate:A,setTimeHours:S,setGnomonLength:D,setShowTrack:U,setShowCurrentPoint:P,setCompareMode:w,toggleComparePreset:O,setAnalysisMode:g,setKeyDateMode:y,savePreset:I,loadPreset:W,deletePreset:ne,resetToNow:L}}const Vi=dc();function xa(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]];Tn(i,wn({name:"activity"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function hc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];Tn(i,wn({name:"circle"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function us(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];Tn(i,wn({name:"copy"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function fc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]];Tn(i,wn({name:"eye"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function pc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];Tn(i,wn({name:"flower-2"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function mc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]];Tn(i,wn({name:"layers"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function gc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];Tn(i,wn({name:"leaf"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function _c(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]];Tn(i,wn({name:"snowflake"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function vc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];Tn(i,wn({name:"sunrise"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}function xc(i,e){const t=An(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];Tn(i,wn({name:"sunset"},()=>t,{get iconNode(){return n},children:(r,s)=>{var o=Tt(),a=_t(o);bn(a,e,"default",{}),Oe(r,o)},$$slots:{default:!0}}))}var Mc=lt('<button><div class="font-medium text-sm text-slate-100"> </div> <div class="text-xs text-slate-400"> </div></button>'),Sc=lt('<div class="mt-2 px-3 py-2 bg-red-900/30 border border-red-700/30 rounded-lg text-red-400 text-xs">太阳位于地平线以下，无法显示影子</div>'),Ec=lt(`<div class="glass-card p-5 space-y-5 h-full overflow-y-auto"><div><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 日晷类型</h3> <div class="space-y-2"></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 纬度设置</h3> <div class="space-y-3"><div class="flex items-center gap-3"><input type="range" min="-90" max="90" step="0.1" class="flex-1 accent-amber-500"/> <input type="number" min="-90" max="90" step="0.1" class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center
                 focus:outline-none focus:border-amber-500/50"/></div> <div class="flex justify-between text-xs text-slate-500"><span>-90° 南极</span> <span>0° 赤道</span> <span>90° 北极</span></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 日期</h3> <input type="date" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
             focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div class="border-t border-slate-700/50 pt-5"><div class="flex items-center justify-between mb-3"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 时间</h3> <span class="text-2xl font-mono text-slate-100"> </span></div> <input type="range" min="0" max="24" step="0.05" class="w-full accent-amber-500"/> <div class="flex justify-between text-xs text-slate-500 mt-1"><span>00:00</span> <span>06:00</span> <span>12:00</span> <span>18:00</span> <span>24:00</span></div> <button class="w-full mt-3 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm
             border border-slate-600/50 transition-colors">重置为当前时间</button></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2"><!> 太阳位置</h3> <div class="space-y-2 text-sm"><div class="flex justify-between items-center"><span class="text-slate-400">高度角</span> <span> </span></div> <div class="flex justify-between items-center"><span class="text-slate-400">方位角</span> <span> </span></div> <div class="flex justify-between items-center"><span class="text-slate-400">赤纬角</span> <span class="font-mono text-slate-200"> </span></div> <!></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3">日出日落</h3> <div class="grid grid-cols-2 gap-3"><div class="bg-slate-700/30 rounded-lg p-3 text-center"><!> <div class="text-xs text-slate-400">日出</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center"><!> <div class="text-xs text-slate-400">日落</div> <div class="font-mono text-sm text-slate-200"> </div></div></div> <div class="mt-3 text-center text-xs text-slate-400"> </div></div></div>`);function yc(i,e){hi(e,!1);const t=()=>ht(l,"$config",o),n=()=>ht(c,"$solarPosition",o),r=()=>ht(u,"$sunVisible",o),s=()=>ht(h,"$sunriseSunset",o),[o,a]=Hi(),{config:l,solarPosition:c,sunVisible:u,sunriseSunset:h,setType:f,setLatitude:m,setDate:v,setTimeHours:M,resetToNow:p}=Vi,d=[{value:"equatorial",label:"赤道式",desc:"盘面平行于赤道面"},{value:"horizontal",label:"水平式",desc:"盘面水平放置"},{value:"vertical",label:"垂直式",desc:"盘面垂直南向"}];function A(Q){const ae=Math.floor(Q),K=Math.floor((Q-ae)*60);return`${ae.toString().padStart(2,"0")}:${K.toString().padStart(2,"0")}`}function S(Q){if(Q<0||Q>24)return"--:--";const ae=Math.floor(Q),K=Math.floor((Q-ae)*60);return`${ae.toString().padStart(2,"0")}:${K.toString().padStart(2,"0")}`}function D(Q){const ae=ot(l).type,K="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ";return ae===Q?K+"bg-amber-500/20 border-amber-500/50":K+"bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50"}function U(){return"font-mono text-slate-200 "+(ot(u)?"":"line-through")}function P(Q){const ae=parseFloat(Q.target.value);isNaN(ae)||m(ae)}or();var w=Ec(),O=H(w),g=H(O),y=H(g);fa(y,{class:"w-4 h-4"}),Et(),z(g);var I=ee(g,2);Lt(I,5,()=>d,Nt,(Q,ae)=>{var K=Mc(),R=H(K),se=H(R,!0);z(R);var me=ee(R,2),be=H(me,!0);z(me),z(K),dt(Le=>{Qt(K,1,Le),$e(se,le(ae).label),$e(be,le(ae).desc)},[()=>er(D(le(ae).value))]),At("click",K,()=>f(le(ae).value)),Oe(Q,K)}),z(I),z(O);var W=ee(O,2),ne=H(W),L=H(ne);fa(L,{class:"w-4 h-4"}),Et(),z(ne);var T=ee(ne,2),C=H(T),X=H(C);Qi(X);var V=ee(X,2);Qi(V),z(C),Et(2),z(T),z(W);var G=ee(W,2),J=H(G),re=H(J);Jo(re,{class:"w-4 h-4"}),Et(),z(J);var ge=ee(J,2);Qi(ge),z(G);var q=ee(G,2),ce=H(q),Se=H(ce),Ce=H(Se);Hl(Ce,{class:"w-4 h-4"}),Et(),z(Se);var Ee=ee(Se,2),Ne=H(Ee,!0);z(Ee),z(ce);var Re=ee(ce,2);Qi(Re);var De=ee(Re,4);z(q);var _e=ee(q,2),N=H(_e),ke=H(N);ta(ke,{class:"w-4 h-4"}),Et(),z(N);var te=ee(N,2),pe=H(te),he=ee(H(pe),2),Pe=H(he);z(he),z(pe);var ie=ee(pe,2),x=ee(H(ie),2),_=H(x);z(x),z(ie);var F=ee(ie,2),oe=ee(H(F),2),ue=H(oe);z(oe),z(F);var de=ee(F,2);{var Te=Q=>{var ae=Sc();Oe(Q,ae)};mt(de,Q=>{r()||Q(Te)})}z(te),z(_e);var xe=ee(_e,2),ye=ee(H(xe),2),Ue=H(ye),ze=H(Ue);vc(ze,{class:"w-5 h-5 mx-auto text-orange-400 mb-1"});var fe=ee(ze,4),qe=H(fe,!0);z(fe),z(Ue);var He=ee(Ue,2),Be=H(He);xc(Be,{class:"w-5 h-5 mx-auto text-orange-500 mb-1"});var Ie=ee(Be,4),ve=H(Ie,!0);z(Ie),z(He),z(ye);var b=ee(ye,2),Y=H(b);z(b),z(xe),z(w),dt((Q,ae,K,R,se,me,be,Le,We,Xe)=>{ur(X,t().latitude),ur(V,Q),ur(ge,t().date),$e(Ne,ae),ur(Re,t().timeHours),Qt(he,1,K),$e(Pe,`${R??""}°`),Qt(x,1,se),$e(_,`${me??""}°`),$e(ue,`${be??""}°`),$e(qe,Le),$e(ve,We),$e(Y,`日照时长: ${Xe??""} 小时`)},[()=>t().latitude.toFixed(1),()=>A(t().timeHours),()=>er(U()),()=>n().altitude.toFixed(1),()=>er(U()),()=>n().azimuth.toFixed(1),()=>n().declination.toFixed(1),()=>S(s().sunrise),()=>S(s().sunset),()=>s().dayLength.toFixed(1)]),At("input",X,Q=>m(parseFloat(Q.target.value))),At("input",V,P),At("input",ge,Q=>v(Q.target.value)),At("input",Re,Q=>M(parseFloat(Q.target.value))),At("click",De,p),Oe(i,w),fi(),a()}ar(["click","input"]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="160",mi={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bc=0,Ma=1,Tc=2,el=1,tl=2,Un=3,Yn=0,en=1,In=2,Xn=0,Fi=1,Sa=2,Ea=3,ya=4,Ac=5,ii=100,wc=101,Rc=102,ba=103,Ta=104,Cc=200,Lc=201,Pc=202,Dc=203,Xs=204,$s=205,Uc=206,Ic=207,Nc=208,Fc=209,Oc=210,Bc=211,zc=212,Gc=213,kc=214,Hc=0,Vc=1,Wc=2,$r=3,Xc=4,$c=5,qc=6,Yc=7,nl=0,jc=1,Kc=2,$n=0,Zc=1,Jc=2,Qc=3,il=4,eu=5,tu=6,rl=300,Bi=301,zi=302,qs=303,Ys=304,Jr=306,js=1e3,xn=1001,Ks=1002,$t=1003,Aa=1004,ds=1005,cn=1006,nu=1007,rr=1008,qn=1009,iu=1010,ru=1011,ia=1012,sl=1013,Vn=1014,Wn=1015,sr=1016,al=1017,ol=1018,ai=1020,su=1021,Mn=1023,au=1024,ou=1025,oi=1026,Gi=1027,lu=1028,ll=1029,cu=1030,cl=1031,ul=1033,hs=33776,fs=33777,ps=33778,ms=33779,wa=35840,Ra=35841,Ca=35842,La=35843,dl=36196,Pa=37492,Da=37496,Ua=37808,Ia=37809,Na=37810,Fa=37811,Oa=37812,Ba=37813,za=37814,Ga=37815,ka=37816,Ha=37817,Va=37818,Wa=37819,Xa=37820,$a=37821,gs=36492,qa=36494,Ya=36495,uu=36283,ja=36284,Ka=36285,Za=36286,hl=3e3,li=3001,du=3200,hu=3201,fl=0,fu=1,dn="",Bt="srgb",Fn="srgb-linear",ra="display-p3",Qr="display-p3-linear",qr="linear",xt="srgb",Yr="rec709",jr="p3",_i=7680,Ja=519,pu=512,mu=513,gu=514,pl=515,_u=516,vu=517,xu=518,Mu=519,Qa=35044,eo="300 es",Zs=1035,Nn=2e3,Kr=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,Js=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function _s(i,e,t){return(1-t)*i+t*e}function to(i){return(i&i-1)===0&&i!==0}function Qs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:Gr};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],v=n[8],M=r[0],p=r[3],d=r[6],A=r[1],S=r[4],D=r[7],U=r[2],P=r[5],w=r[8];return s[0]=o*M+a*A+l*U,s[3]=o*p+a*S+l*P,s[6]=o*d+a*D+l*w,s[1]=c*M+u*A+h*U,s[4]=c*p+u*S+h*P,s[7]=c*d+u*D+h*w,s[2]=f*M+m*A+v*U,s[5]=f*p+m*S+v*P,s[8]=f*d+m*D+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,v=t*h+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=h*M,e[1]=(r*c-u*n)*M,e[2]=(a*n-r*o)*M,e[3]=f*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new rt;function ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yu(){const i=Zr("canvas");return i.style.display="block",i}const no={};function tr(i){i in no||(no[i]=!0,console.warn(i))}const io=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ro=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[Fn]:{transfer:qr,primaries:Yr,toReference:i=>i,fromReference:i=>i},[Bt]:{transfer:xt,primaries:Yr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qr]:{transfer:qr,primaries:jr,toReference:i=>i.applyMatrix3(ro),fromReference:i=>i.applyMatrix3(io)},[ra]:{transfer:xt,primaries:jr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ro),fromReference:i=>i.applyMatrix3(io).convertLinearToSRGB()}},bu=new Set([Fn,Qr]),pt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=dr[e].toReference,r=dr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return dr[i].primaries},getTransfer:function(i){return i===dn?qr:dr[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class gl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=Zr("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tu=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Au=0;class an extends pi{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=xn,r=xn,s=cn,o=rr,a=Mn,l=qn,c=an.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=lr(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===li?Bt:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?li:hl}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===li?Bt:dn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=rl;an.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,D=(m+1)/2,U=(d+1)/2,P=(u+f)/4,w=(h+M)/4,O=(v+p)/4;return S>D&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=P/n,s=w/n):D>U?D<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(D),n=P/r,s=O/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=w/s,r=O/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-v)*(p-v)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(h-M)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===li?Bt:dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vl extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ru extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(h!==M||l!==f||c!==m||u!==v){let p=1-a;const d=l*f+c*m+u*v+h*M,A=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const U=Math.sqrt(S),P=Math.atan2(U,d*A);p=Math.sin(p*P)/U,a=Math.sin(a*P)/U}const D=a*A;if(l=l*p+f*D,c=c*p+m*D,u=u*p+v*D,h=h*p+M*D,p===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*m-c*f,e[t+1]=l*v+u*f+c*h-a*m,e[t+2]=c*v+u*m+a*f-l*h,e[t+3]=u*v-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"YZX":this._x=f*u*h+c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h-f*m*v;break;case"XZY":this._x=f*u*h-c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new k,so=new ui;class cr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),fr.subVectors(this.max,ji),xi.subVectors(e.a,ji),Mi.subVectors(e.b,ji),Si.subVectors(e.c,ji),On.subVectors(Mi,xi),Bn.subVectors(Si,Mi),Jn.subVectors(xi,Si);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Jn.z,Jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Jn.z,0,-Jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Jn.y,Jn.x,0];return!Es(t,xi,Mi,Si,fr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,xi,Mi,Si,fr))?!1:(pr.crossVectors(On,Bn),t=[pr.x,pr.y,pr.z],Es(t,xi,Mi,Si,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,hr=new cr,xi=new k,Mi=new k,Si=new k,On=new k,Bn=new k,Jn=new k,ji=new k,fr=new k,pr=new k,Qn=new k;function Es(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qn.fromArray(i,s);const a=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cu=new cr,Ki=new k,ys=new k;class es{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(ys)),this.expandByPoint(Ki.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new k,bs=new k,mr=new k,zn=new k,Ts=new k,gr=new k,As=new k;class sa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bs.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(bs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=zn.dot(this.direction),l=-zn.dot(mr),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const M=1/u;h*=M,f*=M,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bs).addScaledVector(mr,f),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,r,s){Ts.subVectors(t,e),gr.subVectors(n,e),As.crossVectors(Ts,gr);let o=this.direction.dot(As),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const l=a*this.direction.dot(gr.crossVectors(zn,gr));if(l<0)return null;const c=a*this.direction.dot(Ts.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(As);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,r,s,o,a,l,c,u,h,f,m,v,M,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,m,v,M,p)}set(e,t,n,r,s,o,a,l,c,u,h,f,m,v,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,v=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,v=c*u,M=c*h;t[0]=f+M*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,v=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,v=a*u,M=a*h;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=v*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+v,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Pu)}lookAt(e,t,n){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Gn.crossVectors(n,nn),Gn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Gn.crossVectors(n,nn)),Gn.normalize(),_r.crossVectors(nn,Gn),r[0]=Gn.x,r[4]=_r.x,r[8]=nn.x,r[1]=Gn.y,r[5]=_r.y,r[9]=nn.y,r[2]=Gn.z,r[6]=_r.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],d=n[14],A=n[3],S=n[7],D=n[11],U=n[15],P=r[0],w=r[4],O=r[8],g=r[12],y=r[1],I=r[5],W=r[9],ne=r[13],L=r[2],T=r[6],C=r[10],X=r[14],V=r[3],G=r[7],J=r[11],re=r[15];return s[0]=o*P+a*y+l*L+c*V,s[4]=o*w+a*I+l*T+c*G,s[8]=o*O+a*W+l*C+c*J,s[12]=o*g+a*ne+l*X+c*re,s[1]=u*P+h*y+f*L+m*V,s[5]=u*w+h*I+f*T+m*G,s[9]=u*O+h*W+f*C+m*J,s[13]=u*g+h*ne+f*X+m*re,s[2]=v*P+M*y+p*L+d*V,s[6]=v*w+M*I+p*T+d*G,s[10]=v*O+M*W+p*C+d*J,s[14]=v*g+M*ne+p*X+d*re,s[3]=A*P+S*y+D*L+U*V,s[7]=A*w+S*I+D*T+U*G,s[11]=A*O+S*W+D*C+U*J,s[15]=A*g+S*ne+D*X+U*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],v=e[3],M=e[7],p=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*m-n*l*m)+M*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],v=e[12],M=e[13],p=e[14],d=e[15],A=h*p*c-M*f*c+M*l*m-a*p*m-h*l*d+a*f*d,S=v*f*c-u*p*c-v*l*m+o*p*m+u*l*d-o*f*d,D=u*M*c-v*h*c+v*a*m-o*M*m-u*a*d+o*h*d,U=v*h*l-u*M*l-v*a*f+o*M*f+u*a*p-o*h*p,P=t*A+n*S+r*D+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=A*w,e[1]=(M*f*s-h*p*s-M*r*m+n*p*m+h*r*d-n*f*d)*w,e[2]=(a*p*s-M*l*s+M*r*c-n*p*c-a*r*d+n*l*d)*w,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*m-n*l*m)*w,e[4]=S*w,e[5]=(u*p*s-v*f*s+v*r*m-t*p*m-u*r*d+t*f*d)*w,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*d-t*l*d)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=D*w,e[9]=(v*h*s-u*M*s-v*n*m+t*M*m+u*n*d-t*h*d)*w,e[10]=(o*M*s-v*a*s+v*n*c-t*M*c-o*n*d+t*a*d)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*w,e[12]=U*w,e[13]=(u*M*r-v*h*r+v*n*f-t*M*f-u*n*p+t*h*p)*w,e[14]=(v*a*r-o*M*r-v*n*l+t*M*l+o*n*p-t*a*p)*w,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,v=s*h,M=o*u,p=o*h,d=a*h,A=l*c,S=l*u,D=l*h,U=n.x,P=n.y,w=n.z;return r[0]=(1-(M+d))*U,r[1]=(m+D)*U,r[2]=(v-S)*U,r[3]=0,r[4]=(m-D)*P,r[5]=(1-(f+d))*P,r[6]=(p+A)*P,r[7]=0,r[8]=(v+S)*w,r[9]=(p-A)*w,r[10]=(1-(f+M))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),a=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Nn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===Nn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Kr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Nn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,m=(n+r)*u;let v,M;if(a===Nn)v=(o+s)*h,M=-2*h;else if(a===Kr)v=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new k,mn=new Ct,Lu=new k(0,0,0),Pu=new k(1,1,1),Gn=new k,_r=new k,nn=new k,ao=new Ct,oo=new ui;class ts{constructor(e=0,t=0,n=0,r=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const lo=new k,yi=new ui,Ln=new Ct,vr=new k,Zi=new k,Uu=new k,Iu=new ui,co=new k(1,0,0),uo=new k(0,1,0),ho=new k(0,0,1),Nu={type:"added"},Fu={type:"removed"};class zt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new k,t=new ts,n=new ui,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new rt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Zi,vr,this.up):Ln.lookAt(vr,Zi,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Ln),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new k,Pn=new k,ws=new k,Dn=new k,bi=new k,Ti=new k,fo=new k,Rs=new k,Cs=new k,Ls=new k;let xr=!1;class vn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),Pn.subVectors(n,t),ws.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Pn),l=gn.dot(ws),c=Pn.dot(Pn),u=Pn.dot(ws),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,r,s,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),Pn.subVectors(e,t),gn.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),gn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;bi.subVectors(r,n),Ti.subVectors(s,n),Rs.subVectors(e,n);const l=bi.dot(Rs),c=Ti.dot(Rs);if(l<=0&&c<=0)return t.copy(n);Cs.subVectors(e,r);const u=bi.dot(Cs),h=Ti.dot(Cs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bi,o);Ls.subVectors(e,s);const m=bi.dot(Ls),v=Ti.dot(Ls);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ti,a);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return fo.subVectors(s,r),a=(h-u)/(h-u+(m-v)),t.copy(r).addScaledVector(fo,a);const d=1/(p+M+f);return o=M*d,a=f*d,t.copy(n).addScaledVector(bi,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Su(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return pt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Yt(Vt.r*255,0,255))*65536+Math.round(Yt(Vt.g*255,0,255))*256+Math.round(Yt(Vt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Bt){pt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Mr);const n=_s(kn.h,Mr.h,t),r=_s(kn.s,Mr.s,t),s=_s(kn.l,Mr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new st;st.NAMES=Ml;let Ou=0;class Wi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Fi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=$s,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nr extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new k,Sr=new Ke;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}}class Sl extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class El extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bu=0;const ln=new Ct,Ds=new zt,Ai=new k,rn=new cr,Ji=new cr,It=new k;class tn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?El:Sl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(rn.min,Ji.min),rn.expandByPoint(It),It.addVectors(rn.max,Ji.max),rn.expandByPoint(It)):(rn.expandByPoint(Ji.min),rn.expandByPoint(Ji.max))}rn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(e,c),It.add(Ai)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new k,u[y]=new k;const h=new k,f=new k,m=new k,v=new Ke,M=new Ke,p=new Ke,d=new k,A=new k;function S(y,I,W){h.fromArray(r,y*3),f.fromArray(r,I*3),m.fromArray(r,W*3),v.fromArray(o,y*2),M.fromArray(o,I*2),p.fromArray(o,W*2),f.sub(h),m.sub(h),M.sub(v),p.sub(v);const ne=1/(M.x*p.y-p.x*M.y);isFinite(ne)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-M.y).multiplyScalar(ne),A.copy(m).multiplyScalar(M.x).addScaledVector(f,-p.x).multiplyScalar(ne),c[y].add(d),c[I].add(d),c[W].add(d),u[y].add(A),u[I].add(A),u[W].add(A))}let D=this.groups;D.length===0&&(D=[{start:0,count:n.length}]);for(let y=0,I=D.length;y<I;++y){const W=D[y],ne=W.start,L=W.count;for(let T=ne,C=ne+L;T<C;T+=3)S(n[T+0],n[T+1],n[T+2])}const U=new k,P=new k,w=new k,O=new k;function g(y){w.fromArray(s,y*3),O.copy(w);const I=c[y];U.copy(I),U.sub(w.multiplyScalar(w.dot(I))).normalize(),P.crossVectors(O,I);const ne=P.dot(u[y])<0?-1:1;l[y*4]=U.x,l[y*4+1]=U.y,l[y*4+2]=U.z,l[y*4+3]=ne}for(let y=0,I=D.length;y<I;++y){const W=D[y],ne=W.start,L=W.count;for(let T=ne,C=ne+L;T<C;T+=3)g(n[T+0]),g(n[T+1]),g(n[T+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let d=0;d<u;d++)f[v++]=c[m++]}return new Sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new Ct,ei=new sa,Er=new es,mo=new k,wi=new k,Ri=new k,Ci=new k,Us=new k,yr=new k,br=new Ke,Tr=new Ke,Ar=new Ke,go=new k,_o=new k,vo=new k,wr=new k,Rr=new k;class qt extends zt{constructor(e=new tn,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Us.fromBufferAttribute(h,e),o?yr.addScaledVector(Us,u):yr.addScaledVector(Us.sub(t),u))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(Er.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Er,mo)===null||ei.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(s).invert(),ei.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let D=A,U=S;D<U;D+=3){const P=a.getX(D),w=a.getX(D+1),O=a.getX(D+2);r=Cr(this,d,e,n,c,u,h,P,w,O),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const A=a.getX(p),S=a.getX(p+1),D=a.getX(p+2);r=Cr(this,o,e,n,c,u,h,A,S,D),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let D=A,U=S;D<U;D+=3){const P=D,w=D+1,O=D+2;r=Cr(this,d,e,n,c,u,h,P,w,O),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const A=p,S=p+1,D=p+2;r=Cr(this,o,e,n,c,u,h,A,S,D),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function zu(i,e,t,n,r,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Yn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,wi),i.getVertexPosition(l,Ri),i.getVertexPosition(c,Ci);const u=zu(i,e,t,n,wi,Ri,Ci,wr);if(u){r&&(br.fromBufferAttribute(r,a),Tr.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,c),u.uv=vn.getInterpolation(wr,wi,Ri,Ci,br,Tr,Ar,new Ke)),s&&(br.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),Ar.fromBufferAttribute(s,c),u.uv1=vn.getInterpolation(wr,wi,Ri,Ci,br,Tr,Ar,new Ke),u.uv2=u.uv1),o&&(go.fromBufferAttribute(o,a),_o.fromBufferAttribute(o,l),vo.fromBufferAttribute(o,c),u.normal=vn.getInterpolation(wr,wi,Ri,Ci,go,_o,vo,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};vn.getNormal(wi,Ri,Ci,h.normal),u.face=h}return u}class Xi extends tn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function v(M,p,d,A,S,D,U,P,w,O,g){const y=D/w,I=U/O,W=D/2,ne=U/2,L=P/2,T=w+1,C=O+1;let X=0,V=0;const G=new k;for(let J=0;J<C;J++){const re=J*I-ne;for(let ge=0;ge<T;ge++){const q=ge*y-W;G[M]=q*A,G[p]=re*S,G[d]=L,c.push(G.x,G.y,G.z),G[M]=0,G[p]=0,G[d]=P>0?1:-1,u.push(G.x,G.y,G.z),h.push(ge/w),h.push(1-J/O),X+=1}}for(let J=0;J<O;J++)for(let re=0;re<w;re++){const ge=f+re+T*J,q=f+re+T*(J+1),ce=f+(re+1)+T*(J+1),Se=f+(re+1)+T*J;l.push(ge,q,Se),l.push(q,ce,Se),V+=6}a.addGroup(m,V,g),m+=V,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const r in n)e[r]=n[r]}return e}function Gu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yl(i){return i.getRenderTarget()===null?i.outputColorSpace:pt.workingColorSpace}const ku={clone:ki,merge:Xt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class Wu extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Li,Pi,e,t);r.layers=this.layers,this.add(r);const s=new un(Li,Pi,e,t);s.layers=this.layers,this.add(s);const o=new un(Li,Pi,e,t);o.layers=this.layers,this.add(o);const a=new un(Li,Pi,e,t);a.layers=this.layers,this.add(a);const l=new un(Li,Pi,e,t);l.layers=this.layers,this.add(l);const c=new un(Li,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Tl extends an{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xu extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===li?Bt:dn),this.texture=new Tl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Xn});s.uniforms.tEquirect.value=t;const o=new qt(r,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=cn),new Wu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Is=new k,$u=new k,qu=new rt;class Hn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Is.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qu.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new es,Lr=new k;class aa{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],v=r[9],M=r[10],p=r[11],d=r[12],A=r[13],S=r[14],D=r[15];if(n[0].setComponents(l-s,f-c,p-m,D-d).normalize(),n[1].setComponents(l+s,f+c,p+m,D+d).normalize(),n[2].setComponents(l+o,f+u,p+v,D+A).normalize(),n[3].setComponents(l-o,f-u,p-v,D-A).normalize(),n[4].setComponents(l-a,f-h,p-M,D-S).normalize(),t===Nn)n[5].setComponents(l+a,f+h,p+M,D+S).normalize();else if(t===Kr)n[5].setComponents(a,h,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Yu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=h.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,h,f),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,v=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&v.length===0&&i.bufferSubData(h,0,f),v.length!==0){for(let M=0,p=v.length;M<p;M++){const d=v[M];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class oa extends tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],v=[],M=[],p=[];for(let d=0;d<u;d++){const A=d*f-o;for(let S=0;S<c;S++){const D=S*h-s;v.push(D,-A,0),M.push(0,0,1),p.push(S/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const S=A+c*d,D=A+c*(d+1),U=A+1+c*(d+1),P=A+1+c*d;m.push(S,D,P),m.push(D,U,P)}this.setIndex(m),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`
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
}`,wd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sh=`#if defined( USE_POINTS_UV )
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
#endif`,ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ch=`#ifdef USE_MORPHNORMALS
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
#endif`,uh=`#ifdef USE_MORPHTARGETS
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
#endif`,dh=`#ifdef USE_MORPHTARGETS
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
#endif`,hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_h=`#ifdef USE_NORMALMAP
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
#endif`,vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ch=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uh=`float getShadowMask() {
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
}`,Ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nh=`#ifdef USE_SKINNING
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
#endif`,Fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oh=`#ifdef USE_SKINNING
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
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
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
#endif`,Vh=`#ifdef USE_TRANSMISSION
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
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jh=`uniform sampler2D t2D;
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
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,nf=`#define DISTANCE
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
}`,rf=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#include <common>
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
}`,ff=`#define MATCAP
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
}`,pf=`#define MATCAP
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
}`,mf=`#define NORMAL
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
}`,gf=`#define NORMAL
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
}`,_f=`#define PHONG
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
}`,vf=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,Mf=`#define STANDARD
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
}`,Sf=`#define TOON
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
}`,Ef=`#define TOON
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
}`,yf=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Af=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:ju,alphahash_pars_fragment:Ku,alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:rd,begin_vertex:sd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:Ed,emissivemap_fragment:yd,emissivemap_pars_fragment:bd,colorspace_fragment:Td,colorspace_pars_fragment:Ad,envmap_fragment:wd,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Hd,envmap_vertex:Pd,fog_vertex:Dd,fog_pars_vertex:Ud,fog_fragment:Id,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:$d,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:jd,lights_fragment_maps:Kd,lights_fragment_end:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:eh,logdepthbuf_vertex:th,map_fragment:nh,map_pars_fragment:ih,map_particle_fragment:rh,map_particle_pars_fragment:sh,metalnessmap_fragment:ah,metalnessmap_pars_fragment:oh,morphcolor_vertex:lh,morphnormal_vertex:ch,morphtarget_pars_vertex:uh,morphtarget_vertex:dh,normal_fragment_begin:hh,normal_fragment_maps:fh,normal_pars_fragment:ph,normal_pars_vertex:mh,normal_vertex:gh,normalmap_pars_fragment:_h,clearcoat_normal_fragment_begin:vh,clearcoat_normal_fragment_maps:xh,clearcoat_pars_fragment:Mh,iridescence_pars_fragment:Sh,opaque_fragment:Eh,packing:yh,premultiplied_alpha_fragment:bh,project_vertex:Th,dithering_fragment:Ah,dithering_pars_fragment:wh,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ch,shadowmap_pars_fragment:Lh,shadowmap_pars_vertex:Ph,shadowmap_vertex:Dh,shadowmask_pars_fragment:Uh,skinbase_vertex:Ih,skinning_pars_vertex:Nh,skinning_vertex:Fh,skinnormal_vertex:Oh,specularmap_fragment:Bh,specularmap_pars_fragment:zh,tonemapping_fragment:Gh,tonemapping_pars_fragment:kh,transmission_fragment:Hh,transmission_pars_fragment:Vh,uv_pars_fragment:Wh,uv_pars_vertex:Xh,uv_vertex:$h,worldpos_vertex:qh,background_vert:Yh,background_frag:jh,backgroundCube_vert:Kh,backgroundCube_frag:Zh,cube_vert:Jh,cube_frag:Qh,depth_vert:ef,depth_frag:tf,distanceRGBA_vert:nf,distanceRGBA_frag:rf,equirect_vert:sf,equirect_frag:af,linedashed_vert:of,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:hf,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:_f,meshphong_frag:vf,meshphysical_vert:xf,meshphysical_frag:Mf,meshtoon_vert:Sf,meshtoon_frag:Ef,points_vert:yf,points_frag:bf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:wf,sprite_frag:Rf},we={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},yn={basic:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Xt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Xt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Xt([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Xt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Xt([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Xt([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Xt([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Xt([we.lights,we.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};yn.physical={uniforms:Xt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Pr={r:0,b:0,g:0};function Cf(i,e,t,n,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function v(p,d){let A=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?M(a,l):S&&S.isColor&&(M(S,1),A=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Jr)?(u===void 0&&(u=new qt(new Xi(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:ki(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=pt.getTransfer(S.colorSpace)!==xt,(h!==S||f!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qt(new oa(2,2),new di({name:"BackgroundMaterial",uniforms:ki(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=pt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function M(p,d){p.getRGB(Pr,yl(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(a,l)},render:v}}function Lf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(L,T,C,X,V){let G=!1;if(o){const J=M(X,C,T);c!==J&&(c=J,m(c.object)),G=d(L,X,C,V),G&&A(L,X,C,V)}else{const J=T.wireframe===!0;(c.geometry!==X.id||c.program!==C.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=C.id,c.wireframe=J,G=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,O(L,T,C,X),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function M(L,T,C){const X=C.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let G=V[T.id];G===void 0&&(G={},V[T.id]=G);let J=G[X];return J===void 0&&(J=p(f()),G[X]=J),J}function p(L){const T=[],C=[],X=[];for(let V=0;V<r;V++)T[V]=0,C[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:C,attributeDivisors:X,object:L,attributes:{},index:null}}function d(L,T,C,X){const V=c.attributes,G=T.attributes;let J=0;const re=C.getAttributes();for(const ge in re)if(re[ge].location>=0){const ce=V[ge];let Se=G[ge];if(Se===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function A(L,T,C,X){const V={},G=T.attributes;let J=0;const re=C.getAttributes();for(const ge in re)if(re[ge].location>=0){let ce=G[ge];ce===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),V[ge]=Se,J++}c.attributes=V,c.attributesNum=J,c.index=X}function S(){const L=c.newAttributes;for(let T=0,C=L.length;T<C;T++)L[T]=0}function D(L){U(L,0)}function U(L,T){const C=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;C[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),V[L]!==T&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,T),V[L]=T)}function P(){const L=c.newAttributes,T=c.enabledAttributes;for(let C=0,X=T.length;C<X;C++)T[C]!==L[C]&&(i.disableVertexAttribArray(C),T[C]=0)}function w(L,T,C,X,V,G,J){J===!0?i.vertexAttribIPointer(L,T,C,V,G):i.vertexAttribPointer(L,T,C,X,V,G)}function O(L,T,C,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const V=X.attributes,G=C.getAttributes(),J=T.defaultAttributeValues;for(const re in G){const ge=G[re];if(ge.location>=0){let q=V[re];if(q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const ce=q.normalized,Se=q.itemSize,Ce=t.get(q);if(Ce===void 0)continue;const Ee=Ce.buffer,Ne=Ce.type,Re=Ce.bytesPerElement,De=n.isWebGL2===!0&&(Ne===i.INT||Ne===i.UNSIGNED_INT||q.gpuType===sl);if(q.isInterleavedBufferAttribute){const _e=q.data,N=_e.stride,ke=q.offset;if(_e.isInstancedInterleavedBuffer){for(let te=0;te<ge.locationSize;te++)U(ge.location+te,_e.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let te=0;te<ge.locationSize;te++)D(ge.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let te=0;te<ge.locationSize;te++)w(ge.location+te,Se/ge.locationSize,Ne,ce,N*Re,(ke+Se/ge.locationSize*te)*Re,De)}else{if(q.isInstancedBufferAttribute){for(let _e=0;_e<ge.locationSize;_e++)U(ge.location+_e,q.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let _e=0;_e<ge.locationSize;_e++)D(ge.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let _e=0;_e<ge.locationSize;_e++)w(ge.location+_e,Se/ge.locationSize,Ne,ce,Se*Re,Se/ge.locationSize*_e*Re,De)}}else if(J!==void 0){const ce=J[re];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ge.location,ce);break;case 3:i.vertexAttrib3fv(ge.location,ce);break;case 4:i.vertexAttrib4fv(ge.location,ce);break;default:i.vertexAttrib1fv(ge.location,ce)}}}}P()}function g(){W();for(const L in a){const T=a[L];for(const C in T){const X=T[C];for(const V in X)v(X[V].object),delete X[V];delete T[C]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const T=a[L.id];for(const C in T){const X=T[C];for(const V in X)v(X[V].object),delete X[V];delete T[C]}delete a[L.id]}function I(L){for(const T in a){const C=a[T];if(C[L.id]===void 0)continue;const X=C[L.id];for(const V in X)v(X[V].object),delete X[V];delete C[L.id]}}function W(){ne(),u=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:ne,dispose:g,releaseStatesOfGeometry:y,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:D,disableUnusedAttributes:P}}function Pf(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(u[v],h[v]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let v=0;for(let M=0;M<f;M++)v+=h[M];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Df(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,D=o||e.has("OES_texture_float"),U=S&&D,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:D,floatVertexTextures:U,maxSamples:P}}function Uf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Hn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const A=s?0:n,S=A*4;let D=d.clippingState||null;l.value=D,D=u(v,f,S,m);for(let U=0;U!==S;++U)D[U]=t[U];d.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,v){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,D=m;S!==M;++S,D+=4)o.copy(h[S]).applyMatrix4(A,a),o.normal.toArray(p,D),p[D+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function If(i){let e=new WeakMap;function t(o,a){return a===qs?o.mapping=Bi:a===Ys&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qs||a===Ys)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xu(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wl extends bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,xo=[.125,.215,.35,.446,.526,.582],ri=20,Ns=new wl,Mo=new st;let Fs=null,Os=0,Bs=0;const ni=(1+Math.sqrt(5))/2,Di=1/ni,So=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ni,Di),new k(0,ni,-Di),new k(Di,0,ni),new k(-Di,0,ni),new k(ni,Di,0),new k(-ni,Di,0)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs,Os,Bs),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:sr,format:Mn,colorSpace:Fn,depthBuffer:!1},r=yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(s)),this._blurMaterial=Ff(s,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,r){const a=new un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mo),u.toneMapping=$n,u.autoClear=!1;const m=new nr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new qt(new Xi,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Mo),M=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const S=this._cubeSize;Dr(r,A*S,d>2?S:0,S,S),u.setRenderTarget(r),M&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=So[(r-1)%So.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ri-1),M=s/v,p=isFinite(s)?1+Math.floor(u*M):ri;p>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const d=[];let A=0;for(let w=0;w<ri;++w){const O=w/M,g=Math.exp(-O*O/2);d.push(g),w===0?A+=g:w<p&&(A+=2*g)}for(let w=0;w<d.length;w++)d[w]=d[w]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const D=this._sizeLods[r],U=3*D*(r>S-Ui?r-S+Ui:0),P=4*(this._cubeSize-D);Dr(t,U,P,3*D,2*D),l.setRenderTarget(t),l.render(h,Ns)}}function Nf(i){const e=[],t=[],n=[];let r=i;const s=i-Ui+1+xo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ui?l=xo[o-i+Ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,M=3,p=2,d=1,A=new Float32Array(M*v*m),S=new Float32Array(p*v*m),D=new Float32Array(d*v*m);for(let P=0;P<m;P++){const w=P%3*2/3-1,O=P>2?0:-1,g=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];A.set(g,M*v*P),S.set(f,p*v*P);const y=[P,P,P,P,P,P];D.set(y,d*v*P)}const U=new tn;U.setAttribute("position",new Sn(A,M)),U.setAttribute("uv",new Sn(S,p)),U.setAttribute("faceIndex",new Sn(D,d)),e.push(U),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yo(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ff(i,e,t){const n=new Float32Array(ri),r=new k(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bo(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function To(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function Of(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qs||l===Ys,u=l===Bi||l===zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Eo(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Eo(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zf(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const M=m[v];for(let p=0,d=M.length;p<d;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let S=0,D=A.length;S<D;S+=3){const U=A[S+0],P=A[S+1],w=A[S+2];f.push(U,P,P,w,w,U)}}else if(v!==void 0){const A=v.array;M=v.version;for(let S=0,D=A.length/3-1;S<D;S+=3){const U=S+0,P=S+1,w=S+2;f.push(U,P,P,w,w,U)}}else return;const p=new(ml(f)?El:Sl)(f,1);p.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Gf(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,v){i.drawElements(s,v,a,m*l),t.update(v,s,1)}function h(m,v,M){if(M===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,a,m*l,M),t.update(v,s,M)}function f(m,v,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<M;d++)this.render(m[d]/l,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,M);let d=0;for(let A=0;A<M;A++)d+=v[A];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function kf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hf(i,e){return i[0]-e[0]}function Vf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let M=s.get(u);if(M===void 0||M.count!==v){let L=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",L)};M!==void 0&&M.texture.dispose();const A=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let O=0;A===!0&&(O=1),S===!0&&(O=2),D===!0&&(O=3);let g=u.attributes.position.count*O,y=1;g>e.maxTextureSize&&(y=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const I=new Float32Array(g*y*4*v),W=new vl(I,g,y,v);W.type=Wn,W.needsUpdate=!0;const ne=O*4;for(let T=0;T<v;T++){const C=U[T],X=P[T],V=w[T],G=g*y*4*T;for(let J=0;J<C.count;J++){const re=J*ne;A===!0&&(o.fromBufferAttribute(C,J),I[G+re+0]=o.x,I[G+re+1]=o.y,I[G+re+2]=o.z,I[G+re+3]=0),S===!0&&(o.fromBufferAttribute(X,J),I[G+re+4]=o.x,I[G+re+5]=o.y,I[G+re+6]=o.z,I[G+re+7]=0),D===!0&&(o.fromBufferAttribute(V,J),I[G+re+8]=o.x,I[G+re+9]=o.y,I[G+re+10]=o.z,I[G+re+11]=V.itemSize===4?o.w:1)}}M={count:v,texture:W,size:new Ke(g,y)},s.set(u,M),u.addEventListener("dispose",L)}let p=0;for(let A=0;A<f.length;A++)p+=f[A];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{const m=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==m){v=[];for(let S=0;S<m;S++)v[S]=[S,0];n[u.id]=v}for(let S=0;S<m;S++){const D=v[S];D[0]=S,D[1]=f[S]}v.sort(Vf);for(let S=0;S<8;S++)S<m&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Hf);const M=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let S=0;S<8;S++){const D=a[S],U=D[0],P=D[1];U!==Number.MAX_SAFE_INTEGER&&P?(M&&u.getAttribute("morphTarget"+S)!==M[U]&&u.setAttribute("morphTarget"+S,M[U]),p&&u.getAttribute("morphNormal"+S)!==p[U]&&u.setAttribute("morphNormal"+S,p[U]),r[S]=P,d+=P):(M&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const A=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Xf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Rl extends an{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=Vn),n===void 0&&u===Gi&&(n=ai),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cl=new an,Ll=new Rl(1,1);Ll.compareFunction=pl;const Pl=new vl,Dl=new Ru,Ul=new Tl,Ao=[],wo=[],Ro=new Float32Array(16),Co=new Float32Array(9),Lo=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ao[r];if(s===void 0&&(s=new Float32Array(r),Ao[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ns(i,e){let t=wo[e];t===void 0&&(t=new Int32Array(e),wo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),Dt(t,n)}}function Zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Co.set(n),i.uniformMatrix3fv(this.addr,!1,Co),Dt(t,n)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Ro.set(n),i.uniformMatrix4fv(this.addr,!1,Ro),Dt(t,n)}}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ll:Cl;t.setTexture2D(e||s,r)}function lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dl,r)}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ul,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pl,r)}function dp(i){switch(i){case 5126:return $f;case 35664:return qf;case 35665:return Yf;case 35666:return jf;case 35674:return Kf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return rp;case 36295:return sp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return up}}function hp(i,e){i.uniform1fv(this.addr,e)}function fp(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function pp(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function mp(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function gp(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _p(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vp(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xp(i,e){i.uniform1iv(this.addr,e)}function Mp(i,e){i.uniform2iv(this.addr,e)}function Sp(i,e){i.uniform3iv(this.addr,e)}function Ep(i,e){i.uniform4iv(this.addr,e)}function yp(i,e){i.uniform1uiv(this.addr,e)}function bp(i,e){i.uniform2uiv(this.addr,e)}function Tp(i,e){i.uniform3uiv(this.addr,e)}function Ap(i,e){i.uniform4uiv(this.addr,e)}function wp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cl,s[o])}function Rp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dl,s[o])}function Cp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ul,s[o])}function Lp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pl,s[o])}function Pp(i){switch(i){case 5126:return hp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return yp;case 36294:return bp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dp(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pp(t.type)}}class Ip{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function Po(i,e){i.seq.push(e),i.map[e.id]=e}function Np(i,e,t){const n=i.name,r=n.length;for(zs.lastIndex=0;;){const s=zs.exec(n),o=zs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Po(t,c===void 0?new Dp(a,i,e):new Up(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ip(a),Po(t,h)),t=h}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Np(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Do(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fp=37297;let Op=0;function Bp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zp(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let n;switch(e===t?n="":e===jr&&t===Yr?n="LinearDisplayP3ToLinearSRGB":e===Yr&&t===jr&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Qr:return[n,"LinearTransferOETF"];case Bt:case ra:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bp(i.getShaderSource(e),o)}else return r}function Gp(i,e){const t=zp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kp(i,e){let t;switch(e){case Zc:t="Linear";break;case Jc:t="Reinhard";break;case Qc:t="OptimizedCineon";break;case il:t="ACESFilmic";break;case tu:t="AgX";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Vp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function Wp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ii(i){return i!==""}function Io(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function No(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace($p,Yp)}const qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yp(i,e){let t=tt[e];if(t===void 0){const n=qp.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(i){return i.replace(jp,Kp)}function Kp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function em(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function tm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zp(t),c=Jp(t),u=Qp(t),h=em(t),f=tm(t),m=t.isWebGL2?"":Hp(t),v=Vp(t),M=Wp(s),p=r.createProgram();let d,A,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ii).join(`
`),d.length>0&&(d+=`
`),A=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ii).join(`
`),A.length>0&&(A+=`
`)):(d=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),A=[m,Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?tt.tonemapping_pars_fragment:"",t.toneMapping!==$n?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=ea(o),o=Io(o,t),o=No(o,t),a=ea(a),a=Io(a,t),a=No(a,t),o=Fo(o),a=Fo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const D=S+d+o,U=S+A+a,P=Do(r,r.VERTEX_SHADER,D),w=Do(r,r.FRAGMENT_SHADER,U);r.attachShader(p,P),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(W){if(i.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(P).trim(),T=r.getShaderInfoLog(w).trim();let C=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,P,w);else{const V=Uo(r,P,"vertex"),G=Uo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+V+`
`+G)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(L===""||T==="")&&(X=!1);X&&(W.diagnostics={runnable:C,programLog:ne,vertexShader:{log:L,prefix:d},fragmentShader:{log:T,prefix:A}})}r.deleteShader(P),r.deleteShader(w),g=new kr(r,p),y=Xp(r,p)}let g;this.getUniforms=function(){return g===void 0&&O(this),g};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,Fp)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Op++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=w,this}let im=0;class rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sm(e),t.set(e,n)),n}}class sm{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}}function am(i,e,t,n,r,s,o){const a=new xl,l=new rm,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return g===0?"uv":`uv${g}`}function p(g,y,I,W,ne){const L=W.fog,T=ne.geometry,C=g.isMeshStandardMaterial?W.environment:null,X=(g.isMeshStandardMaterial?t:e).get(g.envMap||C),V=X&&X.mapping===Jr?X.image.height:null,G=v[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const J=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,re=J!==void 0?J.length:0;let ge=0;T.morphAttributes.position!==void 0&&(ge=1),T.morphAttributes.normal!==void 0&&(ge=2),T.morphAttributes.color!==void 0&&(ge=3);let q,ce,Se,Ce;if(G){const ut=yn[G];q=ut.vertexShader,ce=ut.fragmentShader}else q=g.vertexShader,ce=g.fragmentShader,l.update(g),Se=l.getVertexShaderID(g),Ce=l.getFragmentShaderID(g);const Ee=i.getRenderTarget(),Ne=ne.isInstancedMesh===!0,Re=ne.isBatchedMesh===!0,De=!!g.map,_e=!!g.matcap,N=!!X,ke=!!g.aoMap,te=!!g.lightMap,pe=!!g.bumpMap,he=!!g.normalMap,Pe=!!g.displacementMap,ie=!!g.emissiveMap,x=!!g.metalnessMap,_=!!g.roughnessMap,F=g.anisotropy>0,oe=g.clearcoat>0,ue=g.iridescence>0,de=g.sheen>0,Te=g.transmission>0,xe=F&&!!g.anisotropyMap,ye=oe&&!!g.clearcoatMap,Ue=oe&&!!g.clearcoatNormalMap,ze=oe&&!!g.clearcoatRoughnessMap,fe=ue&&!!g.iridescenceMap,qe=ue&&!!g.iridescenceThicknessMap,He=de&&!!g.sheenColorMap,Be=de&&!!g.sheenRoughnessMap,Ie=!!g.specularMap,ve=!!g.specularColorMap,b=!!g.specularIntensityMap,Y=Te&&!!g.transmissionMap,Q=Te&&!!g.thicknessMap,ae=!!g.gradientMap,K=!!g.alphaMap,R=g.alphaTest>0,se=!!g.alphaHash,me=!!g.extensions,be=!!T.attributes.uv1,Le=!!T.attributes.uv2,We=!!T.attributes.uv3;let Xe=$n;return g.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:u,shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:ce,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:Ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Re,instancing:Ne,instancingColor:Ne&&ne.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Fn,map:De,matcap:_e,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:V,aoMap:ke,lightMap:te,bumpMap:pe,normalMap:he,displacementMap:f&&Pe,emissiveMap:ie,normalMapObjectSpace:he&&g.normalMapType===fu,normalMapTangentSpace:he&&g.normalMapType===fl,metalnessMap:x,roughnessMap:_,anisotropy:F,anisotropyMap:xe,clearcoat:oe,clearcoatMap:ye,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ze,iridescence:ue,iridescenceMap:fe,iridescenceThicknessMap:qe,sheen:de,sheenColorMap:He,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:ve,specularIntensityMap:b,transmission:Te,transmissionMap:Y,thicknessMap:Q,gradientMap:ae,opaque:g.transparent===!1&&g.blending===Fi,alphaMap:K,alphaTest:R,alphaHash:se,combine:g.combine,mapUv:De&&M(g.map.channel),aoMapUv:ke&&M(g.aoMap.channel),lightMapUv:te&&M(g.lightMap.channel),bumpMapUv:pe&&M(g.bumpMap.channel),normalMapUv:he&&M(g.normalMap.channel),displacementMapUv:Pe&&M(g.displacementMap.channel),emissiveMapUv:ie&&M(g.emissiveMap.channel),metalnessMapUv:x&&M(g.metalnessMap.channel),roughnessMapUv:_&&M(g.roughnessMap.channel),anisotropyMapUv:xe&&M(g.anisotropyMap.channel),clearcoatMapUv:ye&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:He&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(g.sheenRoughnessMap.channel),specularMapUv:Ie&&M(g.specularMap.channel),specularColorMapUv:ve&&M(g.specularColorMap.channel),specularIntensityMapUv:b&&M(g.specularIntensityMap.channel),transmissionMapUv:Y&&M(g.transmissionMap.channel),thicknessMapUv:Q&&M(g.thicknessMap.channel),alphaMapUv:K&&M(g.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(he||F),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Le,vertexUv3s:We,pointsUvs:ne.isPoints===!0&&!!T.attributes.uv&&(De||K),fog:!!L,useFog:g.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&g.map.isVideoTexture===!0&&pt.getTransfer(g.map.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===In,flipSided:g.side===en,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:me&&g.extensions.derivatives===!0,extensionFragDepth:me&&g.extensions.fragDepth===!0,extensionDrawBuffers:me&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)y.push(I),y.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(A(y,g),S(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function A(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function S(g,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function D(g){const y=v[g.type];let I;if(y){const W=yn[y];I=ku.clone(W.uniforms)}else I=g.uniforms;return I}function U(g,y){let I;for(let W=0,ne=c.length;W<ne;W++){const L=c[W];if(L.cacheKey===y){I=L,++I.usedTimes;break}}return I===void 0&&(I=new nm(i,y,g,s),c.push(I)),I}function P(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),g.destroy()}}function w(g){l.remove(g)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:D,acquireProgram:U,releaseProgram:P,releaseShaderCache:w,programs:c,dispose:O}}function om(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,v,M,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:M,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=M,d.group=p),e++,d}function a(h,f,m,v,M,p){const d=o(h,f,m,v,M,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,v,M,p){const d=o(h,f,m,v,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||lm),n.length>1&&n.sort(f||Bo),r.length>1&&r.sort(f||Bo)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new zo,i.set(n,[o])):r>=s.length?(o=new zo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hm=0;function fm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pm(i,e){const t=new um,n=dm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new Ct,a=new Ct;function l(u,h){let f=0,m=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let M=0,p=0,d=0,A=0,S=0,D=0,U=0,P=0,w=0,O=0,g=0;u.sort(fm);const y=h===!0?Math.PI:1;for(let W=0,ne=u.length;W<ne;W++){const L=u[W],T=L.color,C=L.intensity,X=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=T.r*C*y,m+=T.g*C*y,v+=T.b*C*y;else if(L.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(L.sh.coefficients[G],C);g++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const J=L.shadow,re=n.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.directionalShadow[M]=re,r.directionalShadowMap[M]=V,r.directionalShadowMatrix[M]=L.shadow.matrix,D++}r.directional[M]=G,M++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(T).multiplyScalar(C*y),G.distance=X,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,r.spot[d]=G;const J=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[d]=J.matrix,L.castShadow){const re=n.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.spotShadow[d]=re,r.spotShadowMap[d]=V,P++}d++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(T).multiplyScalar(C),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),r.rectArea[A]=G,A++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*y),G.distance=L.distance,G.decay=L.decay,L.castShadow){const J=L.shadow,re=n.get(L);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=L.shadow.matrix,U++}r.point[p]=G,p++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(C*y),G.groundColor.copy(L.groundColor).multiplyScalar(C*y),r.hemi[S]=G,S++}}A>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const I=r.hash;(I.directionalLength!==M||I.pointLength!==p||I.spotLength!==d||I.rectAreaLength!==A||I.hemiLength!==S||I.numDirectionalShadows!==D||I.numPointShadows!==U||I.numSpotShadows!==P||I.numSpotMaps!==w||I.numLightProbes!==g)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=A,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+w-O,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=g,I.directionalLength=M,I.pointLength=p,I.spotLength=d,I.rectAreaLength=A,I.hemiLength=S,I.numDirectionalShadows=D,I.numPointShadows=U,I.numSpotShadows=P,I.numSpotMaps=w,I.numLightProbes=g,r.version=hm++)}function c(u,h){let f=0,m=0,v=0,M=0,p=0;const d=h.matrixWorldInverse;for(let A=0,S=u.length;A<S;A++){const D=u[A];if(D.isDirectionalLight){const U=r.directional[f];U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),f++}else if(D.isSpotLight){const U=r.spot[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(d),U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),v++}else if(D.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(d),a.identity(),o.copy(D.matrixWorld),o.premultiply(d),a.extractRotation(o),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),M++}else if(D.isPointLight){const U=r.point[m];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(d),m++}else if(D.isHemisphereLight){const U=r.hemi[p];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Go(i,e){const t=new pm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Go(i,e),t.set(s,[l])):o>=a.length?(l=new Go(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class gm extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
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
}`;function Mm(i,e,t){let n=new aa;const r=new Ke,s=new Ke,o=new Ft,a=new gm({depthPacking:hu}),l=new _m,c={},u=t.maxTextureSize,h={[Yn]:en,[en]:Yn,[In]:In},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:vm,fragmentShader:xm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new tn;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new qt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let d=this.type;this.render=function(P,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const g=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Xn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=d!==Un&&this.type===Un,L=d===Un&&this.type!==Un;for(let T=0,C=P.length;T<C;T++){const X=P[T],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const G=V.getFrameExtents();if(r.multiply(G),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||ne===!0||L===!0){const re=this.type!==Un?{minFilter:$t,magFilter:$t}:{};V.map!==null&&V.map.dispose(),V.map=new ci(r.x,r.y,re),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const J=V.getViewportCount();for(let re=0;re<J;re++){const ge=V.getViewport(re);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),W.viewport(o),V.updateMatrices(X,re),n=V.getFrustum(),D(w,O,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Un&&A(V,O),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(g,y,I)};function A(P,w){const O=e.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(w,null,O,f,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(w,null,O,m,M,null)}function S(P,w,O,g){let y=null;const I=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=y.uuid,ne=w.uuid;let L=c[W];L===void 0&&(L={},c[W]=L);let T=L[ne];T===void 0&&(T=y.clone(),L[ne]=T,w.addEventListener("dispose",U)),y=T}if(y.visible=w.visible,y.wireframe=w.wireframe,g===Un?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=O}return y}function D(P,w,O,g,y){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Un)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),L=P.material;if(Array.isArray(L)){const T=ne.groups;for(let C=0,X=T.length;C<X;C++){const V=T[C],G=L[V.materialIndex];if(G&&G.visible){const J=S(P,G,g,y);P.onBeforeShadow(i,P,w,O,ne,J,V),i.renderBufferDirect(O,null,ne,J,P,V),P.onAfterShadow(i,P,w,O,ne,J,V)}}}else if(L.visible){const T=S(P,L,g,y);P.onBeforeShadow(i,P,w,O,ne,T,null),i.renderBufferDirect(O,null,ne,T,P,null),P.onAfterShadow(i,P,w,O,ne,T,null)}}const W=P.children;for(let ne=0,L=W.length;ne<L;ne++)D(W[ne],w,O,g,y)}function U(P){P.target.removeEventListener("dispose",U);for(const O in c){const g=c[O],y=P.target.uuid;y in g&&(g[y].dispose(),delete g[y])}}}function Sm(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const se=new Ft;let me=null;const be=new Ft(0,0,0,0);return{setMask:function(Le){me!==Le&&!R&&(i.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){R=Le},setClear:function(Le,We,Xe,ct,ut){ut===!0&&(Le*=ct,We*=ct,Xe*=ct),se.set(Le,We,Xe,ct),be.equals(se)===!1&&(i.clearColor(Le,We,Xe,ct),be.copy(se))},reset:function(){R=!1,me=null,be.set(-1,0,0,0)}}}function s(){let R=!1,se=null,me=null,be=null;return{setTest:function(Le){Le?Re(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Le){se!==Le&&!R&&(i.depthMask(Le),se=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case Hc:i.depthFunc(i.NEVER);break;case Vc:i.depthFunc(i.ALWAYS);break;case Wc:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case Xc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case qc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Le}},setLocked:function(Le){R=Le},setClear:function(Le){be!==Le&&(i.clearDepth(Le),be=Le)},reset:function(){R=!1,se=null,me=null,be=null}}}function o(){let R=!1,se=null,me=null,be=null,Le=null,We=null,Xe=null,ct=null,ut=null;return{setTest:function(nt){R||(nt?Re(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!R&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,ft,Kt){(me!==nt||be!==ft||Le!==Kt)&&(i.stencilFunc(nt,ft,Kt),me=nt,be=ft,Le=Kt)},setOp:function(nt,ft,Kt){(We!==nt||Xe!==ft||ct!==Kt)&&(i.stencilOp(nt,ft,Kt),We=nt,Xe=ft,ct=Kt)},setLocked:function(nt){R=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){R=!1,se=null,me=null,be=null,Le=null,We=null,Xe=null,ct=null,ut=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},v=new WeakMap,M=[],p=null,d=!1,A=null,S=null,D=null,U=null,P=null,w=null,O=null,g=new st(0,0,0),y=0,I=!1,W=null,ne=null,L=null,T=null,C=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=G>=2);let re=null,ge={};const q=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Se=new Ft().fromArray(q),Ce=new Ft().fromArray(ce);function Ee(R,se,me,be){const Le=new Uint8Array(4),We=i.createTexture();i.bindTexture(R,We),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<me;Xe++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(se+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return We}const Ne={};Ne[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc($r),ie(!1),x(Ma),Re(i.CULL_FACE),he(Xn);function Re(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function De(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function _e(R,se){return m[R]!==se?(i.bindFramebuffer(R,se),m[R]=se,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(R,se){let me=M,be=!1;if(R)if(me=v.get(se),me===void 0&&(me=[],v.set(se,me)),R.isWebGLMultipleRenderTargets){const Le=R.texture;if(me.length!==Le.length||me[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Xe=Le.length;We<Xe;We++)me[We]=i.COLOR_ATTACHMENT0+We;me.length=Le.length,be=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,be=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ke(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const te={[ii]:i.FUNC_ADD,[wc]:i.FUNC_SUBTRACT,[Rc]:i.FUNC_REVERSE_SUBTRACT};if(n)te[ba]=i.MIN,te[Ta]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(te[ba]=R.MIN_EXT,te[Ta]=R.MAX_EXT)}const pe={[Cc]:i.ZERO,[Lc]:i.ONE,[Pc]:i.SRC_COLOR,[Xs]:i.SRC_ALPHA,[Oc]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Bc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[Gc]:i.CONSTANT_ALPHA,[kc]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,se,me,be,Le,We,Xe,ct,ut,nt){if(R===Xn){d===!0&&(De(i.BLEND),d=!1);return}if(d===!1&&(Re(i.BLEND),d=!0),R!==Ac){if(R!==A||nt!==I){if((S!==ii||P!==ii)&&(i.blendEquation(i.FUNC_ADD),S=ii,P=ii),nt)switch(R){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}D=null,U=null,w=null,O=null,g.set(0,0,0),y=0,A=R,I=nt}return}Le=Le||se,We=We||me,Xe=Xe||be,(se!==S||Le!==P)&&(i.blendEquationSeparate(te[se],te[Le]),S=se,P=Le),(me!==D||be!==U||We!==w||Xe!==O)&&(i.blendFuncSeparate(pe[me],pe[be],pe[We],pe[Xe]),D=me,U=be,w=We,O=Xe),(ct.equals(g)===!1||ut!==y)&&(i.blendColor(ct.r,ct.g,ct.b,ut),g.copy(ct),y=ut),A=R,I=!1}function Pe(R,se){R.side===In?De(i.CULL_FACE):Re(i.CULL_FACE);let me=R.side===en;se&&(me=!me),ie(me),R.blending===Fi&&R.transparent===!1?he(Xn):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const be=R.stencilWrite;c.setTest(be),be&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(R){W!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),W=R)}function x(R){R!==bc?(Re(i.CULL_FACE),R!==ne&&(R===Ma?i.cullFace(i.BACK):R===Tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),ne=R}function _(R){R!==L&&(V&&i.lineWidth(R),L=R)}function F(R,se,me){R?(Re(i.POLYGON_OFFSET_FILL),(T!==se||C!==me)&&(i.polygonOffset(se,me),T=se,C=me)):De(i.POLYGON_OFFSET_FILL)}function oe(R){R?Re(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function ue(R){R===void 0&&(R=i.TEXTURE0+X-1),re!==R&&(i.activeTexture(R),re=R)}function de(R,se,me){me===void 0&&(re===null?me=i.TEXTURE0+X-1:me=re);let be=ge[me];be===void 0&&(be={type:void 0,texture:void 0},ge[me]=be),(be.type!==R||be.texture!==se)&&(re!==me&&(i.activeTexture(me),re=me),i.bindTexture(R,se||Ne[R]),be.type=R,be.texture=se)}function Te(){const R=ge[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function b(R){Se.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Se.copy(R))}function Y(R){Ce.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ce.copy(R))}function Q(R,se){let me=h.get(se);me===void 0&&(me=new WeakMap,h.set(se,me));let be=me.get(R);be===void 0&&(be=i.getUniformBlockIndex(se,R.name),me.set(R,be))}function ae(R,se){const be=h.get(se).get(R);u.get(se)!==be&&(i.uniformBlockBinding(se,be,R.__bindingPointIndex),u.set(se,be))}function K(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,ge={},m={},v=new WeakMap,M=[],p=null,d=!1,A=null,S=null,D=null,U=null,P=null,w=null,O=null,g=new st(0,0,0),y=0,I=!1,W=null,ne=null,L=null,T=null,C=null,Se.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:De,bindFramebuffer:_e,drawBuffers:N,useProgram:ke,setBlending:he,setMaterial:Pe,setFlipSided:ie,setCullFace:x,setLineWidth:_,setPolygonOffset:F,setScissorTest:oe,activeTexture:ue,bindTexture:de,unbindTexture:Te,compressedTexImage2D:xe,compressedTexImage3D:ye,texImage2D:Ie,texImage3D:ve,updateUBOMapping:Q,uniformBlockBinding:ae,texStorage2D:He,texStorage3D:Be,texSubImage2D:Ue,texSubImage3D:ze,compressedTexSubImage2D:fe,compressedTexSubImage3D:qe,scissor:b,viewport:Y,reset:K}}function Em(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,_){return m?new OffscreenCanvas(x,_):Zr("canvas")}function M(x,_,F,oe){let ue=1;if((x.width>oe||x.height>oe)&&(ue=oe/Math.max(x.width,x.height)),ue<1||_===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const de=_?Qs:Math.floor,Te=de(ue*x.width),xe=de(ue*x.height);h===void 0&&(h=v(Te,xe));const ye=F?v(Te,xe):h;return ye.width=Te,ye.height=xe,ye.getContext("2d").drawImage(x,0,0,Te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Te+"x"+xe+")."),ye}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return to(x.width)&&to(x.height)}function d(x){return a?!1:x.wrapS!==xn||x.wrapT!==xn||x.minFilter!==$t&&x.minFilter!==cn}function A(x,_){return x.generateMipmaps&&_&&x.minFilter!==$t&&x.minFilter!==cn}function S(x){i.generateMipmap(x)}function D(x,_,F,oe,ue=!1){if(a===!1)return _;if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let de=_;if(_===i.RED&&(F===i.FLOAT&&(de=i.R32F),F===i.HALF_FLOAT&&(de=i.R16F),F===i.UNSIGNED_BYTE&&(de=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(de=i.R8UI),F===i.UNSIGNED_SHORT&&(de=i.R16UI),F===i.UNSIGNED_INT&&(de=i.R32UI),F===i.BYTE&&(de=i.R8I),F===i.SHORT&&(de=i.R16I),F===i.INT&&(de=i.R32I)),_===i.RG&&(F===i.FLOAT&&(de=i.RG32F),F===i.HALF_FLOAT&&(de=i.RG16F),F===i.UNSIGNED_BYTE&&(de=i.RG8)),_===i.RGBA){const Te=ue?qr:pt.getTransfer(oe);F===i.FLOAT&&(de=i.RGBA32F),F===i.HALF_FLOAT&&(de=i.RGBA16F),F===i.UNSIGNED_BYTE&&(de=Te===xt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function U(x,_,F){return A(x,F)===!0||x.isFramebufferTexture&&x.minFilter!==$t&&x.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function P(x){return x===$t||x===Aa||x===ds?i.NEAREST:i.LINEAR}function w(x){const _=x.target;_.removeEventListener("dispose",w),g(_),_.isVideoTexture&&u.delete(_)}function O(x){const _=x.target;_.removeEventListener("dispose",O),I(_)}function g(x){const _=n.get(x);if(_.__webglInit===void 0)return;const F=x.source,oe=f.get(F);if(oe){const ue=oe[_.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&y(x),Object.keys(oe).length===0&&f.delete(F)}n.remove(x)}function y(x){const _=n.get(x);i.deleteTexture(_.__webglTexture);const F=x.source,oe=f.get(F);delete oe[_.__cacheKey],o.memory.textures--}function I(x){const _=x.texture,F=n.get(x),oe=n.get(_);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(F.__webglFramebuffer[ue]))for(let de=0;de<F.__webglFramebuffer[ue].length;de++)i.deleteFramebuffer(F.__webglFramebuffer[ue][de]);else i.deleteFramebuffer(F.__webglFramebuffer[ue]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ue])}else{if(Array.isArray(F.__webglFramebuffer))for(let ue=0;ue<F.__webglFramebuffer.length;ue++)i.deleteFramebuffer(F.__webglFramebuffer[ue]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ue=0;ue<F.__webglColorRenderbuffer.length;ue++)F.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ue]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ue=0,de=_.length;ue<de;ue++){const Te=n.get(_[ue]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(_[ue])}n.remove(_),n.remove(x)}let W=0;function ne(){W=0}function L(){const x=W;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),W+=1,x}function T(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function C(x,_){const F=n.get(x);if(x.isVideoTexture&&Pe(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const oe=x.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,x,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(x,_){const F=n.get(x);if(x.version>0&&F.__version!==x.version){Se(F,x,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function V(x,_){const F=n.get(x);if(x.version>0&&F.__version!==x.version){Se(F,x,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(x,_){const F=n.get(x);if(x.version>0&&F.__version!==x.version){Ce(F,x,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const J={[js]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},re={[$t]:i.NEAREST,[Aa]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[nu]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},ge={[pu]:i.NEVER,[Mu]:i.ALWAYS,[mu]:i.LESS,[pl]:i.LEQUAL,[gu]:i.EQUAL,[xu]:i.GEQUAL,[_u]:i.GREATER,[vu]:i.NOTEQUAL};function q(x,_,F){if(F?(i.texParameteri(x,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,J[_.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,re[_.minFilter])):(i.texParameteri(x,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(x,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==xn||_.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(x,i.TEXTURE_MAG_FILTER,P(_.magFilter)),i.texParameteri(x,i.TEXTURE_MIN_FILTER,P(_.minFilter)),_.minFilter!==$t&&_.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===$t||_.minFilter!==ds&&_.minFilter!==rr||_.type===Wn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(x,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function ce(x,_){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",w));const oe=_.source;let ue=f.get(oe);ue===void 0&&(ue={},f.set(oe,ue));const de=T(_);if(de!==x.__cacheKey){ue[de]===void 0&&(ue[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ue[de].usedTimes++;const Te=ue[x.__cacheKey];Te!==void 0&&(ue[x.__cacheKey].usedTimes--,Te.usedTimes===0&&y(_)),x.__cacheKey=de,x.__webglTexture=ue[de].texture}return F}function Se(x,_,F){let oe=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(oe=i.TEXTURE_3D);const ue=ce(x,_),de=_.source;t.bindTexture(oe,x.__webglTexture,i.TEXTURE0+F);const Te=n.get(de);if(de.version!==Te.__version||ue===!0){t.activeTexture(i.TEXTURE0+F);const xe=pt.getPrimaries(pt.workingColorSpace),ye=_.colorSpace===dn?null:pt.getPrimaries(_.colorSpace),Ue=_.colorSpace===dn||xe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ze=d(_)&&p(_.image)===!1;let fe=M(_.image,ze,!1,r.maxTextureSize);fe=ie(_,fe);const qe=p(fe)||a,He=s.convert(_.format,_.colorSpace);let Be=s.convert(_.type),Ie=D(_.internalFormat,He,Be,_.colorSpace,_.isVideoTexture);q(oe,_,qe);let ve;const b=_.mipmaps,Y=a&&_.isVideoTexture!==!0&&Ie!==dl,Q=Te.__version===void 0||ue===!0,ae=U(_,fe,qe);if(_.isDepthTexture)Ie=i.DEPTH_COMPONENT,a?_.type===Wn?Ie=i.DEPTH_COMPONENT32F:_.type===Vn?Ie=i.DEPTH_COMPONENT24:_.type===ai?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:_.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===oi&&Ie===i.DEPTH_COMPONENT&&_.type!==ia&&_.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Vn,Be=s.convert(_.type)),_.format===Gi&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,_.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ai,Be=s.convert(_.type))),Q&&(Y?t.texStorage2D(i.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,He,Be,null));else if(_.isDataTexture)if(b.length>0&&qe){Y&&Q&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,b[0].width,b[0].height);for(let K=0,R=b.length;K<R;K++)ve=b[K],Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,ve.width,ve.height,He,Be,ve.data):t.texImage2D(i.TEXTURE_2D,K,Ie,ve.width,ve.height,0,He,Be,ve.data);_.generateMipmaps=!1}else Y?(Q&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,He,Be,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,He,Be,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Y&&Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,b[0].width,b[0].height,fe.depth);for(let K=0,R=b.length;K<R;K++)ve=b[K],_.format!==Mn?He!==null?Y?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,fe.depth,He,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ie,ve.width,ve.height,fe.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,fe.depth,He,Be,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ie,ve.width,ve.height,fe.depth,0,He,Be,ve.data)}else{Y&&Q&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,b[0].width,b[0].height);for(let K=0,R=b.length;K<R;K++)ve=b[K],_.format!==Mn?He!==null?Y?t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ve.width,ve.height,He,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,ve.width,ve.height,He,Be,ve.data):t.texImage2D(i.TEXTURE_2D,K,Ie,ve.width,ve.height,0,He,Be,ve.data)}else if(_.isDataArrayTexture)Y?(Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,He,Be,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,He,Be,fe.data);else if(_.isData3DTexture)Y?(Q&&t.texStorage3D(i.TEXTURE_3D,ae,Ie,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,He,Be,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,He,Be,fe.data);else if(_.isFramebufferTexture){if(Q)if(Y)t.texStorage2D(i.TEXTURE_2D,ae,Ie,fe.width,fe.height);else{let K=fe.width,R=fe.height;for(let se=0;se<ae;se++)t.texImage2D(i.TEXTURE_2D,se,Ie,K,R,0,He,Be,null),K>>=1,R>>=1}}else if(b.length>0&&qe){Y&&Q&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,b[0].width,b[0].height);for(let K=0,R=b.length;K<R;K++)ve=b[K],Y?t.texSubImage2D(i.TEXTURE_2D,K,0,0,He,Be,ve):t.texImage2D(i.TEXTURE_2D,K,Ie,He,Be,ve);_.generateMipmaps=!1}else Y?(Q&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Be,fe)):t.texImage2D(i.TEXTURE_2D,0,Ie,He,Be,fe);A(_,qe)&&S(oe),Te.__version=de.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ce(x,_,F){if(_.image.length!==6)return;const oe=ce(x,_),ue=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+F);const de=n.get(ue);if(ue.version!==de.__version||oe===!0){t.activeTexture(i.TEXTURE0+F);const Te=pt.getPrimaries(pt.workingColorSpace),xe=_.colorSpace===dn?null:pt.getPrimaries(_.colorSpace),ye=_.colorSpace===dn||Te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ze=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ue&&!ze?fe[K]=M(_.image[K],!1,!0,r.maxCubemapSize):fe[K]=ze?_.image[K].image:_.image[K],fe[K]=ie(_,fe[K]);const qe=fe[0],He=p(qe)||a,Be=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),ve=D(_.internalFormat,Be,Ie,_.colorSpace),b=a&&_.isVideoTexture!==!0,Y=de.__version===void 0||oe===!0;let Q=U(_,qe,He);q(i.TEXTURE_CUBE_MAP,_,He);let ae;if(Ue){b&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,ve,qe.width,qe.height);for(let K=0;K<6;K++){ae=fe[K].mipmaps;for(let R=0;R<ae.length;R++){const se=ae[R];_.format!==Mn?Be!==null?b?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,se.width,se.height,Be,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,ve,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,0,0,se.width,se.height,Be,Ie,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R,ve,se.width,se.height,0,Be,Ie,se.data)}}}else{ae=_.mipmaps,b&&Y&&(ae.length>0&&Q++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,ve,fe[0].width,fe[0].height));for(let K=0;K<6;K++)if(ze){b?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Be,Ie,fe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,fe[K].width,fe[K].height,0,Be,Ie,fe[K].data);for(let R=0;R<ae.length;R++){const me=ae[R].image[K].image;b?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,me.width,me.height,Be,Ie,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,ve,me.width,me.height,0,Be,Ie,me.data)}}else{b?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Be,Ie,fe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ve,Be,Ie,fe[K]);for(let R=0;R<ae.length;R++){const se=ae[R];b?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,0,0,Be,Ie,se.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,R+1,ve,Be,Ie,se.image[K])}}}A(_,He)&&S(i.TEXTURE_CUBE_MAP),de.__version=ue.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ee(x,_,F,oe,ue,de){const Te=s.convert(F.format,F.colorSpace),xe=s.convert(F.type),ye=D(F.internalFormat,Te,xe,F.colorSpace);if(!n.get(_).__hasExternalTextures){const ze=Math.max(1,_.width>>de),fe=Math.max(1,_.height>>de);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,ye,ze,fe,_.depth,0,Te,xe,null):t.texImage2D(ue,de,ye,ze,fe,0,Te,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),he(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ue,n.get(F).__webglTexture,0,pe(_)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ue,n.get(F).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(x,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,x),_.depthBuffer&&!_.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||he(_)){const ue=_.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Wn?oe=i.DEPTH_COMPONENT32F:ue.type===Vn&&(oe=i.DEPTH_COMPONENT24));const de=pe(_);he(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,oe,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,oe,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,x)}else if(_.depthBuffer&&_.stencilBuffer){const oe=pe(_);F&&he(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,_.width,_.height):he(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,x)}else{const oe=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ue=0;ue<oe.length;ue++){const de=oe[ue],Te=s.convert(de.format,de.colorSpace),xe=s.convert(de.type),ye=D(de.internalFormat,Te,xe,de.colorSpace),Ue=pe(_);F&&he(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ye,_.width,_.height):he(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,ye,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ye,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),C(_.depthTexture,0);const oe=n.get(_.depthTexture).__webglTexture,ue=pe(_);if(_.depthTexture.format===oi)he(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(_.depthTexture.format===Gi)he(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function De(x){const _=n.get(x),F=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,x)}else if(F){_.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[oe]),_.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ne(_.__webglDepthbuffer[oe],x,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Ne(_.__webglDepthbuffer,x,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(x,_,F){const oe=n.get(x);_!==void 0&&Ee(oe.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&De(x)}function N(x){const _=x.texture,F=n.get(x),oe=n.get(_);x.addEventListener("dispose",O),x.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=_.version,o.memory.textures++);const ue=x.isWebGLCubeRenderTarget===!0,de=x.isWebGLMultipleRenderTargets===!0,Te=p(x)||a;if(ue){F.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[xe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)F.__webglFramebuffer[xe][ye]=i.createFramebuffer()}else F.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let xe=0;xe<_.mipmaps.length;xe++)F.__webglFramebuffer[xe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const xe=x.texture;for(let ye=0,Ue=xe.length;ye<Ue;ye++){const ze=n.get(xe[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&he(x)===!1){const xe=de?_:[_];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){const Ue=xe[ye];F.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ye]);const ze=s.convert(Ue.format,Ue.colorSpace),fe=s.convert(Ue.type),qe=D(Ue.internalFormat,ze,fe,Ue.colorSpace,x.isXRRenderTarget===!0),He=pe(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,qe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,F.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),q(i.TEXTURE_CUBE_MAP,_,Te);for(let xe=0;xe<6;xe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(F.__webglFramebuffer[xe][ye],x,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else Ee(F.__webglFramebuffer[xe],x,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);A(_,Te)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const xe=x.texture;for(let ye=0,Ue=xe.length;ye<Ue;ye++){const ze=xe[ye],fe=n.get(ze);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),q(i.TEXTURE_2D,ze,Te),Ee(F.__webglFramebuffer,x,ze,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),A(ze,Te)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?xe=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,oe.__webglTexture),q(xe,_,Te),a&&_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(F.__webglFramebuffer[ye],x,_,i.COLOR_ATTACHMENT0,xe,ye);else Ee(F.__webglFramebuffer,x,_,i.COLOR_ATTACHMENT0,xe,0);A(_,Te)&&S(xe),t.unbindTexture()}x.depthBuffer&&De(x)}function ke(x){const _=p(x)||a,F=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let oe=0,ue=F.length;oe<ue;oe++){const de=F[oe];if(A(de,_)){const Te=x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(de).__webglTexture;t.bindTexture(Te,xe),S(Te),t.unbindTexture()}}}function te(x){if(a&&x.samples>0&&he(x)===!1){const _=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],F=x.width,oe=x.height;let ue=i.COLOR_BUFFER_BIT;const de=[],Te=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(x),ye=x.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){de.push(i.COLOR_ATTACHMENT0+Ue),x.depthBuffer&&de.push(Te);const ze=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(ze===!1&&(x.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ue]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),ye){const fe=n.get(_[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,F,oe,0,0,F,oe,ue,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ue]);const ze=n.get(_[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function pe(x){return Math.min(r.maxSamples,x.samples)}function he(x){const _=n.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function ie(x,_){const F=x.colorSpace,oe=x.format,ue=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Zs||F!==Fn&&F!==dn&&(pt.getTransfer(F)===xt?a===!1?e.has("EXT_sRGB")===!0&&oe===Mn?(x.format=Zs,x.minFilter=cn,x.generateMipmaps=!1):_=gl.sRGBToLinear(_):(oe!==Mn||ue!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}this.allocateTextureUnit=L,this.resetTextureUnits=ne,this.setTexture2D=C,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=_e,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=he}function ym(i,e,t){const n=t.isWebGL2;function r(s,o=dn){let a;const l=pt.getTransfer(o);if(s===qn)return i.UNSIGNED_BYTE;if(s===al)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(s===iu)return i.BYTE;if(s===ru)return i.SHORT;if(s===ia)return i.UNSIGNED_SHORT;if(s===sl)return i.INT;if(s===Vn)return i.UNSIGNED_INT;if(s===Wn)return i.FLOAT;if(s===sr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===su)return i.ALPHA;if(s===Mn)return i.RGBA;if(s===au)return i.LUMINANCE;if(s===ou)return i.LUMINANCE_ALPHA;if(s===oi)return i.DEPTH_COMPONENT;if(s===Gi)return i.DEPTH_STENCIL;if(s===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lu)return i.RED;if(s===ll)return i.RED_INTEGER;if(s===cu)return i.RG;if(s===cl)return i.RG_INTEGER;if(s===ul)return i.RGBA_INTEGER;if(s===hs||s===fs||s===ps||s===ms)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wa||s===Ra||s===Ca||s===La)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===La)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pa||s===Da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pa)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Da)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ua||s===Ia||s===Na||s===Fa||s===Oa||s===Ba||s===za||s===Ga||s===ka||s===Ha||s===Va||s===Wa||s===Xa||s===$a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ua)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ia)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Na)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fa)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oa)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ba)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===za)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ga)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ka)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ha)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Va)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wa)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xa)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$a)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gs||s===qa||s===Ya)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gs)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ya)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uu||s===ja||s===Ka||s===Za)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ja)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ka)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Za)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class bm extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Am extends pi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,v=null;const M=t.getContextAttributes();let p=null,d=null;const A=[],S=[],D=new Ke;let U=null;const P=new un;P.layers.enable(1),P.viewport=new Ft;const w=new un;w.layers.enable(2),w.viewport=new Ft;const O=[P,w],g=new bm;g.layers.enable(1),g.layers.enable(2);let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=A[q];return ce===void 0&&(ce=new Gs,A[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=A[q];return ce===void 0&&(ce=new Gs,A[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=A[q];return ce===void 0&&(ce=new Gs,A[q]=ce),ce.getHandSpace()};function W(q){const ce=S.indexOf(q.inputSource);if(ce===-1)return;const Se=A[ce];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function ne(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",L);for(let q=0;q<A.length;q++){const ce=S[q];ce!==null&&(S[q]=null,A[q].disconnect(ce))}y=null,I=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",L),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new ci(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ce=null,Se=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=M.stencil?Gi:oi,Se=M.stencil?ai:Vn);const Ee={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new ci(f.textureWidth,f.textureHeight,{format:Mn,type:qn,depthTexture:new Rl(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Ne=e.properties.get(d);Ne.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let ce=0;ce<q.removed.length;ce++){const Se=q.removed[ce],Ce=S.indexOf(Se);Ce>=0&&(S[Ce]=null,A[Ce].disconnect(Se))}for(let ce=0;ce<q.added.length;ce++){const Se=q.added[ce];let Ce=S.indexOf(Se);if(Ce===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=S.length){S.push(Se),Ce=Ne;break}else if(S[Ne]===null){S[Ne]=Se,Ce=Ne;break}if(Ce===-1)break}const Ee=A[Ce];Ee&&Ee.connect(Se)}}const T=new k,C=new k;function X(q,ce,Se){T.setFromMatrixPosition(ce.matrixWorld),C.setFromMatrixPosition(Se.matrixWorld);const Ce=T.distanceTo(C),Ee=ce.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Re=Ee[14]/(Ee[10]-1),De=Ee[14]/(Ee[10]+1),_e=(Ee[9]+1)/Ee[5],N=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],te=(Ne[8]+1)/Ne[0],pe=Re*ke,he=Re*te,Pe=Ce/(-ke+te),ie=Pe*-ke;ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ie),q.translateZ(Pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const x=Re+Pe,_=De+Pe,F=pe-ie,oe=he+(Ce-ie),ue=_e*De/_*x,de=N*De/_*x;q.projectionMatrix.makePerspective(F,oe,ue,de,x,_),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.near=w.near=P.near=q.near,g.far=w.far=P.far=q.far,(y!==g.near||I!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,I=g.far);const ce=q.parent,Se=g.cameras;V(g,ce);for(let Ce=0;Ce<Se.length;Ce++)V(Se[Ce],ce);Se.length===2?X(g,P,w):g.projectionMatrix.copy(P.projectionMatrix),G(q,g,ce)};function G(q,ce,Se){Se===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Js*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let J=null;function re(q,ce){if(u=ce.getViewerPose(c||o),v=ce,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Ce=!1;Se.length!==g.cameras.length&&(g.cameras.length=0,Ce=!0);for(let Ee=0;Ee<Se.length;Ee++){const Ne=Se[Ee];let Re=null;if(m!==null)Re=m.getViewport(Ne);else{const _e=h.getViewSubImage(f,Ne);Re=_e.viewport,Ee===0&&(e.setRenderTargetTextures(d,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(d))}let De=O[Ee];De===void 0&&(De=new un,De.layers.enable(Ee),De.viewport=new Ft,O[Ee]=De),De.matrix.fromArray(Ne.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ne.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Re.x,Re.y,Re.width,Re.height),Ee===0&&(g.matrix.copy(De.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Ce===!0&&g.cameras.push(De)}}for(let Se=0;Se<A.length;Se++){const Ce=S[Se],Ee=A[Se];Ce!==null&&Ee!==void 0&&Ee.update(Ce,ce,c||o)}J&&J(q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}const ge=new Al;ge.setAnimationLoop(re),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}}function wm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,yl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,S,D){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,D)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,A,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===en&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===en&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,S){const D=S.program;n.uniformBlockBinding(A,D)}function c(A,S){let D=r[A.id];D===void 0&&(v(A),D=u(A),r[A.id]=D,A.addEventListener("dispose",p));const U=S.program;n.updateUBOMapping(A,U);const P=e.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function u(A){const S=h();A.__bindingPointIndex=S;const D=i.createBuffer(),U=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,D),D}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const S=r[A.id],D=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,w=D.length;P<w;P++){const O=Array.isArray(D[P])?D[P]:[D[P]];for(let g=0,y=O.length;g<y;g++){const I=O[g];if(m(I,P,g,U)===!0){const W=I.__offset,ne=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let T=0;T<ne.length;T++){const C=ne[T],X=M(C);typeof C=="number"||typeof C=="boolean"?(I.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,W+L,I.__data)):C.isMatrix3?(I.__data[0]=C.elements[0],I.__data[1]=C.elements[1],I.__data[2]=C.elements[2],I.__data[3]=0,I.__data[4]=C.elements[3],I.__data[5]=C.elements[4],I.__data[6]=C.elements[5],I.__data[7]=0,I.__data[8]=C.elements[6],I.__data[9]=C.elements[7],I.__data[10]=C.elements[8],I.__data[11]=0):(C.toArray(I.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,S,D,U){const P=A.value,w=S+"_"+D;if(U[w]===void 0)return typeof P=="number"||typeof P=="boolean"?U[w]=P:U[w]=P.clone(),!0;{const O=U[w];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return U[w]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(A){const S=A.uniforms;let D=0;const U=16;for(let w=0,O=S.length;w<O;w++){const g=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,I=g.length;y<I;y++){const W=g[y],ne=Array.isArray(W.value)?W.value:[W.value];for(let L=0,T=ne.length;L<T;L++){const C=ne[L],X=M(C),V=D%U;V!==0&&U-V<X.boundary&&(D+=U-V),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=X.storage}}}const P=D%U;return P>0&&(D+=U-P),A.__size=D,A.__cache={},this}function M(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){const S=A.target;S.removeEventListener("dispose",p);const D=o.indexOf(S.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Il{constructor(e={}){const{canvas:t=yu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const S=this;let D=!1,U=0,P=0,w=null,O=-1,g=null;const y=new Ft,I=new Ft;let W=null;const ne=new st(0);let L=0,T=t.width,C=t.height,X=1,V=null,G=null;const J=new Ft(0,0,T,C),re=new Ft(0,0,T,C);let ge=!1;const q=new aa;let ce=!1,Se=!1,Ce=null;const Ee=new Ct,Ne=new Ke,Re=new k,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return w===null?X:1}let N=n;function ke(E,B){for(let j=0;j<E.length;j++){const Z=E[j],$=t.getContext(Z,B);if($!==null)return $}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),N=ke(B,E),N===null)throw ke(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,pe,he,Pe,ie,x,_,F,oe,ue,de,Te,xe,ye,Ue,ze,fe,qe,He,Be,Ie,ve,b,Y;function Q(){te=new Bf(N),pe=new Df(N,te,e),te.init(pe),ve=new ym(N,te,pe),he=new Sm(N,te,pe),Pe=new kf(N),ie=new om,x=new Em(N,te,he,ie,pe,ve,Pe),_=new If(S),F=new Of(S),oe=new Yu(N,pe),b=new Lf(N,te,oe,pe),ue=new zf(N,oe,Pe,b),de=new Xf(N,ue,oe,Pe),He=new Wf(N,pe,x),ze=new Uf(ie),Te=new am(S,_,F,te,pe,b,ze),xe=new wm(S,ie),ye=new cm,Ue=new mm(te,pe),qe=new Cf(S,_,F,he,de,f,l),fe=new Mm(S,de,pe),Y=new Rm(N,Pe,pe,he),Be=new Pf(N,te,Pe,pe),Ie=new Gf(N,te,Pe,pe),Pe.programs=Te.programs,S.capabilities=pe,S.extensions=te,S.properties=ie,S.renderLists=ye,S.shadowMap=fe,S.state=he,S.info=Pe}Q();const ae=new Am(S,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(T,C,!1))},this.getSize=function(E){return E.set(T,C)},this.setSize=function(E,B,j=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,C=B,t.width=Math.floor(E*X),t.height=Math.floor(B*X),j===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(T*X,C*X).floor()},this.setDrawingBufferSize=function(E,B,j){T=E,C=B,X=j,t.width=Math.floor(E*j),t.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,B,j,Z){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,B,j,Z),he.viewport(y.copy(J).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,B,j,Z){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,B,j,Z),he.scissor(I.copy(re).multiplyScalar(X).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){he.setScissorTest(ge=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(E=!0,B=!0,j=!0){let Z=0;if(E){let $=!1;if(w!==null){const Ae=w.texture.format;$=Ae===ul||Ae===cl||Ae===ll}if($){const Ae=w.texture.type,Fe=Ae===qn||Ae===Vn||Ae===ia||Ae===ai||Ae===al||Ae===ol,Ge=qe.getClearColor(),Ve=qe.getClearAlpha(),Qe=Ge.r,je=Ge.g,Je=Ge.b;Fe?(m[0]=Qe,m[1]=je,m[2]=Je,m[3]=Ve,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Qe,v[1]=je,v[2]=Je,v[3]=Ve,N.clearBufferiv(N.COLOR,0,v))}else Z|=N.COLOR_BUFFER_BIT}B&&(Z|=N.DEPTH_BUFFER_BIT),j&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ye.dispose(),Ue.dispose(),ie.dispose(),_.dispose(),F.dispose(),de.dispose(),b.dispose(),Y.dispose(),Te.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ut),ae.removeEventListener("sessionend",nt),Ce&&(Ce.dispose(),Ce=null),ft.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Pe.autoReset,B=fe.enabled,j=fe.autoUpdate,Z=fe.needsUpdate,$=fe.type;Q(),Pe.autoReset=E,fe.enabled=B,fe.autoUpdate=j,fe.needsUpdate=Z,fe.type=$}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){const B=E.target;B.removeEventListener("dispose",me),be(B)}function be(E){Le(E),ie.remove(E)}function Le(E){const B=ie.get(E).programs;B!==void 0&&(B.forEach(function(j){Te.releaseProgram(j)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,Z,$,Ae){B===null&&(B=De);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,Ge=it(E,B,j,Z,$);he.setMaterial(Z,Fe);let Ve=j.index,Qe=1;if(Z.wireframe===!0){if(Ve=ue.getWireframeAttribute(j),Ve===void 0)return;Qe=2}const je=j.drawRange,Je=j.attributes.position;let yt=je.start*Qe,Wt=(je.start+je.count)*Qe;Ae!==null&&(yt=Math.max(yt,Ae.start*Qe),Wt=Math.min(Wt,(Ae.start+Ae.count)*Qe)),Ve!==null?(yt=Math.max(yt,0),Wt=Math.min(Wt,Ve.count)):Je!=null&&(yt=Math.max(yt,0),Wt=Math.min(Wt,Je.count));const wt=Wt-yt;if(wt<0||wt===1/0)return;b.setup($,Z,Ge,j,Ve);let fn,vt=Be;if(Ve!==null&&(fn=oe.get(Ve),vt=Ie,vt.setIndex(fn)),$.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*_e()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if($.isLine){let et=Z.linewidth;et===void 0&&(et=1),he.setLineWidth(et*_e()),$.isLineSegments?vt.setMode(N.LINES):$.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else $.isPoints?vt.setMode(N.POINTS):$.isSprite&&vt.setMode(N.TRIANGLES);if($.isBatchedMesh)vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)vt.renderInstances(yt,wt,$.count);else if(j.isInstancedBufferGeometry){const et=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,rs=Math.min(j.instanceCount,et);vt.renderInstances(yt,wt,rs)}else vt.render(yt,wt)};function We(E,B,j){E.transparent===!0&&E.side===In&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Ut(E,B,j),E.side=Yn,E.needsUpdate=!0,Ut(E,B,j),E.side=In):Ut(E,B,j)}this.compile=function(E,B,j=null){j===null&&(j=E),p=Ue.get(j),p.init(),A.push(p),j.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),E!==j&&E.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(S._useLegacyLights);const Z=new Set;return E.traverse(function($){const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const Ge=Ae[Fe];We(Ge,j,$),Z.add(Ge)}else We(Ae,j,$),Z.add(Ae)}),A.pop(),p=null,Z},this.compileAsync=function(E,B,j=null){const Z=this.compile(E,B,j);return new Promise($=>{function Ae(){if(Z.forEach(function(Fe){ie.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){$(E);return}setTimeout(Ae,10)}te.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Xe=null;function ct(E){Xe&&Xe(E)}function ut(){ft.stop()}function nt(){ft.start()}const ft=new Al;ft.setAnimationLoop(ct),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(E){Xe=E,ae.setAnimationLoop(E),E===null?ft.stop():ft.start()},ae.addEventListener("sessionstart",ut),ae.addEventListener("sessionend",nt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,w),p=Ue.get(E,A.length),p.init(),A.push(p),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(Ee),Se=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,Se),M=ye.get(E,d.length),M.init(),d.push(M),Kt(E,B,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(V,G),this.info.render.frame++,ce===!0&&ze.beginShadows();const j=p.state.shadowsArray;if(fe.render(j,E,B),ce===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(M,E),p.setupLights(S._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let $=0,Ae=Z.length;$<Ae;$++){const Fe=Z[$];En(M,E,Fe,Fe.viewport)}}else En(M,E,B);w!==null&&(x.updateMultisampleRenderTarget(w),x.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(S,E,B),b.resetDefaultState(),O=-1,g=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function Kt(E,B,j,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){Z&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Fe=de.update(E),Ge=E.material;Ge.visible&&M.push(E,Fe,Ge,j,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Fe=de.update(E),Ge=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ge)){const Ve=Fe.groups;for(let Qe=0,je=Ve.length;Qe<je;Qe++){const Je=Ve[Qe],yt=Ge[Je.materialIndex];yt&&yt.visible&&M.push(E,Fe,yt,j,Re.z,Je)}}else Ge.visible&&M.push(E,Fe,Ge,j,Re.z,null)}}const Ae=E.children;for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++)Kt(Ae[Fe],B,j,Z)}function En(E,B,j,Z){const $=E.opaque,Ae=E.transmissive,Fe=E.transparent;p.setupLightsView(j),ce===!0&&ze.setGlobalState(S.clippingPlanes,j),Ae.length>0&&jn($,Ae,B,j),Z&&he.viewport(y.copy(Z)),$.length>0&&Mt($,B,j),Ae.length>0&&Mt(Ae,B,j),Fe.length>0&&Mt(Fe,B,j),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function jn(E,B,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ae=pe.isWebGL2;Ce===null&&(Ce=new ci(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?sr:qn,minFilter:rr,samples:Ae?4:0})),S.getDrawingBufferSize(Ne),Ae?Ce.setSize(Ne.x,Ne.y):Ce.setSize(Qs(Ne.x),Qs(Ne.y));const Fe=S.getRenderTarget();S.setRenderTarget(Ce),S.getClearColor(ne),L=S.getClearAlpha(),L<1&&S.setClearColor(16777215,.5),S.clear();const Ge=S.toneMapping;S.toneMapping=$n,Mt(E,j,Z),x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce);let Ve=!1;for(let Qe=0,je=B.length;Qe<je;Qe++){const Je=B[Qe],yt=Je.object,Wt=Je.geometry,wt=Je.material,fn=Je.group;if(wt.side===In&&yt.layers.test(Z.layers)){const vt=wt.side;wt.side=en,wt.needsUpdate=!0,gt(yt,j,Z,Wt,wt,fn),wt.side=vt,wt.needsUpdate=!0,Ve=!0}}Ve===!0&&(x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce)),S.setRenderTarget(Fe),S.setClearColor(ne,L),S.toneMapping=Ge}function Mt(E,B,j){const Z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Ae=E.length;$<Ae;$++){const Fe=E[$],Ge=Fe.object,Ve=Fe.geometry,Qe=Z===null?Fe.material:Z,je=Fe.group;Ge.layers.test(j.layers)&&gt(Ge,B,j,Ve,Qe,je)}}function gt(E,B,j,Z,$,Ae){E.onBeforeRender(S,B,j,Z,$,Ae),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(S,B,j,Z,E,Ae),$.transparent===!0&&$.side===In&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,S.renderBufferDirect(j,B,Z,$,E,Ae),$.side=Yn,$.needsUpdate=!0,S.renderBufferDirect(j,B,Z,$,E,Ae),$.side=In):S.renderBufferDirect(j,B,Z,$,E,Ae),E.onAfterRender(S,B,j,Z,$,Ae)}function Ut(E,B,j){B.isScene!==!0&&(B=De);const Z=ie.get(E),$=p.state.lights,Ae=p.state.shadowsArray,Fe=$.state.version,Ge=Te.getParameters(E,$.state,Ae,B,j),Ve=Te.getProgramCacheKey(Ge);let Qe=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?F:_).get(E.envMap||Z.environment),Qe===void 0&&(E.addEventListener("dispose",me),Qe=new Map,Z.programs=Qe);let je=Qe.get(Ve);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Fe)return Ze(E,Ge),je}else Ge.uniforms=Te.getUniforms(E),E.onBuild(j,Ge,S),E.onBeforeCompile(Ge,S),je=Te.acquireProgram(Ge,Ve),Qe.set(Ve,je),Z.uniforms=Ge.uniforms;const Je=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Je.clippingPlanes=ze.uniform),Ze(E,Ge),Z.needsLights=at(E),Z.lightsStateVersion=Fe,Z.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function Ye(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=kr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ze(E,B){const j=ie.get(E);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function it(E,B,j,Z,$){B.isScene!==!0&&(B=De),x.resetTextureUnits();const Ae=B.fog,Fe=Z.isMeshStandardMaterial?B.environment:null,Ge=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Fn,Ve=(Z.isMeshStandardMaterial?F:_).get(Z.envMap||Fe),Qe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Je=!!j.morphAttributes.position,yt=!!j.morphAttributes.normal,Wt=!!j.morphAttributes.color;let wt=$n;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=S.toneMapping);const fn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=fn!==void 0?fn.length:0,et=ie.get(Z),rs=p.state.lights;if(ce===!0&&(Se===!0||E!==g)){const on=E===g&&Z.id===O;ze.setState(Z,E,on)}let bt=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==rs.state.version||et.outputColorSpace!==Ge||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||et.envMap!==Ve||Z.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==je||et.morphTargets!==Je||et.morphNormals!==yt||et.morphColors!==Wt||et.toneMapping!==wt||pe.isWebGL2===!0&&et.morphTargetsCount!==vt)&&(bt=!0):(bt=!0,et.__version=Z.version);let Kn=et.currentProgram;bt===!0&&(Kn=Ut(Z,B,$));let ua=!1,qi=!1,ss=!1;const kt=Kn.getUniforms(),Zn=et.uniforms;if(he.useProgram(Kn.program)&&(ua=!0,qi=!0,ss=!0),Z.id!==O&&(O=Z.id,qi=!0),ua||g!==E){kt.setValue(N,"projectionMatrix",E.projectionMatrix),kt.setValue(N,"viewMatrix",E.matrixWorldInverse);const on=kt.map.cameraPosition;on!==void 0&&on.setValue(N,Re.setFromMatrixPosition(E.matrixWorld)),pe.logarithmicDepthBuffer&&kt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&kt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,qi=!0,ss=!0)}if($.isSkinnedMesh){kt.setOptional(N,$,"bindMatrix"),kt.setOptional(N,$,"bindMatrixInverse");const on=$.skeleton;on&&(pe.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),kt.setValue(N,"boneTexture",on.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(kt.setOptional(N,$,"batchingTexture"),kt.setValue(N,"batchingTexture",$._matricesTexture,x));const as=j.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&pe.isWebGL2===!0)&&He.update($,j,Kn),(qi||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,kt.setValue(N,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Zn.envMap.value=Ve,Zn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),qi&&(kt.setValue(N,"toneMappingExposure",S.toneMappingExposure),et.needsLights&&St(Zn,ss),Ae&&Z.fog===!0&&xe.refreshFogUniforms(Zn,Ae),xe.refreshMaterialUniforms(Zn,Z,X,C,Ce),kr.upload(N,Ye(et),Zn,x)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(kr.upload(N,Ye(et),Zn,x),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&kt.setValue(N,"center",$.center),kt.setValue(N,"modelViewMatrix",$.modelViewMatrix),kt.setValue(N,"normalMatrix",$.normalMatrix),kt.setValue(N,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const on=Z.uniformsGroups;for(let os=0,Fl=on.length;os<Fl;os++)if(pe.isWebGL2){const da=on[os];Y.update(da,Kn),Y.bind(da,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function St(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function at(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,B,j){ie.get(E.texture).__webglTexture=B,ie.get(E.depthTexture).__webglTexture=j;const Z=ie.get(E);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const j=ie.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,j=0){w=E,U=B,P=j;let Z=!0,$=null,Ae=!1,Fe=!1;if(E){const Ve=ie.get(E);Ve.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1):Ve.__webglFramebuffer===void 0?x.setupRenderTarget(E):Ve.__hasExternalTextures&&x.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);const Qe=E.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Fe=!0);const je=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[B])?$=je[B][j]:$=je[B],Ae=!0):pe.isWebGL2&&E.samples>0&&x.useMultisampledRTT(E)===!1?$=ie.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[j]:$=je,y.copy(E.viewport),I.copy(E.scissor),W=E.scissorTest}else y.copy(J).multiplyScalar(X).floor(),I.copy(re).multiplyScalar(X).floor(),W=ge;if(he.bindFramebuffer(N.FRAMEBUFFER,$)&&pe.drawBuffers&&Z&&he.drawBuffers(E,$),he.viewport(y),he.scissor(I),he.setScissorTest(W),Ae){const Ve=ie.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ve.__webglTexture,j)}else if(Fe){const Ve=ie.get(E.texture),Qe=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,j||0,Qe)}O=-1},this.readRenderTargetPixels=function(E,B,j,Z,$,Ae,Fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){he.bindFramebuffer(N.FRAMEBUFFER,Ge);try{const Ve=E.texture,Qe=Ve.format,je=Ve.type;if(Qe!==Mn&&ve.convert(Qe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===sr&&(te.has("EXT_color_buffer_half_float")||pe.isWebGL2&&te.has("EXT_color_buffer_float"));if(je!==qn&&ve.convert(je)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Wn&&(pe.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&j>=0&&j<=E.height-$&&N.readPixels(B,j,Z,$,ve.convert(Qe),ve.convert(je),Ae)}finally{const Ve=w!==null?ie.get(w).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(E,B,j=0){const Z=Math.pow(2,-j),$=Math.floor(B.image.width*Z),Ae=Math.floor(B.image.height*Z);x.setTexture2D(B,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,E.x,E.y,$,Ae),he.unbindTexture()},this.copyTextureToTexture=function(E,B,j,Z=0){const $=B.image.width,Ae=B.image.height,Fe=ve.convert(j.format),Ge=ve.convert(j.type);x.setTexture2D(j,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Z,E.x,E.y,$,Ae,Fe,Ge,B.image.data):B.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Z,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Fe,B.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Z,E.x,E.y,Fe,Ge,B.image),Z===0&&j.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(E,B,j,Z,$=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=E.max.x-E.min.x+1,Fe=E.max.y-E.min.y+1,Ge=E.max.z-E.min.z+1,Ve=ve.convert(Z.format),Qe=ve.convert(Z.type);let je;if(Z.isData3DTexture)x.setTexture3D(Z,0),je=N.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)x.setTexture2DArray(Z,0),je=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const Je=N.getParameter(N.UNPACK_ROW_LENGTH),yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Wt=N.getParameter(N.UNPACK_SKIP_PIXELS),wt=N.getParameter(N.UNPACK_SKIP_ROWS),fn=N.getParameter(N.UNPACK_SKIP_IMAGES),vt=j.isCompressedTexture?j.mipmaps[$]:j.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?N.texSubImage3D(je,$,B.x,B.y,B.z,Ae,Fe,Ge,Ve,Qe,vt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(je,$,B.x,B.y,B.z,Ae,Fe,Ge,Ve,vt.data)):N.texSubImage3D(je,$,B.x,B.y,B.z,Ae,Fe,Ge,Ve,Qe,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Je),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fn),$===0&&Z.generateMipmaps&&N.generateMipmap(je),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){U=0,P=0,w=null,he.reset(),b.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ra?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?li:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===li?Bt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cm extends Il{}Cm.prototype.isWebGL1Renderer=!0;class Lm extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ir extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ko=new k,Ho=new k,Vo=new Ct,ks=new sa,Ur=new es;class Hr extends zt{constructor(e=new tn,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ko.fromBufferAttribute(t,r-1),Ho.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ko.distanceTo(Ho);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Vo.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Vo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,u=new k,h=new k,f=new k,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const d=Math.max(0,o.start),A=Math.min(v.count,o.start+o.count);for(let S=d,D=A-1;S<D;S+=m){const U=v.getX(S),P=v.getX(S+1);if(c.fromBufferAttribute(p,U),u.fromBufferAttribute(p,P),ks.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),A=Math.min(p.count,o.start+o.count);for(let S=d,D=A-1;S<D;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),ks.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Wo=new k,Xo=new k;class Pm extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Wo.fromBufferAttribute(t,r),Xo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wo.distanceTo(Xo);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ca extends tn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new k,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class is extends tn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let v=0;const M=[],p=n/2;let d=0;A(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(m,2));function A(){const D=new k,U=new k;let P=0;const w=(t-e)/n;for(let O=0;O<=s;O++){const g=[],y=O/s,I=y*(t-e)+e;for(let W=0;W<=r;W++){const ne=W/r,L=ne*l+a,T=Math.sin(L),C=Math.cos(L);U.x=I*T,U.y=-y*n+p,U.z=I*C,h.push(U.x,U.y,U.z),D.set(T,w,C).normalize(),f.push(D.x,D.y,D.z),m.push(ne,1-y),g.push(v++)}M.push(g)}for(let O=0;O<r;O++)for(let g=0;g<s;g++){const y=M[g][O],I=M[g+1][O],W=M[g+1][O+1],ne=M[g][O+1];u.push(y,I,ne),u.push(I,W,ne),P+=6}c.addGroup(d,P,0),d+=P}function S(D){const U=v,P=new Ke,w=new k;let O=0;const g=D===!0?e:t,y=D===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),v++;const I=v;for(let W=0;W<=r;W++){const L=W/r*l+a,T=Math.cos(L),C=Math.sin(L);w.x=g*C,w.y=p*y,w.z=g*T,h.push(w.x,w.y,w.z),f.push(0,y,0),P.x=T*.5+.5,P.y=C*.5*y+.5,m.push(P.x,P.y),v++}for(let W=0;W<r;W++){const ne=U+W,L=I+W;D===!0?u.push(L,L+1,ne):u.push(L+1,L,ne),O+=3}c.addGroup(d,O,D===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ni extends is{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ni(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nl extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hs=new Ct,$o=new k,qo=new k;class Dm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Um extends Dm{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nm extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fm extends Pm{constructor(e=10,t=10,n=4473924,r=8947848){n=new st(n),r=new st(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,v=-a;f<=t;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const M=f===s?n:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const u=new tn;u.setAttribute("position",new Gt(l,3)),u.setAttribute("color",new Gt(c,3));const h=new ir({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);const jo={type:"change"},Vs={type:"start"},Ko={type:"end"},Nr=new sa,Zo=new Hn,Om=Math.cos(70*Eu.DEG2RAD);class Bm extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ue),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(jo),n.update(),s=r.NONE},this.update=function(){const b=new k,Y=new ui().setFromUnitVectors(e.up,new k(0,1,0)),Q=Y.clone().invert(),ae=new k,K=new ui,R=new k,se=2*Math.PI;return function(be=null){const Le=n.object.position;b.copy(Le).sub(n.target),b.applyQuaternion(Y),a.setFromVector3(b),n.autoRotate&&s===r.NONE&&W(y(be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=se:We>Math.PI&&(We-=se),Xe<-Math.PI?Xe+=se:Xe>Math.PI&&(Xe-=se),We<=Xe?a.theta=Math.max(We,Math.min(Xe,a.theta)):a.theta=a.theta>(We+Xe)/2?Math.max(We,a.theta):Math.min(Xe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),b.setFromSpherical(a),b.applyQuaternion(Q),Le.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ct=!1;if(n.zoomToCursor&&P){let ut=null;if(n.object.isPerspectiveCamera){const nt=b.length();ut=J(nt*c);const ft=nt-ut;n.object.position.addScaledVector(D,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const nt=new k(U.x,U.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=!0;const ft=new k(U.x,U.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(nt),n.object.updateMatrixWorld(),ut=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ut!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ut).add(n.object.position):(Nr.origin.copy(n.object.position),Nr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Nr.direction))<Om?e.lookAt(n.target):(Zo.setFromNormalAndCoplanarPoint(n.object.up,n.target),Nr.intersectPlane(Zo,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=!0);return c=1,P=!1,ct||ae.distanceToSquared(n.object.position)>o||8*(1-K.dot(n.object.quaternion))>o||R.distanceToSquared(n.target)>0?(n.dispatchEvent(jo),ae.copy(n.object.position),K.copy(n.object.quaternion),R.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qe),n.domElement.removeEventListener("pointerdown",x),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",_),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ue),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yo,l=new Yo;let c=1;const u=new k,h=new Ke,f=new Ke,m=new Ke,v=new Ke,M=new Ke,p=new Ke,d=new Ke,A=new Ke,S=new Ke,D=new k,U=new Ke;let P=!1;const w=[],O={};let g=!1;function y(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function I(b){const Y=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*Y)}function W(b){l.theta-=b}function ne(b){l.phi-=b}const L=function(){const b=new k;return function(Q,ae){b.setFromMatrixColumn(ae,0),b.multiplyScalar(-Q),u.add(b)}}(),T=function(){const b=new k;return function(Q,ae){n.screenSpacePanning===!0?b.setFromMatrixColumn(ae,1):(b.setFromMatrixColumn(ae,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(Q),u.add(b)}}(),C=function(){const b=new k;return function(Q,ae){const K=n.domElement;if(n.object.isPerspectiveCamera){const R=n.object.position;b.copy(R).sub(n.target);let se=b.length();se*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Q*se/K.clientHeight,n.object.matrix),T(2*ae*se/K.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Q*(n.object.right-n.object.left)/n.object.zoom/K.clientWidth,n.object.matrix),T(ae*(n.object.top-n.object.bottom)/n.object.zoom/K.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(b,Y){if(!n.zoomToCursor)return;P=!0;const Q=n.domElement.getBoundingClientRect(),ae=b-Q.left,K=Y-Q.top,R=Q.width,se=Q.height;U.x=ae/R*2-1,U.y=-(K/se)*2+1,D.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function re(b){h.set(b.clientX,b.clientY)}function ge(b){G(b.clientX,b.clientX),d.set(b.clientX,b.clientY)}function q(b){v.set(b.clientX,b.clientY)}function ce(b){f.set(b.clientX,b.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;W(2*Math.PI*m.x/Y.clientHeight),ne(2*Math.PI*m.y/Y.clientHeight),h.copy(f),n.update()}function Se(b){A.set(b.clientX,b.clientY),S.subVectors(A,d),S.y>0?X(I(S.y)):S.y<0&&V(I(S.y)),d.copy(A),n.update()}function Ce(b){M.set(b.clientX,b.clientY),p.subVectors(M,v).multiplyScalar(n.panSpeed),C(p.x,p.y),v.copy(M),n.update()}function Ee(b){G(b.clientX,b.clientY),b.deltaY<0?V(I(b.deltaY)):b.deltaY>0&&X(I(b.deltaY)),n.update()}function Ne(b){let Y=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),Y=!0;break}Y&&(b.preventDefault(),n.update())}function Re(b){if(w.length===1)h.set(b.pageX,b.pageY);else{const Y=ve(b),Q=.5*(b.pageX+Y.x),ae=.5*(b.pageY+Y.y);h.set(Q,ae)}}function De(b){if(w.length===1)v.set(b.pageX,b.pageY);else{const Y=ve(b),Q=.5*(b.pageX+Y.x),ae=.5*(b.pageY+Y.y);v.set(Q,ae)}}function _e(b){const Y=ve(b),Q=b.pageX-Y.x,ae=b.pageY-Y.y,K=Math.sqrt(Q*Q+ae*ae);d.set(0,K)}function N(b){n.enableZoom&&_e(b),n.enablePan&&De(b)}function ke(b){n.enableZoom&&_e(b),n.enableRotate&&Re(b)}function te(b){if(w.length==1)f.set(b.pageX,b.pageY);else{const Q=ve(b),ae=.5*(b.pageX+Q.x),K=.5*(b.pageY+Q.y);f.set(ae,K)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;W(2*Math.PI*m.x/Y.clientHeight),ne(2*Math.PI*m.y/Y.clientHeight),h.copy(f)}function pe(b){if(w.length===1)M.set(b.pageX,b.pageY);else{const Y=ve(b),Q=.5*(b.pageX+Y.x),ae=.5*(b.pageY+Y.y);M.set(Q,ae)}p.subVectors(M,v).multiplyScalar(n.panSpeed),C(p.x,p.y),v.copy(M)}function he(b){const Y=ve(b),Q=b.pageX-Y.x,ae=b.pageY-Y.y,K=Math.sqrt(Q*Q+ae*ae);A.set(0,K),S.set(0,Math.pow(A.y/d.y,n.zoomSpeed)),X(S.y),d.copy(A);const R=(b.pageX+Y.x)*.5,se=(b.pageY+Y.y)*.5;G(R,se)}function Pe(b){n.enableZoom&&he(b),n.enablePan&&pe(b)}function ie(b){n.enableZoom&&he(b),n.enableRotate&&te(b)}function x(b){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",_),n.domElement.addEventListener("pointerup",F)),He(b),b.pointerType==="touch"?ze(b):oe(b))}function _(b){n.enabled!==!1&&(b.pointerType==="touch"?fe(b):ue(b))}function F(b){Be(b),w.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",_),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(Ko),s=r.NONE}function oe(b){let Y;switch(b.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case mi.DOLLY:if(n.enableZoom===!1)return;ge(b),s=r.DOLLY;break;case mi.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;q(b),s=r.PAN}else{if(n.enableRotate===!1)return;re(b),s=r.ROTATE}break;case mi.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;re(b),s=r.ROTATE}else{if(n.enablePan===!1)return;q(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Vs)}function ue(b){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(b);break;case r.DOLLY:if(n.enableZoom===!1)return;Se(b);break;case r.PAN:if(n.enablePan===!1)return;Ce(b);break}}function de(b){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(b.preventDefault(),n.dispatchEvent(Vs),Ee(Te(b)),n.dispatchEvent(Ko))}function Te(b){const Y=b.deltaMode,Q={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(Y){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return b.ctrlKey&&!g&&(Q.deltaY*=10),Q}function xe(b){b.key==="Control"&&(g=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(b){b.key==="Control"&&(g=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Ue(b){n.enabled===!1||n.enablePan===!1||Ne(b)}function ze(b){switch(Ie(b),w.length){case 1:switch(n.touches.ONE){case gi.ROTATE:if(n.enableRotate===!1)return;Re(b),s=r.TOUCH_ROTATE;break;case gi.PAN:if(n.enablePan===!1)return;De(b),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(b),s=r.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(b),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Vs)}function fe(b){switch(Ie(b),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;te(b),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(b),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(b),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(b),n.update();break;default:s=r.NONE}}function qe(b){n.enabled!==!1&&b.preventDefault()}function He(b){w.push(b.pointerId)}function Be(b){delete O[b.pointerId];for(let Y=0;Y<w.length;Y++)if(w[Y]==b.pointerId){w.splice(Y,1);return}}function Ie(b){let Y=O[b.pointerId];Y===void 0&&(Y=new Ke,O[b.pointerId]=Y),Y.set(b.pageX,b.pageY)}function ve(b){const Y=b.pointerId===w[0]?w[1]:w[0];return O[Y]}n.domElement.addEventListener("contextmenu",qe),n.domElement.addEventListener("pointerdown",x),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",de,{passive:!1}),document.addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}var zm=lt(`<div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm
                rounded-lg border border-slate-600/50 text-sm text-slate-300 z-10">太阳位于地平线以下</div>`),Gm=lt('<div class="px-3 py-1.5 backdrop-blur-sm rounded-lg border text-xs flex items-center gap-2"><span class="w-2 h-2 rounded-full"></span> </div>'),km=lt('<div class="absolute top-4 right-4 flex flex-col gap-1 z-10"></div>'),Hm=lt('<div class="w-full h-full relative"><!> <!> <div class="absolute bottom-4 left-4 text-xs text-slate-500 z-10">拖拽旋转 · 滚轮缩放</div></div>');function Vm(i,e){hi(e,!0);const t=()=>ht(f,"$config",u),n=()=>ht(m,"$solarPosition",u),r=()=>ht(v,"$sunVisible",u),s=()=>ht(M,"$currentShadow",u),o=()=>ht(p,"$shadowTrack",u),a=()=>ht(A,"$comparePresetsData",u),l=()=>ht(S,"$keyDateTracks",u),c=()=>ht(d,"$hourMarks",u),[u,h]=Hi(),{config:f,solarPosition:m,sunVisible:v,currentShadow:M,shadowTrack:p,hourMarks:d,comparePresetsData:A,keyDateTracks:S}=Vi;let D=null,U,P,w,O,g,y,I,W,ne,L,T,C,X=[],V=[],G=[],J=Fr(!1);function re(te){const pe=te.clientWidth,he=te.clientHeight;U=new Lm,U.background=new st(988970),P=new un(50,pe/he,.1,1e3),P.position.set(4,3,5),w=new Il({antialias:!0}),w.setSize(pe,he),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=tl,w.toneMapping=il,w.toneMappingExposure=1.2,te.appendChild(w.domElement),O=new Bm(P,w.domElement),O.enableDamping=!0,O.dampingFactor=.05,O.minDistance=3,O.maxDistance=15,O.target.set(0,.5,0),y=new Nm(4210784,.4),U.add(y),g=new Im(16774630,1.5),g.position.set(5,10,5),g.castShadow=!0,g.shadow.mapSize.width=2048,g.shadow.mapSize.height=2048,g.shadow.camera.near=.5,g.shadow.camera.far=50,g.shadow.camera.left=-10,g.shadow.camera.right=10,g.shadow.camera.top=10,g.shadow.camera.bottom=-10,U.add(g);const Pe=new ca(8,64),ie=new Ir({color:1976635,roughness:.8,metalness:.2}),x=new qt(Pe,ie);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,U.add(x);const _=new Fm(10,20,3359061,1976635);U.add(_),ne=new si,U.add(ne);const F=new is(1.5,1.5,.08,64),oe=new Ir({color:13935988,roughness:.6,metalness:.4});W=new qt(F,oe),W.receiveShadow=!0,W.castShadow=!0,ne.add(W),C=new si,ne.add(C);const ue=new Ni(.05,1.2,16),de=new Ir({color:4674921,roughness:.4,metalness:.7});I=new qt(ue,de),I.castShadow=!0,I.position.y=.6,ne.add(I);const Te=new Ni(.02,2,8),xe=new nr({color:0,transparent:!0,opacity:.3});L=new qt(Te,xe),L.visible=!1,ne.add(L);for(let ve=0;ve<4;ve++){const b=new Ni(.02,2,8),Y=new nr({color:new st(Ot[ve]),transparent:!0,opacity:.5}),Q=new qt(b,Y);Q.visible=!1,ne.add(Q),X.push(Q)}const ye=new tn,Ue=new ir({color:16096779,transparent:!0,opacity:.8});T=new Hr(ye,Ue),ne.add(T);for(let ve=0;ve<4;ve++){const b=new tn,Y=new ir({color:new st(Ot[ve]),transparent:!0,opacity:.6}),Q=new Hr(b,Y);Q.visible=!1,ne.add(Q),V.push(Q)}for(let ve=0;ve<4;ve++){const b=new tn,Y=new ir({color:16777215,transparent:!0,opacity:.7,linewidth:2}),Q=new Hr(b,Y);Q.visible=!1,ne.add(Q),G.push(Q)}const ze=new si,fe=new nr({color:9741240}),qe=new Ni(.08,.2,4),He=new qt(qe,fe);He.position.set(0,.1,-1.7),He.rotation.x=Math.PI/2,ze.add(He),U.add(ze);function Be(){requestAnimationFrame(Be),O.update(),w.render(U,P)}Be();function Ie(){if(!te)return;const ve=te.clientWidth,b=te.clientHeight;P.aspect=ve/b,P.updateProjectionMatrix(),w.setSize(ve,b)}return window.addEventListener("resize",Ie),{cleanup:()=>window.removeEventListener("resize",Ie)}}function ge(te,pe,he){for(;C.children.length>0;)C.remove(C.children[0]);const Pe=ot(d),ie=1.5,x=new Ir({color:1976635,roughness:.5,metalness:.3});for(const _ of Pe){const F=_.angle*Math.PI/180,oe=Math.min(_.radius,ie*.9),ue=Math.sin(F)*oe,de=Math.cos(F)*oe,Te=new Xi(.02,.03,.1),xe=new qt(Te,x);xe.position.set(ue,.06,de),xe.rotation.y=-F,C.add(xe)}}function q(){const te=ot(f),pe=te.type,he=te.latitude,Pe=te.gnomonLength;switch(ne.rotation.set(0,0,0),W.position.y=.04,I.position.set(0,Pe/2,0),I.rotation.set(0,0,0),pe){case"equatorial":ne.rotation.x=(90-he)*Math.PI/180,W.position.y=.8,I.rotation.x=0,I.position.y=Pe/2+.8;break;case"horizontal":W.position.y=.04,I.rotation.x=-he*Math.PI/180,I.position.set(0,Pe/2*Math.cos(he*Math.PI/180),0);break;case"vertical":ne.rotation.x=Math.PI/2,W.position.set(0,1.5,0),I.rotation.x=0,I.position.set(0,1.5,Pe/2),I.rotation.y=0;break}ge()}function ce(){const te=ot(m);if(!ot(v)){g.intensity=.2,L.visible=!1;return}const he=te.altitude*Math.PI/180,Pe=te.azimuth*Math.PI/180,ie=20,x=Math.sin(Pe)*Math.cos(he)*ie,_=Math.sin(he)*ie,F=Math.cos(Pe)*Math.cos(he)*ie;g.position.set(x,_,F),g.intensity=1.5,Ce()}function Se(te,pe,he,Pe){const ie=Math.min(pe.length,4);te.scale.y=ie/2;const x=pe.angle*Math.PI/180;if(he==="horizontal")te.rotation.x=Math.PI/2,te.position.x=Math.sin(x)*ie/2,te.position.z=Math.cos(x)*ie/2,te.position.y=.05;else if(he==="equatorial"){te.position.y=.8+.05,te.rotation.x=Math.PI/2-(90-Pe)*Math.PI/180;const _=x;te.position.x=Math.sin(_)*ie/2,te.position.z=Math.cos(_)*ie/2*Math.cos((90-Pe)*Math.PI/180)}else he==="vertical"&&(te.rotation.x=0,te.rotation.y=-x,te.position.z=ie/2,te.position.y=1.5,te.position.x=Math.sin(x)*ie/2)}function Ce(){const te=ot(M),pe=ot(v),he=ot(f);!pe||!te||!he.showCurrentPoint?L.visible=!1:(L.visible=!0,Se(L,te,he.type,he.latitude));const Pe=ot(A);for(let ie=0;ie<4;ie++)if(ie<Pe.length&&he.compareMode&&he.showCurrentPoint){const x=Pe[ie];x.shadow&&x.sunVisible?(X[ie].visible=!0,Se(X[ie],x.shadow,x.preset.type,x.preset.latitude)):X[ie].visible=!1}else X[ie].visible=!1}function Ee(te,pe,he,Pe){const ie=new Float32Array(pe.length*3);for(let x=0;x<pe.length;x++){const _=pe[x],F=_.angle*Math.PI/180,oe=Math.min(_.length,4);if(he==="horizontal")ie[x*3]=Math.sin(F)*oe,ie[x*3+1]=.05,ie[x*3+2]=Math.cos(F)*oe;else if(he==="equatorial"){const ue=(90-Pe)*Math.PI/180;ie[x*3]=Math.sin(F)*oe,ie[x*3+1]=.8+Math.sin(ue)*oe*Math.cos(F),ie[x*3+2]=Math.cos(F)*oe*Math.cos(ue)}else ie[x*3]=Math.sin(F)*oe,ie[x*3+1]=1.5,ie[x*3+2]=Math.cos(F)*oe}te.geometry.setAttribute("position",new Sn(ie,3)),te.geometry.computeBoundingSphere()}function Ne(){const te=ot(f),pe=ot(p);!te.showTrack||!pe||pe.length===0?T.visible=!1:(T.visible=!0,Ee(T,pe,te.type,te.latitude));const he=ot(A);for(let ie=0;ie<4;ie++)if(ie<he.length&&te.compareMode&&te.showTrack){const x=he[ie];x.shadowTrack&&x.shadowTrack.length>0?(V[ie].visible=!0,Ee(V[ie],x.shadowTrack,x.preset.type,x.preset.latitude)):V[ie].visible=!1}else V[ie].visible=!1;const Pe=ot(S);for(let ie=0;ie<4;ie++)if(ie<Pe.length&&te.showTrack){const x=Pe[ie];x.shadowTrack&&x.shadowTrack.length>0?(G[ie].visible=!0,G[ie].material.color.set(x.color),Ee(G[ie],x.shadowTrack,te.type,te.latitude)):G[ie].visible=!1}else G[ie].visible=!1}Ws(()=>{le(J)&&(t(),n(),r(),s(),o(),a(),l(),c(),q(),ce(),Ce(),Ne())}),Ws(()=>{if(!D)return;const{cleanup:te}=re(D);return _n(J,!0),q(),ce(),Ce(),Ne(),()=>{te(),w.dispose()}});var Re=Hm(),De=H(Re);{var _e=te=>{var pe=zm();Oe(te,pe)};mt(De,te=>{r()||te(_e)})}var N=ee(De,2);{var ke=te=>{var pe=km();Lt(pe,5,a,Nt,(he,Pe)=>{var ie=Gm(),x=H(ie),_=ee(x);z(ie),dt(()=>{jt(ie,`background-color: ${le(Pe).color??""}20; border-color: ${le(Pe).color??""}60; color: ${le(Pe).color??""}`),jt(x,`background-color: ${le(Pe).color??""}`),$e(_,` ${le(Pe).preset.name??""}`)}),Oe(he,ie)}),z(pe),Oe(te,pe)};mt(N,te=>{t().compareMode&&a().length>0&&te(ke)})}Et(2),z(Re),Kl(Re,te=>D=te,()=>D),Oe(i,Re),fi(),h()}var Wm=hn('<radialGradient cx="50%" cy="50%" r="50%"><stop offset="0%" stop-opacity="0.3"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient><filter><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>',1),Xm=hn('<text fill="#64748b" font-size="10" font-family="Inter, sans-serif"> </text>'),$m=hn('<path fill="none" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"></path>'),qm=hn('<path fill="none" stroke-width="2.5" stroke-dasharray="8,4" opacity="0.8"></path>'),Ym=hn('<path fill="none" stroke="#f59e0b" stroke-width="2" filter="url(#glow)" opacity="0.8"></path>'),jm=hn('<line stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle r="15"></circle><circle r="5"></circle><circle r="2" fill="#ffffff"></circle>',1),Km=hn('<line stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle r="15" fill="url(#trackGlow)"></circle><circle r="5" fill="#ef4444" filter="url(#glow)"></circle><circle r="2" fill="#ffffff"></circle>',1),Zm=lt('<div class="flex justify-center"><svg class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><radialGradient id="trackGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop></radialGradient><!><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><circle fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"></circle><circle fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2,4"></circle><line stroke="#334155" stroke-width="1"></line><line stroke="#334155" stroke-width="1"></line><!><!><!><!><circle r="4" fill="#94a3b8"></circle><!><!></svg></div>'),Jm=hn('<line stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4"></line><text text-anchor="end" fill="#64748b" font-size="9" font-family="Inter, sans-serif"> </text>',1),Qm=hn('<line stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4"></line><text text-anchor="middle" fill="#64748b" font-size="9" font-family="Inter, sans-serif"> </text>',1),eg=hn('<path fill="none" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"></path>'),tg=hn('<path fill="none" stroke-width="2" stroke-dasharray="6,4" opacity="0.85"></path>'),ng=hn('<circle r="5" fill="#ef4444" stroke="#fff" stroke-width="1.5"></circle>'),ig=lt('<div class="flex justify-center"><svg class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><linearGradient id="altitudeGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"></stop></linearGradient></defs><!><!><rect fill="#f59e0b" opacity="0.05"></rect><line stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"></line><line stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"></line><!><!><path fill="url(#altitudeGradient)"></path><path fill="none" stroke="#f59e0b" stroke-width="2"></path><!><text text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">日出</text><text text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">日落</text></svg></div>'),rg=lt('<div class="p-2 rounded-lg border"><div class="text-xs font-medium flex items-center gap-2"><span class="w-2 h-2 rounded-full"></span> </div> <div class="text-xs text-slate-400 flex gap-3 mt-1"><span> </span> <span> </span></div></div>'),sg=lt('<div class="mt-3 space-y-2"></div>'),ag=lt('<div class="flex items-center justify-between p-1.5 rounded-md"><div class="text-xs font-medium"> </div> <div class="text-xs text-slate-400"> </div></div>'),og=lt('<div class="mt-3 space-y-1.5"><div class="text-xs text-slate-500 mb-1">关键日期轨迹</div> <!></div>'),lg=lt('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 影子轨迹</h3> <div class="flex gap-1"><button title="显示/隐藏轨迹线"><!> 轨迹</button> <button title="显示/隐藏当前位置"><!> 当前</button></div></div> <div class="flex gap-1 mb-3"><button><!> 轨迹视图</button> <button><!> 高度曲线</button></div> <!> <div class="mt-4 grid grid-cols-2 gap-3 text-center"><div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子长度</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子角度</div> <div class="font-mono text-sm text-slate-200"> </div></div></div> <!> <!> <div class="mt-3 text-center text-xs text-slate-500">当前时间: <span class="font-mono text-slate-300"> </span></div></div>');function cg(i,e){hi(e,!1);const t=()=>ht(f,"$config",u),n=()=>ht(S,"$comparePresetsData",u),r=()=>ht(D,"$keyDateTracks",u),s=()=>ht(m,"$shadowTrack",u),o=()=>ht(M,"$sunVisible",u),a=()=>ht(v,"$currentShadow",u),l=()=>ht(d,"$altitudeCurve",u),c=()=>ht(A,"$solarPosition",u),[u,h]=Hi(),{config:f,shadowTrack:m,currentShadow:v,sunVisible:M,sunriseSunset:p,altitudeCurve:d,solarPosition:A,comparePresetsData:S,keyDateTracks:D,setShowTrack:U,setShowCurrentPoint:P}=Vi;let w=Ol("track");const O=280,g=24,y=O-g*2,I=O/2,W=O/2;function ne(Y){const Q=Math.floor(Y),ae=Math.floor((Y-Q)*60);return`${Q.toString().padStart(2,"0")}:${ae.toString().padStart(2,"0")}`}function L(){const Y=ot(m),Q=ot(S),ae=ot(D),K=[...Y||[]];for(const be of Q)K.push(...be.shadowTrack);for(const be of ae)K.push(...be.shadowTrack);if(!K||K.length===0)return .05;const R=Math.max(...K.map(be=>Math.abs(be.x))),se=Math.max(...K.map(be=>Math.abs(be.y))),me=Math.max(R,se)||1;return y/2/me*.9}function T(Y,Q){return!Y||Y.length===0?"":Y.map((ae,K)=>{const R=I+ae.x*Q,se=W+ae.y*Q;return(K===0?"M":"L")+R.toFixed(2)+" "+se.toFixed(2)}).join(" ")}function C(Y,Q){return!ot(M)||!Y?{x:I,y:W}:{x:I+Y.x*Q,y:W+Y.y*Q}}function X(){U(!ot(f).showTrack)}function V(){P(!ot(f).showCurrentPoint)}function G(Y){return!ot(M)||!Y?"--":Y.length.toFixed(2)}function J(Y){return!ot(M)||!Y?"--":Y.angle.toFixed(1)+"°"}function re(Y){if(!Y||Y.length===0)return"";const Q=O-g*2,ae=O-g*2-20,K=90;return Y.map((R,se)=>{const me=g+R.hour/24*Q,be=g+ae-R.altitude/K*ae;return(se===0?"M":"L")+me.toFixed(2)+" "+be.toFixed(2)}).join(" ")}function ge(Y){if(!Y||Y.length===0)return"";const Q=O-g*2,ae=O-g*2-20,K=90,R=g+ae;let se=`M ${g} ${R} `;for(let be=0;be<Y.length;be++){const Le=Y[be],We=g+Le.hour/24*Q,Xe=g+ae-Le.altitude/K*ae;se+=`L ${We.toFixed(2)} ${Xe.toFixed(2)} `}const me=g+Y[Y.length-1].hour/24*Q;return se+=`L ${me.toFixed(2)} ${R} Z`,se}function q(){const Y=ot(p),Q=O-g*2;return{sunrise:g+Y.sunrise/24*Q,sunset:g+Y.sunset/24*Q}}const ce=[{x:I,y:g-4,label:"N",align:"middle"},{x:I,y:O-g+10,label:"S",align:"middle"},{x:g-8,y:W+4,label:"W",align:"end"},{x:O-g+8,y:W+4,label:"E",align:"start"}],Se=[0,6,12,18,24];or();var Ce=lg(),Ee=H(Ce),Ne=H(Ee),Re=H(Ne);xa(Re,{class:"w-4 h-4"}),Et(),z(Ne);var De=ee(Ne,2),_e=H(De),N=H(_e);fc(N,{class:"w-3 h-3"}),Et(),z(_e);var ke=ee(_e,2),te=H(ke);hc(te,{class:"w-3 h-3"}),Et(),z(ke),z(De),z(Ee);var pe=ee(Ee,2),he=H(pe),Pe=H(he);xa(Pe,{class:"w-3 h-3"}),Et(),z(he);var ie=ee(he,2),x=H(ie);Vl(x,{class:"w-3 h-3"}),Et(),z(ie),z(pe);var _=ee(pe,2);{var F=Y=>{var Q=Zm(),ae=H(Q);Me(ae,"width",O),Me(ae,"height",O);var K=H(ae),R=ee(H(K));Lt(R,1,()=>Ot,Nt,(Ye,Ze,it)=>{var St=Wm(),at=_t(St);Me(at,"id",`compareGlow${it}`);var E=H(at),B=ee(E);z(at);var j=ee(at);Me(j,"id",`compareFilter${it}`),dt(()=>{Me(E,"stop-color",le(Ze)),Me(B,"stop-color",le(Ze))}),Oe(Ye,St)}),Et(),z(K);var se=ee(K);Me(se,"cx",I),Me(se,"cy",W),Me(se,"r",y/2-5);var me=ee(se);Me(me,"cx",I),Me(me,"cy",W),Me(me,"r",y/4);var be=ee(me);Me(be,"x1",I),Me(be,"y1",g),Me(be,"x2",I),Me(be,"y2",O-g);var Le=ee(be);Me(Le,"x1",g),Me(Le,"y1",W),Me(Le,"x2",O-g),Me(Le,"y2",W);var We=ee(Le);Lt(We,1,()=>ce,Nt,(Ye,Ze)=>{var it=Xm(),St=H(it,!0);z(it),dt(()=>{Me(it,"x",le(Ze).x),Me(it,"y",le(Ze).y),Me(it,"text-anchor",le(Ze).align),$e(St,le(Ze).label)}),Oe(Ye,it)});var Xe=ee(We);{var ct=Ye=>{var Ze=Tt(),it=_t(Ze);Lt(it,1,n,Nt,(St,at,E)=>{var B=Tt(),j=_t(B);{var Z=$=>{var Ae=$m();Me(Ae,"filter",`url(#compareFilter${E})`),dt(Fe=>{Me(Ae,"d",Fe),Me(Ae,"stroke",le(at).color)},[()=>T(le(at).shadowTrack,L())]),Oe($,Ae)};mt(j,$=>{le(at).shadowTrack&&le(at).shadowTrack.length>0&&$(Z)})}Oe(St,B)}),Oe(Ye,Ze)};mt(Xe,Ye=>{t().compareMode&&n().length>0&&t().showTrack&&Ye(ct)})}var ut=ee(Xe);{var nt=Ye=>{var Ze=Tt(),it=_t(Ze);Lt(it,1,r,Nt,(St,at)=>{var E=Tt(),B=_t(E);{var j=Z=>{var $=qm();dt(Ae=>{Me($,"d",Ae),Me($,"stroke",le(at).color)},[()=>T(le(at).shadowTrack,L())]),Oe(Z,$)};mt(B,Z=>{le(at).shadowTrack&&le(at).shadowTrack.length>0&&Z(j)})}Oe(St,E)}),Oe(Ye,Ze)};mt(ut,Ye=>{r().length>0&&t().showTrack&&Ye(nt)})}var ft=ee(ut);{var Kt=Ye=>{var Ze=Ym();dt(it=>Me(Ze,"d",it),[()=>T(s(),L())]),Oe(Ye,Ze)};mt(ft,Ye=>{t().showTrack&&Ye(Kt)})}var En=ee(ft);Me(En,"cx",I),Me(En,"cy",W);var jn=ee(En);{var Mt=Ye=>{var Ze=Tt(),it=_t(Ze);Lt(it,1,n,Nt,(St,at,E)=>{var B=Tt(),j=_t(B);{var Z=$=>{var Ae=jm(),Fe=_t(Ae);Me(Fe,"x1",I),Me(Fe,"y1",W);var Ge=ee(Fe);Me(Ge,"fill",`url(#compareGlow${E})`);var Ve=ee(Ge);Me(Ve,"filter",`url(#compareFilter${E})`);var Qe=ee(Ve);dt((je,Je,yt,Wt,wt,fn,vt,et)=>{Me(Fe,"x2",je),Me(Fe,"y2",Je),Me(Fe,"stroke",le(at).color),Me(Ge,"cx",yt),Me(Ge,"cy",Wt),Me(Ve,"cx",wt),Me(Ve,"cy",fn),Me(Ve,"fill",le(at).color),Me(Qe,"cx",vt),Me(Qe,"cy",et)},[()=>C(le(at).shadow,L()).x,()=>C(le(at).shadow,L()).y,()=>C(le(at).shadow,L()).x,()=>C(le(at).shadow,L()).y,()=>C(le(at).shadow,L()).x,()=>C(le(at).shadow,L()).y,()=>C(le(at).shadow,L()).x,()=>C(le(at).shadow,L()).y]),Oe($,Ae)};mt(j,$=>{le(at).shadow&&le(at).sunVisible&&$(Z)})}Oe(St,B)}),Oe(Ye,Ze)};mt(jn,Ye=>{t().compareMode&&n().length>0&&t().showCurrentPoint&&Ye(Mt)})}var gt=ee(jn);{var Ut=Ye=>{var Ze=Km(),it=_t(Ze);Me(it,"x1",I),Me(it,"y1",W);var St=ee(it),at=ee(St),E=ee(at);dt((B,j,Z,$,Ae,Fe,Ge,Ve)=>{Me(it,"x2",B),Me(it,"y2",j),Me(St,"cx",Z),Me(St,"cy",$),Me(at,"cx",Ae),Me(at,"cy",Fe),Me(E,"cx",Ge),Me(E,"cy",Ve)},[()=>C(a(),L()).x,()=>C(a(),L()).y,()=>C(a(),L()).x,()=>C(a(),L()).y,()=>C(a(),L()).x,()=>C(a(),L()).y,()=>C(a(),L()).x,()=>C(a(),L()).y]),Oe(Ye,Ze)};mt(gt,Ye=>{o()&&a()&&t().showCurrentPoint&&Ye(Ut)})}z(ae),z(Q),Oe(Y,Q)},oe=Y=>{var Q=ig(),ae=H(Q);Me(ae,"width",O),Me(ae,"height",O);var K=ee(H(ae));Lt(K,0,()=>[0,30,60,90],Nt,(Mt,gt)=>{var Ut=Jm(),Ye=_t(Ut);Me(Ye,"x1",g),Me(Ye,"x2",O-g);var Ze=ee(Ye);Me(Ze,"x",g-4);var it=H(Ze);z(Ze),dt(()=>{Me(Ye,"y1",g+(O-g*2-20)*(1-gt/90)),Me(Ye,"y2",g+(O-g*2-20)*(1-gt/90)),Me(Ze,"y",g+(O-g*2-20)*(1-gt/90)+4),$e(it,`${gt??""}°`)}),Oe(Mt,Ut)});var R=ee(K);Lt(R,1,()=>Se,Nt,(Mt,gt)=>{var Ut=Qm(),Ye=_t(Ut);Me(Ye,"y1",g),Me(Ye,"y2",O-g-20);var Ze=ee(Ye);Me(Ze,"y",O-g-6);var it=H(Ze,!0);z(Ze),dt(St=>{Me(Ye,"x1",g+le(gt)/24*(O-g*2)),Me(Ye,"x2",g+le(gt)/24*(O-g*2)),Me(Ze,"x",g+le(gt)/24*(O-g*2)),$e(it,St)},[()=>ne(le(gt))]),Oe(Mt,Ut)});var se=ee(R);Me(se,"y",g),Me(se,"height",O-g*2-20);var me=ee(se);Me(me,"y1",g),Me(me,"y2",O-g-20);var be=ee(me);Me(be,"y1",g),Me(be,"y2",O-g-20);var Le=ee(be);{var We=Mt=>{var gt=Tt(),Ut=_t(gt);Lt(Ut,1,n,Nt,(Ye,Ze)=>{var it=eg();dt(St=>{Me(it,"d",St),Me(it,"stroke",le(Ze).color)},[()=>re(le(Ze).altitudeCurve)]),Oe(Ye,it)}),Oe(Mt,gt)};mt(Le,Mt=>{t().compareMode&&n().length>0&&Mt(We)})}var Xe=ee(Le);{var ct=Mt=>{var gt=Tt(),Ut=_t(gt);Lt(Ut,1,r,Nt,(Ye,Ze)=>{var it=tg();dt(St=>{Me(it,"d",St),Me(it,"stroke",le(Ze).color)},[()=>re(le(Ze).altitudeCurve)]),Oe(Ye,it)}),Oe(Mt,gt)};mt(Xe,Mt=>{r().length>0&&Mt(ct)})}var ut=ee(Xe),nt=ee(ut),ft=ee(nt);{var Kt=Mt=>{var gt=ng();dt(()=>{Me(gt,"cx",g+t().timeHours/24*(O-g*2)),Me(gt,"cy",g+(O-g*2-20)*(1-c().altitude/90))}),Oe(Mt,gt)};mt(ft,Mt=>{o()&&Mt(Kt)})}var En=ee(ft);Me(En,"y",g-4);var jn=ee(En);Me(jn,"y",g-4),z(ae),z(Q),dt((Mt,gt,Ut,Ye,Ze,it,St,at,E,B)=>{Me(se,"x",Mt),Me(se,"width",gt),Me(me,"x1",Ut),Me(me,"x2",Ye),Me(be,"x1",Ze),Me(be,"x2",it),Me(ut,"d",St),Me(nt,"d",at),Me(En,"x",E),Me(jn,"x",B)},[()=>q().sunrise,()=>q().sunset-q().sunrise,()=>q().sunrise,()=>q().sunrise,()=>q().sunset,()=>q().sunset,()=>ge(l()),()=>re(l()),()=>q().sunrise,()=>q().sunset]),Oe(Y,Q)};mt(_,Y=>{le(w)==="track"?Y(F):Y(oe,-1)})}var ue=ee(_,2),de=H(ue),Te=ee(H(de),2),xe=H(Te,!0);z(Te),z(de);var ye=ee(de,2),Ue=ee(H(ye),2),ze=H(Ue,!0);z(Ue),z(ye),z(ue);var fe=ee(ue,2);{var qe=Y=>{var Q=sg();Lt(Q,5,n,Nt,(ae,K)=>{var R=rg(),se=H(R),me=H(se),be=ee(me);z(se);var Le=ee(se,2),We=H(Le),Xe=H(We);z(We);var ct=ee(We,2),ut=H(ct);z(ct),z(Le),z(R),dt((nt,ft)=>{jt(R,`background-color: ${le(K).color??""}10; border-color: ${le(K).color??""}30`),jt(se,`color: ${le(K).color??""}`),jt(me,`background-color: ${le(K).color??""}`),$e(be,` ${le(K).preset.name??""}`),$e(Xe,`长度: ${nt??""}`),$e(ut,`角度: ${ft??""}`)},[()=>le(K).shadow?le(K).shadow.length.toFixed(2):"--",()=>le(K).shadow?le(K).shadow.angle.toFixed(1)+"°":"--"]),Oe(ae,R)}),z(Q),Oe(Y,Q)};mt(fe,Y=>{t().compareMode&&n().length>0&&Y(qe)})}var He=ee(fe,2);{var Be=Y=>{var Q=og(),ae=ee(H(Q),2);Lt(ae,1,r,Nt,(K,R)=>{var se=ag(),me=H(se),be=H(me,!0);z(me);var Le=ee(me,2),We=H(Le);z(Le),z(se),dt((Xe,ct)=>{jt(se,`background-color: ${le(R).color??""}10; border-left: 3px solid ${le(R).color??""}`),jt(me,`color: ${le(R).color??""}`),$e(be,le(R).label),$e(We,`${Xe??""}h · ${ct??""}°`)},[()=>le(R).sunriseSunset.dayLength.toFixed(1),()=>le(R).maxAltitude.toFixed(0)]),Oe(K,se)}),z(Q),Oe(Y,Q)};mt(He,Y=>{r().length>0&&Y(Be)})}var Ie=ee(He,2),ve=ee(H(Ie)),b=H(ve,!0);z(ve),z(Ie),z(Ce),dt((Y,Q,ae)=>{Qt(_e,1,`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               ${t().showTrack?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400"}`),Qt(ke,1,`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               ${t().showCurrentPoint?"bg-red-500/20 text-red-400":"bg-slate-700/30 text-slate-400"}`),Qt(he,1,`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             ${le(w)==="track"?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"}`),Qt(ie,1,`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             ${le(w)==="altitude"?"bg-amber-500/20 text-amber-500":"bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"}`),$e(xe,Y),$e(ze,Q),$e(b,ae)},[()=>G(a()),()=>J(a()),()=>ne(t().timeHours)]),At("click",_e,X),At("click",ke,V),At("click",he,()=>{_n(w,"track")}),At("click",ie,()=>{_n(w,"altitude")}),Oe(i,Ce),fi(),h()}ar(["click"]);var ug=lt(`<div class="absolute top-2 left-1/2 -translate-x-1/2 z-20 px-3 py-2 bg-red-500/90 text-white text-xs rounded-lg
                shadow-lg shadow-red-500/30 animate-pulse">最多只能对比 4 个方案</div>`),dg=lt(`<div class="mb-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30"><input type="text" placeholder="方案名称（可选）" class="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-md text-sm
               focus:outline-none focus:border-amber-500/50 mb-2"/> <div class="flex gap-2"><button class="flex-1 py-1.5 bg-amber-500/30 hover:bg-amber-500/50 text-amber-500
                 rounded-md text-sm transition-colors">确认保存</button> <button class="flex-1 py-1.5 bg-slate-600/30 hover:bg-slate-600/50 text-slate-400
                 rounded-md text-sm transition-colors">取消</button></div></div>`),hg=lt('<div class="flex items-center gap-1 px-2 py-0.5 rounded text-xs"><span class="w-1.5 h-1.5 rounded-full"></span> <span class="truncate max-w-16"> </span></div>'),fg=lt('<div class="mb-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded-lg"><div class="flex items-center justify-between"><div class="text-xs text-blue-400 flex items-center gap-1"><!> </div> <button class="p-1 rounded hover:bg-blue-500/20 text-blue-400 transition-colors" title="清除对比"><!></button></div> <div class="flex gap-1.5 mt-2"></div></div>'),pg=lt('<div class="text-center py-8 text-slate-500 text-sm">暂无保存的方案 <br/> <span class="text-xs">点击"保存"按钮保存当前参数</span></div>'),mg=lt('<div><div class="flex items-start justify-between"><button class="flex-1 min-w-0 text-left mr-2"><div class="font-medium text-sm text-slate-100 truncate"> </div> <div class="text-xs text-slate-400 mt-1 space-y-0.5"><div class="flex gap-3"><span> </span> <span> </span></div> <div class="flex gap-3"><span> </span> <span> </span></div></div></button> <div class="flex items-center gap-1 flex-shrink-0"><button><!></button> <button class="p-1.5 rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors" title="删除"><!></button></div></div></div>'),gg=lt(`<div class="glass-card p-5 h-full flex flex-col relative overflow-hidden"><!> <div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 参数方案</h3> <button class="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-500
             rounded-md transition-colors flex items-center gap-1"><!> 保存</button></div> <!> <!> <div class="flex-1 overflow-y-auto space-y-2 min-h-0"><!></div> <div class="mt-3 pt-3 border-t border-slate-700/50"><div class="text-xs text-slate-500">点击 <!> 按钮将方案加入对比（最多4个）</div></div></div>`);function _g(i,e){hi(e,!0);const t=()=>ht(o,"$config",r),n=()=>ht(a,"$presets",r),[r,s]=Hi(),{config:o,presets:a,savePreset:l,loadPreset:c,deletePreset:u,setCompareMode:h,toggleComparePreset:f}=Vi;let m=Fr(""),v=Fr(!1),M=Fr(!1),p=null;const d={equatorial:"赤道式",horizontal:"水平式",vertical:"垂直式"};function A(_e){const N=Math.floor(_e),ke=Math.floor((_e-N)*60);return`${N.toString().padStart(2,"0")}:${ke.toString().padStart(2,"0")}`}function S(_e){return _e}function D(){const _e=ot(o),N=le(m).trim()||`${d[_e.type]} - ${_e.date}`;l(N)&&(_n(m,""),_n(v,!1))}function U(_e){f(_e)===!1&&(p&&clearTimeout(p),_n(M,!0),p=setTimeout(()=>{_n(M,!1)},2e3))}function P(_e){u(_e)}function w(_e){c(_e)}function O(_e){const ke=ot(o).comparePresetIds.indexOf(_e);return ke===-1?"transparent":Ot[ke%Ot.length]}function g(_e){const ke=ot(o).comparePresetIds.includes(_e),te="p-1.5 rounded-md transition-colors ";return ke?(O(_e),te+"text-white"):te+"hover:bg-slate-600/50 text-slate-400"}function y(_e){const ke=ot(o).comparePresetIds.includes(_e),te="p-3 rounded-lg border transition-all ";return ke?(O(_e),te+"bg-slate-700/30"):te+"bg-slate-700/30 border-slate-600/30 hover:border-slate-500/50"}function I(){h(!1)}Ws(()=>{const _e=t();_e.comparePresetIds.length===0&&_e.compareMode});var W=gg(),ne=H(W);{var L=_e=>{var N=ug();Oe(_e,N)};mt(ne,_e=>{le(M)&&_e(L)})}var T=ee(ne,2),C=H(T),X=H(C);pa(X,{class:"w-4 h-4"}),Et(),z(C);var V=ee(C,2),G=H(V);pa(G,{class:"w-3 h-3"}),Et(),z(V),z(T);var J=ee(T,2);{var re=_e=>{var N=dg(),ke=H(N);Qi(ke);var te=ee(ke,2),pe=H(te),he=ee(pe,2);z(te),z(N),At("keydown",ke,Pe=>{Pe.key==="Enter"&&D()}),Wl(ke,()=>le(m),Pe=>_n(m,Pe)),At("click",pe,D),At("click",he,()=>{_n(v,!1),_n(m,"")}),Oe(_e,N)};mt(J,_e=>{le(v)&&_e(re)})}var ge=ee(J,2);{var q=_e=>{var N=fg(),ke=H(N),te=H(ke),pe=H(te);us(pe,{class:"w-3 h-3"});var he=ee(pe);z(te);var Pe=ee(te,2),ie=H(Pe);Xl(ie,{class:"w-3.5 h-3.5"}),z(Pe),z(ke);var x=ee(ke,2);Lt(x,5,()=>t().comparePresetIds,Nt,(_,F,oe)=>{const ue=ls(()=>n().find(ye=>ye.id===le(F)));var de=Tt(),Te=_t(de);{var xe=ye=>{var Ue=hg(),ze=H(Ue),fe=ee(ze,2),qe=H(fe,!0);z(fe),z(Ue),dt(()=>{jt(Ue,`background-color: ${Ot[oe%Ot.length]??""}20; 
                     color: ${Ot[oe%Ot.length]??""}`),jt(ze,`background-color: ${Ot[oe%Ot.length]??""}`),$e(qe,le(ue).name)}),Oe(ye,Ue)};mt(Te,ye=>{le(ue)&&ye(xe)})}Oe(_,de)}),z(x),z(N),dt(()=>$e(he,` 对比模式 (${t().comparePresetIds.length??""}/4)`)),At("click",Pe,I),Oe(_e,N)};mt(ge,_e=>{t().compareMode&&t().comparePresetIds.length>0&&_e(q)})}var ce=ee(ge,2),Se=H(ce);{var Ce=_e=>{var N=pg();Oe(_e,N)},Ee=_e=>{var N=Tt(),ke=_t(N);Lt(ke,1,n,te=>te.id,(te,pe)=>{const he=ls(()=>t().comparePresetIds.includes(le(pe).id)),Pe=ls(()=>t().comparePresetIds.indexOf(le(pe).id));var ie=mg(),x=H(ie),_=H(x),F=H(_),oe=H(F,!0);z(F);var ue=ee(F,2),de=H(ue),Te=H(de),xe=H(Te,!0);z(Te);var ye=ee(Te,2),Ue=H(ye);z(ye),z(de);var ze=ee(de,2),fe=H(ze),qe=H(fe,!0);z(fe);var He=ee(fe,2),Be=H(He,!0);z(He),z(ze),z(ue),z(_);var Ie=ee(_,2),ve=H(Ie),b=H(ve);{var Y=R=>{ql(R,{class:"w-4 h-4"})},Q=R=>{us(R,{class:"w-4 h-4"})};mt(b,R=>{le(he)?R(Y):R(Q,-1)})}z(ve);var ae=ee(ve,2),K=H(ae);$l(K,{class:"w-4 h-4"}),z(ae),z(Ie),z(x),z(ie),dt((R,se,me,be,Le)=>{Qt(ie,1,R),jt(ie,le(he)?`border-left: 3px solid ${Ot[le(Pe)%Ot.length]}`:""),$e(oe,le(pe).name),$e(xe,d[le(pe).type]),$e(Ue,`纬度: ${se??""}°`),$e(qe,me),$e(Be,be),Qt(ve,1,Le),Me(ve,"title",le(he)?"取消对比":"加入对比"),jt(ve,le(he)?`background-color: ${Ot[le(Pe)%Ot.length]}40`:"")},[()=>er(y(le(pe).id)),()=>le(pe).latitude.toFixed(1),()=>le(pe).date,()=>A(le(pe).timeHours),()=>er(g(le(pe).id))]),At("click",_,()=>w(le(pe).id)),At("click",ve,()=>U(le(pe).id)),At("click",ae,()=>P(le(pe).id)),Oe(te,ie)}),Oe(_e,N)};mt(Se,_e=>{n().length===0?_e(Ce):_e(Ee,-1)})}z(ce);var Ne=ee(ce,2),Re=H(Ne),De=ee(H(Re));us(De,{class:"w-3 h-3 inline"}),Et(),z(Re),z(Ne),z(W),At("click",V,()=>{_n(v,!le(v))}),Oe(i,W),fi(),s()}ar(["click","keydown"]);var vg=lt('<div class="text-center py-6 text-slate-500 text-sm">选择 1-4 个方案进行对比 <div class="text-xs mt-1 text-slate-600">在下方预设列表中点击对比按钮</div></div>'),xg=lt('<div class="rounded-lg p-3 border"><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full"></span> <span class="text-sm font-medium"> </span> <span class="text-xs text-slate-500 ml-auto"> </span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200"> </div> <div> </div></div></div></div>'),Mg=lt('<div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-amber-500/30"><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full bg-amber-500"></span> <span class="text-sm font-medium text-amber-500">当前方案</span> <span class="text-xs text-slate-500 ml-auto"> </span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200"> </div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200"> </div></div></div></div> <!> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500"><span class="text-green-400">绿色</span> 表示优于当前方案 · <span class="text-red-400">红色</span> 表示劣于当前方案</div></div></div>'),Sg=lt('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 方案差异摘要</h3></div> <!></div>');function Eg(i,e){hi(e,!1);const t=()=>ht(c,"$config",a),n=()=>ht(m,"$comparePresetsData",a),r=()=>ht(h,"$maxShadowLength",a),s=()=>ht(f,"$noonShadow",a),o=()=>ht(u,"$sunriseSunset",a),[a,l]=Hi(),{config:c,sunriseSunset:u,maxShadowLength:h,noonShadow:f,comparePresetsData:m}=Vi,v={equatorial:"赤道式",horizontal:"水平式",vertical:"垂直式"};function M(I){return I.toFixed(1)+" 小时"}function p(I){return I.toFixed(2)}function d(I){return I.toFixed(1)+"°"}function A(I,W){const ne=W-I;return Math.abs(ne)<.001?"text-slate-400":ne>0?"text-green-400":"text-red-400"}function S(I,W,ne=""){const L=W-I;return Math.abs(L)<.001?"—":(L>0?"+":"")+L.toFixed(2)+ne}or();var D=Sg(),U=H(D),P=H(U),w=H(P);Yl(w,{class:"w-4 h-4"}),Et(),z(P),z(U);var O=ee(U,2);{var g=I=>{var W=vg();Oe(I,W)},y=I=>{var W=Mg(),ne=H(W),L=H(ne),T=ee(H(L),4),C=H(T,!0);z(T),z(L);var X=ee(L,2),V=H(X),G=ee(H(V),2),J=H(G,!0);z(G),z(V);var re=ee(V,2),ge=ee(H(re),2),q=H(ge,!0);z(ge),z(re);var ce=ee(re,2),Se=ee(H(ce),2),Ce=H(Se,!0);z(Se),z(ce),z(X),z(ne);var Ee=ee(ne,2);Lt(Ee,1,n,Nt,(Ne,Re)=>{var De=xg(),_e=H(De),N=H(_e),ke=ee(N,2),te=H(ke,!0);z(ke);var pe=ee(ke,2),he=H(pe,!0);z(pe),z(_e);var Pe=ee(_e,2),ie=H(Pe),x=ee(H(ie),2),_=H(x,!0);z(x);var F=ee(x,2),oe=H(F,!0);z(F),z(ie);var ue=ee(ie,2),de=ee(H(ue),2),Te=H(de,!0);z(de);var xe=ee(de,2),ye=H(xe,!0);z(xe),z(ue);var Ue=ee(ue,2),ze=ee(H(Ue),2),fe=H(ze,!0);z(ze);var qe=ee(ze,2),He=H(qe,!0);z(qe),z(Ue),z(Pe),z(De),dt((Be,Ie,ve,b,Y,Q,ae,K,R)=>{jt(De,`background-color: ${le(Re).color??""}08; border-color: ${le(Re).color??""}30`),jt(N,`background-color: ${le(Re).color??""}`),jt(ke,`color: ${le(Re).color??""}`),$e(te,le(Re).preset.name),$e(he,v[le(Re).preset.type]),$e(_,Be),Qt(F,1,`text-xs ${Ie??""}`),$e(oe,ve),$e(Te,b),Qt(xe,1,`text-xs ${Y??""}`),$e(ye,Q),$e(fe,ae),Qt(qe,1,`text-xs ${K??""}`),$e(He,R)},[()=>p(le(Re).maxShadowLength),()=>A(r(),le(Re).maxShadowLength),()=>S(r(),le(Re).maxShadowLength),()=>d(le(Re).noonShadowAngle),()=>{var Be;return A(((Be=s())==null?void 0:Be.angle)??0,le(Re).noonShadowAngle)},()=>{var Be;return S(((Be=s())==null?void 0:Be.angle)??0,le(Re).noonShadowAngle,"°")},()=>M(le(Re).sunriseSunset.dayLength),()=>A(o().dayLength,le(Re).sunriseSunset.dayLength),()=>S(o().dayLength,le(Re).sunriseSunset.dayLength,"h")]),Oe(Ne,De)}),Et(2),z(W),dt((Ne,Re,De)=>{$e(C,v[t().type]),$e(J,Ne),$e(q,Re),$e(Ce,De)},[()=>p(r()),()=>s()?d(s().angle):"--",()=>M(o().dayLength)]),Oe(I,W)};mt(O,I=>{!t().compareMode||n().length===0?I(g):I(y,-1)})}z(D),Oe(i,D),fi(),l()}var yg=lt("<button> </button>"),bg=lt('<div class="flex items-center gap-1.5 mb-3 px-2 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg"><!> <span class="text-xs text-violet-400">叠加模式：已在视图中显示多条轨迹</span></div>'),Tg=lt('<div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"></div>'),Ag=lt('<button><!> <div class="text-xs font-medium text-slate-200 pl-1"> </div> <div class="text-xs text-slate-500 mt-0.5 pl-1"> </div> <div class="text-xs text-amber-500/80 mt-1 pl-1"> </div></button>'),wg=lt('<div class="opacity-90"><div class="flex items-center gap-2 mb-2"><!> <span class="text-xs font-medium text-slate-400"> </span></div> <div class="grid grid-cols-2 gap-2"></div></div>'),Rg=lt('<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2"><!> 全年太阳轨迹分析</h3></div> <div class="flex gap-1 mb-4 bg-slate-800/40 rounded-lg p-1"></div> <!> <div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50"><div class="text-xs text-slate-400 mb-2">当前日期</div> <div class="flex items-center justify-between"><div><div class="font-mono text-sm text-slate-200"> </div> <div class="text-xs text-slate-500 mt-0.5"> </div></div></div></div> <!> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500 flex items-center gap-1"><!> <span>冬至日照最短 · 夏至日照最长</span></div></div></div></div>');function Cg(i,e){hi(e,!1);const t=()=>ht(o,"$config",r),n=()=>ht(a,"$yearlyAnalysis",r),[r,s]=Hi(),{config:o,yearlyAnalysis:a,setDate:l,setKeyDateMode:c}=Vi;function u(G){const J=new Date(G);return`${J.getMonth()+1}月${J.getDate()}日`}function h(G){l(G)}const f=[{mode:"single",label:"单日"},{mode:"solstices",label:"至日"},{mode:"equinoxes",label:"分日"},{mode:"quarterly",label:"四立"}];function m(G){c(G)}function v(G,J,re){const ge=ot(a);return G==="solstices"?ge.solstices[J]:G==="equinoxes"?ge.equinoxes[J]:G==="quarterly"&&re!==void 0?ge.quarterly[re]:null}const M=[{mode:"solstices",label:"至日",icon:ta,colors:Br.solstices,dates:[{key:"summer",label:"夏至"},{key:"winter",label:"冬至"}]},{mode:"equinoxes",label:"分日",icon:gc,colors:Br.equinoxes,dates:[{key:"spring",label:"春分"},{key:"autumn",label:"秋分"}]},{mode:"quarterly",label:"四立",icon:pc,colors:Br.quarterly,dates:[{key:"q1",label:"立春",index:0},{key:"q2",label:"立夏",index:1},{key:"q3",label:"立秋",index:2},{key:"q4",label:"立冬",index:3}]}];or();var p=Rg(),d=H(p),A=H(d),S=H(A);Jo(S,{class:"w-4 h-4"}),Et(),z(A),z(d);var D=ee(d,2);Lt(D,5,()=>f,Nt,(G,J)=>{var re=yg(),ge=H(re,!0);z(re),dt(()=>{Qt(re,1,`flex-1 py-1.5 text-xs font-medium rounded-md transition-all
               ${t().keyDateMode===le(J).mode?"bg-amber-500/20 text-amber-500":"text-slate-400 hover:text-slate-300"}`),$e(ge,le(J).label)}),At("click",re,()=>m(le(J).mode)),Oe(G,re)}),z(D);var U=ee(D,2);{var P=G=>{var J=bg(),re=H(J);mc(re,{class:"w-3.5 h-3.5 text-violet-400"}),Et(2),z(J),Oe(G,J)};mt(U,G=>{t().keyDateMode!=="single"&&G(P)})}var w=ee(U,2),O=H(w),g=ee(H(O),2),y=H(g),I=H(y),W=H(I,!0);z(I);var ne=ee(I,2),L=H(ne);z(ne),z(y),z(g),z(O);var T=ee(O,2);Lt(T,1,()=>M,Nt,(G,J)=>{var re=wg(),ge=H(re),q=H(ge);Zl(q,()=>le(J).icon,(Ee,Ne)=>{Ne(Ee,{class:"w-3.5 h-3.5 text-slate-400"})});var ce=ee(q,2),Se=H(ce,!0);z(ce),z(ge);var Ce=ee(ge,2);Lt(Ce,5,()=>le(J).dates,Nt,(Ee,Ne,Re)=>{const De=Bl(()=>v(le(J).mode,le(Ne).key,le(Ne).index));var _e=Tt(),N=_t(_e);{var ke=te=>{var pe=Ag(),he=H(pe);{var Pe=de=>{var Te=Tg();dt(()=>jt(Te,`background-color: ${le(J).colors[Re]??""};`)),Oe(de,Te)};mt(he,de=>{t().keyDateMode===le(J).mode&&de(Pe)})}var ie=ee(he,2),x=H(ie,!0);z(ie);var _=ee(ie,2),F=H(_,!0);z(_);var oe=ee(_,2),ue=H(oe);z(oe),z(pe),dt((de,Te,xe)=>{Qt(pe,1,`p-2 bg-slate-800/40 hover:bg-slate-700/50 rounded-lg border 
                       hover:border-amber-500/30 transition-all text-left relative overflow-hidden
                       ${t().keyDateMode===le(J).mode?"border-slate-500/50":"border-slate-700/50"}`),$e(x,le(Ne).label),$e(F,de),$e(ue,`${Te??""}h · ${xe??""}°`)},[()=>u(le(De).date),()=>le(De).dayLength.toFixed(1),()=>le(De).maxAltitude.toFixed(0)]),At("click",pe,()=>h(le(De).date)),Oe(te,pe)};mt(N,te=>{le(De)&&te(ke)})}Oe(Ee,_e)}),z(Ce),z(re),dt(()=>$e(Se,le(J).label)),Oe(G,re)});var C=ee(T,2),X=H(C),V=H(X);_c(V,{class:"w-3 h-3"}),Et(2),z(X),z(C),z(w),z(p),dt((G,J)=>{$e(W,t().date),$e(L,`日照: ${G??""}小时 · 
            最高: ${J??""}°`)},[()=>n().currentDay.dayLength.toFixed(1),()=>n().currentDay.maxAltitude.toFixed(1)]),Oe(i,p),fi(),s()}ar(["click"]);var Lg=lt(`<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"><header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20"><div class="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600
                    flex items-center justify-center shadow-lg shadow-amber-500/20"><!></div> <div><h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">日晷模拟器</h1> <p class="text-xs text-slate-500">Sundial Simulator</p></div></div> <div class="flex items-center gap-4"><nav class="flex items-center gap-1"><button class="px-3 py-1.5 text-sm text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/20">模拟器</button> <button class="px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg
                   border border-transparent hover:border-slate-600/50 transition-colors flex items-center gap-2"><!> 校准测量</button></nav> <div class="text-sm text-slate-400 hidden sm:block">多方案对比 · 全年太阳轨迹分析</div></div></div></header> <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-6"><div class="grid grid-cols-12 gap-6 h-[calc(100vh-100px)]"><div class="col-span-12 lg:col-span-3 h-full overflow-hidden"><!></div> <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full"><div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0"><!></div> <div class="h-[280px] flex-shrink-0"><!></div></div> <div class="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full overflow-hidden"><div class="h-[380px] flex-shrink-0 overflow-hidden"><!></div> <div class="flex-1 min-h-0 overflow-hidden"><!></div> <div class="flex-1 min-h-0 overflow-hidden"><!></div></div></div></main></div>`);function kg(i,e){hi(e,!1),or();var t=Lg(),n=H(t),r=H(n),s=H(r),o=H(s),a=H(o);ta(a,{class:"w-6 h-6 text-white"}),z(o),Et(2),z(s);var l=ee(s,2),c=H(l),u=ee(H(c),2),h=H(u);jl(h,{class:"w-4 h-4"}),Et(),z(u),z(c),Et(2),z(l),z(r),z(n);var f=ee(n,2),m=H(f),v=H(m),M=H(v);yc(M,{}),z(v);var p=ee(v,2),d=H(p),A=H(d);Vm(A,{}),z(d);var S=ee(d,2),D=H(S);Eg(D,{}),z(S),z(p);var U=ee(p,2),P=H(U),w=H(P);cg(w,{}),z(P);var O=ee(P,2),g=H(O);Cg(g,{}),z(O);var y=ee(O,2),I=H(y);_g(I,{}),z(y),z(U),z(m),z(f),z(t),At("click",u,()=>Jl("/calibration")),Oe(i,t),fi()}ar(["click"]);export{kg as component,Gg as universal};
