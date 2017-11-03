// Compiled by ClojureScript 1.9.908 {}
goog.provide('reanimated.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.dom');
reanimated.core.now = (function reanimated$core$now(){
return (new Date());
});
/**
 * Calculates a value between a and b relative to t in duration.
 */
reanimated.core.interpolate = (function reanimated$core$interpolate(a,b,duration,t){
if((t <= (0))){
return a;
} else {
if((t >= duration)){
return b;
} else {
return (a + ((t * (b - a)) / duration));

}
}
});
/**
 * Wraps a component to animate creation and destruction.
 *   Takes a condition ratom and a vector or value to be rendered.
 *   Options can contain duration (milliseconds)
 *   and easing (a function that takes a b duration t).
 */
reanimated.core.pop_when = (function reanimated$core$pop_when(var_args){
var G__36935 = arguments.length;
switch (G__36935) {
case 2:
return reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2 = (function (condition,then){
return reanimated.core.pop_when.call(null,condition,then,cljs.core.PersistentArrayMap.EMPTY);
});

reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3 = (function (condition,then,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),condition], null));
return ((function (anim){
return (function reanimated$core$a_pop_when(condition__$1,then__$1,options__$1){
if(cljs.core.not_EQ_.call(null,condition__$1,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),condition__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var map__36936 = options__$1;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var duration = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
var t = (reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
reagent.core.next_tick.call(null,((function (map__36936,map__36936__$1,duration,easing,t,scale,scale__$1,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__36936,map__36936__$1,duration,easing,t,scale,scale__$1,anim))
);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale__$1),")"].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),scale__$1], null)], null),then__$1], null);
} else {
if(cljs.core.truth_(condition__$1)){
return then__$1;
} else {
return null;
}
}
});
;})(anim))
});

reanimated.core.pop_when.cljs$lang$maxFixedArity = 3;

/**
 * Creates an event handler that will toggle a given ratom.
 */
reanimated.core.toggle_handler = (function reanimated$core$toggle_handler(ratom){
return (function reanimated$core$toggle_handler_$_a_toggle_handler(e){
cljs.core.swap_BANG_.call(null,ratom,cljs.core.not);

return e;
});
});
/**
 * Returns a map suitable for merging with component properties,
 *   that will keep a given ratom updated with the mouseover status.
 */
reanimated.core.mouse_watcher = (function reanimated$core$mouse_watcher(ratom){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function reanimated$core$mouse_watcher_$_timeline_mouse_over(e){
cljs.core.reset_BANG_.call(null,ratom,true);

return e;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function reanimated$core$mouse_watcher_$_timeline_mouse_out(e){
cljs.core.reset_BANG_.call(null,ratom,false);

return e;
})], null);
});
/**
 * Interpolates between two values when the conditon changes.
 *   Takes a condition ratom to watch, and 2 vectors or values to render.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_if = (function reanimated$core$interpolate_if(var_args){
var G__36940 = arguments.length;
switch (G__36940) {
case 3:
return reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return reanimated.core.interpolate_if.call(null,condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
});

reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),a], null));
var map__36941 = options;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36941):map__36941);
var duration = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__36941,map__36941__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now.call(null),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"from","from",1815293044),a,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var t = (reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(cljs.core.deref.call(null,condition))?scale:((1) - scale));
if((t < duration)){
reagent.core.next_tick.call(null,((function (t,scale,scale__$1,anim,map__36941,map__36941__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(t,scale,scale__$1,anim,map__36941,map__36941__$1,duration,easing))
);

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,condition))){
return b;
} else {
return a;
}
}
});})(anim,map__36941,map__36941__$1,duration,easing))
);
});

reanimated.core.interpolate_if.cljs$lang$maxFixedArity = 4;

/**
 * Interpolates toward new values.
 *   Takes a ratom which stores a numeric value.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_to = (function reanimated$core$interpolate_to(var_args){
var G__36945 = arguments.length;
switch (G__36945) {
case 1:
return reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reanimated.core.interpolate_to.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now.call(null)], null));
var map__36946 = options;
var map__36946__$1 = ((((!((map__36946 == null)))?((((map__36946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36946):map__36946);
var duration = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__36946,map__36946__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),cljs.core.deref.call(null,x))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now.call(null),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var t = (reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var a = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim));
var b = cljs.core.deref.call(null,x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
reagent.core.next_tick.call(null,((function (at,t,scale,a,b,anim,map__36946,map__36946__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)) + (1)));
});})(at,t,scale,a,b,anim,map__36946,map__36946__$1,duration,easing))
);

return at;
} else {
return b;
}
});})(anim,map__36946,map__36946__$1,duration,easing))
);
});

reanimated.core.interpolate_to.cljs$lang$maxFixedArity = 2;

/**
 * Interpolates the argument of a component to x.
 *   Will call the given component with values approaching x.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
reanimated.core.interpolate_arg = (function reanimated$core$interpolate_arg(var_args){
var G__36950 = arguments.length;
switch (G__36950) {
case 2:
return reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2 = (function (component,x){
return reanimated.core.interpolate_arg.call(null,component,x,cljs.core.PersistentArrayMap.EMPTY);
});

reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3 = (function (component,x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"to","to",192099007),x,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"current","current",-1088038603),x], null));
return ((function (anim){
return (function reanimated$core$an_interpolate_arg(component__$1,x__$1,options__$1){
if(cljs.core.not_EQ_.call(null,x__$1,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),reanimated.core.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"to","to",192099007),x__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var map__36951 = options__$1;
var map__36951__$1 = ((((!((map__36951 == null)))?((((map__36951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36951):map__36951);
var easing = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"easing","easing",735372043),reanimated.core.interpolate);
var duration = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var t = (reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
if((t < duration)){
reagent.core.next_tick.call(null,((function (map__36951,map__36951__$1,easing,duration,t,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__36951,map__36951__$1,easing,duration,t,anim))
);

var i = easing.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),x__$1,duration,t);
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),i);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,x__$1], null);
}
});
;})(anim))
});

reanimated.core.interpolate_arg.cljs$lang$maxFixedArity = 3;

reanimated.core.mass = (10);
reanimated.core.stiffness = (1);
reanimated.core.damping = (1);
/**
 * This is where the spring physics formula is applied.
 */
reanimated.core.evaluate = (function reanimated$core$evaluate(x2,dt,x,v,a,p__36954){
var map__36955 = p__36954;
var map__36955__$1 = ((((!((map__36955 == null)))?((((map__36955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36955):map__36955);
var mass = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var stiffness = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962));
var damping = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"damping","damping",1054389681));
var x__$1 = (x + (v * dt));
var v__$1 = (v + (a * dt));
var f = ((stiffness * (x2 - x__$1)) - (damping * v__$1));
var a__$1 = (f / mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,a__$1], null);
});
/**
 * Takes an itegration step from numbers x to x2 over time dt,
 *   with a present velocity v.
 */
reanimated.core.integrate_rk4 = (function reanimated$core$integrate_rk4(x2,dt,x,v,options){
var dt2 = (dt * 0.5);
var vec__36957 = reanimated.core.evaluate.call(null,x2,0.0,x,v,0.0,options);
var av = cljs.core.nth.call(null,vec__36957,(0),null);
var aa = cljs.core.nth.call(null,vec__36957,(1),null);
var vec__36960 = reanimated.core.evaluate.call(null,x2,dt2,x,av,aa,options);
var bv = cljs.core.nth.call(null,vec__36960,(0),null);
var ba = cljs.core.nth.call(null,vec__36960,(1),null);
var vec__36963 = reanimated.core.evaluate.call(null,x2,dt2,x,bv,ba,options);
var cv = cljs.core.nth.call(null,vec__36963,(0),null);
var ca = cljs.core.nth.call(null,vec__36963,(1),null);
var vec__36966 = reanimated.core.evaluate.call(null,x2,dt,x,cv,ca,options);
var dv = cljs.core.nth.call(null,vec__36966,(0),null);
var da = cljs.core.nth.call(null,vec__36966,(1),null);
var dx = (((av + (2.0 * (bv + cv))) + dv) / 6.0);
var dv__$1 = (((aa + (2.0 * (ba + ca))) + da) / 6.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dx * dt)),(v + (dv__$1 * dt))], null);
});
reanimated.core.small = (function reanimated$core$small(x){
return ((-0.1 < x)) && ((x < 0.1));
});
/**
 * Useful for wrapping a value in your component to make it springy.
 *   Returns a reaction that will take values approaching x2,
 *   updating every time Reagent calls requestAnimationFrame.
 *   Integrates a physical spring simulation for each step.
 *   Options can contain:
 *   from - a value to start from (initial value is used if absent).
 *   velocity of the mass on the spring (initially 0 if absent).
 *   mass, stiffness, damping of the spring.
 */
reanimated.core.spring = (function reanimated$core$spring(var_args){
var G__36970 = arguments.length;
switch (G__36970) {
case 1:
return reanimated.core.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reanimated.core.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reanimated.core.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return reanimated.core.spring.call(null,x2,cljs.core.PersistentArrayMap.EMPTY);
});

reanimated.core.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__36971 = options;
var map__36971__$1 = ((((!((map__36971 == null)))?((((map__36971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36971):map__36971);
var from = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x2));
var velocity = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0));
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),reanimated.core.now.call(null),new cljs.core.Keyword(null,"x","x",2099068185),from,new cljs.core.Keyword(null,"v","v",21465059),velocity], null));
return reagent.ratom.make_reaction.call(null,((function (map__36971,map__36971__$1,from,velocity,anim){
return (function (){
var map__36973 = cljs.core.deref.call(null,anim);
var map__36973__$1 = ((((!((map__36973 == null)))?((((map__36973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36973):map__36973);
var x = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var v = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var t2 = reanimated.core.now.call(null);
var dt = (function (){var x__28496__auto__ = (1);
var y__28497__auto__ = ((t2 - t) / 10.0);
return ((x__28496__auto__ < y__28497__auto__) ? x__28496__auto__ : y__28497__auto__);
})();
if(cljs.core.truth_((function (){var and__28127__auto__ = reanimated.core.small.call(null,(x - cljs.core.deref.call(null,x2)));
if(cljs.core.truth_(and__28127__auto__)){
return reanimated.core.small.call(null,v);
} else {
return and__28127__auto__;
}
})())){
return cljs.core.deref.call(null,x2);
} else {
var vec__36975 = reanimated.core.integrate_rk4.call(null,cljs.core.deref.call(null,x2),dt,x,v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),reanimated.core.mass,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),reanimated.core.stiffness,new cljs.core.Keyword(null,"damping","damping",1054389681),reanimated.core.damping], null));
var x__$1 = cljs.core.nth.call(null,vec__36975,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__36975,(1),null);
reagent.core.next_tick.call(null,((function (vec__36975,x__$1,v__$1,map__36973,map__36973__$1,x,v,t,t2,dt,map__36971,map__36971__$1,from,velocity,anim){
return (function (){
return cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t2,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
});})(vec__36975,x__$1,v__$1,map__36973,map__36973__$1,x,v,t,t2,dt,map__36971,map__36971__$1,from,velocity,anim))
);

return x__$1;
}
});})(map__36971,map__36971__$1,from,velocity,anim))
);
});

reanimated.core.spring.cljs$lang$maxFixedArity = 2;

/**
 * Watch a ref only while mounted in the DOM.
 */
reanimated.core.watch = (function reanimated$core$watch(r,f){
var k = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"watch"));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"watch",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (k){
return (function reanimated$core$watch_$_watch_did_mount(this$){
return cljs.core.add_watch.call(null,r,k,f);
});})(k))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (k){
return (function reanimated$core$watch_$_watch_will_unmount(this$){
return cljs.core.remove_watch.call(null,r,k);
});})(k))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (k){
return (function reanimated$core$watch_$_watch_render(r__$1,f__$1){
return null;
});})(k))
], null));
});
/**
 * Call function f every period t while mounted in the DOM.
 */
reanimated.core.interval = (function reanimated$core$interval(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function reanimated$core$interval_$_interval_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setInterval(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function reanimated$core$interval_$_interval_will_unmount(this$){
return clearInterval(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function reanimated$core$interval_$_interval_render(){
return null;
});})(id))
], null));
});
/**
 * Call function f period t in milliseconds after being mounted in the DOM,
 *   only if still mounted.
 */
reanimated.core.timeout = (function reanimated$core$timeout(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"timeout",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function reanimated$core$timeout_$_timeout_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setTimeout(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function reanimated$core$timeout_$_timeout_will_unmount(this$){
return clearTimeout(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function reanimated$core$timeout_$_timeout_render(){
return null;
});})(id))
], null));
});
/**
 * Use timeline instead of this function directly.
 *   Provides a way to express a sequence of actions and pauses.
 *   Takes an id atom, element ratom,
 *   and a sequence of numbers and/or callback functions and/or vectors.
 *   Treats numbers as a wait timeout in milliseconds,
 *   calls callbacks after the elapsed time.
 *   id is reset as the timeout reference for cleanup.
 *   element is reset to vectors for rendering. 
 */
reanimated.core.and_then = (function reanimated$core$and_then(var_args){
var args__29315__auto__ = [];
var len__29308__auto___36983 = arguments.length;
var i__29309__auto___36984 = (0);
while(true){
if((i__29309__auto___36984 < len__29308__auto___36983)){
args__29315__auto__.push((arguments[i__29309__auto___36984]));

var G__36985 = (i__29309__auto___36984 + (1));
i__29309__auto___36984 = G__36985;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic = (function (id,element,x,more){
if(typeof x === 'number'){
if(cljs.core.seq.call(null,more)){
return cljs.core.reset_BANG_.call(null,id,setTimeout((function (){
return cljs.core.apply.call(null,reanimated.core.and_then,id,element,more);
}),x));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
cljs.core.reset_BANG_.call(null,element,x);

if(cljs.core.seq.call(null,more)){
return cljs.core.apply.call(null,reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
if((cljs.core.ifn_QMARK_.call(null,x)) && (!(cljs.core.coll_QMARK_.call(null,x))) && (!(cljs.core.map_QMARK_.call(null,x)))){
x.call(null);

if(cljs.core.seq.call(null,more)){
return cljs.core.apply.call(null,reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
return cljs.core.apply.call(null,reanimated.core.and_then,id,element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["timeline encountered unexpected type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.call(null,x)], null)], null),more);

}
}
}
});

reanimated.core.and_then.cljs$lang$maxFixedArity = (3);

reanimated.core.and_then.cljs$lang$applyTo = (function (seq36979){
var G__36980 = cljs.core.first.call(null,seq36979);
var seq36979__$1 = cljs.core.next.call(null,seq36979);
var G__36981 = cljs.core.first.call(null,seq36979__$1);
var seq36979__$2 = cljs.core.next.call(null,seq36979__$1);
var G__36982 = cljs.core.first.call(null,seq36979__$2);
var seq36979__$3 = cljs.core.next.call(null,seq36979__$2);
return reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic(G__36980,G__36981,G__36982,seq36979__$3);
});

/**
 * Given a sequence of inputs, will consume them depending on their type:
 *   numbers will be a sleep in milliseconds
 *   functions will be called with no arguments
 *   vectors will be rendered as reagent components.
 */
reanimated.core.timeline = (function reanimated$core$timeline(var_args){
var args__29315__auto__ = [];
var len__29308__auto___36988 = arguments.length;
var i__29309__auto___36989 = (0);
while(true){
if((i__29309__auto___36989 < len__29308__auto___36988)){
args__29315__auto__.push((arguments[i__29309__auto___36989]));

var G__36990 = (i__29309__auto___36989 + (1));
i__29309__auto___36989 = G__36990;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var id = cljs.core.atom.call(null,null);
var element = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id,element){
return (function reanimated$core$timeout_did_mount(this$){
return cljs.core.apply.call(null,reanimated.core.and_then,id,element,x,xs);
});})(id,element))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id,element){
return (function reanimated$core$timeout_will_unmount(this$){
if(cljs.core.truth_(cljs.core.deref.call(null,id))){
return clearTimeout(cljs.core.deref.call(null,id));
} else {
return null;
}
});})(id,element))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id,element){
return (function reanimated$core$timeout_render(){
return cljs.core.deref.call(null,element);
});})(id,element))
], null));
});

reanimated.core.timeline.cljs$lang$maxFixedArity = (1);

reanimated.core.timeline.cljs$lang$applyTo = (function (seq36986){
var G__36987 = cljs.core.first.call(null,seq36986);
var seq36986__$1 = cljs.core.next.call(null,seq36986);
return reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic(G__36987,seq36986__$1);
});

/**
 * Gets the current document y scroll position.
 */
reanimated.core.get_scroll_y = (function reanimated$core$get_scroll_y(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Gets the current document y scroll position.
 */
reanimated.core.get_scroll = reanimated.core.get_scroll_y;
/**
 * Gets the current document x scroll position.
 */
reanimated.core.get_scroll_x = (function reanimated$core$get_scroll_x(){
return goog.dom.getDocumentScroll().x;
});
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll_y = reagent.core.atom.call(null,reanimated.core.get_scroll_y.call(null));
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll = reanimated.core.scroll_y;
/**
 * A ratom for watching the current document x scroll,
 *   will be updated when there is a scroll event.
 */
reanimated.core.scroll_x = reagent.core.atom.call(null,reanimated.core.get_scroll_x.call(null));
goog.events.listen(window,goog.events.EventType.SCROLL,(function reanimated$core$a_scroll(e){
cljs.core.reset_BANG_.call(null,reanimated.core.scroll_y,reanimated.core.get_scroll_y.call(null));

return cljs.core.reset_BANG_.call(null,reanimated.core.scroll_x,reanimated.core.get_scroll_x.call(null));
}));

//# sourceMappingURL=core.js.map?rel=1509738657653
