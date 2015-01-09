var Cufon=function(){function p(n){var t=this.face=n.face,i=
{" ":1," ":1,"　":1};this.glyphs=n.glyphs,this.w=n.w,this.baseSize=
parseInt(t["units-per-em"],10),this.family=t["font-family"].
toLowerCase(),this.weight=t["font-weight"],this.style=t["font-style"]||
"normal",this.viewBox=function(){var i=t.bbox.split(/\s+/),n=
{minX:parseInt(i[0],10),minY:parseInt(i[1],10),maxX:parseInt(
i[2],10),maxY:parseInt(i[3],10)};return n.width=n.maxX-n.minX,
n.height=n.maxY-n.minY,n.toString=function(){return[this.minX,
this.minY,this.width,this.height].join(" ")},n}(),this.ascent=
-parseInt(t.ascent,10),this.descent=-parseInt(t.descent,10),
this.height=-this.ascent+this.descent,this.spacing=function(
n,t,r){for(var l=this.glyphs,u,o,h,f=[],s=0,a=-1,c=-1,e;e=n[
++a];)(u=l[e]||this.missingGlyph,u)&&(o&&(s-=h=o[e]||0,f[c]-=
h),s+=f[++c]=~~(u.w||this.w)+t+(i[e]?r:0),o=u.k);return f.total=
s,f}}function w(){var n={},t={oblique:"italic",italic:"oblique"};
this.add=function(t){(n[t.style]||(n[t.style]={}))[t.weight]=
t},this.get=function(i,r){var f=n[i]||n[t[i]]||n.normal||n.italic||
n.oblique,h,c,e,s,u;if(!f)return null;if(r={normal:400,bold:
700}[r]||parseInt(r,10),f[r])return f[r];h={1:1,99:0}[r%100],
c=[],h===undefined&&(h=r>400),r==500&&(r=400);for(u in f)o(f,
u)&&(u=parseInt(u,10),(!e||u<e)&&(e=u),(!s||u>s)&&(s=u),c.push(
u));return r<e&&(r=e),r>s&&(r=s),c.sort(function(n,t){return(h?
n>=r&&t>=r?n<t:n>t:n<=r&&t<=r?n>t:n<t)?-1:1}),f[c[0]]}}function b(
){function f(n,t){return n.contains?n.contains(t):n.compareDocumentPosition(
t)&16}function t(n){var t=n.relatedTarget;t&&!f(this,t)&&u(this,
n.type=="mouseover")}function i(n){u(this,n.type=="mouseenter")}
function u(t,i){setTimeout(function(){var r=a.get(t).options;
n.replace(t,i?l(r,r.hover):r,!0)},10)}this.attach=function(n)
{n.onmouseenter===undefined?(r(n,"mouseover",t),r(n,"mouseout",
t)):(r(n,"mouseenter",i),r(n,"mouseleave",i))}}function k(){
function r(n){for(var u=[],f,r=0;f=n[r];++r)u[r]=t[i[f]];return u}
var t=[],i={};this.add=function(n,r){i[n]=t.push(r)-1},this.
repeat=function(){for(var f=arguments.length?r(arguments):t,
i,u=0;i=f[u++];)n.replace(i[0],i[1],!0)}}function d(){function i(
n){return n.cufid||(n.cufid=++t)}var n={},t=0;this.get=function(
t){var r=i(t);return n[r]||(n[r]={})}}function s(n){var i={},
r={};this.extend=function(n){for(var t in n)o(n,t)&&(i[t]=n[
t]);return this},this.get=function(t){return i[t]!=undefined?
i[t]:n[t]},this.getSize=function(n,i){return r[n]||(r[n]=new
t.Size(this.get(n),i))},this.isUsable=function(){return!!n}}
function r(n,t,i){n.addEventListener?n.addEventListener(t,i,
!1):n.attachEvent&&n.attachEvent("on"+t,function(){return i.
call(n,window.event)})}function g(n,t){var i=a.get(n);return i.
options?n:(t.hover&&t.hoverables[n.nodeName.toLowerCase()]&&
ut.attach(n),i.options=t,n)}function i(n){var t={};return function(
i){return o(t,i)||(t[i]=n.apply(null,arguments)),t[i]}}function nt(
n,i){for(var e=t.quotedList(i.get("fontFamily").toLowerCase(
)),r,f=0;r=e[f];++f)if(u[r])return u[r].get(i.get("fontStyle"),
i.get("fontWeight"));return null}function e(n){return document.
getElementsByTagName(n)}function o(n,t){return n.hasOwnProperty(
t)}function l(){for(var r={},n,t,i=0,u=arguments.length;n=arguments[
i],i<u;++i)for(t in n)o(n,t)&&(r[t]=n[t]);return r}function tt(
n,i,r,u,f,e){var l=document.createDocumentFragment(),a,o,h;if(
i==="")return l;var v=u.separate,s=i.split(ft[v]),y=v=="words";
for(y&&rt&&(/^\s/.test(i)&&s.unshift(""),/\s$/.test(i)&&s.push(
"")),o=0,h=s.length;o<h;++o)a=c[u.engine](n,y?t.textAlign(s[
o],r,o,h):s[o],r,u,f,e,o<h-1),a&&l.appendChild(a);return l}function it(
n,i){var h=n.nodeName.toLowerCase();if(!i.ignore[h]){var a=!i.
textless[h],f=t.getStyle(g(n,i)).extend(i),e=nt(n,f),r,o,s,u,
l;if(e)for(r=n.firstChild;r;r=s)(o=r.nodeType,s=r.nextSibling,
a&&o==3&&(u?(u.appendData(r.data),n.removeChild(r)):u=r,s))||
(u&&(n.replaceChild(tt(e,t.whiteSpace(u.data,f,u,l),f,i,r,n),
u),u=null),o==1&&(r.firstChild&&(r.nodeName.toLowerCase()=="cufon"?
c[i.engine](e,null,f,i,r,n):arguments.callee(r,i)),l=r))}}var
n=function(){return n.replace.apply(null,arguments)},f=n.DOM=
{ready:function(){var t=!1,u={loaded:1,complete:1},i=[],n=function(
){if(!t){t=!0;for(var n;n=i.shift();n());}};return document.
addEventListener&&(document.addEventListener("DOMContentLoaded",
n,!1),window.addEventListener("pageshow",n,!1)),!window.opera&&
document.readyState&&function(){u[document.readyState]?n():setTimeout(
arguments.callee,10)}(),document.readyState&&document.createStyleSheet&&
function(){try{document.body.doScroll("left"),n()}catch(t){setTimeout(
arguments.callee,1)}}(),r(window,"load",n),function(r){arguments.
length?t?r():i.push(r):n()}}(),root:function(){return document.
documentElement||document.body}},t=n.CSS={Size:function(n,t)
{this.value=parseFloat(n),this.unit=String(n).match(/[a-z%]*$/)[
0]||"px",this.convert=function(n){return n/t*this.value},this.
convertFrom=function(n){return n/this.value*t},this.toString=
function(){return this.value+this.unit}},addClass:function(n,
t){var i=n.className;return n.className=i+(i&&" ")+t,n},color:
i(function(n){var t={};return t.color=n.replace(/^rgba\((.*?),\s*([\d.]+)\)/,
function(n,i,r){return t.opacity=parseFloat(r),"rgb("+i+")"}
),t}),fontStretch:i(function(n){return typeof n=="number"?n:
/%$/.test(n)?parseFloat(n)/100:{"ultra-condensed":.5,"extra-condensed":
.625,condensed:.75,"semi-condensed":.875,"semi-expanded":1.125,
expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[n]||1}
),getStyle:function(n){var t=document.defaultView;return t&&
t.getComputedStyle?new s(t.getComputedStyle(n,null)):n.currentStyle?
new s(n.currentStyle):new s(n.style)},gradient:i(function(n)
{for(var u={id:n,type:n.match(/^-([a-z]+)-gradient\(/)[1],stops:
[]},f=n.substr(n.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig),
r,t=0,i=f.length;t<i;++t)r=f[t].split("=",2).reverse(),u.stops.
push([r[1]||t/(i-1),r[0]]);return u}),quotedList:i(function(
n){for(var i=[],r=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,t;
t=r.exec(n);)i.push(t[3]||t[1]);return i}),recognizesMedia:i(
function(n){var t=document.createElement("style"),r,i,u;t.type=
"text/css",t.media=n;try{t.appendChild(document.createTextNode(
"/**/"))}catch(f){}return i=e("head")[0],i.insertBefore(t,i.
firstChild),r=t.sheet||t.styleSheet,u=r&&!r.disabled,i.removeChild(
t),u}),removeClass:function(n,t){var i=RegExp("(?:^|\\s+)"+t+
"(?=\\s|$)","g");return n.className=n.className.replace(i,""),
n},supports:function(n,t){var i=document.createElement("span").
style;return i[n]===undefined?!1:(i[n]=t,i[n]===t)},textAlign:
function(n,t,i,r){return t.get("textAlign")=="right"?i>0&&(n=
" "+n):i<r-1&&(n+=" "),n},textShadow:i(function(n){if(n=="none")
return null;for(var r=[],t={},i,u=0,f=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
i=f.exec(n);)i[0]==","?(r.push(t),t={},u=0):i[1]?t.color=i[1]:
t[["offX","offY","blur"][u++]]=i[2];return r.push(t),r}),textTransform:
function(){var n={uppercase:function(n){return n.toUpperCase(
)},lowercase:function(n){return n.toLowerCase()},capitalize:
function(n){return n.replace(/\b./g,function(n){return n.toUpperCase(
)})}};return function(t,i){var r=n[i.get("textTransform")];return r?
r(t):t}}(),whiteSpace:function(){var t={inline:1,"inline-block":
1,"run-in":1},n=/^\s+/,i=/\s+$/;return function(r,u,f,e){return(
e&&e.nodeName.toLowerCase()=="br"&&(r=r.replace(n,"")),t[u.get(
"display")])?r:(f.previousSibling||(r=r.replace(n,"")),f.nextSibling||
(r=r.replace(i,"")),r)}}()};t.ready=function(){function u(n)
{return n.disabled||o(n.sheet,n.media||"screen")}function o(
n,i){var r,u,f,e;if(!t.recognizesMedia(i||"all"))return!0;if(
!n||n.disabled)return!1;try{if(r=n.cssRules,r)n:for(f=0,e=r.
length;u=r[f],f<e;++f)switch(u.type){case 2:break;case 3:if(
!o(u.styleSheet,u.media.mediaText))return!1;break;default:break n}
}catch(s){}return!0}function l(){if(document.createStyleSheet)
return!0;for(var t,n=0;t=h[n];++n)if(t.rel.toLowerCase()=="stylesheet"&&
!u(t))return!1;for(n=0;t=c[n];++n)if(!u(t))return!1;return!0}
var n=!t.recognizesMedia("all"),i=!1,r=[],s=function(){n=!0;
for(var t;t=r.shift();t());},h=e("link"),c=e("style");return f.
ready(function(){i||(i=t.getStyle(document.body).isUsable()),
n||i&&l()?s():setTimeout(arguments.callee,10)}),function(t){
n?t():r.push(t)}}();var rt=" ".split(/\s+/).length==0,a=new d,
ut=new b,h=new k,v=!1,c={},u={},y={autoDetect:!1,engine:null,
forceHitArea:!1,hover:!1,hoverables:{a:!0},ignore:{applet:1,
canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:
1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:
!0,selector:window.Sizzle||window.jQuery&&function(n){return jQuery(
n)}||window.dojo&&dojo.query||window.Ext&&Ext.query||window.
YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.
query||window.$$&&function(n){return $$(n)}||window.$&&function(
n){return $(n)}||document.querySelectorAll&&function(n){return document.
querySelectorAll(n)}||e,separate:"words",textless:{dl:1,html:
1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:
"none"},ft={words:/\s/.test(" ")?/[^\S\u00a0]+/:/\s+/,characters:
"",none:/^/};return n.now=function(){return f.ready(),n},n.refresh=
function(){return h.repeat.apply(h,arguments),n},n.registerEngine=
function(t,i){return i?(c[t]=i,n.set("engine",t)):n},n.registerFont=
function(t){if(!t)return n;var r=new p(t),i=r.family;return u[
i]||(u[i]=new w),u[i].add(r),n.set("fontFamily",'"'+i+'"')},
n.replace=function(i,r,u){return(r=l(y,r),!r.engine)?n:(v||(
t.addClass(f.root(),"cufon-active cufon-loading"),t.ready(function(
){t.addClass(t.removeClass(f.root(),"cufon-loading"),"cufon-ready")}
),v=!0),r.hover&&(r.forceHitArea=!0),r.autoDetect&&delete r.
fontFamily,typeof r.textShadow=="string"&&(r.textShadow=t.textShadow(
r.textShadow)),typeof r.color=="string"&&/^-/.test(r.color)?
r.textGradient=t.gradient(r.color):delete r.textGradient,u||
h.add(i,arguments),(i.nodeType||typeof i=="string")&&(i=[i]),
t.ready(function(){for(var u,t=0,f=i.length;t<f;++t)u=i[t],typeof
u=="string"?n.replace(r.selector(u),r,!0):it(u,r)}),n)},n.set=
function(t,i){return y[t]=i,n},n}();Cufon.registerEngine("vml",
function(){function e(n,t){return u(n,/(?:em|ex|%)$|^[a-z-]+$/i.
test(t)?"1em":t)}function u(n,t){var i,r,u;return t==="0"?0:
/px$/i.test(t)?parseFloat(t):(i=n.style.left,r=n.runtimeStyle.
left,n.runtimeStyle.left=n.currentStyle.left,n.style.left=t.
replace("%","em"),u=n.style.pixelLeft,n.style.left=i,n.runtimeStyle.
left=r,u)}function f(n,t,i,r){var e="computed"+r,f=t[e];return isNaN(
f)&&(f=t.get(r),t[e]=f=f=="normal"?0:~~i.convertFrom(u(n,f))),
f}function o(n){var f=n.id,u,e;if(!t[f]){var r=n.stops,i=document.
createElement("cvml:fill"),o=[];for(i.type="gradient",i.angle=
180,i.focus="0",i.method="sigma",i.color=r[0][1],u=1,e=r.length-
1;u<e;++u)o.push(r[u][0]*100+"% "+r[u][1]);i.colors=o.join(","),
i.color2=r[e][1],t[f]=i}return t[f]}var i=document.namespaces,
n,r,t;if(i)return(i.add("cvml","urn:schemas-microsoft-com:vml"),
i=null,n=document.createElement("cvml:shape"),n.style.behavior=
"url(#default#VML)",!n.coordsize)?void 0:(n=null,r=(document.
documentMode||0)<8,document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+
(r?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}<\/style>")
.replace(/;/g,"!important;")),t={},function(n,t,i,s,h,c,l){var
et=t===null,k,y,p,w,ot,rt,a,at,v,yt,pt,d,g;et&&(t=h.alt),k=n.
viewBox,y=i.computedFontSize||(i.computedFontSize=new Cufon.
CSS.Size(e(c,i.get("fontSize"))+"px",n.baseSize)),et?(p=h,w=
h.firstChild):(p=document.createElement("cufon"),p.className=
"cufon cufon-vml",p.alt=t,w=document.createElement("cufoncanvas"),
p.appendChild(w),s.printable&&(ot=document.createElement("cufontext"),
ot.appendChild(document.createTextNode(t)),p.appendChild(ot)),
l||p.appendChild(document.createElement("cvml:shape")));var nt=
p.style,st=w.style,wt=y.convert(k.height),it=Math.ceil(wt),si=
it/wt,bt=si*Cufon.CSS.fontStretch(i.get("fontStretch")),ht=k.
minX,kt=k.minY;st.height=it,st.top=Math.round(y.convert(kt-n.
ascent)),st.left=Math.round(y.convert(ht)),nt.height=y.convert(
n.height)+"px";var hi=i.get("color"),ct=Cufon.CSS.textTransform(
t,i).split(""),tt=n.spacing(ct,f(c,i,y,"letterSpacing"),f(c,
i,y,"wordSpacing"));if(!tt.length)return null;for(var dt=tt.
total,gt=-ht+dt+(k.width-tt[tt.length-1]),ci=y.convert(gt*bt),
ni=Math.round(ci),ti=gt+","+k.height,ii,li="r"+ti+"ns",ri=s.
textGradient&&o(s.textGradient),ai=n.glyphs,ui=0,lt=s.textShadow,
fi=-1,ei=0,vi;vi=ct[++fi];)if(rt=ai[ct[fi]]||n.missingGlyph,
rt){if(et)for(a=w.childNodes[ei];a.firstChild;)a.removeChild(
a.firstChild);else a=document.createElement("cvml:shape"),w.
appendChild(a);if(a.stroked="f",a.coordsize=ti,a.coordorigin=
ii=ht-ui+","+kt,a.path=(rt.d?"m"+rt.d+"xe":"")+"m"+ii+li,a.fillcolor=
hi,ri&&a.appendChild(ri.cloneNode(!1)),at=a.style,at.width=ni,
at.height=it,lt){var vt=lt[0],ut=lt[1],oi=Cufon.CSS.color(vt.
color),ft,b=document.createElement("cvml:shadow");b.on="t",b.
color=oi.color,b.offset=vt.offX+","+vt.offY,ut&&(ft=Cufon.CSS.
color(ut.color),b.type="double",b.color2=ft.color,b.offset2=
ut.offX+","+ut.offY),b.opacity=oi.opacity||ft&&ft.opacity||1,
a.appendChild(b)}ui+=tt[ei++]}return v=a.nextSibling,s.forceHitArea?
(v||(v=document.createElement("cvml:rect"),v.stroked="f",v.className=
"cufon-vml-cover",yt=document.createElement("cvml:fill"),yt.
opacity=0,v.appendChild(yt),w.appendChild(v)),pt=v.style,pt.
width=ni,pt.height=it):v&&w.removeChild(v),nt.width=Math.max(
Math.ceil(y.convert(dt*bt)),0),r&&(d=i.computedYAdjust,d===undefined&&
(g=i.get("lineHeight"),g=="normal"?g="1em":isNaN(g)||(g+="em"),
i.computedYAdjust=d=.5*(u(c,g)-parseFloat(nt.height))),d&&(nt.
marginTop=Math.ceil(d)+"px",nt.marginBottom=d+"px")),p})}()),
Cufon.registerEngine("canvas",function(){function u(n,t){var
f=0,e=0,u=[],s=/([mrvxe])([^a-z]*)/g,o,r,i;n:for(r=0;o=s.exec(
n);++r){i=o[2].split(",");switch(o[1]){case"v":u[r]={m:"bezierCurveTo",
a:[f+~~i[0],e+~~i[1],f+~~i[2],e+~~i[3],f+=~~i[4],e+=~~i[5]]};
break;case"r":u[r]={m:"lineTo",a:[f+=~~i[0],e+=~~i[1]]};break
case"m":u[r]={m:"moveTo",a:[f=~~i[0],e=~~i[1]]};break;case"x":
u[r]={m:"closePath"};break;case"e":break n}t[u[r].m].apply(t,
u[r].a)}return u}function f(n,t){for(var r,i=0,u=n.length;i<
u;++i)r=n[i],t[r.m].apply(t,r.a)}var n=document.createElement(
"canvas");if(n&&n.getContext&&n.getContext.apply){n=null;var
t=Cufon.CSS.supports("display","inline-block"),r=!t&&(document.
compatMode=="BackCompat"||/frameset|transitional/i.test(document.
doctype.publicId)),i=document.createElement("style");return i.
type="text/css",i.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+
(r?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+
(t?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")
+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}")
.replace(/;/g,"!important;"))),document.getElementsByTagName(
"head")[0].appendChild(i),function(n,i,r,e,o){function gt(){
var r=n.glyphs,i=-1,e=-1,o,t;for(s.scale(wt,1);o=tt[++i];)(t=
r[tt[i]]||n.missingGlyph,t)&&(t.d&&(s.beginPath(),t.code?f(t.
code,s):t.code=u("m"+t.d,s),s.fill()),s.translate(b[++e],0));
s.restore()}var at=i===null,tt,b,yt,a,v,et,st,s,ht,k,ct,lt,ut,
h,ni;at&&(i=o.getAttribute("alt"));var l=n.viewBox,c=r.getSize(
"fontSize",n.baseSize),y=0,nt=0,ft=0,p=0,w=e.textShadow,vt=[
];if(w)for(h=w.length;h--;){var k=w[h],d=c.convertFrom(parseFloat(
k.offX)),g=c.convertFrom(parseFloat(k.offY));vt[h]=[d,g],g<y&&
(y=g),d>nt&&(nt=d),g>ft&&(ft=g),d<p&&(p=d)}if(tt=Cufon.CSS.textTransform(
i,r).split(""),b=n.spacing(tt,~~c.convertFrom(parseFloat(r.get(
"letterSpacing"))||0),~~c.convertFrom(parseFloat(r.get("wordSpacing"))||
0)),!b.length)return null;yt=b.total,nt+=l.width-b[b.length-
1],p+=l.minX,at?(a=o,v=o.firstChild):(a=document.createElement(
"cufon"),a.className="cufon cufon-canvas",a.setAttribute("alt",
i),v=document.createElement("canvas"),a.appendChild(v),e.printable&&
(et=document.createElement("cufontext"),et.appendChild(document.
createTextNode(i)),a.appendChild(et)));var it=a.style,rt=v.style,
ot=c.convert(l.height),ti=Math.ceil(ot),pt=ti/ot,wt=pt*Cufon.
CSS.fontStretch(r.get("fontStretch")),bt=yt*wt,kt=Math.ceil(
c.convert(bt+nt-p)),dt=Math.ceil(c.convert(l.height-y+ft));if(
v.width=kt,v.height=dt,rt.width=kt+"px",rt.height=dt+"px",y+=
l.minY,rt.top=Math.round(c.convert(y-n.ascent))+"px",rt.left=
Math.round(c.convert(p))+"px",st=Math.max(Math.ceil(c.convert(
bt)),0)+"px",t?(it.width=st,it.height=c.convert(n.height)+"px"):
(it.paddingLeft=st,it.paddingBottom=c.convert(n.height)-1+"px"),
s=v.getContext("2d"),ht=ot/l.height,s.scale(ht,ht*pt),s.translate(
-p,-y),s.save(),w)for(h=w.length;h--;)k=w[h],s.save(),s.fillStyle=
k.color,s.translate.apply(s,vt[h]),gt();if(ct=e.textGradient,
ct){for(lt=ct.stops,ut=s.createLinearGradient(0,l.minY,0,l.maxY),
h=0,ni=lt.length;h<ni;++h)ut.addColorStop.apply(ut,lt[h]);s.
fillStyle=ut}else s.fillStyle=r.get("color");return gt(),a}}
}());
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright 1990-1993 Bitstream Inc.  All rights reserved.
 */
Cufon.registerFont({w:212,face:{"font-family":"Futura Bk BT",
"font-weight":400,"font-stretch":"normal","units-per-em":"360",
"panose-1":"2 11 5 2 2 2 4 2 3 3",ascent:"288",descent:"-72",
"x-height":"7",bbox:"-20 -347.036 340 85","underline-thickness":
"20.5664","underline-position":"-29.0039","unicode-range":"U+0020-U+2122"},
glyphs:{" ":{w:106},"!":{d:"58,7v-12,0,-21,-9,-21,-21v0,-12,9,-21,21,-21v11,0,20,10,20,21v0,11,-9,21,-20,21xm44,-58r0,-205r28,0r0,205r-28,0",
w:114},'"':{d:"87,-252r0,97r-21,0r0,-97r21,0xm37,-252r0,97r-20,0r0,-97r20,0",
w:103},"#":{d:"171,-152r-46,0r-17,48r46,0xm162,-256r-29,83r46,0r29,-83r25,0r-29,83r54,0r-7,21r-55,0r-16,48r58,0r-8,22r-58,0r-29,82r-26,0r30,-82r-47,0r-30,82r-25,0r30,-82r-57,0r8,-22r56,0r17,-48r-60,0r7,-21r61,0r29,-83r26,0",
w:276},$:{d:"30,-200v0,-39,27,-61,64,-64r0,-18r14,0r0,18v30,3,50,16,61,39r-26,16v-7,-15,-17,-26,-35,-29r0,84v43,16,72,34,72,83v0,44,-30,75,-72,78r0,26r-14,0r0,-26v-41,-2,-64,-24,-72,-61r26,-15v5,27,19,46,46,49r0,-106v-37,-14,-64,-32,-64,-74xm94,-238v-28,2,-43,36,-26,60v5,7,14,13,26,18r0,-78xm108,-20v37,-2,52,-49,32,-79v-6,-8,-17,-15,-32,-21r0,100"},
"%":{d:"205,-126v37,0,53,28,53,66v0,38,-17,67,-53,67v-36,0,-53,-29,-53,-67v0,-38,16,-66,53,-66xm205,-108v-38,0,-37,97,0,97v37,0,38,-97,0,-97xm63,-242v-37,0,-38,97,0,97v21,0,27,-22,27,-48v0,-27,-5,-49,-27,-49xm63,-260v36,0,53,29,53,67v0,38,-16,66,-53,66v-37,0,-53,-28,-53,-66v0,-38,17,-67,53,-67xm48,7r148,-267r21,0r-147,267r-22,0",
w:266},"&":{d:"54,-95v-28,42,20,93,68,66v10,-5,20,-12,31,-22r-63,-75v-13,9,-31,22,-36,31xm106,-230v-29,-2,-39,35,-21,54r16,18v34,-6,53,-69,5,-72xm223,-89v-10,15,-20,28,-33,40r42,49r-38,0r-24,-30v-38,51,-160,47,-155,-38v2,-40,27,-61,59,-79v-12,-15,-28,-29,-27,-55v0,-32,26,-54,59,-54v34,0,61,21,59,54v-2,34,-21,47,-47,65r56,67v11,-11,20,-26,30,-40",
w:240},"'":{d:"37,-252r0,97r-20,0r0,-97r20,0",w:53},"(":{d:"90,-261v-48,84,-50,248,0,330r-19,10v-54,-89,-57,-261,0,-349",
w:103},")":{d:"33,-270v55,88,55,260,0,349r-19,-10v50,-82,48,-246,0,-330",
w:103},"*":{d:"27,-158r-9,-15r39,-23r-39,-23r9,-15r40,23r-1,-46r18,0r0,45r38,-22r9,16r-39,22r39,22r-9,16r-38,-22r0,44r-18,0r0,-45",
w:149},"+":{d:"160,-215r0,97r95,0r0,21r-95,0r0,97r-20,0r0,-97r-95,0r0,-21r95,0r0,-97r20,0",
w:299},",":{d:"21,51r34,-96r30,11r-44,93",w:106},"-":{d:"25,-94r82,0r0,28r-82,0r0,-28",
w:131,k:{"ø":-7,"Ø":-13,"Æ":-10,x:6,s:-7,q:-7,o:-7,e:-7,d:-7,
c:-7,Y:28,X:13,W:20,V:21,T:33,S:-7,Q:-13,O:-13,J:-20,G:-13,C:
-7}},".":{d:"53,3v-11,0,-21,-9,-21,-20v0,-12,9,-21,21,-21v12,0,21,9,21,21v0,11,-10,20,-21,20",
w:106},"/":{d:"126,-263r24,0r-126,296r-24,0",w:150},"0":{d:"195,-127v0,73,-25,134,-88,134v-63,0,-90,-62,-90,-134v0,-71,26,-133,89,-133v64,0,89,59,89,133xm49,-127v0,56,12,109,57,109v46,0,58,-51,58,-108v0,-59,-11,-109,-58,-109v-45,0,-57,53,-57,108"},
"1":{d:"98,0r0,-228r-52,0r17,-27r65,0r0,255r-30,0"},"2":{d:"103,-260v70,0,100,65,66,122v-17,29,-63,78,-91,109r97,0r0,29r-155,0v36,-45,133,-144,133,-187v0,-27,-23,-45,-51,-45v-33,0,-51,21,-50,56r-29,0v-3,-53,28,-84,80,-84"},
"3":{d:"98,7v-47,0,-80,-24,-78,-72r31,0v-1,29,19,45,48,45v34,0,53,-17,53,-49v0,-39,-25,-54,-65,-50r0,-25v38,2,62,-11,62,-46v0,-27,-18,-45,-46,-44v-30,0,-46,14,-48,43r-31,0v3,-44,32,-69,80,-69v45,-1,77,25,77,68v0,32,-19,55,-46,61v30,5,50,28,49,63v0,48,-35,76,-86,75"},
"4":{d:"128,0r0,-55r-120,0r138,-205r13,0r0,180r30,0r0,25r-30,0r0,55r-31,0xm128,-80r0,-113r-75,113r75,0"},
"5":{d:"156,-85v4,-63,-81,-78,-119,-43r-5,-2r30,-125r113,0r0,26r-92,0r-16,67v56,-28,128,8,122,74v11,93,-127,128,-172,57r21,-25v10,22,28,36,57,36v38,0,59,-27,61,-65"},
"6":{d:"104,-132v-31,-1,-51,25,-51,57v0,34,21,56,53,56v32,0,53,-23,53,-56v0,-35,-21,-57,-55,-57xm100,7v-49,0,-79,-35,-79,-84v0,-51,77,-144,109,-191r26,15r-83,108v49,-35,117,4,117,67v0,53,-36,85,-90,85"},
"7":{d:"41,-3r109,-225r-119,0r0,-27r163,0r-128,265"},"8":{d:
"152,-194v0,-26,-18,-43,-45,-43v-27,0,-46,16,-46,43v0,27,18,42,45,42v29,0,46,-15,46,-42xm52,-70v0,33,20,52,54,52v34,0,54,-19,54,-52v1,-34,-21,-53,-54,-53v-33,0,-54,21,-54,53xm20,-68v1,-37,22,-59,53,-68v-78,-24,-43,-132,34,-124v81,-11,104,107,33,124v31,9,53,31,53,68v0,48,-35,76,-86,75v-50,0,-88,-26,-87,-75"},
"9":{d:"106,-121v30,1,52,-25,52,-57v0,-34,-21,-57,-53,-57v-32,0,-53,23,-53,57v0,35,20,57,54,57xm111,-260v48,0,79,36,78,84v0,50,-76,143,-108,190r-27,-14r83,-108v-49,32,-117,-6,-117,-67v0,-53,37,-85,91,-85"},
":":{d:"58,-115v-12,0,-21,-9,-21,-21v0,-12,10,-21,21,-21v11,0,20,10,20,21v0,11,-9,21,-20,21xm58,3v-12,0,-21,-9,-21,-21v0,-11,10,-20,21,-20v11,0,20,9,20,20v0,11,-9,21,-20,21",
w:114},";":{d:"71,-115v-12,0,-21,-9,-21,-21v0,-12,10,-21,21,-21v11,0,21,9,21,21v0,12,-9,21,-21,21xm23,51r34,-96r29,11r-43,93",
w:114},"<":{d:"253,-179r-175,72r175,71r0,23r-207,-85r0,-18r207,-85r0,22",
w:299},"=":{d:"255,-84r0,21r-210,0r0,-21r210,0xm255,-151r0,20r-210,0r0,-20r210,0",
w:299},">":{d:"253,-116r0,18r-207,85r0,-23r176,-71r-176,-72r0,-22",
w:299},"?":{d:"93,-81v20,0,27,-15,27,-36r27,0v2,39,-18,62,-55,62v-32,0,-51,-20,-51,-52v0,-51,81,-66,84,-103v1,-16,-14,-27,-31,-27v-21,0,-34,14,-33,37r-29,0v-2,-39,24,-63,61,-63v37,-1,62,20,62,56v0,50,-86,64,-86,104v0,14,10,22,24,22xm90,7v-12,0,-21,-9,-21,-21v0,-12,9,-21,21,-21v12,0,20,10,21,21v0,12,-9,21,-21,21",
w:187},"@":{d:"43,-90v-7,128,167,151,248,90r8,12v-31,22,-67,39,-116,38v-97,-2,-163,-48,-163,-142v0,-104,72,-164,176,-164v83,0,144,40,144,119v0,66,-34,111,-97,116v-23,2,-37,-9,-35,-32v-10,18,-26,31,-52,32v-37,0,-51,-22,-55,-59v-7,-70,90,-134,126,-68r10,-22r20,0r-27,114v0,10,7,17,19,16v46,-5,68,-46,69,-95v2,-65,-55,-105,-125,-103v-92,3,-145,56,-150,148xm125,-78v0,40,42,50,67,27v20,-17,21,-48,30,-75v-4,-19,-16,-33,-37,-33v-37,0,-60,41,-60,81",
w:360},A:{d:"112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0",
w:225,k:{"Ø":6,Y:20,W:6,V:6,U:6,T:20,Q:6,O:6,G:6,C:6,";":-7,
":":-7,".":-11,",":-11}},B:{d:"187,-73v0,75,-72,77,-156,73r0,-257v76,-3,145,-3,144,67v0,29,-16,46,-38,54v30,4,50,29,50,63xm154,-73v0,-48,-42,-50,-93,-48r0,94v51,1,93,2,93,-46xm144,-186v0,-47,-36,-45,-83,-45r0,86v44,0,83,3,83,-41",
w:202,k:{Y:6,W:6,V:6,".":10,"-":-10,",":10}},C:{d:"155,-263v36,-1,61,12,85,27r0,40v-22,-23,-47,-39,-86,-39v-63,0,-99,44,-103,107v-6,105,137,140,189,66r0,41v-23,16,-51,29,-87,28v-81,-3,-134,-54,-134,-134v0,-83,52,-133,136,-136",
w:261,k:{";":-7,":":-7,"-":-8}},D:{d:"210,-129v0,-84,-49,-107,-148,-100r0,200v98,6,148,-15,148,-100xm242,-128v5,114,-85,137,-211,128r0,-257r49,0v114,-7,158,34,162,129",
w:261,k:{"Å":6,Y:6,W:6,V:6,A:6,".":21,"-":-11,",":21}},E:{d:
"31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,99r105,0r0,28r-136,0",
w:187,k:{";":-7,":":-7,".":-7,"-":-7,",":-7}},F:{d:"31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,127r-31,0",
w:182,k:{"»":-7,"«":13,"ø":13,"æ":6,"Å":20,u:6,r:6,o:13,i:6,
e:6,a:6,A:20,";":15,":":15,".":71,"-":18,",":71}},G:{d:"52,-126v0,86,102,138,165,82v17,-16,27,-36,29,-61r-74,0r0,-28r107,0v3,87,-46,140,-129,140v-83,0,-124,-53,-131,-133v-12,-135,177,-183,242,-83r-25,20v-16,-28,-42,-46,-83,-46v-60,-1,-101,46,-101,109",
w:293,k:{Y:6,T:6,";":-7,":":-7,".":10,"-":-8,",":10}},H:{d:"31,0r0,-257r31,0r0,99r136,0r0,-99r31,0r0,257r-31,0r0,-129r-136,0r0,129r-31,0",
w:259,k:{".":6,",":6}},I:{d:"31,0r0,-257r31,0r0,257r-31,0",w:
93},J:{d:"55,-21v24,0,25,-19,25,-51r0,-185r31,0r0,200v10,69,-79,82,-111,38r20,-20v11,11,18,18,35,18",
w:139,k:{";":11,":":11,".":18,",":18}},K:{d:"31,0r0,-257r30,0r0,114r108,-114r37,0r-111,115r122,142r-40,0r-116,-139r0,139r-30,0",
k:{"«":10,"ø":6,"æ":6,"Ø":13,y:13,u:6,o:6,e:6,a:6,Y:13,W:13,
U:6,T:13,O:13,C:13,";":-7,":":-7,".":-7,"-":11,",":-7}},L:{d:
"31,0r0,-257r31,0r0,228r97,0r0,29r-128,0",w:164,k:{"ø":6,"æ":
6,"Ø":13,y:13,u:6,o:6,e:6,a:6,Y:26,W:20,V:20,U:6,T:20,O:13,";":
-7,":":-7,".":-7,"-":6,",":-7}},M:{d:"151,10r-80,-185r-33,175r-29,0r52,-268r90,213r90,-213r52,268r-30,0r-33,-175",
w:301},N:{d:"31,0r0,-268r188,206r0,-195r29,0r0,267r-188,-203r0,193r-29,0",
w:278,k:{";":10,":":10,".":16,",":16}},O:{d:"51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135",
w:313,k:{"Å":6,Y:13,X:6,V:6,T:20,A:6,";":-7,":":-7,".":15,"-":
-10,",":15}},P:{d:"176,-187v-1,61,-44,77,-115,72r0,115r-30,0r0,-257v77,-3,147,-3,145,70xm143,-185v0,-43,-33,-44,-82,-44r0,86v48,0,83,1,82,-42",
w:182,k:{"»":6,"«":20,"ø":20,"æ":20,"Å":20,s:6,r:6,o:20,n:6,
e:20,a:20,A:20,";":16,":":16,".":86,"-":34,",":86}},Q:{d:"52,-128v-3,80,79,127,152,93r-53,-57r38,0r38,41v20,-16,35,-41,34,-76v-1,-67,-43,-107,-104,-107v-63,0,-103,42,-105,106xm294,-128v1,46,-19,78,-46,100r49,53r-37,0r-35,-37v-91,48,-211,-11,-206,-116v5,-81,56,-135,138,-135v83,0,134,52,137,135",
w:313,k:{";":-7,":":-7,"-":-10}},R:{d:"175,-187v0,45,-27,66,-75,64r98,123r-39,0r-94,-123r-4,0r0,123r-30,0r0,-257r60,0v58,-3,84,21,84,70xm144,-187v0,-47,-36,-45,-83,-45r0,87v46,0,83,2,83,-42",
w:192,k:{Y:6,"-":10}},S:{d:"136,-208v-11,-38,-83,-41,-83,7v0,69,122,41,122,129v0,69,-82,100,-133,63v-14,-10,-23,-25,-28,-44r28,-14v2,60,105,62,102,0v-4,-76,-122,-48,-122,-133v0,-69,116,-87,139,-25",
w:185,k:{";":-7,":":-7,".":6,"-":-11,",":6}},T:{d:"76,0r0,-228r-73,0r0,-29r176,0r0,29r-72,0r0,228r-31,0",
w:182,k:{"»":20,"«":33,"ø":43,"æ":43,"Ø":20,"Å":26,y:43,w:43,
u:36,s:43,r:36,o:43,e:43,c:43,a:43,O:20,C:13,A:26,";":23,":":
23,".":46,"-":33,",":46}},U:{d:"130,7v-67,0,-101,-35,-100,-104r0,-160r31,0r0,160v0,51,19,75,69,75v49,0,68,-24,68,-75r0,-160r31,0r0,160v1,70,-32,104,-99,104",
w:259,k:{"«":13,"Å":6,A:6,";":11,":":11,".":21,"-":10,",":21}},
V:{d:"104,10r-108,-267r33,0r75,197r76,-197r33,0",w:208,k:{"»":
20,"«":40,"ø":20,"æ":20,"Ø":6,"Å":6,y:10,u:20,o:20,e:20,a:20,
O:6,A:6,";":24,":":24,".":60,"-":29,",":60}},W:{d:"-2,-257r33,0r65,189r68,-200r69,200r65,-189r33,0r-99,267r-68,-199r-67,199",
w:328,k:{"»":20,"«":33,"ø":20,"æ":20,"Å":6,y:6,u:13,r:13,o:20,
e:20,a:20,A:6,";":21,":":21,".":44,"-":21,",":44}},X:{d:"-2,0r79,-137r-74,-120r37,0r55,98r53,-98r35,0r-73,123r82,134r-36,0r-63,-111r-60,111r-35,0",
w:190,k:{"«":20,"Ø":6,O:6,C:6,";":6,":":6,".":-7,"-":18,",":
-7}},Y:{d:"88,0r0,-118r-88,-139r36,0r67,111r67,-111r35,0r-87,139r0,118r-30,0",
w:205,k:{"»":26,"«":40,"ø":40,"æ":40,"Ø":13,"Å":20,u:38,o:40,
i:6,e:40,a:40,O:13,C:6,A:20,";":38,":":38,".":48,"-":43,",":
48}},Z:{d:"-2,0r145,-229r-118,0r0,-28r170,0r-143,228r137,0r0,29r-191,0",
w:203,k:{";":-7,":":-7,".":-7,"-":6,",":-7}},"[":{d:"58,49r32,0r0,23r-57,0r0,-335r57,0r0,24r-32,0r0,288",
w:103},"\\":{d:"126,33r-126,-296r24,0r126,296r-24,0",w:150},
"]":{d:"46,49r0,-288r-32,0r0,-24r56,0r0,335r-56,0r0,-23r32,0",
w:103},"^":{d:"194,-256r91,98r-27,0r-78,-77r-78,77r-28,0r92,-98r28,0",
w:360},_:{d:"180,64r0,21r-180,0r0,-21r180,0",w:180},"`":{d:"115,-186r-21,0r-50,-61r35,0",
w:180},a:{d:"99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87",
w:204},b:{d:"109,-139v-33,-1,-55,25,-55,59v0,35,20,60,54,60v34,-1,53,-26,53,-63v0,-34,-19,-56,-52,-56xm113,7v-27,-1,-48,-16,-59,-36r0,29r-26,0r0,-272r27,0r0,141v11,-22,29,-36,59,-36v47,0,76,38,76,87v0,49,-30,87,-77,87",
w:205,k:{"-":-7}},c:{d:"44,-78v0,56,72,74,108,40r0,32v-57,33,-137,0,-137,-73v0,-71,73,-108,134,-77r0,30v-39,-29,-105,-9,-105,48",
w:161},d:{d:"97,-20v34,0,54,-24,54,-60v0,-34,-21,-60,-54,-59v-33,0,-52,22,-52,56v0,37,18,62,52,63xm92,-167v29,0,48,14,58,36r0,-141r28,0r0,272r-27,0r0,-29v-10,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,29,-87,76,-87",
w:205},e:{d:"142,-99v1,-41,-54,-57,-82,-32v-9,8,-15,19,-16,32r98,0xm94,-167v51,0,81,37,78,91v-41,2,-91,-4,-128,2v-1,33,22,59,54,58v26,-1,41,-15,52,-35r21,14v-14,27,-38,43,-75,44v-49,1,-82,-38,-82,-88v0,-48,32,-87,80,-86",
w:185,k:{"-":-7}},f:{d:"105,-244v-29,-12,-42,-3,-42,40r0,43r42,0r0,23r-42,0r0,138r-28,0r0,-138r-31,0r0,-23r31,0v2,-55,-11,-115,47,-115v9,0,16,2,23,4r0,28",
w:104,k:{".":13,",":13}},g:{d:"99,-21v33,0,52,-24,52,-59v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,62,54,61xm16,-81v0,-83,104,-117,134,-50r0,-30r28,0r0,158v12,83,-85,98,-137,65v-15,-10,-20,-28,-21,-48r30,0v0,28,19,40,48,40v48,0,57,-32,53,-85v-11,20,-29,36,-58,36v-48,1,-77,-37,-77,-86",
w:205,k:{".":6,"-":6,",":6}},h:{d:"104,-143v-64,0,-47,81,-49,143r-27,0r0,-272r27,0r0,136v13,-19,30,-30,59,-31v37,0,60,21,60,57r0,110r-28,0v-5,-57,21,-143,-42,-143",
w:200},i:{d:"43,-218v-11,0,-20,-9,-20,-20v0,-11,8,-21,20,-20v11,0,20,9,20,20v0,11,-9,20,-20,20xm30,0r0,-161r27,0r0,161r-27,0",
w:87},j:{d:"43,-218v-11,0,-20,-9,-20,-20v0,-11,8,-21,20,-20v11,0,20,9,20,20v0,11,-9,20,-20,20xm30,78r0,-239r27,0r0,239r-27,0",
w:87},k:{d:"28,0r0,-272r28,0r0,184r78,-73r36,0r-80,74r88,87r-39,0r-83,-85r0,85r-28,0",
w:177,k:{"-":15}},l:{d:"30,0r0,-272r28,0r0,272r-28,0",w:87},
m:{d:"222,-167v78,-4,54,96,57,167r-27,0v-5,-55,21,-143,-40,-143v-61,0,-42,82,-45,143r-27,0v-5,-55,21,-143,-40,-143v-62,0,-42,82,-45,143r-27,0r0,-161r27,0r0,25v18,-39,95,-41,110,2v12,-20,28,-32,57,-33",
w:305},n:{d:"104,-143v-64,0,-47,81,-49,143r-27,0r0,-161r27,0r0,25v13,-19,30,-30,59,-31v37,0,60,21,60,57r0,110r-28,0v-5,-57,21,-143,-42,-143",
w:200},o:{d:"103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87",
w:204,k:{"-":-7}},p:{d:"109,-140v-34,0,-54,24,-54,60v0,34,22,60,54,60v33,0,52,-23,52,-57v0,-37,-18,-62,-52,-63xm190,-80v0,83,-104,118,-135,51r0,107r-27,0r0,-239r26,0r0,30v11,-21,31,-35,59,-36v47,-1,77,38,77,87",
w:205,k:{"-":-7}},q:{d:"97,-20v32,0,54,-26,54,-60v0,-36,-20,-60,-54,-60v-34,1,-52,26,-52,63v0,35,18,57,52,57xm93,-167v28,1,47,15,58,36r0,-30r27,0r0,239r-28,0r0,-107v-10,22,-29,36,-58,36v-47,0,-76,-36,-76,-87v0,-49,30,-88,77,-87",
w:205},r:{d:"116,-138v-69,-23,-62,69,-60,138r-28,0r0,-161r25,0r0,34v13,-29,35,-45,73,-36",
w:126,k:{"«":6,".":36,"-":13,",":36}},s:{d:"133,-44v3,63,-102,65,-122,17r24,-16v7,28,71,38,71,2v0,-15,-10,-20,-25,-25v-36,-12,-64,-31,-64,-52v0,-57,97,-65,114,-17r-22,14v-6,-27,-63,-33,-64,1v7,34,96,24,88,76",
w:146,k:{"-":-7}},t:{d:"32,-138r-29,0r0,-23r29,0r0,-65r28,0r0,65r30,0r0,23r-30,0r0,138r-28,0r0,-138",
w:93,k:{"-":8}},u:{d:"98,7v-85,4,-74,-87,-73,-168r29,0v5,57,-20,141,45,141v65,0,40,-84,45,-141r28,0r0,94v-1,49,-26,72,-74,74",
w:196},v:{d:"81,10r-80,-171r31,0r49,112r48,-112r31,0",w:161,
k:{".":28,",":28}},w:{d:"127,-167r48,116r43,-110r31,0r-71,171r-53,-123r-53,123r-72,-171r31,0r42,110r49,-116r5,0",
w:249,k:{".":26,"-":-7,",":26}},x:{d:"0,0r62,-83r-60,-78r34,0r42,58r42,-58r34,0r-60,78r62,83r-34,0r-44,-62r-44,62r-34,0",
w:155,k:{"-":11}},y:{d:"22,78r43,-94r-63,-145r32,0r47,116r49,-116r30,0r-107,239r-31,0",
w:158,k:{".":31,"-":6,",":31}},z:{d:"5,0r93,-137r-87,0r0,-24r135,0r-92,137r91,0r0,24r-140,0",
w:155},"{":{d:"81,-153v0,-67,-1,-116,70,-107r0,23v-85,-22,-6,135,-79,144v41,6,35,53,35,101v0,37,8,44,44,43r0,22v-50,1,-70,-11,-70,-64v0,-49,8,-99,-51,-91r0,-22v38,1,51,-11,51,-49",
w:180},"|":{d:"101,-275r0,360r-22,0r0,-360r22,0",w:180},"}":
{d:"29,-260v50,0,72,10,70,65v-2,50,-6,98,51,91r0,22v-56,-8,-53,40,-51,91v2,55,-19,65,-70,64r0,-22v87,20,5,-135,79,-144v-41,-7,-35,-54,-35,-102v0,-36,-9,-44,-44,-43r0,-22",
w:180},"~":{d:"201,-105v28,0,46,-12,68,-28r0,23v-20,14,-39,24,-68,25v-33,1,-76,-26,-102,-24v-29,2,-46,12,-68,28r0,-23v20,-15,40,-25,68,-26v33,-1,74,25,102,25",
w:299},"Ä":{d:"112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0xm145,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm81,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:225},"Å":{d:"113,-327v-12,0,-22,10,-22,22v0,12,9,23,22,22v12,0,22,-10,22,-22v0,-12,-11,-21,-22,-22xm113,-262v-23,0,-43,-20,-43,-43v0,-23,19,-42,43,-42v23,-1,43,19,42,42v0,24,-19,43,-42,43xm111,-257r4,0r114,257r-33,0r-33,-79r-101,0r-33,79r-33,0xm112,-200r-41,95r82,0",
w:225,k:{Y:20,W:6,V:6,U:6,T:20,Q:6,O:6,G:6,C:6,";":-7,":":-7,
".":-11,",":-11}},"Ç":{d:"155,-263v36,-1,61,12,85,27r0,40v-22,-23,-47,-39,-86,-39v-63,0,-99,44,-103,107v-6,105,137,140,189,66r0,41v-23,16,-51,29,-87,28v-81,-3,-134,-54,-134,-134v0,-83,52,-133,136,-136xm197,50v0,41,-58,36,-89,25r0,-18v21,3,62,18,65,-7v2,-15,-16,-15,-33,-15r0,-35r13,0r0,18v26,-1,44,8,44,32",
w:261},"É":{d:"31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,99r105,0r0,28r-136,0xm75,-283r36,-61r35,0r-50,61r-21,0",
w:187},"Ñ":{d:"122,-327v22,0,46,19,54,-5r15,0v-3,39,-38,41,-71,29v-9,0,-13,5,-16,12r-16,0v3,-21,13,-36,34,-36xm31,0r0,-268r188,206r0,-195r29,0r0,267r-188,-203r0,193r-29,0",
w:278},"Ö":{d:"51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135xm189,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm125,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:313},"Ü":{d:"130,7v-67,0,-101,-35,-100,-104r0,-160r31,0r0,160v0,51,19,75,69,75v49,0,68,-24,68,-75r0,-160r31,0r0,160v1,70,-32,104,-99,104xm162,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm98,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:259},"á":{d:"99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87xm78,-186r36,-61r35,0r-50,61r-21,0",
w:204},"à":{d:"99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87xm128,-186r-21,0r-50,-61r35,0",
w:204},"â":{d:"51,-186r34,-61r35,0r35,61r-22,0r-30,-40r-31,40r-21,0xm99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87",
w:204},"ä":{d:"99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87xm135,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm71,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:204},"ã":{d:"85,-230v21,0,46,18,54,-5r15,0v-3,39,-38,40,-72,29v-8,0,-12,5,-15,12r-16,0v3,-21,13,-36,34,-36xm99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87",
w:204},"å":{d:"91,-167v29,0,49,14,59,36r0,-30r28,0r0,161r-27,0r0,-29v-11,21,-30,35,-58,36v-47,0,-77,-38,-77,-87v0,-49,28,-87,75,-87xm99,-21v34,0,52,-23,52,-58v1,-34,-20,-61,-53,-60v-35,0,-53,23,-53,58v0,36,18,60,54,60xm97,-243v-11,0,-21,10,-21,22v0,12,9,22,21,22v13,0,23,-10,23,-22v0,-12,-11,-22,-23,-22xm97,-178v-23,0,-42,-19,-42,-42v0,-23,19,-42,42,-42v23,0,42,19,42,42v0,23,-19,42,-42,42",
w:204},"ç":{d:"44,-78v0,56,72,74,108,40r0,32v-57,33,-137,0,-137,-73v0,-71,73,-108,134,-77r0,30v-39,-29,-105,-9,-105,48xm138,50v0,41,-58,36,-89,25r0,-18v21,3,62,18,65,-7v2,-15,-16,-15,-33,-15r0,-35r13,0r0,18v26,-1,44,8,44,32",
w:161},"é":{d:"142,-99v1,-41,-54,-57,-82,-32v-9,8,-15,19,-16,32r98,0xm94,-167v51,0,81,37,78,91v-41,2,-91,-4,-128,2v-1,33,22,59,54,58v26,-1,41,-15,52,-35r21,14v-14,27,-38,43,-75,44v-49,1,-82,-38,-82,-88v0,-48,32,-87,80,-86xm67,-186r36,-61r35,0r-50,61r-21,0",
w:185},"è":{d:"142,-99v1,-41,-54,-57,-82,-32v-9,8,-15,19,-16,32r98,0xm94,-167v51,0,81,37,78,91v-41,2,-91,-4,-128,2v-1,33,22,59,54,58v26,-1,41,-15,52,-35r21,14v-14,27,-38,43,-75,44v-49,1,-82,-38,-82,-88v0,-48,32,-87,80,-86xm117,-186r-21,0r-50,-61r35,0",
w:185},"ê":{d:"41,-186r34,-61r35,0r34,61r-21,0r-31,-40r-30,40r-21,0xm142,-99v1,-41,-54,-57,-82,-32v-9,8,-15,19,-16,32r98,0xm94,-167v51,0,81,37,78,91v-41,2,-91,-4,-128,2v-1,33,22,59,54,58v26,-1,41,-15,52,-35r21,14v-14,27,-38,43,-75,44v-49,1,-82,-38,-82,-88v0,-48,32,-87,80,-86",
w:185},"ë":{d:"142,-99v1,-41,-54,-57,-82,-32v-9,8,-15,19,-16,32r98,0xm94,-167v51,0,81,37,78,91v-41,2,-91,-4,-128,2v-1,33,22,59,54,58v26,-1,41,-15,52,-35r21,14v-14,27,-38,43,-75,44v-49,1,-82,-38,-82,-88v0,-48,32,-87,80,-86xm124,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm60,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:185},"í":{d:"30,0r0,-161r27,0r0,161r-27,0xm19,-186r36,-61r35,0r-50,61r-21,0",
w:87},"ì":{d:"30,0r0,-161r27,0r0,161r-27,0xm69,-186r-21,0r-50,-61r35,0",
w:87},"î":{d:"-8,-186r34,-61r35,0r34,61r-21,0r-30,-40r-31,40r-21,0xm30,0r0,-161r27,0r0,161r-27,0",
w:87},"ï":{d:"30,0r0,-161r27,0r0,161r-27,0xm76,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm12,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:87},"ñ":{d:"84,-230v21,0,46,18,54,-5r15,0v-3,39,-38,40,-72,29v-8,0,-12,5,-15,12r-16,0v3,-21,13,-36,34,-36xm104,-143v-64,0,-47,81,-49,143r-27,0r0,-161r27,0r0,25v13,-19,30,-30,59,-31v37,0,60,21,60,57r0,110r-28,0v-5,-57,21,-143,-42,-143",
w:200},"ó":{d:"103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87xm78,-186r36,-61r35,0r-50,61r-21,0",
w:204},"ò":{d:"103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87xm128,-186r-21,0r-50,-61r35,0",
w:204},"ô":{d:"51,-186r34,-61r35,0r35,61r-22,0r-30,-40r-31,40r-21,0xm103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87",
w:204},"ö":{d:"103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87xm135,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm71,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:204},"õ":{d:"85,-230v21,0,46,18,54,-5r15,0v-3,39,-38,40,-72,29v-8,0,-12,5,-15,12r-16,0v3,-21,13,-36,34,-36xm103,-141v-32,0,-59,28,-59,61v0,33,27,61,59,61v32,0,57,-28,57,-61v0,-33,-25,-61,-57,-61xm103,7v-52,0,-88,-35,-88,-87v0,-52,35,-87,88,-87v51,0,87,34,87,87v0,53,-37,87,-87,87",
w:204},"ú":{d:"98,7v-85,4,-74,-87,-73,-168r29,0v5,57,-20,141,45,141v65,0,40,-84,45,-141r28,0r0,94v-1,49,-26,72,-74,74xm74,-186r36,-61r35,0r-50,61r-21,0",
w:196},"ù":{d:"98,7v-85,4,-74,-87,-73,-168r29,0v5,57,-20,141,45,141v65,0,40,-84,45,-141r28,0r0,94v-1,49,-26,72,-74,74xm124,-186r-21,0r-50,-61r35,0",
w:196},"û":{d:"47,-186r34,-61r35,0r34,61r-21,0r-30,-40r-31,40r-21,0xm98,7v-85,4,-74,-87,-73,-168r29,0v5,57,-20,141,45,141v65,0,40,-84,45,-141r28,0r0,94v-1,49,-26,72,-74,74",
w:196},"ü":{d:"98,7v-85,4,-74,-87,-73,-168r29,0v5,57,-20,141,45,141v65,0,40,-84,45,-141r28,0r0,94v-1,49,-26,72,-74,74xm131,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm67,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:196},"°":{d:"59,-170v19,0,36,-17,36,-36v0,-19,-17,-35,-36,-35v-19,0,-35,16,-35,35v0,19,16,36,35,36xm10,-206v0,-27,23,-50,49,-50v27,0,50,23,50,50v0,26,-24,50,-50,50v-26,0,-49,-23,-49,-50",
w:118},"¢":{d:"107,-189v-44,0,-64,65,-36,98v9,11,21,17,36,19r0,-117xm121,-215v20,0,34,4,49,10r0,30v-14,-9,-29,-12,-49,-15r0,118v21,-2,37,-8,49,-17r0,30v-13,8,-28,13,-49,13r0,36r-14,0r0,-37v-44,-2,-79,-36,-79,-82v0,-49,34,-81,79,-86r0,-28r14,0r0,28"},
"£":{d:"147,7v-43,0,-90,-45,-112,0r-20,-16v11,-17,23,-29,44,-32v10,-17,11,-47,-1,-63r-41,0r0,-20r32,0v-35,-60,-6,-138,68,-136v48,1,77,30,79,78r-29,7v-2,-35,-17,-59,-52,-60v-57,-2,-58,73,-34,111r67,0r0,20r-60,0v13,20,-1,51,-10,63v16,-3,57,20,69,19v16,0,23,-10,31,-22r23,16v-12,20,-26,35,-54,35"},
"§":{d:"50,-93v0,24,22,43,45,43v23,0,44,-19,44,-43v0,-24,-21,-43,-44,-43v-24,0,-45,19,-45,43xm92,80v-38,-3,-67,-24,-65,-64r30,0v1,23,12,37,36,37v33,0,49,-35,29,-53v-30,-28,-102,-30,-102,-91v0,-33,20,-60,49,-64v-24,-9,-39,-23,-40,-52v0,-36,28,-57,67,-56v41,0,62,20,61,62r-27,0v0,-23,-13,-37,-36,-37v-35,0,-46,44,-19,58v40,21,98,29,96,87v-1,36,-20,53,-50,62v63,18,41,117,-29,111",
w:188},"¶":{d:"13,-199v-1,-69,83,-63,154,-61r0,14r-22,0r0,246r-17,0r0,-246r-32,0r0,246r-17,0r0,-137v-38,-1,-66,-24,-66,-62",
w:180},"ß":{d:"99,-249v-36,1,-42,25,-42,68r0,181r-27,0r0,-139r-23,0r0,-23r23,0v-5,-65,7,-114,69,-114v70,0,96,105,32,121v39,3,58,33,59,76v2,59,-48,97,-107,81r0,-27v40,16,76,-7,76,-54v0,-44,-27,-65,-71,-60r0,-26v32,2,51,-11,51,-40v1,-28,-13,-44,-40,-44",
w:206,k:{"-":-13}},"®":{d:"189,-161v0,-31,-35,-26,-66,-26r0,51v30,-1,66,5,66,-25xm215,-163v0,22,-15,37,-35,40r33,67r-27,0r-31,-64r-32,0r0,64r-24,0r0,-147v50,1,116,-10,116,40xm149,-14v68,0,115,-45,115,-113v0,-68,-44,-114,-114,-114v-70,0,-114,47,-114,114v0,66,46,113,113,113xm21,-127v0,-77,52,-130,129,-130v78,0,129,53,129,130v0,77,-53,129,-129,129v-76,0,-129,-53,-129,-129",
w:299},"©":{d:"82,-127v0,-62,61,-102,110,-67v11,9,17,20,18,34r-23,0v-3,-18,-17,-29,-37,-29v-31,0,-43,27,-43,62v0,33,14,59,43,60v22,1,36,-13,39,-32r23,0v-3,30,-29,51,-63,51v-44,0,-67,-34,-67,-79xm150,-14v67,0,114,-46,114,-113v0,-67,-44,-114,-114,-114v-69,0,-114,47,-114,114v0,67,47,113,114,113xm21,-127v0,-77,52,-130,129,-130v78,0,129,52,129,130v0,77,-53,129,-129,129v-77,0,-129,-53,-129,-129",
w:299},"™":{d:"167,-256r28,71r26,-71r23,0r0,94r-14,0r0,-81r-30,81r-10,0r-32,-81r0,81r-14,0r0,-94r23,0xm122,-256r0,12r-30,0r0,82r-17,0r0,-82r-30,0r0,-12r77,0",
w:299},"´":{d:"65,-186r36,-61r35,0r-50,61r-21,0",w:180},"¨":
{d:"122,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm58,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:180},"Æ":{d:"-4,0r109,-257r135,0r5,27r-114,0r32,75r112,0r5,28r-105,0r42,99r107,0r5,28r-133,0r-33,-79r-101,0r-33,79r-33,0xm71,-105r82,0r-41,-100",
w:310,k:{";":-7,":":-7,".":-7,"-":-7,",":-7}},"Ø":{d:"221,-213v-77,-60,-204,16,-163,123v5,12,11,23,19,32xm157,-22v90,4,136,-111,79,-177r-144,155v16,12,38,21,65,22xm294,-128v4,114,-138,171,-222,105r-29,32r-15,-15r29,-30v-22,-21,-38,-52,-38,-92v0,-82,56,-135,138,-135v36,0,63,11,85,29r28,-30r14,14r-27,29v23,21,36,52,37,93",
w:313,k:{Y:13,X:6,V:6,T:20,A:6,";":-7,":":-7,".":15,"-":-10,
",":15}},"±":{d:"255,-28r0,21r-210,0r0,-21r210,0xm160,-207r0,60r95,0r0,21r-95,0r0,60r-20,0r0,-60r-95,0r0,-21r95,0r0,-60r20,0",
w:299},"¥":{d:"91,0r0,-111r-87,0r0,-21r77,0r-15,-25r-62,0r0,-21r48,0r-48,-77r33,0r70,114r69,-114r32,0r-48,77r49,0r0,21r-62,0r-16,25r78,0r0,21r-88,0r0,111r-30,0"},
"µ":{d:"125,-23v-14,31,-82,36,-97,2r-20,96r-28,0r56,-263r28,0v-8,44,-22,81,-25,129v-3,43,54,52,75,22v25,-34,30,-103,43,-151r28,0r-33,156v-1,11,10,14,19,11v-3,12,0,26,-21,24v-17,-2,-23,-9,-25,-26",
w:198},"ª":{d:"74,-159v24,0,40,-15,39,-41v0,-25,-16,-43,-40,-43v-25,0,-39,15,-39,41v0,28,14,43,40,43xm12,-201v-8,-60,77,-81,101,-36r0,-21r21,0r0,113r-21,0r0,-21v-23,47,-108,23,-101,-35",
w:153},"º":{d:"77,-244v-24,0,-44,19,-44,43v-1,24,22,43,44,43v24,0,44,-19,44,-43v0,-24,-20,-43,-44,-43xm77,-140v-37,0,-65,-23,-65,-61v0,-38,28,-61,65,-61v38,0,66,24,66,61v0,37,-28,61,-66,61",
w:153},"æ":{d:"80,-84v-26,0,-43,11,-43,35v0,22,17,32,41,32v25,0,45,-11,45,-33v0,-24,-17,-34,-43,-34xm23,-156v38,-17,106,-17,115,25v9,-23,31,-36,62,-36v51,0,81,37,78,91r-128,0v0,33,22,60,54,60v26,0,42,-16,52,-35r21,14v-18,52,-119,60,-142,8v-11,21,-33,35,-64,36v-37,0,-60,-23,-62,-58v-3,-56,75,-70,112,-41v12,-55,-61,-63,-98,-39r0,-25xm248,-99v1,-42,-55,-57,-83,-31v-9,8,-14,18,-15,31r98,0",
w:292,k:{"-":-7}},"ø":{d:"190,-81v5,72,-93,115,-144,68r-21,21r-12,-14r21,-20v-45,-50,-3,-140,69,-140v23,0,39,7,53,18r21,-20r13,12r-20,21v13,13,18,30,20,54xm66,-32v45,42,127,-24,84,-83xm137,-128v-44,-41,-123,23,-83,82",
w:204,k:{"-":-7}},"¿":{d:"98,-263v12,0,21,9,21,21v0,12,-10,21,-21,21v-11,0,-21,-9,-21,-21v0,-12,9,-21,21,-21xm94,-175v-21,-1,-26,15,-26,36r-27,0v-2,-39,17,-62,54,-62v32,0,50,19,52,51v3,50,-80,67,-84,104v-1,17,14,27,31,26v22,0,33,-14,33,-37r28,0v2,39,-24,64,-61,64v-37,0,-61,-21,-62,-57v-2,-49,81,-63,86,-103v1,-12,-11,-23,-24,-22",
w:187},"¡":{d:"58,-222v-12,0,-21,-9,-21,-21v0,-11,10,-20,21,-20v11,0,20,9,20,20v0,11,-9,21,-20,21xm44,-198r28,0r0,205r-28,0r0,-205",
w:114},"¬":{d:"255,-151r0,88r-20,0r0,-67r-190,0r0,-21r210,0",
w:299},"«":{d:"120,-9r-44,-71r42,-71r19,12r-36,59r36,59xm56,-9r-44,-71r43,-71r18,12r-36,59r36,59",
w:149,k:{"Æ":-27,Y:26,W:20,V:20,T:20,J:-7}},"»":{d:"29,-9r-17,-12r36,-59r-36,-59r19,-12r42,71xm93,-9r-17,-12r36,-59r-36,-59r19,-12r42,71",
w:149,k:{Y:40,X:20,W:33,V:40,U:13,T:33,J:-13}}," ":{},"À":{d:
"112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0xm138,-283r-21,0r-50,-61r35,0",
w:225},"Ã":{d:"95,-327v21,0,46,18,54,-5r15,0v-3,39,-38,40,-72,29v-8,0,-12,5,-15,12r-16,0v3,-21,13,-36,34,-36xm112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0",
w:225},"Õ":{d:"139,-327v21,0,46,18,54,-5r15,0v-3,39,-38,40,-72,29v-8,0,-12,5,-15,12r-16,0v3,-21,13,-36,34,-36xm51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135",
w:313},"÷":{d:"130,-44v0,-11,9,-20,20,-20v11,0,20,9,20,20v0,11,-9,20,-20,20v-11,0,-20,-9,-20,-20xm255,-118r0,21r-210,0r0,-21r210,0xm130,-171v0,-11,9,-20,20,-20v11,0,20,9,20,20v0,11,-9,21,-20,21v-11,0,-20,-10,-20,-21",
w:299},"ÿ":{d:"22,78r43,-94r-63,-145r32,0r47,116r49,-116r30,0r-107,239r-31,0xm111,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm47,-195v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:158},"¤":{d:"110,-100v29,0,55,-28,55,-56v1,-28,-26,-55,-55,-55v-30,0,-56,25,-56,55v0,30,27,56,56,56xm52,-111v-21,-21,-20,-69,0,-90r-37,-36r13,-12r36,36v22,-20,69,-21,91,0r36,-36r12,12r-36,36v19,20,20,70,0,90r36,36r-12,13r-36,-36v-21,21,-70,21,-91,0r-36,36r-13,-13",
w:218},"·":{d:"53,-106v-12,0,-21,-9,-21,-21v0,-12,9,-21,21,-21v12,0,21,9,21,21v0,12,-9,21,-21,21",
w:106},"Â":{d:"61,-283r34,-61r35,0r35,61r-22,0r-30,-40r-31,40r-21,0xm112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0",
w:225},"Ê":{d:"48,-283r34,-61r35,0r35,61r-22,0r-30,-40r-31,40r-21,0xm31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,99r105,0r0,28r-136,0",
w:187},"Á":{d:"112,-200r-41,95r82,0xm112,-268r117,268r-33,0r-33,-79r-101,0r-33,79r-33,0xm88,-283r36,-61r35,0r-50,61r-21,0",
w:225},"Ë":{d:"31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,99r105,0r0,28r-136,0xm132,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm68,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:187},"È":{d:"31,0r0,-257r136,0r0,28r-105,0r0,73r105,0r0,29r-105,0r0,99r105,0r0,28r-136,0xm125,-283r-21,0r-50,-61r35,0",
w:187},"Í":{d:"31,0r0,-257r31,0r0,257r-31,0xm22,-283r36,-61r35,0r-50,61r-21,0",
w:93},"Î":{d:"-5,-283r35,-61r34,0r35,61r-22,0r-30,-40r-31,40r-21,0xm31,0r0,-257r31,0r0,257r-31,0",
w:93},"Ï":{d:"31,0r0,-257r31,0r0,257r-31,0xm79,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20xm15,-292v-11,0,-20,-9,-20,-20v-1,-10,10,-20,20,-20v10,0,21,10,20,20v0,11,-9,20,-20,20",
w:93},"Ì":{d:"31,0r0,-257r31,0r0,257r-31,0xm72,-283r-21,0r-50,-61r35,0",
w:93},"Ó":{d:"51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135xm132,-283r36,-61r35,0r-50,61r-21,0",
w:313},"Ô":{d:"105,-283r34,-61r35,0r34,61r-21,0r-30,-40r-31,40r-21,0xm51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135",
w:313},"Ò":{d:"51,-128v0,63,42,106,106,106v63,0,105,-43,105,-106v0,-63,-42,-107,-105,-107v-64,0,-106,43,-106,107xm157,-263v81,0,137,53,137,135v0,82,-56,135,-137,135v-81,0,-138,-53,-138,-135v0,-82,56,-135,138,-135xm182,-283r-21,0r-50,-61r35,0",
w:313},"Ú":{d:"130,7v-67,0,-101,-35,-100,-104r0,-160r31,0r0,160v0,51,19,75,69,75v49,0,68,-24,68,-75r0,-160r31,0r0,160v1,70,-32,104,-99,104xm105,-283r36,-61r35,0r-50,61r-21,0",
w:259},"Û":{d:"78,-283r34,-61r35,0r34,61r-21,0r-30,-40r-31,40r-21,0xm130,7v-67,0,-101,-35,-100,-104r0,-160r31,0r0,160v0,51,19,75,69,75v49,0,68,-24,68,-75r0,-160r31,0r0,160v1,70,-32,104,-99,104",
w:259},"Ù":{d:"130,7v-67,0,-101,-35,-100,-104r0,-160r31,0r0,160v0,51,19,75,69,75v49,0,68,-24,68,-75r0,-160r31,0r0,160v1,70,-32,104,-99,104xm155,-283r-21,0r-50,-61r35,0",
w:259},"¯":{d:"43,-203r0,-24r94,0r0,24r-94,0",w:180},"¸":{d:
"134,50v0,41,-58,36,-89,25r0,-18v21,3,62,18,65,-7v2,-15,-16,-15,-33,-15r0,-35r13,0r0,18v26,-1,44,8,44,32",
w:180},"¦":{d:"101,-72r0,134r-22,0r0,-134r22,0xm101,-252r0,134r-22,0r0,-134r22,0",
w:180},"Ð":{d:"244,-128v0,113,-84,137,-212,128r0,-130r-32,0r0,-27r32,0r0,-100r50,0v114,-7,162,35,162,129xm211,-129v0,-85,-49,-107,-148,-100r0,72r70,0r0,27r-70,0r0,101v99,7,148,-15,148,-100",
w:262,k:{Y:6,W:6,V:6,A:6,".":21,"-":-11,",":21}},"ð":{d:"103,-131v-31,0,-59,26,-59,56v0,30,28,55,59,55v31,0,57,-25,57,-55v0,-30,-27,-56,-57,-56xm15,-75v-4,-73,98,-106,145,-55v-10,-33,-30,-57,-54,-80r-57,26r-11,-18r50,-23v-13,-11,-27,-20,-42,-28r13,-19v20,11,37,22,54,36r60,-28r11,18r-54,26v33,36,59,71,60,130v1,57,-32,97,-87,97v-52,0,-85,-32,-88,-82",
w:204},"Ý":{d:"88,0r0,-118r-88,-139r36,0r67,111r67,-111r35,0r-87,139r0,118r-30,0xm78,-283r36,-61r35,0r-50,61r-21,0",
w:205},"ý":{d:"22,78r43,-94r-63,-145r32,0r47,116r49,-116r30,0r-107,239r-31,0xm54,-186r36,-61r35,0r-50,61r-21,0",
w:158},"Þ":{d:"143,-132v0,-45,-33,-45,-82,-45r0,86v47,-1,82,2,82,-41xm176,-134v0,61,-44,76,-115,71r0,63r-30,0r0,-257r30,0r0,52v71,-5,115,10,115,71",
w:180},"þ":{d:"109,-140v-32,0,-54,22,-54,58v0,37,20,62,54,62v33,0,52,-23,52,-57v0,-37,-18,-63,-52,-63xm190,-80v0,83,-104,118,-135,51r0,107r-27,0r0,-350r27,0r0,141v9,-21,29,-35,58,-36v47,0,77,38,77,87",
w:206},"×":{d:"151,-122r83,-83r15,14r-84,84r84,83r-15,15r-83,-84r-84,84r-14,-15r83,-83r-83,-84r14,-14",
w:299},"¹":{d:"65,-101r0,-137r-35,0r11,-16r44,0r0,153r-20,0",
w:140},"²":{d:"68,-257v45,-3,66,38,43,73v-11,16,-41,47,-59,65r63,0r0,18r-102,0v23,-27,87,-87,88,-112v1,-17,-15,-28,-34,-27v-22,0,-33,12,-33,33r-19,0v-1,-34,19,-48,53,-50",
w:140},"³":{d:"65,-97v-30,0,-53,-14,-52,-43v6,1,16,-2,21,1v-1,17,14,26,32,26v22,0,34,-10,34,-30v0,-23,-17,-31,-42,-30v1,-6,-4,-17,5,-15v21,0,34,-8,35,-27v0,-17,-13,-27,-30,-27v-18,0,-32,9,-32,26r-20,0v2,-27,23,-38,53,-41v54,-5,69,69,20,77v19,2,33,17,33,38v0,30,-24,45,-57,45",
w:140},"¼":{d:"275,0r0,-31r-76,0r87,-114r8,0r0,100r19,0r0,14r-19,0r0,31r-19,0xm275,-45r0,-63r-48,63r48,0xm74,7r158,-267r22,0r-158,267r-22,0xm62,-111r0,-128r-33,0r11,-15r41,0r0,143r-19,0",
w:328},"½":{d:"259,-145v42,0,63,34,41,67v-11,16,-39,45,-57,62r62,0r0,16r-98,0v23,-25,83,-81,84,-105v0,-15,-16,-26,-33,-25v-20,0,-31,10,-31,31r-19,0v-1,-31,20,-46,51,-46xm74,7r158,-267r22,0r-158,267r-22,0xm62,-111r0,-128r-33,0r11,-15r41,0r0,143r-19,0",
w:328},"¾":{d:"275,0r0,-31r-76,0r87,-114r8,0r0,100r19,0r0,14r-19,0r0,31r-19,0xm275,-45r0,-63r-48,63r48,0xm74,7r158,-267r22,0r-158,267r-22,0xm62,-107v-27,0,-50,-14,-49,-41v6,1,17,-3,19,2v-1,16,14,24,30,24v21,1,34,-9,34,-28v0,-21,-17,-29,-41,-28v1,-5,-3,-16,5,-14v20,0,34,-8,34,-26v0,-16,-12,-24,-29,-24v-18,0,-30,8,-31,24r-19,0v2,-27,21,-39,51,-39v50,0,66,65,19,72v18,3,32,15,31,36v0,28,-24,43,-54,42",
w:327},"­":{d:"25,-94r82,0r0,28r-82,0r0,-28",w:131}}})