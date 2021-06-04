function _createForOfIteratorHelper(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function asyncGeneratorStep(t,e,r,i,n,a,o){try{var s=t[a](o),l=s.value}catch(h){return void r(h)}s.done?e(l):Promise.resolve(l).then(i,n)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(i,n){var a=t.apply(e,r);function o(t){asyncGeneratorStep(a,i,n,o,s,"next",t)}function s(t){asyncGeneratorStep(a,i,n,o,s,"throw",t)}o(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"8Mb5":function(t,e,r){"use strict";r.r(e),r.d(e,"ion_virtual_scroll",(function(){return l}));var i=r("wEJo"),n=r("1vRN"),a=function(t,e){var r=o(t,e);return r&&t.ownerDocument?t.ownerDocument.importNode(r.content,!0).children[0]:null},o=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},s=function(t,e,r,i,n,a,o,s,l,h,c,u){for(var f=[],d=u+c,p=c;p<d;p++){var v=t[p];if(n){var g=n(v,p,t);null!=g&&f.push({i:h++,type:"header",value:g,index:p,height:r?r(g,p):o,reads:r?0:2,visible:!!r})}if(f.push({i:h++,type:"item",value:v,index:p,height:e?e(v,p):l,reads:e?0:2,visible:!!e}),a){var m=a(v,p,t);null!=m&&f.push({i:h++,type:"footer",value:m,index:p,height:i?i(m,p):s,reads:i?0:2,visible:!!i})}}return f},l=function(){function t(e){var r=this;_classCallCheck(this,t),Object(i.o)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){r.updateVirtualScroll()}}var e,r,o;return _createClass(t,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=10;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState(),t.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,r){var i=e.find((function(e){return"item"===e.type&&e.index===t}));return i?r[i.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var r,i,n,a,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o.length>1&&void 0!==o[1]?o[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:i=-1===r?this.items.length-e:r,n=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,e),a=s(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,e,i),this.cells=function(t,e,r){if(0===r&&e.length>=t.length)return e;for(var i=0;i<e.length;i++)t[i+r]=e[i];return t}(this.cells,a,n),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 5:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"checkEnd",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(i.h)(this.readVS.bind(this)),Object(i.f)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,r=0,i=this.el;i&&i!==t;)r+=i.offsetTop,i=i.offsetParent;this.viewportOffset=r,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var t,e,r=this.indexDirty,n=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),o=this.getHeightIndex(),s=function(t,e,r){for(var i=e.top,n=e.bottom,a=0;a<t.length&&!(t[a]>i);a++);for(var o=Math.max(a-2-1,0);a<t.length&&!(t[a]>=n);a++);return{offset:o,length:Math.min(a+2,t.length)-o}}(o,n);(function(t,e,r){return t<=r.offset+r.length||e.offset!==r.offset||e.length!==r.length})(r,this.range,s)&&(this.range=s,function(t,e,r,i){var n,a=_createForOfIteratorHelper(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.change=0,o.d=!0}}catch(v){a.e(v)}finally{a.f()}for(var s=[],l=i.offset+i.length,h=function(i){var n=r[i],a=t.find((function(t){return t.d&&t.cell===n}));if(a){var o=e[i];o!==a.top&&(a.top=o,a.change=1),a.d=!1}else s.push(n)},c=i.offset;c<l;c++)h(c);for(var u=t.filter((function(t){return t.d})),f=function(){var r=p[d],i=u.find((function(t){return t.d&&t.cell.type===r.type})),n=r.i;i?(i.d=!1,i.change=2,i.cell=r,i.top=e[n]):t.push({d:!1,cell:r,visible:!0,change:2,top:e[n]})},d=0,p=s;d<p.length;d++)f();t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,o,this.cells,s),this.nodeRender?function(t,e,r,i){for(var n,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),s=o.length,l=0;l<r.length;l++){var h=r[l],c=h.cell;if(2===h.change){if(l<s)e(n=o[l],c,l);else{var u=a(t,c.type);(n=e(u,c,l)||u).classList.add("virtual-item"),t.appendChild(n)}n.$ionCell=c}else n=o[l];0!==h.change&&(n.style.transform="translate3d(0,".concat(h.top,"px,0)"));var f=c.visible;h.visible!==f&&(f?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),h.visible=f),c.reads>0&&(i(c,n),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(i.l)(this))}},{key:"updateCellHeight",value:function(t,e){var r=this,i=function(){if(e.$ionCell===t){var i=window.getComputedStyle(e),n=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));r.setCellHeight(t,n)}};e?Object(n.c)(e,i):i()}},{key:"setCellHeight",value:function(t,e){var r=t.i;t===this.cells[r]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,r),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=s(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var r=new Uint32Array(e);return r.set(t),r}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,r){for(var i=t[r],n=r;n<t.length;n++)t[n]=i,i+=e[n].height;return i}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var r=this.scrollEl;r&&(this.isEnabled=t,r.addEventListener("scroll",this.onScroll),this.rmEvent=function(){r.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,r=e.type,i=e.value,n=e.index;switch(r){case"item":return this.renderItem(i,n);case"header":return this.renderHeader(i,n);case"footer":return this.renderFooter(i,n)}}},{key:"render",value:function(){var t=this;return Object(i.j)(i.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(i.j)(h,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))}},{key:"el",get:function(){return Object(i.k)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),t}(),h=function(t,e,r){var i=t.dom;return r.map(e,(function(t,e){var r=i[e],n=t.vattrs||{},a=n.class||"";return a+="virtual-item ",r.visible||(a+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},n),{class:a,style:Object.assign(Object.assign({},n.style),{transform:"translate3d(0,".concat(r.top,"px,0)")})})})}))};l.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);