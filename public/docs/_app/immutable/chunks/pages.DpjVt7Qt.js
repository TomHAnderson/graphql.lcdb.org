var AF=Object.defineProperty;var Pc=r=>{throw TypeError(r)};var NF=(r,n,t)=>n in r?AF(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var Ee=(r,n,t)=>NF(r,typeof n!="symbol"?n+"":n,t),wF=(r,n,t)=>n.has(r)||Pc("Cannot "+t);var $c=(r,n,t)=>n.has(r)?Pc("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,t);var ui=(r,n,t)=>(wF(r,n,"access private method"),t);import{s as we,d as H,c as De,q as sn,I as Mc,n as Ke,b as Po,l as $o,t as Mo,a2 as Fi,D as Kn,v as Cf,E as et,F as nt,G as tt,ae as ws,j as xe,k as qe,o as Oe,f as bn,e as It,g as Go,m as Vo,ah as CF,ai as xF,ak as Gc,K as OF}from"./scheduler.BRkQt4do.js";import{S as Re,i as Ue,t as ae,a as ee,g as At,e as Nt,d as Yt,b as Wt,m as Qt,c as _r}from"./index.BzjUemo1.js";import{b as kF}from"./control.B-oaBbZV.js";function ot(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function xf(r,n){const t={},a={},s={$$scope:1};let o=r.length;for(;o--;){const l=r[o],f=n[o];if(f){for(const p in l)p in f||(a[p]=1);for(const p in f)s[p]||(t[p]=f[p],s[p]=1);r[o]=f}else for(const p in l)s[p]=1}for(const l in a)l in t||(t[l]=void 0);return t}function kS(r){return typeof r=="object"&&r!==null?r:{}}function Vc(r){let n,t,a;var s=r[1][r[0].type];function o(l,f){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[UF]},$$scope:{ctx:l}}}}return s&&(n=Mc(s,o(r))),{c(){n&&Wt(n.$$.fragment),t=sn()},l(l){n&&_r(n.$$.fragment,l),t=sn()},m(l,f){n&&Qt(n,l,f),De(l,t,f),a=!0},p(l,f){if(f&3&&s!==(s=l[1][l[0].type])){if(n){At();const p=n;ae(p.$$.fragment,1,0,()=>{Yt(p,1)}),Nt()}s?(n=Mc(s,o(l)),Wt(n.$$.fragment),ee(n.$$.fragment,1),Qt(n,t.parentNode,t)):n=null}else if(s){const p={};f&1&&(p.token=l[0]),f&4&&(p.options=l[2]),f&2&&(p.renderers=l[1]),f&15&&(p.$$scope={dirty:f,ctx:l}),n.$set(p)}},i(l){a||(n&&ee(n.$$.fragment,l),a=!0)},o(l){n&&ae(n.$$.fragment,l),a=!1},d(l){l&&H(t),n&&Yt(n,l)}}}function LF(r){let n=r[0].raw+"",t;return{c(){t=Mo(n)},l(a){t=$o(a,n)},m(a,s){De(a,t,s)},p(a,s){s&1&&n!==(n=a[0].raw+"")&&Po(t,n)},i:Ke,o:Ke,d(a){a&&H(t)}}}function RF(r){let n,t;return n=new Ms({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){_r(n.$$.fragment,a)},m(a,s){Qt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.tokens=a[0].tokens),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function UF(r){let n,t,a,s;const o=[RF,LF],l=[];function f(p,_){return"tokens"in p[0]&&p[0].tokens?0:1}return n=f(r),t=l[n]=o[n](r),{c(){t.c(),a=sn()},l(p){t.l(p),a=sn()},m(p,_){l[n].m(p,_),De(p,a,_),s=!0},p(p,_){let b=n;n=f(p),n===b?l[n].p(p,_):(At(),ae(l[b],1,1,()=>{l[b]=null}),Nt(),t=l[n],t?t.p(p,_):(t=l[n]=o[n](p),t.c()),ee(t,1),t.m(a.parentNode,a))},i(p){s||(ee(t),s=!0)},o(p){ae(t),s=!1},d(p){p&&H(a),l[n].d(p)}}}function BF(r){let n,t,a=r[1][r[0].type]&&Vc(r);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),De(s,n,o),t=!0},p(s,[o]){s[1][s[0].type]?a?(a.p(s,o),o&3&&ee(a,1)):(a=Vc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(At(),ae(a,1,1,()=>{a=null}),Nt())},i(s){t||(ee(a),t=!0)},o(s){ae(a),t=!1},d(s){s&&H(n),a&&a.d(s)}}}function PF(r,n,t){let{token:a}=n,{renderers:s}=n,{options:o}=n;return r.$$set=l=>{"token"in l&&t(0,a=l.token),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,o=l.options)},[a,s,o]}class Of extends Re{constructor(n){super(),Ue(this,n,PF,BF,we,{token:0,renderers:1,options:2})}}function jc(r,n,t){const a=r.slice();return a[3]=n[t],a}function qc(r){let n,t,a=ot(r[0]),s=[];for(let l=0;l<a.length;l+=1)s[l]=zc(jc(r,a,l));const o=l=>ae(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();n=sn()},l(l){for(let f=0;f<s.length;f+=1)s[f].l(l);n=sn()},m(l,f){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(l,f);De(l,n,f),t=!0},p(l,f){if(f&7){a=ot(l[0]);let p;for(p=0;p<a.length;p+=1){const _=jc(l,a,p);s[p]?(s[p].p(_,f),ee(s[p],1)):(s[p]=zc(_),s[p].c(),ee(s[p],1),s[p].m(n.parentNode,n))}for(At(),p=a.length;p<s.length;p+=1)o(p);Nt()}},i(l){if(!t){for(let f=0;f<a.length;f+=1)ee(s[f]);t=!0}},o(l){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)ae(s[f]);t=!1},d(l){l&&H(n),Fi(s,l)}}}function zc(r){let n,t;return n=new Of({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){_r(n.$$.fragment,a)},m(a,s){Qt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token=a[3]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function $F(r){let n,t,a=r[0]&&qc(r);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),De(s,n,o),t=!0},p(s,[o]){s[0]?a?(a.p(s,o),o&1&&ee(a,1)):(a=qc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(At(),ae(a,1,1,()=>{a=null}),Nt())},i(s){t||(ee(a),t=!0)},o(s){ae(a),t=!1},d(s){s&&H(n),a&&a.d(s)}}}function MF(r,n,t){let{tokens:a}=n,{renderers:s}=n,{options:o}=n;return r.$$set=l=>{"tokens"in l&&t(0,a=l.tokens),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,o=l.options)},[a,s,o]}class Ms extends Re{constructor(n){super(),Ue(this,n,MF,$F,we,{tokens:0,renderers:1,options:2})}}function Di(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function vi(r){return r.startsWith("/")||r.startsWith("#")}function kf(r,n){return n.slug(r).replace(/--+/g,"-")}function Fo(r){let n,t;const a=r[5].default,s=Kn(a,r,r[4],null);let o=[{id:r[1]}],l={};for(let f=0;f<o.length;f+=1)l=Cf(l,o[f]);return{c(){n=Oe(`h${r[0].depth}`),s&&s.c(),this.h()},l(f){n=xe(f,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var p=qe(n);s&&s.l(p),p.forEach(H),this.h()},h(){ws(`h${r[0].depth}`)(n,l)},m(f,p){De(f,n,p),s&&s.m(n,null),t=!0},p(f,p){s&&s.p&&(!t||p&16)&&et(s,a,f,f[4],t?tt(a,f[4],p,null):nt(f[4]),null),ws(`h${f[0].depth}`)(n,l=xf(o,[(!t||p&2)&&{id:f[1]}]))},i(f){t||(ee(s,f),t=!0)},o(f){ae(s,f),t=!1},d(f){f&&H(n),s&&s.d(f)}}}function GF(r){let n=`h${r[0].depth}`,t,a,s=`h${r[0].depth}`&&Fo(r);return{c(){s&&s.c(),t=sn()},l(o){s&&s.l(o),t=sn()},m(o,l){s&&s.m(o,l),De(o,t,l),a=!0},p(o,[l]){`h${o[0].depth}`?n?we(n,`h${o[0].depth}`)?(s.d(1),s=Fo(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(o,l):(s=Fo(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${o[0].depth}`)},i(o){a||(ee(s,o),a=!0)},o(o){ae(s,o),a=!1},d(o){o&&H(t),s&&s.d(o)}}}function VF(r,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:l}=n;const f=void 0;let p;return r.$$set=_=>{"token"in _&&t(0,o=_.token),"options"in _&&t(2,l=_.options),"$$scope"in _&&t(4,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,p=kf(o.text,l.slugger))},[o,p,l,f,s,a]}class jF extends Re{constructor(n){super(),Ue(this,n,VF,GF,we,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function qF(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("blockquote"),s&&s.c()},l(o){n=xe(o,"BLOCKQUOTE",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function zF(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class YF extends Re{constructor(n){super(),Ue(this,n,zF,qF,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Yc(r,n,t){const a=r.slice();return a[4]=n[t],a}function Wc(r){let n,t;return n=new Of({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){_r(n.$$.fragment,a)},m(a,s){Qt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token={...a[4]}),s&2&&(o.options=a[1]),s&4&&(o.renderers=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function Do(r){let n,t,a,s=ot(r[0].items),o=[];for(let _=0;_<s.length;_+=1)o[_]=Wc(Yc(r,s,_));const l=_=>ae(o[_],1,1,()=>{o[_]=null});let f=[{start:t=r[0].start||1}],p={};for(let _=0;_<f.length;_+=1)p=Cf(p,f[_]);return{c(){n=Oe(r[3]);for(let _=0;_<o.length;_+=1)o[_].c();this.h()},l(_){n=xe(_,(r[3]||"null").toUpperCase(),{start:!0});var b=qe(n);for(let F=0;F<o.length;F+=1)o[F].l(b);b.forEach(H),this.h()},h(){ws(r[3])(n,p)},m(_,b){De(_,n,b);for(let F=0;F<o.length;F+=1)o[F]&&o[F].m(n,null);a=!0},p(_,b){if(b&7){s=ot(_[0].items);let F;for(F=0;F<s.length;F+=1){const C=Yc(_,s,F);o[F]?(o[F].p(C,b),ee(o[F],1)):(o[F]=Wc(C),o[F].c(),ee(o[F],1),o[F].m(n,null))}for(At(),F=s.length;F<o.length;F+=1)l(F);Nt()}ws(_[3])(n,p=xf(f,[(!a||b&1&&t!==(t=_[0].start||1))&&{start:t}]))},i(_){if(!a){for(let b=0;b<s.length;b+=1)ee(o[b]);a=!0}},o(_){o=o.filter(Boolean);for(let b=0;b<o.length;b+=1)ae(o[b]);a=!1},d(_){_&&H(n),Fi(o,_)}}}function WF(r){let n=r[3],t,a=r[3]&&Do(r);return{c(){a&&a.c(),t=sn()},l(s){a&&a.l(s),t=sn()},m(s,o){a&&a.m(s,o),De(s,t,o)},p(s,[o]){s[3]?n?we(n,s[3])?(a.d(1),a=Do(s),n=s[3],a.c(),a.m(t.parentNode,t)):a.p(s,o):(a=Do(s),n=s[3],a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=s[3])},i:Ke,o(s){ae(a,s)},d(s){s&&H(t),a&&a.d(s)}}}function QF(r,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n,l;return r.$$set=f=>{"token"in f&&t(0,a=f.token),"options"in f&&t(1,s=f.options),"renderers"in f&&t(2,o=f.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=a.ordered?"ol":"ul")},[a,s,o,l]}class JF extends Re{constructor(n){super(),Ue(this,n,QF,WF,we,{token:0,options:1,renderers:2})}}function HF(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("li"),s&&s.c()},l(o){n=xe(o,"LI",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function XF(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class ZF extends Re{constructor(n){super(),Ue(this,n,XF,HF,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function KF(r){let n;return{c(){n=Oe("br")},l(t){n=xe(t,"BR",{})},m(t,a){De(t,n,a)},p:Ke,i:Ke,o:Ke,d(t){t&&H(n)}}}function e1(r,n,t){return[void 0,void 0,void 0]}class n1 extends Re{constructor(n){super(),Ue(this,n,e1,KF,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function t1(r){let n,t,a=r[0].text+"",s,o;return{c(){n=Oe("pre"),t=Oe("code"),s=Mo(a),this.h()},l(l){n=xe(l,"PRE",{});var f=qe(n);t=xe(f,"CODE",{class:!0});var p=qe(t);s=$o(p,a),p.forEach(H),f.forEach(H),this.h()},h(){bn(t,"class",o=`lang-${r[0].lang}`)},m(l,f){De(l,n,f),It(n,t),It(t,s)},p(l,[f]){f&1&&a!==(a=l[0].text+"")&&Po(s,a),f&1&&o!==(o=`lang-${l[0].lang}`)&&bn(t,"class",o)},i:Ke,o:Ke,d(l){l&&H(n)}}}function r1(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,s,o]}class i1 extends Re{constructor(n){super(),Ue(this,n,r1,t1,we,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function s1(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",a;return{c(){n=Oe("code"),a=Mo(t)},l(s){n=xe(s,"CODE",{});var o=qe(n);a=$o(o,t),o.forEach(H)},m(s,o){De(s,n,o),It(n,a)},p(s,[o]){o&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&Po(a,t)},i:Ke,o:Ke,d(s){s&&H(n)}}}function a1(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,s,o]}class o1 extends Re{constructor(n){super(),Ue(this,n,a1,s1,we,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Qc(r,n,t){const a=r.slice();return a[3]=n[t],a}function Jc(r,n,t){const a=r.slice();return a[6]=n[t],a}function Hc(r,n,t){const a=r.slice();return a[9]=n[t],a}function Xc(r){let n,t,a,s;return t=new Ms({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("th"),Wt(t.$$.fragment),a=Vo(),this.h()},l(o){n=xe(o,"TH",{scope:!0});var l=qe(n);_r(t.$$.fragment,l),a=Go(l),l.forEach(H),this.h()},h(){bn(n,"scope","col")},m(o,l){De(o,n,l),Qt(t,n,null),It(n,a),s=!0},p(o,l){const f={};l&1&&(f.tokens=o[9].tokens),l&2&&(f.options=o[1]),l&4&&(f.renderers=o[2]),t.$set(f)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){ae(t.$$.fragment,o),s=!1},d(o){o&&H(n),Yt(t)}}}function Zc(r){let n,t,a;return t=new Ms({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("td"),Wt(t.$$.fragment)},l(s){n=xe(s,"TD",{});var o=qe(n);_r(t.$$.fragment,o),o.forEach(H)},m(s,o){De(s,n,o),Qt(t,n,null),a=!0},p(s,o){const l={};o&1&&(l.tokens=s[6].tokens),o&2&&(l.options=s[1]),o&4&&(l.renderers=s[2]),t.$set(l)},i(s){a||(ee(t.$$.fragment,s),a=!0)},o(s){ae(t.$$.fragment,s),a=!1},d(s){s&&H(n),Yt(t)}}}function Kc(r){let n,t,a,s=ot(r[3]),o=[];for(let f=0;f<s.length;f+=1)o[f]=Zc(Jc(r,s,f));const l=f=>ae(o[f],1,1,()=>{o[f]=null});return{c(){n=Oe("tr");for(let f=0;f<o.length;f+=1)o[f].c();t=Vo()},l(f){n=xe(f,"TR",{});var p=qe(n);for(let _=0;_<o.length;_+=1)o[_].l(p);t=Go(p),p.forEach(H)},m(f,p){De(f,n,p);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(n,null);It(n,t),a=!0},p(f,p){if(p&7){s=ot(f[3]);let _;for(_=0;_<s.length;_+=1){const b=Jc(f,s,_);o[_]?(o[_].p(b,p),ee(o[_],1)):(o[_]=Zc(b),o[_].c(),ee(o[_],1),o[_].m(n,t))}for(At(),_=s.length;_<o.length;_+=1)l(_);Nt()}},i(f){if(!a){for(let p=0;p<s.length;p+=1)ee(o[p]);a=!0}},o(f){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)ae(o[p]);a=!1},d(f){f&&H(n),Fi(o,f)}}}function u1(r){let n,t,a,s,o,l,f=ot(r[0].header),p=[];for(let y=0;y<f.length;y+=1)p[y]=Xc(Hc(r,f,y));const _=y=>ae(p[y],1,1,()=>{p[y]=null});let b=ot(r[0].rows),F=[];for(let y=0;y<b.length;y+=1)F[y]=Kc(Qc(r,b,y));const C=y=>ae(F[y],1,1,()=>{F[y]=null});return{c(){n=Oe("table"),t=Oe("thead"),a=Oe("tr");for(let y=0;y<p.length;y+=1)p[y].c();s=Vo(),o=Oe("tbody");for(let y=0;y<F.length;y+=1)F[y].c()},l(y){n=xe(y,"TABLE",{});var N=qe(n);t=xe(N,"THEAD",{});var U=qe(t);a=xe(U,"TR",{});var z=qe(a);for(let Ie=0;Ie<p.length;Ie+=1)p[Ie].l(z);z.forEach(H),U.forEach(H),s=Go(N),o=xe(N,"TBODY",{});var ce=qe(o);for(let Ie=0;Ie<F.length;Ie+=1)F[Ie].l(ce);ce.forEach(H),N.forEach(H)},m(y,N){De(y,n,N),It(n,t),It(t,a);for(let U=0;U<p.length;U+=1)p[U]&&p[U].m(a,null);It(n,s),It(n,o);for(let U=0;U<F.length;U+=1)F[U]&&F[U].m(o,null);l=!0},p(y,[N]){if(N&7){f=ot(y[0].header);let U;for(U=0;U<f.length;U+=1){const z=Hc(y,f,U);p[U]?(p[U].p(z,N),ee(p[U],1)):(p[U]=Xc(z),p[U].c(),ee(p[U],1),p[U].m(a,null))}for(At(),U=f.length;U<p.length;U+=1)_(U);Nt()}if(N&7){b=ot(y[0].rows);let U;for(U=0;U<b.length;U+=1){const z=Qc(y,b,U);F[U]?(F[U].p(z,N),ee(F[U],1)):(F[U]=Kc(z),F[U].c(),ee(F[U],1),F[U].m(o,null))}for(At(),U=b.length;U<F.length;U+=1)C(U);Nt()}},i(y){if(!l){for(let N=0;N<f.length;N+=1)ee(p[N]);for(let N=0;N<b.length;N+=1)ee(F[N]);l=!0}},o(y){p=p.filter(Boolean);for(let N=0;N<p.length;N+=1)ae(p[N]);F=F.filter(Boolean);for(let N=0;N<F.length;N+=1)ae(F[N]);l=!1},d(y){y&&H(n),Fi(p,y),Fi(F,y)}}}function l1(r,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n;return r.$$set=l=>{"token"in l&&t(0,a=l.token),"options"in l&&t(1,s=l.options),"renderers"in l&&t(2,o=l.renderers)},[a,s,o]}class c1 extends Re{constructor(n){super(),Ue(this,n,l1,u1,we,{token:0,options:1,renderers:2})}}function f1(r){let n,t=r[0].text+"",a;return{c(){n=new xF(!1),a=sn(),this.h()},l(s){n=CF(s,!1),a=sn(),this.h()},h(){n.a=a},m(s,o){n.m(t,s,o),De(s,a,o)},p(s,[o]){o&1&&t!==(t=s[0].text+"")&&n.p(t)},i:Ke,o:Ke,d(s){s&&(H(a),n.d())}}}function p1(r,n,t){let{token:a}=n;const s=void 0,o=void 0;return r.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,s,o]}class d1 extends Re{constructor(n){super(),Ue(this,n,p1,f1,we,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function h1(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("p"),s&&s.c()},l(o){n=xe(o,"P",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function g1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class _1 extends Re{constructor(n){super(),Ue(this,n,g1,h1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function b1(r){let n,t,a,s;const o=r[4].default,l=Kn(o,r,r[3],null);return{c(){n=Oe("a"),l&&l.c(),this.h()},l(f){n=xe(f,"A",{href:!0,title:!0});var p=qe(n);l&&l.l(p),p.forEach(H),this.h()},h(){bn(n,"href",t=vi(r[0].href)?Di(r[1].baseUrl,r[0].href):r[0].href),bn(n,"title",a=r[0].title)},m(f,p){De(f,n,p),l&&l.m(n,null),s=!0},p(f,[p]){l&&l.p&&(!s||p&8)&&et(l,o,f,f[3],s?tt(o,f[3],p,null):nt(f[3]),null),(!s||p&3&&t!==(t=vi(f[0].href)?Di(f[1].baseUrl,f[0].href):f[0].href))&&bn(n,"href",t),(!s||p&1&&a!==(a=f[0].title))&&bn(n,"title",a)},i(f){s||(ee(l,f),s=!0)},o(f){ae(l,f),s=!1},d(f){f&&H(n),l&&l.d(f)}}}function m1(r,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:l}=n;const f=void 0;return r.$$set=p=>{"token"in p&&t(0,o=p.token),"options"in p&&t(1,l=p.options),"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class F1 extends Re{constructor(n){super(),Ue(this,n,m1,b1,we,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function D1(r){let n;const t=r[4].default,a=Kn(t,r,r[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&et(a,t,s,s[3],n?tt(t,s[3],o,null):nt(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){ae(a,s),n=!1},d(s){a&&a.d(s)}}}function v1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class E1 extends Re{constructor(n){super(),Ue(this,n,v1,D1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function S1(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("dfn"),s&&s.c()},l(o){n=xe(o,"DFN",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function T1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class y1 extends Re{constructor(n){super(),Ue(this,n,T1,S1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function I1(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("del"),s&&s.c()},l(o){n=xe(o,"DEL",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function A1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class N1 extends Re{constructor(n){super(),Ue(this,n,A1,I1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function w1(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("em"),s&&s.c()},l(o){n=xe(o,"EM",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function C1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class x1 extends Re{constructor(n){super(),Ue(this,n,C1,w1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function O1(r){let n;return{c(){n=Oe("hr")},l(t){n=xe(t,"HR",{})},m(t,a){De(t,n,a)},p:Ke,i:Ke,o:Ke,d(t){t&&H(n)}}}function k1(r,n,t){return[void 0,void 0,void 0]}class L1 extends Re{constructor(n){super(),Ue(this,n,k1,O1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function R1(r){let n,t;const a=r[4].default,s=Kn(a,r,r[3],null);return{c(){n=Oe("strong"),s&&s.c()},l(o){n=xe(o,"STRONG",{});var l=qe(n);s&&s.l(l),l.forEach(H)},m(o,l){De(o,n,l),s&&s.m(n,null),t=!0},p(o,[l]){s&&s.p&&(!t||l&8)&&et(s,a,o,o[3],t?tt(a,o[3],l,null):nt(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function U1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class B1 extends Re{constructor(n){super(),Ue(this,n,U1,R1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function P1(r){let n,t,a,s;return{c(){n=Oe("img"),this.h()},l(o){n=xe(o,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Gc(n.src,t=vi(r[0].href)?Di(r[1].baseUrl,r[0].href):r[0].href)||bn(n,"src",t),bn(n,"title",a=r[0].title),bn(n,"alt",s=r[0].text),bn(n,"class","markdown-image svelte-z38cge")},m(o,l){De(o,n,l)},p(o,[l]){l&3&&!Gc(n.src,t=vi(o[0].href)?Di(o[1].baseUrl,o[0].href):o[0].href)&&bn(n,"src",t),l&1&&a!==(a=o[0].title)&&bn(n,"title",a),l&1&&s!==(s=o[0].text)&&bn(n,"alt",s)},i:Ke,o:Ke,d(o){o&&H(n)}}}function $1(r,n,t){let{token:a}=n,{options:s}=n;const o=void 0;return r.$$set=l=>{"token"in l&&t(0,a=l.token),"options"in l&&t(1,s=l.options)},[a,s,o]}class M1 extends Re{constructor(n){super(),Ue(this,n,$1,P1,we,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function G1(r){let n;const t=r[4].default,a=Kn(t,r,r[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&et(a,t,s,s[3],n?tt(t,s[3],o,null):nt(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){ae(a,s),n=!1},d(s){a&&a.d(s)}}}function V1(r,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,a]}class ef extends Re{constructor(n){super(),Ue(this,n,V1,G1,we,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const j1=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,q1=Object.hasOwnProperty;class Lf{constructor(){this.occurrences,this.reset()}slug(n,t){const a=this;let s=z1(n,t===!0);const o=s;for(;q1.call(a.occurrences,s);)a.occurrences[o]++,s=o+"-"+a.occurrences[o];return a.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function z1(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(j1,"").replace(/ /g,"-"))}function jo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let br=jo();function Rf(r){br=r}const Uf=/[&<>"']/,Y1=new RegExp(Uf.source,"g"),Bf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,W1=new RegExp(Bf.source,"g"),Q1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nf=r=>Q1[r];function An(r,n){if(n){if(Uf.test(r))return r.replace(Y1,nf)}else if(Bf.test(r))return r.replace(W1,nf);return r}const J1=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function H1(r){return r.replace(J1,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const X1=/(^|[^\[])\^/g;function Fe(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const a={replace:(s,o)=>{let l=typeof o=="string"?o:o.source;return l=l.replace(X1,"$1"),t=t.replace(s,l),a},getRegex:()=>new RegExp(t,n)};return a}function tf(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const gi={exec:()=>null};function rf(r,n){const t=r.replace(/\|/g,(o,l,f)=>{let p=!1,_=l;for(;--_>=0&&f[_]==="\\";)p=!p;return p?"|":" |"}),a=t.split(/ \|/);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),n)if(a.length>n)a.splice(n);else for(;a.length<n;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(/\\\|/g,"|");return a}function li(r,n,t){const a=r.length;if(a===0)return"";let s=0;for(;s<a&&r.charAt(a-s-1)===n;)s++;return r.slice(0,a-s)}function Z1(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let a=0;a<r.length;a++)if(r[a]==="\\")a++;else if(r[a]===n[0])t++;else if(r[a]===n[1]&&(t--,t<0))return a;return-1}function sf(r,n,t,a){const s=n.href,o=n.title?An(n.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){a.state.inLink=!0;const f={type:"link",raw:t,href:s,title:o,text:l,tokens:a.inlineTokens(l)};return a.state.inLink=!1,f}return{type:"image",raw:t,href:s,title:o,text:An(l)}}function K1(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const a=t[1];return n.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[l]=o;return l.length>=a.length?s.slice(a.length):s}).join(`
`)}class Cs{constructor(n){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=n||br}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const a=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:li(a,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const a=t[0],s=K1(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let a=t[2].trim();if(/#$/.test(a)){const s=li(a,"#");(this.options.pedantic||!s||/ $/.test(s))&&(a=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:li(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let a=li(t[0],`
`).split(`
`),s="",o="";const l=[];for(;a.length>0;){let f=!1;const p=[];let _;for(_=0;_<a.length;_++)if(/^ {0,3}>/.test(a[_]))p.push(a[_]),f=!0;else if(!f)p.push(a[_]);else break;a=a.slice(_);const b=p.join(`
`),F=b.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${b}`:b,o=o?`${o}
${F}`:F;const C=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(F,l,!0),this.lexer.state.top=C,a.length===0)break;const y=l[l.length-1];if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const N=y,U=N.raw+`
`+a.join(`
`),z=this.blockquote(U);l[l.length-1]=z,s=s.substring(0,s.length-N.raw.length)+z.raw,o=o.substring(0,o.length-N.text.length)+z.text;break}else if((y==null?void 0:y.type)==="list"){const N=y,U=N.raw+`
`+a.join(`
`),z=this.list(U);l[l.length-1]=z,s=s.substring(0,s.length-y.raw.length)+z.raw,o=o.substring(0,o.length-N.raw.length)+z.raw,a=U.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let a=t[1].trim();const s=a.length>1,o={type:"list",raw:"",ordered:s,start:s?+a.slice(0,-1):"",loose:!1,items:[]};a=s?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=s?a:"[*+-]");const l=new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f=!1;for(;n;){let p=!1,_="",b="";if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;_=t[0],n=n.substring(_.length);let F=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),C=n.split(`
`,1)[0],y=!F.trim(),N=0;if(this.options.pedantic?(N=2,b=F.trimStart()):y?N=t[1].length+1:(N=t[2].search(/[^ ]/),N=N>4?1:N,b=F.slice(N),N+=t[1].length),y&&/^ *$/.test(C)&&(_+=C+`
`,n=n.substring(C.length+1),p=!0),!p){const ce=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ie=new RegExp(`^ {0,${Math.min(3,N-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),be=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:\`\`\`|~~~)`),ke=new RegExp(`^ {0,${Math.min(3,N-1)}}#`);for(;n;){const Be=n.split(`
`,1)[0];if(C=Be,this.options.pedantic&&(C=C.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),be.test(C)||ke.test(C)||ce.test(C)||Ie.test(n))break;if(C.search(/[^ ]/)>=N||!C.trim())b+=`
`+C.slice(N);else{if(y||F.search(/[^ ]/)>=4||be.test(F)||ke.test(F)||Ie.test(F))break;b+=`
`+C}!y&&!C.trim()&&(y=!0),_+=Be+`
`,n=n.substring(Be.length+1),F=C.slice(N)}}o.loose||(f?o.loose=!0:/\n *\n *$/.test(_)&&(f=!0));let U=null,z;this.options.gfm&&(U=/^\[[ xX]\] /.exec(b),U&&(z=U[0]!=="[ ] ",b=b.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!U,checked:z,loose:!1,text:b,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let p=0;p<o.items.length;p++)if(this.lexer.state.top=!1,o.items[p].tokens=this.lexer.blockTokens(o.items[p].text,[]),!o.loose){const _=o.items[p].tokens.filter(F=>F.type==="space"),b=_.length>0&&_.some(F=>/\n.*\n/.test(F.raw));o.loose=b}if(o.loose)for(let p=0;p<o.items.length;p++)o.items[p].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const a=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:a,raw:t[0],href:s,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const a=rf(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(a.length===s.length){for(const f of s)/^ *-+: *$/.test(f)?l.align.push("right"):/^ *:-+: *$/.test(f)?l.align.push("center"):/^ *:-+ *$/.test(f)?l.align.push("left"):l.align.push(null);for(let f=0;f<a.length;f++)l.header.push({text:a[f],tokens:this.lexer.inline(a[f]),header:!0,align:l.align[f]});for(const f of o)l.rows.push(rf(f,l.header.length).map((p,_)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:l.align[_]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const a=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:a,tokens:this.lexer.inline(a)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:An(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const l=li(a.slice(0,-1),"\\");if((a.length-l.length)%2===0)return}else{const l=Z1(t[2],"()");if(l>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],o=l[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(a)?s=s.slice(1):s=s.slice(1,-1)),sf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){const s=(a[2]||a[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){const l=a[0].charAt(0);return{type:"text",raw:l,text:l}}return sf(a,o,a[0],this.lexer)}}emStrong(n,t,a=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&a.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!a||this.rules.inline.punctuation.exec(a)){const l=[...s[0]].length-1;let f,p,_=l,b=0;const F=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(F.lastIndex=0,t=t.slice(-1*n.length+l);(s=F.exec(t))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(p=[...f].length,s[3]||s[4]){_+=p;continue}else if((s[5]||s[6])&&l%3&&!((l+p)%3)){b+=p;continue}if(_-=p,_>0)continue;p=Math.min(p,p+_+b);const C=[...s[0]][0].length,y=n.slice(0,l+s.index+C+p);if(Math.min(l,p)%2){const U=y.slice(1,-1);return{type:"em",raw:y,text:U,tokens:this.lexer.inlineTokens(U)}}const N=y.slice(2,-2);return{type:"strong",raw:y,text:N,tokens:this.lexer.inlineTokens(N)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let a=t[2].replace(/\n/g," ");const s=/[^ ]/.test(a),o=/^ /.test(a)&&/ $/.test(a);return s&&o&&(a=a.substring(1,a.length-1)),a=An(a,!0),{type:"codespan",raw:t[0],text:a}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let a,s;return t[2]==="@"?(a=An(t[1]),s="mailto:"+a):(a=An(t[1]),s=a),{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}url(n){var a;let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=An(t[0]),o="mailto:"+s;else{let l;do l=t[0],t[0]=((a=this.rules.inline._backpedal.exec(t[0]))==null?void 0:a[0])??"";while(l!==t[0]);s=An(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let a;return this.lexer.state.inRawBlock?a=t[0]:a=An(t[0]),{type:"text",raw:t[0],text:a}}}}const eD=/^(?: *(?:\n|$))+/,nD=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tD=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,yi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,rD=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pf=/(?:[*+-]|\d{1,9}[.)])/,$f=Fe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Pf).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),qo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,iD=/^[^\n]+/,zo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sD=Fe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",zo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),aD=Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pf).getRegex(),Gs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Yo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,oD=Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Yo).replace("tag",Gs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Mf=Fe(qo).replace("hr",yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),uD=Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Mf).getRegex(),Wo={blockquote:uD,code:nD,def:sD,fences:tD,heading:rD,hr:yi,html:oD,lheading:$f,list:aD,newline:eD,paragraph:Mf,table:gi,text:iD},af=Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),lD={...Wo,table:af,paragraph:Fe(qo).replace("hr",yi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",af).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex()},cD={...Wo,html:Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Yo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fe(qo).replace("hr",yi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$f).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fD=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Vf=/^( {2,}|\\)\n(?!\s*$)/,pD=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ii="\\p{P}\\p{S}",dD=Fe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ii).getRegex(),hD=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,gD=Fe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ii).getRegex(),_D=Fe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ii).getRegex(),bD=Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ii).getRegex(),mD=Fe(/\\([punct])/,"gu").replace(/punct/g,Ii).getRegex(),FD=Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),DD=Fe(Yo).replace("(?:-->|$)","-->").getRegex(),vD=Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",DD).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ED=Fe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",xs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jf=Fe(/^!?\[(label)\]\[(ref)\]/).replace("label",xs).replace("ref",zo).getRegex(),qf=Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref",zo).getRegex(),SD=Fe("reflink|nolink(?!\\()","g").replace("reflink",jf).replace("nolink",qf).getRegex(),Qo={_backpedal:gi,anyPunctuation:mD,autolink:FD,blockSkip:hD,br:Vf,code:fD,del:gi,emStrongLDelim:gD,emStrongRDelimAst:_D,emStrongRDelimUnd:bD,escape:Gf,link:ED,nolink:qf,punctuation:dD,reflink:jf,reflinkSearch:SD,tag:vD,text:pD,url:gi},TD={...Qo,link:Fe(/^!?\[(label)\]\((.*?)\)/).replace("label",xs).getRegex(),reflink:Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xs).getRegex()},Ao={...Qo,escape:Fe(Gf).replace("])","~|])").getRegex(),url:Fe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},yD={...Ao,br:Fe(Vf).replace("{2,}","*").getRegex(),text:Fe(Ao.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},vs={normal:Wo,gfm:lD,pedantic:cD},ci={normal:Qo,gfm:Ao,breaks:yD,pedantic:TD};class Hn{constructor(n){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||br,this.options.tokenizer=this.options.tokenizer||new Cs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:vs.normal,inline:ci.normal};this.options.pedantic?(t.block=vs.pedantic,t.inline=ci.pedantic):this.options.gfm&&(t.block=vs.gfm,this.options.breaks?t.inline=ci.breaks:t.inline=ci.gfm),this.tokenizer.rules=t}static get rules(){return{block:vs,inline:ci}}static lex(n,t){return new Hn(t).lex(n)}static lexInline(n,t){return new Hn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const a=this.inlineQueue[t];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],a=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,p,_)=>p+"    ".repeat(_.length));let s,o,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const p=n.slice(1);let _;this.options.extensions.startBlock.forEach(b=>{_=b.call({lexer:this},p),typeof _=="number"&&_>=0&&(f=Math.min(f,_))}),f<1/0&&f>=0&&(l=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){o=t[t.length-1],a&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),a=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let a,s,o,l=n,f,p,_;if(this.tokens.links){const b=Object.keys(this.tokens.links);if(b.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)b.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,f.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(_=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(b=>(a=b.call({lexer:this},n,t))?(n=n.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.escape(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(n)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.link(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(n,l,_)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(n)){n=n.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(n))){n=n.substring(a.raw.length),t.push(a);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let b=1/0;const F=n.slice(1);let C;this.options.extensions.startInline.forEach(y=>{C=y.call({lexer:this},F),typeof C=="number"&&C>=0&&(b=Math.min(b,C))}),b<1/0&&b>=0&&(o=n.substring(0,b+1))}if(a=this.tokenizer.inlineText(o)){n=n.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(_=a.raw.slice(-1)),p=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(n){const b="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return t}}class Os{constructor(n){Ee(this,"options");Ee(this,"parser");this.options=n||br}space(n){return""}code({text:n,lang:t,escaped:a}){var l;const s=(l=(t||"").match(/^\S*/))==null?void 0:l[0],o=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+An(s)+'">'+(a?o:An(o,!0))+`</code></pre>
`:"<pre><code>"+(a?o:An(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,a=n.start;let s="";for(let f=0;f<n.items.length;f++){const p=n.items[f];s+=this.listitem(p)}const o=t?"ol":"ul",l=t&&a!==1?' start="'+a+'"':"";return"<"+o+l+`>
`+s+"</"+o+`>
`}listitem(n){let t="";if(n.task){const a=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=a+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=a+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:a+" ",text:a+" "}):t+=a+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",a="";for(let o=0;o<n.header.length;o++)a+=this.tablecell(n.header[o]);t+=this.tablerow({text:a});let s="";for(let o=0;o<n.rows.length;o++){const l=n.rows[o];a="";for(let f=0;f<l.length;f++)a+=this.tablecell(l[f]);s+=this.tablerow({text:a})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),a=n.header?"th":"td";return(n.align?`<${a} align="${n.align}">`:`<${a}>`)+t+`</${a}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:a}){const s=this.parser.parseInline(a),o=tf(n);if(o===null)return s;n=o;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+s+"</a>",l}image({href:n,title:t,text:a}){const s=tf(n);if(s===null)return a;n=s;let o=`<img src="${n}" alt="${a}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Jo{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class ut{constructor(n){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=n||br,this.options.renderer=this.options.renderer||new Os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Jo}static parse(n,t){return new ut(t).parse(n)}static parseInline(n,t){return new ut(t).parseInline(n)}parse(n,t=!0){let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=o,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){a+=p||"";continue}}const l=o;switch(l.type){case"space":{a+=this.renderer.space(l);continue}case"hr":{a+=this.renderer.hr(l);continue}case"heading":{a+=this.renderer.heading(l);continue}case"code":{a+=this.renderer.code(l);continue}case"table":{a+=this.renderer.table(l);continue}case"blockquote":{a+=this.renderer.blockquote(l);continue}case"list":{a+=this.renderer.list(l);continue}case"html":{a+=this.renderer.html(l);continue}case"paragraph":{a+=this.renderer.paragraph(l);continue}case"text":{let f=l,p=this.renderer.text(f);for(;s+1<n.length&&n[s+1].type==="text";)f=n[++s],p+=`
`+this.renderer.text(f);t?a+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):a+=p;continue}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return a}parseInline(n,t){t=t||this.renderer;let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=this.options.extensions.renderers[o.type].call({parser:this},o);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){a+=f||"";continue}}const l=o;switch(l.type){case"escape":{a+=t.text(l);break}case"html":{a+=t.html(l);break}case"link":{a+=t.link(l);break}case"image":{a+=t.image(l);break}case"strong":{a+=t.strong(l);break}case"em":{a+=t.em(l);break}case"codespan":{a+=t.codespan(l);break}case"br":{a+=t.br(l);break}case"del":{a+=t.del(l);break}case"text":{a+=t.text(l);break}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return a}}class _i{constructor(n){Ee(this,"options");this.options=n||br}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Ee(_i,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var kt,zf,No,Yf;class ID{constructor(...n){$c(this,kt);Ee(this,"defaults",jo());Ee(this,"options",this.setOptions);Ee(this,"parse",ui(this,kt,No).call(this,Hn.lex,ut.parse));Ee(this,"parseInline",ui(this,kt,No).call(this,Hn.lexInline,ut.parseInline));Ee(this,"Parser",ut);Ee(this,"Renderer",Os);Ee(this,"TextRenderer",Jo);Ee(this,"Lexer",Hn);Ee(this,"Tokenizer",Cs);Ee(this,"Hooks",_i);this.use(...n)}walkTokens(n,t){var s,o;let a=[];for(const l of n)switch(a=a.concat(t.call(this,l)),l.type){case"table":{const f=l;for(const p of f.header)a=a.concat(this.walkTokens(p.tokens,t));for(const p of f.rows)for(const _ of p)a=a.concat(this.walkTokens(_.tokens,t));break}case"list":{const f=l;a=a.concat(this.walkTokens(f.items,t));break}default:{const f=l;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[f.type]?this.defaults.extensions.childTokens[f.type].forEach(p=>{const _=f[p].flat(1/0);a=a.concat(this.walkTokens(_,t))}):f.tokens&&(a=a.concat(this.walkTokens(f.tokens,t)))}}return a}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{const s={...a};if(s.async=this.defaults.async||s.async||!1,a.extensions&&(a.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const l=t.renderers[o.name];l?t.renderers[o.name]=function(...f){let p=o.renderer.apply(this,f);return p===!1&&(p=l.apply(this,f)),p}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[o.level];l?l.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),a.renderer){const o=this.defaults.renderer||new Os(this.defaults);for(const l in a.renderer){if(!(l in o))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const f=l;let p=a.renderer[f];a.useNewRenderer||(p=ui(this,kt,zf).call(this,p,f,o));const _=o[f];o[f]=(...b)=>{let F=p.apply(o,b);return F===!1&&(F=_.apply(o,b)),F||""}}s.renderer=o}if(a.tokenizer){const o=this.defaults.tokenizer||new Cs(this.defaults);for(const l in a.tokenizer){if(!(l in o))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const f=l,p=a.tokenizer[f],_=o[f];o[f]=(...b)=>{let F=p.apply(o,b);return F===!1&&(F=_.apply(o,b)),F}}s.tokenizer=o}if(a.hooks){const o=this.defaults.hooks||new _i;for(const l in a.hooks){if(!(l in o))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const f=l,p=a.hooks[f],_=o[f];_i.passThroughHooks.has(l)?o[f]=b=>{if(this.defaults.async)return Promise.resolve(p.call(o,b)).then(C=>_.call(o,C));const F=p.call(o,b);return _.call(o,F)}:o[f]=(...b)=>{let F=p.apply(o,b);return F===!1&&(F=_.apply(o,b)),F}}s.hooks=o}if(a.walkTokens){const o=this.defaults.walkTokens,l=a.walkTokens;s.walkTokens=function(f){let p=[];return p.push(l.call(this,f)),o&&(p=p.concat(o.call(this,f))),p}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Hn.lex(n,t??this.defaults)}parser(n,t){return ut.parse(n,t??this.defaults)}}kt=new WeakSet,zf=function(n,t,a){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,a.parser.parseInline(s.tokens),s.depth,H1(a.parser.parseInline(s.tokens,a.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let o="",l="";for(let p=0;p<s.header.length;p++)l+=this.tablecell({text:s.header[p].text,tokens:s.header[p].tokens,header:!0,align:s.align[p]});o+=this.tablerow({text:l});let f="";for(let p=0;p<s.rows.length;p++){const _=s.rows[p];l="";for(let b=0;b<_.length;b++)l+=this.tablecell({text:_[b].text,tokens:_[b].tokens,header:!1,align:s.align[b]});f+=this.tablerow({text:l})}return n.call(this,o,f)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=this.parser.parse(s.tokens);return n.call(this,o)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=s.ordered,l=s.start,f=s.loose;let p="";for(let _=0;_<s.items.length;_++){const b=s.items[_],F=b.checked,C=b.task;let y="";if(b.task){const N=this.checkbox({checked:!!F});f?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=N+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=N+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:N+" "}):y+=N+" "}y+=this.parser.parse(b.tokens,f),p+=this.listitem({type:"list_item",raw:y,text:y,task:C,checked:!!F,loose:f,tokens:b.tokens})}return n.call(this,p,o,l)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},No=function(n,t){return(a,s)=>{const o={...s},l={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const f=ui(this,kt,Yf).call(this,!!l.silent,!!l.async);if(typeof a>"u"||a===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(a):a).then(p=>n(p,l)).then(p=>l.hooks?l.hooks.processAllTokens(p):p).then(p=>l.walkTokens?Promise.all(this.walkTokens(p,l.walkTokens)).then(()=>p):p).then(p=>t(p,l)).then(p=>l.hooks?l.hooks.postprocess(p):p).catch(f);try{l.hooks&&(a=l.hooks.preprocess(a));let p=n(a,l);l.hooks&&(p=l.hooks.processAllTokens(p)),l.walkTokens&&this.walkTokens(p,l.walkTokens);let _=t(p,l);return l.hooks&&(_=l.hooks.postprocess(_)),_}catch(p){return f(p)}}},Yf=function(n,t){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+An(a.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(a);throw a}};const pr=new ID;function me(r,n){return pr.parse(r,n)}me.options=me.setOptions=function(r){return pr.setOptions(r),me.defaults=pr.defaults,Rf(me.defaults),me};me.getDefaults=jo;me.defaults=br;me.use=function(...r){return pr.use(...r),me.defaults=pr.defaults,Rf(me.defaults),me};me.walkTokens=function(r,n){return pr.walkTokens(r,n)};me.parseInline=pr.parseInline;me.Parser=ut;me.parser=ut.parse;me.Renderer=Os;me.TextRenderer=Jo;me.Lexer=Hn;me.lexer=Hn.lex;me.Tokenizer=Cs;me.Hooks=_i;me.parse=me;me.options;me.setOptions;me.use;me.walkTokens;me.parseInline;ut.parse;Hn.lex;function AD(r){return new Hn().lex(r)}const ND=()=>({heading:jF,blockquote:YF,list:JF,list_item:ZF,br:n1,code:i1,codespan:o1,table:c1,html:d1,paragraph:_1,link:F1,text:E1,def:y1,del:N1,em:x1,hr:L1,strong:B1,image:M1,space:ef,escape:ef}),wD=()=>({baseUrl:"/",slugger:new Lf});function CD(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},OF(()=>{console.warn=r})}function xD(r){let n,t;return n=new Ms({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(a){_r(n.$$.fragment,a)},m(a,s){Qt(n,a,s),t=!0},p(a,[s]){const o={};s&1&&(o.tokens=a[0]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Yt(n,a)}}}function OD(r,n,t){CD();let{source:a}=n,{options:s={}}=n,{renderers:o={}}=n,l,f,p;return r.$$set=_=>{"source"in _&&t(3,a=_.source),"options"in _&&t(4,s=_.options),"renderers"in _&&t(5,o=_.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=AD(a)),t(1,f={...ND(),...o}),t(2,p={...wD(),...s}))},[l,f,p,a,s,o]}class LS extends Re{constructor(n){super(),Ue(this,n,OD,xD,we,{source:3,options:4,renderers:5})}}const Ai={joinUrlPaths:Di,isRelative:vi,generatePathSegment:kf};var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kD(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ks={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ks.exports;(function(r,n){(function(){var t,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",_=500,b="__lodash_placeholder__",F=1,C=2,y=4,N=1,U=2,z=1,ce=2,Ie=4,be=8,ke=16,Be=32,pn=64,en=128,dt=256,k=512,X=30,an="...",Lt=800,Xt=16,Ci=1,Fr=2,xi=3,Zt=1/0,ht=9007199254740991,Dr=17976931348623157e292,Kt=NaN,wn=4294967295,I=wn-1,V=wn>>>1,P=[["ary",en],["bind",z],["bindKey",ce],["curry",be],["curryRight",ke],["flip",k],["partial",Be],["partialRight",pn],["rearg",dt]],M="[object Arguments]",de="[object Array]",Pe="[object AsyncFunction]",he="[object Boolean]",Cn="[object Date]",Gr="[object DOMException]",Rt="[object Error]",nn="[object Function]",ou="[object GeneratorFunction]",Vn="[object Map]",Vr="[object Number]",qp="[object Null]",gt="[object Object]",uu="[object Promise]",zp="[object Proxy]",jr="[object RegExp]",jn="[object Set]",qr="[object String]",Oi="[object Symbol]",Yp="[object Undefined]",zr="[object WeakMap]",Wp="[object WeakSet]",Yr="[object ArrayBuffer]",vr="[object DataView]",Xs="[object Float32Array]",Zs="[object Float64Array]",Ks="[object Int8Array]",ea="[object Int16Array]",na="[object Int32Array]",ta="[object Uint8Array]",ra="[object Uint8ClampedArray]",ia="[object Uint16Array]",sa="[object Uint32Array]",Qp=/\b__p \+= '';/g,Jp=/\b(__p \+=) '' \+/g,Hp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,lu=/&(?:amp|lt|gt|quot|#39);/g,cu=/[&<>"']/g,Xp=RegExp(lu.source),Zp=RegExp(cu.source),Kp=/<%-([\s\S]+?)%>/g,ed=/<%([\s\S]+?)%>/g,fu=/<%=([\s\S]+?)%>/g,nd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,td=/^\w*$/,rd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aa=/[\\^$.*+?()[\]{}|]/g,id=RegExp(aa.source),oa=/^\s+/,sd=/\s/,ad=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,od=/\{\n\/\* \[wrapped with (.+)\] \*/,ud=/,? & /,ld=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,cd=/[()=,{}\[\]\/\s]/,fd=/\\(\\)?/g,pd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pu=/\w*$/,dd=/^[-+]0x[0-9a-f]+$/i,hd=/^0b[01]+$/i,gd=/^\[object .+?Constructor\]$/,_d=/^0o[0-7]+$/i,bd=/^(?:0|[1-9]\d*)$/,md=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ki=/($^)/,Fd=/['\n\r\u2028\u2029\\]/g,Li="\\ud800-\\udfff",Dd="\\u0300-\\u036f",vd="\\ufe20-\\ufe2f",Ed="\\u20d0-\\u20ff",du=Dd+vd+Ed,hu="\\u2700-\\u27bf",gu="a-z\\xdf-\\xf6\\xf8-\\xff",Sd="\\xac\\xb1\\xd7\\xf7",Td="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yd="\\u2000-\\u206f",Id=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_u="A-Z\\xc0-\\xd6\\xd8-\\xde",bu="\\ufe0e\\ufe0f",mu=Sd+Td+yd+Id,ua="['’]",Ad="["+Li+"]",Fu="["+mu+"]",Ri="["+du+"]",Du="\\d+",Nd="["+hu+"]",vu="["+gu+"]",Eu="[^"+Li+mu+Du+hu+gu+_u+"]",la="\\ud83c[\\udffb-\\udfff]",wd="(?:"+Ri+"|"+la+")",Su="[^"+Li+"]",ca="(?:\\ud83c[\\udde6-\\uddff]){2}",fa="[\\ud800-\\udbff][\\udc00-\\udfff]",Er="["+_u+"]",Tu="\\u200d",yu="(?:"+vu+"|"+Eu+")",Cd="(?:"+Er+"|"+Eu+")",Iu="(?:"+ua+"(?:d|ll|m|re|s|t|ve))?",Au="(?:"+ua+"(?:D|LL|M|RE|S|T|VE))?",Nu=wd+"?",wu="["+bu+"]?",xd="(?:"+Tu+"(?:"+[Su,ca,fa].join("|")+")"+wu+Nu+")*",Od="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Cu=wu+Nu+xd,Ld="(?:"+[Nd,ca,fa].join("|")+")"+Cu,Rd="(?:"+[Su+Ri+"?",Ri,ca,fa,Ad].join("|")+")",Ud=RegExp(ua,"g"),Bd=RegExp(Ri,"g"),pa=RegExp(la+"(?="+la+")|"+Rd+Cu,"g"),Pd=RegExp([Er+"?"+vu+"+"+Iu+"(?="+[Fu,Er,"$"].join("|")+")",Cd+"+"+Au+"(?="+[Fu,Er+yu,"$"].join("|")+")",Er+"?"+yu+"+"+Iu,Er+"+"+Au,kd,Od,Du,Ld].join("|"),"g"),$d=RegExp("["+Tu+Li+du+bu+"]"),Md=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vd=-1,Ae={};Ae[Xs]=Ae[Zs]=Ae[Ks]=Ae[ea]=Ae[na]=Ae[ta]=Ae[ra]=Ae[ia]=Ae[sa]=!0,Ae[M]=Ae[de]=Ae[Yr]=Ae[he]=Ae[vr]=Ae[Cn]=Ae[Rt]=Ae[nn]=Ae[Vn]=Ae[Vr]=Ae[gt]=Ae[jr]=Ae[jn]=Ae[qr]=Ae[zr]=!1;var Te={};Te[M]=Te[de]=Te[Yr]=Te[vr]=Te[he]=Te[Cn]=Te[Xs]=Te[Zs]=Te[Ks]=Te[ea]=Te[na]=Te[Vn]=Te[Vr]=Te[gt]=Te[jr]=Te[jn]=Te[qr]=Te[Oi]=Te[ta]=Te[ra]=Te[ia]=Te[sa]=!0,Te[Rt]=Te[nn]=Te[zr]=!1;var jd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},qd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wd=parseFloat,Qd=parseInt,xu=typeof fi=="object"&&fi&&fi.Object===Object&&fi,Jd=typeof self=="object"&&self&&self.Object===Object&&self,Xe=xu||Jd||Function("return this")(),da=n&&!n.nodeType&&n,er=da&&!0&&r&&!r.nodeType&&r,Ou=er&&er.exports===da,ha=Ou&&xu.process,xn=function(){try{var E=er&&er.require&&er.require("util").types;return E||ha&&ha.binding&&ha.binding("util")}catch{}}(),ku=xn&&xn.isArrayBuffer,Lu=xn&&xn.isDate,Ru=xn&&xn.isMap,Uu=xn&&xn.isRegExp,Bu=xn&&xn.isSet,Pu=xn&&xn.isTypedArray;function Dn(E,A,T){switch(T.length){case 0:return E.call(A);case 1:return E.call(A,T[0]);case 2:return E.call(A,T[0],T[1]);case 3:return E.call(A,T[0],T[1],T[2])}return E.apply(A,T)}function Hd(E,A,T,G){for(var Z=-1,pe=E==null?0:E.length;++Z<pe;){var Ye=E[Z];A(G,Ye,T(Ye),E)}return G}function On(E,A){for(var T=-1,G=E==null?0:E.length;++T<G&&A(E[T],T,E)!==!1;);return E}function Xd(E,A){for(var T=E==null?0:E.length;T--&&A(E[T],T,E)!==!1;);return E}function $u(E,A){for(var T=-1,G=E==null?0:E.length;++T<G;)if(!A(E[T],T,E))return!1;return!0}function Ut(E,A){for(var T=-1,G=E==null?0:E.length,Z=0,pe=[];++T<G;){var Ye=E[T];A(Ye,T,E)&&(pe[Z++]=Ye)}return pe}function Ui(E,A){var T=E==null?0:E.length;return!!T&&Sr(E,A,0)>-1}function ga(E,A,T){for(var G=-1,Z=E==null?0:E.length;++G<Z;)if(T(A,E[G]))return!0;return!1}function Ne(E,A){for(var T=-1,G=E==null?0:E.length,Z=Array(G);++T<G;)Z[T]=A(E[T],T,E);return Z}function Bt(E,A){for(var T=-1,G=A.length,Z=E.length;++T<G;)E[Z+T]=A[T];return E}function _a(E,A,T,G){var Z=-1,pe=E==null?0:E.length;for(G&&pe&&(T=E[++Z]);++Z<pe;)T=A(T,E[Z],Z,E);return T}function Zd(E,A,T,G){var Z=E==null?0:E.length;for(G&&Z&&(T=E[--Z]);Z--;)T=A(T,E[Z],Z,E);return T}function ba(E,A){for(var T=-1,G=E==null?0:E.length;++T<G;)if(A(E[T],T,E))return!0;return!1}var Kd=ma("length");function eh(E){return E.split("")}function nh(E){return E.match(ld)||[]}function Mu(E,A,T){var G;return T(E,function(Z,pe,Ye){if(A(Z,pe,Ye))return G=pe,!1}),G}function Bi(E,A,T,G){for(var Z=E.length,pe=T+(G?1:-1);G?pe--:++pe<Z;)if(A(E[pe],pe,E))return pe;return-1}function Sr(E,A,T){return A===A?dh(E,A,T):Bi(E,Gu,T)}function th(E,A,T,G){for(var Z=T-1,pe=E.length;++Z<pe;)if(G(E[Z],A))return Z;return-1}function Gu(E){return E!==E}function Vu(E,A){var T=E==null?0:E.length;return T?Da(E,A)/T:Kt}function ma(E){return function(A){return A==null?t:A[E]}}function Fa(E){return function(A){return E==null?t:E[A]}}function ju(E,A,T,G,Z){return Z(E,function(pe,Ye,ve){T=G?(G=!1,pe):A(T,pe,Ye,ve)}),T}function rh(E,A){var T=E.length;for(E.sort(A);T--;)E[T]=E[T].value;return E}function Da(E,A){for(var T,G=-1,Z=E.length;++G<Z;){var pe=A(E[G]);pe!==t&&(T=T===t?pe:T+pe)}return T}function va(E,A){for(var T=-1,G=Array(E);++T<E;)G[T]=A(T);return G}function ih(E,A){return Ne(A,function(T){return[T,E[T]]})}function qu(E){return E&&E.slice(0,Qu(E)+1).replace(oa,"")}function vn(E){return function(A){return E(A)}}function Ea(E,A){return Ne(A,function(T){return E[T]})}function Wr(E,A){return E.has(A)}function zu(E,A){for(var T=-1,G=E.length;++T<G&&Sr(A,E[T],0)>-1;);return T}function Yu(E,A){for(var T=E.length;T--&&Sr(A,E[T],0)>-1;);return T}function sh(E,A){for(var T=E.length,G=0;T--;)E[T]===A&&++G;return G}var ah=Fa(jd),oh=Fa(qd);function uh(E){return"\\"+Yd[E]}function lh(E,A){return E==null?t:E[A]}function Tr(E){return $d.test(E)}function ch(E){return Md.test(E)}function fh(E){for(var A,T=[];!(A=E.next()).done;)T.push(A.value);return T}function Sa(E){var A=-1,T=Array(E.size);return E.forEach(function(G,Z){T[++A]=[Z,G]}),T}function Wu(E,A){return function(T){return E(A(T))}}function Pt(E,A){for(var T=-1,G=E.length,Z=0,pe=[];++T<G;){var Ye=E[T];(Ye===A||Ye===b)&&(E[T]=b,pe[Z++]=T)}return pe}function Pi(E){var A=-1,T=Array(E.size);return E.forEach(function(G){T[++A]=G}),T}function ph(E){var A=-1,T=Array(E.size);return E.forEach(function(G){T[++A]=[G,G]}),T}function dh(E,A,T){for(var G=T-1,Z=E.length;++G<Z;)if(E[G]===A)return G;return-1}function hh(E,A,T){for(var G=T+1;G--;)if(E[G]===A)return G;return G}function yr(E){return Tr(E)?_h(E):Kd(E)}function qn(E){return Tr(E)?bh(E):eh(E)}function Qu(E){for(var A=E.length;A--&&sd.test(E.charAt(A)););return A}var gh=Fa(zd);function _h(E){for(var A=pa.lastIndex=0;pa.test(E);)++A;return A}function bh(E){return E.match(pa)||[]}function mh(E){return E.match(Pd)||[]}var Fh=function E(A){A=A==null?Xe:Ir.defaults(Xe.Object(),A,Ir.pick(Xe,Gd));var T=A.Array,G=A.Date,Z=A.Error,pe=A.Function,Ye=A.Math,ve=A.Object,Ta=A.RegExp,Dh=A.String,kn=A.TypeError,$i=T.prototype,vh=pe.prototype,Ar=ve.prototype,Mi=A["__core-js_shared__"],Gi=vh.toString,_e=Ar.hasOwnProperty,Eh=0,Ju=function(){var e=/[^.]+$/.exec(Mi&&Mi.keys&&Mi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Vi=Ar.toString,Sh=Gi.call(ve),Th=Xe._,yh=Ta("^"+Gi.call(_e).replace(aa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ji=Ou?A.Buffer:t,$t=A.Symbol,qi=A.Uint8Array,Hu=ji?ji.allocUnsafe:t,zi=Wu(ve.getPrototypeOf,ve),Xu=ve.create,Zu=Ar.propertyIsEnumerable,Yi=$i.splice,Ku=$t?$t.isConcatSpreadable:t,Qr=$t?$t.iterator:t,nr=$t?$t.toStringTag:t,Wi=function(){try{var e=ar(ve,"defineProperty");return e({},"",{}),e}catch{}}(),Ih=A.clearTimeout!==Xe.clearTimeout&&A.clearTimeout,Ah=G&&G.now!==Xe.Date.now&&G.now,Nh=A.setTimeout!==Xe.setTimeout&&A.setTimeout,Qi=Ye.ceil,Ji=Ye.floor,ya=ve.getOwnPropertySymbols,wh=ji?ji.isBuffer:t,el=A.isFinite,Ch=$i.join,xh=Wu(ve.keys,ve),We=Ye.max,tn=Ye.min,Oh=G.now,kh=A.parseInt,nl=Ye.random,Lh=$i.reverse,Ia=ar(A,"DataView"),Jr=ar(A,"Map"),Aa=ar(A,"Promise"),Nr=ar(A,"Set"),Hr=ar(A,"WeakMap"),Xr=ar(ve,"create"),Hi=Hr&&new Hr,wr={},Rh=or(Ia),Uh=or(Jr),Bh=or(Aa),Ph=or(Nr),$h=or(Hr),Xi=$t?$t.prototype:t,Zr=Xi?Xi.valueOf:t,tl=Xi?Xi.toString:t;function h(e){if(Le(e)&&!K(e)&&!(e instanceof oe)){if(e instanceof Ln)return e;if(_e.call(e,"__wrapped__"))return rc(e)}return new Ln(e)}var Cr=function(){function e(){}return function(i){if(!Ce(i))return{};if(Xu)return Xu(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Zi(){}function Ln(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}h.templateSettings={escape:Kp,evaluate:ed,interpolate:fu,variable:"",imports:{_:h}},h.prototype=Zi.prototype,h.prototype.constructor=h,Ln.prototype=Cr(Zi.prototype),Ln.prototype.constructor=Ln;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=wn,this.__views__=[]}function Mh(){var e=new oe(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function Gh(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Vh(){var e=this.__wrapped__.value(),i=this.__dir__,u=K(e),c=i<0,d=u?e.length:0,g=e_(0,d,this.__views__),m=g.start,D=g.end,S=D-m,w=c?D:m-1,x=this.__iteratees__,L=x.length,B=0,q=tn(S,this.__takeCount__);if(!u||!c&&d==S&&q==S)return Il(e,this.__actions__);var Q=[];e:for(;S--&&B<q;){w+=i;for(var te=-1,J=e[w];++te<L;){var se=x[te],le=se.iteratee,Tn=se.type,ln=le(J);if(Tn==Fr)J=ln;else if(!ln){if(Tn==Ci)continue e;break e}}Q[B++]=J}return Q}oe.prototype=Cr(Zi.prototype),oe.prototype.constructor=oe;function tr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function jh(){this.__data__=Xr?Xr(null):{},this.size=0}function qh(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function zh(e){var i=this.__data__;if(Xr){var u=i[e];return u===p?t:u}return _e.call(i,e)?i[e]:t}function Yh(e){var i=this.__data__;return Xr?i[e]!==t:_e.call(i,e)}function Wh(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Xr&&i===t?p:i,this}tr.prototype.clear=jh,tr.prototype.delete=qh,tr.prototype.get=zh,tr.prototype.has=Yh,tr.prototype.set=Wh;function _t(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Qh(){this.__data__=[],this.size=0}function Jh(e){var i=this.__data__,u=Ki(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():Yi.call(i,u,1),--this.size,!0}function Hh(e){var i=this.__data__,u=Ki(i,e);return u<0?t:i[u][1]}function Xh(e){return Ki(this.__data__,e)>-1}function Zh(e,i){var u=this.__data__,c=Ki(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}_t.prototype.clear=Qh,_t.prototype.delete=Jh,_t.prototype.get=Hh,_t.prototype.has=Xh,_t.prototype.set=Zh;function bt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Kh(){this.size=0,this.__data__={hash:new tr,map:new(Jr||_t),string:new tr}}function eg(e){var i=fs(this,e).delete(e);return this.size-=i?1:0,i}function ng(e){return fs(this,e).get(e)}function tg(e){return fs(this,e).has(e)}function rg(e,i){var u=fs(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}bt.prototype.clear=Kh,bt.prototype.delete=eg,bt.prototype.get=ng,bt.prototype.has=tg,bt.prototype.set=rg;function rr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new bt;++i<u;)this.add(e[i])}function ig(e){return this.__data__.set(e,p),this}function sg(e){return this.__data__.has(e)}rr.prototype.add=rr.prototype.push=ig,rr.prototype.has=sg;function zn(e){var i=this.__data__=new _t(e);this.size=i.size}function ag(){this.__data__=new _t,this.size=0}function og(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function ug(e){return this.__data__.get(e)}function lg(e){return this.__data__.has(e)}function cg(e,i){var u=this.__data__;if(u instanceof _t){var c=u.__data__;if(!Jr||c.length<s-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new bt(c)}return u.set(e,i),this.size=u.size,this}zn.prototype.clear=ag,zn.prototype.delete=og,zn.prototype.get=ug,zn.prototype.has=lg,zn.prototype.set=cg;function rl(e,i){var u=K(e),c=!u&&ur(e),d=!u&&!c&&qt(e),g=!u&&!c&&!d&&Lr(e),m=u||c||d||g,D=m?va(e.length,Dh):[],S=D.length;for(var w in e)(i||_e.call(e,w))&&!(m&&(w=="length"||d&&(w=="offset"||w=="parent")||g&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||vt(w,S)))&&D.push(w);return D}function il(e){var i=e.length;return i?e[Pa(0,i-1)]:t}function fg(e,i){return ps(dn(e),ir(i,0,e.length))}function pg(e){return ps(dn(e))}function Na(e,i,u){(u!==t&&!Yn(e[i],u)||u===t&&!(i in e))&&mt(e,i,u)}function Kr(e,i,u){var c=e[i];(!(_e.call(e,i)&&Yn(c,u))||u===t&&!(i in e))&&mt(e,i,u)}function Ki(e,i){for(var u=e.length;u--;)if(Yn(e[u][0],i))return u;return-1}function dg(e,i,u,c){return Mt(e,function(d,g,m){i(c,d,u(d),m)}),c}function sl(e,i){return e&&st(i,Qe(i),e)}function hg(e,i){return e&&st(i,gn(i),e)}function mt(e,i,u){i=="__proto__"&&Wi?Wi(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function wa(e,i){for(var u=-1,c=i.length,d=T(c),g=e==null;++u<c;)d[u]=g?t:lo(e,i[u]);return d}function ir(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Rn(e,i,u,c,d,g){var m,D=i&F,S=i&C,w=i&y;if(u&&(m=d?u(e,c,d,g):u(e)),m!==t)return m;if(!Ce(e))return e;var x=K(e);if(x){if(m=t_(e),!D)return dn(e,m)}else{var L=rn(e),B=L==nn||L==ou;if(qt(e))return wl(e,D);if(L==gt||L==M||B&&!d){if(m=S||B?{}:Ql(e),!D)return S?zg(e,hg(m,e)):qg(e,sl(m,e))}else{if(!Te[L])return d?e:{};m=r_(e,L,D)}}g||(g=new zn);var q=g.get(e);if(q)return q;g.set(e,m),Sc(e)?e.forEach(function(J){m.add(Rn(J,i,u,J,e,g))}):vc(e)&&e.forEach(function(J,se){m.set(se,Rn(J,i,u,se,e,g))});var Q=w?S?Ja:Qa:S?gn:Qe,te=x?t:Q(e);return On(te||e,function(J,se){te&&(se=J,J=e[se]),Kr(m,se,Rn(J,i,u,se,e,g))}),m}function gg(e){var i=Qe(e);return function(u){return al(u,e,i)}}function al(e,i,u){var c=u.length;if(e==null)return!c;for(e=ve(e);c--;){var d=u[c],g=i[d],m=e[d];if(m===t&&!(d in e)||!g(m))return!1}return!0}function ol(e,i,u){if(typeof e!="function")throw new kn(l);return ai(function(){e.apply(t,u)},i)}function ei(e,i,u,c){var d=-1,g=Ui,m=!0,D=e.length,S=[],w=i.length;if(!D)return S;u&&(i=Ne(i,vn(u))),c?(g=ga,m=!1):i.length>=s&&(g=Wr,m=!1,i=new rr(i));e:for(;++d<D;){var x=e[d],L=u==null?x:u(x);if(x=c||x!==0?x:0,m&&L===L){for(var B=w;B--;)if(i[B]===L)continue e;S.push(x)}else g(i,L,c)||S.push(x)}return S}var Mt=Ll(it),ul=Ll(xa,!0);function _g(e,i){var u=!0;return Mt(e,function(c,d,g){return u=!!i(c,d,g),u}),u}function es(e,i,u){for(var c=-1,d=e.length;++c<d;){var g=e[c],m=i(g);if(m!=null&&(D===t?m===m&&!Sn(m):u(m,D)))var D=m,S=g}return S}function bg(e,i,u,c){var d=e.length;for(u=ne(u),u<0&&(u=-u>d?0:d+u),c=c===t||c>d?d:ne(c),c<0&&(c+=d),c=u>c?0:yc(c);u<c;)e[u++]=i;return e}function ll(e,i){var u=[];return Mt(e,function(c,d,g){i(c,d,g)&&u.push(c)}),u}function Ze(e,i,u,c,d){var g=-1,m=e.length;for(u||(u=s_),d||(d=[]);++g<m;){var D=e[g];i>0&&u(D)?i>1?Ze(D,i-1,u,c,d):Bt(d,D):c||(d[d.length]=D)}return d}var Ca=Rl(),cl=Rl(!0);function it(e,i){return e&&Ca(e,i,Qe)}function xa(e,i){return e&&cl(e,i,Qe)}function ns(e,i){return Ut(i,function(u){return Et(e[u])})}function sr(e,i){i=Vt(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[at(i[u++])];return u&&u==c?e:t}function fl(e,i,u){var c=i(e);return K(e)?c:Bt(c,u(e))}function on(e){return e==null?e===t?Yp:qp:nr&&nr in ve(e)?Kg(e):p_(e)}function Oa(e,i){return e>i}function mg(e,i){return e!=null&&_e.call(e,i)}function Fg(e,i){return e!=null&&i in ve(e)}function Dg(e,i,u){return e>=tn(i,u)&&e<We(i,u)}function ka(e,i,u){for(var c=u?ga:Ui,d=e[0].length,g=e.length,m=g,D=T(g),S=1/0,w=[];m--;){var x=e[m];m&&i&&(x=Ne(x,vn(i))),S=tn(x.length,S),D[m]=!u&&(i||d>=120&&x.length>=120)?new rr(m&&x):t}x=e[0];var L=-1,B=D[0];e:for(;++L<d&&w.length<S;){var q=x[L],Q=i?i(q):q;if(q=u||q!==0?q:0,!(B?Wr(B,Q):c(w,Q,u))){for(m=g;--m;){var te=D[m];if(!(te?Wr(te,Q):c(e[m],Q,u)))continue e}B&&B.push(Q),w.push(q)}}return w}function vg(e,i,u,c){return it(e,function(d,g,m){i(c,u(d),g,m)}),c}function ni(e,i,u){i=Vt(i,e),e=Zl(e,i);var c=e==null?e:e[at(Bn(i))];return c==null?t:Dn(c,e,u)}function pl(e){return Le(e)&&on(e)==M}function Eg(e){return Le(e)&&on(e)==Yr}function Sg(e){return Le(e)&&on(e)==Cn}function ti(e,i,u,c,d){return e===i?!0:e==null||i==null||!Le(e)&&!Le(i)?e!==e&&i!==i:Tg(e,i,u,c,ti,d)}function Tg(e,i,u,c,d,g){var m=K(e),D=K(i),S=m?de:rn(e),w=D?de:rn(i);S=S==M?gt:S,w=w==M?gt:w;var x=S==gt,L=w==gt,B=S==w;if(B&&qt(e)){if(!qt(i))return!1;m=!0,x=!1}if(B&&!x)return g||(g=new zn),m||Lr(e)?zl(e,i,u,c,d,g):Xg(e,i,S,u,c,d,g);if(!(u&N)){var q=x&&_e.call(e,"__wrapped__"),Q=L&&_e.call(i,"__wrapped__");if(q||Q){var te=q?e.value():e,J=Q?i.value():i;return g||(g=new zn),d(te,J,u,c,g)}}return B?(g||(g=new zn),Zg(e,i,u,c,d,g)):!1}function yg(e){return Le(e)&&rn(e)==Vn}function La(e,i,u,c){var d=u.length,g=d,m=!c;if(e==null)return!g;for(e=ve(e);d--;){var D=u[d];if(m&&D[2]?D[1]!==e[D[0]]:!(D[0]in e))return!1}for(;++d<g;){D=u[d];var S=D[0],w=e[S],x=D[1];if(m&&D[2]){if(w===t&&!(S in e))return!1}else{var L=new zn;if(c)var B=c(w,x,S,e,i,L);if(!(B===t?ti(x,w,N|U,c,L):B))return!1}}return!0}function dl(e){if(!Ce(e)||o_(e))return!1;var i=Et(e)?yh:gd;return i.test(or(e))}function Ig(e){return Le(e)&&on(e)==jr}function Ag(e){return Le(e)&&rn(e)==jn}function Ng(e){return Le(e)&&ms(e.length)&&!!Ae[on(e)]}function hl(e){return typeof e=="function"?e:e==null?_n:typeof e=="object"?K(e)?bl(e[0],e[1]):_l(e):Uc(e)}function Ra(e){if(!si(e))return xh(e);var i=[];for(var u in ve(e))_e.call(e,u)&&u!="constructor"&&i.push(u);return i}function wg(e){if(!Ce(e))return f_(e);var i=si(e),u=[];for(var c in e)c=="constructor"&&(i||!_e.call(e,c))||u.push(c);return u}function Ua(e,i){return e<i}function gl(e,i){var u=-1,c=hn(e)?T(e.length):[];return Mt(e,function(d,g,m){c[++u]=i(d,g,m)}),c}function _l(e){var i=Xa(e);return i.length==1&&i[0][2]?Hl(i[0][0],i[0][1]):function(u){return u===e||La(u,e,i)}}function bl(e,i){return Ka(e)&&Jl(i)?Hl(at(e),i):function(u){var c=lo(u,e);return c===t&&c===i?co(u,e):ti(i,c,N|U)}}function ts(e,i,u,c,d){e!==i&&Ca(i,function(g,m){if(d||(d=new zn),Ce(g))Cg(e,i,m,u,ts,c,d);else{var D=c?c(no(e,m),g,m+"",e,i,d):t;D===t&&(D=g),Na(e,m,D)}},gn)}function Cg(e,i,u,c,d,g,m){var D=no(e,u),S=no(i,u),w=m.get(S);if(w){Na(e,u,w);return}var x=g?g(D,S,u+"",e,i,m):t,L=x===t;if(L){var B=K(S),q=!B&&qt(S),Q=!B&&!q&&Lr(S);x=S,B||q||Q?K(D)?x=D:$e(D)?x=dn(D):q?(L=!1,x=wl(S,!0)):Q?(L=!1,x=Cl(S,!0)):x=[]:oi(S)||ur(S)?(x=D,ur(D)?x=Ic(D):(!Ce(D)||Et(D))&&(x=Ql(S))):L=!1}L&&(m.set(S,x),d(x,S,c,g,m),m.delete(S)),Na(e,u,x)}function ml(e,i){var u=e.length;if(u)return i+=i<0?u:0,vt(i,u)?e[i]:t}function Fl(e,i,u){i.length?i=Ne(i,function(g){return K(g)?function(m){return sr(m,g.length===1?g[0]:g)}:g}):i=[_n];var c=-1;i=Ne(i,vn(W()));var d=gl(e,function(g,m,D){var S=Ne(i,function(w){return w(g)});return{criteria:S,index:++c,value:g}});return rh(d,function(g,m){return jg(g,m,u)})}function xg(e,i){return Dl(e,i,function(u,c){return co(e,c)})}function Dl(e,i,u){for(var c=-1,d=i.length,g={};++c<d;){var m=i[c],D=sr(e,m);u(D,m)&&ri(g,Vt(m,e),D)}return g}function Og(e){return function(i){return sr(i,e)}}function Ba(e,i,u,c){var d=c?th:Sr,g=-1,m=i.length,D=e;for(e===i&&(i=dn(i)),u&&(D=Ne(e,vn(u)));++g<m;)for(var S=0,w=i[g],x=u?u(w):w;(S=d(D,x,S,c))>-1;)D!==e&&Yi.call(D,S,1),Yi.call(e,S,1);return e}function vl(e,i){for(var u=e?i.length:0,c=u-1;u--;){var d=i[u];if(u==c||d!==g){var g=d;vt(d)?Yi.call(e,d,1):Ga(e,d)}}return e}function Pa(e,i){return e+Ji(nl()*(i-e+1))}function kg(e,i,u,c){for(var d=-1,g=We(Qi((i-e)/(u||1)),0),m=T(g);g--;)m[c?g:++d]=e,e+=u;return m}function $a(e,i){var u="";if(!e||i<1||i>ht)return u;do i%2&&(u+=e),i=Ji(i/2),i&&(e+=e);while(i);return u}function re(e,i){return to(Xl(e,i,_n),e+"")}function Lg(e){return il(Rr(e))}function Rg(e,i){var u=Rr(e);return ps(u,ir(i,0,u.length))}function ri(e,i,u,c){if(!Ce(e))return e;i=Vt(i,e);for(var d=-1,g=i.length,m=g-1,D=e;D!=null&&++d<g;){var S=at(i[d]),w=u;if(S==="__proto__"||S==="constructor"||S==="prototype")return e;if(d!=m){var x=D[S];w=c?c(x,S,D):t,w===t&&(w=Ce(x)?x:vt(i[d+1])?[]:{})}Kr(D,S,w),D=D[S]}return e}var El=Hi?function(e,i){return Hi.set(e,i),e}:_n,Ug=Wi?function(e,i){return Wi(e,"toString",{configurable:!0,enumerable:!1,value:po(i),writable:!0})}:_n;function Bg(e){return ps(Rr(e))}function Un(e,i,u){var c=-1,d=e.length;i<0&&(i=-i>d?0:d+i),u=u>d?d:u,u<0&&(u+=d),d=i>u?0:u-i>>>0,i>>>=0;for(var g=T(d);++c<d;)g[c]=e[c+i];return g}function Pg(e,i){var u;return Mt(e,function(c,d,g){return u=i(c,d,g),!u}),!!u}function rs(e,i,u){var c=0,d=e==null?c:e.length;if(typeof i=="number"&&i===i&&d<=V){for(;c<d;){var g=c+d>>>1,m=e[g];m!==null&&!Sn(m)&&(u?m<=i:m<i)?c=g+1:d=g}return d}return Ma(e,i,_n,u)}function Ma(e,i,u,c){var d=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var m=i!==i,D=i===null,S=Sn(i),w=i===t;d<g;){var x=Ji((d+g)/2),L=u(e[x]),B=L!==t,q=L===null,Q=L===L,te=Sn(L);if(m)var J=c||Q;else w?J=Q&&(c||B):D?J=Q&&B&&(c||!q):S?J=Q&&B&&!q&&(c||!te):q||te?J=!1:J=c?L<=i:L<i;J?d=x+1:g=x}return tn(g,I)}function Sl(e,i){for(var u=-1,c=e.length,d=0,g=[];++u<c;){var m=e[u],D=i?i(m):m;if(!u||!Yn(D,S)){var S=D;g[d++]=m===0?0:m}}return g}function Tl(e){return typeof e=="number"?e:Sn(e)?Kt:+e}function En(e){if(typeof e=="string")return e;if(K(e))return Ne(e,En)+"";if(Sn(e))return tl?tl.call(e):"";var i=e+"";return i=="0"&&1/e==-1/0?"-0":i}function Gt(e,i,u){var c=-1,d=Ui,g=e.length,m=!0,D=[],S=D;if(u)m=!1,d=ga;else if(g>=s){var w=i?null:Jg(e);if(w)return Pi(w);m=!1,d=Wr,S=new rr}else S=i?[]:D;e:for(;++c<g;){var x=e[c],L=i?i(x):x;if(x=u||x!==0?x:0,m&&L===L){for(var B=S.length;B--;)if(S[B]===L)continue e;i&&S.push(L),D.push(x)}else d(S,L,u)||(S!==D&&S.push(L),D.push(x))}return D}function Ga(e,i){return i=Vt(i,e),e=Zl(e,i),e==null||delete e[at(Bn(i))]}function yl(e,i,u,c){return ri(e,i,u(sr(e,i)),c)}function is(e,i,u,c){for(var d=e.length,g=c?d:-1;(c?g--:++g<d)&&i(e[g],g,e););return u?Un(e,c?0:g,c?g+1:d):Un(e,c?g+1:0,c?d:g)}function Il(e,i){var u=e;return u instanceof oe&&(u=u.value()),_a(i,function(c,d){return d.func.apply(d.thisArg,Bt([c],d.args))},u)}function Va(e,i,u){var c=e.length;if(c<2)return c?Gt(e[0]):[];for(var d=-1,g=T(c);++d<c;)for(var m=e[d],D=-1;++D<c;)D!=d&&(g[d]=ei(g[d]||m,e[D],i,u));return Gt(Ze(g,1),i,u)}function Al(e,i,u){for(var c=-1,d=e.length,g=i.length,m={};++c<d;){var D=c<g?i[c]:t;u(m,e[c],D)}return m}function ja(e){return $e(e)?e:[]}function qa(e){return typeof e=="function"?e:_n}function Vt(e,i){return K(e)?e:Ka(e,i)?[e]:tc(ge(e))}var $g=re;function jt(e,i,u){var c=e.length;return u=u===t?c:u,!i&&u>=c?e:Un(e,i,u)}var Nl=Ih||function(e){return Xe.clearTimeout(e)};function wl(e,i){if(i)return e.slice();var u=e.length,c=Hu?Hu(u):new e.constructor(u);return e.copy(c),c}function za(e){var i=new e.constructor(e.byteLength);return new qi(i).set(new qi(e)),i}function Mg(e,i){var u=i?za(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Gg(e){var i=new e.constructor(e.source,pu.exec(e));return i.lastIndex=e.lastIndex,i}function Vg(e){return Zr?ve(Zr.call(e)):{}}function Cl(e,i){var u=i?za(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function xl(e,i){if(e!==i){var u=e!==t,c=e===null,d=e===e,g=Sn(e),m=i!==t,D=i===null,S=i===i,w=Sn(i);if(!D&&!w&&!g&&e>i||g&&m&&S&&!D&&!w||c&&m&&S||!u&&S||!d)return 1;if(!c&&!g&&!w&&e<i||w&&u&&d&&!c&&!g||D&&u&&d||!m&&d||!S)return-1}return 0}function jg(e,i,u){for(var c=-1,d=e.criteria,g=i.criteria,m=d.length,D=u.length;++c<m;){var S=xl(d[c],g[c]);if(S){if(c>=D)return S;var w=u[c];return S*(w=="desc"?-1:1)}}return e.index-i.index}function Ol(e,i,u,c){for(var d=-1,g=e.length,m=u.length,D=-1,S=i.length,w=We(g-m,0),x=T(S+w),L=!c;++D<S;)x[D]=i[D];for(;++d<m;)(L||d<g)&&(x[u[d]]=e[d]);for(;w--;)x[D++]=e[d++];return x}function kl(e,i,u,c){for(var d=-1,g=e.length,m=-1,D=u.length,S=-1,w=i.length,x=We(g-D,0),L=T(x+w),B=!c;++d<x;)L[d]=e[d];for(var q=d;++S<w;)L[q+S]=i[S];for(;++m<D;)(B||d<g)&&(L[q+u[m]]=e[d++]);return L}function dn(e,i){var u=-1,c=e.length;for(i||(i=T(c));++u<c;)i[u]=e[u];return i}function st(e,i,u,c){var d=!u;u||(u={});for(var g=-1,m=i.length;++g<m;){var D=i[g],S=c?c(u[D],e[D],D,u,e):t;S===t&&(S=e[D]),d?mt(u,D,S):Kr(u,D,S)}return u}function qg(e,i){return st(e,Za(e),i)}function zg(e,i){return st(e,Yl(e),i)}function ss(e,i){return function(u,c){var d=K(u)?Hd:dg,g=i?i():{};return d(u,e,W(c,2),g)}}function xr(e){return re(function(i,u){var c=-1,d=u.length,g=d>1?u[d-1]:t,m=d>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(d--,g):t,m&&un(u[0],u[1],m)&&(g=d<3?t:g,d=1),i=ve(i);++c<d;){var D=u[c];D&&e(i,D,c,g)}return i})}function Ll(e,i){return function(u,c){if(u==null)return u;if(!hn(u))return e(u,c);for(var d=u.length,g=i?d:-1,m=ve(u);(i?g--:++g<d)&&c(m[g],g,m)!==!1;);return u}}function Rl(e){return function(i,u,c){for(var d=-1,g=ve(i),m=c(i),D=m.length;D--;){var S=m[e?D:++d];if(u(g[S],S,g)===!1)break}return i}}function Yg(e,i,u){var c=i&z,d=ii(e);function g(){var m=this&&this!==Xe&&this instanceof g?d:e;return m.apply(c?u:this,arguments)}return g}function Ul(e){return function(i){i=ge(i);var u=Tr(i)?qn(i):t,c=u?u[0]:i.charAt(0),d=u?jt(u,1).join(""):i.slice(1);return c[e]()+d}}function Or(e){return function(i){return _a(Lc(kc(i).replace(Ud,"")),e,"")}}function ii(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=Cr(e.prototype),c=e.apply(u,i);return Ce(c)?c:u}}function Wg(e,i,u){var c=ii(e);function d(){for(var g=arguments.length,m=T(g),D=g,S=kr(d);D--;)m[D]=arguments[D];var w=g<3&&m[0]!==S&&m[g-1]!==S?[]:Pt(m,S);if(g-=w.length,g<u)return Gl(e,i,as,d.placeholder,t,m,w,t,t,u-g);var x=this&&this!==Xe&&this instanceof d?c:e;return Dn(x,this,m)}return d}function Bl(e){return function(i,u,c){var d=ve(i);if(!hn(i)){var g=W(u,3);i=Qe(i),u=function(D){return g(d[D],D,d)}}var m=e(i,u,c);return m>-1?d[g?i[m]:m]:t}}function Pl(e){return Dt(function(i){var u=i.length,c=u,d=Ln.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new kn(l);if(d&&!m&&cs(g)=="wrapper")var m=new Ln([],!0)}for(c=m?c:u;++c<u;){g=i[c];var D=cs(g),S=D=="wrapper"?Ha(g):t;S&&eo(S[0])&&S[1]==(en|be|Be|dt)&&!S[4].length&&S[9]==1?m=m[cs(S[0])].apply(m,S[3]):m=g.length==1&&eo(g)?m[D]():m.thru(g)}return function(){var w=arguments,x=w[0];if(m&&w.length==1&&K(x))return m.plant(x).value();for(var L=0,B=u?i[L].apply(this,w):x;++L<u;)B=i[L].call(this,B);return B}})}function as(e,i,u,c,d,g,m,D,S,w){var x=i&en,L=i&z,B=i&ce,q=i&(be|ke),Q=i&k,te=B?t:ii(e);function J(){for(var se=arguments.length,le=T(se),Tn=se;Tn--;)le[Tn]=arguments[Tn];if(q)var ln=kr(J),yn=sh(le,ln);if(c&&(le=Ol(le,c,d,q)),g&&(le=kl(le,g,m,q)),se-=yn,q&&se<w){var Me=Pt(le,ln);return Gl(e,i,as,J.placeholder,u,le,Me,D,S,w-se)}var Wn=L?u:this,Tt=B?Wn[e]:e;return se=le.length,D?le=d_(le,D):Q&&se>1&&le.reverse(),x&&S<se&&(le.length=S),this&&this!==Xe&&this instanceof J&&(Tt=te||ii(Tt)),Tt.apply(Wn,le)}return J}function $l(e,i){return function(u,c){return vg(u,e,i(c),{})}}function os(e,i){return function(u,c){var d;if(u===t&&c===t)return i;if(u!==t&&(d=u),c!==t){if(d===t)return c;typeof u=="string"||typeof c=="string"?(u=En(u),c=En(c)):(u=Tl(u),c=Tl(c)),d=e(u,c)}return d}}function Ya(e){return Dt(function(i){return i=Ne(i,vn(W())),re(function(u){var c=this;return e(i,function(d){return Dn(d,c,u)})})})}function us(e,i){i=i===t?" ":En(i);var u=i.length;if(u<2)return u?$a(i,e):i;var c=$a(i,Qi(e/yr(i)));return Tr(i)?jt(qn(c),0,e).join(""):c.slice(0,e)}function Qg(e,i,u,c){var d=i&z,g=ii(e);function m(){for(var D=-1,S=arguments.length,w=-1,x=c.length,L=T(x+S),B=this&&this!==Xe&&this instanceof m?g:e;++w<x;)L[w]=c[w];for(;S--;)L[w++]=arguments[++D];return Dn(B,d?u:this,L)}return m}function Ml(e){return function(i,u,c){return c&&typeof c!="number"&&un(i,u,c)&&(u=c=t),i=St(i),u===t?(u=i,i=0):u=St(u),c=c===t?i<u?1:-1:St(c),kg(i,u,c,e)}}function ls(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Pn(i),u=Pn(u)),e(i,u)}}function Gl(e,i,u,c,d,g,m,D,S,w){var x=i&be,L=x?m:t,B=x?t:m,q=x?g:t,Q=x?t:g;i|=x?Be:pn,i&=~(x?pn:Be),i&Ie||(i&=-4);var te=[e,i,d,q,L,Q,B,D,S,w],J=u.apply(t,te);return eo(e)&&Kl(J,te),J.placeholder=c,ec(J,e,i)}function Wa(e){var i=Ye[e];return function(u,c){if(u=Pn(u),c=c==null?0:tn(ne(c),292),c&&el(u)){var d=(ge(u)+"e").split("e"),g=i(d[0]+"e"+(+d[1]+c));return d=(ge(g)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return i(u)}}var Jg=Nr&&1/Pi(new Nr([,-0]))[1]==Zt?function(e){return new Nr(e)}:_o;function Vl(e){return function(i){var u=rn(i);return u==Vn?Sa(i):u==jn?ph(i):ih(i,e(i))}}function Ft(e,i,u,c,d,g,m,D){var S=i&ce;if(!S&&typeof e!="function")throw new kn(l);var w=c?c.length:0;if(w||(i&=-97,c=d=t),m=m===t?m:We(ne(m),0),D=D===t?D:ne(D),w-=d?d.length:0,i&pn){var x=c,L=d;c=d=t}var B=S?t:Ha(e),q=[e,i,u,c,d,x,L,g,m,D];if(B&&c_(q,B),e=q[0],i=q[1],u=q[2],c=q[3],d=q[4],D=q[9]=q[9]===t?S?0:e.length:We(q[9]-w,0),!D&&i&(be|ke)&&(i&=-25),!i||i==z)var Q=Yg(e,i,u);else i==be||i==ke?Q=Wg(e,i,D):(i==Be||i==(z|Be))&&!d.length?Q=Qg(e,i,u,c):Q=as.apply(t,q);var te=B?El:Kl;return ec(te(Q,q),e,i)}function jl(e,i,u,c){return e===t||Yn(e,Ar[u])&&!_e.call(c,u)?i:e}function ql(e,i,u,c,d,g){return Ce(e)&&Ce(i)&&(g.set(i,e),ts(e,i,t,ql,g),g.delete(i)),e}function Hg(e){return oi(e)?t:e}function zl(e,i,u,c,d,g){var m=u&N,D=e.length,S=i.length;if(D!=S&&!(m&&S>D))return!1;var w=g.get(e),x=g.get(i);if(w&&x)return w==i&&x==e;var L=-1,B=!0,q=u&U?new rr:t;for(g.set(e,i),g.set(i,e);++L<D;){var Q=e[L],te=i[L];if(c)var J=m?c(te,Q,L,i,e,g):c(Q,te,L,e,i,g);if(J!==t){if(J)continue;B=!1;break}if(q){if(!ba(i,function(se,le){if(!Wr(q,le)&&(Q===se||d(Q,se,u,c,g)))return q.push(le)})){B=!1;break}}else if(!(Q===te||d(Q,te,u,c,g))){B=!1;break}}return g.delete(e),g.delete(i),B}function Xg(e,i,u,c,d,g,m){switch(u){case vr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Yr:return!(e.byteLength!=i.byteLength||!g(new qi(e),new qi(i)));case he:case Cn:case Vr:return Yn(+e,+i);case Rt:return e.name==i.name&&e.message==i.message;case jr:case qr:return e==i+"";case Vn:var D=Sa;case jn:var S=c&N;if(D||(D=Pi),e.size!=i.size&&!S)return!1;var w=m.get(e);if(w)return w==i;c|=U,m.set(e,i);var x=zl(D(e),D(i),c,d,g,m);return m.delete(e),x;case Oi:if(Zr)return Zr.call(e)==Zr.call(i)}return!1}function Zg(e,i,u,c,d,g){var m=u&N,D=Qa(e),S=D.length,w=Qa(i),x=w.length;if(S!=x&&!m)return!1;for(var L=S;L--;){var B=D[L];if(!(m?B in i:_e.call(i,B)))return!1}var q=g.get(e),Q=g.get(i);if(q&&Q)return q==i&&Q==e;var te=!0;g.set(e,i),g.set(i,e);for(var J=m;++L<S;){B=D[L];var se=e[B],le=i[B];if(c)var Tn=m?c(le,se,B,i,e,g):c(se,le,B,e,i,g);if(!(Tn===t?se===le||d(se,le,u,c,g):Tn)){te=!1;break}J||(J=B=="constructor")}if(te&&!J){var ln=e.constructor,yn=i.constructor;ln!=yn&&"constructor"in e&&"constructor"in i&&!(typeof ln=="function"&&ln instanceof ln&&typeof yn=="function"&&yn instanceof yn)&&(te=!1)}return g.delete(e),g.delete(i),te}function Dt(e){return to(Xl(e,t,ac),e+"")}function Qa(e){return fl(e,Qe,Za)}function Ja(e){return fl(e,gn,Yl)}var Ha=Hi?function(e){return Hi.get(e)}:_o;function cs(e){for(var i=e.name+"",u=wr[i],c=_e.call(wr,i)?u.length:0;c--;){var d=u[c],g=d.func;if(g==null||g==e)return d.name}return i}function kr(e){var i=_e.call(h,"placeholder")?h:e;return i.placeholder}function W(){var e=h.iteratee||ho;return e=e===ho?hl:e,arguments.length?e(arguments[0],arguments[1]):e}function fs(e,i){var u=e.__data__;return a_(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Xa(e){for(var i=Qe(e),u=i.length;u--;){var c=i[u],d=e[c];i[u]=[c,d,Jl(d)]}return i}function ar(e,i){var u=lh(e,i);return dl(u)?u:t}function Kg(e){var i=_e.call(e,nr),u=e[nr];try{e[nr]=t;var c=!0}catch{}var d=Vi.call(e);return c&&(i?e[nr]=u:delete e[nr]),d}var Za=ya?function(e){return e==null?[]:(e=ve(e),Ut(ya(e),function(i){return Zu.call(e,i)}))}:bo,Yl=ya?function(e){for(var i=[];e;)Bt(i,Za(e)),e=zi(e);return i}:bo,rn=on;(Ia&&rn(new Ia(new ArrayBuffer(1)))!=vr||Jr&&rn(new Jr)!=Vn||Aa&&rn(Aa.resolve())!=uu||Nr&&rn(new Nr)!=jn||Hr&&rn(new Hr)!=zr)&&(rn=function(e){var i=on(e),u=i==gt?e.constructor:t,c=u?or(u):"";if(c)switch(c){case Rh:return vr;case Uh:return Vn;case Bh:return uu;case Ph:return jn;case $h:return zr}return i});function e_(e,i,u){for(var c=-1,d=u.length;++c<d;){var g=u[c],m=g.size;switch(g.type){case"drop":e+=m;break;case"dropRight":i-=m;break;case"take":i=tn(i,e+m);break;case"takeRight":e=We(e,i-m);break}}return{start:e,end:i}}function n_(e){var i=e.match(od);return i?i[1].split(ud):[]}function Wl(e,i,u){i=Vt(i,e);for(var c=-1,d=i.length,g=!1;++c<d;){var m=at(i[c]);if(!(g=e!=null&&u(e,m)))break;e=e[m]}return g||++c!=d?g:(d=e==null?0:e.length,!!d&&ms(d)&&vt(m,d)&&(K(e)||ur(e)))}function t_(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&_e.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function Ql(e){return typeof e.constructor=="function"&&!si(e)?Cr(zi(e)):{}}function r_(e,i,u){var c=e.constructor;switch(i){case Yr:return za(e);case he:case Cn:return new c(+e);case vr:return Mg(e,u);case Xs:case Zs:case Ks:case ea:case na:case ta:case ra:case ia:case sa:return Cl(e,u);case Vn:return new c;case Vr:case qr:return new c(e);case jr:return Gg(e);case jn:return new c;case Oi:return Vg(e)}}function i_(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(ad,`{
/* [wrapped with `+i+`] */
`)}function s_(e){return K(e)||ur(e)||!!(Ku&&e&&e[Ku])}function vt(e,i){var u=typeof e;return i=i??ht,!!i&&(u=="number"||u!="symbol"&&bd.test(e))&&e>-1&&e%1==0&&e<i}function un(e,i,u){if(!Ce(u))return!1;var c=typeof i;return(c=="number"?hn(u)&&vt(i,u.length):c=="string"&&i in u)?Yn(u[i],e):!1}function Ka(e,i){if(K(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||Sn(e)?!0:td.test(e)||!nd.test(e)||i!=null&&e in ve(i)}function a_(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function eo(e){var i=cs(e),u=h[i];if(typeof u!="function"||!(i in oe.prototype))return!1;if(e===u)return!0;var c=Ha(u);return!!c&&e===c[0]}function o_(e){return!!Ju&&Ju in e}var u_=Mi?Et:mo;function si(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Ar;return e===u}function Jl(e){return e===e&&!Ce(e)}function Hl(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in ve(u))}}function l_(e){var i=_s(e,function(c){return u.size===_&&u.clear(),c}),u=i.cache;return i}function c_(e,i){var u=e[1],c=i[1],d=u|c,g=d<(z|ce|en),m=c==en&&u==be||c==en&&u==dt&&e[7].length<=i[8]||c==(en|dt)&&i[7].length<=i[8]&&u==be;if(!(g||m))return e;c&z&&(e[2]=i[2],d|=u&z?0:Ie);var D=i[3];if(D){var S=e[3];e[3]=S?Ol(S,D,i[4]):D,e[4]=S?Pt(e[3],b):i[4]}return D=i[5],D&&(S=e[5],e[5]=S?kl(S,D,i[6]):D,e[6]=S?Pt(e[5],b):i[6]),D=i[7],D&&(e[7]=D),c&en&&(e[8]=e[8]==null?i[8]:tn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=d,e}function f_(e){var i=[];if(e!=null)for(var u in ve(e))i.push(u);return i}function p_(e){return Vi.call(e)}function Xl(e,i,u){return i=We(i===t?e.length-1:i,0),function(){for(var c=arguments,d=-1,g=We(c.length-i,0),m=T(g);++d<g;)m[d]=c[i+d];d=-1;for(var D=T(i+1);++d<i;)D[d]=c[d];return D[i]=u(m),Dn(e,this,D)}}function Zl(e,i){return i.length<2?e:sr(e,Un(i,0,-1))}function d_(e,i){for(var u=e.length,c=tn(i.length,u),d=dn(e);c--;){var g=i[c];e[c]=vt(g,u)?d[g]:t}return e}function no(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Kl=nc(El),ai=Nh||function(e,i){return Xe.setTimeout(e,i)},to=nc(Ug);function ec(e,i,u){var c=i+"";return to(e,i_(c,h_(n_(c),u)))}function nc(e){var i=0,u=0;return function(){var c=Oh(),d=Xt-(c-u);if(u=c,d>0){if(++i>=Lt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function ps(e,i){var u=-1,c=e.length,d=c-1;for(i=i===t?c:i;++u<i;){var g=Pa(u,d),m=e[g];e[g]=e[u],e[u]=m}return e.length=i,e}var tc=l_(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(rd,function(u,c,d,g){i.push(d?g.replace(fd,"$1"):c||u)}),i});function at(e){if(typeof e=="string"||Sn(e))return e;var i=e+"";return i=="0"&&1/e==-1/0?"-0":i}function or(e){if(e!=null){try{return Gi.call(e)}catch{}try{return e+""}catch{}}return""}function h_(e,i){return On(P,function(u){var c="_."+u[0];i&u[1]&&!Ui(e,c)&&e.push(c)}),e.sort()}function rc(e){if(e instanceof oe)return e.clone();var i=new Ln(e.__wrapped__,e.__chain__);return i.__actions__=dn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function g_(e,i,u){(u?un(e,i,u):i===t)?i=1:i=We(ne(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var d=0,g=0,m=T(Qi(c/i));d<c;)m[g++]=Un(e,d,d+=i);return m}function __(e){for(var i=-1,u=e==null?0:e.length,c=0,d=[];++i<u;){var g=e[i];g&&(d[c++]=g)}return d}function b_(){var e=arguments.length;if(!e)return[];for(var i=T(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return Bt(K(u)?dn(u):[u],Ze(i,1))}var m_=re(function(e,i){return $e(e)?ei(e,Ze(i,1,$e,!0)):[]}),F_=re(function(e,i){var u=Bn(i);return $e(u)&&(u=t),$e(e)?ei(e,Ze(i,1,$e,!0),W(u,2)):[]}),D_=re(function(e,i){var u=Bn(i);return $e(u)&&(u=t),$e(e)?ei(e,Ze(i,1,$e,!0),t,u):[]});function v_(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),Un(e,i<0?0:i,c)):[]}function E_(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Un(e,0,i<0?0:i)):[]}function S_(e,i){return e&&e.length?is(e,W(i,3),!0,!0):[]}function T_(e,i){return e&&e.length?is(e,W(i,3),!0):[]}function y_(e,i,u,c){var d=e==null?0:e.length;return d?(u&&typeof u!="number"&&un(e,i,u)&&(u=0,c=d),bg(e,i,u,c)):[]}function ic(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=We(c+d,0)),Bi(e,W(i,3),d)}function sc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=c-1;return u!==t&&(d=ne(u),d=u<0?We(c+d,0):tn(d,c-1)),Bi(e,W(i,3),d,!0)}function ac(e){var i=e==null?0:e.length;return i?Ze(e,1):[]}function I_(e){var i=e==null?0:e.length;return i?Ze(e,Zt):[]}function A_(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),Ze(e,i)):[]}function N_(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var d=e[i];c[d[0]]=d[1]}return c}function oc(e){return e&&e.length?e[0]:t}function w_(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=We(c+d,0)),Sr(e,i,d)}function C_(e){var i=e==null?0:e.length;return i?Un(e,0,-1):[]}var x_=re(function(e){var i=Ne(e,ja);return i.length&&i[0]===e[0]?ka(i):[]}),O_=re(function(e){var i=Bn(e),u=Ne(e,ja);return i===Bn(u)?i=t:u.pop(),u.length&&u[0]===e[0]?ka(u,W(i,2)):[]}),k_=re(function(e){var i=Bn(e),u=Ne(e,ja);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?ka(u,t,i):[]});function L_(e,i){return e==null?"":Ch.call(e,i)}function Bn(e){var i=e==null?0:e.length;return i?e[i-1]:t}function R_(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=c;return u!==t&&(d=ne(u),d=d<0?We(c+d,0):tn(d,c-1)),i===i?hh(e,i,d):Bi(e,Gu,d,!0)}function U_(e,i){return e&&e.length?ml(e,ne(i)):t}var B_=re(uc);function uc(e,i){return e&&e.length&&i&&i.length?Ba(e,i):e}function P_(e,i,u){return e&&e.length&&i&&i.length?Ba(e,i,W(u,2)):e}function $_(e,i,u){return e&&e.length&&i&&i.length?Ba(e,i,t,u):e}var M_=Dt(function(e,i){var u=e==null?0:e.length,c=wa(e,i);return vl(e,Ne(i,function(d){return vt(d,u)?+d:d}).sort(xl)),c});function G_(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,d=[],g=e.length;for(i=W(i,3);++c<g;){var m=e[c];i(m,c,e)&&(u.push(m),d.push(c))}return vl(e,d),u}function ro(e){return e==null?e:Lh.call(e)}function V_(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&un(e,i,u)?(i=0,u=c):(i=i==null?0:ne(i),u=u===t?c:ne(u)),Un(e,i,u)):[]}function j_(e,i){return rs(e,i)}function q_(e,i,u){return Ma(e,i,W(u,2))}function z_(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i);if(c<u&&Yn(e[c],i))return c}return-1}function Y_(e,i){return rs(e,i,!0)}function W_(e,i,u){return Ma(e,i,W(u,2),!0)}function Q_(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i,!0)-1;if(Yn(e[c],i))return c}return-1}function J_(e){return e&&e.length?Sl(e):[]}function H_(e,i){return e&&e.length?Sl(e,W(i,2)):[]}function X_(e){var i=e==null?0:e.length;return i?Un(e,1,i):[]}function Z_(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Un(e,0,i<0?0:i)):[]}function K_(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Un(e,i<0?0:i,c)):[]}function eb(e,i){return e&&e.length?is(e,W(i,3),!1,!0):[]}function nb(e,i){return e&&e.length?is(e,W(i,3)):[]}var tb=re(function(e){return Gt(Ze(e,1,$e,!0))}),rb=re(function(e){var i=Bn(e);return $e(i)&&(i=t),Gt(Ze(e,1,$e,!0),W(i,2))}),ib=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,Gt(Ze(e,1,$e,!0),t,i)});function sb(e){return e&&e.length?Gt(e):[]}function ab(e,i){return e&&e.length?Gt(e,W(i,2)):[]}function ob(e,i){return i=typeof i=="function"?i:t,e&&e.length?Gt(e,t,i):[]}function io(e){if(!(e&&e.length))return[];var i=0;return e=Ut(e,function(u){if($e(u))return i=We(u.length,i),!0}),va(i,function(u){return Ne(e,ma(u))})}function lc(e,i){if(!(e&&e.length))return[];var u=io(e);return i==null?u:Ne(u,function(c){return Dn(i,t,c)})}var ub=re(function(e,i){return $e(e)?ei(e,i):[]}),lb=re(function(e){return Va(Ut(e,$e))}),cb=re(function(e){var i=Bn(e);return $e(i)&&(i=t),Va(Ut(e,$e),W(i,2))}),fb=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,Va(Ut(e,$e),t,i)}),pb=re(io);function db(e,i){return Al(e||[],i||[],Kr)}function hb(e,i){return Al(e||[],i||[],ri)}var gb=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,lc(e,u)});function cc(e){var i=h(e);return i.__chain__=!0,i}function _b(e,i){return i(e),e}function ds(e,i){return i(e)}var bb=Dt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,d=function(g){return wa(g,e)};return i>1||this.__actions__.length||!(c instanceof oe)||!vt(u)?this.thru(d):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:ds,args:[d],thisArg:t}),new Ln(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function mb(){return cc(this)}function Fb(){return new Ln(this.value(),this.__chain__)}function Db(){this.__values__===t&&(this.__values__=Tc(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function vb(){return this}function Eb(e){for(var i,u=this;u instanceof Zi;){var c=rc(u);c.__index__=0,c.__values__=t,i?d.__wrapped__=c:i=c;var d=c;u=u.__wrapped__}return d.__wrapped__=e,i}function Sb(){var e=this.__wrapped__;if(e instanceof oe){var i=e;return this.__actions__.length&&(i=new oe(this)),i=i.reverse(),i.__actions__.push({func:ds,args:[ro],thisArg:t}),new Ln(i,this.__chain__)}return this.thru(ro)}function Tb(){return Il(this.__wrapped__,this.__actions__)}var yb=ss(function(e,i,u){_e.call(e,u)?++e[u]:mt(e,u,1)});function Ib(e,i,u){var c=K(e)?$u:_g;return u&&un(e,i,u)&&(i=t),c(e,W(i,3))}function Ab(e,i){var u=K(e)?Ut:ll;return u(e,W(i,3))}var Nb=Bl(ic),wb=Bl(sc);function Cb(e,i){return Ze(hs(e,i),1)}function xb(e,i){return Ze(hs(e,i),Zt)}function Ob(e,i,u){return u=u===t?1:ne(u),Ze(hs(e,i),u)}function fc(e,i){var u=K(e)?On:Mt;return u(e,W(i,3))}function pc(e,i){var u=K(e)?Xd:ul;return u(e,W(i,3))}var kb=ss(function(e,i,u){_e.call(e,u)?e[u].push(i):mt(e,u,[i])});function Lb(e,i,u,c){e=hn(e)?e:Rr(e),u=u&&!c?ne(u):0;var d=e.length;return u<0&&(u=We(d+u,0)),Fs(e)?u<=d&&e.indexOf(i,u)>-1:!!d&&Sr(e,i,u)>-1}var Rb=re(function(e,i,u){var c=-1,d=typeof i=="function",g=hn(e)?T(e.length):[];return Mt(e,function(m){g[++c]=d?Dn(i,m,u):ni(m,i,u)}),g}),Ub=ss(function(e,i,u){mt(e,u,i)});function hs(e,i){var u=K(e)?Ne:gl;return u(e,W(i,3))}function Bb(e,i,u,c){return e==null?[]:(K(i)||(i=i==null?[]:[i]),u=c?t:u,K(u)||(u=u==null?[]:[u]),Fl(e,i,u))}var Pb=ss(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function $b(e,i,u){var c=K(e)?_a:ju,d=arguments.length<3;return c(e,W(i,4),u,d,Mt)}function Mb(e,i,u){var c=K(e)?Zd:ju,d=arguments.length<3;return c(e,W(i,4),u,d,ul)}function Gb(e,i){var u=K(e)?Ut:ll;return u(e,bs(W(i,3)))}function Vb(e){var i=K(e)?il:Lg;return i(e)}function jb(e,i,u){(u?un(e,i,u):i===t)?i=1:i=ne(i);var c=K(e)?fg:Rg;return c(e,i)}function qb(e){var i=K(e)?pg:Bg;return i(e)}function zb(e){if(e==null)return 0;if(hn(e))return Fs(e)?yr(e):e.length;var i=rn(e);return i==Vn||i==jn?e.size:Ra(e).length}function Yb(e,i,u){var c=K(e)?ba:Pg;return u&&un(e,i,u)&&(i=t),c(e,W(i,3))}var Wb=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&un(e,i[0],i[1])?i=[]:u>2&&un(i[0],i[1],i[2])&&(i=[i[0]]),Fl(e,Ze(i,1),[])}),gs=Ah||function(){return Xe.Date.now()};function Qb(e,i){if(typeof i!="function")throw new kn(l);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function dc(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,Ft(e,en,t,t,t,t,i)}function hc(e,i){var u;if(typeof i!="function")throw new kn(l);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var so=re(function(e,i,u){var c=z;if(u.length){var d=Pt(u,kr(so));c|=Be}return Ft(e,c,i,u,d)}),gc=re(function(e,i,u){var c=z|ce;if(u.length){var d=Pt(u,kr(gc));c|=Be}return Ft(i,c,e,u,d)});function _c(e,i,u){i=u?t:i;var c=Ft(e,be,t,t,t,t,t,i);return c.placeholder=_c.placeholder,c}function bc(e,i,u){i=u?t:i;var c=Ft(e,ke,t,t,t,t,t,i);return c.placeholder=bc.placeholder,c}function mc(e,i,u){var c,d,g,m,D,S,w=0,x=!1,L=!1,B=!0;if(typeof e!="function")throw new kn(l);i=Pn(i)||0,Ce(u)&&(x=!!u.leading,L="maxWait"in u,g=L?We(Pn(u.maxWait)||0,i):g,B="trailing"in u?!!u.trailing:B);function q(Me){var Wn=c,Tt=d;return c=d=t,w=Me,m=e.apply(Tt,Wn),m}function Q(Me){return w=Me,D=ai(se,i),x?q(Me):m}function te(Me){var Wn=Me-S,Tt=Me-w,Bc=i-Wn;return L?tn(Bc,g-Tt):Bc}function J(Me){var Wn=Me-S,Tt=Me-w;return S===t||Wn>=i||Wn<0||L&&Tt>=g}function se(){var Me=gs();if(J(Me))return le(Me);D=ai(se,te(Me))}function le(Me){return D=t,B&&c?q(Me):(c=d=t,m)}function Tn(){D!==t&&Nl(D),w=0,c=S=d=D=t}function ln(){return D===t?m:le(gs())}function yn(){var Me=gs(),Wn=J(Me);if(c=arguments,d=this,S=Me,Wn){if(D===t)return Q(S);if(L)return Nl(D),D=ai(se,i),q(S)}return D===t&&(D=ai(se,i)),m}return yn.cancel=Tn,yn.flush=ln,yn}var Jb=re(function(e,i){return ol(e,1,i)}),Hb=re(function(e,i,u){return ol(e,Pn(i)||0,u)});function Xb(e){return Ft(e,k)}function _s(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new kn(l);var u=function(){var c=arguments,d=i?i.apply(this,c):c[0],g=u.cache;if(g.has(d))return g.get(d);var m=e.apply(this,c);return u.cache=g.set(d,m)||g,m};return u.cache=new(_s.Cache||bt),u}_s.Cache=bt;function bs(e){if(typeof e!="function")throw new kn(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function Zb(e){return hc(2,e)}var Kb=$g(function(e,i){i=i.length==1&&K(i[0])?Ne(i[0],vn(W())):Ne(Ze(i,1),vn(W()));var u=i.length;return re(function(c){for(var d=-1,g=tn(c.length,u);++d<g;)c[d]=i[d].call(this,c[d]);return Dn(e,this,c)})}),ao=re(function(e,i){var u=Pt(i,kr(ao));return Ft(e,Be,t,i,u)}),Fc=re(function(e,i){var u=Pt(i,kr(Fc));return Ft(e,pn,t,i,u)}),e0=Dt(function(e,i){return Ft(e,dt,t,t,t,i)});function n0(e,i){if(typeof e!="function")throw new kn(l);return i=i===t?i:ne(i),re(e,i)}function t0(e,i){if(typeof e!="function")throw new kn(l);return i=i==null?0:We(ne(i),0),re(function(u){var c=u[i],d=jt(u,0,i);return c&&Bt(d,c),Dn(e,this,d)})}function r0(e,i,u){var c=!0,d=!0;if(typeof e!="function")throw new kn(l);return Ce(u)&&(c="leading"in u?!!u.leading:c,d="trailing"in u?!!u.trailing:d),mc(e,i,{leading:c,maxWait:i,trailing:d})}function i0(e){return dc(e,1)}function s0(e,i){return ao(qa(i),e)}function a0(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function o0(e){return Rn(e,y)}function u0(e,i){return i=typeof i=="function"?i:t,Rn(e,y,i)}function l0(e){return Rn(e,F|y)}function c0(e,i){return i=typeof i=="function"?i:t,Rn(e,F|y,i)}function f0(e,i){return i==null||al(e,i,Qe(i))}function Yn(e,i){return e===i||e!==e&&i!==i}var p0=ls(Oa),d0=ls(function(e,i){return e>=i}),ur=pl(function(){return arguments}())?pl:function(e){return Le(e)&&_e.call(e,"callee")&&!Zu.call(e,"callee")},K=T.isArray,h0=ku?vn(ku):Eg;function hn(e){return e!=null&&ms(e.length)&&!Et(e)}function $e(e){return Le(e)&&hn(e)}function g0(e){return e===!0||e===!1||Le(e)&&on(e)==he}var qt=wh||mo,_0=Lu?vn(Lu):Sg;function b0(e){return Le(e)&&e.nodeType===1&&!oi(e)}function m0(e){if(e==null)return!0;if(hn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||Lr(e)||ur(e)))return!e.length;var i=rn(e);if(i==Vn||i==jn)return!e.size;if(si(e))return!Ra(e).length;for(var u in e)if(_e.call(e,u))return!1;return!0}function F0(e,i){return ti(e,i)}function D0(e,i,u){u=typeof u=="function"?u:t;var c=u?u(e,i):t;return c===t?ti(e,i,t,u):!!c}function oo(e){if(!Le(e))return!1;var i=on(e);return i==Rt||i==Gr||typeof e.message=="string"&&typeof e.name=="string"&&!oi(e)}function v0(e){return typeof e=="number"&&el(e)}function Et(e){if(!Ce(e))return!1;var i=on(e);return i==nn||i==ou||i==Pe||i==zp}function Dc(e){return typeof e=="number"&&e==ne(e)}function ms(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ht}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Le(e){return e!=null&&typeof e=="object"}var vc=Ru?vn(Ru):yg;function E0(e,i){return e===i||La(e,i,Xa(i))}function S0(e,i,u){return u=typeof u=="function"?u:t,La(e,i,Xa(i),u)}function T0(e){return Ec(e)&&e!=+e}function y0(e){if(u_(e))throw new Z(o);return dl(e)}function I0(e){return e===null}function A0(e){return e==null}function Ec(e){return typeof e=="number"||Le(e)&&on(e)==Vr}function oi(e){if(!Le(e)||on(e)!=gt)return!1;var i=zi(e);if(i===null)return!0;var u=_e.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Gi.call(u)==Sh}var uo=Uu?vn(Uu):Ig;function N0(e){return Dc(e)&&e>=-9007199254740991&&e<=ht}var Sc=Bu?vn(Bu):Ag;function Fs(e){return typeof e=="string"||!K(e)&&Le(e)&&on(e)==qr}function Sn(e){return typeof e=="symbol"||Le(e)&&on(e)==Oi}var Lr=Pu?vn(Pu):Ng;function w0(e){return e===t}function C0(e){return Le(e)&&rn(e)==zr}function x0(e){return Le(e)&&on(e)==Wp}var O0=ls(Ua),k0=ls(function(e,i){return e<=i});function Tc(e){if(!e)return[];if(hn(e))return Fs(e)?qn(e):dn(e);if(Qr&&e[Qr])return fh(e[Qr]());var i=rn(e),u=i==Vn?Sa:i==jn?Pi:Rr;return u(e)}function St(e){if(!e)return e===0?e:0;if(e=Pn(e),e===Zt||e===-1/0){var i=e<0?-1:1;return i*Dr}return e===e?e:0}function ne(e){var i=St(e),u=i%1;return i===i?u?i-u:i:0}function yc(e){return e?ir(ne(e),0,wn):0}function Pn(e){if(typeof e=="number")return e;if(Sn(e))return Kt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=qu(e);var u=hd.test(e);return u||_d.test(e)?Qd(e.slice(2),u?2:8):dd.test(e)?Kt:+e}function Ic(e){return st(e,gn(e))}function L0(e){return e?ir(ne(e),-9007199254740991,ht):e===0?e:0}function ge(e){return e==null?"":En(e)}var R0=xr(function(e,i){if(si(i)||hn(i)){st(i,Qe(i),e);return}for(var u in i)_e.call(i,u)&&Kr(e,u,i[u])}),Ac=xr(function(e,i){st(i,gn(i),e)}),Ds=xr(function(e,i,u,c){st(i,gn(i),e,c)}),U0=xr(function(e,i,u,c){st(i,Qe(i),e,c)}),B0=Dt(wa);function P0(e,i){var u=Cr(e);return i==null?u:sl(u,i)}var $0=re(function(e,i){e=ve(e);var u=-1,c=i.length,d=c>2?i[2]:t;for(d&&un(i[0],i[1],d)&&(c=1);++u<c;)for(var g=i[u],m=gn(g),D=-1,S=m.length;++D<S;){var w=m[D],x=e[w];(x===t||Yn(x,Ar[w])&&!_e.call(e,w))&&(e[w]=g[w])}return e}),M0=re(function(e){return e.push(t,ql),Dn(Nc,t,e)});function G0(e,i){return Mu(e,W(i,3),it)}function V0(e,i){return Mu(e,W(i,3),xa)}function j0(e,i){return e==null?e:Ca(e,W(i,3),gn)}function q0(e,i){return e==null?e:cl(e,W(i,3),gn)}function z0(e,i){return e&&it(e,W(i,3))}function Y0(e,i){return e&&xa(e,W(i,3))}function W0(e){return e==null?[]:ns(e,Qe(e))}function Q0(e){return e==null?[]:ns(e,gn(e))}function lo(e,i,u){var c=e==null?t:sr(e,i);return c===t?u:c}function J0(e,i){return e!=null&&Wl(e,i,mg)}function co(e,i){return e!=null&&Wl(e,i,Fg)}var H0=$l(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Vi.call(i)),e[i]=u},po(_n)),X0=$l(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Vi.call(i)),_e.call(e,i)?e[i].push(u):e[i]=[u]},W),Z0=re(ni);function Qe(e){return hn(e)?rl(e):Ra(e)}function gn(e){return hn(e)?rl(e,!0):wg(e)}function K0(e,i){var u={};return i=W(i,3),it(e,function(c,d,g){mt(u,i(c,d,g),c)}),u}function em(e,i){var u={};return i=W(i,3),it(e,function(c,d,g){mt(u,d,i(c,d,g))}),u}var nm=xr(function(e,i,u){ts(e,i,u)}),Nc=xr(function(e,i,u,c){ts(e,i,u,c)}),tm=Dt(function(e,i){var u={};if(e==null)return u;var c=!1;i=Ne(i,function(g){return g=Vt(g,e),c||(c=g.length>1),g}),st(e,Ja(e),u),c&&(u=Rn(u,F|C|y,Hg));for(var d=i.length;d--;)Ga(u,i[d]);return u});function rm(e,i){return wc(e,bs(W(i)))}var im=Dt(function(e,i){return e==null?{}:xg(e,i)});function wc(e,i){if(e==null)return{};var u=Ne(Ja(e),function(c){return[c]});return i=W(i),Dl(e,u,function(c,d){return i(c,d[0])})}function sm(e,i,u){i=Vt(i,e);var c=-1,d=i.length;for(d||(d=1,e=t);++c<d;){var g=e==null?t:e[at(i[c])];g===t&&(c=d,g=u),e=Et(g)?g.call(e):g}return e}function am(e,i,u){return e==null?e:ri(e,i,u)}function om(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:ri(e,i,u,c)}var Cc=Vl(Qe),xc=Vl(gn);function um(e,i,u){var c=K(e),d=c||qt(e)||Lr(e);if(i=W(i,4),u==null){var g=e&&e.constructor;d?u=c?new g:[]:Ce(e)?u=Et(g)?Cr(zi(e)):{}:u={}}return(d?On:it)(e,function(m,D,S){return i(u,m,D,S)}),u}function lm(e,i){return e==null?!0:Ga(e,i)}function cm(e,i,u){return e==null?e:yl(e,i,qa(u))}function fm(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:yl(e,i,qa(u),c)}function Rr(e){return e==null?[]:Ea(e,Qe(e))}function pm(e){return e==null?[]:Ea(e,gn(e))}function dm(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=Pn(u),u=u===u?u:0),i!==t&&(i=Pn(i),i=i===i?i:0),ir(Pn(e),i,u)}function hm(e,i,u){return i=St(i),u===t?(u=i,i=0):u=St(u),e=Pn(e),Dg(e,i,u)}function gm(e,i,u){if(u&&typeof u!="boolean"&&un(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=St(e),i===t?(i=e,e=0):i=St(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var d=nl();return tn(e+d*(i-e+Wd("1e-"+((d+"").length-1))),i)}return Pa(e,i)}var _m=Or(function(e,i,u){return i=i.toLowerCase(),e+(u?Oc(i):i)});function Oc(e){return fo(ge(e).toLowerCase())}function kc(e){return e=ge(e),e&&e.replace(md,ah).replace(Bd,"")}function bm(e,i,u){e=ge(e),i=En(i);var c=e.length;u=u===t?c:ir(ne(u),0,c);var d=u;return u-=i.length,u>=0&&e.slice(u,d)==i}function mm(e){return e=ge(e),e&&Zp.test(e)?e.replace(cu,oh):e}function Fm(e){return e=ge(e),e&&id.test(e)?e.replace(aa,"\\$&"):e}var Dm=Or(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),vm=Or(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),Em=Ul("toLowerCase");function Sm(e,i,u){e=ge(e),i=ne(i);var c=i?yr(e):0;if(!i||c>=i)return e;var d=(i-c)/2;return us(Ji(d),u)+e+us(Qi(d),u)}function Tm(e,i,u){e=ge(e),i=ne(i);var c=i?yr(e):0;return i&&c<i?e+us(i-c,u):e}function ym(e,i,u){e=ge(e),i=ne(i);var c=i?yr(e):0;return i&&c<i?us(i-c,u)+e:e}function Im(e,i,u){return u||i==null?i=0:i&&(i=+i),kh(ge(e).replace(oa,""),i||0)}function Am(e,i,u){return(u?un(e,i,u):i===t)?i=1:i=ne(i),$a(ge(e),i)}function Nm(){var e=arguments,i=ge(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var wm=Or(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function Cm(e,i,u){return u&&typeof u!="number"&&un(e,i,u)&&(i=u=t),u=u===t?wn:u>>>0,u?(e=ge(e),e&&(typeof i=="string"||i!=null&&!uo(i))&&(i=En(i),!i&&Tr(e))?jt(qn(e),0,u):e.split(i,u)):[]}var xm=Or(function(e,i,u){return e+(u?" ":"")+fo(i)});function Om(e,i,u){return e=ge(e),u=u==null?0:ir(ne(u),0,e.length),i=En(i),e.slice(u,u+i.length)==i}function km(e,i,u){var c=h.templateSettings;u&&un(e,i,u)&&(i=t),e=ge(e),i=Ds({},i,c,jl);var d=Ds({},i.imports,c.imports,jl),g=Qe(d),m=Ea(d,g),D,S,w=0,x=i.interpolate||ki,L="__p += '",B=Ta((i.escape||ki).source+"|"+x.source+"|"+(x===fu?pd:ki).source+"|"+(i.evaluate||ki).source+"|$","g"),q="//# sourceURL="+(_e.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vd+"]")+`
`;e.replace(B,function(J,se,le,Tn,ln,yn){return le||(le=Tn),L+=e.slice(w,yn).replace(Fd,uh),se&&(D=!0,L+=`' +
__e(`+se+`) +
'`),ln&&(S=!0,L+=`';
`+ln+`;
__p += '`),le&&(L+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),w=yn+J.length,J}),L+=`';
`;var Q=_e.call(i,"variable")&&i.variable;if(!Q)L=`with (obj) {
`+L+`
}
`;else if(cd.test(Q))throw new Z(f);L=(S?L.replace(Qp,""):L).replace(Jp,"$1").replace(Hp,"$1;"),L="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(D?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+L+`return __p
}`;var te=Rc(function(){return pe(g,q+"return "+L).apply(t,m)});if(te.source=L,oo(te))throw te;return te}function Lm(e){return ge(e).toLowerCase()}function Rm(e){return ge(e).toUpperCase()}function Um(e,i,u){if(e=ge(e),e&&(u||i===t))return qu(e);if(!e||!(i=En(i)))return e;var c=qn(e),d=qn(i),g=zu(c,d),m=Yu(c,d)+1;return jt(c,g,m).join("")}function Bm(e,i,u){if(e=ge(e),e&&(u||i===t))return e.slice(0,Qu(e)+1);if(!e||!(i=En(i)))return e;var c=qn(e),d=Yu(c,qn(i))+1;return jt(c,0,d).join("")}function Pm(e,i,u){if(e=ge(e),e&&(u||i===t))return e.replace(oa,"");if(!e||!(i=En(i)))return e;var c=qn(e),d=zu(c,qn(i));return jt(c,d).join("")}function $m(e,i){var u=X,c=an;if(Ce(i)){var d="separator"in i?i.separator:d;u="length"in i?ne(i.length):u,c="omission"in i?En(i.omission):c}e=ge(e);var g=e.length;if(Tr(e)){var m=qn(e);g=m.length}if(u>=g)return e;var D=u-yr(c);if(D<1)return c;var S=m?jt(m,0,D).join(""):e.slice(0,D);if(d===t)return S+c;if(m&&(D+=S.length-D),uo(d)){if(e.slice(D).search(d)){var w,x=S;for(d.global||(d=Ta(d.source,ge(pu.exec(d))+"g")),d.lastIndex=0;w=d.exec(x);)var L=w.index;S=S.slice(0,L===t?D:L)}}else if(e.indexOf(En(d),D)!=D){var B=S.lastIndexOf(d);B>-1&&(S=S.slice(0,B))}return S+c}function Mm(e){return e=ge(e),e&&Xp.test(e)?e.replace(lu,gh):e}var Gm=Or(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),fo=Ul("toUpperCase");function Lc(e,i,u){return e=ge(e),i=u?t:i,i===t?ch(e)?mh(e):nh(e):e.match(i)||[]}var Rc=re(function(e,i){try{return Dn(e,t,i)}catch(u){return oo(u)?u:new Z(u)}}),Vm=Dt(function(e,i){return On(i,function(u){u=at(u),mt(e,u,so(e[u],e))}),e});function jm(e){var i=e==null?0:e.length,u=W();return e=i?Ne(e,function(c){if(typeof c[1]!="function")throw new kn(l);return[u(c[0]),c[1]]}):[],re(function(c){for(var d=-1;++d<i;){var g=e[d];if(Dn(g[0],this,c))return Dn(g[1],this,c)}})}function qm(e){return gg(Rn(e,F))}function po(e){return function(){return e}}function zm(e,i){return e==null||e!==e?i:e}var Ym=Pl(),Wm=Pl(!0);function _n(e){return e}function ho(e){return hl(typeof e=="function"?e:Rn(e,F))}function Qm(e){return _l(Rn(e,F))}function Jm(e,i){return bl(e,Rn(i,F))}var Hm=re(function(e,i){return function(u){return ni(u,e,i)}}),Xm=re(function(e,i){return function(u){return ni(e,u,i)}});function go(e,i,u){var c=Qe(i),d=ns(i,c);u==null&&!(Ce(i)&&(d.length||!c.length))&&(u=i,i=e,e=this,d=ns(i,Qe(i)));var g=!(Ce(u)&&"chain"in u)||!!u.chain,m=Et(e);return On(d,function(D){var S=i[D];e[D]=S,m&&(e.prototype[D]=function(){var w=this.__chain__;if(g||w){var x=e(this.__wrapped__),L=x.__actions__=dn(this.__actions__);return L.push({func:S,args:arguments,thisArg:e}),x.__chain__=w,x}return S.apply(e,Bt([this.value()],arguments))})}),e}function Zm(){return Xe._===this&&(Xe._=Th),this}function _o(){}function Km(e){return e=ne(e),re(function(i){return ml(i,e)})}var eF=Ya(Ne),nF=Ya($u),tF=Ya(ba);function Uc(e){return Ka(e)?ma(at(e)):Og(e)}function rF(e){return function(i){return e==null?t:sr(e,i)}}var iF=Ml(),sF=Ml(!0);function bo(){return[]}function mo(){return!1}function aF(){return{}}function oF(){return""}function uF(){return!0}function lF(e,i){if(e=ne(e),e<1||e>ht)return[];var u=wn,c=tn(e,wn);i=W(i),e-=wn;for(var d=va(c,i);++u<e;)i(u);return d}function cF(e){return K(e)?Ne(e,at):Sn(e)?[e]:dn(tc(ge(e)))}function fF(e){var i=++Eh;return ge(e)+i}var pF=os(function(e,i){return e+i},0),dF=Wa("ceil"),hF=os(function(e,i){return e/i},1),gF=Wa("floor");function _F(e){return e&&e.length?es(e,_n,Oa):t}function bF(e,i){return e&&e.length?es(e,W(i,2),Oa):t}function mF(e){return Vu(e,_n)}function FF(e,i){return Vu(e,W(i,2))}function DF(e){return e&&e.length?es(e,_n,Ua):t}function vF(e,i){return e&&e.length?es(e,W(i,2),Ua):t}var EF=os(function(e,i){return e*i},1),SF=Wa("round"),TF=os(function(e,i){return e-i},0);function yF(e){return e&&e.length?Da(e,_n):0}function IF(e,i){return e&&e.length?Da(e,W(i,2)):0}return h.after=Qb,h.ary=dc,h.assign=R0,h.assignIn=Ac,h.assignInWith=Ds,h.assignWith=U0,h.at=B0,h.before=hc,h.bind=so,h.bindAll=Vm,h.bindKey=gc,h.castArray=a0,h.chain=cc,h.chunk=g_,h.compact=__,h.concat=b_,h.cond=jm,h.conforms=qm,h.constant=po,h.countBy=yb,h.create=P0,h.curry=_c,h.curryRight=bc,h.debounce=mc,h.defaults=$0,h.defaultsDeep=M0,h.defer=Jb,h.delay=Hb,h.difference=m_,h.differenceBy=F_,h.differenceWith=D_,h.drop=v_,h.dropRight=E_,h.dropRightWhile=S_,h.dropWhile=T_,h.fill=y_,h.filter=Ab,h.flatMap=Cb,h.flatMapDeep=xb,h.flatMapDepth=Ob,h.flatten=ac,h.flattenDeep=I_,h.flattenDepth=A_,h.flip=Xb,h.flow=Ym,h.flowRight=Wm,h.fromPairs=N_,h.functions=W0,h.functionsIn=Q0,h.groupBy=kb,h.initial=C_,h.intersection=x_,h.intersectionBy=O_,h.intersectionWith=k_,h.invert=H0,h.invertBy=X0,h.invokeMap=Rb,h.iteratee=ho,h.keyBy=Ub,h.keys=Qe,h.keysIn=gn,h.map=hs,h.mapKeys=K0,h.mapValues=em,h.matches=Qm,h.matchesProperty=Jm,h.memoize=_s,h.merge=nm,h.mergeWith=Nc,h.method=Hm,h.methodOf=Xm,h.mixin=go,h.negate=bs,h.nthArg=Km,h.omit=tm,h.omitBy=rm,h.once=Zb,h.orderBy=Bb,h.over=eF,h.overArgs=Kb,h.overEvery=nF,h.overSome=tF,h.partial=ao,h.partialRight=Fc,h.partition=Pb,h.pick=im,h.pickBy=wc,h.property=Uc,h.propertyOf=rF,h.pull=B_,h.pullAll=uc,h.pullAllBy=P_,h.pullAllWith=$_,h.pullAt=M_,h.range=iF,h.rangeRight=sF,h.rearg=e0,h.reject=Gb,h.remove=G_,h.rest=n0,h.reverse=ro,h.sampleSize=jb,h.set=am,h.setWith=om,h.shuffle=qb,h.slice=V_,h.sortBy=Wb,h.sortedUniq=J_,h.sortedUniqBy=H_,h.split=Cm,h.spread=t0,h.tail=X_,h.take=Z_,h.takeRight=K_,h.takeRightWhile=eb,h.takeWhile=nb,h.tap=_b,h.throttle=r0,h.thru=ds,h.toArray=Tc,h.toPairs=Cc,h.toPairsIn=xc,h.toPath=cF,h.toPlainObject=Ic,h.transform=um,h.unary=i0,h.union=tb,h.unionBy=rb,h.unionWith=ib,h.uniq=sb,h.uniqBy=ab,h.uniqWith=ob,h.unset=lm,h.unzip=io,h.unzipWith=lc,h.update=cm,h.updateWith=fm,h.values=Rr,h.valuesIn=pm,h.without=ub,h.words=Lc,h.wrap=s0,h.xor=lb,h.xorBy=cb,h.xorWith=fb,h.zip=pb,h.zipObject=db,h.zipObjectDeep=hb,h.zipWith=gb,h.entries=Cc,h.entriesIn=xc,h.extend=Ac,h.extendWith=Ds,go(h,h),h.add=pF,h.attempt=Rc,h.camelCase=_m,h.capitalize=Oc,h.ceil=dF,h.clamp=dm,h.clone=o0,h.cloneDeep=l0,h.cloneDeepWith=c0,h.cloneWith=u0,h.conformsTo=f0,h.deburr=kc,h.defaultTo=zm,h.divide=hF,h.endsWith=bm,h.eq=Yn,h.escape=mm,h.escapeRegExp=Fm,h.every=Ib,h.find=Nb,h.findIndex=ic,h.findKey=G0,h.findLast=wb,h.findLastIndex=sc,h.findLastKey=V0,h.floor=gF,h.forEach=fc,h.forEachRight=pc,h.forIn=j0,h.forInRight=q0,h.forOwn=z0,h.forOwnRight=Y0,h.get=lo,h.gt=p0,h.gte=d0,h.has=J0,h.hasIn=co,h.head=oc,h.identity=_n,h.includes=Lb,h.indexOf=w_,h.inRange=hm,h.invoke=Z0,h.isArguments=ur,h.isArray=K,h.isArrayBuffer=h0,h.isArrayLike=hn,h.isArrayLikeObject=$e,h.isBoolean=g0,h.isBuffer=qt,h.isDate=_0,h.isElement=b0,h.isEmpty=m0,h.isEqual=F0,h.isEqualWith=D0,h.isError=oo,h.isFinite=v0,h.isFunction=Et,h.isInteger=Dc,h.isLength=ms,h.isMap=vc,h.isMatch=E0,h.isMatchWith=S0,h.isNaN=T0,h.isNative=y0,h.isNil=A0,h.isNull=I0,h.isNumber=Ec,h.isObject=Ce,h.isObjectLike=Le,h.isPlainObject=oi,h.isRegExp=uo,h.isSafeInteger=N0,h.isSet=Sc,h.isString=Fs,h.isSymbol=Sn,h.isTypedArray=Lr,h.isUndefined=w0,h.isWeakMap=C0,h.isWeakSet=x0,h.join=L_,h.kebabCase=Dm,h.last=Bn,h.lastIndexOf=R_,h.lowerCase=vm,h.lowerFirst=Em,h.lt=O0,h.lte=k0,h.max=_F,h.maxBy=bF,h.mean=mF,h.meanBy=FF,h.min=DF,h.minBy=vF,h.stubArray=bo,h.stubFalse=mo,h.stubObject=aF,h.stubString=oF,h.stubTrue=uF,h.multiply=EF,h.nth=U_,h.noConflict=Zm,h.noop=_o,h.now=gs,h.pad=Sm,h.padEnd=Tm,h.padStart=ym,h.parseInt=Im,h.random=gm,h.reduce=$b,h.reduceRight=Mb,h.repeat=Am,h.replace=Nm,h.result=sm,h.round=SF,h.runInContext=E,h.sample=Vb,h.size=zb,h.snakeCase=wm,h.some=Yb,h.sortedIndex=j_,h.sortedIndexBy=q_,h.sortedIndexOf=z_,h.sortedLastIndex=Y_,h.sortedLastIndexBy=W_,h.sortedLastIndexOf=Q_,h.startCase=xm,h.startsWith=Om,h.subtract=TF,h.sum=yF,h.sumBy=IF,h.template=km,h.times=lF,h.toFinite=St,h.toInteger=ne,h.toLength=yc,h.toLower=Lm,h.toNumber=Pn,h.toSafeInteger=L0,h.toString=ge,h.toUpper=Rm,h.trim=Um,h.trimEnd=Bm,h.trimStart=Pm,h.truncate=$m,h.unescape=Mm,h.uniqueId=fF,h.upperCase=Gm,h.upperFirst=fo,h.each=fc,h.eachRight=pc,h.first=oc,go(h,function(){var e={};return it(h,function(i,u){_e.call(h.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),h.VERSION=a,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),On(["drop","take"],function(e,i){oe.prototype[e]=function(u){u=u===t?1:We(ne(u),0);var c=this.__filtered__&&!i?new oe(this):this.clone();return c.__filtered__?c.__takeCount__=tn(u,c.__takeCount__):c.__views__.push({size:tn(u,wn),type:e+(c.__dir__<0?"Right":"")}),c},oe.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),On(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==Ci||u==xi;oe.prototype[e]=function(d){var g=this.clone();return g.__iteratees__.push({iteratee:W(d,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),On(["head","last"],function(e,i){var u="take"+(i?"Right":"");oe.prototype[e]=function(){return this[u](1).value()[0]}}),On(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[u](1)}}),oe.prototype.compact=function(){return this.filter(_n)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new oe(this):this.map(function(u){return ni(u,e,i)})}),oe.prototype.reject=function(e){return this.filter(bs(W(e)))},oe.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new oe(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(wn)},it(oe.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),d=h[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);d&&(h.prototype[i]=function(){var m=this.__wrapped__,D=c?[1]:arguments,S=m instanceof oe,w=D[0],x=S||K(m),L=function(se){var le=d.apply(h,Bt([se],D));return c&&B?le[0]:le};x&&u&&typeof w=="function"&&w.length!=1&&(S=x=!1);var B=this.__chain__,q=!!this.__actions__.length,Q=g&&!B,te=S&&!q;if(!g&&x){m=te?m:new oe(this);var J=e.apply(m,D);return J.__actions__.push({func:ds,args:[L],thisArg:t}),new Ln(J,B)}return Q&&te?e.apply(this,D):(J=this.thru(L),Q?c?J.value()[0]:J.value():J)})}),On(["pop","push","shift","sort","splice","unshift"],function(e){var i=$i[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var d=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(K(g)?g:[],d)}return this[u](function(m){return i.apply(K(m)?m:[],d)})}}),it(oe.prototype,function(e,i){var u=h[i];if(u){var c=u.name+"";_e.call(wr,c)||(wr[c]=[]),wr[c].push({name:i,func:u})}}),wr[as(t,ce).name]=[{name:"wrapper",func:t}],oe.prototype.clone=Mh,oe.prototype.reverse=Gh,oe.prototype.value=Vh,h.prototype.at=bb,h.prototype.chain=mb,h.prototype.commit=Fb,h.prototype.next=Db,h.prototype.plant=Eb,h.prototype.reverse=Sb,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=Tb,h.prototype.first=h.prototype.head,Qr&&(h.prototype[Qr]=vb),h},Ir=Fh();er?((er.exports=Ir)._=Ir,da._=Ir):Xe._=Ir}).call(fi)})(ks,ks.exports);var LD=ks.exports;const wt=kD(LD);function RD(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function In(r,n){const t=a=>n.convert(a[r]);return{name:UD(r),key:r,asEnv:a=>({[r]:n.asString(a)}),zod:{type:n.type},get:t,getOrDefault:(a,s)=>t(a)??s}}function UD(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}In("MAGIDOC_GENERATE",RD());function Es(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function of(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function Ss(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function uf(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var Vs={APP_LOGO:In("APP_LOGO",Ss()),APP_TITLE:In("APP_TITLE",Ss()),APP_FAVICON:In("APP_FAVICON",Ss()),SITE_ROOT:In("SITE_ROOT",Ss()),SITE_META:In("SITE_META",of(r=>r.string())),CUSTOM_STYLES:In("CUSTOM_STYLES",Es(r=>r.string())),FIELDS_SORTING:In("FIELDS_SORTING",uf(["default","alphabetical"])),ARGUMENTS_SORTING:In("ARGUMENTS_SORTING",uf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:In("QUERY_GENERATION_FACTORIES",of(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:In("PAGES",Es(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:In("EXTERNAL_LINKS",Es(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:In("DIRECTIVES",Es(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const BD="LCDB GraphQL",PD="/docs",$D="https://lcdb.org/images/logo.svg",MD="https://lcdb.org/favicon.ico",GD='[{"title":"Welcome","content":"\\nLCDB GraphQL Database\\n=====================\\n\\nThis is the graph database for [lcdb.org](https://lcdb.org).\\n\\nYou are free to use this database for your own purposes.\\n\\nYou may explore the GraphQL with [graphiql](https://graphql.lcdb.org/graphiql) or POST to `https://graphql.lcdb.org`\\n          "},{"title":"Example Queries","content":"\\nExample Queries\\n===============\\n\\nFetch performances with artist name and sources\\n-----------------------------------------------\\n\\n```graphql\\nquery MyQuery {\\n  performances {\\n    edges {\\n      node {\\n        artist {\\n          name\\n        }\\n        date\\n        year\\n        venue\\n        city\\n        state\\n        sources {\\n          edges {\\n            node {\\n              id\\n              comments\\n              createdAt\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n```\\n\\n\\nFetch a single source\\n----------------------\\n\\n```graphql\\nquery MyQuery {\\n  source(id: 211) {\\n    comments\\n    textdoc\\n    id\\n    archiveIdentifier\\n    performance {\\n      date\\n      year\\n      artist {\\n        name\\n      }\\n    }\\n  }\\n}\\n```\\n\\n\\n          "}]',VD="true",Wf={APP_TITLE:BD,SITE_ROOT:PD,APP_LOGO:$D,APP_FAVICON:MD,PAGES:GD,MAGIDOC_GENERATE:VD};function RS(r){return r.get(Wf)}function js(r,n){return r.getOrDefault(Wf,n)}function qs(){return js(Vs.SITE_ROOT,kF)}class jD{constructor(n){Ee(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var bi;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(bi||(bi={}));function fe(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Xn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const qD=/\r\n|[\n\r]/g;function wo(r,n){let t=0,a=1;for(const s of r.body.matchAll(qD)){if(typeof s.index=="number"||Xn(!1),s.index>=n)break;t=s.index+s[0].length,a+=1}return{line:a,column:n+1-t}}function zD(r){return Qf(r.source,wo(r.source,r.start))}function Qf(r,n){const t=r.locationOffset.column-1,a="".padStart(t)+r.body,s=n.line-1,o=r.locationOffset.line-1,l=n.line+o,f=n.line===1?t:0,p=n.column+f,_=`${r.name}:${l}:${p}
`,b=a.split(/\r\n|[\n\r]/g),F=b[s];if(F.length>120){const C=Math.floor(p/80),y=p%80,N=[];for(let U=0;U<F.length;U+=80)N.push(F.slice(U,U+80));return _+lf([[`${l} |`,N[0]],...N.slice(1,C+1).map(U=>["|",U]),["|","^".padStart(y)],["|",N[C+1]]])}return _+lf([[`${l-1} |`,b[s-1]],[`${l} |`,F],["|","^".padStart(p)],[`${l+1} |`,b[s+1]]])}function lf(r){const n=r.filter(([a,s])=>s!==void 0),t=Math.max(...n.map(([a])=>a.length));return n.map(([a,s])=>a.padStart(t)+(s?" "+s:"")).join(`
`)}function YD(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class R extends Error{constructor(n,...t){var a,s,o;const{nodes:l,source:f,positions:p,path:_,originalError:b,extensions:F}=YD(t);super(n),this.name="GraphQLError",this.path=_??void 0,this.originalError=b??void 0,this.nodes=cf(Array.isArray(l)?l:l?[l]:void 0);const C=cf((a=this.nodes)===null||a===void 0?void 0:a.map(N=>N.loc).filter(N=>N!=null));this.source=f??(C==null||(s=C[0])===null||s===void 0?void 0:s.source),this.positions=p??(C==null?void 0:C.map(N=>N.start)),this.locations=p&&f?p.map(N=>wo(f,N)):C==null?void 0:C.map(N=>wo(N.source,N.start));const y=Ct(b==null?void 0:b.extensions)?b==null?void 0:b.extensions:void 0;this.extensions=(o=F??y)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),b!=null&&b.stack?Object.defineProperty(this,"stack",{value:b.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,R):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+zD(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Qf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function cf(r){return r===void 0||r.length===0?void 0:r}function Je(r,n,t){return new R(`Syntax Error: ${t}`,{source:r,positions:[n]})}class WD{constructor(n,t,a){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=a}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Jf{constructor(n,t,a,s,o,l){this.kind=n,this.start=t,this.end=a,this.line=s,this.column=o,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Hf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},QD=new Set(Object.keys(Hf));function ff(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&QD.has(n)}var $n;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})($n||($n={}));var Y;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Y||(Y={}));var v;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(v||(v={}));function Co(r){return r===9||r===32}function Ei(r){return r>=48&&r<=57}function Xf(r){return r>=97&&r<=122||r>=65&&r<=90}function Ho(r){return Xf(r)||r===95}function Zf(r){return Xf(r)||Ei(r)||r===95}function JD(r){var n;let t=Number.MAX_SAFE_INTEGER,a=null,s=-1;for(let l=0;l<r.length;++l){var o;const f=r[l],p=HD(f);p!==f.length&&(a=(o=a)!==null&&o!==void 0?o:l,s=l,l!==0&&p<t&&(t=p))}return r.map((l,f)=>f===0?l:l.slice(t)).slice((n=a)!==null&&n!==void 0?n:0,s+1)}function HD(r){let n=0;for(;n<r.length&&Co(r.charCodeAt(n));)++n;return n}function XD(r,n){const t=r.replace(/"""/g,'\\"""'),a=t.split(/\r\n|[\n\r]/g),s=a.length===1,o=a.length>1&&a.slice(1).every(y=>y.length===0||Co(y.charCodeAt(0))),l=t.endsWith('\\"""'),f=r.endsWith('"')&&!l,p=r.endsWith("\\"),_=f||p,b=!s||r.length>70||_||o||l;let F="";const C=s&&Co(r.charCodeAt(0));return(b&&!C||o)&&(F+=`
`),F+=t,(b||_)&&(F+=`
`),'"""'+F+'"""'}var O;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(O||(O={}));class ZD{constructor(n){const t=new Jf(O.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==O.EOF)do if(n.next)n=n.next;else{const t=ev(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===O.COMMENT);return n}}function KD(r){return r===O.BANG||r===O.DOLLAR||r===O.AMP||r===O.PAREN_L||r===O.PAREN_R||r===O.SPREAD||r===O.COLON||r===O.EQUALS||r===O.AT||r===O.BRACKET_L||r===O.BRACKET_R||r===O.BRACE_L||r===O.PIPE||r===O.BRACE_R}function $r(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function zs(r,n){return Kf(r.charCodeAt(n))&&ep(r.charCodeAt(n+1))}function Kf(r){return r>=55296&&r<=56319}function ep(r){return r>=56320&&r<=57343}function dr(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return O.EOF;if(t>=32&&t<=126){const a=String.fromCodePoint(t);return a==='"'?`'"'`:`"${a}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function je(r,n,t,a,s){const o=r.line,l=1+t-r.lineStart;return new Jf(n,t,a,o,l,s)}function ev(r,n){const t=r.source.body,a=t.length;let s=n;for(;s<a;){const o=t.charCodeAt(s);switch(o){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++r.line,r.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++r.line,r.lineStart=s;continue;case 35:return nv(r,s);case 33:return je(r,O.BANG,s,s+1);case 36:return je(r,O.DOLLAR,s,s+1);case 38:return je(r,O.AMP,s,s+1);case 40:return je(r,O.PAREN_L,s,s+1);case 41:return je(r,O.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return je(r,O.SPREAD,s,s+3);break;case 58:return je(r,O.COLON,s,s+1);case 61:return je(r,O.EQUALS,s,s+1);case 64:return je(r,O.AT,s,s+1);case 91:return je(r,O.BRACKET_L,s,s+1);case 93:return je(r,O.BRACKET_R,s,s+1);case 123:return je(r,O.BRACE_L,s,s+1);case 124:return je(r,O.PIPE,s,s+1);case 125:return je(r,O.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?ov(r,s):rv(r,s)}if(Ei(o)||o===45)return tv(r,s,o);if(Ho(o))return uv(r,s);throw Je(r.source,s,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$r(o)||zs(t,s)?`Unexpected character: ${dr(r,s)}.`:`Invalid character: ${dr(r,s)}.`)}return je(r,O.EOF,a,a)}function nv(r,n){const t=r.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(o===10||o===13)break;if($r(o))++s;else if(zs(t,s))s+=2;else break}return je(r,O.COMMENT,n,s,t.slice(n+1,s))}function tv(r,n,t){const a=r.source.body;let s=n,o=t,l=!1;if(o===45&&(o=a.charCodeAt(++s)),o===48){if(o=a.charCodeAt(++s),Ei(o))throw Je(r.source,s,`Invalid number, unexpected digit after 0: ${dr(r,s)}.`)}else s=vo(r,s,o),o=a.charCodeAt(s);if(o===46&&(l=!0,o=a.charCodeAt(++s),s=vo(r,s,o),o=a.charCodeAt(s)),(o===69||o===101)&&(l=!0,o=a.charCodeAt(++s),(o===43||o===45)&&(o=a.charCodeAt(++s)),s=vo(r,s,o),o=a.charCodeAt(s)),o===46||Ho(o))throw Je(r.source,s,`Invalid number, expected digit but got: ${dr(r,s)}.`);return je(r,l?O.FLOAT:O.INT,n,s,a.slice(n,s))}function vo(r,n,t){if(!Ei(t))throw Je(r.source,n,`Invalid number, expected digit but got: ${dr(r,n)}.`);const a=r.source.body;let s=n+1;for(;Ei(a.charCodeAt(s));)++s;return s}function rv(r,n){const t=r.source.body,a=t.length;let s=n+1,o=s,l="";for(;s<a;){const f=t.charCodeAt(s);if(f===34)return l+=t.slice(o,s),je(r,O.STRING,n,s+1,l);if(f===92){l+=t.slice(o,s);const p=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?iv(r,s):sv(r,s):av(r,s);l+=p.value,s+=p.size,o=s;continue}if(f===10||f===13)break;if($r(f))++s;else if(zs(t,s))s+=2;else throw Je(r.source,s,`Invalid character within String: ${dr(r,s)}.`)}throw Je(r.source,s,"Unterminated string.")}function iv(r,n){const t=r.source.body;let a=0,s=3;for(;s<12;){const o=t.charCodeAt(n+s++);if(o===125){if(s<5||!$r(a))break;return{value:String.fromCodePoint(a),size:s}}if(a=a<<4|pi(o),a<0)break}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function sv(r,n){const t=r.source.body,a=pf(t,n+2);if($r(a))return{value:String.fromCodePoint(a),size:6};if(Kf(a)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=pf(t,n+8);if(ep(s))return{value:String.fromCodePoint(a,s),size:12}}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function pf(r,n){return pi(r.charCodeAt(n))<<12|pi(r.charCodeAt(n+1))<<8|pi(r.charCodeAt(n+2))<<4|pi(r.charCodeAt(n+3))}function pi(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function av(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Je(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function ov(r,n){const t=r.source.body,a=t.length;let s=r.lineStart,o=n+3,l=o,f="";const p=[];for(;o<a;){const _=t.charCodeAt(o);if(_===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){f+=t.slice(l,o),p.push(f);const b=je(r,O.BLOCK_STRING,n,o+3,JD(p).join(`
`));return r.line+=p.length-1,r.lineStart=s,b}if(_===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){f+=t.slice(l,o),l=o+1,o+=4;continue}if(_===10||_===13){f+=t.slice(l,o),p.push(f),_===13&&t.charCodeAt(o+1)===10?o+=2:++o,f="",l=o,s=o;continue}if($r(_))++o;else if(zs(t,o))o+=2;else throw Je(r.source,o,`Invalid character within String: ${dr(r,o)}.`)}throw Je(r.source,o,"Unterminated string.")}function uv(r,n){const t=r.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(Zf(o))++s;else break}return je(r,O.NAME,n,s,t.slice(n,s))}const lv=10,np=2;function $(r){return Ys(r,[])}function Ys(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return cv(r,n);default:return String(r)}}function cv(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(fv(r)){const a=r.toJSON();if(a!==r)return typeof a=="string"?a:Ys(a,t)}else if(Array.isArray(r))return dv(r,t);return pv(r,t)}function fv(r){return typeof r.toJSON=="function"}function pv(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>np?"["+hv(r)+"]":"{ "+t.map(([s,o])=>s+": "+Ys(o,n)).join(", ")+" }"}function dv(r,n){if(r.length===0)return"[]";if(n.length>np)return"[Array]";const t=Math.min(lv,r.length),a=r.length-t,s=[];for(let o=0;o<t;++o)s.push(Ys(r[o],n));return a===1?s.push("... 1 more item"):a>1&&s.push(`... ${a} more items`),"["+s.join(", ")+"]"}function hv(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const gv=globalThis.process&&!0,pt=gv?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var a;const s=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in n?n[Symbol.toStringTag]:(a=n.constructor)===null||a===void 0?void 0:a.name;if(s===o){const l=$(n);throw new Error(`Cannot use ${s} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class tp{constructor(n,t="GraphQL request",a={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${$(n)}.`),this.body=n,this.name=t,this.locationOffset=a,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function _v(r){return pt(r,tp)}function bv(r,n){return new rp(r,n).parseDocument()}function mv(r,n){const t=new rp(r,n);t.expectToken(O.SOF);const a=t.parseValueLiteral(!1);return t.expectToken(O.EOF),a}class rp{constructor(n,t={}){const a=_v(n)?n:new tp(n);this._lexer=new ZD(a),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(O.NAME);return this.node(n,{kind:v.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.DOCUMENT,definitions:this.many(O.SOF,this.parseDefinition,O.EOF)})}parseDefinition(){if(this.peek(O.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===O.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Je(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(O.BRACE_L))return this.node(n,{kind:v.OPERATION_DEFINITION,operation:$n.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let a;return this.peek(O.NAME)&&(a=this.parseName()),this.node(n,{kind:v.OPERATION_DEFINITION,operation:t,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(O.NAME);switch(n.value){case"query":return $n.QUERY;case"mutation":return $n.MUTATION;case"subscription":return $n.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(O.PAREN_L,this.parseVariableDefinition,O.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(O.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(O.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(O.DOLLAR),this.node(n,{kind:v.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.SELECTION_SET,selections:this.many(O.BRACE_L,this.parseSelection,O.BRACE_R)})}parseSelection(){return this.peek(O.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let a,s;return this.expectOptionalToken(O.COLON)?(a=t,s=this.parseName()):s=t,this.node(n,{kind:v.FIELD,alias:a,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(O.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(O.PAREN_L,t,O.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,a=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:v.ARGUMENT,name:a,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(O.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(O.NAME)?this.node(n,{kind:v.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:v.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case O.BRACKET_L:return this.parseList(n);case O.BRACE_L:return this.parseObject(n);case O.INT:return this.advanceLexer(),this.node(t,{kind:v.INT,value:t.value});case O.FLOAT:return this.advanceLexer(),this.node(t,{kind:v.FLOAT,value:t.value});case O.STRING:case O.BLOCK_STRING:return this.parseStringLiteral();case O.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:v.BOOLEAN,value:!0});case"false":return this.node(t,{kind:v.BOOLEAN,value:!1});case"null":return this.node(t,{kind:v.NULL});default:return this.node(t,{kind:v.ENUM,value:t.value})}case O.DOLLAR:if(n)if(this.expectToken(O.DOLLAR),this._lexer.token.kind===O.NAME){const a=this._lexer.token.value;throw Je(this._lexer.source,t.start,`Unexpected variable "$${a}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:v.STRING,value:n.value,block:n.kind===O.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:v.LIST,values:this.any(O.BRACKET_L,t,O.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:v.OBJECT,fields:this.any(O.BRACE_L,t,O.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,a=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:v.OBJECT_FIELD,name:a,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(O.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(O.AT),this.node(t,{kind:v.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(O.BRACKET_L)){const a=this.parseTypeReference();this.expectToken(O.BRACKET_R),t=this.node(n,{kind:v.LIST_TYPE,type:a})}else t=this.parseNamedType();return this.expectOptionalToken(O.BANG)?this.node(n,{kind:v.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:v.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(O.STRING)||this.peek(O.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const a=this.parseConstDirectives(),s=this.many(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);return this.node(n,{kind:v.SCHEMA_DEFINITION,description:t,directives:a,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(O.COLON);const a=this.parseNamedType();return this.node(n,{kind:v.OPERATION_TYPE_DEFINITION,operation:t,type:a})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const a=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:v.SCALAR_TYPE_DEFINITION,description:t,name:a,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:v.OBJECT_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(O.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseFieldDefinition,O.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName(),s=this.parseArgumentDefs();this.expectToken(O.COLON);const o=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:v.FIELD_DEFINITION,description:t,name:a,arguments:s,type:o,directives:l})}parseArgumentDefs(){return this.optionalMany(O.PAREN_L,this.parseInputValueDef,O.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName();this.expectToken(O.COLON);const s=this.parseTypeReference();let o;this.expectOptionalToken(O.EQUALS)&&(o=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:v.INPUT_VALUE_DEFINITION,description:t,name:a,type:s,defaultValue:o,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:v.INTERFACE_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:v.UNION_TYPE_DEFINITION,description:t,name:a,directives:s,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(O.EQUALS)?this.delimitedMany(O.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:v.ENUM_TYPE_DEFINITION,description:t,name:a,directives:s,values:o})}parseEnumValuesDefinition(){return this.optionalMany(O.BRACE_L,this.parseEnumValueDefinition,O.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:v.ENUM_VALUE_DEFINITION,description:t,name:a,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Je(this._lexer.source,this._lexer.token.start,`${Ts(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:v.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:a,directives:s,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseInputValueDef,O.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===O.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),a=this.optionalMany(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);if(t.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:v.SCHEMA_EXTENSION,directives:t,operationTypes:a})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),a=this.parseConstDirectives();if(a.length===0)throw this.unexpected();return this.node(n,{kind:v.SCALAR_TYPE_EXTENSION,name:t,directives:a})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:v.OBJECT_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:v.INTERFACE_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:v.UNION_TYPE_EXTENSION,name:t,directives:a,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:v.ENUM_TYPE_EXTENSION,name:t,directives:a,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:v.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:a,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(O.AT);const a=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:v.DIRECTIVE_DEFINITION,description:t,name:a,arguments:s,repeatable:o,locations:l})}parseDirectiveLocations(){return this.delimitedMany(O.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Y,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new WD(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Je(this._lexer.source,t.start,`Expected ${ip(n)}, found ${Ts(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===O.NAME&&t.value===n)this.advanceLexer();else throw Je(this._lexer.source,t.start,`Expected "${n}", found ${Ts(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===O.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Je(this._lexer.source,t.start,`Unexpected ${Ts(t)}.`)}any(n,t,a){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(a);)s.push(t.call(this));return s}optionalMany(n,t,a){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}return[]}many(n,t,a){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}delimitedMany(n,t){this.expectOptionalToken(n);const a=[];do a.push(t.call(this));while(this.expectOptionalToken(n));return a}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==O.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Je(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Ts(r){const n=r.value;return ip(r.kind)+(n!=null?` "${n}"`:"")}function ip(r){return KD(r)?`"${r}"`:r}const Fv=5;function Jt(r,n){const[t,a]=n?[r,n]:[void 0,r];let s=" Did you mean ";t&&(s+=t+" ");const o=a.map(p=>`"${p}"`);switch(o.length){case 0:return"";case 1:return s+o[0]+"?";case 2:return s+o[0]+" or "+o[1]+"?"}const l=o.slice(0,Fv),f=l.pop();return s+l.join(", ")+", or "+f+"?"}function df(r){return r}function hr(r,n){const t=Object.create(null);for(const a of r)t[n(a)]=a;return t}function cr(r,n,t){const a=Object.create(null);for(const s of r)a[n(s)]=t(s);return a}function yt(r,n){const t=Object.create(null);for(const a of Object.keys(r))t[a]=n(r[a],a);return t}function Xo(r,n){let t=0,a=0;for(;t<r.length&&a<n.length;){let s=r.charCodeAt(t),o=n.charCodeAt(a);if(ys(s)&&ys(o)){let l=0;do++t,l=l*10+s-xo,s=r.charCodeAt(t);while(ys(s)&&l>0);let f=0;do++a,f=f*10+o-xo,o=n.charCodeAt(a);while(ys(o)&&f>0);if(l<f)return-1;if(l>f)return 1}else{if(s<o)return-1;if(s>o)return 1;++t,++a}}return r.length-n.length}const xo=48,Dv=57;function ys(r){return!isNaN(r)&&xo<=r&&r<=Dv}function mr(r,n){const t=Object.create(null),a=new vv(r),s=Math.floor(r.length*.4)+1;for(const o of n){const l=a.measure(o,s);l!==void 0&&(t[o]=l)}return Object.keys(t).sort((o,l)=>{const f=t[o]-t[l];return f!==0?f:Xo(o,l)})}class vv{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=hf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const a=n.toLowerCase();if(this._inputLowerCase===a)return 1;let s=hf(a),o=this._inputArray;if(s.length<o.length){const b=s;s=o,o=b}const l=s.length,f=o.length;if(l-f>t)return;const p=this._rows;for(let b=0;b<=f;b++)p[0][b]=b;for(let b=1;b<=l;b++){const F=p[(b-1)%3],C=p[b%3];let y=C[0]=b;for(let N=1;N<=f;N++){const U=s[b-1]===o[N-1]?0:1;let z=Math.min(F[N]+1,C[N-1]+1,F[N-1]+U);if(b>1&&N>1&&s[b-1]===o[N-2]&&s[b-2]===o[N-1]){const ce=p[(b-2)%3][N-2];z=Math.min(z,ce+1)}z<y&&(y=z),C[N]=z}if(y>t)return}const _=p[l%3][f];return _<=t?_:void 0}}function hf(r){const n=r.length,t=new Array(n);for(let a=0;a<n;++a)t[a]=r.charCodeAt(a);return t}function Gn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,a]of Object.entries(r))n[t]=a;return n}function Ev(r){return`"${r.replace(Sv,Tv)}"`}const Sv=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Tv(r){return yv[r.charCodeAt(0)]}const yv=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],di=Object.freeze({});function sp(r,n,t=Hf){const a=new Map;for(const ce of Object.values(v))a.set(ce,ap(n,ce));let s,o=Array.isArray(r),l=[r],f=-1,p=[],_=r,b,F;const C=[],y=[];do{f++;const ce=f===l.length,Ie=ce&&p.length!==0;if(ce){if(b=y.length===0?void 0:C[C.length-1],_=F,F=y.pop(),Ie)if(o){_=_.slice();let ke=0;for(const[Be,pn]of p){const en=Be-ke;pn===null?(_.splice(en,1),ke++):_[en]=pn}}else{_=Object.defineProperties({},Object.getOwnPropertyDescriptors(_));for(const[ke,Be]of p)_[ke]=Be}f=s.index,l=s.keys,p=s.edits,o=s.inArray,s=s.prev}else if(F){if(b=o?f:l[f],_=F[b],_==null)continue;C.push(b)}let be;if(!Array.isArray(_)){var N,U;ff(_)||fe(!1,`Invalid AST Node: ${$(_)}.`);const ke=ce?(N=a.get(_.kind))===null||N===void 0?void 0:N.leave:(U=a.get(_.kind))===null||U===void 0?void 0:U.enter;if(be=ke==null?void 0:ke.call(n,_,b,F,C,y),be===di)break;if(be===!1){if(!ce){C.pop();continue}}else if(be!==void 0&&(p.push([b,be]),!ce))if(ff(be))_=be;else{C.pop();continue}}if(be===void 0&&Ie&&p.push([b,_]),ce)C.pop();else{var z;s={inArray:o,index:f,keys:l,edits:p,prev:s},o=Array.isArray(_),l=o?_:(z=t[_.kind])!==null&&z!==void 0?z:[],f=-1,p=[],F&&y.push(F),F=_}}while(s!==void 0);return p.length!==0?p[p.length-1][1]:r}function Iv(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const a of Object.values(v)){let s=!1;const o=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let p=0;p<r.length;++p){const{enter:_,leave:b}=ap(r[p],a);s||(s=_!=null||b!=null),o[p]=_,l[p]=b}if(!s)continue;const f={enter(...p){const _=p[0];for(let F=0;F<r.length;F++)if(n[F]===null){var b;const C=(b=o[F])===null||b===void 0?void 0:b.apply(r[F],p);if(C===!1)n[F]=_;else if(C===di)n[F]=di;else if(C!==void 0)return C}},leave(...p){const _=p[0];for(let F=0;F<r.length;F++)if(n[F]===null){var b;const C=(b=l[F])===null||b===void 0?void 0:b.apply(r[F],p);if(C===di)n[F]=di;else if(C!==void 0&&C!==!1)return C}else n[F]===_&&(n[F]=null)}};t[a]=f}return t}function ap(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function He(r){return sp(r,Nv)}const Av=80,Nv={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>j(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",j(r.variableDefinitions,", "),")"),t=j([r.operation,j([r.name,n]),j(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:a})=>r+": "+n+ue(" = ",t)+ue(" ",j(a," "))},SelectionSet:{leave:({selections:r})=>Qn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:a,selectionSet:s}){const o=ue("",r,": ")+n;let l=o+ue("(",j(t,", "),")");return l.length>Av&&(l=o+ue(`(
`,Ns(j(t,`
`)),`
)`)),j([l,j(a," "),s]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",j(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>j(["...",ue("on ",r),j(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:a,selectionSet:s})=>`fragment ${r}${ue("(",j(t,", "),")")} on ${n} ${ue("",j(a," ")," ")}`+s},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?XD(r):Ev(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+j(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+j(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",j(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+j(["schema",j(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j(["scalar",n,j(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:a,fields:s})=>ue("",r,`
`)+j(["type",n,ue("implements ",j(t," & ")),j(a," "),Qn(s)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:a,directives:s})=>ue("",r,`
`)+n+(gf(t)?ue(`(
`,Ns(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+": "+a+ue(" ",j(s," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:a,directives:s})=>ue("",r,`
`)+j([n+": "+t,ue("= ",a),j(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:a,fields:s})=>ue("",r,`
`)+j(["interface",n,ue("implements ",j(t," & ")),j(a," "),Qn(s)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:a})=>ue("",r,`
`)+j(["union",n,j(t," "),ue("= ",j(a," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:a})=>ue("",r,`
`)+j(["enum",n,j(t," "),Qn(a)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j([n,j(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:a})=>ue("",r,`
`)+j(["input",n,j(t," "),Qn(a)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:a,locations:s})=>ue("",r,`
`)+"directive @"+n+(gf(t)?ue(`(
`,Ns(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+(a?" repeatable":"")+" on "+j(s," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>j(["extend schema",j(r," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>j(["extend scalar",r,j(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:a})=>j(["extend type",r,ue("implements ",j(n," & ")),j(t," "),Qn(a)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:a})=>j(["extend interface",r,ue("implements ",j(n," & ")),j(t," "),Qn(a)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>j(["extend union",r,j(n," "),ue("= ",j(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>j(["extend enum",r,j(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>j(["extend input",r,j(n," "),Qn(t)]," ")}};function j(r,n=""){var t;return(t=r==null?void 0:r.filter(a=>a).join(n))!==null&&t!==void 0?t:""}function Qn(r){return ue(`{
`,Ns(j(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function Ns(r){return ue("  ",r.replace(/\n/g,`
  `))}function gf(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Oo(r,n){switch(r.kind){case v.NULL:return null;case v.INT:return parseInt(r.value,10);case v.FLOAT:return parseFloat(r.value);case v.STRING:case v.ENUM:case v.BOOLEAN:return r.value;case v.LIST:return r.values.map(t=>Oo(t,n));case v.OBJECT:return cr(r.fields,t=>t.name.value,t=>Oo(t.value,n));case v.VARIABLE:return n==null?void 0:n[r.name.value]}}function rt(r){if(r!=null||fe(!1,"Must provide name."),typeof r=="string"||fe(!1,"Expected name to be a string."),r.length===0)throw new R("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Zf(r.charCodeAt(n)))throw new R(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ho(r.charCodeAt(0)))throw new R(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function wv(r){if(r==="true"||r==="false"||r==="null")throw new R(`Enum values cannot be named: ${r}`);return rt(r)}function Zo(r){return Ht(r)||ze(r)||Ve(r)||Mn(r)||Zn(r)||mn(r)||Fn(r)||ye(r)}function Ht(r){return pt(r,xt)}function ze(r){return pt(r,ct)}function Cv(r){if(!ze(r))throw new Error(`Expected ${$(r)} to be a GraphQL Object type.`);return r}function Ve(r){return pt(r,Ls)}function xv(r){if(!Ve(r))throw new Error(`Expected ${$(r)} to be a GraphQL Interface type.`);return r}function Mn(r){return pt(r,Rs)}function Zn(r){return pt(r,Pr)}function mn(r){return pt(r,Us)}function Fn(r){return pt(r,cn)}function ye(r){return pt(r,ie)}function Ko(r){return Ht(r)||Zn(r)||mn(r)||eu(r)&&Ko(r.ofType)}function op(r){return Ht(r)||ze(r)||Ve(r)||Mn(r)||Zn(r)||eu(r)&&op(r.ofType)}function Br(r){return Ht(r)||Zn(r)}function Si(r){return ze(r)||Ve(r)||Mn(r)}function fr(r){return Ve(r)||Mn(r)}class cn{constructor(n){Zo(n)||fe(!1,`Expected ${$(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){up(n)||fe(!1,`Expected ${$(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function eu(r){return Fn(r)||ye(r)}function up(r){return Zo(r)&&!ye(r)}function Ov(r){if(!up(r))throw new Error(`Expected ${$(r)} to be a GraphQL nullable type.`);return r}function kv(r){if(r)return ye(r)?r.ofType:r}function US(r){return Ht(r)||ze(r)||Ve(r)||Mn(r)||Zn(r)||mn(r)}function gr(r){if(r){let n=r;for(;eu(n);)n=n.ofType;return n}}function lp(r){return typeof r=="function"?r():r}function cp(r){return typeof r=="function"?r():r}class xt{constructor(n){var t,a,s,o;const l=(t=n.parseValue)!==null&&t!==void 0?t:df;this.name=rt(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(a=n.serialize)!==null&&a!==void 0?a:df,this.parseValue=l,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(f,p)=>l(Oo(f,p)),this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${$(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ct{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>pp(n),this._interfaces=()=>fp(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${$(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:hp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function fp(r){var n;const t=lp((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function pp(r){const n=cp(r.fields);return Ur(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),yt(n,(t,a)=>{var s;Ur(t)||fe(!1,`${r.name}.${a} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${r.name}.${a} field resolver must be a function if provided, but got: ${$(t.resolve)}.`);const o=(s=t.args)!==null&&s!==void 0?s:{};return Ur(o)||fe(!1,`${r.name}.${a} args must be an object with argument names as keys.`),{name:rt(a),description:t.description,type:t.type,args:dp(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}})}function dp(r){return Object.entries(r).map(([n,t])=>({name:rt(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function Ur(r){return Ct(r)&&!Array.isArray(r)}function hp(r){return yt(r,n=>({description:n.description,type:n.type,args:gp(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function gp(r){return cr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function _p(r){return ye(r.type)&&r.defaultValue===void 0}class Ls{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=pp.bind(void 0,n),this._interfaces=fp.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:hp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Rs{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=Lv.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Lv(r){const n=lp(r.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Pr{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:_f(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=_f(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=hr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(a=>[a.value,a])));const t=this._valueLookup.get(n);if(t===void 0)throw new R(`Enum "${this.name}" cannot represent value: ${$(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const a=$(n);throw new R(`Enum "${this.name}" cannot represent non-string value: ${a}.`+Is(this,a))}const t=this.getValue(n);if(t==null)throw new R(`Value "${n}" does not exist in "${this.name}" enum.`+Is(this,n));return t.value}parseLiteral(n,t){if(n.kind!==v.ENUM){const s=He(n);throw new R(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+Is(this,s),{nodes:n})}const a=this.getValue(n.value);if(a==null){const s=He(n);throw new R(`Value "${s}" does not exist in "${this.name}" enum.`+Is(this,s),{nodes:n})}return a.value}toConfig(){const n=cr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Is(r,n){const t=r.getValues().map(s=>s.name),a=mr(n,t);return Jt("the enum value",a)}function _f(r,n){return Ur(n)||fe(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,a])=>(Ur(a)||fe(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${$(a)}.`),{name:wv(t),description:a.description,value:a.value!==void 0?a.value:t,deprecationReason:a.deprecationReason,extensions:Gn(a.extensions),astNode:a.astNode}))}class Us{constructor(n){var t,a;this.name=rt(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(a=n.isOneOf)!==null&&a!==void 0?a:!1,this._fields=Rv.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=yt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function Rv(r){const n=cp(r.fields);return Ur(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),yt(n,(t,a)=>(!("resolve"in t)||fe(!1,`${r.name}.${a} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(a),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function Uv(r){return ye(r.type)&&r.defaultValue===void 0}function mi(r,n,t){return n===t?!0:ye(t)?ye(n)?mi(r,n.ofType,t.ofType):!1:ye(n)?mi(r,n.ofType,t):Fn(t)?Fn(n)?mi(r,n.ofType,t.ofType):!1:Fn(n)?!1:fr(t)&&(Ve(n)||ze(n))&&r.isSubType(t,n)}function bf(r,n,t){return n===t?!0:fr(n)?fr(t)?r.getPossibleTypes(n).some(a=>r.isSubType(t,a)):r.isSubType(n,t):fr(t)?r.isSubType(t,n):!1}const Eo=2147483647,So=-2147483648,Bv=new xt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Ni(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new R(`Int cannot represent non-integer value: ${$(n)}`);if(t>Eo||t<So)throw new R("Int cannot represent non 32-bit signed integer value: "+$(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new R(`Int cannot represent non-integer value: ${$(r)}`);if(r>Eo||r<So)throw new R(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==v.INT)throw new R(`Int cannot represent non-integer value: ${He(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>Eo||n<So)throw new R(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),Pv=new xt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Ni(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new R(`Float cannot represent non numeric value: ${$(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new R(`Float cannot represent non numeric value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==v.FLOAT&&r.kind!==v.INT)throw new R(`Float cannot represent non numeric value: ${He(r)}`,r);return parseFloat(r.value)}}),Ge=new xt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Ni(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new R(`String cannot represent value: ${$(r)}`)},parseValue(r){if(typeof r!="string")throw new R(`String cannot represent a non string value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==v.STRING)throw new R(`String cannot represent a non string value: ${He(r)}`,{nodes:r});return r.value}}),Nn=new xt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Ni(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new R(`Boolean cannot represent a non boolean value: ${$(n)}`)},parseValue(r){if(typeof r!="boolean")throw new R(`Boolean cannot represent a non boolean value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==v.BOOLEAN)throw new R(`Boolean cannot represent a non boolean value: ${He(r)}`,{nodes:r});return r.value}}),bp=new xt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Ni(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new R(`ID cannot represent value: ${$(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new R(`ID cannot represent value: ${$(r)}`)},parseLiteral(r){if(r.kind!==v.STRING&&r.kind!==v.INT)throw new R("ID cannot represent a non-string and non-integer value: "+He(r),{nodes:r});return r.value}}),Ws=Object.freeze([Ge,Bv,Pv,Nn,bp]);function $v(r){return Ws.some(({name:n})=>r.name===n)}function Ni(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function Mv(r){return pt(r,Ot)}class Ot{constructor(n){var t,a;this.name=rt(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Gn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const s=(a=n.args)!==null&&a!==void 0?a:{};Ct(s)&&!Array.isArray(s)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=dp(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:gp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const mp=new Ot({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[Y.FIELD,Y.FRAGMENT_SPREAD,Y.INLINE_FRAGMENT],args:{if:{type:new ie(Nn),description:"Included when true."}}}),Fp=new Ot({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[Y.FIELD,Y.FRAGMENT_SPREAD,Y.INLINE_FRAGMENT],args:{if:{type:new ie(Nn),description:"Skipped when true."}}}),Gv="No longer supported",Dp=new Ot({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[Y.FIELD_DEFINITION,Y.ARGUMENT_DEFINITION,Y.INPUT_FIELD_DEFINITION,Y.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:Gv}}}),vp=new Ot({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[Y.SCALAR],args:{url:{type:new ie(Ge),description:"The URL that specifies the behavior of this scalar."}}}),Ep=new Ot({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[Y.INPUT_OBJECT],args:{}}),Mr=Object.freeze([mp,Fp,Dp,vp,Ep]);function Vv(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function hi(r,n){if(ye(n)){const t=hi(r,n.ofType);return(t==null?void 0:t.kind)===v.NULL?null:t}if(r===null)return{kind:v.NULL};if(r===void 0)return null;if(Fn(n)){const t=n.ofType;if(Vv(r)){const a=[];for(const s of r){const o=hi(s,t);o!=null&&a.push(o)}return{kind:v.LIST,values:a}}return hi(r,t)}if(mn(n)){if(!Ct(r))return null;const t=[];for(const a of Object.values(n.getFields())){const s=hi(r[a.name],a.type);s&&t.push({kind:v.OBJECT_FIELD,name:{kind:v.NAME,value:a.name},value:s})}return{kind:v.OBJECT,fields:t}}if(Br(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:v.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const a=String(t);return mf.test(a)?{kind:v.INT,value:a}:{kind:v.FLOAT,value:a}}if(typeof t=="string")return Zn(n)?{kind:v.ENUM,value:t}:n===bp&&mf.test(t)?{kind:v.INT,value:t}:{kind:v.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${$(t)}.`)}Xn(!1,"Unexpected input type: "+$(n))}const mf=/^-?(?:0|[1-9][0-9]*)$/,nu=new ct({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new cn(new ie(lt))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(lt),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:lt,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:lt,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new cn(new ie(Sp))),resolve:r=>r.getDirectives()}})}),Sp=new ct({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isRepeatable:{type:new ie(Nn),resolve:r=>r.isRepeatable},locations:{type:new ie(new cn(new ie(Tp))),resolve:r=>r.locations},args:{type:new ie(new cn(new ie(Qs))),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),Tp=new Pr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:Y.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:Y.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:Y.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:Y.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:Y.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:Y.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:Y.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:Y.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:Y.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:Y.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:Y.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:Y.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:Y.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:Y.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:Y.UNION,description:"Location adjacent to a union definition."},ENUM:{value:Y.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:Y.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:Y.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:Y.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),lt=new ct({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(Ap),resolve(r){if(Ht(r))return Se.SCALAR;if(ze(r))return Se.OBJECT;if(Ve(r))return Se.INTERFACE;if(Mn(r))return Se.UNION;if(Zn(r))return Se.ENUM;if(mn(r))return Se.INPUT_OBJECT;if(Fn(r))return Se.LIST;if(ye(r))return Se.NON_NULL;Xn(!1,`Unexpected type: "${$(r)}".`)}},name:{type:Ge,resolve:r=>"name"in r?r.name:void 0},description:{type:Ge,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Ge,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new cn(new ie(yp)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(ze(r)||Ve(r)){const t=Object.values(r.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},interfaces:{type:new cn(new ie(lt)),resolve(r){if(ze(r)||Ve(r))return r.getInterfaces()}},possibleTypes:{type:new cn(new ie(lt)),resolve(r,n,t,{schema:a}){if(fr(r))return a.getPossibleTypes(r)}},enumValues:{type:new cn(new ie(Ip)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Zn(r)){const t=r.getValues();return n?t:t.filter(a=>a.deprecationReason==null)}}},inputFields:{type:new cn(new ie(Qs)),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(mn(r)){const t=Object.values(r.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},ofType:{type:lt,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:Nn,resolve:r=>{if(mn(r))return r.isOneOf}}})}),yp=new ct({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},args:{type:new ie(new cn(new ie(Qs))),args:{includeDeprecated:{type:Nn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(lt),resolve:r=>r.type},isDeprecated:{type:new ie(Nn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Qs=new ct({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},type:{type:new ie(lt),resolve:r=>r.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,a=hi(t,n);return a?He(a):null}},isDeprecated:{type:new ie(Nn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Ip=new ct({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isDeprecated:{type:new ie(Nn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})});var Se;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(Se||(Se={}));const Ap=new Pr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Se.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Se.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Se.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Se.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Se.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Se.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Se.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Se.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(nu);new ie(Ge);new ie(Ge);const Js=Object.freeze([nu,Sp,Tp,lt,yp,Qs,Ip,Ap]);function jv(r){return Js.some(({name:n})=>r.name===n)}class Np{constructor(n){var t,a;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${$(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${$(n.directives)}.`),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(a=n.directives)!==null&&a!==void 0?a:Mr;const s=new Set(n.types);if(n.types!=null)for(const o of n.types)s.delete(o),Jn(o,s);this._queryType!=null&&Jn(this._queryType,s),this._mutationType!=null&&Jn(this._mutationType,s),this._subscriptionType!=null&&Jn(this._subscriptionType,s);for(const o of this._directives)if(Mv(o))for(const l of o.args)Jn(l.type,s);Jn(nu,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of s){if(o==null)continue;const l=o.name;if(l||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=o,Ve(o)){for(const f of o.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.interfaces.push(o)}}else if(ze(o)){for(const f of o.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case $n.QUERY:return this.getQueryType();case $n.MUTATION:return this.getMutationType();case $n.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Mn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let a=this._subTypeMap[n.name];if(a===void 0){if(a=Object.create(null),Mn(n))for(const s of n.getTypes())a[s.name]=!0;else{const s=this.getImplementations(n);for(const o of s.objects)a[o.name]=!0;for(const o of s.interfaces)a[o.name]=!0}this._subTypeMap[n.name]=a}return a[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Jn(r,n){const t=gr(r);if(!n.has(t)){if(n.add(t),Mn(t))for(const a of t.getTypes())Jn(a,n);else if(ze(t)||Ve(t)){for(const a of t.getInterfaces())Jn(a,n);for(const a of Object.values(t.getFields())){Jn(a.type,n);for(const s of a.args)Jn(s.type,n)}}else if(mn(t))for(const a of Object.values(t.getFields()))Jn(a.type,n)}return n}function ft(r,n){switch(n.kind){case v.LIST_TYPE:{const t=ft(r,n.type);return t&&new cn(t)}case v.NON_NULL_TYPE:{const t=ft(r,n.type);return t&&new ie(t)}case v.NAMED_TYPE:return r.getType(n.name.value)}}function qv(r){return r.kind===v.OPERATION_DEFINITION||r.kind===v.FRAGMENT_DEFINITION}function zv(r){return r.kind===v.SCHEMA_DEFINITION||wi(r)||r.kind===v.DIRECTIVE_DEFINITION}function wi(r){return r.kind===v.SCALAR_TYPE_DEFINITION||r.kind===v.OBJECT_TYPE_DEFINITION||r.kind===v.INTERFACE_TYPE_DEFINITION||r.kind===v.UNION_TYPE_DEFINITION||r.kind===v.ENUM_TYPE_DEFINITION||r.kind===v.INPUT_OBJECT_TYPE_DEFINITION}function Yv(r){return r.kind===v.SCHEMA_EXTENSION||tu(r)}function tu(r){return r.kind===v.SCALAR_TYPE_EXTENSION||r.kind===v.OBJECT_TYPE_EXTENSION||r.kind===v.INTERFACE_TYPE_EXTENSION||r.kind===v.UNION_TYPE_EXTENSION||r.kind===v.ENUM_TYPE_EXTENSION||r.kind===v.INPUT_OBJECT_TYPE_EXTENSION}function Wv(r){return{Document(n){for(const t of n.definitions)if(!qv(t)){const a=t.kind===v.SCHEMA_DEFINITION||t.kind===v.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new R(`The ${a} definition is not executable.`,{nodes:t}))}return!1}}}function Qv(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const s=r.getSchema(),o=n.name.value;let l=Jt("to use an inline fragment on",Jv(s,t,o));l===""&&(l=Jt(Hv(t,o))),r.reportError(new R(`Cannot query field "${o}" on type "${t.name}".`+l,{nodes:n}))}}}}function Jv(r,n,t){if(!fr(n))return[];const a=new Set,s=Object.create(null);for(const l of r.getPossibleTypes(n))if(l.getFields()[t]){a.add(l),s[l.name]=1;for(const f of l.getInterfaces()){var o;f.getFields()[t]&&(a.add(f),s[f.name]=((o=s[f.name])!==null&&o!==void 0?o:0)+1)}}return[...a].sort((l,f)=>{const p=s[f.name]-s[l.name];return p!==0?p:Ve(l)&&r.isSubType(l,f)?-1:Ve(f)&&r.isSubType(f,l)?1:Xo(l.name,f.name)}).map(l=>l.name)}function Hv(r,n){if(ze(r)||Ve(r)){const t=Object.keys(r.getFields());return mr(n,t)}return[]}function Xv(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const a=ft(r.getSchema(),t);if(a&&!Si(a)){const s=He(t);r.reportError(new R(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=ft(r.getSchema(),n.typeCondition);if(t&&!Si(t)){const a=He(n.typeCondition);r.reportError(new R(`Fragment "${n.name.value}" cannot condition on non composite type "${a}".`,{nodes:n.typeCondition}))}}}}function Zv(r){return{...wp(r),Argument(n){const t=r.getArgument(),a=r.getFieldDef(),s=r.getParentType();if(!t&&a&&s){const o=n.name.value,l=a.args.map(p=>p.name),f=mr(o,l);r.reportError(new R(`Unknown argument "${o}" on field "${s.name}.${a.name}".`+Jt(f),{nodes:n}))}}}}function wp(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const l of a)n[l.name]=l.args.map(f=>f.name);const s=r.getDocument().definitions;for(const l of s)if(l.kind===v.DIRECTIVE_DEFINITION){var o;const f=(o=l.arguments)!==null&&o!==void 0?o:[];n[l.name.value]=f.map(p=>p.name.value)}return{Directive(l){const f=l.name.value,p=n[f];if(l.arguments&&p)for(const _ of l.arguments){const b=_.name.value;if(!p.includes(b)){const F=mr(b,p);r.reportError(new R(`Unknown argument "${b}" on directive "@${f}".`+Jt(F),{nodes:_}))}}return!1}}}function Cp(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const o of a)n[o.name]=o.locations;const s=r.getDocument().definitions;for(const o of s)o.kind===v.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(l=>l.value));return{Directive(o,l,f,p,_){const b=o.name.value,F=n[b];if(!F){r.reportError(new R(`Unknown directive "@${b}".`,{nodes:o}));return}const C=Kv(_);C&&!F.includes(C)&&r.reportError(new R(`Directive "@${b}" may not be used on ${C}.`,{nodes:o}))}}}function Kv(r){const n=r[r.length-1];switch("kind"in n||Xn(!1),n.kind){case v.OPERATION_DEFINITION:return eE(n.operation);case v.FIELD:return Y.FIELD;case v.FRAGMENT_SPREAD:return Y.FRAGMENT_SPREAD;case v.INLINE_FRAGMENT:return Y.INLINE_FRAGMENT;case v.FRAGMENT_DEFINITION:return Y.FRAGMENT_DEFINITION;case v.VARIABLE_DEFINITION:return Y.VARIABLE_DEFINITION;case v.SCHEMA_DEFINITION:case v.SCHEMA_EXTENSION:return Y.SCHEMA;case v.SCALAR_TYPE_DEFINITION:case v.SCALAR_TYPE_EXTENSION:return Y.SCALAR;case v.OBJECT_TYPE_DEFINITION:case v.OBJECT_TYPE_EXTENSION:return Y.OBJECT;case v.FIELD_DEFINITION:return Y.FIELD_DEFINITION;case v.INTERFACE_TYPE_DEFINITION:case v.INTERFACE_TYPE_EXTENSION:return Y.INTERFACE;case v.UNION_TYPE_DEFINITION:case v.UNION_TYPE_EXTENSION:return Y.UNION;case v.ENUM_TYPE_DEFINITION:case v.ENUM_TYPE_EXTENSION:return Y.ENUM;case v.ENUM_VALUE_DEFINITION:return Y.ENUM_VALUE;case v.INPUT_OBJECT_TYPE_DEFINITION:case v.INPUT_OBJECT_TYPE_EXTENSION:return Y.INPUT_OBJECT;case v.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Xn(!1),t.kind===v.INPUT_OBJECT_TYPE_DEFINITION?Y.INPUT_FIELD_DEFINITION:Y.ARGUMENT_DEFINITION}default:Xn(!1,"Unexpected kind: "+$(n.kind))}}function eE(r){switch(r){case $n.QUERY:return Y.QUERY;case $n.MUTATION:return Y.MUTATION;case $n.SUBSCRIPTION:return Y.SUBSCRIPTION}}function nE(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new R(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function xp(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);for(const o of r.getDocument().definitions)wi(o)&&(a[o.name.value]=!0);const s=[...Object.keys(t),...Object.keys(a)];return{NamedType(o,l,f,p,_){const b=o.name.value;if(!t[b]&&!a[b]){var F;const C=(F=_[2])!==null&&F!==void 0?F:f,y=C!=null&&tE(C);if(y&&Ff.includes(b))return;const N=mr(b,y?Ff.concat(s):s);r.reportError(new R(`Unknown type "${b}".`+Jt(N),{nodes:o}))}}}}const Ff=[...Ws,...Js].map(r=>r.name);function tE(r){return"kind"in r&&(zv(r)||Yv(r))}function rE(r){let n=0;return{Document(t){n=t.definitions.filter(a=>a.kind===v.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new R("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function iE(r){var n,t,a;const s=r.getSchema(),o=(n=(t=(a=s==null?void 0:s.astNode)!==null&&a!==void 0?a:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let l=0;return{SchemaDefinition(f){if(o){r.reportError(new R("Cannot define a new schema within a schema extension.",{nodes:f}));return}l>0&&r.reportError(new R("Must provide only one schema definition.",{nodes:f})),++l}}}const sE=3;function aE(r){function n(t,a=Object.create(null),s=0){if(t.kind===v.FRAGMENT_SPREAD){const o=t.name.value;if(a[o]===!0)return!1;const l=r.getFragment(o);if(!l)return!1;try{return a[o]=!0,n(l,a,s)}finally{a[o]=void 0}}if(t.kind===v.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=sE))return!0;if("selectionSet"in t&&t.selectionSet){for(const o of t.selectionSet.selections)if(n(o,a,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new R("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function oE(r){const n=Object.create(null),t=[],a=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return s(o),!1}};function s(o){if(n[o.name.value])return;const l=o.name.value;n[l]=!0;const f=r.getFragmentSpreads(o.selectionSet);if(f.length!==0){a[l]=t.length;for(const p of f){const _=p.name.value,b=a[_];if(t.push(p),b===void 0){const F=r.getFragment(_);F&&s(F)}else{const F=t.slice(b),C=F.slice(0,-1).map(y=>'"'+y.name.value+'"').join(", ");r.reportError(new R(`Cannot spread fragment "${_}" within itself`+(C!==""?` via ${C}.`:"."),{nodes:F}))}t.pop()}a[l]=void 0}}}function uE(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=r.getRecursiveVariableUsages(t);for(const{node:s}of a){const o=s.name.value;n[o]!==!0&&r.reportError(new R(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function lE(r){const n=[],t=[];return{OperationDefinition(a){return n.push(a),!1},FragmentDefinition(a){return t.push(a),!1},Document:{leave(){const a=Object.create(null);for(const s of n)for(const o of r.getRecursivelyReferencedFragments(s))a[o.name.value]=!0;for(const s of t){const o=s.name.value;a[o]!==!0&&r.reportError(new R(`Fragment "${o}" is never used.`,{nodes:s}))}}}}}function cE(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const a=Object.create(null),s=r.getRecursiveVariableUsages(t);for(const{node:o}of s)a[o.name.value]=!0;for(const o of n){const l=o.variable.name.value;a[l]!==!0&&r.reportError(new R(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:o}))}}},VariableDefinition(t){n.push(t)}}}function ru(r){switch(r.kind){case v.OBJECT:return{...r,fields:fE(r.fields)};case v.LIST:return{...r,values:r.values.map(ru)};case v.INT:case v.FLOAT:case v.STRING:case v.BOOLEAN:case v.NULL:case v.ENUM:case v.VARIABLE:return r}}function fE(r){return r.map(n=>({...n,value:ru(n.value)})).sort((n,t)=>Xo(n.name.value,t.name.value))}function Op(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Op(t)).join(" and "):r}function pE(r){const n=new mE,t=new Map;return{SelectionSet(a){const s=dE(r,t,n,r.getParentType(),a);for(const[[o,l],f,p]of s){const _=Op(l);r.reportError(new R(`Fields "${o}" conflict because ${_}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(p)}))}}}}function dE(r,n,t,a,s){const o=[],[l,f]=$s(r,n,a,s);if(gE(r,o,n,t,l),f.length!==0)for(let p=0;p<f.length;p++){Bs(r,o,n,t,!1,l,f[p]);for(let _=p+1;_<f.length;_++)Ps(r,o,n,t,!1,f[p],f[_])}return o}function Bs(r,n,t,a,s,o,l){const f=r.getFragment(l);if(!f)return;const[p,_]=Lo(r,t,f);if(o!==p){iu(r,n,t,a,s,o,p);for(const b of _)a.has(b,l,s)||(a.add(b,l,s),Bs(r,n,t,a,s,o,b))}}function Ps(r,n,t,a,s,o,l){if(o===l||a.has(o,l,s))return;a.add(o,l,s);const f=r.getFragment(o),p=r.getFragment(l);if(!f||!p)return;const[_,b]=Lo(r,t,f),[F,C]=Lo(r,t,p);iu(r,n,t,a,s,_,F);for(const y of C)Ps(r,n,t,a,s,o,y);for(const y of b)Ps(r,n,t,a,s,y,l)}function hE(r,n,t,a,s,o,l,f){const p=[],[_,b]=$s(r,n,s,o),[F,C]=$s(r,n,l,f);iu(r,p,n,t,a,_,F);for(const y of C)Bs(r,p,n,t,a,_,y);for(const y of b)Bs(r,p,n,t,a,F,y);for(const y of b)for(const N of C)Ps(r,p,n,t,a,y,N);return p}function gE(r,n,t,a,s){for(const[o,l]of Object.entries(s))if(l.length>1)for(let f=0;f<l.length;f++)for(let p=f+1;p<l.length;p++){const _=kp(r,t,a,!1,o,l[f],l[p]);_&&n.push(_)}}function iu(r,n,t,a,s,o,l){for(const[f,p]of Object.entries(o)){const _=l[f];if(_)for(const b of p)for(const F of _){const C=kp(r,t,a,s,f,b,F);C&&n.push(C)}}}function kp(r,n,t,a,s,o,l){const[f,p,_]=o,[b,F,C]=l,y=a||f!==b&&ze(f)&&ze(b);if(!y){const Ie=p.name.value,be=F.name.value;if(Ie!==be)return[[s,`"${Ie}" and "${be}" are different fields`],[p],[F]];if(!_E(p,F))return[[s,"they have differing arguments"],[p],[F]]}const N=_==null?void 0:_.type,U=C==null?void 0:C.type;if(N&&U&&ko(N,U))return[[s,`they return conflicting types "${$(N)}" and "${$(U)}"`],[p],[F]];const z=p.selectionSet,ce=F.selectionSet;if(z&&ce){const Ie=hE(r,n,t,y,gr(N),z,gr(U),ce);return bE(Ie,s,p,F)}}function _E(r,n){const t=r.arguments,a=n.arguments;if(t===void 0||t.length===0)return a===void 0||a.length===0;if(a===void 0||a.length===0||t.length!==a.length)return!1;const s=new Map(a.map(({name:o,value:l})=>[o.value,l]));return t.every(o=>{const l=o.value,f=s.get(o.name.value);return f===void 0?!1:Df(l)===Df(f)})}function Df(r){return He(ru(r))}function ko(r,n){return Fn(r)?Fn(n)?ko(r.ofType,n.ofType):!0:Fn(n)?!0:ye(r)?ye(n)?ko(r.ofType,n.ofType):!0:ye(n)?!0:Br(r)||Br(n)?r!==n:!1}function $s(r,n,t,a){const s=n.get(a);if(s)return s;const o=Object.create(null),l=Object.create(null);Lp(r,t,a,o,l);const f=[o,Object.keys(l)];return n.set(a,f),f}function Lo(r,n,t){const a=n.get(t.selectionSet);if(a)return a;const s=ft(r.getSchema(),t.typeCondition);return $s(r,n,s,t.selectionSet)}function Lp(r,n,t,a,s){for(const o of t.selections)switch(o.kind){case v.FIELD:{const l=o.name.value;let f;(ze(n)||Ve(n))&&(f=n.getFields()[l]);const p=o.alias?o.alias.value:l;a[p]||(a[p]=[]),a[p].push([n,o,f]);break}case v.FRAGMENT_SPREAD:s[o.name.value]=!0;break;case v.INLINE_FRAGMENT:{const l=o.typeCondition,f=l?ft(r.getSchema(),l):n;Lp(r,f,o.selectionSet,a,s);break}}}function bE(r,n,t,a){if(r.length>0)return[[n,r.map(([s])=>s)],[t,...r.map(([,s])=>s).flat()],[a,...r.map(([,,s])=>s).flat()]]}class mE{constructor(){this._data=new Map}has(n,t,a){var s;const[o,l]=n<t?[n,t]:[t,n],f=(s=this._data.get(o))===null||s===void 0?void 0:s.get(l);return f===void 0?!1:a?!0:a===f}add(n,t,a){const[s,o]=n<t?[n,t]:[t,n],l=this._data.get(s);l===void 0?this._data.set(s,new Map([[o,a]])):l.set(o,a)}}function FE(r){return{InlineFragment(n){const t=r.getType(),a=r.getParentType();if(Si(t)&&Si(a)&&!bf(r.getSchema(),t,a)){const s=$(a),o=$(t);r.reportError(new R(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${o}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,a=DE(r,t),s=r.getParentType();if(a&&s&&!bf(r.getSchema(),a,s)){const o=$(s),l=$(a);r.reportError(new R(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${l}".`,{nodes:n}))}}}}function DE(r,n){const t=r.getFragment(n);if(t){const a=ft(r.getSchema(),t.typeCondition);if(Si(a))return a}}function vE(r){const n=r.getSchema(),t=Object.create(null);for(const s of r.getDocument().definitions)wi(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:a,ObjectTypeExtension:a,InterfaceTypeExtension:a,UnionTypeExtension:a,EnumTypeExtension:a,InputObjectTypeExtension:a};function a(s){const o=s.name.value,l=t[o],f=n==null?void 0:n.getType(o);let p;if(l?p=EE[l.kind]:f&&(p=SE(f)),p){if(p!==s.kind){const _=TE(s.kind);r.reportError(new R(`Cannot extend non-${_} type "${o}".`,{nodes:l?[l,s]:s}))}}else{const _=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),b=mr(o,_);r.reportError(new R(`Cannot extend type "${o}" because it is not defined.`+Jt(b),{nodes:s.name}))}}}const EE={[v.SCALAR_TYPE_DEFINITION]:v.SCALAR_TYPE_EXTENSION,[v.OBJECT_TYPE_DEFINITION]:v.OBJECT_TYPE_EXTENSION,[v.INTERFACE_TYPE_DEFINITION]:v.INTERFACE_TYPE_EXTENSION,[v.UNION_TYPE_DEFINITION]:v.UNION_TYPE_EXTENSION,[v.ENUM_TYPE_DEFINITION]:v.ENUM_TYPE_EXTENSION,[v.INPUT_OBJECT_TYPE_DEFINITION]:v.INPUT_OBJECT_TYPE_EXTENSION};function SE(r){if(Ht(r))return v.SCALAR_TYPE_EXTENSION;if(ze(r))return v.OBJECT_TYPE_EXTENSION;if(Ve(r))return v.INTERFACE_TYPE_EXTENSION;if(Mn(r))return v.UNION_TYPE_EXTENSION;if(Zn(r))return v.ENUM_TYPE_EXTENSION;if(mn(r))return v.INPUT_OBJECT_TYPE_EXTENSION;Xn(!1,"Unexpected type: "+$(r))}function TE(r){switch(r){case v.SCALAR_TYPE_EXTENSION:return"scalar";case v.OBJECT_TYPE_EXTENSION:return"object";case v.INTERFACE_TYPE_EXTENSION:return"interface";case v.UNION_TYPE_EXTENSION:return"union";case v.ENUM_TYPE_EXTENSION:return"enum";case v.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Xn(!1,"Unexpected kind: "+$(r))}}function yE(r){return{...Rp(r),Field:{leave(n){var t;const a=r.getFieldDef();if(!a)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of a.args)if(!s.has(o.name)&&_p(o)){const l=$(o.type);r.reportError(new R(`Field "${a.name}" argument "${o.name}" of type "${l}" is required, but it was not provided.`,{nodes:n}))}}}}}function Rp(r){var n;const t=Object.create(null),a=r.getSchema(),s=(n=a==null?void 0:a.getDirectives())!==null&&n!==void 0?n:Mr;for(const f of s)t[f.name]=hr(f.args.filter(_p),p=>p.name);const o=r.getDocument().definitions;for(const f of o)if(f.kind===v.DIRECTIVE_DEFINITION){var l;const p=(l=f.arguments)!==null&&l!==void 0?l:[];t[f.name.value]=hr(p.filter(IE),_=>_.name.value)}return{Directive:{leave(f){const p=f.name.value,_=t[p];if(_){var b;const F=(b=f.arguments)!==null&&b!==void 0?b:[],C=new Set(F.map(y=>y.name.value));for(const[y,N]of Object.entries(_))if(!C.has(y)){const U=Zo(N.type)?$(N.type):He(N.type);r.reportError(new R(`Directive "@${p}" argument "${y}" of type "${U}" is required, but it was not provided.`,{nodes:f}))}}}}}}function IE(r){return r.type.kind===v.NON_NULL_TYPE&&r.defaultValue==null}function AE(r){return{Field(n){const t=r.getType(),a=n.selectionSet;if(t){if(Br(gr(t))){if(a){const s=n.name.value,o=$(t);r.reportError(new R(`Field "${s}" must not have a selection since type "${o}" has no subfields.`,{nodes:a}))}}else if(!a){const s=n.name.value,o=$(t);r.reportError(new R(`Field "${s}" of type "${o}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function zt(r,n,t){if(r){if(r.kind===v.VARIABLE){const a=r.name.value;if(t==null||t[a]===void 0)return;const s=t[a];return s===null&&ye(n)?void 0:s}if(ye(n))return r.kind===v.NULL?void 0:zt(r,n.ofType,t);if(r.kind===v.NULL)return null;if(Fn(n)){const a=n.ofType;if(r.kind===v.LIST){const o=[];for(const l of r.values)if(vf(l,t)){if(ye(a))return;o.push(null)}else{const f=zt(l,a,t);if(f===void 0)return;o.push(f)}return o}const s=zt(r,a,t);return s===void 0?void 0:[s]}if(mn(n)){if(r.kind!==v.OBJECT)return;const a=Object.create(null),s=hr(r.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const l=s[o.name];if(!l||vf(l.value,t)){if(o.defaultValue!==void 0)a[o.name]=o.defaultValue;else if(ye(o.type))return;continue}const f=zt(l.value,o.type,t);if(f===void 0)return;a[o.name]=f}if(n.isOneOf){const o=Object.keys(a);if(o.length!==1||a[o[0]]===null)return}return a}if(Br(n)){let a;try{a=n.parseLiteral(r,t)}catch{return}return a===void 0?void 0:a}Xn(!1,"Unexpected input type: "+$(n))}}function vf(r,n){return r.kind===v.VARIABLE&&(n==null||n[r.name.value]===void 0)}function NE(r,n,t){var a;const s={},o=(a=n.arguments)!==null&&a!==void 0?a:[],l=hr(o,f=>f.name.value);for(const f of r.args){const p=f.name,_=f.type,b=l[p];if(!b){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(ye(_))throw new R(`Argument "${p}" of required type "${$(_)}" was not provided.`,{nodes:n});continue}const F=b.value;let C=F.kind===v.NULL;if(F.kind===v.VARIABLE){const N=F.name.value;if(t==null||!wE(t,N)){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(ye(_))throw new R(`Argument "${p}" of required type "${$(_)}" was provided the variable "$${N}" which was not provided a runtime value.`,{nodes:F});continue}C=t[N]==null}if(C&&ye(_))throw new R(`Argument "${p}" of non-null type "${$(_)}" must not be null.`,{nodes:F});const y=zt(F,_,t);if(y===void 0)throw new R(`Argument "${p}" has invalid value ${He(F)}.`,{nodes:F});s[p]=y}return s}function Ti(r,n,t){var a;const s=(a=n.directives)===null||a===void 0?void 0:a.find(o=>o.name.value===r.name);if(s)return NE(r,s,t)}function wE(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function CE(r,n,t,a,s){const o=new Map;return Ro(r,n,t,a,s,o,new Set),o}function Ro(r,n,t,a,s,o,l){for(const f of s.selections)switch(f.kind){case v.FIELD:{if(!To(t,f))continue;const p=xE(f),_=o.get(p);_!==void 0?_.push(f):o.set(p,[f]);break}case v.INLINE_FRAGMENT:{if(!To(t,f)||!Ef(r,f,a))continue;Ro(r,n,t,a,f.selectionSet,o,l);break}case v.FRAGMENT_SPREAD:{const p=f.name.value;if(l.has(p)||!To(t,f))continue;l.add(p);const _=n[p];if(!_||!Ef(r,_,a))continue;Ro(r,n,t,a,_.selectionSet,o,l);break}}}function To(r,n){const t=Ti(Fp,n,r);if((t==null?void 0:t.if)===!0)return!1;const a=Ti(mp,n,r);return(a==null?void 0:a.if)!==!1}function Ef(r,n,t){const a=n.typeCondition;if(!a)return!0;const s=ft(r,a);return s===t?!0:fr(s)?r.isSubType(s,t):!1}function xE(r){return r.alias?r.alias.value:r.name.value}function OE(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),a=t.getSubscriptionType();if(a){const s=n.name?n.name.value:null,o=Object.create(null),l=r.getDocument(),f=Object.create(null);for(const _ of l.definitions)_.kind===v.FRAGMENT_DEFINITION&&(f[_.name.value]=_);const p=CE(t,f,o,a,n.selectionSet);if(p.size>1){const F=[...p.values()].slice(1).flat();r.reportError(new R(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:F}))}for(const _ of p.values())_[0].name.value.startsWith("__")&&r.reportError(new R(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:_}))}}}}}function su(r,n){const t=new Map;for(const a of r){const s=n(a),o=t.get(s);o===void 0?t.set(s,[a]):o.push(a)}return t}function kE(r){return{DirectiveDefinition(a){var s;const o=(s=a.arguments)!==null&&s!==void 0?s:[];return t(`@${a.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(a){var s;const o=a.name.value,l=(s=a.fields)!==null&&s!==void 0?s:[];for(const p of l){var f;const _=p.name.value,b=(f=p.arguments)!==null&&f!==void 0?f:[];t(`${o}.${_}`,b)}return!1}function t(a,s){const o=su(s,l=>l.name.value);for(const[l,f]of o)f.length>1&&r.reportError(new R(`Argument "${a}(${l}:)" can only be defined once.`,{nodes:f.map(p=>p.name)}));return!1}}function Up(r){return{Field:n,Directive:n};function n(t){var a;const s=(a=t.arguments)!==null&&a!==void 0?a:[],o=su(s,l=>l.name.value);for(const[l,f]of o)f.length>1&&r.reportError(new R(`There can be only one argument named "${l}".`,{nodes:f.map(p=>p.name)}))}}function LE(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(a){const s=a.name.value;if(t!=null&&t.getDirective(s)){r.reportError(new R(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:a.name}));return}return n[s]?r.reportError(new R(`There can be only one directive named "@${s}".`,{nodes:[n[s],a.name]})):n[s]=a.name,!1}}}function Bp(r){const n=Object.create(null),t=r.getSchema(),a=t?t.getDirectives():Mr;for(const f of a)n[f.name]=!f.isRepeatable;const s=r.getDocument().definitions;for(const f of s)f.kind===v.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const o=Object.create(null),l=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let p;if(f.kind===v.SCHEMA_DEFINITION||f.kind===v.SCHEMA_EXTENSION)p=o;else if(wi(f)||tu(f)){const _=f.name.value;p=l[_],p===void 0&&(l[_]=p=Object.create(null))}else p=Object.create(null);for(const _ of f.directives){const b=_.name.value;n[b]&&(p[b]?r.reportError(new R(`The directive "@${b}" can only be used once at this location.`,{nodes:[p[b],_]})):p[b]=_)}}}}function RE(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(o){var l;const f=o.name.value;a[f]||(a[f]=Object.create(null));const p=(l=o.values)!==null&&l!==void 0?l:[],_=a[f];for(const b of p){const F=b.name.value,C=t[f];Zn(C)&&C.getValue(F)?r.reportError(new R(`Enum value "${f}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):_[F]?r.reportError(new R(`Enum value "${f}.${F}" can only be defined once.`,{nodes:[_[F],b.name]})):_[F]=b.name}return!1}}function UE(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(o){var l;const f=o.name.value;a[f]||(a[f]=Object.create(null));const p=(l=o.fields)!==null&&l!==void 0?l:[],_=a[f];for(const b of p){const F=b.name.value;BE(t[f],F)?r.reportError(new R(`Field "${f}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):_[F]?r.reportError(new R(`Field "${f}.${F}" can only be defined once.`,{nodes:[_[F],b.name]})):_[F]=b.name}return!1}}function BE(r,n){return ze(r)||Ve(r)||mn(r)?r.getFields()[n]!=null:!1}function PE(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const a=t.name.value;return n[a]?r.reportError(new R(`There can be only one fragment named "${a}".`,{nodes:[n[a],t.name]})):n[a]=t.name,!1}}}function Pp(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const a=n.pop();a||Xn(!1),t=a}},ObjectField(a){const s=a.name.value;t[s]?r.reportError(new R(`There can be only one input field named "${s}".`,{nodes:[t[s],a.name]})):t[s]=a.name}}}function $E(r){const n=Object.create(null);return{OperationDefinition(t){const a=t.name;return a&&(n[a.value]?r.reportError(new R(`There can be only one operation named "${a.value}".`,{nodes:[n[a.value],a]})):n[a.value]=a),!1},FragmentDefinition:()=>!1}}function ME(r){const n=r.getSchema(),t=Object.create(null),a=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(o){var l;const f=(l=o.operationTypes)!==null&&l!==void 0?l:[];for(const p of f){const _=p.operation,b=t[_];a[_]?r.reportError(new R(`Type for ${_} already defined in the schema. It cannot be redefined.`,{nodes:p})):b?r.reportError(new R(`There can be only one ${_} type in schema.`,{nodes:[b,p]})):t[_]=p}return!1}}function GE(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(s){const o=s.name.value;if(t!=null&&t.getType(o)){r.reportError(new R(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[o]?r.reportError(new R(`There can be only one type named "${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}function VE(r){return{OperationDefinition(n){var t;const a=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=su(a,o=>o.variable.name.value);for(const[o,l]of s)l.length>1&&r.reportError(new R(`There can be only one variable named "$${o}".`,{nodes:l.map(f=>f.variable.name)}))}}}function jE(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const a=kv(r.getParentInputType());if(!Fn(a))return lr(r,t),!1},ObjectValue(t){const a=gr(r.getInputType());if(!mn(a))return lr(r,t),!1;const s=hr(t.fields,o=>o.name.value);for(const o of Object.values(a.getFields()))if(!s[o.name]&&Uv(o)){const f=$(o.type);r.reportError(new R(`Field "${a.name}.${o.name}" of required type "${f}" was not provided.`,{nodes:t}))}a.isOneOf&&qE(r,t,a,s,n)},ObjectField(t){const a=gr(r.getParentInputType());if(!r.getInputType()&&mn(a)){const o=mr(t.name.value,Object.keys(a.getFields()));r.reportError(new R(`Field "${t.name.value}" is not defined by type "${a.name}".`+Jt(o),{nodes:t}))}},NullValue(t){const a=r.getInputType();ye(a)&&r.reportError(new R(`Expected value of type "${$(a)}", found ${He(t)}.`,{nodes:t}))},EnumValue:t=>lr(r,t),IntValue:t=>lr(r,t),FloatValue:t=>lr(r,t),StringValue:t=>lr(r,t),BooleanValue:t=>lr(r,t)}}function lr(r,n){const t=r.getInputType();if(!t)return;const a=gr(t);if(!Br(a)){const s=$(t);r.reportError(new R(`Expected value of type "${s}", found ${He(n)}.`,{nodes:n}));return}try{if(a.parseLiteral(n,void 0)===void 0){const o=$(t);r.reportError(new R(`Expected value of type "${o}", found ${He(n)}.`,{nodes:n}))}}catch(s){const o=$(t);s instanceof R?r.reportError(s):r.reportError(new R(`Expected value of type "${o}", found ${He(n)}; `+s.message,{nodes:n,originalError:s}))}}function qE(r,n,t,a,s){var o;const l=Object.keys(a);if(l.length!==1){r.reportError(new R(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(o=a[l[0]])===null||o===void 0?void 0:o.value,_=!p||p.kind===v.NULL,b=(p==null?void 0:p.kind)===v.VARIABLE;if(_){r.reportError(new R(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[n]}));return}if(b){const F=p.name.value;s[F].type.kind!==v.NON_NULL_TYPE&&r.reportError(new R(`Variable "${F}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function zE(r){return{VariableDefinition(n){const t=ft(r.getSchema(),n.type);if(t!==void 0&&!Ko(t)){const a=n.variable.name.value,s=He(n.type);r.reportError(new R(`Variable "$${a}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function YE(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=r.getRecursiveVariableUsages(t);for(const{node:s,type:o,defaultValue:l}of a){const f=s.name.value,p=n[f];if(p&&o){const _=r.getSchema(),b=ft(_,p.type);if(b&&!WE(_,b,p.defaultValue,o,l)){const F=$(b),C=$(o);r.reportError(new R(`Variable "$${f}" of type "${F}" used in position expecting type "${C}".`,{nodes:[p,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function WE(r,n,t,a,s){if(ye(a)&&!ye(n)){if(!(t!=null&&t.kind!==v.NULL)&&!(s!==void 0))return!1;const f=a.ofType;return mi(r,n,f)}return mi(r,n,a)}const QE=Object.freeze([aE]);Object.freeze([Wv,$E,rE,OE,xp,Xv,zE,AE,Qv,PE,nE,lE,FE,oE,VE,uE,cE,Cp,Bp,Zv,Up,jE,yE,YE,pE,Pp,...QE]);const JE=Object.freeze([iE,ME,GE,RE,UE,kE,LE,xp,Cp,Bp,vE,wp,Up,Pp,Rp]);class HE{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const a of this.getDocument().definitions)a.kind===v.FRAGMENT_DEFINITION&&(t[a.name.value]=a);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const a=[n];let s;for(;s=a.pop();)for(const o of s.selections)o.kind===v.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&a.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const a=Object.create(null),s=[n.selectionSet];let o;for(;o=s.pop();)for(const l of this.getFragmentSpreads(o)){const f=l.name.value;if(a[f]!==!0){a[f]=!0;const p=this.getFragment(f);p&&(t.push(p),s.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class XE extends HE{constructor(n,t,a){super(n,a),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function ZE(r,n,t=JE){const a=[],s=new XE(r,n,l=>{a.push(l)}),o=t.map(l=>l(s));return sp(r,Iv(o)),a}function KE(r){const n=ZE(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function eS(r,n){Ct(r)&&Ct(r.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${$(r)}.`);const t=r.__schema,a=cr(t.types,k=>k.name,k=>C(k));for(const k of[...Ws,...Js])a[k.name]&&(a[k.name]=k);const s=t.queryType?b(t.queryType):null,o=t.mutationType?b(t.mutationType):null,l=t.subscriptionType?b(t.subscriptionType):null,f=t.directives?t.directives.map(dt):[];return new Np({description:t.description,query:s,mutation:o,subscription:l,types:Object.values(a),directives:f,assumeValid:void 0});function p(k){if(k.kind===Se.LIST){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new cn(p(X))}if(k.kind===Se.NON_NULL){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const an=p(X);return new ie(Ov(an))}return _(k)}function _(k){const X=k.name;if(!X)throw new Error(`Unknown type reference: ${$(k)}.`);const an=a[X];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function b(k){return Cv(_(k))}function F(k){return xv(_(k))}function C(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case Se.SCALAR:return y(k);case Se.OBJECT:return U(k);case Se.INTERFACE:return z(k);case Se.UNION:return ce(k);case Se.ENUM:return Ie(k);case Se.INPUT_OBJECT:return be(k)}const X=$(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function y(k){return new xt({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function N(k){if(k.interfaces===null&&k.kind===Se.INTERFACE)return[];if(!k.interfaces){const X=$(k);throw new Error(`Introspection result missing interfaces: ${X}.`)}return k.interfaces.map(F)}function U(k){return new ct({name:k.name,description:k.description,interfaces:()=>N(k),fields:()=>ke(k)})}function z(k){return new Ls({name:k.name,description:k.description,interfaces:()=>N(k),fields:()=>ke(k)})}function ce(k){if(!k.possibleTypes){const X=$(k);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new Rs({name:k.name,description:k.description,types:()=>k.possibleTypes.map(b)})}function Ie(k){if(!k.enumValues){const X=$(k);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Pr({name:k.name,description:k.description,values:cr(k.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function be(k){if(!k.inputFields){const X=$(k);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Us({name:k.name,description:k.description,fields:()=>pn(k.inputFields),isOneOf:k.isOneOf})}function ke(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${$(k)}.`);return cr(k.fields,X=>X.name,Be)}function Be(k){const X=p(k.type);if(!op(X)){const an=$(X);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!k.args){const an=$(k);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:X,args:pn(k.args)}}function pn(k){return cr(k,X=>X.name,en)}function en(k){const X=p(k.type);if(!Ko(X)){const Lt=$(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Lt}.`)}const an=k.defaultValue!=null?zt(mv(k.defaultValue),X):void 0;return{description:k.description,type:X,defaultValue:an,deprecationReason:k.deprecationReason}}function dt(k){if(!k.args){const X=$(k);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!k.locations){const X=$(k);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Ot({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:pn(k.args)})}}function nS(r,n,t){var a,s,o,l;const f=[],p=Object.create(null),_=[];let b;const F=[];for(const I of n.definitions)if(I.kind===v.SCHEMA_DEFINITION)b=I;else if(I.kind===v.SCHEMA_EXTENSION)F.push(I);else if(wi(I))f.push(I);else if(tu(I)){const V=I.name.value,P=p[V];p[V]=P?P.concat([I]):[I]}else I.kind===v.DIRECTIVE_DEFINITION&&_.push(I);if(Object.keys(p).length===0&&f.length===0&&_.length===0&&F.length===0&&b==null)return r;const C=Object.create(null);for(const I of r.types)C[I.name]=Ie(I);for(const I of f){var y;const V=I.name.value;C[V]=(y=Sf[V])!==null&&y!==void 0?y:wn(I)}const N={query:r.query&&z(r.query),mutation:r.mutation&&z(r.mutation),subscription:r.subscription&&z(r.subscription),...b&&an([b]),...an(F)};return{description:(a=b)===null||a===void 0||(s=a.description)===null||s===void 0?void 0:s.value,...N,types:Object.values(C),directives:[...r.directives.map(ce),..._.map(Ci)],extensions:Object.create(null),astNode:(o=b)!==null&&o!==void 0?o:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(F),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function U(I){return Fn(I)?new cn(U(I.ofType)):ye(I)?new ie(U(I.ofType)):z(I)}function z(I){return C[I.name]}function ce(I){const V=I.toConfig();return new Ot({...V,args:yt(V.args,X)})}function Ie(I){if(jv(I)||$v(I))return I;if(Ht(I))return Be(I);if(ze(I))return pn(I);if(Ve(I))return en(I);if(Mn(I))return dt(I);if(Zn(I))return ke(I);if(mn(I))return be(I);Xn(!1,"Unexpected type: "+$(I))}function be(I){var V;const P=I.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Us({...P,fields:()=>({...yt(P.fields,de=>({...de,type:U(de.type)})),...Zt(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function ke(I){var V;const P=I.toConfig(),M=(V=p[I.name])!==null&&V!==void 0?V:[];return new Pr({...P,values:{...P.values,...ht(M)},extensionASTNodes:P.extensionASTNodes.concat(M)})}function Be(I){var V;const P=I.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];let de=P.specifiedByURL;for(const he of M){var Pe;de=(Pe=Tf(he))!==null&&Pe!==void 0?Pe:de}return new xt({...P,specifiedByURL:de,extensionASTNodes:P.extensionASTNodes.concat(M)})}function pn(I){var V;const P=I.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new ct({...P,interfaces:()=>[...I.getInterfaces().map(z),...Dr(M)],fields:()=>({...yt(P.fields,k),...Fr(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function en(I){var V;const P=I.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Ls({...P,interfaces:()=>[...I.getInterfaces().map(z),...Dr(M)],fields:()=>({...yt(P.fields,k),...Fr(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function dt(I){var V;const P=I.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Rs({...P,types:()=>[...I.getTypes().map(z),...Kt(M)],extensionASTNodes:P.extensionASTNodes.concat(M)})}function k(I){return{...I,type:U(I.type),args:I.args&&yt(I.args,X)}}function X(I){return{...I,type:U(I.type)}}function an(I){const V={};for(const M of I){var P;const de=(P=M.operationTypes)!==null&&P!==void 0?P:[];for(const Pe of de)V[Pe.operation]=Lt(Pe.type)}return V}function Lt(I){var V;const P=I.name.value,M=(V=Sf[P])!==null&&V!==void 0?V:C[P];if(M===void 0)throw new Error(`Unknown type: "${P}".`);return M}function Xt(I){return I.kind===v.LIST_TYPE?new cn(Xt(I.type)):I.kind===v.NON_NULL_TYPE?new ie(Xt(I.type)):Lt(I)}function Ci(I){var V;return new Ot({name:I.name.value,description:(V=I.description)===null||V===void 0?void 0:V.value,locations:I.locations.map(({value:P})=>P),isRepeatable:I.repeatable,args:xi(I.arguments),astNode:I})}function Fr(I){const V=Object.create(null);for(const de of I){var P;const Pe=(P=de.fields)!==null&&P!==void 0?P:[];for(const he of Pe){var M;V[he.name.value]={type:Xt(he.type),description:(M=he.description)===null||M===void 0?void 0:M.value,args:xi(he.arguments),deprecationReason:As(he),astNode:he}}}return V}function xi(I){const V=I??[],P=Object.create(null);for(const de of V){var M;const Pe=Xt(de.type);P[de.name.value]={type:Pe,description:(M=de.description)===null||M===void 0?void 0:M.value,defaultValue:zt(de.defaultValue,Pe),deprecationReason:As(de),astNode:de}}return P}function Zt(I){const V=Object.create(null);for(const de of I){var P;const Pe=(P=de.fields)!==null&&P!==void 0?P:[];for(const he of Pe){var M;const Cn=Xt(he.type);V[he.name.value]={type:Cn,description:(M=he.description)===null||M===void 0?void 0:M.value,defaultValue:zt(he.defaultValue,Cn),deprecationReason:As(he),astNode:he}}}return V}function ht(I){const V=Object.create(null);for(const de of I){var P;const Pe=(P=de.values)!==null&&P!==void 0?P:[];for(const he of Pe){var M;V[he.name.value]={description:(M=he.description)===null||M===void 0?void 0:M.value,deprecationReason:As(he),astNode:he}}}return V}function Dr(I){return I.flatMap(V=>{var P,M;return(P=(M=V.interfaces)===null||M===void 0?void 0:M.map(Lt))!==null&&P!==void 0?P:[]})}function Kt(I){return I.flatMap(V=>{var P,M;return(P=(M=V.types)===null||M===void 0?void 0:M.map(Lt))!==null&&P!==void 0?P:[]})}function wn(I){var V;const P=I.name.value,M=(V=p[P])!==null&&V!==void 0?V:[];switch(I.kind){case v.OBJECT_TYPE_DEFINITION:{var de;const nn=[I,...M];return new ct({name:P,description:(de=I.description)===null||de===void 0?void 0:de.value,interfaces:()=>Dr(nn),fields:()=>Fr(nn),astNode:I,extensionASTNodes:M})}case v.INTERFACE_TYPE_DEFINITION:{var Pe;const nn=[I,...M];return new Ls({name:P,description:(Pe=I.description)===null||Pe===void 0?void 0:Pe.value,interfaces:()=>Dr(nn),fields:()=>Fr(nn),astNode:I,extensionASTNodes:M})}case v.ENUM_TYPE_DEFINITION:{var he;const nn=[I,...M];return new Pr({name:P,description:(he=I.description)===null||he===void 0?void 0:he.value,values:ht(nn),astNode:I,extensionASTNodes:M})}case v.UNION_TYPE_DEFINITION:{var Cn;const nn=[I,...M];return new Rs({name:P,description:(Cn=I.description)===null||Cn===void 0?void 0:Cn.value,types:()=>Kt(nn),astNode:I,extensionASTNodes:M})}case v.SCALAR_TYPE_DEFINITION:{var Gr;return new xt({name:P,description:(Gr=I.description)===null||Gr===void 0?void 0:Gr.value,specifiedByURL:Tf(I),astNode:I,extensionASTNodes:M})}case v.INPUT_OBJECT_TYPE_DEFINITION:{var Rt;const nn=[I,...M];return new Us({name:P,description:(Rt=I.description)===null||Rt===void 0?void 0:Rt.value,fields:()=>Zt(nn),astNode:I,extensionASTNodes:M,isOneOf:tS(I)})}}}}const Sf=hr([...Ws,...Js],r=>r.name);function As(r){const n=Ti(Dp,r);return n==null?void 0:n.reason}function Tf(r){const n=Ti(vp,r);return n==null?void 0:n.url}function tS(r){return!!Ti(Ep,r)}function rS(r,n){r!=null&&r.kind===v.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&KE(r);const a=nS({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(a.astNode==null)for(const o of a.types)switch(o.name){case"Query":a.query=o;break;case"Mutation":a.mutation=o;break;case"Subscription":a.subscription=o;break}const s=[...a.directives,...Mr.filter(o=>a.directives.every(l=>l.name!==o.name))];return new Np({...a,directives:s})}function iS(r,n){const t=bv(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return rS(t,{assumeValidSDL:void 0,assumeValid:void 0})}function sS(r){const n=new Map;return aS(r,t=>{ze(t)&&oS(t,a=>{const s=Uo(a.type);yo(n,s).references.push({kind:bi.FIELD,parent:t,by:a}),uS(a,l=>{const f=Uo(l.type);yo(n,f).references.push({kind:bi.ARGUMENT,field:a,type:t,by:l})})}),Mn(t)&&t.getTypes().forEach(a=>{yo(n,a).references.push({kind:bi.UNION,by:t})})}),new jD(n)}function aS(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function oS(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function uS(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function yo(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function Uo(r){return ye(r)||Fn(r)?Uo(r.ofType):r}const yf=`schema {
  query: query
}

type query {
  """Fetch a single artist."""
  artist(id: Int!): Artist

  """Fetch a single artist group."""
  artistGroup(id: Int!): ArtistGroup

  """
  Fetch a collection of artist groups.
  
  Special Operations
  
  * ArtistGroupsOther
  
      Fetch artist groups with non-a to z-names
  * SourceArtistGroups
  
      Fetch artist groups with sources
  * SourceArtistGroupsOther
  
      Fetch artist groups with sources with non-a to z-names
  """
  artistGroups(filter: Filter_ArtistGroup, pagination: Pagination): Connection_ArtistGroup

  """Fetch a collection of artists."""
  artists(filter: Filter_ArtistUnprefix, pagination: Pagination): Connection_ArtistUnprefix

  """Fetch a collection of artists."""
  artistsRoot(filter: Filter_Artist, pagination: Pagination): Connection_Artist

  """
  Fetch a collection of artists using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistUnprefixListOther
  
      Fetch artists with non-a to z-names
  """
  artistsUnprefix(filter: Filter_ArtistUnprefix, pagination: Pagination): Connection_ArtistUnprefix

  """
  Fetch a collection of artists that have sources
  using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistsUnprefixSourceOther
  
      Fetch artists with sources with non-a to z-names
  """
  artistsUnprefixSource(filter: Filter_ArtistUnprefixSource, pagination: Pagination): Connection_ArtistUnprefixSource

  """Fetch a single creator."""
  creator(id: Int!): InternetArchive_Creator

  """Fetch a collection of creators."""
  creators(filter: Filter_InternetArchive_Creator, pagination: Pagination): Connection_InternetArchive_Creator

  """
  Fetch a collection of creators using a view for unprefixing the creator name.
  This endpoint does not have relationships.  Use \`creators\` for related data.
  
  Special Operations
  
  * CreatorUnprefixListOther
  
      Fetch creators with non-a to z-names
  """
  creatorsUnprefix(filter: Filter_InternetArchive_CreatorUnprefix, pagination: Pagination): Connection_InternetArchive_CreatorUnprefix

  """Fetch a single identifier."""
  identifier(id: String!): InternetArchive_Identifier

  """Fetch a collection of identifiers."""
  identifiers(filter: Filter_InternetArchive_Creator, pagination: Pagination): Connection_InternetArchive_Creator

  """Fetch a single performance."""
  performance(id: Int!): Performance

  """
  Fetch a collection of performances.
  
  Special Operations
  
  * ArtistGroupPerformances
  
      Fetch performances for the given artist group $id and $year
  """
  performances(filter: Filter_Performance, pagination: Pagination): Connection_Performance

  """Fetch a single source."""
  source(id: Int!): Source

  """
  Fetch a collection of sources.
  
  Special Operations
  
  * ArtistSources
  
      Fetch sources by artist $id and $year
  * ArtistGroupSources
  
      Fetch sources by artist group $id and $year
  """
  sources(filter: Filter_Source, pagination: Pagination): Connection_Source

  """Fetch a single user."""
  user(id: Int!): User

  """Fetch a single user by username."""
  userByUsername(username: String!): User

  """Fetch a single user list."""
  userList(id: Int!, shortname: String!): UserList

  """Fetch a single user list by username and listname."""
  userListByUsername(username: String!, listname: String): UserList

  """Fetch a single user performance."""
  userPerformance(id: Int!): UserPerformance

  """Fetch a user's list or sublist of performances by username."""
  userPerformancesByUsername(username: String!, listname: String, pagination: Pagination): Connection_UserPerformance

  """Fetch a collection of users."""
  users(filter: Filter_User, pagination: Pagination): Connection_User
}

"""App\\Doctrine\\ORM\\Entity\\Artist"""
type Artist {
  """abbrev"""
  abbrev: String

  """archive_key"""
  archive_key: Int

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_Artist_ArtistToArtistGroups, pagination: Pagination): Connection_Artist_ArtistToArtistGroups

  """artistuserid"""
  artistuserid: String

  """createdAt"""
  createdAt: DateTime

  """creators"""
  creators(filter: Filter_Artist_Creators, pagination: Pagination): Connection_Artist_Creators

  """fanUrl"""
  fanUrl: String

  """icon"""
  icon: String

  """id"""
  id: Int

  """isTradable"""
  isTradable: Boolean

  """The most recent performance year for an artist"""
  latestYear: Int

  """name"""
  name: String

  """nameFirstLetter"""
  nameFirstLetter: Int

  """nameNormalized"""
  nameNormalized: String

  """notes"""
  notes: String

  """officialUrl"""
  officialUrl: String

  """performances"""
  performances(filter: Filter_Artist_Performances, pagination: Pagination): Connection_Artist_Performances

  """ref_shnartist"""
  ref_shnartist: Int

  """The number of sources for an artist"""
  sourceCount: Int

  """The most recent performance year for an artist's sources"""
  sourceLatestYear: Int

  """The performance for artist sources"""
  sourceYears: [Int]

  """top100"""
  top100: Boolean

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """The performance years for an artist"""
  years: [Int]
}

input Filter_Artist_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_String_1bb78ae9f3325089fccab4aafd4b69b5 {
  """Equals"""
  eq: String

  """Not equals"""
  neq: String

  """Contains the value.  Strings only."""
  contains: String

  """Starts with the value.  Strings only."""
  startswith: String

  """Ends with the value.  Strings only."""
  endswith: String

  """In the array of values"""
  in: [String]

  """Not in the array of values"""
  notin: [String]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Field filters"""
input Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27 {
  """Equals"""
  eq: ID
}

"""Pagination fields for the GraphQL Complete Connection Model"""
input Pagination {
  """Takes a non-negative integer."""
  first: Int

  """Takes the cursor type."""
  after: String

  """Takes a non-negative integer."""
  last: Int

  """Takes the cursor type."""
  before: String
}

"""Connection for Artist_ArtistToArtistGroups"""
type Connection_Artist_ArtistToArtistGroups {
  edges: [Node_Artist_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistToArtistGroup"""
type ArtistToArtistGroup {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: Artist

  """App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
  artistGroup: ArtistGroup

  """reason"""
  reason: String

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User
}

"""App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
type ArtistGroup {
  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_ArtistGroup_ArtistToArtistGroups, pagination: Pagination): Connection_ArtistGroup_ArtistToArtistGroups

  """Return a list of artists in an artist group sorted by name."""
  artistsByName: [Artist]

  """footer"""
  footer: String

  """header"""
  header: String

  """id"""
  id: Int

  """The most recent performance year for an artist group"""
  latestYear: Int

  """Fetch all years for artist group performances"""
  performanceYears: [Int]

  """Count the number of sources for an artist group"""
  sourceCount: Int

  """The most recent source year for an artist group"""
  sourceLatestYear: Int

  """Fetch all years for artist group sources"""
  sourceYears: [Int]

  """title"""
  title: String

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_ArtistGroup_UserToArtistGroups, pagination: Pagination): Connection_ArtistGroup_UserToArtistGroups
}

input Filter_ArtistGroup_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup_ArtistToArtistGroups"""
type Connection_ArtistGroup_ArtistToArtistGroups {
  edges: [Node_ArtistGroup_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

"""Page information"""
type PageInfo {
  """Cursor corresponding to the first node in edges."""
  startCursor: String!

  """Cursor corresponding to the last node in edges."""
  endCursor: String!

  """
  If edges contains more than last elements return true, otherwise false.
  """
  hasPreviousPage: Boolean!

  """
  If edges contains more than first elements return true, otherwise false.
  """
  hasNextPage: Boolean!
}

"""App\\Doctrine\\ORM\\Entity\\User"""
type User {
  """activetrading"""
  activetrading: Int

  """artistGroups"""
  artistGroups(filter: Filter_User_ArtistGroups, pagination: Pagination): Connection_User_ArtistGroups

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_User_ArtistToArtistGroups, pagination: Pagination): Connection_User_ArtistToArtistGroups

  """artists"""
  artists(filter: Filter_User_Artists, pagination: Pagination): Connection_User_Artists

  """city"""
  city: String

  """columnorder"""
  columnorder: String

  """config_colors"""
  config_colors: String

  """config_columns"""
  config_columns: String

  """config_showrules"""
  config_showrules: Boolean

  """confirm_hash"""
  confirm_hash: String

  """cookie_hash"""
  cookie_hash: String

  """createdAt"""
  createdAt: DateTime

  """css"""
  css: String

  """email"""
  email: String

  """id"""
  id: Int

  """The most recent update by this user"""
  lastUpdate: DateTime

  """msg_yahoo"""
  msg_yahoo: String

  """name"""
  name: String

  """perms"""
  perms: String

  """picture"""
  picture: String

  """rules"""
  rules: String

  """state"""
  state: String

  """App\\Doctrine\\ORM\\Entity\\Template"""
  template: Template

  """User top artists"""
  topArtists(first: Int!): [TopArtist]

  """tradenotes"""
  tradenotes: String

  """updatedAt"""
  updatedAt: DateTime

  """userLists"""
  userLists(filter: Filter_User_UserLists, pagination: Pagination): Connection_User_UserLists

  """The count of user performances for a user"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_User_UserPerformances, pagination: Pagination): Connection_User_UserPerformances

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_User_UserToArtistGroups, pagination: Pagination): Connection_User_UserToArtistGroups

  """username"""
  username: String

  """validemail"""
  validemail: Boolean

  """wantedPerformances"""
  wantedPerformances(filter: Filter_User_WantedPerformances, pagination: Pagination): Connection_User_WantedPerformances

  """zipcode"""
  zipcode: String
}

input Filter_User_ArtistGroups {
  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  header: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  footer: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15 {
  """Equals"""
  eq: Int

  """Not equals"""
  neq: Int

  """Less than"""
  lt: Int

  """Less than or equals"""
  lte: Int

  """Greater than"""
  gt: Int

  """Greater than or equals"""
  gte: Int

  """Is between from and to inclusive of from and to"""
  between: Between_Int

  """In the array of values"""
  in: [Int]

  """Not in the array of values"""
  notin: [Int]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Between \`from\` and \`to\`"""
input Between_Int {
  """Low value of between"""
  from: Int

  """High value of between"""
  to: Int
}

"""Connection for User_ArtistGroups"""
type Connection_User_ArtistGroups {
  edges: [Node_User_ArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_ArtistGroups {
  node: ArtistGroup
  cursor: String!
}

input Filter_User_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_ArtistToArtistGroups"""
type Connection_User_ArtistToArtistGroups {
  edges: [Node_User_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

input Filter_User_Artists {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  fanUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  officialUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  icon: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  artistuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  abbrev: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isTradable: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  ref_shnartist: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  nameFirstLetter: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  archive_key: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  nameNormalized: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15 {
  """Equals"""
  eq: DateTime

  """Not equals"""
  neq: DateTime

  """Less than"""
  lt: DateTime

  """Less than or equals"""
  lte: DateTime

  """Greater than"""
  gt: DateTime

  """Greater than or equals"""
  gte: DateTime

  """Is between from and to inclusive of from and to"""
  between: Between_DateTime

  """In the array of values"""
  in: [DateTime]

  """Not in the array of values"""
  notin: [DateTime]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""
The \`datetime\` scalar type represents datetime data.The format is ISO-8601 e.g. 2004-02-12T15:19:21+00:00.
"""
scalar DateTime

"""Between \`from\` and \`to\`"""
input Between_DateTime {
  """Low value of between"""
  from: DateTime

  """High value of between"""
  to: DateTime
}

"""Field filters"""
input Filters_Boolean_b468a454ba782e8572487ec259fe96aa {
  """Equals"""
  eq: Boolean

  """Not equals"""
  neq: Boolean

  """In the array of values"""
  in: [Boolean]

  """Not in the array of values"""
  notin: [Boolean]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Connection for User_Artists"""
type Connection_User_Artists {
  edges: [Node_User_Artists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_Artists {
  node: Artist
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Template"""
type Template {
  """author"""
  author: String

  """default_colors"""
  default_colors: String

  """default_columns"""
  default_columns: String

  """description"""
  description: String

  """forcelist"""
  forcelist: Boolean

  """id"""
  id: Int

  """longdesc"""
  longdesc: String

  """name"""
  name: String

  """smarty"""
  smarty: Boolean

  """userLists"""
  userLists(filter: Filter_Template_UserLists, pagination: Pagination): Connection_Template_UserLists

  """users"""
  users(filter: Filter_Template_Users, pagination: Pagination): Connection_Template_Users

  """zendview"""
  zendview: Boolean
}

input Filter_Template_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Template_UserLists"""
type Connection_Template_UserLists {
  edges: [Node_Template_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Template_UserLists {
  node: UserList
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserList"""
type UserList {
  """createdAt"""
  createdAt: DateTime

  """defaultlist"""
  defaultlist: Boolean

  """id"""
  id: Int

  """lastviewed"""
  lastviewed: DateTime

  """name"""
  name: String

  """notes"""
  notes: String

  """private"""
  private: Boolean

  """ref_username"""
  ref_username: String

  """shortname"""
  shortname: String

  """App\\Doctrine\\ORM\\Entity\\Template"""
  template: Template

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User

  """The count of user performances assigned to a user list"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_UserList_UserPerformances, pagination: Pagination): Connection_UserList_UserPerformances

  """views"""
  views: Int
}

input Filter_UserList_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for UserList_UserPerformances"""
type Connection_UserList_UserPerformances {
  edges: [Node_UserList_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserList_UserPerformances {
  node: UserPerformance
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserPerformance"""
type UserPerformance {
  """attendance"""
  attendance: String

  """checksums"""
  checksums: String

  """createdAt"""
  createdAt: DateTime

  """generation"""
  generation: Int

  """id"""
  id: Int

  """j_card_comment"""
  j_card_comment: String

  """media_count"""
  media_count: Int

  """media_type"""
  media_type: String

  """miclocation"""
  miclocation: String

  """microphones"""
  microphones: String

  """noise_reduction"""
  noise_reduction: Int

  """note"""
  note: String

  """App\\Doctrine\\ORM\\Entity\\Performance"""
  performance: Performance

  """reference_number"""
  reference_number: String

  """scms_status"""
  scms_status: String

  """show_rating"""
  show_rating: String

  """sound_rating"""
  sound_rating: String

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: Source

  """sourceInfo"""
  sourceInfo: String

  """status"""
  status: String

  """tapername"""
  tapername: String

  """tech_note"""
  tech_note: String

  """traded_from"""
  traded_from: String

  """traded_from_email"""
  traded_from_email: String

  """tradesAllowed"""
  tradesAllowed: Boolean

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User

  """userLists"""
  userLists(filter: Filter_UserPerformance_UserLists, pagination: Pagination): Connection_UserPerformance_UserLists

  """userid"""
  userid: String
}

"""App\\Doctrine\\ORM\\Entity\\Performance"""
type Performance {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: Artist

  """changeComment"""
  changeComment: String

  """city"""
  city: String

  """comment"""
  comment: String

  """createdAt"""
  createdAt: DateTime

  """date"""
  date: String

  """festival_lock"""
  festival_lock: Boolean

  """id"""
  id: Int

  """isCompilation"""
  isCompilation: Boolean

  """merge_lock"""
  merge_lock: Int

  """ref_festival"""
  ref_festival: Int

  """ref_venue"""
  ref_venue: Int

  """set1"""
  set1: String

  """set2"""
  set2: String

  """set3"""
  set3: String

  """showsuserid"""
  showsuserid: String

  """sources"""
  sources(filter: Filter_Performance_Sources, pagination: Pagination): Connection_Performance_Sources

  """spotlight_date"""
  spotlight_date: DateTime

  """staffpick_date"""
  staffpick_date: DateTime

  """state"""
  state: String

  """title"""
  title: String

  """updatedAt"""
  updatedAt: DateTime

  """userPerformances"""
  userPerformances(filter: Filter_Performance_UserPerformances, pagination: Pagination): Connection_Performance_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """venue"""
  venue: String

  """wantedUsers"""
  wantedUsers(filter: Filter_Performance_WantedUsers, pagination: Pagination): Connection_Performance_WantedUsers

  """year"""
  year: Int
}

input Filter_Performance_Sources {
  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  enterUsername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  circdate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  shndiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  wavdiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  textdoc: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comments: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  mediaSize: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  mediaSizeUncompressed: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  dummyColumn: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_Sources"""
type Connection_Performance_Sources {
  edges: [Node_Performance_Sources]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_Sources {
  node: Source
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Source"""
type Source {
  """archiveIdentifier"""
  archiveIdentifier: String

  """checksums"""
  checksums(filter: Filter_Source_Checksums, pagination: Pagination): Connection_Source_Checksums

  """circdate"""
  circdate: String

  """comments"""
  comments: String

  """createdAt"""
  createdAt: DateTime

  """dummyColumn"""
  dummyColumn: Int

  """enterUsername"""
  enterUsername: String

  """id"""
  id: Int

  """identifier"""
  identifier(filter: Filter_Source_Identifier, pagination: Pagination): Connection_Source_Identifier

  """mediaSize"""
  mediaSize: String

  """mediaSizeUncompressed"""
  mediaSizeUncompressed: String

  """App\\Doctrine\\ORM\\Entity\\Performance"""
  performance: Performance

  """shndiskcount"""
  shndiskcount: Int

  """textdoc"""
  textdoc: String

  """updatedAt"""
  updatedAt: DateTime

  """userPerformances"""
  userPerformances(filter: Filter_Source_UserPerformances, pagination: Pagination): Connection_Source_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """wavdiskcount"""
  wavdiskcount: Int
}

input Filter_Source_Checksums {
  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  body: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_Checksums"""
type Connection_Source_Checksums {
  edges: [Node_Source_Checksums]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_Checksums {
  node: Checksum
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Checksum"""
type Checksum {
  """body"""
  body: String

  """createdAt"""
  createdAt: DateTime

  """description"""
  description: String

  """id"""
  id: Int

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: Source
}

input Filter_Source_Identifier {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_Identifier"""
type Connection_Source_Identifier {
  edges: [Node_Source_Identifier]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_Identifier {
  node: InternetArchive_Identifier
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier"""
type InternetArchive_Identifier {
  """addedAt"""
  addedAt: DateTime

  """archiveIdentifier"""
  archiveIdentifier: String

  """archiveSource"""
  archiveSource: String

  """collections"""
  collections(filter: Filter_InternetArchive_Identifier_Collections, pagination: Pagination): Connection_InternetArchive_Identifier_Collections

  """coverage"""
  coverage: String

  """App\\Doctrine\\ORM\\Entity\\InternetArchive\\Creator"""
  creator: InternetArchive_Creator

  """description"""
  description: String

  """files"""
  files(filter: Filter_InternetArchive_Identifier_Files, pagination: Pagination): Connection_InternetArchive_Identifier_Files

  """id"""
  id: Int

  """lineage"""
  lineage: String

  """md5s"""
  md5s: String

  """notes"""
  notes: String

  """performanceDate"""
  performanceDate: String

  """server"""
  server: String

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: Source

  """taper"""
  taper: String

  """title"""
  title: String

  """uploader"""
  uploader: String

  """venue"""
  venue: String

  """year"""
  year: String
}

input Filter_InternetArchive_Identifier_Collections {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for InternetArchive_Identifier_Collections"""
type Connection_InternetArchive_Identifier_Collections {
  edges: [Node_InternetArchive_Identifier_Collections]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Identifier_Collections {
  node: InternetArchive_Collection
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Collection"""
type InternetArchive_Collection {
  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_InternetArchive_Collection_Identifiers, pagination: Pagination): Connection_InternetArchive_Collection_Identifiers

  """name"""
  name: String
}

input Filter_InternetArchive_Collection_Identifiers {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Collection_Identifiers"""
type Connection_InternetArchive_Collection_Identifiers {
  edges: [Node_InternetArchive_Collection_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Collection_Identifiers {
  node: InternetArchive_Identifier
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Creator"""
type InternetArchive_Creator {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: Artist

  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_InternetArchive_Creator_Identifiers, pagination: Pagination): Connection_InternetArchive_Creator_Identifiers

  """The most recent identifier year for a creator"""
  latestYear: Int

  """name"""
  name: String

  """The performance years for a creator"""
  years: [Int]
}

input Filter_InternetArchive_Creator_Identifiers {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Creator_Identifiers"""
type Connection_InternetArchive_Creator_Identifiers {
  edges: [Node_InternetArchive_Creator_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Creator_Identifiers {
  node: InternetArchive_Identifier
  cursor: String!
}

input Filter_InternetArchive_Identifier_Files {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  body: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  identifier: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Identifier_Files"""
type Connection_InternetArchive_Identifier_Files {
  edges: [Node_InternetArchive_Identifier_Files]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Identifier_Files {
  node: InternetArchive_File
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\File"""
type InternetArchive_File {
  """body"""
  body: String

  """id"""
  id: Int

  """App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier"""
  identifier: InternetArchive_Identifier

  """name"""
  name: String
}

input Filter_Source_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_UserPerformances"""
type Connection_Source_UserPerformances {
  edges: [Node_Source_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_User {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User"""
type Connection_User {
  edges: [Node_User]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User {
  node: User
  cursor: String!
}

input Filter_Performance_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_UserPerformances"""
type Connection_Performance_UserPerformances {
  edges: [Node_Performance_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_Performance_WantedUsers {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_WantedUsers"""
type Connection_Performance_WantedUsers {
  edges: [Node_Performance_WantedUsers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_WantedUsers {
  node: User
  cursor: String!
}

input Filter_UserPerformance_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for UserPerformance_UserLists"""
type Connection_UserPerformance_UserLists {
  edges: [Node_UserPerformance_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserPerformance_UserLists {
  node: UserList
  cursor: String!
}

input Filter_Template_Users {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Template_Users"""
type Connection_Template_Users {
  edges: [Node_Template_Users]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Template_Users {
  node: User
  cursor: String!
}

"""Top artists details collected by a user"""
type TopArtist {
  id: Int
  name: String
  userPerformanceCount: Int
}

input Filter_User_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserLists"""
type Connection_User_UserLists {
  edges: [Node_User_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserLists {
  node: UserList
  cursor: String!
}

input Filter_User_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserPerformances"""
type Connection_User_UserPerformances {
  edges: [Node_User_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_User_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserToArtistGroups"""
type Connection_User_UserToArtistGroups {
  edges: [Node_User_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserToArtistGroups {
  node: UserToArtistGroup
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserToArtistGroup"""
type UserToArtistGroup {
  """App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
  artistGroup: ArtistGroup

  """ref_user_update"""
  ref_user_update: Int

  """temporary"""
  temporary: Boolean

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: User
}

input Filter_User_WantedPerformances {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_WantedPerformances"""
type Connection_User_WantedPerformances {
  edges: [Node_User_WantedPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_WantedPerformances {
  node: Performance
  cursor: String!
}

input Filter_ArtistGroup_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup_UserToArtistGroups"""
type Connection_ArtistGroup_UserToArtistGroups {
  edges: [Node_ArtistGroup_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup_UserToArtistGroups {
  node: UserToArtistGroup
  cursor: String!
}

input Filter_Artist_Creators {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Artist_Creators"""
type Connection_Artist_Creators {
  edges: [Node_Artist_Creators]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_Creators {
  node: InternetArchive_Creator
  cursor: String!
}

input Filter_Artist_Performances {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Artist_Performances"""
type Connection_Artist_Performances {
  edges: [Node_Artist_Performances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_Performances {
  node: Performance
  cursor: String!
}

input Filter_ArtistGroup {
  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  header: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  footer: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup"""
type Connection_ArtistGroup {
  edges: [Node_ArtistGroup]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup {
  node: ArtistGroup
  cursor: String!
}

input Filter_ArtistUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for ArtistUnprefix"""
type Connection_ArtistUnprefix {
  edges: [Node_ArtistUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistUnprefix {
  node: ArtistUnprefix
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistUnprefix"""
type ArtistUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_Artist {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  fanUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  officialUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  icon: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  artistuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  abbrev: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isTradable: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  ref_shnartist: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  nameFirstLetter: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  archive_key: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  nameNormalized: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Artist"""
type Connection_Artist {
  edges: [Node_Artist]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist {
  node: Artist
  cursor: String!
}

input Filter_ArtistUnprefixSource {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for ArtistUnprefixSource"""
type Connection_ArtistUnprefixSource {
  edges: [Node_ArtistUnprefixSource]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistUnprefixSource {
  node: ArtistUnprefixSource
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistUnprefixSource"""
type ArtistUnprefixSource {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_InternetArchive_Creator {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Creator"""
type Connection_InternetArchive_Creator {
  edges: [Node_InternetArchive_Creator]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Creator {
  node: InternetArchive_Creator
  cursor: String!
}

input Filter_InternetArchive_CreatorUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for InternetArchive_CreatorUnprefix"""
type Connection_InternetArchive_CreatorUnprefix {
  edges: [Node_InternetArchive_CreatorUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_CreatorUnprefix {
  node: InternetArchive_CreatorUnprefix
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\CreatorUnprefix"""
type InternetArchive_CreatorUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String
}

input Filter_Performance {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance"""
type Connection_Performance {
  edges: [Node_Performance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance {
  node: Performance
  cursor: String!
}

input Filter_Source {
  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  enterUsername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  circdate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  shndiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  wavdiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  textdoc: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comments: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  mediaSize: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  mediaSizeUncompressed: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  dummyColumn: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source"""
type Connection_Source {
  edges: [Node_Source]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source {
  node: Source
  cursor: String!
}

"""Connection for UserPerformance"""
type Connection_UserPerformance {
  edges: [Node_UserPerformance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserPerformance {
  node: UserPerformance
  cursor: String!
}`,fn=vS(),Bo=js(Vs.DIRECTIVES,[]);var Af;const lS=Hs((Af=fn.getQueryType())==null?void 0:Af.getFields());var Nf;const cS=Hs((Nf=fn.getMutationType())==null?void 0:Nf.getFields());var wf;const fS=Hs((wf=fn.getSubscriptionType())==null?void 0:wf.getFields()),au=wt.keyBy(Mp(),r=>r.name.toLocaleLowerCase()),pS=wt.mapValues(au,r=>{const n=Bo.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(a=>a.name===t)).filter(t=>!!t):[]}),dS=Hs(fn.getTypeMap()),hS=sS(fn);function Hs(r){return wt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function gS(){return wt.size(fn.getTypeMap())<=10}function _S(){return[Io("Queries",fn.getQueryType()),Io("Mutations",fn.getMutationType()),Io("Subscriptions",fn.getSubscriptionType()),ES(),FS()].filter(r=>!!r)}function Io(r,n){return mS(r,bS(n))}function bS(r){return wt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function mS(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:Ai.joinUrlPaths(qs(),r.toLocaleLowerCase(),t.name)}))}}function FS(){return gS()?null:{type:"menu",title:"Types",children:wt.sortBy(wt.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Ai.joinUrlPaths(qs(),"types",n.name)}))}}function BS(){return!!fn.getQueryType()}function PS(r){return lS[r.toLocaleLowerCase()]}function $S(){return!!fn.getMutationType()}function MS(r){return cS[r.toLocaleLowerCase()]}function GS(){return!!fn.getSubscriptionType()}function VS(r){return fS[r.toLocaleLowerCase()]}function jS(r){return dS[r.toLocaleLowerCase()]}function DS(r){return au[r.toLocaleLowerCase()]}function qS(r){return DS(r.name)!==void 0}function zS(){return wt.size(au)>0}function YS(r){return pS[r.name.toLocaleLowerCase()]||[]}function WS(r){if(r)return hS.getFor(r)}function QS(r){return wt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:$p(n,r)}))}function $p(r,n){return r?r.description?[{description:r.description,from:n}]:ze(n)?n.getInterfaces().flatMap(t=>$p(t.getFields()[r.name],t)):[]:[]}function Mp(){return Bo.some(r=>(r==null?void 0:r.name)==="*")?fn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Bo.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?fn.getDirective(r):void 0).filter(r=>!!r)}function vS(){return yf.trim().length===0?eS(JSON.parse(JSON.stringify({__schema:{types:[]}}))):iS(yf)}function ES(){const r=Mp();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:Ai.joinUrlPaths(qs(),"directives",n.name),section:"Directives"}))}}const JS=js(Vs.APP_TITLE,"GraphQL Documentation"),Gp=TS().concat(_S());IS(Gp);const SS=Object.freeze(Gp),HS=yS();function TS(){return js(Vs.PAGES,NS()).filter(n=>!!n).map(n=>jp([],n))}function yS(){const r=AS();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function IS(r){function n(a,s){for(const o of a){if(o.type==="page"){s(o);continue}o.type==="menu"&&n(o.children,s)}}let t;n(r,a=>{t&&(t.next={title:a.title,section:a.section,href:a.href},a.previous={title:t.title,section:t.section,href:t.href}),t=a})}function AS(){return Vp(()=>!0)}function XS(r){return Vp(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function Vp(r){function n(t){for(const a of t){if(a.type==="page"&&r(a))return a;if(a.type==="menu"){const s=n(a.children);if(s)return s}}return null}return n(SS)}function jp(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Ai.joinUrlPaths(qs(),...r,If(n.title))};const t=r.concat([If(n.title)]);return{type:"menu",title:n.title,children:n.content.map(a=>({...jp(t,a),section:n.title}))}}function If(r){return Ai.generatePathSegment(r,new Lf)}function NS(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{kD as A,gS as B,jS as C,WS as D,Ht as E,Zn as F,Ve as G,Mn as H,ze as I,mn as J,v as K,QS as L,gr as M,Br as N,RS as O,Ms as P,Of as Q,bi as R,LS as S,Lf as T,me as U,Hn as V,JS as W,wt as _,$S as a,BS as b,PS as c,GS as d,VS as e,XS as f,MS as g,HS as h,xf as i,kS as j,zS as k,DS as l,YS as m,qS as n,qs as o,SS as p,ot as q,up as r,fn as s,Fn as t,Ai as u,ye as v,US as w,js as x,Vs as y,fi as z};
