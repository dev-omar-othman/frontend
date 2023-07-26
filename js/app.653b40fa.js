(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e7451219"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"10847c69"}[t]+".css",i=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===a||d===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"14d3":function(t,e,n){"use strict";n("6351")},1966:function(t,e,n){"use strict";n("8232")},"1eb8":function(t,e,n){"use strict";n("bd10")},"4a84":function(t,e,n){},"4b7b":function(t,e,n){"use strict";n("500b")},"500b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light container p-3"},[t._m(0),t._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"btn btn-light m-2 p-2",attrs:{type:"button"}},[t._v("orders to fulfill")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/about"}},[n("button",{staticClass:"btn btn-light m-2 p-2",attrs:{type:"button"}},[t._v("order can't be fulfilled")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/logs"}},[n("button",{staticClass:"btn btn-light m-2 p-2",attrs:{type:"button"}},[t._v("fulfilled orders")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/inventory"}},[n("button",{staticClass:"btn btn-light m-2 p-2",attrs:{type:"button"}},[t._v("inventory")])])],1)])])]),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("b408")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],s=(n("034f"),n("2877")),o={},l=Object(s["a"])(o,r,i,!1,null,null,null),c=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-5 p-1 home"},[t.loaded?n("div",{staticClass:"loading"},[t._m(0)]):n("div",{staticClass:"loading",staticStyle:{display:"block"}},[t._m(1)]),n("div",{staticClass:"container-fluid d-flex justify-content-end"},[n("button",{staticClass:"btn btn-primary m-1 refresh",attrs:{type:"button"},on:{click:function(e){return t.refreshData()}}},[t._v(" Refresh ")])]),n("div",{staticClass:"orders-counr"},[t._v("number of orders here :"+t._s(t.unfulfilledOrders.length))]),n("table",{staticClass:"table table-light"},[t._m(2),n("tbody",t._l(t.unfulfilledOrders,(function(t){return n("ordercomponent",{key:t.orderId,attrs:{id:t.orderId,total_price:t.orderTotalPrice,customer:t.customer,destination1:t.destination1,destination2:t.destination2,city:t.city,itemSku:t.itemsSku,zip:t.postalCode,country:t.countryCode,state:t.state,description:t.orderDescription,orderNumber:t.orderNumber,order_fulfillment_id:t.fulfillment_order_id}})})),1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#ID")]),n("th",{attrs:{scope:"col"}},[t._v("Total Price")]),n("th",{attrs:{scope:"col"}},[t._v("Customer")]),n("th",{attrs:{scope:"col"}},[t._v("Destination")]),n("th",{attrs:{scope:"col"}},[t._v("Items SKU")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],p=n("638c"),h="http://localhost:8081/",m={data:function(){return{unfulfilledOrders:[],loaded:!1}},created:function(){var t=this,e={method:"GET",redirect:"follow"};fetch(h+"getorders",e).then((function(t){console.log(t)})).then((function(n){console.log(n),fetch(h+"getdata",e).then((function(t){console.log(t)})).then((function(n){console.log(n),fetch(h+"filterdata",e).then((function(t){console.log(t)})).then((function(e){console.log(e),setTimeout((function(){fetch(h+"ordersToFulfill.json").then((function(t){return t.json()})).then((function(e){t.unfulfilledOrders=e,t.loaded=!0}))}),1500)}))}))})).catch((function(t){return console.error(t)}))},methods:{refreshData:function(){setTimeout((function(){window.location.reload(),document.querySelector(".loading").style.display="none"}),1500)}},components:{ordercomponent:p["a"]},name:"Home"},v=m,g=(n("cccb"),Object(s["a"])(v,u,f,!1,null,null,null)),b=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-5 p-1 home"},[t.loaded?n("div",{staticClass:"loading"},[t._m(0)]):n("div",{staticClass:"loading",staticStyle:{display:"block"}},[t._m(1)]),n("div",{staticClass:"container-fluid d-flex justify-content-end"},[n("button",{staticClass:"btn btn-primary m-1 refresh",attrs:{type:"button"},on:{click:function(e){return t.refreshData()}}},[t._v(" Refresh ")])]),n("div",{staticClass:"orders-counr"},[t._v("number of orders here :"+t._s(t.logs.length))]),n("table",{staticClass:"table table-light"},[t._m(2),n("tbody",t._l(t.logs,(function(t){return n("logscomponents",{key:t.order_id,attrs:{id:t.order_id,total_price:t.total_price,customer:t.customer,itemSku:t.items_sku,country:t.country,description:t.items_description,created_at:t.created_at,fulfilled_at:t.fulfilled_at,label:t.label}})})),1)])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#ID")]),n("th",{attrs:{scope:"col"}},[t._v("Total Price")]),n("th",{attrs:{scope:"col"}},[t._v("Customer")]),n("th",{attrs:{scope:"col"}},[t._v("Destination")]),n("th",{attrs:{scope:"col"}},[t._v("created at")]),n("th",{attrs:{scope:"col"}},[t._v("fulfilled at")]),n("th",{attrs:{scope:"col"}},[t._v("Items SKU")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("label")])])])}],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(t.id))]),n("td",[t._v("$"+t._s(t.total_price))]),n("td",[t._v(t._s(t.customer))]),n("td",[t._v(t._s(t.country))]),n("td",[t._v(t._s(t.created_at.slice(0,t.created_at.indexOf("T"))))]),n("td",[t._v(t._s(t.fulfilled_at.slice(0,t.fulfilled_at.indexOf("T"))))]),n("td",t._l(JSON.parse(t.itemSku),(function(e,a){return n("div",{key:a},[t._v(t._s(e))])})),0),n("td",t._l(JSON.parse(t.description),(function(e,a){return n("div",{key:a},[t._v(" "+t._s(e)+" ")])})),0),n("td",[n("a",{staticClass:"label-link",attrs:{href:t.label}},[t._v(" label ")])])])},k=[],E=n("bc3a"),S=n.n(E),w=n("130e");a["a"].use(w["a"],S.a);var A={data:function(){return{}},props:["id","total_price","customer","itemSku","description","country","created_at","fulfilled_at","label"],name:"logscomponents"},x=A,L=(n("14d3"),Object(s["a"])(x,C,k,!1,null,null,null)),T=L.exports,U="http://localhost:8081/",N={data:function(){return{logs:[],loaded:!1}},created:function(){var t=this,e={method:"GET",redirect:"follow",Headers:{mode:"no-cors"}};fetch(U+"getlogs",e).then((function(t){console.log(t)})).then((function(e){console.log(e),setTimeout((function(){fetch(U+"logs.json").then((function(t){return t.json()})).then((function(e){t.logs=e,t.loaded=!0})).catch((function(t){return console.log(t.message)}))}),1500)}))},methods:{refreshData:function(){document.querySelector(".loading").style.display="block",setTimeout((function(){window.location.reload(),document.querySelector(".loading").style.display="none"}),1500)}},components:{logscomponents:T},name:"logs"},B=N,O=(n("1eb8"),Object(s["a"])(B,_,y,!1,null,null,null)),q=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-5 p-1 home"},[t.loaded?n("div",{staticClass:"loading"},[t._m(0)]):n("div",{staticClass:"loading",staticStyle:{display:"block"}},[t._m(1)]),n("div",{staticClass:"container-fluid d-flex justify-content-end"},[n("div",{staticClass:"filter-box"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.product__name,expression:"product__name"}],attrs:{placeholder:"please select a product name"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.product__name=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""}},[t._v("Butter Collar")]),n("option",[t._v("Butter Retriever Collar")]),n("option",[t._v("City Leash")]),n("option",[t._v("2x Leash")]),n("option",[t._v("3x Leash")]),n("option",[t._v("Harness")]),n("option",[t._v("TOL Collar")]),n("option",[t._v("TOL Leash")]),n("option",[t._v("Maritime Leash")]),n("option",[t._v("TOL Retriever Leash")])]),n("button",{staticClass:"btn btn-primary m-1",attrs:{type:"button"},on:{click:function(e){return t.getSelectedInventory()}}},[t._v(" filter ")])]),n("button",{staticClass:"btn btn-primary m-1 refresh",attrs:{type:"button"},on:{click:function(e){return t.refreshData()}}},[t._v(" Refresh ")])]),n("table",{staticClass:"table table-light"},[t._m(2),n("tbody",t._l(t.inventoryItems,(function(t){return n("invcomponent",{key:t.Barcode,attrs:{product_name:t.Product_Name,color:t.color,fitting:t.fittings,size:t.Size,barcode:t.Barcode,quantity:t.Quantity,unfulfilled:t.Unfulfilled,ordered:t.Ordered,cost_EUR:t.Unit_Cost_EUR,cost_USD:t.Unit_Cost_USD}})})),1)])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-dark",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("PRODUCT NAME")]),n("th",{attrs:{scope:"col"}},[t._v("COLOR")]),n("th",{attrs:{scope:"col"}},[t._v("FITTING")]),n("th",{attrs:{scope:"col"}},[t._v("SIZE")]),n("th",{attrs:{scope:"col"}},[t._v("BARCODE")]),n("th",{attrs:{scope:"col"}},[t._v("QUANTITY")]),n("th",{attrs:{scope:"col"}},[t._v("UNFULFILLED")]),n("th",{attrs:{scope:"col"}},[t._v("ORDERED")]),n("th",{attrs:{scope:"col"}},[t._v("COST EUR")]),n("th",{attrs:{scope:"col"}},[t._v("COST USD")])])])}],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(t.product_name))]),n("td",[t._v(t._s(t.color))]),n("td",[t._v(t._s(t.fitting))]),n("td",[t._v(t._s(t.size))]),n("td",[t._v(t._s(t.barcode))]),n("td",[t._v(t._s(t.quantity))]),n("td",[t._v(t._s(t.unfulfilled))]),n("td",[t._v(t._s(t.ordered))]),n("td",[t._v("€"+t._s(t.cost_EUR))]),n("td",[t._v("$"+t._s(t.cost_USD))])])},R=[];a["a"].use(w["a"],S.a);var D={data:function(){return{}},props:["product_name","color","fitting","size","barcode","quantity","unfulfilled","ordered","cost_EUR","cost_USD"],name:"logscomponents"},I=D,H=(n("1966"),Object(s["a"])(I,M,R,!1,null,null,null)),J=H.exports,V="http://localhost:8081/",G={data:function(){return{inventoryItems:[],product__name:"",loaded:!0}},methods:{getSelectedInventory:function(){var t=this;this.loaded=!1;var e={method:"GET",redirect:"follow",Headers:{mode:"no-cors"}};fetch(V+"getinventory/"+this.product__name,e).then((function(t){console.log(t)})).then((function(e){console.log(e),setTimeout((function(){fetch(V+"inventory.json").then((function(t){return t.json()})).then((function(e){t.inventoryItems=e,console.log(e),t.loaded=!0})).catch((function(t){return console.log(t.message)}))}),1500)}))},refreshData:function(){document.querySelector(".loading").style.display="block",setTimeout((function(){window.location.reload(),document.querySelector(".loading").style.display="none"}),1500)}},components:{invcomponent:J},name:"inventory"},Z=G,Q=(n("4b7b"),Object(s["a"])(Z,P,j,!1,null,null,null)),W=Q.exports;a["a"].use(d["a"]);var X=[{path:"/",name:"Home",component:b},{path:"/inventory",name:"inventory",component:W},{path:"/logs",name:"logs",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],F=new d["a"]({mode:"history",base:"/",routes:X}),z=F,K=n("2f62");a["a"].use(K["a"]);var Y=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("f5df1"),n("4989"),n("f9e3"),n("7f10");a["a"].config.productionTip=!1,new a["a"]({router:z,store:Y,render:function(t){return t(c)}}).$mount("#app")},"5ced":function(t,e,n){},6351:function(t,e,n){},"638c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(t.id))]),n("td",[t._v("$"+t._s(t.total_price))]),n("td",[t._v(t._s(t.customer))]),n("td",[t._v(t._s(t.country))]),n("td",t._l(t.itemSku,(function(e,a){return n("div",{key:a},[t._v(t._s(e))])})),0),n("td",t._l(t.description,(function(e,a){return n("div",{key:a},[t._v(" "+t._s(e)+" ")])})),0),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#modal"+t.id.replace("#","")},on:{click:t.autoFocus}},[t._v(" fulfill ")]),n("div",{staticClass:"modal fade",attrs:{id:"modal"+t.id.replace("#",""),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"custom title d-flex"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("order "+t._s(t.id))]),n("h5",[t._v(t._s(t.country))])]),t._m(0)]),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"input-group input-group-sm mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.barcode,expression:"barcode"}],staticClass:"form-control input-field",attrs:{id:"inputField",type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm",autofocus:""},domProps:{value:t.barcode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.scanBarcode1.apply(null,arguments)},input:function(e){e.target.composing||(t.barcode=e.target.value)}}}),n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text scan-btn",attrs:{id:"inputGroup-sizing-sm"},on:{click:t.scanBarcode2}},[t._v("scan barcode")])])]),n("ul",{staticClass:"description"},t._l(t.description,(function(e,a){return n("li",{key:a,attrs:{id:"item"+a}},[t._v(" "+t._s(e)+" ")])})),0),this.itemSku.length==t.verifiedBarcodes.length?n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" all items are verified ")]):t._e(),n("div",{staticClass:"btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},[n("label",{staticClass:"btn btn-primary active m-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.datasetting.weight.value,expression:"datasetting.weight.value"}],attrs:{type:"radio",name:"options",id:"option1",value:"0.5",checked:""},domProps:{checked:t._q(t.datasetting.weight.value,"0.5")},on:{change:function(e){return t.$set(t.datasetting.weight,"value","0.5")}}}),t._v(" micro ")]),n("label",{staticClass:"btn btn-primary m-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.datasetting.weight.value,expression:"datasetting.weight.value"}],attrs:{type:"radio",name:"options",id:"option2",value:"1"},domProps:{checked:t._q(t.datasetting.weight.value,"1")},on:{change:function(e){return t.$set(t.datasetting.weight,"value","1")}}}),t._v(" mini ")]),n("label",{staticClass:"btn btn-primary m-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.datasetting.weight.value,expression:"datasetting.weight.value"}],attrs:{type:"radio",name:"options",id:"option3",value:"5"},domProps:{checked:t._q(t.datasetting.weight.value,"5")},on:{change:function(e){return t.$set(t.datasetting.weight,"value","5")}}}),t._v(" small ")])])]),n("div",{staticClass:"modal-footer"},[this.itemSku.length==t.verifiedBarcodes.length?n("button",{staticClass:"ww-fulfill btn btn-secondary",attrs:{type:"button"},on:{click:t.fulfillSheetsOnly}},[t._v(" fulfill worldwide ")]):n("button",{staticClass:"ww-fulfill btn btn-secondary",attrs:{type:"button",disabled:""}},[t._v(" fulfill worldwide ")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.rerenderComponent}},[t._v(" discard ")]),this.itemSku.length==t.verifiedBarcodes.length?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.created}},[t._v(" get label ")]):n("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""}},[t._v(" get label ")])])])])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(n("ac1f"),n("5319"),n("841c"),n("e9c4"),n("a4d3"),n("e01a"),n("bc3a")),s=n.n(i),o=n("130e"),l=n("2b0e"),c="http://localhost:8081/";l["a"].use(o["a"],s.a);var d={data:function(){return{date:new Date,today:"",order_id:this.id.replace("#",""),singletotalprice:this.total_price,barcode:null,tracking_url:null,tracking_label:null,trackingNo:null,verifiedBarcodes:[],datasetting:{pickup_date:this.today,first_mile_option:"pickup",description:"".concat(this.id),weight:{value:"0.5",units:"lb"},customer_reference:this.id,metadata:{your_data:"XYZ123"},sender:{contact:{name:"Molly and Stitch",phone:"+1 (424) 777-2110",company:"Molly and Stitch US"},address:{address_line1:"1272 winchester ave",suburb:"Glendale",state_name:"California",postcode:"91201",country:"USA"}},receiver:{instructions:"no instructions",contact:{name:"".concat(this.customer)},address:{address_line1:this.destination1,address_line2:this.destination2,state_name:this.state,suburb:this.city,postcode:this.zip,country:this.country}}}}},methods:{autoFocus:function(t){t.target.parentElement.children[1].children[0].children[0].children[1].children[0].children[0].focus()},rerenderComponent:function(t){this.barcode=null,this.verifiedBarcodes=[];for(var e=0;e<t.target.parentElement.parentElement.children[1].children[1].children.length;e++)t.target.parentElement.parentElement.children[1].children[1].children[e].classList.remove("verified")},scanBarcode1:function(t){for(var e=0;e<this.itemSku.length;e++)if(this.barcode==this.itemSku[e]){for(var n=0,a=0;a<this.itemSku.length;++a)this.itemSku[a]==this.barcode&&n++;for(var r=0,i=0;i<this.verifiedBarcodes.length;++i)this.verifiedBarcodes[i]==this.barcode&&r++;n>r?(this.verifiedBarcodes.push(this.itemSku[e]),this.barcode="","verified"!=t.target.parentElement.parentElement.children[1].children[e].classList[0]?t.target.parentElement.parentElement.children[1].children[e].classList.add("verified"):"verified"==t.target.parentElement.parentElement.children[1].children[e].classList[0]&&"verified"!=t.target.parentElement.parentElement.children[1].children[e+1].classList[0]?t.target.parentElement.parentElement.children[1].children[e+1].classList.add("verified"):"verified"==t.target.parentElement.parentElement.children[1].children[e+1].classList[0]&&"verified"!=t.target.parentElement.parentElement.children[1].children[e+2].classList[0]?t.target.parentElement.parentElement.children[1].children[e+2].classList.add("verified"):"verified"==t.target.parentElement.parentElement.children[1].children[e+2].classList[0]&&"verified"!=t.target.parentElement.parentElement.children[1].children[e+3].classList[0]?t.target.parentElement.parentElement.children[1].children[e+3].classList.add("verified"):t.target.parentElement.parentElement.children[1].children[e].classList.add("verified"),console.log(t.target.parentElement.parentElement.children[1].children[e].classList,t.target.parentElement.parentElement.children[1].children[e].getAttribute("id")),t.target.focus()):(alert("item #".concat(this.barcode,"  already verified")),this.barcode="",t.target.parentElement.parentElement.children[0].focus())}else-1==JSON.stringify(this.itemSku).search(this.barcode)&&(alert("none of the items have the same barcode"),this.barcode="",t.target.parentElement.parentElement.children[0].focus())},scanBarcode2:function(t){for(var e=0;e<this.itemSku.length;e++)if(this.barcode==this.itemSku[e]){for(var n=0,a=0;a<this.itemSku.length;++a)this.itemSku[a]==this.barcode&&n++;for(var r=0,i=0;i<this.verifiedBarcodes.length;++i)this.verifiedBarcodes[i]==this.barcode&&r++;n>r?(this.verifiedBarcodes.push(this.itemSku[e]),this.barcode="",t.target.parentElement.parentElement.nextSibling.children[e].classList.add("verified"),t.target.parentElement.parentElement.children[0].focus()):(alert("item #".concat(this.barcode,"  already verified")),this.barcode="",t.target.parentElement.parentElement.children[0].focus())}else-1==JSON.stringify(this.itemSku).search(this.barcode)&&(alert("none of the items have the same barcode"),this.barcode="",t.target.parentElement.parentElement.children[0].focus())},fulfillSheetsOnly:function(t){l["a"].axios.get(c+"fulfillSheets",{params:{data:JSON.stringify(this.verifiedBarcodes)}}).then((function(t){return t})).catch((function(t){console.error("There was an error!",t)})),t.target.innerHTML="order fulfilled",t.target.setAttribute("disabled","true")},created:function(t){var e=this;this.today=this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+this.date.getDate(),l["a"].axios.get(c+"updateData/",{params:{data:JSON.stringify(this.datasetting)}}).then((function(n){if(-1!=n.data.body.response.indexOf("message"))alert("sendle error"+n.data.body.response);else{e.tracking_url=n.data.body.url,e.trackingNo=n.data.body.trackingNo,e.tracking_label=n.data.body.label,window.open(n.data.body.label,"_blank"),t.target.innerHTML="order fulfilled",t.target.setAttribute("disabled","true");var a=document.createElement("a");a.innerHTML="label",a.setAttribute("href",n.data.body.label),a.setAttribute("target","_blank"),t.target.parentElement.appendChild(a),l["a"].axios.get(c+"markFulfilled",{params:{fulfillingDate:e.date.getFullYear()+"-"+(e.date.getMonth()+1)+"-"+e.date.getDate(),orderid:e.order_id,totalPrice:e.singletotalprice,customer:e.customer,destination:e.country,itemsSku:JSON.stringify(e.verifiedBarcodes),description:JSON.stringify(e.description),label:e.tracking_label}}),l["a"].axios.get(c+"fulfillShopify",{params:{orderid:JSON.stringify(e.order_fulfillment_id),trackingUrl:e.tracking_url,trackingNo:e.trackingNo}}).then((function(t){-1!=t.data.data.response.indexOf("errors")?alert("error fulfilling order "+t.data.data.response):l["a"].axios.get(c+"fulfillSheets",{params:{data:JSON.stringify(e.verifiedBarcodes)}}).then((function(t){console.log(t),l["a"].axios.get(c+"updatequantitydb",{params:{data:JSON.stringify(e.verifiedBarcodes)}}).then((function(t){return t})).catch((function(t){console.error("There was an error!",t)}))})).catch((function(t){console.error("There was an error!",t)}))})).catch((function(t){alert("fulfillment failed "+t),console.error("There was an error!",t)}))}})).catch((function(t){console.error("There was an error!",t)}))}},props:["id","total_price","customer","destination1","destination2","itemSku","description","orderNumber","zip","country","state","city","order_fulfillment_id"],name:"orderComponent"},u=d,f=(n("99f2"),n("2877")),p=Object(f["a"])(u,a,r,!1,null,null,null);e["a"]=p.exports},8232:function(t,e,n){},"85ec":function(t,e,n){},"99f2":function(t,e,n){"use strict";n("4a84")},b408:function(t,e){t.exports="data:image/png;base64,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"},bd10:function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.653b40fa.js.map