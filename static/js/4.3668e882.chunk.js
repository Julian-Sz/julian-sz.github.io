(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{158:function(t,e,n){"use strict";n.d(e,"a",(function(){return Ae}));var r=n(6),a=n(2),i=n.n(a),o=n(74),u=n(119),c=n(45);var s=n(104),l=n(52),f=n(116);var d=function(t){return function(e){return t(e),null}},v={pan:d((function(t){var e=t.onPan,n=t.onPanStart,r=t.onPanEnd,i=t.onPanSessionStart,u=t.visualElement,c=e||n||r||i,d=Object(a.useRef)(null),v=Object(a.useContext)(o.a).transformPagePoint,b={onSessionStart:i,onStart:n,onMove:e,onEnd:function(t,e){d.current=null,r&&r(t,e)}};Object(a.useEffect)((function(){null!==d.current&&d.current.updateHandlers(b)})),Object(l.b)(u,"pointerdown",c&&function(t){d.current=new f.a(t,b,{transformPagePoint:v})}),Object(s.a)((function(){return d.current&&d.current.end()}))})),drag:d((function(t){var e=t.dragControls,n=t.visualElement,i=Object(a.useContext)(o.a).transformPagePoint,s=Object(c.a)((function(){return new u.a({visualElement:n})}));s.setProps(Object(r.a)(Object(r.a)({},t),{transformPagePoint:i})),Object(a.useEffect)((function(){return e&&e.subscribe(s)}),[s]),Object(a.useEffect)((function(){return s.mount(n)}),[])}))},b=n(27),m=n(51),p=n(61),j=n(19),y=n(102),g=n(34),O=n(56),h=n(97),A=n(99),T=n(21),x=n(16);function P(t){return"string"===typeof t&&t.startsWith("var(--")}var V=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function E(t,e,n){void 0===n&&(n=1),Object(x.a)(n<=4,'Max CSS variable fallback depth detected in property "'+t+'". This may indicate a circular fallback dependency.');var a=Object(r.c)(function(t){var e=V.exec(t);if(!e)return[,];var n=Object(r.c)(e,3);return[n[1],n[2]]}(t),2),i=a[0],o=a[1];if(i){var u=window.getComputedStyle(e).getPropertyValue(i);return u?u.trim():P(o)?E(o,e,n+1):o}}function S(t,e){return t/(e.max-e.min)*100}var L="_$css";var R={process:function(t,e,n){var r=n.target;if("string"===typeof t){if(!h.d.test(t))return t;t=parseFloat(t)}return S(t,r.x)+"% "+S(t,r.y)+"%"}},C={borderRadius:Object(r.a)(Object(r.a)({},R),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomLeftRadius:R,borderBottomRightRadius:R,boxShadow:{process:function(t,e){var n=e.delta,r=e.treeScale,a=t,i=t.includes("var("),o=[];i&&(t=t.replace(V,(function(t){return o.push(t),L})));var u=A.a.parse(t);if(u.length>5)return a;var c=A.a.createTransformer(t),s="number"!==typeof u[0]?1:0,l=n.x.scale*r.x,f=n.y.scale*r.y;u[0+s]/=l,u[1+s]/=f;var d=Object(T.a)(l,f,.5);"number"===typeof u[2+s]&&(u[2+s]/=d),"number"===typeof u[3+s]&&(u[3+s]/=d);var v=c(u);if(i){var b=0;v=v.replace(L,(function(){var t=o[b];return b++,t}))}return v}}},w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.frameTarget=Object(g.a)(),e.currentAnimationTarget=Object(g.a)(),e.isAnimating={x:!1,y:!1},e.stopAxisAnimation={x:void 0,y:void 0},e.isAnimatingTree=!1,e.animate=function(t,n,a){void 0===a&&(a={});var i=a.originBox,o=a.targetBox,u=a.visibilityAction,c=a.shouldStackAnimate,s=a.onComplete,l=a.prevParent,f=Object(r.d)(a,["originBox","targetBox","visibilityAction","shouldStackAnimate","onComplete","prevParent"]),d=e.props,v=d.visualElement,m=d.layout;if(!1===c)return e.isAnimatingTree=!1,e.safeToRemove();if(!e.isAnimatingTree||!0===c){c&&(e.isAnimatingTree=!0),n=i||n,t=o||t;var y=!1,g=v.getProjectionParent();if(g){var O=g.prevViewportBox,h=g.getLayoutState().layout;l&&(o&&(h=l.getLayoutState().layout),i&&!Object(p.b)(l,g)&&l.prevViewportBox&&(O=l.prevViewportBox)),O&&U(l,i,o)&&(y=!0,n=Object(p.a)(O,n),t=Object(p.a)(h,t))}var A=B(n,t),T=Object(b.a)((function(a){var i,o;if("position"===m){var c=t[a].max-t[a].min;n[a].max=n[a].min+c}if(!v.projection.isTargetLocked)return void 0===u?A?e.animateAxis(a,t[a],n[a],Object(r.a)(Object(r.a)({},f),{isRelative:y})):(null===(o=(i=e.stopAxisAnimation)[a])||void 0===o||o.call(i),v.setProjectionTargetAxis(a,t[a].min,t[a].max,y)):void v.setVisibility(u===j.b.Show)}));return v.syncRender(),Promise.all(T).then((function(){e.isAnimatingTree=!1,s&&s(),v.notifyLayoutAnimationComplete()}))}},e}return Object(r.b)(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.visualElement;e.animateMotionValue=m.b,e.enableLayoutProjection(),this.unsubLayoutReady=e.onLayoutUpdate(this.animate),e.layoutSafeToRemove=function(){return t.safeToRemove()},Object(O.a)(C)},e.prototype.componentWillUnmount=function(){var t=this;this.unsubLayoutReady(),Object(b.a)((function(e){var n,r;return null===(r=(n=t.stopAxisAnimation)[e])||void 0===r?void 0:r.call(n)}))},e.prototype.animateAxis=function(t,e,n,r){var a,i,o=this,u=void 0===r?{}:r,c=u.transition,s=u.isRelative;if(!this.isAnimating[t]||!M(e,this.currentAnimationTarget[t])){null===(i=(a=this.stopAxisAnimation)[t])||void 0===i||i.call(a),this.isAnimating[t]=!0;var l=this.props.visualElement,f=this.frameTarget[t],d=l.getProjectionAnimationProgress()[t];d.clearListeners(),d.set(0),d.set(0);var v=function(){var r=d.get()/1e3;Object(p.c)(f,n,e,r),l.setProjectionTargetAxis(t,f.min,f.max,s)};v();var b=d.onChange(v);this.stopAxisAnimation[t]=function(){o.isAnimating[t]=!1,d.stop(),b()},this.currentAnimationTarget[t]=e;var j=c||l.getDefaultTransition()||H;return Object(m.b)("x"===t?"layoutX":"layoutY",d,1e3,j&&Object(m.a)(j,"layout")).then(this.stopAxisAnimation[t])}},e.prototype.safeToRemove=function(){var t,e;null===(e=(t=this.props).safeToRemove)||void 0===e||e.call(t)},e.prototype.render=function(){return null},e}(a.Component);function B(t,e){return!k(t)&&!k(e)&&(!M(t.x,e.x)||!M(t.y,e.y))}var F={min:0,max:0};function k(t){return M(t.x,F)&&M(t.y,F)}function M(t,e){return t.min===e.min&&t.max===e.max}var H={duration:.45,ease:[.4,0,.1,1]};function U(t,e,n){return t||!t&&!(e||n)}var D=n(62),I=n(25),N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.b)(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.syncLayout,n=t.framerSyncLayout,r=t.visualElement;Object(D.c)(e)&&e.register(r),Object(D.c)(n)&&n.register(r),r.onUnmount((function(){Object(D.c)(e)&&e.remove(r),Object(D.c)(n)&&n.remove(r)}))},e.prototype.getSnapshotBeforeUpdate=function(){var t=this.props,e=t.syncLayout,n=t.visualElement;return Object(D.c)(e)?e.syncUpdate():(Object(I.c)(n),e.add(n)),null},e.prototype.componentDidUpdate=function(){var t=this.props.syncLayout;Object(D.c)(t)||t.flush()},e.prototype.render=function(){return null},e}(i.a.Component);var z={measureLayout:function(t){var e=Object(a.useContext)(D.b),n=Object(a.useContext)(D.a);return i.a.createElement(N,Object(r.a)({},t,{syncLayout:e,framerSyncLayout:n}))},layoutAnimation:function(t){var e=Object(r.c)(Object(y.b)(),2)[1];return a.createElement(w,Object(r.a)({},t,{safeToRemove:e}))}},K=n(103),$=n(35),W=n(75);function X(t,e){if(!Array.isArray(e))return!1;var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}var Y=n(109),_=n(72),J=n(95),Z=n(24),q=n(46),G=function(t){return function(e){return e.test(t)}},Q=[q.b,h.d,h.b,h.a,h.f,h.e,{test:function(t){return"auto"===t},parse:function(t){return t}}],tt=function(t){return Q.find(G(t))},et=Object(r.e)(Object(r.e)([],Object(r.c)(Q)),[Z.a,A.a]),nt=function(t){return et.find(G(t))},rt=n(36);function at(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Object(_.a)(n))}function it(t,e){var n=Object(rt.e)(t,e),a=n?t.makeTargetAnimatable(n,!1):{},i=a.transitionEnd,o=void 0===i?{}:i;a.transition;var u=Object(r.d)(a,["transitionEnd","transition"]);for(var c in u=Object(r.a)(Object(r.a)({},u),o)){at(t,c,Object(Y.b)(u[c]))}}function ot(t,e){if(e)return(e[t]||e.default||e).from}function ut(t,e,n){var a;void 0===n&&(n={});var i=Object(rt.e)(t,e,n.custom),o=(i||{}).transition,u=void 0===o?t.getDefaultTransition()||{}:o;n.transitionOverride&&(u=n.transitionOverride);var c=i?function(){return ct(t,i,n)}:function(){return Promise.resolve()},s=(null===(a=t.variantChildren)||void 0===a?void 0:a.size)?function(a){void 0===a&&(a=0);var i=u.delayChildren,o=void 0===i?0:i,c=u.staggerChildren,s=u.staggerDirection;return function(t,e,n,a,i,o){void 0===n&&(n=0);void 0===a&&(a=0);void 0===i&&(i=1);var u=[],c=(t.variantChildren.size-1)*a,s=1===i?function(t){return void 0===t&&(t=0),t*a}:function(t){return void 0===t&&(t=0),c-t*a};return Array.from(t.variantChildren).sort(st).forEach((function(t,a){u.push(ut(t,e,Object(r.a)(Object(r.a)({},o),{delay:n+s(a)})).then((function(){return t.notifyAnimationComplete(e)})))})),Promise.all(u)}(t,e,o+a,c,s,n)}:function(){return Promise.resolve()},l=u.when;if(l){var f=Object(r.c)("beforeChildren"===l?[c,s]:[s,c],2),d=f[0],v=f[1];return d().then(v)}return Promise.all([c(),s(n.delay)])}function ct(t,e,n){var a,i=void 0===n?{}:n,o=i.delay,u=void 0===o?0:o,c=i.transitionOverride,s=i.type,l=t.makeTargetAnimatable(e),f=l.transition,d=void 0===f?t.getDefaultTransition():f,v=l.transitionEnd,b=Object(r.d)(l,["transition","transitionEnd"]);c&&(d=c);var p=[],j=s&&(null===(a=t.animationState)||void 0===a?void 0:a.getState()[s]);for(var y in b){var g=t.getValue(y),O=b[y];if(!(!g||void 0===O||j&&lt(j,y))){var h=Object(m.b)(y,g,O,Object(r.a)({delay:u},d));p.push(h)}}return Promise.all(p).then((function(){v&&it(t,v)}))}function st(t,e){return t.sortNodePosition(e)}function lt(t,e){var n=t.protectedKeys,r=t.needsAnimating,a=n.hasOwnProperty(e)&&!0!==r[e];return r[e]=!1,a}var ft=n(92),dt=[ft.a.Animate,ft.a.Hover,ft.a.Tap,ft.a.Drag,ft.a.Focus,ft.a.Exit],vt=Object(r.e)([],Object(r.c)(dt)).reverse(),bt=dt.length;function mt(t){return function(e){return Promise.all(e.map((function(e){var n=e.animation,r=e.options;return function(t,e,n){var r;if(void 0===n&&(n={}),t.notifyAnimationStart(),Array.isArray(e)){var a=e.map((function(e){return ut(t,e,n)}));r=Promise.all(a)}else if("string"===typeof e)r=ut(t,e,n);else{var i="function"===typeof e?Object(rt.e)(t,e,n.custom):e;r=ct(t,i,n)}return r.then((function(){return t.notifyAnimationComplete(e)}))}(t,n,r)})))}}function pt(t){var e=mt(t),n=function(){var t;return(t={})[ft.a.Animate]=jt(!0),t[ft.a.Hover]=jt(),t[ft.a.Tap]=jt(),t[ft.a.Drag]=jt(),t[ft.a.Focus]=jt(),t[ft.a.Exit]=jt(),t}(),a={},i=!0,o=function(e,n){var a=Object(rt.e)(t,n);if(a){a.transition;var i=a.transitionEnd,o=Object(r.d)(a,["transition","transitionEnd"]);e=Object(r.a)(Object(r.a)(Object(r.a)({},e),o),i)}return e};function u(u,c){for(var s,l=t.getProps(),f=t.getVariantContext(!0)||{},d=[],v=new Set,b={},m=1/0,p=function(e){var a=vt[e],p=n[a],j=null!==(s=l[a])&&void 0!==s?s:f[a],y=Object(rt.c)(j),g=a===c?p.isActive:null;!1===g&&(m=e);var O=j===f[a]&&j!==l[a]&&y;if(O&&i&&t.manuallyAnimateOnMount&&(O=!1),p.protectedKeys=Object(r.a)({},b),!p.isActive&&null===g||!j&&!p.prevProp||Object(K.a)(j)||"boolean"===typeof j)return"continue";var h=function(t,e){if("string"===typeof e)return e!==t;if(Object(rt.d)(e))return!X(e,t);return!1}(p.prevProp,j)||a===c&&p.isActive&&!O&&y||e>m&&y,A=Array.isArray(j)?j:[j],T=A.reduce(o,{});!1===g&&(T={});var x=p.prevResolvedValues,P=void 0===x?{}:x,V=Object(r.a)(Object(r.a)({},P),T),E=function(t){h=!0,v.delete(t),p.needsAnimating[t]=!0};for(var S in V){var L=T[S],R=P[S];b.hasOwnProperty(S)||(L!==R?Object(W.a)(L)&&Object(W.a)(R)?X(L,R)?p.protectedKeys[S]=!0:E(S):void 0!==L?E(S):v.add(S):void 0!==L&&v.has(S)?E(S):p.protectedKeys[S]=!0)}p.prevProp=j,p.prevResolvedValues=T,p.isActive&&(b=Object(r.a)(Object(r.a)({},b),T)),i&&t.blockInitialAnimation&&(h=!1),h&&!O&&d.push.apply(d,Object(r.e)([],Object(r.c)(A.map((function(t){return{animation:t,options:Object(r.a)({type:a},u)}})))))},j=0;j<bt;j++)p(j);if(a=Object(r.a)({},b),v.size){var y={};v.forEach((function(e){var n=t.getBaseTarget(e);void 0!==n&&(y[e]=n)})),d.push({animation:y})}var g=Boolean(d.length);return i&&!1===l.initial&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(d):Promise.resolve()}return{isAnimated:function(t){return void 0!==a[t]},animateChanges:u,setActive:function(e,r,a){var i;return n[e].isActive===r?Promise.resolve():(null===(i=t.variantChildren)||void 0===i||i.forEach((function(t){var n;return null===(n=t.animationState)||void 0===n?void 0:n.setActive(e,r)})),n[e].isActive=r,u(a,e))},setAnimateFunction:function(n){e=n(t)},getState:function(){return n}}}function jt(t){return void 0===t&&(t=!1),{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var yt={animation:d((function(t){var e=t.visualElement,n=t.animate;e.animationState||(e.animationState=pt(e)),Object(K.a)(n)&&Object(a.useEffect)((function(){return n.subscribe(e)}),[n])})),exit:d((function(t){var e=t.custom,n=t.visualElement,i=Object(r.c)(Object(y.b)(),2),o=i[0],u=i[1],c=Object(a.useContext)($.a);Object(a.useEffect)((function(){var t,r,a=null===(t=n.animationState)||void 0===t?void 0:t.setActive(ft.a.Exit,!o,{custom:null!==(r=null===c||void 0===c?void 0:c.custom)&&void 0!==r?r:e});!o&&(null===a||void 0===a||a.then(u))}),[o])}))},gt=n(64);var Ot=n(63),ht=n(106);function At(t,e,n){return function(r,a){var i;Object(Ot.a)(r)&&!Object(ht.b)()&&(null===n||void 0===n||n(r,a),null===(i=t.animationState)||void 0===i||i.setActive(ft.a.Hover,e))}}var Tt=function t(e,n){return!!n&&(e===n||t(e,n.parentElement))},xt=n(69);var Pt={tap:d((function(t){var e=t.onTap,n=t.onTapStart,r=t.onTapCancel,i=t.whileTap,o=t.visualElement,u=e||n||r||i,c=Object(a.useRef)(!1),f=Object(a.useRef)(null);function d(){var t;null===(t=f.current)||void 0===t||t.call(f),f.current=null}function v(){var t;return d(),c.current=!1,null===(t=o.animationState)||void 0===t||t.setActive(ft.a.Tap,!1),!Object(ht.b)()}function b(t,n){v()&&(Tt(o.getInstance(),t.target)?null===e||void 0===e||e(t,n):null===r||void 0===r||r(t,n))}function m(t,e){v()&&(null===r||void 0===r||r(t,e))}Object(l.b)(o,"pointerdown",u?function(t,e){var r;d(),c.current||(c.current=!0,f.current=Object(xt.a)(Object(l.a)(window,"pointerup",b),Object(l.a)(window,"pointercancel",m)),null===n||void 0===n||n(t,e),null===(r=o.animationState)||void 0===r||r.setActive(ft.a.Tap,!0))}:void 0),Object(s.a)(d)})),focus:d((function(t){var e=t.whileFocus,n=t.visualElement;Object(gt.b)(n,"focus",e?function(){var t;null===(t=n.animationState)||void 0===t||t.setActive(ft.a.Focus,!0)}:void 0),Object(gt.b)(n,"blur",e?function(){var t;null===(t=n.animationState)||void 0===t||t.setActive(ft.a.Focus,!1)}:void 0)})),hover:d((function(t){var e=t.onHoverStart,n=t.onHoverEnd,r=t.whileHover,a=t.visualElement;Object(l.b)(a,"pointerenter",e||r?At(a,!0,e):void 0),Object(l.b)(a,"pointerleave",n||r?At(a,!1,n):void 0)}))},Vt=n(11),Et=n(107),St=n(108),Lt=n(30);function Rt(){return{isHydrated:!1,layout:Object(g.a)(),layoutCorrected:Object(g.a)(),treeScale:{x:1,y:1},delta:Object(g.e)(),deltaFinal:Object(g.e)(),deltaTransform:""}}var Ct=Rt();function wt(t,e,n){var r=t.x,a=t.y,i="translate3d("+r.translate/e.x+"px, "+a.translate/e.y+"px, 0) ";if(n){var o=n.rotate,u=n.rotateX,c=n.rotateY;o&&(i+="rotate("+o+") "),u&&(i+="rotateX("+u+") "),c&&(i+="rotateY("+c+") ")}return i+="scale("+r.scale+", "+a.scale+")",n||i!==Ft?i:""}function Bt(t){var e=t.deltaFinal;return 100*e.x.origin+"% "+100*e.y.origin+"% 0"}var Ft=wt(Ct.delta,Ct.treeScale,{x:1,y:1}),kt=n(87),Mt=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];var Ht=n(94),Ut=n(77),Dt=function(){function t(){this.children=[],this.isDirty=!1}return t.prototype.add=function(t){Object(Ht.a)(this.children,t),this.isDirty=!0},t.prototype.remove=function(t){Object(Ht.b)(this.children,t),this.isDirty=!0},t.prototype.forEach=function(t){this.isDirty&&this.children.sort(Ut.a),this.isDirty=!1,this.children.forEach(t)},t}();var It=n(118),Nt=function(t){var e=t.treeType,n=void 0===e?"":e,a=t.build,i=t.getBaseTarget,o=t.makeTargetAnimatable,u=t.measureViewportBox,c=t.render,s=t.readValueFromInstance,l=t.resetTransform,f=t.restoreTransform,d=t.removeValueFromRenderState,v=t.sortNodePosition,m=t.scrapeMotionValuesFromProps;return function(t,e){var y=t.parent,O=t.props,h=t.presenceId,A=t.blockInitialAnimation,T=t.visualState;void 0===e&&(e={});var x,P,V,E,S,L,R=T.latestValues,C=T.renderState,w=function(){var t=Mt.map((function(){return new kt.a})),e={},n={clearAllListeners:function(){return t.forEach((function(t){return t.clear()}))},updatePropListeners:function(t){return Mt.forEach((function(r){var a;null===(a=e[r])||void 0===a||a.call(e);var i="on"+r,o=t[i];o&&(e[r]=n[i](o))}))}};return t.forEach((function(t,e){n["on"+Mt[e]]=function(e){return t.add(e)},n["notify"+Mt[e]]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.notify.apply(t,Object(r.e)([],Object(r.c)(e)))}})),n}(),B={isEnabled:!1,isHydrated:!1,isTargetLocked:!1,target:Object(g.a)(),targetFinal:Object(g.a)()},F=B,k=R,M=Rt(),H=!1,U=new Map,D=new Map,I={},N=Object(r.a)({},R);function z(){x&&(G.isProjectionReady()&&(Object(Et.a)(F.targetFinal,F.target,k),Object(St.c)(M.deltaFinal,M.layoutCorrected,F.targetFinal,R)),K(),c(x,C))}function K(){var t=R;if(E&&E.isActive()){var n=E.getCrossfadeState(G);n&&(t=n)}a(G,C,t,F,M,e,O)}function $(){w.notifyUpdate(R)}function W(){G.layoutTree.forEach(Kt)}var X=m(O);for(var Y in X){var J=X[Y];void 0!==R[Y]&&Object(Lt.a)(J)&&J.set(R[Y],!1)}var Z=Object(rt.a)(O),q=Object(rt.b)(O),G=Object(r.a)(Object(r.a)({treeType:n,current:null,depth:y?y.depth+1:0,parent:y,children:new Set,path:y?Object(r.e)(Object(r.e)([],Object(r.c)(y.path)),[y]):[],layoutTree:y?y.layoutTree:new Dt,presenceId:h,projection:B,variantChildren:q?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null===y||void 0===y?void 0:y.isMounted()),blockInitialAnimation:A,isMounted:function(){return Boolean(x)},mount:function(t){x=G.current=t,G.pointTo(G),q&&y&&!Z&&(L=null===y||void 0===y?void 0:y.addVariantChild(G)),null===y||void 0===y||y.children.add(G)},unmount:function(){Vt.a.update($),Vt.a.render(z),Vt.a.preRender(G.updateLayoutProjection),D.forEach((function(t){return t()})),G.stopLayoutAnimation(),G.layoutTree.remove(G),null===L||void 0===L||L(),null===y||void 0===y||y.children.delete(G),null===V||void 0===V||V(),w.clearAllListeners()},addVariantChild:function(t){var e,n=G.getClosestVariantNode();if(n)return null===(e=n.variantChildren)||void 0===e||e.add(t),function(){return n.variantChildren.delete(t)}},sortNodePosition:function(t){return v&&n===t.treeType?v(G.getInstance(),t.getInstance()):0},getClosestVariantNode:function(){return q?G:null===y||void 0===y?void 0:y.getClosestVariantNode()},scheduleUpdateLayoutProjection:y?y.scheduleUpdateLayoutProjection:function(){return Vt.b.preRender(G.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return O.layoutId},getInstance:function(){return x},getStaticValue:function(t){return R[t]},setStaticValue:function(t,e){return R[t]=e},getLatestValues:function(){return R},setVisibility:function(t){G.isVisible!==t&&(G.isVisible=t,G.scheduleRender())},makeTargetAnimatable:function(t,e){return void 0===e&&(e=!0),o(G,t,O,e)},addValue:function(t,e){G.hasValue(t)&&G.removeValue(t),U.set(t,e),R[t]=e.get(),function(t,e){var n=e.onChange((function(e){R[t]=e,O.onUpdate&&Vt.b.update($,!1,!0)})),r=e.onRenderRequest(G.scheduleRender);D.set(t,(function(){n(),r()}))}(t,e)},removeValue:function(t){var e;U.delete(t),null===(e=D.get(t))||void 0===e||e(),D.delete(t),delete R[t],d(t,C)},hasValue:function(t){return U.has(t)},getValue:function(t,e){var n=U.get(t);return void 0===n&&void 0!==e&&(n=Object(_.a)(e),G.addValue(t,n)),n},forEachValue:function(t){return U.forEach(t)},readValue:function(t){var n;return null!==(n=R[t])&&void 0!==n?n:s(x,t,e)},setBaseTarget:function(t,e){N[t]=e},getBaseTarget:function(t){if(i){var e=i(O,t);if(void 0!==e&&!Object(Lt.a)(e))return e}return N[t]}},w),{build:function(){return K(),C},scheduleRender:function(){Vt.b.render(z,!1,!0)},syncRender:z,setProps:function(t){O=t,w.updatePropListeners(t),I=function(t,e,n){var r;for(var a in e){var i=e[a],o=n[a];if(Object(Lt.a)(i))t.addValue(a,i);else if(Object(Lt.a)(o))t.addValue(a,Object(_.a)(i));else if(o!==i)if(t.hasValue(a)){var u=t.getValue(a);!u.hasAnimated&&u.set(i)}else t.addValue(a,Object(_.a)(null!==(r=t.getStaticValue(a))&&void 0!==r?r:i))}for(var a in n)void 0===e[a]&&t.removeValue(a);return e}(G,m(O),I)},getProps:function(){return O},getVariant:function(t){var e;return null===(e=O.variants)||void 0===e?void 0:e[t]},getDefaultTransition:function(){return O.transition},getVariantContext:function(t){if(void 0===t&&(t=!1),t)return null===y||void 0===y?void 0:y.getVariantContext();if(!Z){var e=(null===y||void 0===y?void 0:y.getVariantContext())||{};return void 0!==O.initial&&(e.initial=O.initial),e}for(var n={},r=0;r<Xt;r++){var a=Wt[r],i=O[a];(Object(rt.c)(i)||!1===i)&&(n[a]=i)}return n},enableLayoutProjection:function(){B.isEnabled=!0,G.layoutTree.add(G)},lockProjectionTarget:function(){B.isTargetLocked=!0},unlockProjectionTarget:function(){G.stopLayoutAnimation(),B.isTargetLocked=!1},getLayoutState:function(){return M},setCrossfader:function(t){E=t},isProjectionReady:function(){return B.isEnabled&&B.isHydrated&&M.isHydrated},startLayoutAnimation:function(t,e,n){void 0===n&&(n=!1);var r=G.getProjectionAnimationProgress()[t],a=n?B.relativeTarget[t]:B.target[t],i=a.min,o=a.max-i;return r.clearListeners(),r.set(i),r.set(i),r.onChange((function(e){G.setProjectionTargetAxis(t,e,e+o,n)})),G.animateMotionValue(t,r,0,e)},stopLayoutAnimation:function(){Object(b.a)((function(t){return G.getProjectionAnimationProgress()[t].stop()}))},measureViewportBox:function(t){void 0===t&&(t=!0);var n=u(x,e);return t||Object(Et.c)(n,R),n},getProjectionAnimationProgress:function(){return S||(S={x:Object(_.a)(0),y:Object(_.a)(0)}),S},setProjectionTargetAxis:function(t,e,n,r){var a;void 0===r&&(r=!1),r?(B.relativeTarget||(B.relativeTarget=Object(g.a)()),a=B.relativeTarget[t]):(B.relativeTarget=void 0,a=B.target[t]),B.isHydrated=!0,a.min=e,a.max=n,H=!0,w.notifySetAxisTarget()},rebaseProjectionTarget:function(t,e){void 0===e&&(e=M.layout);var n=G.getProjectionAnimationProgress(),r=n.x,a=n.y,i=!B.relativeTarget&&!B.isTargetLocked&&!r.isAnimating()&&!a.isAnimating();(t||i)&&Object(b.a)((function(t){var n=e[t],r=n.min,a=n.max;G.setProjectionTargetAxis(t,r,a)}))},notifyLayoutReady:function(t){!function(t){var e=t.getProjectionParent();if(e){var n=Object(p.a)(e.getLayoutState().layout,t.getLayoutState().layout);Object(b.a)((function(e){t.setProjectionTargetAxis(e,n[e].min,n[e].max,!0)}))}else t.rebaseProjectionTarget()}(G),G.notifyLayoutUpdate(M.layout,G.prevViewportBox||M.layout,t)},resetTransform:function(){return l(G,x,O)},restoreTransform:function(){return f(x,C)},updateLayoutProjection:function(){if(G.isProjectionReady()){var t=M.delta,e=M.treeScale,n=e.x,r=e.y,a=M.deltaTransform;!function(t,e,n,r){var a=t.delta,i=t.layout,o=t.layoutCorrected,u=t.treeScale,c=e.target;Object(Et.d)(o,i),Object(Et.b)(o,u,n),Object(St.c)(a,o,c,r)}(M,F,G.path,R),H&&G.notifyViewportBoxUpdate(F.target,t),H=!1;var i=wt(t,e);i===a&&n===e.x&&r===e.y||G.scheduleRender(),M.deltaTransform=i}},updateTreeLayoutProjection:function(){G.layoutTree.forEach(zt),Vt.b.preRender(W,!1,!0)},getProjectionParent:function(){if(void 0===P){for(var t=!1,e=G.path.length-1;e>=0;e--){var n=G.path[e];if(n.projection.isEnabled){t=n;break}}P=t}return P},resolveRelativeTargetBox:function(){var t=G.getProjectionParent();if(B.relativeTarget&&t&&(Object(St.b)(B,t.projection),Object(It.a)(t))){var e=B.target;Object(Et.a)(e,e,t.getLatestValues())}},shouldResetTransform:function(){return Boolean(O._layoutResetTransform)},pointTo:function(t){F=t.projection,k=t.getLatestValues(),null===V||void 0===V||V(),V=Object(xt.a)(t.onSetAxisTarget(G.scheduleUpdateLayoutProjection),t.onLayoutAnimationComplete((function(){var t;G.isPresent?G.presence=j.a.Present:null===(t=G.layoutSafeToRemove)||void 0===t||t.call(G)})))},isPresent:!0,presence:j.a.Entering});return G}};function zt(t){t.resolveRelativeTargetBox()}function Kt(t){t.updateLayoutProjection()}var $t,Wt=Object(r.e)(["initial"],Object(r.c)(dt)),Xt=Wt.length,Yt=n(117),_t=n(79),Jt=n(111),Zt=n(26),qt=new Set(["width","height","top","left","right","bottom","x","y"]),Gt=function(t){return qt.has(t)},Qt=function(t,e){t.set(e,!1),t.set(e)},te=function(t){return t===q.b||t===h.d};!function(t){t.width="width",t.height="height",t.left="left",t.right="right",t.top="top",t.bottom="bottom"}($t||($t={}));var ee=function(t,e){return parseFloat(t.split(", ")[e])},ne=function(t,e){return function(n,r){var a=r.transform;if("none"===a||!a)return 0;var i=a.match(/^matrix3d\((.+)\)$/);if(i)return ee(i[1],e);var o=a.match(/^matrix\((.+)\)$/);return o?ee(o[1],t):0}},re=new Set(["x","y","z"]),ae=Zt.e.filter((function(t){return!re.has(t)}));var ie={width:function(t){var e=t.x;return e.max-e.min},height:function(t){var e=t.y;return e.max-e.min},top:function(t,e){var n=e.top;return parseFloat(n)},left:function(t,e){var n=e.left;return parseFloat(n)},bottom:function(t,e){var n=t.y,r=e.top;return parseFloat(r)+(n.max-n.min)},right:function(t,e){var n=t.x,r=e.left;return parseFloat(r)+(n.max-n.min)},x:ne(4,13),y:ne(5,14)},oe=function(t,e,n,a){void 0===n&&(n={}),void 0===a&&(a={}),e=Object(r.a)({},e),a=Object(r.a)({},a);var i=Object.keys(e).filter(Gt),o=[],u=!1,c=[];if(i.forEach((function(r){var i=t.getValue(r);if(t.hasValue(r)){var s,l=n[r],f=e[r],d=tt(l);if(Object(W.a)(f))for(var v=f.length,b=null===f[0]?1:0;b<v;b++)s?Object(x.a)(tt(f[b])===s,"All keyframes must be of the same type"):(s=tt(f[b]),Object(x.a)(s===d||te(d)&&te(s),"Keyframes must be of the same dimension as the current value"));else s=tt(f);if(d!==s)if(te(d)&&te(s)){var m=i.get();"string"===typeof m&&i.set(parseFloat(m)),"string"===typeof f?e[r]=parseFloat(f):Array.isArray(f)&&s===h.d&&(e[r]=f.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===s||void 0===s?void 0:s.transform)&&(0===l||0===f)?0===l?i.set(s.transform(l)):e[r]=d.transform(f):(u||(o=function(t){var e=[];return ae.forEach((function(n){var r=t.getValue(n);void 0!==r&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),e.length&&t.syncRender(),e}(t),u=!0),c.push(r),a[r]=void 0!==a[r]?a[r]:e[r],Qt(i,f))}})),c.length){var s=function(t,e,n){var r=e.measureViewportBox(),a=e.getInstance(),i=getComputedStyle(a),o=i.display,u={top:i.top,left:i.left,bottom:i.bottom,right:i.right,transform:i.transform};"none"===o&&e.setStaticValue("display",t.display||"block"),e.syncRender();var c=e.measureViewportBox();return n.forEach((function(n){var a=e.getValue(n);Qt(a,ie[n](r,u)),t[n]=ie[n](c,i)})),t}(e,t,c);return o.length&&o.forEach((function(e){var n=Object(r.c)(e,2),a=n[0],i=n[1];t.getValue(a).set(i)})),t.syncRender(),{target:s,transitionEnd:a}}return{target:e,transitionEnd:a}};function ue(t,e,n,r){return function(t){return Object.keys(t).some(Gt)}(e)?oe(t,e,n,r):{target:e,transitionEnd:r}}var ce=function(t,e,n,a){var i=function(t,e,n){var a,i=Object(r.d)(e,[]),o=t.getInstance();if(!(o instanceof HTMLElement))return{target:i,transitionEnd:n};for(var u in n&&(n=Object(r.a)({},n)),t.forEachValue((function(t){var e=t.get();if(P(e)){var n=E(e,o);n&&t.set(n)}})),i){var c=i[u];if(P(c)){var s=E(c,o);s&&(i[u]=s,n&&(null!==(a=n[u])&&void 0!==a||(n[u]=c)))}}return{target:i,transitionEnd:n}}(t,e,a);return ue(t,e=i.target,n,a=i.transitionEnd)},se=n(76),le=n(113),fe=n(105);var de={treeType:"dom",readValueFromInstance:function(t,e){if(Object(Zt.b)(e)){var n=Object(fe.a)(e);return n&&n.default||0}var r,a=(r=t,window.getComputedStyle(r));return(Object(Jt.a)(e)?a.getPropertyValue(e):a[e])||0},sortNodePosition:function(t,e){return 2&t.compareDocumentPosition(e)?1:-1},getBaseTarget:function(t,e){var n;return null===(n=t.style)||void 0===n?void 0:n[e]},measureViewportBox:function(t,e){var n=e.transformPagePoint;return Object(Yt.a)(t,n)},resetTransform:function(t,e,n){var r=n.transformTemplate;e.style.transform=r?r({},""):"none",t.scheduleRender()},restoreTransform:function(t,e){t.style.transform=e.style.transform},removeValueFromRenderState:function(t,e){var n=e.vars,r=e.style;delete n[t],delete r[t]},makeTargetAnimatable:function(t,e,n,a){var i=n.transformValues;void 0===a&&(a=!0);var o=e.transition,u=e.transitionEnd,c=Object(r.d)(e,["transition","transitionEnd"]),s=function(t,e,n){var r,a,i={};for(var o in t)i[o]=null!==(r=ot(o,e))&&void 0!==r?r:null===(a=n.getValue(o))||void 0===a?void 0:a.get();return i}(c,o||{},t);if(i&&(u&&(u=i(u)),c&&(c=i(c)),s&&(s=i(s))),a){!function(t,e,n){var r,a,i,o,u=Object.keys(e).filter((function(e){return!t.hasValue(e)})),c=u.length;if(c)for(var s=0;s<c;s++){var l=u[s],f=e[l],d=null;Array.isArray(f)&&(d=f[0]),null===d&&(d=null!==(a=null!==(r=n[l])&&void 0!==r?r:t.readValue(l))&&void 0!==a?a:e[l]),void 0!==d&&null!==d&&("string"===typeof d&&/^\-?\d*\.?\d+$/.test(d)?d=parseFloat(d):!nt(d)&&A.a.test(f)&&(d=Object(J.a)(l,f)),t.addValue(l,Object(_.a)(d)),null!==(i=(o=n)[l])&&void 0!==i||(o[l]=d),t.setBaseTarget(l,d))}}(t,c,s);var l=ce(t,c,s,u);u=l.transitionEnd,c=l.target}return Object(r.a)({transition:o,transitionEnd:u},c)},scrapeMotionValuesFromProps:se.a,build:function(t,e,n,r,a,i,o){void 0!==t.isVisible&&(e.style.visibility=t.isVisible?"visible":"hidden");var u=r.isEnabled&&a.isHydrated;Object(_t.a)(e,n,r,a,i,o.transformTemplate,u?wt:void 0,u?Bt:void 0)},render:le.a},ve=Nt(de),be=n(110),me=n(78),pe=n(115),je=n(114),ye=n(112),ge=Nt(Object(r.a)(Object(r.a)({},de),{getBaseTarget:function(t,e){return t[e]},readValueFromInstance:function(t,e){var n;return Object(Zt.b)(e)?(null===(n=Object(fe.a)(e))||void 0===n?void 0:n.default)||0:(e=je.a.has(e)?e:Object(pe.a)(e),t.getAttribute(e))},scrapeMotionValuesFromProps:be.a,build:function(t,e,n,r,a,i,o){var u=r.isEnabled&&a.isHydrated;Object(me.a)(e,n,r,a,i,o.transformTemplate,u?wt:void 0,u?Bt:void 0)},render:ye.a})),Oe=n(80),he=Object(r.a)(Object(r.a)({renderer:function(t,e){return Object(Oe.a)(t)?ge(e,{enableHardwareAcceleration:!1}):ve(e,{enableHardwareAcceleration:!0})}},yt),Pt),Ae=Object(r.a)(Object(r.a)(Object(r.a)({},he),v),z)}}]);
//# sourceMappingURL=4.3668e882.chunk.js.map