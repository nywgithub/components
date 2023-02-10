(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"3eS4":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("GvAC"),c=n("DSWR"),o=r.a.memo((e=>{var t=e.demos,n=t["input-input"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"input-\u8f93\u5165\u6846"},r.a.createElement(l["AnchorLink"],{to:"#input-\u8f93\u5165\u6846","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Input \u8f93\u5165\u6846"),r.a.createElement("p",null,"input\u666e\u901a\u8f93\u5165\u6846\u3001\u6570\u5b57\u8f93\u5165\u6846 textarea\u8f93\u5165\u6846"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.a.createElement(c["default"],t["input-input"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(i["a"],{src:"../../src/input/index.tsx",identifier:"input",export:"default"}),r.a.createElement("h3",{id:"api-inputnumber"},r.a.createElement(l["AnchorLink"],{to:"#api-inputnumber","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"InputNumber"),r.a.createElement(i["a"],{src:"../../src/input/index.tsx",identifier:"input",export:"InputNumber"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},GvAC:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("WtSh"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e.export,o=Object(l["useApiData"])(t),u=Object(a["useContext"])(l["context"]),d=u.locale,m=/^zh|cn$/i.test(d)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m.default))),r.a.createElement("tbody",null,o[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},Pg6R:function(e,t,n){},WtSh:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("hKI/"),i=n.n(l);n("Pg6R");function c(e,t){return s(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=c(l,2),u=o[0],d=o[1],m=Object(a["useState"])(!1),s=c(m,2),f=s[0],p=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f}}]);