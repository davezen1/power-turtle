// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__35273_SHARP_){
return console.log(p1__35273_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__35274_SHARP_){
return console.warn(p1__35274_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__35275_SHARP_){
return console.error(p1__35275_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__35276_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__35276_SHARP_);
} else {
return console.log(p1__35276_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))"].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__29315__auto__ = [];
var len__29308__auto___35278 = arguments.length;
var i__29309__auto___35279 = (0);
while(true){
if((i__29309__auto___35279 < len__29308__auto___35278)){
args__29315__auto__.push((arguments[i__29309__auto___35279]));

var G__35280 = (i__29309__auto___35279 + (1));
i__29309__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq35277){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35277));
});

re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___35282 = arguments.length;
var i__29309__auto___35283 = (0);
while(true){
if((i__29309__auto___35283 < len__29308__auto___35282)){
args__29315__auto__.push((arguments[i__29309__auto___35283]));

var G__35284 = (i__29309__auto___35283 + (1));
i__29309__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq35281){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35281));
});

re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__29315__auto__ = [];
var len__29308__auto___35286 = arguments.length;
var i__29309__auto___35287 = (0);
while(true){
if((i__29309__auto___35287 < len__29308__auto___35286)){
args__29315__auto__.push((arguments[i__29309__auto___35287]));

var G__35288 = (i__29309__auto___35287 + (1));
i__29309__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq35285){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35285));
});

re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__29315__auto__ = [];
var len__29308__auto___35290 = arguments.length;
var i__29309__auto___35291 = (0);
while(true){
if((i__29309__auto___35291 < len__29308__auto___35290)){
args__29315__auto__.push((arguments[i__29309__auto___35291]));

var G__35292 = (i__29309__auto___35291 + (1));
i__29309__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq35289){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35289));
});

re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__29315__auto__ = [];
var len__29308__auto___35294 = arguments.length;
var i__29309__auto___35295 = (0);
while(true){
if((i__29309__auto___35295 < len__29308__auto___35294)){
args__29315__auto__.push((arguments[i__29309__auto___35295]));

var G__35296 = (i__29309__auto___35295 + (1));
i__29309__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq35293){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35293));
});

re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1509738655491
