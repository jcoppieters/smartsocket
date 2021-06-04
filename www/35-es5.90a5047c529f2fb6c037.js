function _defineProperty(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function asyncGeneratorStep(e,o,t,r,i,n,a){try{var s=e[n](a),p=s.value}catch(c){return void t(c)}s.done?o(p):Promise.resolve(p).then(r,i)}function _asyncToGenerator(e){return function(){var o=this,t=arguments;return new Promise((function(r,i){var n=e.apply(o,t);function a(e){asyncGeneratorStep(n,r,i,a,s,"next",e)}function s(e){asyncGeneratorStep(n,r,i,a,s,"throw",e)}a(void 0)}))}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{qCuA:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",(function(){return f}));var r=t("wEJo"),i=t("E/Mt"),n=t("acej"),a=t("7OTs"),s=t("74mu"),p=t("k4ps"),c=t("meiF");t("1vRN"),t("B4Jq");var l=function(e,o){var t="top",r="left",i=e.querySelector(".popover-content"),n=i.getBoundingClientRect(),a=n.width,s=n.height,p=e.ownerDocument.defaultView.innerWidth,l=e.ownerDocument.defaultView.innerHeight,v=o&&o.target&&o.target.getBoundingClientRect(),h=null!=v&&"top"in v?v.top:l/2-s/2,u=null!=v&&"left"in v?v.left:p/2,f=v&&v.width||0,b=v&&v.height||0,m=e.querySelector(".popover-arrow"),x=m.getBoundingClientRect(),g=x.width,w=x.height;null==v&&(m.style.display="none");var y={top:h+b,left:u+f/2-g/2},k={top:h+b+(w-1),left:u+f/2-a/2},j=!1,O=!1;k.left<d+25?(j=!0,k.left=d):a+d+k.left+25>p&&(O=!0,k.left=p-a-d,r="right"),h+b+s>l&&h-s>0?(y.top=h-(w+1),k.top=h-s-(w-1),e.className=e.className+" popover-bottom",t="bottom"):h+b+s>l&&(i.style.bottom=d+"%"),m.style.top=y.top+"px",m.style.left=y.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",j&&(i.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(i.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),i.style.transformOrigin=t+" "+r;var P=Object(c.a)(),D=Object(c.a)(),E=Object(c.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(e).easing("ease").duration(100).addAnimation([D,E])},d=5,v=function(e){var o=Object(c.a)(),t=Object(c.a)(),r=Object(c.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},h=function(e,o){var t=e.ownerDocument,r="rtl"===t.dir,i="top",n=r?"right":"left",a=e.querySelector(".popover-content"),s=a.getBoundingClientRect(),p=s.width,l=s.height,d=t.defaultView.innerWidth,v=t.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"bottom"in h?h.bottom:v/2-l/2,f=h&&h.height||0,b={top:u,left:null!=h&&"left"in h?r?h.left-p+h.width:h.left:d/2-p/2};b.left<12?(b.left=12,n="left"):p+12+b.left>d&&(b.left=d-p-12,n="right"),u+f+l>v&&u-l>0?(b.top=u-l-f,e.className=e.className+" popover-bottom",i="bottom"):u+f+l>v&&(a.style.bottom="12px");var m=Object(c.a)(),x=Object(c.a)(),g=Object(c.a)(),w=Object(c.a)(),y=Object(c.a)();return x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":"".concat(i," ").concat(n)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),m.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},u=function(e){var o=Object(c.a)(),t=Object(c.a)(),r=Object(c.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},f=function(){function e(o){var t=this;_classCallCheck(this,e),Object(r.o)(this,o),this.didPresent=Object(r.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,a.a)},this.onLifecycle=function(e){var o=t.usersElement,r=b[e.type];if(o&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}}var o,t;return _createClass(e,[{key:"connectedCallback",value:function(){Object(a.f)(this.el)}},{key:"present",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var o,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(n.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t);case 8:return this.usersElement=e.sent,e.next=11,Object(p.f)(this.usersElement);case 11:return e.abrupt("return",Object(a.e)(this,"popoverEnter",l,h,this.event));case 12:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"dismiss",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(o,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.g)(this,o,t,"popoverLeave",v,u,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,Object(n.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(a.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(a.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,o=Object(i.b)(this),t=this.onLifecycle;return Object(r.j)(r.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),(e={},_defineProperty(e,o,!0),_defineProperty(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.j)("div",{tabindex:"0"}),Object(r.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(r.j)("div",{class:"popover-arrow"}),Object(r.j)("div",{class:"popover-content"})),Object(r.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(r.k)(this)}}]),e}(),b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};f.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);