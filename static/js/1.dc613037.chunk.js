webpackJsonp([1],{103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(0)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component),c=function(){return function(e){return e}},s=function(e,t){return e===t},l=function(){},f=function(e){return e};t.AppContainer=u,t.hot=c,t.areComponentsEqual=s,t.setConfig=l,t.cold=f},104:function(e,t,n){function r(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./":[91],"./aside/aside":[94,17],"./aside/aside.css":[105,24],"./aside/aside.jsx":[94,17],"./aside/asideHand":[95,16],"./aside/asideHand.jsx":[95,16],"./index":[91],"./index.js":[91],"./prism":[96,15],"./prism.jsx":[96,15],"./spanner/apply":[97,19],"./spanner/apply.jsx":[97,19],"./spanner/bind":[98,23],"./spanner/bind.jsx":[98,23],"./spanner/call":[99,18],"./spanner/call.jsx":[99,18],"./spanner/delete":[100,22],"./spanner/delete.jsx":[100,22],"./spanner/in":[101,21],"./spanner/in.jsx":[101,21],"./spanner/super":[102,20],"./spanner/super.jsx":[102,20]};r.keys=function(){return Object.keys(o)},r.id=104,e.exports=r},109:function(e,t,n){e.exports=n(110)},110:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(111),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},111:function(e,t){!function(t){"use strict";function n(e,t,n,r){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),u=new h(r||[]);return a._invoke=s(e,n,u),a}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function u(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(n,o,i,a){var u=r(e[n],e,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(s).then(function(e){c.value=e,i(c)},a)}a(u.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function s(e,t,n){var o=_;return function(i,a){if(o===L)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return y()}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=l(u,n);if(c){if(c===G)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===_)throw o=k,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=L;var s=r(e,t,n);if("normal"===s.type){if(o=n.done?k:P,s.arg===G)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=k,n.method="throw",n.arg=s.arg)}}}function l(e,t){var n=e.iterator[t.method];if(n===m){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=m,l(e,t),"throw"===t.method))return G;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return G}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,G;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=m),t.delegate=null,G):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,G)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function h(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function d(e){if(e){var t=e[w];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(g.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=m,t.done=!0,t};return r.next=r}}return{next:y}}function y(){return{value:m,done:!0}}var m,v=Object.prototype,g=v.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",j=b.toStringTag||"@@toStringTag",E="object"===typeof e,O=t.regeneratorRuntime;if(O)return void(E&&(e.exports=O));O=t.regeneratorRuntime=E?e.exports:{},O.wrap=n;var _="suspendedStart",P="suspendedYield",L="executing",k="completed",G={},F={};F[w]=function(){return this};var R=Object.getPrototypeOf,T=R&&R(R(d([])));T&&T!==v&&g.call(T,w)&&(F=T);var C=a.prototype=o.prototype=Object.create(F);i.prototype=C.constructor=a,a.constructor=i,a[j]=i.displayName="GeneratorFunction",O.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},O.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,j in e||(e[j]="GeneratorFunction")),e.prototype=Object.create(C),e},O.awrap=function(e){return{__await:e}},u(c.prototype),c.prototype[x]=function(){return this},O.AsyncIterator=c,O.async=function(e,t,r,o){var i=new c(n(e,t,r,o));return O.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},u(C),C[j]="Generator",C[w]=function(){return this},C.toString=function(){return"[object Generator]"},O.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},O.values=d,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=m)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=m),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,G):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),G},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),p(n),G}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:d(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=m),G}}}(function(){return this}()||Function("return this")())},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(109),u=n.n(a),c=n(0),s=n.n(c),l=n(91),f=n(13),p=n(93),h=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),d=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),h(t,[{key:"render",value:function(){function e(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,this)}var t=u.a.mark(e),n=new Promise(function(e,t){setTimeout(function(){e({a:10,b:20})},1e3)}),r=e();return r.next().value.then(function(e){return e}).then(function(e){r.next(e)}),s.a.createElement("main",null,s.a.createElement("p",null,"\u4e0a\u4e00\u8282\u8bb2\u8ff0\u4e86Geneartor \u7684\u7279\u6027\u4ee5\u53ca\u5b83\u7684\u4f7f\u7528\u3002\u4e86\u89e3Geneartor \u7684\u57fa\u672c\u7279\u6027\u90a3\u4e48\u4f7f\u7528\u5b83\u6784\u5efa\u5f02\u6b65\u5904\u7406\u51fd\u6570\u5c31\u975e\u5e38\u597d\u7528\u4e86\u3002\u5728\u4f20\u7edf\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f\u4e2d\uff0c\u901a\u5e38\u7531\u4e00\u4e0b\u51e0\u79cd\u5b9e\u73b0\u624b\u6bb5\uff1a"),s.a.createElement("div",null,"1\u3001\u56de\u8c03\u51fd\u6570"),s.a.createElement("div",null,"2\u3001\u4e8b\u4ef6\u7684\u76d1\u542c"),s.a.createElement("div",null,"3\u3001\u53d1\u5e03\u3001\u8ba2\u9605"),s.a.createElement("div",null,"4\u3001Promise \u5bf9\u8c61"),s.a.createElement("p",null,"\u53ef\u4ee5\u8bf4Geneartor \u5c06\u5f02\u6b65\u7f16\u7a0b\u7684\u6a21\u5f0f\u63d0\u5347\u4e00\u4e2a\u9636\u6bb5\uff0c\u5b83\u5728\u5f02\u6b65\u7f16\u7a0b\u7684\u601d\u8def\u4e0a\u66f4\u52a0\u5408\u7406\uff0c\u5f53\u7136\u5b9e\u73b0\u5f02\u6b65\u5904\u7406\u7684\u5f62\u5f0f\u6709\u5f88\u591a\uff0c\u719f\u6089\u8fd9\u4e9b\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f\u66f4\u597d\u7684\u77e5\u9053\u8be5\u5982\u4f55\u53bb\u9009\u62e9\u548c\u4f7f\u7528\u5b83\u3002"),s.a.createElement("p",null,"\u6839\u636e",s.a.createElement(f.b,{to:"view5"},"\u4e0a\u4e00\u8282"),"\u7684\u63cf\u8ff0\uff0cGeneartor \u8fd4\u56de\u662f\u4e00\u4e2aiterator\u5bf9\u8c61\uff0c\u5728\u8c03\u7528next()\u6267\u884c\u65f6\u4f1a\u6682\u5b9a\u6267\u884c\uff0c\u76f4\u5230\u4e0b\u4e00\u6b21\u6267\u884cnext() \u53c8\u4ece\u540e\u9762\u6682\u5b9a\u51fa\u7ee7\u7eed\u6267\u884c\u3002\u6839\u636e\u8fd9\u4e00\u7279\u6027\uff0c\u4fbf\u53ef\u4ee5\u5b9a\u4e49Geneartor \u5f02\u6b65\u51fd\u6570\u4e86\uff01"),s.a.createElement("strong",null,"\u6784\u5efaGeneartor \u5f02\u6b65\u51fd\u6570"),s.a.createElement("p",null,"\u5982\u4e0b\u793a\u4f8b\uff0c\u521b\u5efa\u4e00\u4e2aGeneartor\u5f02\u6b65\u51fd\u6570 geneartorAsyncFunction\uff1a"),s.a.createElement(l.Prism,null,"\n                    // \u8fd9\u91ccPromise \u6a21\u62df\u63a5\u53e3\u8bf7\u6c42\u8fd4\u56de\u6570\u636e\n                    let getData = new Promise((resolve,reject) => {\n                        setTimeout(() => {\n                            resolve({\n                                a:10,\n                                b:20,\n                            });\n                        }, 1000);\n                    });\n\n                    // \u89c2\u5bdf\u8fd9\u4e2aGeneartor Function. \u770b\u4e0a\u53bb\u5b83\u975e\u5e38\u7c7b\u4f3c\u4e8e\u540c\u6b65\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u7531\u4e8eyield \u5173\u952e\u8bcd\uff0c\u6bcf\u6b21next \u6267\u884c\u5b83\u5c06\u4f1a\u5728 yield \u5904\u6682\u5b9a\u6267\u884c.\n                    function* geneartorAsyncFunction() {\n                        let data = yield getData;\n                        console.log(data);\n                    }\n\n                    let g = geneartorAsyncFunction();\n                    g.next().value.then(data => {\n                        //\u8fd9\u91ccreturn data\uff0c \u4e0b\u4e00\u6b21then\u51fd\u6570\u5c06\u4f1a\u63a5\u6536\u8be5\u503c\n                        return data;\n                    }).then(data => {\n                        g.next(data)\n                    });\n                "))}}]),t}(c.Component);t.default=Object(p.hot)(e)(d)}.call(t,n(92)(e))},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Prism",function(){return a}),n.d(t,"Aside",function(){return u}),n.d(t,"AsideHand",function(){return c}),n.d(t,"Delete",function(){return s}),n.d(t,"In",function(){return l}),n.d(t,"Call",function(){return f}),n.d(t,"Apply",function(){return p}),n.d(t,"Bind",function(){return h}),n.d(t,"Super",function(){return d});var r=n(25),o=n.n(r),i=function(e){return o()({loader:function(){return n(104)("./"+e)},loading:function(){return null}})},a=i("prism"),u=i("aside/aside"),c=i("aside/asideHand"),s=i("spanner/delete.jsx"),l=i("spanner/in.jsx"),f=i("spanner/call.jsx"),p=i("spanner/apply.jsx"),h=i("spanner/bind.jsx"),d=i("spanner/super.jsx")},92:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},93:function(e,t,n){"use strict";e.exports=n(103)}});
//# sourceMappingURL=1.dc613037.chunk.js.map