/*! For license information please see employees.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r={2295:(e,t,n)=>{var r=n(7294),o=n(745),l=n(9655),a=n(307),i=n(2459),c=n(9250),u=n(3025),s=n(7977),m=n(5147),f=n(5005),p=n(1881);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e,t,n=(0,c.s0)(),o=(e=(0,l.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Filter"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"Currently Employed:"," ",r.createElement("select",{value:o.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}var h=n(682),v=n(4051),E=n(1555);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function w(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:String(t)}function O(e,t,n){return t=Z(t),function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(e,j()?Reflect.construct(t,n||[],Z(e).constructor):t.apply(e,n))}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}var _=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=O(this,t)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(S(e)),e.handleShowModal=e.handleShowModal.bind(S(e)),e.handleHideModal=e.handleHideModal.bind(S(e)),e}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(t,e),n=t,(o=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(f.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(p.Z,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},r.createElement(p.Z.Header,{closeButton:!0},r.createElement(p.Z.Title,null,"Add New Employee")),r.createElement(p.Z.Body,null,r.createElement(h.Z,{fluid:!0},r.createElement("form",{name:"employeeAdd"},r.createElement(v.Z,null,r.createElement(E.Z,{md:3},"Name:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name"}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:3},"Extension:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:3},"Email:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:3},"Title:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(p.Z.Footer,null,r.createElement(f.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&g(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.Component);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function k(){k=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},a=l.iterator||"@@iterator",i=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var l=t&&t.prototype instanceof v?t:v,a=Object.create(l.prototype),i=new C(r||[]);return o(a,"_invoke",{value:x(e,n,i)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",y="executing",d="completed",h={};function v(){}function E(){}function b(){}var g={};u(g,a,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(M([])));O&&O!==n&&r.call(O,a)&&(g=O);var j=b.prototype=v.prototype=Object.create(g);function Z(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,l,a,i){var c=m(e[o],e,l);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==P(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,i)}),(function(e){n("throw",e,a,i)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,i)}))}i(c.arg)}var l;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return l=l?l.then(o,o):o()}})}function x(t,n,r){var o=f;return function(l,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===l)throw a;return{value:e,done:!0}}for(r.method=l,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=m(t,n,r);if("normal"===u.type){if(o=r.done?d:p,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=d,r.method="throw",r.arg=u.arg)}}}function _(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var l=m(o,t.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,h;var a=l.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,l=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return l.next=l}}throw new TypeError(P(t)+" is not iterable")}return E.prototype=b,o(j,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:E,configurable:!0}),E.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},Z(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,l){void 0===l&&(l=Promise);var a=new S(s(e,n,r,o),l);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},Z(j),u(j,c,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var l=o;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var a=l?l.completion:{};return a.type=e,a.arg=t,l?(this.method="next",this.next=l.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function T(e,t,n,r,o,l,a){try{var i=e[l](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function a(e){T(l,r,o,a,i,"next",e)}function i(e){T(l,r,o,a,i,"throw",e)}a(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function H(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function A(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:String(t)}function D(e,t,n){return t=V(t),function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}(e,N()?Reflect.construct(t,n||[],V(e).constructor):t.apply(e,n))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function G(e){var t=(0,c.TH)().search,n=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(I,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"All Employees ",r.createElement(s.Z,{bg:"secondary"},o.length)),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,r.createElement(m.Z,{striped:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,o)))))}var I=function(e){function t(){var e;return C(this,t),(e=D(this,t)).state={modalVisible:!1},e.toggleModal=e.toggleModal.bind(B(e)),e.handleDelete=e.handleDelete.bind(B(e)),e}return F(t,e),H(t,[{key:"handleDelete",value:function(){this.props.deleteEmployee(this.props.employee._id),this.setState({modalVisible:!1})}},{key:"toggleModal",value:function(){this.setState({modalVisible:!this.state.modalVisible})}},{key:"render",value:function(){return r.createElement("tr",null,r.createElement("td",null,r.createElement(l.rU,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),r.createElement("td",null,this.props.employee.extension),r.createElement("td",null,this.props.employee.email),r.createElement("td",null,this.props.employee.title),r.createElement("td",null,this.props.employee.dateHired.toDateString()),r.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement(f.Z,{variant:"danger",size:"sm",onClick:this.toggleModal},"X"),r.createElement(p.Z,{show:this.state.modalVisible,onHide:this.toggleModal,centered:!0},r.createElement(p.Z.Header,{closeButton:!0},r.createElement(p.Z.Title,null,"Delete Employee?")),r.createElement(p.Z.Body,null,"Are you sure you want to delete this employee?"),r.createElement(p.Z.Footer,null,r.createElement(f.Z,{type:"submit",variant:"danger",className:"mt-4",onClick:this.toggleModal},"Cancel"),r.createElement(f.Z,{type:"submit",variant:"success",className:"mt-4",onClick:this.handleDelete},"Yes")))))}}]),t}(r.Component),U=function(e){function t(){var e;return C(this,t),(e=D(this,t)).state={employees:[]},e.createEmployee=e.createEmployee.bind(B(e)),e.deleteEmployee=e.deleteEmployee.bind(B(e)),e}var n,o,l;return F(t,e),H(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:(l=L(k().mark((function e(){var t,n;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),this.setState({employees:n.employees});case 8:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"createEmployee",value:(o=L(k().mark((function e(t){var n,r,o;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).employee.dateHired=new Date(r.employee.dateHired),o=this.state.employees.concat(r.employee),this.setState({employees:o});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"deleteEmployee",value:(n=L(k().mark((function e(t){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees/".concat(t),{method:"DELETE"});case 2:e.sent.ok?this.loadData():console.log("Failed to delete employee.");case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(_,{createEmployee:this.createEmployee}),r.createElement(d,null),r.createElement(G,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}]),t}(r.Component);function z(){return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Filter"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"This is a placeholder for employee reports.")))}var W=n(9861);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,K(r.key),r)}}function K(e){var t=function(e,t){if("object"!=Y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Y(t)?t:String(t)}function X(e,t,n){return t=q(t),function(e,t){if(t&&("object"===Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}(e,$()?Reflect.construct(t,n||[],q(e).constructor):t.apply(e,n))}function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return($=function(){return!!e})()}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}var te=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=X(this,t)).state={employee:[],alertVisible:!1,alertColor:"success",alertMessage:""},e.handleSubmit=e.handleSubmit.bind(Q(e)),e}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.forms.employeeUpdate,r=n.id.value,o=n.name.value,l=n.extension.value,a=n.email.value,i=n.title.value,c=n.currentlyEmployed.checked,u="/api/employees/".concat(r);fetch(u,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:o,extension:l,email:a,title:i,currentlyEmployed:c})}).then((function(e){return e.json()})).then((function(e){t.setState({alertVisible:!0,alertMessage:e.msg})}))}},{key:"render",value:function(){var e=this;return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Edit ",this.state.employee.name),r.createElement(u.Z.Body,null,r.createElement(h.Z,{fluid:!0},r.createElement(u.Z.Text,null,r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"ID:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Name:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Extension:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Email:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Title:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Date Hired:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}))),r.createElement(v.Z,null,r.createElement(E.Z,{md:2},"Currently Employed?"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}))),r.createElement(f.Z,{type:"submit",variant:"primary",size:"sm",className:"my-3"},"Update Employee"),r.createElement(W.Z,{variant:this.state.alertColor,show:this.state.alertVisible,onClose:function(){return e.setState({alertVisible:!1})},dismissible:!0},this.state.alertMessage))))))}}])&&J(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.Component);function ne(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/employees",element:r.createElement(U,null)}),r.createElement(c.AW,{path:"/edit/:id",element:r.createElement(te,null)}),r.createElement(c.AW,{path:"/report",element:r.createElement(z,null)}),r.createElement(c.AW,{path:"/",element:r.createElement(c.Fg,{replace:!0,to:"/employees"})}),r.createElement(c.AW,{path:"*",element:r.createElement(e,null)}))}function re(){return r.createElement(a.Z,{bg:"dark",variant:"dark"},r.createElement(a.Z.Brand,{href:"/"},"Employee Management Application"),r.createElement(i.Z,null,r.createElement(i.Z.Link,{href:"/employees"},"All Employees"),r.createElement(i.Z.Link,{href:"/report"},"Reports")))}function oe(){return r.createElement("div",null,r.createElement(re,null),r.createElement(ne,null))}(0,o.s)(document.getElementById("content")).render(r.createElement(l.VK,null,r.createElement(r.StrictMode,null,r.createElement(oe,null))))}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,l),n.exports}l.m=r,e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,r,o]=e[s],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,c]=n,u=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var s=c(l)}for(t&&t(n);u<a.length;u++)o=a[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[736],(()=>l(2295)));a=l.O(a)})();
//# sourceMappingURL=employees.bundle.js.map