// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34909__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34910__i = 0, G__34910__a = new Array(arguments.length -  0);
while (G__34910__i < G__34910__a.length) {G__34910__a[G__34910__i] = arguments[G__34910__i + 0]; ++G__34910__i;}
  args = new cljs.core.IndexedSeq(G__34910__a,0,null);
} 
return G__34909__delegate.call(this,args);};
G__34909.cljs$lang$maxFixedArity = 0;
G__34909.cljs$lang$applyTo = (function (arglist__34911){
var args = cljs.core.seq(arglist__34911);
return G__34909__delegate(args);
});
G__34909.cljs$core$IFn$_invoke$arity$variadic = G__34909__delegate;
return G__34909;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34912__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34913__i = 0, G__34913__a = new Array(arguments.length -  0);
while (G__34913__i < G__34913__a.length) {G__34913__a[G__34913__i] = arguments[G__34913__i + 0]; ++G__34913__i;}
  args = new cljs.core.IndexedSeq(G__34913__a,0,null);
} 
return G__34912__delegate.call(this,args);};
G__34912.cljs$lang$maxFixedArity = 0;
G__34912.cljs$lang$applyTo = (function (arglist__34914){
var args = cljs.core.seq(arglist__34914);
return G__34912__delegate(args);
});
G__34912.cljs$core$IFn$_invoke$arity$variadic = G__34912__delegate;
return G__34912;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1509738654645
