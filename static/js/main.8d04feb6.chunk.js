(this["webpackJsonpphoto-editor-react"]=this["webpackJsonpphoto-editor-react"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/logo192.ad8d61bf.png"},function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),c=t.n(i),m=t(2),u=t(1);t(11);function l(e){var a=e.min,t=e.max,n=e.value,i=e.unit,c=e.handleChange;return r.a.createElement("div",{className:"slider-container"},r.a.createElement("div",{className:"slider-value"},n," ",i),r.a.createElement("input",{type:"range",className:"slider",min:a,max:t,value:n,onChange:c}))}var o=t(5),s=t.n(o);function p(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:s.a,width:"30",alt:""})," Photo Editor")}function v(e){var a=e.name,t=e.active,n=e.handleClick;return r.a.createElement("button",{className:"sidebar-item ".concat(t?"active":""),onClick:n},a)}var d=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Opacity",property:"opacity",value:100,range:{min:0,max:100},unit:"%"},{name:"Invert",property:"invert",value:0,range:{min:0,max:100},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var g=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(d),o=Object(u.a)(c,2),s=o[0],g=o[1],h=s[t];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement("div",{className:"main-image",style:{filter:s.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join(" ")}}),r.a.createElement("div",{className:"sidebar"},s.map((function(e,a){return r.a.createElement(v,{key:a,name:e.name,active:a===t,handleClick:function(){return i(a)}})}))),r.a.createElement(l,{min:h.range.min,max:h.range.max,value:h.value,unit:h.unit,handleChange:function(e){var a=e.target;g((function(e){return e.map((function(e,n){return n!==t?e:Object(m.a)(Object(m.a)({},e),{},{value:a.value})}))}))}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.8d04feb6.chunk.js.map