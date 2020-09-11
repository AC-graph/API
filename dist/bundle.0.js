(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,r){"use strict";(function(t){
/*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/yelloxing/image2D.git
*
* [DOC] https://yelloxing.gitee.io/image2d/index.html 
*
* author 心叶(yelloxing@gmail.com)
*
* version 1.8.13
*
* build Thu Apr 11 2019
*
* Copyright yelloxing
* Released under the MIT license
*
* Date:Wed Sep 09 2020 11:55:22 GMT+0800 (GMT+08:00)
*/
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var r=Object.prototype.toString;function n(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r.call(t)}function o(t){if(null===t||"object"!==(void 0===t?"undefined":e(t))||"[object Object]"!=n(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function i(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)&&!o(t)}function a(t){var r=void 0===t?"undefined":e(t);return null!=t&&("object"===r||"function"===r)}function u(t){if(!a(t))return!1;var e=n(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}function l(t){var r=void 0===t?"undefined":e(t);return"string"===r||"object"===r&&null!=t&&!Array.isArray(t)&&"[object String]"===n(t)}var f=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t},c="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",h="[\\x20\\t\\r\\n\\f]",d="[\\n\\f\\r]",p="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",v=["href","title","show","type","role","actuate"];function g(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))&&3===t.nodeType&&!o(t)}var w=function(t,e){if("innerHTML"in SVGElement.prototype==!1||"innerHTML"in SVGSVGElement.prototype==!1){var r=document.createElement("div");r.innerHTML=e;var n=function(t){for(var e=document.createElementNS(c,t.tagName.toLowerCase()),r=t.attributes,n=0;r&&n<r.length;n++)v.indexOf(r[n].nodeName)>=0?e.setAttributeNS(s,"xlink:"+r[n].nodeName,t.getAttribute(r[n].nodeName)):e.setAttribute(r[n].nodeName,t.getAttribute(r[n].nodeName));return e},o=n(r.firstChild);!function t(e,r){var o=e.firstChild;if(g(o))r.textContent=e.innerText;else for(;o;){var i=n(o);r.appendChild(i),o.firstChild&&t(o,i),o=o.nextSibling}}(r.firstChild,o),t.appendChild(o)}else t.innerHTML=e};function y(t,e){new RegExp("^"+p+"$").test(t)&&(t="<"+t+"></"+t+">");var r=/^<([^(>| )]+)/.exec(t)[1];return"canvas"===r.toLowerCase()&&(e="HTML"),!l(e)&&["div","span","p","em","i","table","ul","ol","dl","dt","li","dd","form","input","button","textarea","header","footer","article","section","h1","h2","h3","h4","h5","h6","image","video","iframe","object","style","script","link","tr","td","th","tbody","thead"].indexOf(r.toLowerCase())>=0&&(e="HTML"),function(t,e){var r,n=void 0,o="div";if("html"===e||"HTML"===e){if(/^<tr[> ]/.test(t)?o="tbody":/^<th[> ]/.test(t)||/^<td[> ]/.test(t)?o="tr":(/^<thead[> ]/.test(t)||/^<tbody[> ]/.test(t))&&(o="table"),(n=document.createElement(o)).innerHTML=t,!/</.test(n.innerHTML))throw new Error("This template cannot be generated using div as a container:"+t+"\nPlease contact us: https://github.com/yelloxing/image2D/issues")}else n=document.createElementNS(c,"svg"),w(n,t);r=n.childNodes;for(var a=0;a<r.length;a++)if(i(r[a]))return r[a]}(t,e)}function m(t,e){if(l(e)||l(t)){if(t=t.trim().replace(new RegExp(d,"g"),""),"string"==typeof e||/^</.test(t)){var r=y(t,e);return i(r)?[r]:[]}if("*"===t)return e.getElementsByTagName("*");var n=t.match(new RegExp("#"+p,"g"));if(n){var o=document.getElementById(n[0].replace("#",""));return i(o)?[o]:[]}var a=t.match(new RegExp("\\."+p,"g")),f=t.match(new RegExp("^"+p));if(f||a){for(var c=e.getElementsByTagName(f?f[0]:"*"),s=[],h=0;h<c.length;h++){for(var v=" "+c[h].getAttribute("class")+" ",g=!0,w=0;a&&w<a.length;w++)if(!v.match(" "+a[w].replace(".","")+" ")){g=!1;break}g&&s.push(c[h])}return s}throw new Error("Unsupported selector:"+t)}if(i(t))return[t];if(!t||t.constructor!==Array&&t.constructor!==HTMLCollection&&t.constructor!==NodeList){if(t&&t.constructor===b)return t;if(u(t)){for(var m=e.getElementsByTagName("*"),x=[],_=0;_<m.length;_++)t(m[_])&&x.push(m[_]);return x}throw new Error("Unknown selector:"+t)}for(var T=[],k=0;k<t.length;k++)if(i(t[k]))T.push(t[k]);else if(t[k]&&t[k].constructor===b)for(var E=0;E<t[k].length;E++)T.push(t[k][E]);return T}var b=function t(e,r){return new t.prototype.init(e,r)};function x(t){var e=t||{},r=void 0,n=void 0,o=function(t){var o=function(t){var r,n={},o=e.root(t),i=void 0;return i=r=e.id(o),n[i]={data:o,pid:null,id:i,children:[]},function r(o,a){var u=e.child(o,t),l=void 0;for(l=0;u&&l<u.length;l++)i=e.id(u[l]),n[a].children.push(i),n[i]={data:u[l],pid:a,id:i,children:[]},r(u[l],i)}(o,i),[r,n]}(t);return r=o[1],n=o[0],function(){var t=[],e=0,o=0;return function n(i,a){a>o&&(o=a);var u=void 0;for(u=0;u<i.children.length;u++)n(r[i.children[u]],a+1);(r[i.id].left=a+.5,0==u)?(null==t[a]&&(t[a]=-.5),null==t[a-1]&&(t[a-1]=-.5),r[i.id].top=t[a]+1,t[a]+1+.5*(r[i.pid].children.length-1)-1<t[a-1]&&(r[i.id].top=t[a-1]+1-.5*(r[i.pid].children.length-1))):r[i.id].top=.5*(r[i.children[0]].top+r[i.children[u-1]].top);if(r[i.id].top<=t[a]){var l=t[a]+1-r[i.id].top;!function e(n,o){r[n].top+=l,t[o]<r[n].top&&(t[o]=r[n].top);var i=void 0;for(i=0;i<r[n].children.length;i++)e(r[n].children[i],o+1)}(i.id,a)}t[a]=r[i.id].top,r[i.id].top+.5>e&&(e=r[i.id].top+.5)}(r[n],0),{node:r,root:n,size:e,deep:o+1}}()};return o.root=function(t){return e.root=t,o},o.child=function(t){return e.child=t,o},o.id=function(t){return e.id=t,o},o}b.prototype.init=function(t,e){this.context=e=e||document;var r=m(t,e),n=void 0;for(n=0;n<r.length;n++)this[n]=r[n];return this.length=r.length,this},b.prototype.extend=b.extend=function(){var t=arguments[0]||{},e=arguments[1]||{},r=arguments.length;for(var n in 1===r&&(e=t,t=this),a(t)||(t={}),e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property key："+n+"！")}return t},b.prototype.init.prototype=b.prototype;var _=function(t,e,r,n,o){var i=Math.cos(r),a=Math.sin(r);return[+((n-t)*i-(o-e)*a+t).toFixed(7),+((n-t)*a+(o-e)*i+e).toFixed(7)]},T=function(t,e,r,n,o){var i=Math.sqrt(t*t+e*e);return[+(t*r/i+n).toFixed(7),+(e*r/i+o).toFixed(7)]},k=function(t,e,r,n,o){return[+(r*(n-t)+t).toFixed(7),+(r*(o-e)+e).toFixed(7)]};function E(t){return"number"==typeof t||null!==t&&"object"===(void 0===t?"undefined":e(t))&&"[object Number]"===n(t)}var M=function(t,e){for(var r=[],n=0;n<4;n++)for(var o=0;o<e.length/4;o++)r[4*o+n]=t[n]*e[4*o]+t[n+4]*e[4*o+1]+t[n+8]*e[4*o+2]+t[n+12]*e[4*o+3];return r};var C=[],P=null;function S(t,e){return e?function(t){return function(t){return null!=t&&"function"!=typeof t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)}(t)&&!l(t)}(t):Array.isArray(t)}function A(t){t=function(t,e){for(var r in e)try{t[r]=e[r]}catch(t){throw new Error("Illegal property value！")}return t}({u:.5},t);var e=void 0,r=void 0,n=void 0,o=function(t){if(e){var o=(t-r)/(n-r),i=o*o;return(o*i*e[0]+i*e[1]+o*e[2]+e[3])*(n-r)}throw new Error("You shoud first set the position!")};return o.setP=function(i,a,u,l,f,c){if(!(i<u))throw new Error("The point x-position should be increamented!");r=i,n=u;var s=t.u*f,h=t.u*c;return e=[2*(a/=u-i)-2*(l/=u-i)+s+h,3*l-3*a-2*s-h,s,a],o},o}function L(t,e){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return l(e)?r.getPropertyValue(e):r}var N=function(t,e,r,n){var o=Math.cos(t),i=Math.sin(t);return[e*o-r*i,e*i+r*o,n]},j=[];function D(t,e,r){return j=function(t,e,r,n){var o=Math.cos(t),i=Math.sin(t);return[n*i+e*o,r,n*o-e*i]}((360-r)/180*Math.PI,100*t.scale,0,0),j=N(e/180*Math.PI,j[0],j[1],j[2]),j=N((90-t.center[0])/180*Math.PI,j[0],j[1],j[2]),[-(j=function(t,e,r,n){var o=Math.cos(t),i=Math.sin(t);return[e,r*o-n*i,r*i+n*o]}((90-t.center[1])/180*Math.PI,j[0],j[1],j[2]))[0],j[1],j[2]]}var I=function(t,e,r){/[a-z]/.test(t.tagName)&&v.indexOf(e)>=0?t.setAttributeNS(s,"xlink:"+e,r):t.setAttribute(e,r)};function R(t,e,r,n,o,i,a){e>2*Math.PI&&(e=2*Math.PI),e<2*-Math.PI&&(e=2*-Math.PI),e<0&&(t+=e,e*=-1);var u=[],l=void 0;l=_(0,0,t,o,0),u[0]=l[0],u[1]=l[1],l=_(0,0,e,l[0],l[1]),u[2]=l[0],u[3]=l[1],l=_(0,0,t,i,0),u[4]=l[0],u[5]=l[1],l=_(0,0,e,l[0],l[1]),u[6]=l[0],u[7]=l[1],a(t,t+e,u[0]+r,u[1]+n,u[4]+r,u[5]+n,u[2]+r,u[3]+n,u[6]+r,u[7]+n,.5*(i-o))}var F=function(t,e,r,n,o){return t.beginPath(),t.translate(r,n),t.rotate(o),t.font=e["font-size"]+"px "+e["font-family"],t},z=function(t,e,r,n,o,i,a,u){return(u>=2*Math.PI||u<=2*-Math.PI)&&(u=2*Math.PI),R(a,u,r,n,o,i,(function(a,u,l,f,c,s,h,d,p,v,g){g<0&&(g=-g),t.beginPath(),t.moveTo(l,f),t.arc(r,n,o,a,u,!1),"round"!=e["arc-end-cap"]?t.lineTo(p,v):t.arc(.5*(h+p),.5*(d+v),g,u-Math.PI,u,!0),t.arc(r,n,i,u,a,!0),"round"!=e["arc-start-cap"]?t.lineTo(l,f):t.arc(.5*(l+c),.5*(f+s),g,a,a-Math.PI,!0)})),t.closePath(),t},H=function(t,e,r,n){return t.beginPath(),t.moveTo(e+n,r),t.arc(e,r,n,0,2*Math.PI),t},B=function(t,e,r,n,o){return t.beginPath(),t.rect(e,r,n,o),t};function O(t){var r=t.getContext("2d"),n="yes"==t.__image2D__layer__,o=n?t.getAttribute("width"):t.clientWidth,i=n?t.getAttribute("height"):t.clientHeight;0!=o&&0!=i||(console.warn("Canvas is hidden or size is zero!"),"yes"==t.__image2D__noLayer_getSize__?(o=t.width/2,i=t.height/2):(o=t.width,i=t.height,t.__image2D__noLayer_getSize__="yes")),t.style.width=o+"px",t.style.height=i+"px",t.setAttribute("width",2*o),t.setAttribute("height",2*i),r.scale(2,2),r.textBaseline="middle",r.textAlign="left";var a={"font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt"},u=function(t,e){"lineDash"==t?r.setLineDash(e):a[t]?a[t]=e:r[t]=e},l={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return r[arguments[0]];for(var t in arguments[0])u(t,arguments[0][t])}else 2===arguments.length&&u(arguments[0],arguments[1]);return l},fillText:function(t,e,n,o){return r.save(),F(r,a,e,n,o||0).fillText(t,0,0),r.restore(),l},strokeText:function(t,e,n,o){return r.save(),F(r,a,e,n,o||0).strokeText(t,0,0),r.restore(),l},fullText:function(t,e,n,o){return r.save(),F(r,a,e,n,o||0),r.fillText(t,0,0),r.strokeText(t,0,0),r.restore(),l},beginPath:function(){return r.beginPath(),l},closePath:function(){return r.closePath(),l},moveTo:function(t,e){return r.moveTo(t,e),l},lineTo:function(t,e){return r.lineTo(t,e),l},arc:function(t,e,n,o,i){return r.arc(t,e,n,o,o+i,i<0),l},fill:function(){return r.fill(),l},stroke:function(){return r.stroke(),l},full:function(){return r.fill(),r.stroke(),l},save:function(){return r.save(),l},restore:function(){return r.restore(),l},quadraticCurveTo:function(t,e,n,o){return r.quadraticCurveTo(t,e,n,o),l},bezierCurveTo:function(t,e,n,o,i,a){return r.bezierCurveTo(t,e,n,o,i,a),l},clearRect:function(e,n,o,i){return r.clearRect(e||0,n||0,o||t.getAttribute("width")/2,i||t.getAttribute("height")/2),l},toDataURL:function(){return t.toDataURL()},drawImage:function(e,n,o,i,a,u,f,c,s){return n=n||0,o=o||0,u=u||0,f=f||0,c=c?2*c:t.getAttribute("width"),s=s?2*s:t.getAttribute("height"),"CANVAS"==e.nodeName?(c/=2,s/=2,i=i?2*i:t.getAttribute("width"),a=a?2*a:t.getAttribute("height")):(i=2*(i||e.width),a=2*(a||e.height)),r.drawImage(e,n,o,i,a,u,f,c,s),l},fillArc:function(t,e,n,o,i,u){return z(r,a,t,e,n,o,i,u).fill(),l},strokeArc:function(t,e,n,o,i,u){return z(r,a,t,e,n,o,i,u).stroke(),l},fullArc:function(t,e,n,o,i,u){return z(r,a,t,e,n,o,i,u),r.fill(),r.stroke(),l},fillCircle:function(t,e,n){return H(r,t,e,n).fill(),l},strokeCircle:function(t,e,n){return H(r,t,e,n).stroke(),l},fullCircle:function(t,e,n){return H(r,t,e,n),r.fill(),r.stroke(),l},fillRect:function(t,e,n,o){return B(r,t,e,n,o).fill(),l},strokeRect:function(t,e,n,o){return B(r,t,e,n,o).stroke(),l},fullRect:function(t,e,n,o){return B(r,t,e,n,o),r.fill(),r.stroke(),l},createLinearGradient:function(t,e,n,o){return function(t,e,r,n,o){var i=t.createLinearGradient(e,r,n,o),a={value:function(){return i},addColorStop:function(t,e){return i.addColorStop(t,e),a}};return a}(r,t,e,n,o)},createRadialGradient:function(t,e,n){return function(t,e,r,n){var o=t.createRadialGradient(e,r,0,e,r,n),i={value:function(){return o},addColorStop:function(t,e){return o.addColorStop(t,e),i}};return i}(r,t,e,n)},translate:function(t,e){return r.translate(t,e),l},rotate:function(t){return r.rotate(t),l},scale:function(t,e){return e=e||t,r.scale(t,e),l}};return l}function W(t,e){return"textAlign"===t&&{left:"start",right:"end",center:"middle"}[e]||e}var G=function(t,e,r,n,o){if(!t||t.length<=0||"text"!==t[0].nodeName.toLowerCase())throw new Error("Need a <text> !");return t.attr("dy",{top:.5*e["font-size"],middle:0,bottom:.5*-e["font-size"]}[e.textBaseline]).css({"text-anchor":e.textAlign,"dominant-baseline":"central","font-size":e["font-size"]+"px","font-family":e["font-family"]}).attr({x:r,y:n}),{transform:"rotate("+180*o/Math.PI+","+r+","+n+")"}},$=function(t,e,r,n,o,i,a,u){if((u>=1.999999*Math.PI||u<=1.999999*-Math.PI)&&(u=1.999999*Math.PI),!t||t.length<=0||"path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return R(a,u,r,n,o,i,(function(r,n,a,u,l,f,c,s,h,d,p){var v=n-r>Math.PI?1:0,g="M"+a+" "+u;p<0&&(p=-p),g+="A"+o+" "+o+" 0 "+v+" 1 "+c+" "+s,"round"!=e["arc-end-cap"]?g+="L"+h+" "+d:g+="A"+p+" "+p+"  0 1 0 "+h+" "+d,g+="A"+i+" "+i+" 0 "+v+" 0 "+l+" "+f,"round"!=e["arc-start-cap"]?g+="L"+a+" "+u:g+="A"+p+" "+p+"  0 1 0 "+a+" "+u,t.attr("d",g+"Z")})),t},V=function(t,e,r,n){if(!t||t.length<=0||"circle"!==t[0].nodeName.toLowerCase())throw new Error("Need a <circle> !");return t.attr({cx:e,cy:r,r:n}),t},q=function(t,e){if(!t||t.length<=0||"path"!==t[0].nodeName.toLowerCase())throw new Error("Need a <path> !");return t.attr("d",e),t},U=function(t,e,r,n,o){if(!t||t.length<=0||"rect"!==t[0].nodeName.toLowerCase())throw new Error("Need a <rect> !");return o<0&&(r-=o*=-1),n<0&&(e-=n*=-1),t.attr({x:e,y:r,width:n,height:o}),t},Y=function(t){var e=t.getElementsByTagName("defs");return e.length<=0&&(e=[y("<defs>","SVG")],t.appendChild(e[0])),e[0]};function J(t,r){var n=void 0;r&&(n=b(r,t));var o={fillStyle:"#000",strokeStyle:"#000",lineWidth:1,textAlign:"start",textBaseline:"middle","font-size":"16","font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt",lineDash:[]},i="",a=[],u=[],l="",f={config:function(){if(1===arguments.length){if("object"!==e(arguments[0]))return o[arguments[0]];for(var t in arguments[0])o[t]=W(t,arguments[0][t])}else 2===arguments.length&&(o[arguments[0]]=W(arguments[0],arguments[1]));return f},bind:function(e){return n=b(e,t),f},appendTo:function(e){return n.appendTo(e||t,t),f},prependTo:function(e){return n.prependTo(e||t,t),f},afterTo:function(e){return n.afterTo(e||t,t),f},beforeTo:function(e){return n.beforeTo(e||t,t),f},beginPath:function(){return i="",a=[],f},closePath:function(){return i+="Z",f},moveTo:function(t,e){return i+="M"+t+" "+e,a=[t,e],f},lineTo:function(t,e){return i+=(""==i?"M":"L")+t+" "+e,a=[t,e],f},arc:function(t,e,r,n,o){var u=_(t,e,n,t+r,e),l=_(t,e,n+o,t+r,e);return n=n/Math.PI*180,o=o/Math.PI*180,""==i?i+="M"+u[0]+","+u[1]:u[0]==a[0]&&u[1]==a[1]||(i+="L"+u[0]+","+u[1]),i+="A"+r+","+r+" 0 "+(o>180||o<-180?1:0)+","+(o>0?1:0)+" "+l[0]+","+l[1],f},fill:function(){return q(n,i).attr("transform",l).attr("fill",o.fillStyle),f},stroke:function(){return q(n,i).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none","stroke-dasharray":o.lineDash.join(",")}),f},full:function(){return q(n,i).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:o.fillStyle,"stroke-dasharray":o.lineDash.join(",")}),f},save:function(){return u.push(l),f},restore:function(){return u.length>0&&(l=u.pop()),f},quadraticCurveTo:function(t,e,r,n){return i+="Q"+t+" "+e+","+r+" "+n,f},bezierCurveTo:function(t,e,r,n,o,a){return i+="C"+t+" "+e+","+r+" "+n+","+o+" "+a,f},fillText:function(t,e,r,i){var a=G(n,o,e,r,i||0);return n.attr("transform",l+a.transform).attr("fill",o.fillStyle)[0].textContent=t,f},strokeText:function(t,e,r,i){var a=G(n,o,e,r,i||0);return n.attr("transform",l+a.transform).attr({stroke:o.strokeStyle,fill:"none","stroke-dasharray":o.lineDash.join(",")})[0].textContent=t,f},fullText:function(t,e,r,i){var a=G(n,o,e,r,i||0);return n.attr("transform",l+a.transform).attr({stroke:o.strokeStyle,fill:o.fillStyle,"stroke-dasharray":o.lineDash.join(",")})[0].textContent=t,f},fillArc:function(t,e,r,i,a,u){return $(n,o,t,e,r,i,a,u).attr("transform",l).attr("fill",o.fillStyle),f},strokeArc:function(t,e,r,i,a,u){return $(n,o,t,e,r,i,a,u).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none","stroke-dasharray":o.lineDash.join(",")}),f},fullArc:function(t,e,r,i,a,u){return $(n,o,t,e,r,i,a,u).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:o.fillStyle,"stroke-dasharray":o.lineDash.join(",")}),f},fillCircle:function(t,e,r){return V(n,t,e,r).attr("transform",l).attr("fill",o.fillStyle),f},strokeCircle:function(t,e,r){return V(n,t,e,r).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none","stroke-dasharray":o.lineDash.join(",")}),f},fullCircle:function(t,e,r){return V(n,t,e,r).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:o.fillStyle,"stroke-dasharray":o.lineDash.join(",")}),f},fillRect:function(t,e,r,i){return U(n,t,e,r,i).attr("transform",l).attr("fill",o.fillStyle),f},strokeRect:function(t,e,r,i){return U(n,t,e,r,i).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:"none","stroke-dasharray":o.lineDash.join(",")}),f},fullRect:function(t,e,r,i){return U(n,t,e,r,i).attr("transform",l).attr({"stroke-width":o.lineWidth,stroke:o.strokeStyle,fill:o.fillStyle,"stroke-dasharray":o.lineDash.join(",")}),f},createLinearGradient:function(e,r,n,o){return function(t,e,r,n,o,i){var a=Y(e),u="image2D-lg-"+(new Date).valueOf()+"-"+Math.random(),l=y('<linearGradient id="'+u+'" x1="'+r+'%" y1="'+n+'%" x2="'+o+'%" y2="'+i+'%"></linearGradient>');a.appendChild(l);var f={value:function(){return"url(#"+u+")"},addColorStop:function(t,e){return l.appendChild(y('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),f}};return f}(0,t,e,r,n,o)},createRadialGradient:function(e,r,n){return function(t,e,r,n,o){var i=Y(e),a="image2D-rg-"+(new Date).valueOf()+"-"+Math.random(),u=y('<radialGradient id="'+a+'" cx="'+r+'%" cy="'+n+'%" r="'+o+'%"></radialGradient>');i.appendChild(u);var l={value:function(){return"url(#"+a+")"},addColorStop:function(t,e){return u.appendChild(y('<stop offset="'+100*t+'%" style="stop-color:'+e+';" />')),l}};return l}(0,t,e,r,n)},translate:function(t,e){return l+=" translate("+t+","+e+")",f},rotate:function(t){return l+=" rotate("+t/Math.PI*180+")",f},scale:function(t,e){return l+=" scale("+t+","+(e=e||t)+")",f}};return f}if(b.extend({treeLayout:function(t){t=f({"begin-deg":0,deg:2*Math.PI},t);var e=x().root(t.root).child(t.child).id(t.id),r=function r(n){var o=e(n);for(var i in o.node)o.node[i].deep=o.node[i].left-.5;if("LR"===t.type||"RL"===t.type){var a=t.width/o.deep;"RL"===t.type&&(a*=-1);var u=t.height/(o.size- -.5);for(var l in o.node){var f=o.node[l];o.node[l].left=+(("RL"==t.type?t.width:0)- -f.left*a).toFixed(7),o.node[l].top=+(f.top*u).toFixed(7)}}else if("TB"===t.type||"BT"===t.type){var c=t.height/o.deep;"BT"==t.type&&(c*=-1);var s=t.width/(o.size- -.5),h=void 0,d=void 0;for(var p in o.node){var v=o.node[p];h=v.left,d=v.top,o.node[p].top=+(("BT"==t.type?t.height:0)- -h*c).toFixed(7),o.node[p].left=+(d*s).toFixed(7)}}else if("circle"===t.type){var g=t.radius/(o.deep-1),w=t.deg/(o.size- -.5);for(var y in o.node){var m=o.node[y];o.node[y].deg=(t["begin-deg"]- -w*m.top)%(2*Math.PI);var b=_(t.cx,t.cy,o.node[y].deg,t.cx- -g*(m.left-.5),t.cy);o.node[y].left=+b[0],o.node[y].top=+b[1]}}return t.drawer(o),r};return r.config=function(e){return t=f(t,e),r},r.drawer=function(e){return t.drawer=e,r},r},pieLayout:function(t){if(!u((t=f({"begin-deg":-Math.PI/2,deg:2*Math.PI,radius:[]},t)).value))throw new Error("config.value must be a function!");var e=function(e){var r=0,n=[],o=0;for(var i in e)n.push({value:t.value(e[i],i,r),data:e[i],key:i,index:r,dots:[]}),o+=n[r].value,r+=1;for(r=0;r<n.length;r++){n[r].beginDeg=0===r?t["begin-deg"]:n[r-1].beginDeg+n[r-1].deg;var a=n[r].value/o;n[r].deg=a*t.deg,n[r].percent=new Number(100*a).toFixed(2)}if(E(t.cx)&&E(t.cy))for(r=0;r<t.radius.length;r++)for(var l=0;l<n.length;l++)n[l].dots.push(_(t.cx,t.cy,n[l].beginDeg+.5*n[l].deg,t.cx+t.radius[r],t.cy));u(t.drawer)&&t.drawer(n)};return e.config=function(r){return t=f(t,r),e},e.drawer=function(r){return t.drawer=r,e},e},Matrix4:function(t){var e=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r={move:function(t,n,o,i){return e=M(function(t,e,r,n){n=n||0;var o=Math.sqrt(e*e+r*r+n*n);return[1,0,0,0,0,1,0,0,0,0,1,0,e*t/o,r*t/o,n*t/o,1]}(t,n,o,i),e),r},rotate:function(t,n,o,i,a,u,l){var f=function(t,e,r,n,o,i){if("number"==typeof t&&"number"==typeof e){if("number"!=typeof r?(r=0,n=t,o=e,i=1):"number"==typeof n&&"number"==typeof o&&"number"==typeof i||(n=t,o=e,i=r,t=0,e=0,r=0),t==n&&e==o&&r==i)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((n-t)*(n-t)+(o-e)*(o-e)),u=0!=a?(o-e)/a:1,l=0!=a?(n-t)/a:0,f=(n-t)*l+(o-e)*u,c=i-r,s=Math.sqrt(f*f+c*c),h=0!=s?c/s:1,d=0!=s?f/s:0;return[[u,h*l,l*d,0,-l,u*h,u*d,0,0,-d,h,0,e*l-t*u,r*d-t*l*h-e*u*h,-t*l*d-e*u*d-r*h,1],[u,-l,0,0,h*l,h*u,-d,0,l*d,u*d,h,0,t,e,r,1]]}throw new Error("a1 and b1 is required!")}(n,o,i,a,u,l);return e=M(M(M(f[1],function(t){var e=Math.sin(t),r=Math.cos(t);return[r,e,0,0,-e,r,0,0,0,0,1,0,0,0,0,1]}(t)),f[0]),e),r},scale:function(t,n,o,i,a,u){return e=M(function(t,e,r,n,o,i){return[t,0,0,0,0,e,0,0,0,0,r,0,(n=n||0)-n*t,(o=o||0)-o*e,(i=i||0)-i*r,1]}(t,n,o,i,a,u),e),r},multiply:function(t,n){return e=n?M(e,t):M(t,e),r},use:function(t,r,n,o){var i=M(e,[t,r,n=n||0,o=o||1]);return i[0]=+i[0].toFixed(7),i[1]=+i[1].toFixed(7),i[2]=+i[2].toFixed(7),i[3]=+i[3].toFixed(7),i},value:function(){return e}};return r},rotate:_,move:T,scale:k,dot:function(t){t=f({d:[1,1],c:[0,0],p:[0,0]},t);var e={rotate:function(r){var n=t.d[0]+t.p[0],o=t.d[1]+t.p[1],i=_(t.p[0],t.p[1],r,n,o);return t.d=[i[0]-t.p[0],i[1]-t.p[1]],e},move:function(r){return t.p=T(t.d[0],t.d[1],r,t.p[0],t.p[1]),e},scale:function(r){return t.p=k(t.c[0],t.c[1],r,t.p[0],t.p[1]),e},value:function(){return t.p}};return e},animation:function(t,e,r,n){u(r)||(n=r,r=!1);var o={ease:[.25,.1,.5,1],"ease-in":[.5,0,.75,.6],"ease-in-out":[.43,.01,.58,1],"ease-out":[.25,.6,.5,1],linear:"default"}[n]||n,i=function(t){return t};return o&&S(o)&&4==o.length&&(i=A({u:1}).setP(0,0,1,1,o[1]/o[0],(1-o[3])/(1-o[2]))),function(t,e,r){var n={timer:function(t,e,r){if(!t)throw new Error("Tick is required!");e=e||400;var o=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return C.push({id:o,createTime:new Date,tick:t,duration:e,callback:r}),n.start(),o},start:function(){P||(P=setInterval(n.tick,13))},tick:function(){var t=void 0,e=void 0,r=void 0,o=void 0,i=void 0,a=void 0,u=void 0,l=C;for((C=[]).length=0,e=0;e<l.length;e++)t=(i=l[e]).createTime,r=i.tick,a=i.duration,o=i.callback,r(u=(u=(+new Date-t)/a)>1?1:u),u<1&&i.id?C.push(i):o&&o(u);C.length<=0&&n.stop()},stop:function(){P&&(clearInterval(P),P=null)}},o=n.timer((function(e){t(e)}),e,r);return function(){var t=void 0;for(t in C)if(C[t].id==o)return void(C[t].id=void 0)}}((function(e){t(i(e))}),e,(function(t){u(r)&&(1!=t&&(t=i(t)),r(t))}))},cardinal:function(t){t=f({t:0},t);var e=void 0,r=void 0,n=function(t){if(e){for(r=-1;r+1<e.x.length&&(t>e.x[r+1]||-1==r&&t>=e.x[r+1]);)r+=1;if(-1==r||r>=e.h.length)throw new Error("Coordinate crossing!");return e.h[r](t)}throw new Error("You shoud first set the position!")};return n.setT=function(e){if("number"!=typeof e)throw new Error("Expecting a figure!");return t.t=e,n},n.setP=function(r){e={x:[],h:[]};var o=void 0,i=(r[1][1]-r[0][1])/(r[1][0]-r[0][0]),a=void 0;for(e.x[0]=r[0][0],o=1;o<r.length;o++){if(r[o][0]<=r[o-1][0])throw new Error("The point position should be increamented!");e.x[o]=r[o][0],a=o<r.length-1?(r[o+1][1]-r[o-1][1])/(r[o+1][0]-r[o-1][0]):(r[o][1]-r[o-1][1])/(r[o][0]-r[o-1][0]),e.h[o-1]=A({u:.5*(1-t.t)}).setP(r[o-1][0],r[o-1][1],r[o][0],r[o][1],i,a),i=a}return n},n},formatColor:function(t){var e=document.getElementsByTagName("head")[0];e.style.color=t;var r=L(e,"color").replace(/^rgba?\(([^)]+)\)$/,"$1").split(new RegExp("\\,"+h));return[+r[0],+r[1],+r[2],null==r[3]?1:+r[3]]},getRandomColors:function(t){for(var e=[],r=1;r<=t;r++)e.push("rgb("+(230*Math.random(1)+20).toFixed(0)+","+(230*Math.random(1)+20).toFixed(0)+","+(230*Math.random(1)+20).toFixed(0)+")");return e},stopPropagation:function(t){return(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0,this},preventDefault:function(t){return(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,this},map:function(t){var e=f({type:"eoap",scale:1,center:[107,36]},t),r=function(t,r){switch(e.type){case"eoap":return D(e,t,r);default:throw new Error("Map type configuration error!")}};return r.config=function(t){return e=f(e,t),r},r}}),b.prototype.extend({appendTo:function(t,e){var r=m(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].appendChild(this[n]);return this},prependTo:function(t,e){var r=m(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].insertBefore(this[n],r[0].childNodes[0]);return this},afterTo:function(t,e){var r=m(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0].nextSibling);return this},beforeTo:function(t,e){var r=m(t,e||document);if(!(r.length>0))throw new Error("Target empty!");for(var n=0;n<this.length;n++)r[0].parentNode.insertBefore(this[n],r[0]);return this},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode.removeChild(this[t]);return this},filter:function(t){for(var e=[],r=0;r<this.length;r++)t(r,b(this[r]))&&e.push(this[r]);return b(e)},text:function(t){if(arguments.length>0){for(var e=0;e<this.length;e++)this[e].textContent=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].textContent},html:function(t){if(arguments.length>0){for(var e=0;e<this.length;e++)/[a-z]/.test(this[e].tagName)?w(this[e],t):this[e].innerHTML=t;return this}if(this.length<=0)throw new Error("Target empty!");return this[0].innerHTML},size:function(t){if(this.length<=0)throw new Error("Target empty!");var e=void 0,r=void 0,n=this[0];return"content"==t?(r=n.clientWidth-(L(n,"padding-left")+"").replace("px","")-(L(n,"padding-right")+"").replace("px",""),e=n.clientHeight-(L(n,"padding-top")+"").replace("px","")-(L(n,"padding-bottom")+"").replace("px","")):"padding"==t?(r=n.clientWidth,e=n.clientHeight):"border"==t?(r=n.offsetWidth,e=n.offsetHeight):"scroll"==t?(r=n.scrollWidth,e=n.scrollHeight):(r=n.offsetWidth,e=n.offsetHeight),{width:r,height:e}},css:function(){if(arguments.length<=1&&(arguments.length<=0||"object"!==e(arguments[0]))){if(this.length<=0)throw new Error("Target empty!");return L(this[0],arguments[0])}for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])this[t].style[r]=arguments[0][r];else this[t].style[arguments[0]]=arguments[1];return this},attr:function(){if(1===arguments.length&&"object"!==e(arguments[0])){if(this.length<=0)throw new Error("Target empty!");return this[0].getAttribute(arguments[0])}if(arguments.length>0)for(var t=0;t<this.length;t++)if(1===arguments.length)for(var r in arguments[0])I(this[t],r,arguments[0][r]);else I(this[t],arguments[0],arguments[1]);return this},datum:function(t,e){if(arguments.length<=0){if(this.length<=0)throw new Error("Target empty!");return this[0].__data__}for(var r=0;r<this.length;r++)this[r].__data__="function"==typeof e?e(t,r):t;return this},data:function(t,e){if(arguments.length<=0){for(var r=[],n=0;n<this.length;n++)r[n]=this[n].__data__;return r}var o=[],i=void 0;for(i=0;i<this.length&&i<t.length;i++)this[i].__data__="function"==typeof e?e(t[i],i):t[i],o.push(this[i]);var a=b(o);for(a.__enter__=[];i<t.length;i++)a.__enter__.push("function"==typeof e?e(t[i],i):t[i]);for(a.__exit__=[];i<this.length;i++)a.__exit__.push(this[i]);return a},enter:function(t,e){if(!this.__enter__||this.__enter__.constructor!==Array)throw new Error("Not a data node object to be balanced!");for(var r=[],n=0;n<this.__enter__.length;n++)r[n]=y(t,e),r[n].__data__=this.__enter__[n];return delete this.__enter__,b(r)},exit:function(){if(!this.__exit__||this.__exit__.constructor!==Array)throw new Error("Not a data node object to be balanced!");var t=b(this.__exit__);return delete this.__exit__,t},loop:function(t){for(var e=0;e<this.length;e++)t(this[e].__data__,e,b(this[e]));return this},bind:function(t,e){if(window.attachEvent)for(var r=0;r<this.length;r++)this[r].attachEvent("on"+t,e);else for(var n=0;n<this.length;n++)this[n].addEventListener(t,e,!1);return this},unbind:function(t,e){if(window.detachEvent)for(var r=0;r<this.length;r++)this[r].detachEvent("on"+t,e);else for(var n=0;n<this.length;n++)this[n].removeEventListener(t,e,!1);return this},position:function(t){var e=this[0].getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-e.left,y:t.clientY-e.top}},painter:function(){if(!i(this[0]))throw new Error("Target empty!");var t=this[0],e=t.nodeName.toLowerCase();if("canvas"===e)return O(t);if("svg"===e)return J(t,arguments[0]);throw new Error("Painter is not a function!")},layer:function(){if(!i(this[0]))throw new Error("Target empty!");if("canvas"!==this[0].nodeName.toLowerCase())throw new Error("Layer is not a function!");var t=this.painter(),e={},r=[],n=this[0].clientWidth,o=this[0].clientHeight,a={painter:function(t){return e[t]||(e[t]={visible:!0},e[t].canvas=document.createElement("canvas"),e[t].canvas.setAttribute("width",n),e[t].canvas.setAttribute("height",o),e[t].canvas.__image2D__layer__="yes",e[t].painter=b(e[t].canvas).painter(),r.push(t)),e[t].painter},delete:function(t){for(var n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1);break}return delete e[t],a},update:function(){t.clearRect(0,0,n,o),t.save();for(var i=0;i<r.length;i++)e[r[i]].visible&&t.drawImage(e[r[i]].canvas,0,0,n,o,0,0,n,o);return t.restore(),a},hidden:function(t){return e[t].visible=!1,a},show:function(t){return e[t].visible=!0,a}};return a}}),b.fn=b.prototype,"object"===e(t)&&"object"===e(t.exports))t.exports=b;else{var X=window.image2D,Z=window.$$;b.noConflict=function(t){return window.$$===b&&(window.$$=Z),t&&window.image2D===b&&(window.image2D=X),b},window.image2D=window.$$=b}}()}).call(this,r(3)(t))}}]);