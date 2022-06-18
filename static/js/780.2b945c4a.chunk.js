/*! For license information please see 780.2b945c4a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[780],{5780:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var o=t(5206),a=t(5861),r=t(885),i=t(7757),c=t.n(i),l=t(2791),s=t(782),u=t(4942),d=t(3366),p=t(7462),v=t(8182),h=t(5735),m=t(4419),f=t(2065),b=t(6934),g=t(1402),x=t(9658),y=t(4036),S=t(7225);function Z(e){return(0,S.Z)("MuiButton",e)}var w=(0,t(5878).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var z=l.createContext({}),C=t(184),k=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],j=function(e){return(0,p.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},I=(0,b.ZP)(x.Z,{shouldForwardProp:function(e){return(0,b.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["".concat(t.variant).concat((0,y.Z)(t.color))],n["size".concat((0,y.Z)(t.size))],n["".concat(t.variant,"Size").concat((0,y.Z)(t.size))],"inherit"===t.color&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})((function(e){var n,t,o,a=e.theme,r=e.ownerState;return(0,p.Z)({},a.typography.button,(n={minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,p.Z)({textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,f.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,f.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:"1px solid ".concat((a.vars||a).palette[r.color].main),backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,f.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:(a.vars||a).palette.grey.A100,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(a.vars||a).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[r.color].main}}),"&:active":(0,p.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[8]})},(0,u.Z)(n,"&.".concat(w.focusVisible),(0,p.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[6]})),(0,u.Z)(n,"&.".concat(w.disabled),(0,p.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===r.variant&&{border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)},"outlined"===r.variant&&"secondary"===r.color&&{border:"1px solid ".concat((a.vars||a).palette.action.disabled)},"contained"===r.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})),n),"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main,border:a.vars?"1px solid rgba(".concat(a.vars.palette[r.color].mainChannel," / 0.5)"):"1px solid ".concat((0,f.Fq)(a.palette[r.color].main,.5))},"contained"===r.variant&&{color:a.vars?a.vars.palette.text.primary:null==(t=(o=a.palette).getContrastText)?void 0:t.call(o,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],boxShadow:(a.vars||a).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].contrastText,backgroundColor:(a.vars||a).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})}),(function(e){var n;return e.ownerState.disableElevation&&(n={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,u.Z)(n,"&.".concat(w.focusVisible),{boxShadow:"none"}),(0,u.Z)(n,"&:active",{boxShadow:"none"}),(0,u.Z)(n,"&.".concat(w.disabled),{boxShadow:"none"}),n)})),R=(0,b.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.startIcon,n["iconSize".concat((0,y.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,p.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===n.size&&{marginLeft:-2},j(n))})),P=(0,b.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.endIcon,n["iconSize".concat((0,y.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,p.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===n.size&&{marginRight:-2},j(n))})),F=l.forwardRef((function(e,n){var t=l.useContext(z),o=(0,h.Z)(t,e),a=(0,g.Z)({props:o,name:"MuiButton"}),r=a.children,i=a.color,c=void 0===i?"primary":i,s=a.component,u=void 0===s?"button":s,f=a.className,b=a.disabled,x=void 0!==b&&b,S=a.disableElevation,w=void 0!==S&&S,j=a.disableFocusRipple,F=void 0!==j&&j,L=a.endIcon,T=a.focusVisibleClassName,W=a.fullWidth,E=void 0!==W&&W,N=a.size,M=void 0===N?"medium":N,A=a.startIcon,O=a.type,_=a.variant,D=void 0===_?"text":_,B=(0,d.Z)(a,k),V=(0,p.Z)({},a,{color:c,component:u,disabled:x,disableElevation:w,disableFocusRipple:F,fullWidth:E,size:M,type:O,variant:D}),q=function(e){var n=e.color,t=e.disableElevation,o=e.fullWidth,a=e.size,r=e.variant,i=e.classes,c={root:["root",r,"".concat(r).concat((0,y.Z)(n)),"size".concat((0,y.Z)(a)),"".concat(r,"Size").concat((0,y.Z)(a)),"inherit"===n&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,y.Z)(a))],endIcon:["endIcon","iconSize".concat((0,y.Z)(a))]},l=(0,m.Z)(c,Z,i);return(0,p.Z)({},i,l)}(V),Y=A&&(0,C.jsx)(R,{className:q.startIcon,ownerState:V,children:A}),J=L&&(0,C.jsx)(P,{className:q.endIcon,ownerState:V,children:L});return(0,C.jsxs)(I,(0,p.Z)({ownerState:V,className:(0,v.Z)(f,t.className),component:u,disabled:x,focusRipple:!F,focusVisibleClassName:(0,v.Z)(q.focusVisible,T),ref:n,type:O},B,{classes:q,children:[Y,r,J]}))}));var L,T,W,E,N,M=function(){var e=(0,s.Lr)(),n=(0,r.Z)(e,1)[0],t=(0,s.wY)().data,i=(0,l.useState)(""),u=(0,r.Z)(i,2),d=u[0],p=u[1],v=(0,l.useState)(""),h=(0,r.Z)(v,2),m=h[0],f=h[1],b=function(e){var n=e.currentTarget.name,t=e.target.value;switch(n){case"name":p(t);break;case"number":f(t);break;default:return}},g=function(){var e=(0,a.Z)(c().mark((function e(a){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.some((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));case 3:if(!e.sent){e.next=7;break}return o.Am.warning("".concat(d," is already in contacts")),e.abrupt("return");case 7:return e.prev=7,e.next=10,n({name:d,number:m});case 10:o.Am.success("".concat(d," has added to contacts list")),console.log("success"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),o.Am.error("Oops, something went wrong");case 17:p(""),f("");case 19:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(n){return e.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("form",{onSubmit:g,children:[(0,C.jsxs)("label",{children:["Name",(0,C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,value:d})]}),(0,C.jsxs)("label",{children:["Number",(0,C.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b,value:m})]}),(0,C.jsx)(F,{variant:"contained",type:"submit",children:"Add contact"})]})})},A=t(5048),O=t(168),_=t(7939),D=_.ZP.span(L||(L=(0,O.Z)(["\n  margin-right: 5px;\n  font-family: 'Titillium Web', sans-serif;\n"]))),B=_.ZP.ul(T||(T=(0,O.Z)(["\n\n  margin: 0 auto 0 0;\n  padding-left: 0;\n\n"]))),V=_.ZP.li(W||(W=(0,O.Z)(["\n\n  list-style: none;\n  margin: 10px auto 0 auto;\n"]))),q=_.ZP.button(E||(E=(0,O.Z)(["\n  margin-left: 20px;\n"]))),Y=function(e){var n=e.id,t=e.name,o=e.number,a=(0,s.Nt)(),i=(0,r.Z)(a,2),c=i[0],l=i[1].isLoading;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(V,{children:[(0,C.jsx)(D,{children:t}),(0,C.jsx)(D,{children:o}),(0,C.jsx)(q,{onClick:function(){return c(n)},children:l?"Deleting...":"Delete"})]},n)})},J=function(){var e=(0,s.wY)().data,n=(0,A.v9)((function(e){return e.filter.value})),t=null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,C.jsx)(B,{children:t&&t.map((function(e){return(0,C.jsx)(Y,{id:e.id,name:e.name,number:e.number},e.id)}))})},K=_.ZP.div(N||(N=(0,O.Z)(["\n  margin: 20px auto 0 auto;\n"]))),$=t(2034),G=t(5571),H=t.n(G);function Q(e){var n=null,t=null,o=new Promise((function(e,o){n=e,t=o}));return e&&e.then((function(e){n&&n(e)}),(function(e){t&&t(e)})),{promise:o,resolve:function(e){n&&n(e)},reject:function(e){t&&t(e)},cancel:function(){n=null,t=null}}}var U=function(){return U=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},U.apply(this,arguments)},X={key:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null},onlyResolvesLast:!0},ee=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e=H()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=function(e){var n=null;return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];n&&n();var a=Q(e.apply(void 0,t)),r=a.promise,i=a.cancel;return n=i,r}}(e)),{func:e}},e.prototype.getDebouncedFunction=function(e){var n,t=(n=this.config.options).key.apply(n,e);return null===t||"undefined"===typeof t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},e}();var ne=function(e,n,t){var o=U({},X,t),a=new ee({func:e,wait:n,options:o});return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=a.getDebouncedFunction(e).func;return t.apply(void 0,e)}},te=function(){var e=(0,A.I0)(),n=ne((function(n){e((0,$.K)(n.target.value))}),500);return(0,C.jsx)(K,{children:(0,C.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:n})})},oe=t(3720);function ae(){return(0,C.jsxs)(oe.i,{children:[(0,C.jsx)(M,{}),(0,C.jsx)(J,{}),(0,C.jsx)(te,{}),(0,C.jsx)(o.Ix,{theme:"colored",autoClose:500})]})}},5571:function(e){function n(e){return"function"===typeof e?e():e}function t(){var e={};return e.promise=new Promise((function(n,t){e.resolve=n,e.reject=t})),e}e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=void 0,i=void 0,c=void 0,l=[];return function(){var u=n(o),d=(new Date).getTime(),p=!r||d-r>u;r=d;for(var v=arguments.length,h=Array(v),m=0;m<v;m++)h[m]=arguments[m];if(p&&a.leading)return a.accumulate?Promise.resolve(e.call(this,[h])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(h)));if(i?clearTimeout(c):i=t(),l.push(h),c=setTimeout(s.bind(this),u),a.accumulate){var f=l.length-1;return i.promise.then((function(e){return e[f]}))}return i.promise};function s(){var n=i;clearTimeout(c),Promise.resolve(a.accumulate?e.call(this,l):e.apply(this,l[l.length-1])).then(n.resolve,n.reject),l=[],i=null}}}}]);
//# sourceMappingURL=780.2b945c4a.chunk.js.map