(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(25),n(4)),s=n(5),l=n(7),u=n(6),p=n(8),h=(n(27),n(10)),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderTemplate=function(){var e=n.props,t=e.name,r=e.isFetching,o=e.error;return r?a.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):o?a.a.createElement("p",{className:"error"},"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"):t?a.a.createElement("p",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",t,"!"):a.a.createElement("button",{className:"btn",onClick:n.props.handleLogin},"\u0412\u043e\u0439\u0442\u0438")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("User render"),a.a.createElement("div",null,this.renderTemplate())}}]),t}(r.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onBtnClick=function(e){var t=+e.currentTarget.value;n.props.getPhotos(t)},n.renderTemplate=function(){var e=n.props,t=e.year,r=e.photos,o=e.isFetching;return e.error?a.a.createElement("p",{className:"error"},"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."):o?a.a.createElement("p",{className:"loading"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):n.props.name?!n.props.name||r.length||n.props.yearsArr.length?a.a.createElement("div",{className:"photos-container"},a.a.createElement("h2",null,t," \u0433\u043e\u0434."),a.a.createElement("p",null,"\u0423 \u0432\u0430\u0441 ",r.length," \u0444\u043e\u0442\u043e. \u0412\u043e\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445:"),a.a.createElement("div",{className:"photos"},r.map(function(e,t){if(t<6){var n=e.sizes[2],r={background:"url(".concat(n.url,") center center no-repeat"),backgroundSize:"cover"};return a.a.createElement("div",{key:e.id,className:"photos__photo-block"},a.a.createElement("div",{className:"photos__photo-block__photo",style:r}),a.a.createElement("p",null,e.likes.count," \u2764"))}}))):a.a.createElement("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443"):a.a.createElement("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"page"},a.a.createElement("div",{className:"buttons-wrapper"},this.props.yearsArr.length?this.props.yearsArr.map(function(t,n){return a.a.createElement("button",{key:n,className:"btn",onClick:e.onBtnClick,value:t},t)}):a.a.createElement("div",{className:"buttons-wrapper"},a.a.createElement("button",{className:"btn",onClick:this.onBtnClick,value:(new Date).getFullYear(),disabled:this.props.name?"":"disable"},"\u041d\u0430\u0436\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c"))),a.a.createElement("div",{className:"info"},this.renderTemplate()))}}]),t}(r.Component),g=[],m=[],v=!1;function y(e,t){var n=[];return e.forEach(function(e){new Date(1e3*e.date).getFullYear()===t&&n.push(e)}),n.sort(function(e,t){return t.likes.count-e.likes.count}),n}var E=function e(t,n,r,a){VK.Api.call("photos.getAll",{count:n,offset:r,extended:1,v:"5.92"},function(o){console.log(o);try{if(g=g.concat(o.response.items),r<=o.response.count)e(t,n,r+=200,a);else{m=function(e){for(var t=e.sort(function(e,t){return e.date-t.date}),n=new Date(1e3*t[0].date).getFullYear(),r=[],a=(new Date).getFullYear(),o=n;o<=a;o++)r.push(o);return r}(g);var c=y(g,t);v=!0,a({type:"GET_PHOTO_SUCCESS",payload:{photos:c,yearsArr:m}})}}catch(i){a({type:"GET_PHOTO_FAIL",payload:new Error(i),error:!0})}})},b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.page,r=e.getPhotos,o=e.handleLogin;return a.a.createElement("div",{className:"App"},a.a.createElement(f,{name:t.name,year:n.year,yearsArr:n.yearsArr,photos:n.photos,error:n.error,getPhotos:r,isFetching:n.isFetching}),a.a.createElement(d,{name:t.name,handleLogin:o,error:t.error,isFetching:t.isFetching}))}}]),t}(r.Component),O=Object(h.b)(function(e){return{user:e.user,page:e.page}},function(e){return{getPhotos:function(t){return e(function(e){return function(t){t({type:"GET_PHOTO_REQUEST",payload:e}),v?t({type:"GET_PHOTO_SUCCESS",payload:{photos:y(g,e),yearsArr:m}}):E(e,200,0,t)}}(t))},handleLogin:function(){return e(function(e){e({type:"LOGIN_REQUEST"}),VK.Auth.login(function(t){if(t.session){var n=t.session.user.first_name;e({type:"LOGIN_SUCCESS",payload:n})}else e({type:"LOGIN_FAIL",error:!0,payload:new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0445\u043e\u0434")})},4)})}}})(b),w=n(2),k=n(1),j={name:"",isFetching:!1},_={year:2019,photos:[],isFetching:!1,error:"",yearsArr:[]},A=Object(w.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PHOTO_REQUEST":return Object(k.a)({},e,{year:t.payload,isFetching:!0,error:""});case"GET_PHOTO_SUCCESS":return Object(k.a)({},e,{photos:t.payload.photos,yearsArr:t.payload.yearsArr,isFetching:!1,error:""});case"GET_PHOTO_FAIL":return Object(k.a)({},e,{error:t.payload.message,isFetching:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(k.a)({},e,{isFetching:!0,error:""});case"LOGIN_SUCCESS":return Object(k.a)({},e,{isFetching:!1,name:t.payload});case"LOGIN_FAIL":return Object(k.a)({},e,{isFetching:!1,error:t.payload.message});default:return e}}}),T=n(18),N=n.n(T),S=n(19),C=Object(w.d)(A,Object(w.a)(S.a,N.a)),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(h.a,{store:C},a.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/photos-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/photos-app","/service-worker.js");F?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):L(t,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.638994b6.chunk.js.map