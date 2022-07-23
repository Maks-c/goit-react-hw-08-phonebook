/*! For license information please see 926.e3a6c121.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[926],{4926:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i=t(5206),a=t(5861),o=t(885),u=t(7757),c=t.n(u),s=t(2791),l=t(750),d=t(6170),f=t(9561),p=t(168),h=t(7939),m=h.ZP.form(r||(r=(0,p.Z)(["\n  width: 320px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-row-gap: 10px;\n"]))),v=t(184);var g,x,b,w,y,Z=function(){var n=(0,l.Lr)(),e=(0,o.Z)(n,1)[0],t=(0,l.wY)().data,r=(0,s.useState)(""),u=(0,o.Z)(r,2),p=u[0],h=u[1],g=(0,s.useState)(""),x=(0,o.Z)(g,2),b=x[0],w=x[1],y=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?h(r):w(r)},Z=function(){var n=(0,a.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t.some((function(n){return n.name.toLowerCase().includes(p.toLowerCase())}));case 3:if(!n.sent){n.next=7;break}return i.Am.warning("".concat(p," is already in contacts")),n.abrupt("return");case 7:return n.prev=7,n.next=10,e({name:p,number:b});case 10:i.Am.success("".concat(p," has added to contacts list")),console.log("success"),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(7),i.Am.error("Oops, something went wrong");case 17:h(""),w("");case 19:case"end":return n.stop()}}),n,null,[[7,14]])})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(m,{onSubmit:Z,children:[(0,v.jsx)(f.Z,{sx:{mr:"25px"},variant:"standard",label:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:y,value:p}),(0,v.jsx)(f.Z,{variant:"standard",label:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:y,value:b}),(0,v.jsx)(d.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},j=t(5048),C=h.ZP.span(g||(g=(0,p.Z)(["\n  margin-right: 5px;\n  font-family: 'Titillium Web', sans-serif;\n"]))),P=h.ZP.ul(x||(x=(0,p.Z)(["\n\n  margin: 0 auto 0 0;\n  padding-left: 0;\n\n"]))),k=h.ZP.li(b||(b=(0,p.Z)(["\n\n  list-style: none;\n  margin: 10px auto 0 auto;\n"]))),_=(h.ZP.button(w||(w=(0,p.Z)(["\n  margin-left: 20px;\n"]))),function(n){var e=n.id,t=n.name,r=n.number,i=(0,l.Nt)(),a=(0,o.Z)(i,2),u=a[0],c=a[1].isLoading;return(0,v.jsxs)(k,{children:[(0,v.jsx)(C,{children:t}),(0,v.jsx)(C,{children:r}),(0,v.jsx)(d.Z,{sx:{ml:2},onClick:function(){return u(e)},children:c?"Deleting...":"Delete"})]},e)}),A=function(){var n=(0,l.wY)().data,e=(0,j.v9)((function(n){return n.filter.value})),t=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,v.jsx)(P,{children:t&&t.map((function(n){return(0,v.jsx)(_,{id:n.id,name:n.name,number:n.number},n.id)}))})},D=h.ZP.div(y||(y=(0,p.Z)(["\n  margin: 20px auto 0 auto;\n"]))),L=t(4808),F=t(5571),S=t.n(F);function T(n){var e=null,t=null,r=new Promise((function(n,r){e=n,t=r}));return n&&n.then((function(n){e&&e(n)}),(function(n){t&&t(n)})),{promise:r,resolve:function(n){e&&e(n)},reject:function(n){t&&t(n)},cancel:function(){e=null,t=null}}}var z=function(){return z=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},z.apply(this,arguments)},O={key:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return null},onlyResolvesLast:!0},q=function(){function n(n){this.config=n,this.debounceSingleton=null,this.debounceCache={}}return n.prototype._createDebouncedFunction=function(){var n=S()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(n=function(n){var e=null;return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];e&&e();var i=T(n.apply(void 0,t)),a=i.promise,o=i.cancel;return e=o,a}}(n)),{func:n}},n.prototype.getDebouncedFunction=function(n){var e,t=(e=this.config.options).key.apply(e,n);return null===t||"undefined"===typeof t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},n}();var I,N,R=function(n,e,t){var r=z({},O,t),i=new q({func:n,wait:e,options:r});return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=i.getDebouncedFunction(n).func;return t.apply(void 0,n)}},W=function(){var n=(0,j.I0)(),e=R((function(e){n((0,L.K)(e.target.value))}),500);return(0,v.jsx)(D,{children:(0,v.jsx)(f.Z,{label:"search name",variant:"standard",type:"text",name:"filter",id:"filter",onChange:e})})},Y=h.ZP.div(I||(I=(0,p.Z)(["\n  margin: 0 auto;\n  display: flex;\n  width: 800px;\n  flex-direction: column;\n"])));h.ZP.h1(N||(N=(0,p.Z)(["\n  text-align: center;\n  //margin: 1em 0 0.5em 0;\n  font-weight: 600;\n  font-family: 'Titillium Web', sans-serif;\n  position: relative;\n  font-size: 36px;\n  line-height: 40px;\n  padding: 15px 15px 15px 15px;\n  color: #355681;\n  box-shadow: inset 0 0 0 1px rgba(53, 86, 129, 0.4),\n  inset 0 0 5px rgba(53, 86, 129, 0.5),\n    inset -285px 0 35px white;\n  border-radius: 10px 10px 10px 10px;\n\n"])));function B(){return(0,v.jsxs)(Y,{children:[(0,v.jsx)(Z,{}),(0,v.jsx)(A,{}),(0,v.jsx)(W,{}),(0,v.jsx)(i.Ix,{theme:"colored",autoClose:500})]})}},5571:function(n){function e(n){return"function"===typeof n?n():n}function t(){var n={};return n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),n}n.exports=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=void 0,o=void 0,u=void 0,c=[];return function(){var l=e(r),d=(new Date).getTime(),f=!a||d-a>l;a=d;for(var p=arguments.length,h=Array(p),m=0;m<p;m++)h[m]=arguments[m];if(f&&i.leading)return i.accumulate?Promise.resolve(n.call(this,[h])).then((function(n){return n[0]})):Promise.resolve(n.call.apply(n,[this].concat(h)));if(o?clearTimeout(u):o=t(),c.push(h),u=setTimeout(s.bind(this),l),i.accumulate){var v=c.length-1;return o.promise.then((function(n){return n[v]}))}return o.promise};function s(){var e=o;clearTimeout(u),Promise.resolve(i.accumulate?n.call(this,c):n.apply(this,c[c.length-1])).then(e.resolve,e.reject),c=[],o=null}}}}]);
//# sourceMappingURL=926.e3a6c121.chunk.js.map