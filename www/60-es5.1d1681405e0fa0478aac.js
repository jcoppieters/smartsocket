(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{kLWK:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n("CguT"),o=function(t){var e,n,o,f,v=10*-l,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(t){v=Object(i.l)(t),b(t)},h=function(){clearTimeout(f),f=void 0,n&&(k(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(f),f=void 0;var o=Object(i.m)(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),k(!0)}if(t){var d=m.get(t);d&&(clearTimeout(d),m.delete(t));var l=r(t)?0:u;t.classList.remove(s),f=setTimeout((function(){T(t,a,c),f=void 0}),l)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(j(),o=i.addRipple(e,n))},j=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},k=function(t){j();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),m.delete(e)}),d);m.set(e,o)}else e.classList.remove(s)}},O=document;O.addEventListener("ionScrollStart",(function(t){e=t.target,h()})),O.addEventListener("ionScrollEnd",(function(){e=void 0})),O.addEventListener("ionGestureCaptured",h),O.addEventListener("touchstart",(function(t){v=Object(i.l)(t),E(t)}),!0),O.addEventListener("touchcancel",w,!0),O.addEventListener("touchend",w,!0),O.addEventListener("mousedown",(function(t){var e=Object(i.l)(t)-l;v<e&&E(t)}),!0),O.addEventListener("mouseup",(function(t){var e=Object(i.l)(t)-l;v<e&&b(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,l=2500}}]);