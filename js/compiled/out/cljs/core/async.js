// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42257 = arguments.length;
switch (G__42257) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42258 = (function (f,blockable,meta42259){
this.f = f;
this.blockable = blockable;
this.meta42259 = meta42259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42260,meta42259__$1){
var self__ = this;
var _42260__$1 = this;
return (new cljs.core.async.t_cljs$core$async42258(self__.f,self__.blockable,meta42259__$1));
});

cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42260){
var self__ = this;
var _42260__$1 = this;
return self__.meta42259;
});

cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42259","meta42259",-1717899001,null)], null);
});

cljs.core.async.t_cljs$core$async42258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42258";

cljs.core.async.t_cljs$core$async42258.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42258");
});

cljs.core.async.__GT_t_cljs$core$async42258 = (function cljs$core$async$__GT_t_cljs$core$async42258(f__$1,blockable__$1,meta42259){
return (new cljs.core.async.t_cljs$core$async42258(f__$1,blockable__$1,meta42259));
});

}

return (new cljs.core.async.t_cljs$core$async42258(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42264 = arguments.length;
switch (G__42264) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42267 = arguments.length;
switch (G__42267) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42270 = arguments.length;
switch (G__42270) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42272 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42272);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42272,ret){
return (function (){
return fn1.call(null,val_42272);
});})(val_42272,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42274 = arguments.length;
switch (G__42274) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a__$1 = (new Array(n));
var n__29084__auto___42276 = n;
var x_42277 = (0);
while(true){
if((x_42277 < n__29084__auto___42276)){
(a__$1[x_42277] = (0));

var G__42278 = (x_42277 + (1));
x_42277 = G__42278;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a__$1;
} else {
var j = cljs.core.rand_int.call(null,i);
(a__$1[i] = (a__$1[j]));

(a__$1[j] = i);

var G__42279 = (i + (1));
i = G__42279;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42280 = (function (flag,meta42281){
this.flag = flag;
this.meta42281 = meta42281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42282,meta42281__$1){
var self__ = this;
var _42282__$1 = this;
return (new cljs.core.async.t_cljs$core$async42280(self__.flag,meta42281__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42282){
var self__ = this;
var _42282__$1 = this;
return self__.meta42281;
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42281","meta42281",196034079,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42280";

cljs.core.async.t_cljs$core$async42280.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42280");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42280 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42280(flag__$1,meta42281){
return (new cljs.core.async.t_cljs$core$async42280(flag__$1,meta42281));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42280(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42283 = (function (flag,cb,meta42284){
this.flag = flag;
this.cb = cb;
this.meta42284 = meta42284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42285,meta42284__$1){
var self__ = this;
var _42285__$1 = this;
return (new cljs.core.async.t_cljs$core$async42283(self__.flag,self__.cb,meta42284__$1));
});

cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42285){
var self__ = this;
var _42285__$1 = this;
return self__.meta42284;
});

cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42284","meta42284",799521260,null)], null);
});

cljs.core.async.t_cljs$core$async42283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42283";

cljs.core.async.t_cljs$core$async42283.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42283");
});

cljs.core.async.__GT_t_cljs$core$async42283 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42283(flag__$1,cb__$1,meta42284){
return (new cljs.core.async.t_cljs$core$async42283(flag__$1,cb__$1,meta42284));
});

}

return (new cljs.core.async.t_cljs$core$async42283(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42286_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42286_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42287_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42287_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28139__auto__ = wport;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42288 = (i + (1));
i = G__42288;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28139__auto__ = ret;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28127__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___42294 = arguments.length;
var i__29309__auto___42295 = (0);
while(true){
if((i__29309__auto___42295 < len__29308__auto___42294)){
args__29315__auto__.push((arguments[i__29309__auto___42295]));

var G__42296 = (i__29309__auto___42295 + (1));
i__29309__auto___42295 = G__42296;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42291){
var map__42292 = p__42291;
var map__42292__$1 = ((((!((map__42292 == null)))?((((map__42292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42292):map__42292);
var opts = map__42292__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42289){
var G__42290 = cljs.core.first.call(null,seq42289);
var seq42289__$1 = cljs.core.next.call(null,seq42289);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42290,seq42289__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42298 = arguments.length;
switch (G__42298) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42211__auto___42344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___42344){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___42344){
return (function (state_42322){
var state_val_42323 = (state_42322[(1)]);
if((state_val_42323 === (7))){
var inst_42318 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42324_42345 = state_42322__$1;
(statearr_42324_42345[(2)] = inst_42318);

(statearr_42324_42345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (1))){
var state_42322__$1 = state_42322;
var statearr_42325_42346 = state_42322__$1;
(statearr_42325_42346[(2)] = null);

(statearr_42325_42346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (4))){
var inst_42301 = (state_42322[(7)]);
var inst_42301__$1 = (state_42322[(2)]);
var inst_42302 = (inst_42301__$1 == null);
var state_42322__$1 = (function (){var statearr_42326 = state_42322;
(statearr_42326[(7)] = inst_42301__$1);

return statearr_42326;
})();
if(cljs.core.truth_(inst_42302)){
var statearr_42327_42347 = state_42322__$1;
(statearr_42327_42347[(1)] = (5));

} else {
var statearr_42328_42348 = state_42322__$1;
(statearr_42328_42348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (13))){
var state_42322__$1 = state_42322;
var statearr_42329_42349 = state_42322__$1;
(statearr_42329_42349[(2)] = null);

(statearr_42329_42349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (6))){
var inst_42301 = (state_42322[(7)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42322__$1,(11),to,inst_42301);
} else {
if((state_val_42323 === (3))){
var inst_42320 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42322__$1,inst_42320);
} else {
if((state_val_42323 === (12))){
var state_42322__$1 = state_42322;
var statearr_42330_42350 = state_42322__$1;
(statearr_42330_42350[(2)] = null);

(statearr_42330_42350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (2))){
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42322__$1,(4),from);
} else {
if((state_val_42323 === (11))){
var inst_42311 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
if(cljs.core.truth_(inst_42311)){
var statearr_42331_42351 = state_42322__$1;
(statearr_42331_42351[(1)] = (12));

} else {
var statearr_42332_42352 = state_42322__$1;
(statearr_42332_42352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (9))){
var state_42322__$1 = state_42322;
var statearr_42333_42353 = state_42322__$1;
(statearr_42333_42353[(2)] = null);

(statearr_42333_42353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (5))){
var state_42322__$1 = state_42322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42334_42354 = state_42322__$1;
(statearr_42334_42354[(1)] = (8));

} else {
var statearr_42335_42355 = state_42322__$1;
(statearr_42335_42355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (14))){
var inst_42316 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42336_42356 = state_42322__$1;
(statearr_42336_42356[(2)] = inst_42316);

(statearr_42336_42356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (10))){
var inst_42308 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42337_42357 = state_42322__$1;
(statearr_42337_42357[(2)] = inst_42308);

(statearr_42337_42357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (8))){
var inst_42305 = cljs.core.async.close_BANG_.call(null,to);
var state_42322__$1 = state_42322;
var statearr_42338_42358 = state_42322__$1;
(statearr_42338_42358[(2)] = inst_42305);

(statearr_42338_42358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___42344))
;
return ((function (switch__42123__auto__,c__42211__auto___42344){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_42339 = [null,null,null,null,null,null,null,null];
(statearr_42339[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_42339[(1)] = (1));

return statearr_42339;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_42322){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42340){if((e42340 instanceof Object)){
var ex__42127__auto__ = e42340;
var statearr_42341_42359 = state_42322;
(statearr_42341_42359[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42360 = state_42322;
state_42322 = G__42360;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_42322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_42322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___42344))
})();
var state__42213__auto__ = (function (){var statearr_42342 = f__42212__auto__.call(null);
(statearr_42342[(6)] = c__42211__auto___42344);

return statearr_42342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___42344))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42361){
var vec__42362 = p__42361;
var v = cljs.core.nth.call(null,vec__42362,(0),null);
var p = cljs.core.nth.call(null,vec__42362,(1),null);
var job = vec__42362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__42211__auto___42533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results){
return (function (state_42369){
var state_val_42370 = (state_42369[(1)]);
if((state_val_42370 === (1))){
var state_42369__$1 = state_42369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42369__$1,(2),res,v);
} else {
if((state_val_42370 === (2))){
var inst_42366 = (state_42369[(2)]);
var inst_42367 = cljs.core.async.close_BANG_.call(null,res);
var state_42369__$1 = (function (){var statearr_42371 = state_42369;
(statearr_42371[(7)] = inst_42366);

return statearr_42371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42369__$1,inst_42367);
} else {
return null;
}
}
});})(c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results))
;
return ((function (switch__42123__auto__,c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_42372 = [null,null,null,null,null,null,null,null];
(statearr_42372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__);

(statearr_42372[(1)] = (1));

return statearr_42372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1 = (function (state_42369){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42373){if((e42373 instanceof Object)){
var ex__42127__auto__ = e42373;
var statearr_42374_42534 = state_42369;
(statearr_42374_42534[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42535 = state_42369;
state_42369 = G__42535;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = function(state_42369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1.call(this,state_42369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results))
})();
var state__42213__auto__ = (function (){var statearr_42375 = f__42212__auto__.call(null);
(statearr_42375[(6)] = c__42211__auto___42533);

return statearr_42375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___42533,res,vec__42362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42376){
var vec__42377 = p__42376;
var v = cljs.core.nth.call(null,vec__42377,(0),null);
var p = cljs.core.nth.call(null,vec__42377,(1),null);
var job = vec__42377;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29084__auto___42536 = n;
var __42537 = (0);
while(true){
if((__42537 < n__29084__auto___42536)){
var G__42380_42538 = type;
var G__42380_42539__$1 = (((G__42380_42538 instanceof cljs.core.Keyword))?G__42380_42538.fqn:null);
switch (G__42380_42539__$1) {
case "compute":
var c__42211__auto___42541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42537,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (__42537,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function (state_42393){
var state_val_42394 = (state_42393[(1)]);
if((state_val_42394 === (1))){
var state_42393__$1 = state_42393;
var statearr_42395_42542 = state_42393__$1;
(statearr_42395_42542[(2)] = null);

(statearr_42395_42542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42394 === (2))){
var state_42393__$1 = state_42393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42393__$1,(4),jobs);
} else {
if((state_val_42394 === (3))){
var inst_42391 = (state_42393[(2)]);
var state_42393__$1 = state_42393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42393__$1,inst_42391);
} else {
if((state_val_42394 === (4))){
var inst_42383 = (state_42393[(2)]);
var inst_42384 = process.call(null,inst_42383);
var state_42393__$1 = state_42393;
if(cljs.core.truth_(inst_42384)){
var statearr_42396_42543 = state_42393__$1;
(statearr_42396_42543[(1)] = (5));

} else {
var statearr_42397_42544 = state_42393__$1;
(statearr_42397_42544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42394 === (5))){
var state_42393__$1 = state_42393;
var statearr_42398_42545 = state_42393__$1;
(statearr_42398_42545[(2)] = null);

(statearr_42398_42545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42394 === (6))){
var state_42393__$1 = state_42393;
var statearr_42399_42546 = state_42393__$1;
(statearr_42399_42546[(2)] = null);

(statearr_42399_42546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42394 === (7))){
var inst_42389 = (state_42393[(2)]);
var state_42393__$1 = state_42393;
var statearr_42400_42547 = state_42393__$1;
(statearr_42400_42547[(2)] = inst_42389);

(statearr_42400_42547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42537,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
;
return ((function (__42537,switch__42123__auto__,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_42401 = [null,null,null,null,null,null,null];
(statearr_42401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__);

(statearr_42401[(1)] = (1));

return statearr_42401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1 = (function (state_42393){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42402){if((e42402 instanceof Object)){
var ex__42127__auto__ = e42402;
var statearr_42403_42548 = state_42393;
(statearr_42403_42548[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42549 = state_42393;
state_42393 = G__42549;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = function(state_42393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1.call(this,state_42393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__;
})()
;})(__42537,switch__42123__auto__,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
})();
var state__42213__auto__ = (function (){var statearr_42404 = f__42212__auto__.call(null);
(statearr_42404[(6)] = c__42211__auto___42541);

return statearr_42404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(__42537,c__42211__auto___42541,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
);


break;
case "async":
var c__42211__auto___42550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42537,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (__42537,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function (state_42417){
var state_val_42418 = (state_42417[(1)]);
if((state_val_42418 === (1))){
var state_42417__$1 = state_42417;
var statearr_42419_42551 = state_42417__$1;
(statearr_42419_42551[(2)] = null);

(statearr_42419_42551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (2))){
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42417__$1,(4),jobs);
} else {
if((state_val_42418 === (3))){
var inst_42415 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42417__$1,inst_42415);
} else {
if((state_val_42418 === (4))){
var inst_42407 = (state_42417[(2)]);
var inst_42408 = async.call(null,inst_42407);
var state_42417__$1 = state_42417;
if(cljs.core.truth_(inst_42408)){
var statearr_42420_42552 = state_42417__$1;
(statearr_42420_42552[(1)] = (5));

} else {
var statearr_42421_42553 = state_42417__$1;
(statearr_42421_42553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (5))){
var state_42417__$1 = state_42417;
var statearr_42422_42554 = state_42417__$1;
(statearr_42422_42554[(2)] = null);

(statearr_42422_42554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (6))){
var state_42417__$1 = state_42417;
var statearr_42423_42555 = state_42417__$1;
(statearr_42423_42555[(2)] = null);

(statearr_42423_42555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (7))){
var inst_42413 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
var statearr_42424_42556 = state_42417__$1;
(statearr_42424_42556[(2)] = inst_42413);

(statearr_42424_42556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42537,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
;
return ((function (__42537,switch__42123__auto__,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_42425 = [null,null,null,null,null,null,null];
(statearr_42425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__);

(statearr_42425[(1)] = (1));

return statearr_42425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1 = (function (state_42417){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42426){if((e42426 instanceof Object)){
var ex__42127__auto__ = e42426;
var statearr_42427_42557 = state_42417;
(statearr_42427_42557[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42558 = state_42417;
state_42417 = G__42558;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = function(state_42417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1.call(this,state_42417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__;
})()
;})(__42537,switch__42123__auto__,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
})();
var state__42213__auto__ = (function (){var statearr_42428 = f__42212__auto__.call(null);
(statearr_42428[(6)] = c__42211__auto___42550);

return statearr_42428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(__42537,c__42211__auto___42550,G__42380_42538,G__42380_42539__$1,n__29084__auto___42536,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42380_42539__$1)].join('')));

}

var G__42559 = (__42537 + (1));
__42537 = G__42559;
continue;
} else {
}
break;
}

var c__42211__auto___42560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___42560,jobs,results,process,async){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___42560,jobs,results,process,async){
return (function (state_42450){
var state_val_42451 = (state_42450[(1)]);
if((state_val_42451 === (1))){
var state_42450__$1 = state_42450;
var statearr_42452_42561 = state_42450__$1;
(statearr_42452_42561[(2)] = null);

(statearr_42452_42561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (2))){
var state_42450__$1 = state_42450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42450__$1,(4),from);
} else {
if((state_val_42451 === (3))){
var inst_42448 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42450__$1,inst_42448);
} else {
if((state_val_42451 === (4))){
var inst_42431 = (state_42450[(7)]);
var inst_42431__$1 = (state_42450[(2)]);
var inst_42432 = (inst_42431__$1 == null);
var state_42450__$1 = (function (){var statearr_42453 = state_42450;
(statearr_42453[(7)] = inst_42431__$1);

return statearr_42453;
})();
if(cljs.core.truth_(inst_42432)){
var statearr_42454_42562 = state_42450__$1;
(statearr_42454_42562[(1)] = (5));

} else {
var statearr_42455_42563 = state_42450__$1;
(statearr_42455_42563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (5))){
var inst_42434 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42450__$1 = state_42450;
var statearr_42456_42564 = state_42450__$1;
(statearr_42456_42564[(2)] = inst_42434);

(statearr_42456_42564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (6))){
var inst_42436 = (state_42450[(8)]);
var inst_42431 = (state_42450[(7)]);
var inst_42436__$1 = cljs.core.async.chan.call(null,(1));
var inst_42437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42438 = [inst_42431,inst_42436__$1];
var inst_42439 = (new cljs.core.PersistentVector(null,2,(5),inst_42437,inst_42438,null));
var state_42450__$1 = (function (){var statearr_42457 = state_42450;
(statearr_42457[(8)] = inst_42436__$1);

return statearr_42457;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42450__$1,(8),jobs,inst_42439);
} else {
if((state_val_42451 === (7))){
var inst_42446 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42458_42565 = state_42450__$1;
(statearr_42458_42565[(2)] = inst_42446);

(statearr_42458_42565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (8))){
var inst_42436 = (state_42450[(8)]);
var inst_42441 = (state_42450[(2)]);
var state_42450__$1 = (function (){var statearr_42459 = state_42450;
(statearr_42459[(9)] = inst_42441);

return statearr_42459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42450__$1,(9),results,inst_42436);
} else {
if((state_val_42451 === (9))){
var inst_42443 = (state_42450[(2)]);
var state_42450__$1 = (function (){var statearr_42460 = state_42450;
(statearr_42460[(10)] = inst_42443);

return statearr_42460;
})();
var statearr_42461_42566 = state_42450__$1;
(statearr_42461_42566[(2)] = null);

(statearr_42461_42566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___42560,jobs,results,process,async))
;
return ((function (switch__42123__auto__,c__42211__auto___42560,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_42462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__);

(statearr_42462[(1)] = (1));

return statearr_42462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1 = (function (state_42450){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42463){if((e42463 instanceof Object)){
var ex__42127__auto__ = e42463;
var statearr_42464_42567 = state_42450;
(statearr_42464_42567[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42568 = state_42450;
state_42450 = G__42568;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = function(state_42450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1.call(this,state_42450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___42560,jobs,results,process,async))
})();
var state__42213__auto__ = (function (){var statearr_42465 = f__42212__auto__.call(null);
(statearr_42465[(6)] = c__42211__auto___42560);

return statearr_42465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___42560,jobs,results,process,async))
);


var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__,jobs,results,process,async){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__,jobs,results,process,async){
return (function (state_42503){
var state_val_42504 = (state_42503[(1)]);
if((state_val_42504 === (7))){
var inst_42499 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42505_42569 = state_42503__$1;
(statearr_42505_42569[(2)] = inst_42499);

(statearr_42505_42569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (20))){
var state_42503__$1 = state_42503;
var statearr_42506_42570 = state_42503__$1;
(statearr_42506_42570[(2)] = null);

(statearr_42506_42570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (1))){
var state_42503__$1 = state_42503;
var statearr_42507_42571 = state_42503__$1;
(statearr_42507_42571[(2)] = null);

(statearr_42507_42571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (4))){
var inst_42468 = (state_42503[(7)]);
var inst_42468__$1 = (state_42503[(2)]);
var inst_42469 = (inst_42468__$1 == null);
var state_42503__$1 = (function (){var statearr_42508 = state_42503;
(statearr_42508[(7)] = inst_42468__$1);

return statearr_42508;
})();
if(cljs.core.truth_(inst_42469)){
var statearr_42509_42572 = state_42503__$1;
(statearr_42509_42572[(1)] = (5));

} else {
var statearr_42510_42573 = state_42503__$1;
(statearr_42510_42573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (15))){
var inst_42481 = (state_42503[(8)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42503__$1,(18),to,inst_42481);
} else {
if((state_val_42504 === (21))){
var inst_42494 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42511_42574 = state_42503__$1;
(statearr_42511_42574[(2)] = inst_42494);

(statearr_42511_42574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (13))){
var inst_42496 = (state_42503[(2)]);
var state_42503__$1 = (function (){var statearr_42512 = state_42503;
(statearr_42512[(9)] = inst_42496);

return statearr_42512;
})();
var statearr_42513_42575 = state_42503__$1;
(statearr_42513_42575[(2)] = null);

(statearr_42513_42575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (6))){
var inst_42468 = (state_42503[(7)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42503__$1,(11),inst_42468);
} else {
if((state_val_42504 === (17))){
var inst_42489 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
if(cljs.core.truth_(inst_42489)){
var statearr_42514_42576 = state_42503__$1;
(statearr_42514_42576[(1)] = (19));

} else {
var statearr_42515_42577 = state_42503__$1;
(statearr_42515_42577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (3))){
var inst_42501 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42503__$1,inst_42501);
} else {
if((state_val_42504 === (12))){
var inst_42478 = (state_42503[(10)]);
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42503__$1,(14),inst_42478);
} else {
if((state_val_42504 === (2))){
var state_42503__$1 = state_42503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42503__$1,(4),results);
} else {
if((state_val_42504 === (19))){
var state_42503__$1 = state_42503;
var statearr_42516_42578 = state_42503__$1;
(statearr_42516_42578[(2)] = null);

(statearr_42516_42578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (11))){
var inst_42478 = (state_42503[(2)]);
var state_42503__$1 = (function (){var statearr_42517 = state_42503;
(statearr_42517[(10)] = inst_42478);

return statearr_42517;
})();
var statearr_42518_42579 = state_42503__$1;
(statearr_42518_42579[(2)] = null);

(statearr_42518_42579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (9))){
var state_42503__$1 = state_42503;
var statearr_42519_42580 = state_42503__$1;
(statearr_42519_42580[(2)] = null);

(statearr_42519_42580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (5))){
var state_42503__$1 = state_42503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42520_42581 = state_42503__$1;
(statearr_42520_42581[(1)] = (8));

} else {
var statearr_42521_42582 = state_42503__$1;
(statearr_42521_42582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (14))){
var inst_42481 = (state_42503[(8)]);
var inst_42483 = (state_42503[(11)]);
var inst_42481__$1 = (state_42503[(2)]);
var inst_42482 = (inst_42481__$1 == null);
var inst_42483__$1 = cljs.core.not.call(null,inst_42482);
var state_42503__$1 = (function (){var statearr_42522 = state_42503;
(statearr_42522[(8)] = inst_42481__$1);

(statearr_42522[(11)] = inst_42483__$1);

return statearr_42522;
})();
if(inst_42483__$1){
var statearr_42523_42583 = state_42503__$1;
(statearr_42523_42583[(1)] = (15));

} else {
var statearr_42524_42584 = state_42503__$1;
(statearr_42524_42584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (16))){
var inst_42483 = (state_42503[(11)]);
var state_42503__$1 = state_42503;
var statearr_42525_42585 = state_42503__$1;
(statearr_42525_42585[(2)] = inst_42483);

(statearr_42525_42585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (10))){
var inst_42475 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42526_42586 = state_42503__$1;
(statearr_42526_42586[(2)] = inst_42475);

(statearr_42526_42586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (18))){
var inst_42486 = (state_42503[(2)]);
var state_42503__$1 = state_42503;
var statearr_42527_42587 = state_42503__$1;
(statearr_42527_42587[(2)] = inst_42486);

(statearr_42527_42587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42504 === (8))){
var inst_42472 = cljs.core.async.close_BANG_.call(null,to);
var state_42503__$1 = state_42503;
var statearr_42528_42588 = state_42503__$1;
(statearr_42528_42588[(2)] = inst_42472);

(statearr_42528_42588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto__,jobs,results,process,async))
;
return ((function (switch__42123__auto__,c__42211__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_42529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__);

(statearr_42529[(1)] = (1));

return statearr_42529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1 = (function (state_42503){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42530){if((e42530 instanceof Object)){
var ex__42127__auto__ = e42530;
var statearr_42531_42589 = state_42503;
(statearr_42531_42589[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42590 = state_42503;
state_42503 = G__42590;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__ = function(state_42503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1.call(this,state_42503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__,jobs,results,process,async))
})();
var state__42213__auto__ = (function (){var statearr_42532 = f__42212__auto__.call(null);
(statearr_42532[(6)] = c__42211__auto__);

return statearr_42532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__,jobs,results,process,async))
);

return c__42211__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42592 = arguments.length;
switch (G__42592) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42595 = arguments.length;
switch (G__42595) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42598 = arguments.length;
switch (G__42598) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__42211__auto___42647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___42647,tc,fc){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___42647,tc,fc){
return (function (state_42624){
var state_val_42625 = (state_42624[(1)]);
if((state_val_42625 === (7))){
var inst_42620 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42626_42648 = state_42624__$1;
(statearr_42626_42648[(2)] = inst_42620);

(statearr_42626_42648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (1))){
var state_42624__$1 = state_42624;
var statearr_42627_42649 = state_42624__$1;
(statearr_42627_42649[(2)] = null);

(statearr_42627_42649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (4))){
var inst_42601 = (state_42624[(7)]);
var inst_42601__$1 = (state_42624[(2)]);
var inst_42602 = (inst_42601__$1 == null);
var state_42624__$1 = (function (){var statearr_42628 = state_42624;
(statearr_42628[(7)] = inst_42601__$1);

return statearr_42628;
})();
if(cljs.core.truth_(inst_42602)){
var statearr_42629_42650 = state_42624__$1;
(statearr_42629_42650[(1)] = (5));

} else {
var statearr_42630_42651 = state_42624__$1;
(statearr_42630_42651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (13))){
var state_42624__$1 = state_42624;
var statearr_42631_42652 = state_42624__$1;
(statearr_42631_42652[(2)] = null);

(statearr_42631_42652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (6))){
var inst_42601 = (state_42624[(7)]);
var inst_42607 = p.call(null,inst_42601);
var state_42624__$1 = state_42624;
if(cljs.core.truth_(inst_42607)){
var statearr_42632_42653 = state_42624__$1;
(statearr_42632_42653[(1)] = (9));

} else {
var statearr_42633_42654 = state_42624__$1;
(statearr_42633_42654[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (3))){
var inst_42622 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42624__$1,inst_42622);
} else {
if((state_val_42625 === (12))){
var state_42624__$1 = state_42624;
var statearr_42634_42655 = state_42624__$1;
(statearr_42634_42655[(2)] = null);

(statearr_42634_42655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (2))){
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,(4),ch);
} else {
if((state_val_42625 === (11))){
var inst_42601 = (state_42624[(7)]);
var inst_42611 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42624__$1,(8),inst_42611,inst_42601);
} else {
if((state_val_42625 === (9))){
var state_42624__$1 = state_42624;
var statearr_42635_42656 = state_42624__$1;
(statearr_42635_42656[(2)] = tc);

(statearr_42635_42656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (5))){
var inst_42604 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42605 = cljs.core.async.close_BANG_.call(null,fc);
var state_42624__$1 = (function (){var statearr_42636 = state_42624;
(statearr_42636[(8)] = inst_42604);

return statearr_42636;
})();
var statearr_42637_42657 = state_42624__$1;
(statearr_42637_42657[(2)] = inst_42605);

(statearr_42637_42657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (14))){
var inst_42618 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42638_42658 = state_42624__$1;
(statearr_42638_42658[(2)] = inst_42618);

(statearr_42638_42658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (10))){
var state_42624__$1 = state_42624;
var statearr_42639_42659 = state_42624__$1;
(statearr_42639_42659[(2)] = fc);

(statearr_42639_42659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (8))){
var inst_42613 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
if(cljs.core.truth_(inst_42613)){
var statearr_42640_42660 = state_42624__$1;
(statearr_42640_42660[(1)] = (12));

} else {
var statearr_42641_42661 = state_42624__$1;
(statearr_42641_42661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___42647,tc,fc))
;
return ((function (switch__42123__auto__,c__42211__auto___42647,tc,fc){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_42642 = [null,null,null,null,null,null,null,null,null];
(statearr_42642[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_42642[(1)] = (1));

return statearr_42642;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_42624){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42643){if((e42643 instanceof Object)){
var ex__42127__auto__ = e42643;
var statearr_42644_42662 = state_42624;
(statearr_42644_42662[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42663 = state_42624;
state_42624 = G__42663;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_42624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_42624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___42647,tc,fc))
})();
var state__42213__auto__ = (function (){var statearr_42645 = f__42212__auto__.call(null);
(statearr_42645[(6)] = c__42211__auto___42647);

return statearr_42645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___42647,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__){
return (function (state_42684){
var state_val_42685 = (state_42684[(1)]);
if((state_val_42685 === (7))){
var inst_42680 = (state_42684[(2)]);
var state_42684__$1 = state_42684;
var statearr_42686_42704 = state_42684__$1;
(statearr_42686_42704[(2)] = inst_42680);

(statearr_42686_42704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (1))){
var inst_42664 = init;
var state_42684__$1 = (function (){var statearr_42687 = state_42684;
(statearr_42687[(7)] = inst_42664);

return statearr_42687;
})();
var statearr_42688_42705 = state_42684__$1;
(statearr_42688_42705[(2)] = null);

(statearr_42688_42705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (4))){
var inst_42667 = (state_42684[(8)]);
var inst_42667__$1 = (state_42684[(2)]);
var inst_42668 = (inst_42667__$1 == null);
var state_42684__$1 = (function (){var statearr_42689 = state_42684;
(statearr_42689[(8)] = inst_42667__$1);

return statearr_42689;
})();
if(cljs.core.truth_(inst_42668)){
var statearr_42690_42706 = state_42684__$1;
(statearr_42690_42706[(1)] = (5));

} else {
var statearr_42691_42707 = state_42684__$1;
(statearr_42691_42707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (6))){
var inst_42664 = (state_42684[(7)]);
var inst_42671 = (state_42684[(9)]);
var inst_42667 = (state_42684[(8)]);
var inst_42671__$1 = f.call(null,inst_42664,inst_42667);
var inst_42672 = cljs.core.reduced_QMARK_.call(null,inst_42671__$1);
var state_42684__$1 = (function (){var statearr_42692 = state_42684;
(statearr_42692[(9)] = inst_42671__$1);

return statearr_42692;
})();
if(inst_42672){
var statearr_42693_42708 = state_42684__$1;
(statearr_42693_42708[(1)] = (8));

} else {
var statearr_42694_42709 = state_42684__$1;
(statearr_42694_42709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (3))){
var inst_42682 = (state_42684[(2)]);
var state_42684__$1 = state_42684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42684__$1,inst_42682);
} else {
if((state_val_42685 === (2))){
var state_42684__$1 = state_42684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42684__$1,(4),ch);
} else {
if((state_val_42685 === (9))){
var inst_42671 = (state_42684[(9)]);
var inst_42664 = inst_42671;
var state_42684__$1 = (function (){var statearr_42695 = state_42684;
(statearr_42695[(7)] = inst_42664);

return statearr_42695;
})();
var statearr_42696_42710 = state_42684__$1;
(statearr_42696_42710[(2)] = null);

(statearr_42696_42710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (5))){
var inst_42664 = (state_42684[(7)]);
var state_42684__$1 = state_42684;
var statearr_42697_42711 = state_42684__$1;
(statearr_42697_42711[(2)] = inst_42664);

(statearr_42697_42711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (10))){
var inst_42678 = (state_42684[(2)]);
var state_42684__$1 = state_42684;
var statearr_42698_42712 = state_42684__$1;
(statearr_42698_42712[(2)] = inst_42678);

(statearr_42698_42712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (8))){
var inst_42671 = (state_42684[(9)]);
var inst_42674 = cljs.core.deref.call(null,inst_42671);
var state_42684__$1 = state_42684;
var statearr_42699_42713 = state_42684__$1;
(statearr_42699_42713[(2)] = inst_42674);

(statearr_42699_42713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42124__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42124__auto____0 = (function (){
var statearr_42700 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42700[(0)] = cljs$core$async$reduce_$_state_machine__42124__auto__);

(statearr_42700[(1)] = (1));

return statearr_42700;
});
var cljs$core$async$reduce_$_state_machine__42124__auto____1 = (function (state_42684){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42701){if((e42701 instanceof Object)){
var ex__42127__auto__ = e42701;
var statearr_42702_42714 = state_42684;
(statearr_42702_42714[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42715 = state_42684;
state_42684 = G__42715;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42124__auto__ = function(state_42684){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42124__auto____1.call(this,state_42684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42124__auto____0;
cljs$core$async$reduce_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42124__auto____1;
return cljs$core$async$reduce_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__))
})();
var state__42213__auto__ = (function (){var statearr_42703 = f__42212__auto__.call(null);
(statearr_42703[(6)] = c__42211__auto__);

return statearr_42703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__))
);

return c__42211__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__,f__$1){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__,f__$1){
return (function (state_42721){
var state_val_42722 = (state_42721[(1)]);
if((state_val_42722 === (1))){
var inst_42716 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42721__$1,(2),inst_42716);
} else {
if((state_val_42722 === (2))){
var inst_42718 = (state_42721[(2)]);
var inst_42719 = f__$1.call(null,inst_42718);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42721__$1,inst_42719);
} else {
return null;
}
}
});})(c__42211__auto__,f__$1))
;
return ((function (switch__42123__auto__,c__42211__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__42124__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42124__auto____0 = (function (){
var statearr_42723 = [null,null,null,null,null,null,null];
(statearr_42723[(0)] = cljs$core$async$transduce_$_state_machine__42124__auto__);

(statearr_42723[(1)] = (1));

return statearr_42723;
});
var cljs$core$async$transduce_$_state_machine__42124__auto____1 = (function (state_42721){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42724){if((e42724 instanceof Object)){
var ex__42127__auto__ = e42724;
var statearr_42725_42727 = state_42721;
(statearr_42725_42727[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42728 = state_42721;
state_42721 = G__42728;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42124__auto__ = function(state_42721){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42124__auto____1.call(this,state_42721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42124__auto____0;
cljs$core$async$transduce_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42124__auto____1;
return cljs$core$async$transduce_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__,f__$1))
})();
var state__42213__auto__ = (function (){var statearr_42726 = f__42212__auto__.call(null);
(statearr_42726[(6)] = c__42211__auto__);

return statearr_42726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__,f__$1))
);

return c__42211__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42730 = arguments.length;
switch (G__42730) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__){
return (function (state_42755){
var state_val_42756 = (state_42755[(1)]);
if((state_val_42756 === (7))){
var inst_42737 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
var statearr_42757_42778 = state_42755__$1;
(statearr_42757_42778[(2)] = inst_42737);

(statearr_42757_42778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (1))){
var inst_42731 = cljs.core.seq.call(null,coll);
var inst_42732 = inst_42731;
var state_42755__$1 = (function (){var statearr_42758 = state_42755;
(statearr_42758[(7)] = inst_42732);

return statearr_42758;
})();
var statearr_42759_42779 = state_42755__$1;
(statearr_42759_42779[(2)] = null);

(statearr_42759_42779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (4))){
var inst_42732 = (state_42755[(7)]);
var inst_42735 = cljs.core.first.call(null,inst_42732);
var state_42755__$1 = state_42755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42755__$1,(7),ch,inst_42735);
} else {
if((state_val_42756 === (13))){
var inst_42749 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
var statearr_42760_42780 = state_42755__$1;
(statearr_42760_42780[(2)] = inst_42749);

(statearr_42760_42780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (6))){
var inst_42740 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
if(cljs.core.truth_(inst_42740)){
var statearr_42761_42781 = state_42755__$1;
(statearr_42761_42781[(1)] = (8));

} else {
var statearr_42762_42782 = state_42755__$1;
(statearr_42762_42782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (3))){
var inst_42753 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42755__$1,inst_42753);
} else {
if((state_val_42756 === (12))){
var state_42755__$1 = state_42755;
var statearr_42763_42783 = state_42755__$1;
(statearr_42763_42783[(2)] = null);

(statearr_42763_42783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (2))){
var inst_42732 = (state_42755[(7)]);
var state_42755__$1 = state_42755;
if(cljs.core.truth_(inst_42732)){
var statearr_42764_42784 = state_42755__$1;
(statearr_42764_42784[(1)] = (4));

} else {
var statearr_42765_42785 = state_42755__$1;
(statearr_42765_42785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (11))){
var inst_42746 = cljs.core.async.close_BANG_.call(null,ch);
var state_42755__$1 = state_42755;
var statearr_42766_42786 = state_42755__$1;
(statearr_42766_42786[(2)] = inst_42746);

(statearr_42766_42786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (9))){
var state_42755__$1 = state_42755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42767_42787 = state_42755__$1;
(statearr_42767_42787[(1)] = (11));

} else {
var statearr_42768_42788 = state_42755__$1;
(statearr_42768_42788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (5))){
var inst_42732 = (state_42755[(7)]);
var state_42755__$1 = state_42755;
var statearr_42769_42789 = state_42755__$1;
(statearr_42769_42789[(2)] = inst_42732);

(statearr_42769_42789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (10))){
var inst_42751 = (state_42755[(2)]);
var state_42755__$1 = state_42755;
var statearr_42770_42790 = state_42755__$1;
(statearr_42770_42790[(2)] = inst_42751);

(statearr_42770_42790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42756 === (8))){
var inst_42732 = (state_42755[(7)]);
var inst_42742 = cljs.core.next.call(null,inst_42732);
var inst_42732__$1 = inst_42742;
var state_42755__$1 = (function (){var statearr_42771 = state_42755;
(statearr_42771[(7)] = inst_42732__$1);

return statearr_42771;
})();
var statearr_42772_42791 = state_42755__$1;
(statearr_42772_42791[(2)] = null);

(statearr_42772_42791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_42773 = [null,null,null,null,null,null,null,null];
(statearr_42773[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_42773[(1)] = (1));

return statearr_42773;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_42755){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e42774){if((e42774 instanceof Object)){
var ex__42127__auto__ = e42774;
var statearr_42775_42792 = state_42755;
(statearr_42775_42792[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42793 = state_42755;
state_42755 = G__42793;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_42755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_42755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__))
})();
var state__42213__auto__ = (function (){var statearr_42776 = f__42212__auto__.call(null);
(statearr_42776[(6)] = c__42211__auto__);

return statearr_42776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__))
);

return c__42211__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28822__auto__ = (((_ == null))?null:_);
var m__28823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,_);
} else {
var m__28823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m);
} else {
var m__28823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42794 = (function (ch,cs,meta42795){
this.ch = ch;
this.cs = cs;
this.meta42795 = meta42795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42796,meta42795__$1){
var self__ = this;
var _42796__$1 = this;
return (new cljs.core.async.t_cljs$core$async42794(self__.ch,self__.cs,meta42795__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42796){
var self__ = this;
var _42796__$1 = this;
return self__.meta42795;
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42795","meta42795",-276519875,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42794";

cljs.core.async.t_cljs$core$async42794.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async42794");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42794 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42794(ch__$1,cs__$1,meta42795){
return (new cljs.core.async.t_cljs$core$async42794(ch__$1,cs__$1,meta42795));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42794(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__42211__auto___43016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43016,cs,m,dchan,dctr,done){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43016,cs,m,dchan,dctr,done){
return (function (state_42931){
var state_val_42932 = (state_42931[(1)]);
if((state_val_42932 === (7))){
var inst_42927 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42933_43017 = state_42931__$1;
(statearr_42933_43017[(2)] = inst_42927);

(statearr_42933_43017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (20))){
var inst_42830 = (state_42931[(7)]);
var inst_42842 = cljs.core.first.call(null,inst_42830);
var inst_42843 = cljs.core.nth.call(null,inst_42842,(0),null);
var inst_42844 = cljs.core.nth.call(null,inst_42842,(1),null);
var state_42931__$1 = (function (){var statearr_42934 = state_42931;
(statearr_42934[(8)] = inst_42843);

return statearr_42934;
})();
if(cljs.core.truth_(inst_42844)){
var statearr_42935_43018 = state_42931__$1;
(statearr_42935_43018[(1)] = (22));

} else {
var statearr_42936_43019 = state_42931__$1;
(statearr_42936_43019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (27))){
var inst_42799 = (state_42931[(9)]);
var inst_42879 = (state_42931[(10)]);
var inst_42874 = (state_42931[(11)]);
var inst_42872 = (state_42931[(12)]);
var inst_42879__$1 = cljs.core._nth.call(null,inst_42872,inst_42874);
var inst_42880 = cljs.core.async.put_BANG_.call(null,inst_42879__$1,inst_42799,done);
var state_42931__$1 = (function (){var statearr_42937 = state_42931;
(statearr_42937[(10)] = inst_42879__$1);

return statearr_42937;
})();
if(cljs.core.truth_(inst_42880)){
var statearr_42938_43020 = state_42931__$1;
(statearr_42938_43020[(1)] = (30));

} else {
var statearr_42939_43021 = state_42931__$1;
(statearr_42939_43021[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (1))){
var state_42931__$1 = state_42931;
var statearr_42940_43022 = state_42931__$1;
(statearr_42940_43022[(2)] = null);

(statearr_42940_43022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (24))){
var inst_42830 = (state_42931[(7)]);
var inst_42849 = (state_42931[(2)]);
var inst_42850 = cljs.core.next.call(null,inst_42830);
var inst_42808 = inst_42850;
var inst_42809 = null;
var inst_42810 = (0);
var inst_42811 = (0);
var state_42931__$1 = (function (){var statearr_42941 = state_42931;
(statearr_42941[(13)] = inst_42811);

(statearr_42941[(14)] = inst_42810);

(statearr_42941[(15)] = inst_42849);

(statearr_42941[(16)] = inst_42808);

(statearr_42941[(17)] = inst_42809);

return statearr_42941;
})();
var statearr_42942_43023 = state_42931__$1;
(statearr_42942_43023[(2)] = null);

(statearr_42942_43023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (39))){
var state_42931__$1 = state_42931;
var statearr_42946_43024 = state_42931__$1;
(statearr_42946_43024[(2)] = null);

(statearr_42946_43024[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (4))){
var inst_42799 = (state_42931[(9)]);
var inst_42799__$1 = (state_42931[(2)]);
var inst_42800 = (inst_42799__$1 == null);
var state_42931__$1 = (function (){var statearr_42947 = state_42931;
(statearr_42947[(9)] = inst_42799__$1);

return statearr_42947;
})();
if(cljs.core.truth_(inst_42800)){
var statearr_42948_43025 = state_42931__$1;
(statearr_42948_43025[(1)] = (5));

} else {
var statearr_42949_43026 = state_42931__$1;
(statearr_42949_43026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (15))){
var inst_42811 = (state_42931[(13)]);
var inst_42810 = (state_42931[(14)]);
var inst_42808 = (state_42931[(16)]);
var inst_42809 = (state_42931[(17)]);
var inst_42826 = (state_42931[(2)]);
var inst_42827 = (inst_42811 + (1));
var tmp42943 = inst_42810;
var tmp42944 = inst_42808;
var tmp42945 = inst_42809;
var inst_42808__$1 = tmp42944;
var inst_42809__$1 = tmp42945;
var inst_42810__$1 = tmp42943;
var inst_42811__$1 = inst_42827;
var state_42931__$1 = (function (){var statearr_42950 = state_42931;
(statearr_42950[(18)] = inst_42826);

(statearr_42950[(13)] = inst_42811__$1);

(statearr_42950[(14)] = inst_42810__$1);

(statearr_42950[(16)] = inst_42808__$1);

(statearr_42950[(17)] = inst_42809__$1);

return statearr_42950;
})();
var statearr_42951_43027 = state_42931__$1;
(statearr_42951_43027[(2)] = null);

(statearr_42951_43027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (21))){
var inst_42853 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42955_43028 = state_42931__$1;
(statearr_42955_43028[(2)] = inst_42853);

(statearr_42955_43028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (31))){
var inst_42879 = (state_42931[(10)]);
var inst_42883 = done.call(null,null);
var inst_42884 = cljs.core.async.untap_STAR_.call(null,m,inst_42879);
var state_42931__$1 = (function (){var statearr_42956 = state_42931;
(statearr_42956[(19)] = inst_42883);

return statearr_42956;
})();
var statearr_42957_43029 = state_42931__$1;
(statearr_42957_43029[(2)] = inst_42884);

(statearr_42957_43029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (32))){
var inst_42874 = (state_42931[(11)]);
var inst_42872 = (state_42931[(12)]);
var inst_42873 = (state_42931[(20)]);
var inst_42871 = (state_42931[(21)]);
var inst_42886 = (state_42931[(2)]);
var inst_42887 = (inst_42874 + (1));
var tmp42952 = inst_42872;
var tmp42953 = inst_42873;
var tmp42954 = inst_42871;
var inst_42871__$1 = tmp42954;
var inst_42872__$1 = tmp42952;
var inst_42873__$1 = tmp42953;
var inst_42874__$1 = inst_42887;
var state_42931__$1 = (function (){var statearr_42958 = state_42931;
(statearr_42958[(11)] = inst_42874__$1);

(statearr_42958[(12)] = inst_42872__$1);

(statearr_42958[(20)] = inst_42873__$1);

(statearr_42958[(22)] = inst_42886);

(statearr_42958[(21)] = inst_42871__$1);

return statearr_42958;
})();
var statearr_42959_43030 = state_42931__$1;
(statearr_42959_43030[(2)] = null);

(statearr_42959_43030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (40))){
var inst_42899 = (state_42931[(23)]);
var inst_42903 = done.call(null,null);
var inst_42904 = cljs.core.async.untap_STAR_.call(null,m,inst_42899);
var state_42931__$1 = (function (){var statearr_42960 = state_42931;
(statearr_42960[(24)] = inst_42903);

return statearr_42960;
})();
var statearr_42961_43031 = state_42931__$1;
(statearr_42961_43031[(2)] = inst_42904);

(statearr_42961_43031[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (33))){
var inst_42890 = (state_42931[(25)]);
var inst_42892 = cljs.core.chunked_seq_QMARK_.call(null,inst_42890);
var state_42931__$1 = state_42931;
if(inst_42892){
var statearr_42962_43032 = state_42931__$1;
(statearr_42962_43032[(1)] = (36));

} else {
var statearr_42963_43033 = state_42931__$1;
(statearr_42963_43033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (13))){
var inst_42820 = (state_42931[(26)]);
var inst_42823 = cljs.core.async.close_BANG_.call(null,inst_42820);
var state_42931__$1 = state_42931;
var statearr_42964_43034 = state_42931__$1;
(statearr_42964_43034[(2)] = inst_42823);

(statearr_42964_43034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (22))){
var inst_42843 = (state_42931[(8)]);
var inst_42846 = cljs.core.async.close_BANG_.call(null,inst_42843);
var state_42931__$1 = state_42931;
var statearr_42965_43035 = state_42931__$1;
(statearr_42965_43035[(2)] = inst_42846);

(statearr_42965_43035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (36))){
var inst_42890 = (state_42931[(25)]);
var inst_42894 = cljs.core.chunk_first.call(null,inst_42890);
var inst_42895 = cljs.core.chunk_rest.call(null,inst_42890);
var inst_42896 = cljs.core.count.call(null,inst_42894);
var inst_42871 = inst_42895;
var inst_42872 = inst_42894;
var inst_42873 = inst_42896;
var inst_42874 = (0);
var state_42931__$1 = (function (){var statearr_42966 = state_42931;
(statearr_42966[(11)] = inst_42874);

(statearr_42966[(12)] = inst_42872);

(statearr_42966[(20)] = inst_42873);

(statearr_42966[(21)] = inst_42871);

return statearr_42966;
})();
var statearr_42967_43036 = state_42931__$1;
(statearr_42967_43036[(2)] = null);

(statearr_42967_43036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (41))){
var inst_42890 = (state_42931[(25)]);
var inst_42906 = (state_42931[(2)]);
var inst_42907 = cljs.core.next.call(null,inst_42890);
var inst_42871 = inst_42907;
var inst_42872 = null;
var inst_42873 = (0);
var inst_42874 = (0);
var state_42931__$1 = (function (){var statearr_42968 = state_42931;
(statearr_42968[(11)] = inst_42874);

(statearr_42968[(12)] = inst_42872);

(statearr_42968[(20)] = inst_42873);

(statearr_42968[(27)] = inst_42906);

(statearr_42968[(21)] = inst_42871);

return statearr_42968;
})();
var statearr_42969_43037 = state_42931__$1;
(statearr_42969_43037[(2)] = null);

(statearr_42969_43037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (43))){
var state_42931__$1 = state_42931;
var statearr_42970_43038 = state_42931__$1;
(statearr_42970_43038[(2)] = null);

(statearr_42970_43038[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (29))){
var inst_42915 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42971_43039 = state_42931__$1;
(statearr_42971_43039[(2)] = inst_42915);

(statearr_42971_43039[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (44))){
var inst_42924 = (state_42931[(2)]);
var state_42931__$1 = (function (){var statearr_42972 = state_42931;
(statearr_42972[(28)] = inst_42924);

return statearr_42972;
})();
var statearr_42973_43040 = state_42931__$1;
(statearr_42973_43040[(2)] = null);

(statearr_42973_43040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (6))){
var inst_42863 = (state_42931[(29)]);
var inst_42862 = cljs.core.deref.call(null,cs);
var inst_42863__$1 = cljs.core.keys.call(null,inst_42862);
var inst_42864 = cljs.core.count.call(null,inst_42863__$1);
var inst_42865 = cljs.core.reset_BANG_.call(null,dctr,inst_42864);
var inst_42870 = cljs.core.seq.call(null,inst_42863__$1);
var inst_42871 = inst_42870;
var inst_42872 = null;
var inst_42873 = (0);
var inst_42874 = (0);
var state_42931__$1 = (function (){var statearr_42974 = state_42931;
(statearr_42974[(11)] = inst_42874);

(statearr_42974[(12)] = inst_42872);

(statearr_42974[(20)] = inst_42873);

(statearr_42974[(30)] = inst_42865);

(statearr_42974[(29)] = inst_42863__$1);

(statearr_42974[(21)] = inst_42871);

return statearr_42974;
})();
var statearr_42975_43041 = state_42931__$1;
(statearr_42975_43041[(2)] = null);

(statearr_42975_43041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (28))){
var inst_42890 = (state_42931[(25)]);
var inst_42871 = (state_42931[(21)]);
var inst_42890__$1 = cljs.core.seq.call(null,inst_42871);
var state_42931__$1 = (function (){var statearr_42976 = state_42931;
(statearr_42976[(25)] = inst_42890__$1);

return statearr_42976;
})();
if(inst_42890__$1){
var statearr_42977_43042 = state_42931__$1;
(statearr_42977_43042[(1)] = (33));

} else {
var statearr_42978_43043 = state_42931__$1;
(statearr_42978_43043[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (25))){
var inst_42874 = (state_42931[(11)]);
var inst_42873 = (state_42931[(20)]);
var inst_42876 = (inst_42874 < inst_42873);
var inst_42877 = inst_42876;
var state_42931__$1 = state_42931;
if(cljs.core.truth_(inst_42877)){
var statearr_42979_43044 = state_42931__$1;
(statearr_42979_43044[(1)] = (27));

} else {
var statearr_42980_43045 = state_42931__$1;
(statearr_42980_43045[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (34))){
var state_42931__$1 = state_42931;
var statearr_42981_43046 = state_42931__$1;
(statearr_42981_43046[(2)] = null);

(statearr_42981_43046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (17))){
var state_42931__$1 = state_42931;
var statearr_42982_43047 = state_42931__$1;
(statearr_42982_43047[(2)] = null);

(statearr_42982_43047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (3))){
var inst_42929 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42931__$1,inst_42929);
} else {
if((state_val_42932 === (12))){
var inst_42858 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42983_43048 = state_42931__$1;
(statearr_42983_43048[(2)] = inst_42858);

(statearr_42983_43048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (2))){
var state_42931__$1 = state_42931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42931__$1,(4),ch);
} else {
if((state_val_42932 === (23))){
var state_42931__$1 = state_42931;
var statearr_42984_43049 = state_42931__$1;
(statearr_42984_43049[(2)] = null);

(statearr_42984_43049[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (35))){
var inst_42913 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42985_43050 = state_42931__$1;
(statearr_42985_43050[(2)] = inst_42913);

(statearr_42985_43050[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (19))){
var inst_42830 = (state_42931[(7)]);
var inst_42834 = cljs.core.chunk_first.call(null,inst_42830);
var inst_42835 = cljs.core.chunk_rest.call(null,inst_42830);
var inst_42836 = cljs.core.count.call(null,inst_42834);
var inst_42808 = inst_42835;
var inst_42809 = inst_42834;
var inst_42810 = inst_42836;
var inst_42811 = (0);
var state_42931__$1 = (function (){var statearr_42986 = state_42931;
(statearr_42986[(13)] = inst_42811);

(statearr_42986[(14)] = inst_42810);

(statearr_42986[(16)] = inst_42808);

(statearr_42986[(17)] = inst_42809);

return statearr_42986;
})();
var statearr_42987_43051 = state_42931__$1;
(statearr_42987_43051[(2)] = null);

(statearr_42987_43051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (11))){
var inst_42808 = (state_42931[(16)]);
var inst_42830 = (state_42931[(7)]);
var inst_42830__$1 = cljs.core.seq.call(null,inst_42808);
var state_42931__$1 = (function (){var statearr_42988 = state_42931;
(statearr_42988[(7)] = inst_42830__$1);

return statearr_42988;
})();
if(inst_42830__$1){
var statearr_42989_43052 = state_42931__$1;
(statearr_42989_43052[(1)] = (16));

} else {
var statearr_42990_43053 = state_42931__$1;
(statearr_42990_43053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (9))){
var inst_42860 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42991_43054 = state_42931__$1;
(statearr_42991_43054[(2)] = inst_42860);

(statearr_42991_43054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (5))){
var inst_42806 = cljs.core.deref.call(null,cs);
var inst_42807 = cljs.core.seq.call(null,inst_42806);
var inst_42808 = inst_42807;
var inst_42809 = null;
var inst_42810 = (0);
var inst_42811 = (0);
var state_42931__$1 = (function (){var statearr_42992 = state_42931;
(statearr_42992[(13)] = inst_42811);

(statearr_42992[(14)] = inst_42810);

(statearr_42992[(16)] = inst_42808);

(statearr_42992[(17)] = inst_42809);

return statearr_42992;
})();
var statearr_42993_43055 = state_42931__$1;
(statearr_42993_43055[(2)] = null);

(statearr_42993_43055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (14))){
var state_42931__$1 = state_42931;
var statearr_42994_43056 = state_42931__$1;
(statearr_42994_43056[(2)] = null);

(statearr_42994_43056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (45))){
var inst_42921 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_42995_43057 = state_42931__$1;
(statearr_42995_43057[(2)] = inst_42921);

(statearr_42995_43057[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (26))){
var inst_42863 = (state_42931[(29)]);
var inst_42917 = (state_42931[(2)]);
var inst_42918 = cljs.core.seq.call(null,inst_42863);
var state_42931__$1 = (function (){var statearr_42996 = state_42931;
(statearr_42996[(31)] = inst_42917);

return statearr_42996;
})();
if(inst_42918){
var statearr_42997_43058 = state_42931__$1;
(statearr_42997_43058[(1)] = (42));

} else {
var statearr_42998_43059 = state_42931__$1;
(statearr_42998_43059[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (16))){
var inst_42830 = (state_42931[(7)]);
var inst_42832 = cljs.core.chunked_seq_QMARK_.call(null,inst_42830);
var state_42931__$1 = state_42931;
if(inst_42832){
var statearr_42999_43060 = state_42931__$1;
(statearr_42999_43060[(1)] = (19));

} else {
var statearr_43000_43061 = state_42931__$1;
(statearr_43000_43061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (38))){
var inst_42910 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_43001_43062 = state_42931__$1;
(statearr_43001_43062[(2)] = inst_42910);

(statearr_43001_43062[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (30))){
var state_42931__$1 = state_42931;
var statearr_43002_43063 = state_42931__$1;
(statearr_43002_43063[(2)] = null);

(statearr_43002_43063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (10))){
var inst_42811 = (state_42931[(13)]);
var inst_42809 = (state_42931[(17)]);
var inst_42819 = cljs.core._nth.call(null,inst_42809,inst_42811);
var inst_42820 = cljs.core.nth.call(null,inst_42819,(0),null);
var inst_42821 = cljs.core.nth.call(null,inst_42819,(1),null);
var state_42931__$1 = (function (){var statearr_43003 = state_42931;
(statearr_43003[(26)] = inst_42820);

return statearr_43003;
})();
if(cljs.core.truth_(inst_42821)){
var statearr_43004_43064 = state_42931__$1;
(statearr_43004_43064[(1)] = (13));

} else {
var statearr_43005_43065 = state_42931__$1;
(statearr_43005_43065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (18))){
var inst_42856 = (state_42931[(2)]);
var state_42931__$1 = state_42931;
var statearr_43006_43066 = state_42931__$1;
(statearr_43006_43066[(2)] = inst_42856);

(statearr_43006_43066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (42))){
var state_42931__$1 = state_42931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42931__$1,(45),dchan);
} else {
if((state_val_42932 === (37))){
var inst_42899 = (state_42931[(23)]);
var inst_42799 = (state_42931[(9)]);
var inst_42890 = (state_42931[(25)]);
var inst_42899__$1 = cljs.core.first.call(null,inst_42890);
var inst_42900 = cljs.core.async.put_BANG_.call(null,inst_42899__$1,inst_42799,done);
var state_42931__$1 = (function (){var statearr_43007 = state_42931;
(statearr_43007[(23)] = inst_42899__$1);

return statearr_43007;
})();
if(cljs.core.truth_(inst_42900)){
var statearr_43008_43067 = state_42931__$1;
(statearr_43008_43067[(1)] = (39));

} else {
var statearr_43009_43068 = state_42931__$1;
(statearr_43009_43068[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42932 === (8))){
var inst_42811 = (state_42931[(13)]);
var inst_42810 = (state_42931[(14)]);
var inst_42813 = (inst_42811 < inst_42810);
var inst_42814 = inst_42813;
var state_42931__$1 = state_42931;
if(cljs.core.truth_(inst_42814)){
var statearr_43010_43069 = state_42931__$1;
(statearr_43010_43069[(1)] = (10));

} else {
var statearr_43011_43070 = state_42931__$1;
(statearr_43011_43070[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43016,cs,m,dchan,dctr,done))
;
return ((function (switch__42123__auto__,c__42211__auto___43016,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42124__auto__ = null;
var cljs$core$async$mult_$_state_machine__42124__auto____0 = (function (){
var statearr_43012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43012[(0)] = cljs$core$async$mult_$_state_machine__42124__auto__);

(statearr_43012[(1)] = (1));

return statearr_43012;
});
var cljs$core$async$mult_$_state_machine__42124__auto____1 = (function (state_42931){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_42931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43013){if((e43013 instanceof Object)){
var ex__42127__auto__ = e43013;
var statearr_43014_43071 = state_42931;
(statearr_43014_43071[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43072 = state_42931;
state_42931 = G__43072;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42124__auto__ = function(state_42931){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42124__auto____1.call(this,state_42931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42124__auto____0;
cljs$core$async$mult_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42124__auto____1;
return cljs$core$async$mult_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43016,cs,m,dchan,dctr,done))
})();
var state__42213__auto__ = (function (){var statearr_43015 = f__42212__auto__.call(null);
(statearr_43015[(6)] = c__42211__auto___43016);

return statearr_43015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43016,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43074 = arguments.length;
switch (G__43074) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m);
} else {
var m__28823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,state_map);
} else {
var m__28823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28822__auto__ = (((m == null))?null:m);
var m__28823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,m,mode);
} else {
var m__28823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___43086 = arguments.length;
var i__29309__auto___43087 = (0);
while(true){
if((i__29309__auto___43087 < len__29308__auto___43086)){
args__29315__auto__.push((arguments[i__29309__auto___43087]));

var G__43088 = (i__29309__auto___43087 + (1));
i__29309__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43080){
var map__43081 = p__43080;
var map__43081__$1 = ((((!((map__43081 == null)))?((((map__43081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43081):map__43081);
var opts = map__43081__$1;
var statearr_43083_43089 = state;
(statearr_43083_43089[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43081,map__43081__$1,opts){
return (function (val){
var statearr_43084_43090 = state;
(statearr_43084_43090[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43081,map__43081__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43085_43091 = state;
(statearr_43085_43091[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43076){
var G__43077 = cljs.core.first.call(null,seq43076);
var seq43076__$1 = cljs.core.next.call(null,seq43076);
var G__43078 = cljs.core.first.call(null,seq43076__$1);
var seq43076__$2 = cljs.core.next.call(null,seq43076__$1);
var G__43079 = cljs.core.first.call(null,seq43076__$2);
var seq43076__$3 = cljs.core.next.call(null,seq43076__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43077,G__43078,G__43079,seq43076__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43092 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43093){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43093 = meta43093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43094,meta43093__$1){
var self__ = this;
var _43094__$1 = this;
return (new cljs.core.async.t_cljs$core$async43092(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43093__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43094){
var self__ = this;
var _43094__$1 = this;
return self__.meta43093;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43093","meta43093",-1420964130,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43092";

cljs.core.async.t_cljs$core$async43092.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43092");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43092 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43092(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43093){
return (new cljs.core.async.t_cljs$core$async43092(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43093));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43092(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42211__auto___43256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43196){
var state_val_43197 = (state_43196[(1)]);
if((state_val_43197 === (7))){
var inst_43111 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
var statearr_43198_43257 = state_43196__$1;
(statearr_43198_43257[(2)] = inst_43111);

(statearr_43198_43257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (20))){
var inst_43123 = (state_43196[(7)]);
var state_43196__$1 = state_43196;
var statearr_43199_43258 = state_43196__$1;
(statearr_43199_43258[(2)] = inst_43123);

(statearr_43199_43258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (27))){
var state_43196__$1 = state_43196;
var statearr_43200_43259 = state_43196__$1;
(statearr_43200_43259[(2)] = null);

(statearr_43200_43259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (1))){
var inst_43098 = (state_43196[(8)]);
var inst_43098__$1 = calc_state.call(null);
var inst_43100 = (inst_43098__$1 == null);
var inst_43101 = cljs.core.not.call(null,inst_43100);
var state_43196__$1 = (function (){var statearr_43201 = state_43196;
(statearr_43201[(8)] = inst_43098__$1);

return statearr_43201;
})();
if(inst_43101){
var statearr_43202_43260 = state_43196__$1;
(statearr_43202_43260[(1)] = (2));

} else {
var statearr_43203_43261 = state_43196__$1;
(statearr_43203_43261[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (24))){
var inst_43147 = (state_43196[(9)]);
var inst_43170 = (state_43196[(10)]);
var inst_43156 = (state_43196[(11)]);
var inst_43170__$1 = inst_43147.call(null,inst_43156);
var state_43196__$1 = (function (){var statearr_43204 = state_43196;
(statearr_43204[(10)] = inst_43170__$1);

return statearr_43204;
})();
if(cljs.core.truth_(inst_43170__$1)){
var statearr_43205_43262 = state_43196__$1;
(statearr_43205_43262[(1)] = (29));

} else {
var statearr_43206_43263 = state_43196__$1;
(statearr_43206_43263[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (4))){
var inst_43114 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43114)){
var statearr_43207_43264 = state_43196__$1;
(statearr_43207_43264[(1)] = (8));

} else {
var statearr_43208_43265 = state_43196__$1;
(statearr_43208_43265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (15))){
var inst_43141 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43141)){
var statearr_43209_43266 = state_43196__$1;
(statearr_43209_43266[(1)] = (19));

} else {
var statearr_43210_43267 = state_43196__$1;
(statearr_43210_43267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (21))){
var inst_43146 = (state_43196[(12)]);
var inst_43146__$1 = (state_43196[(2)]);
var inst_43147 = cljs.core.get.call(null,inst_43146__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43148 = cljs.core.get.call(null,inst_43146__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43149 = cljs.core.get.call(null,inst_43146__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43196__$1 = (function (){var statearr_43211 = state_43196;
(statearr_43211[(9)] = inst_43147);

(statearr_43211[(12)] = inst_43146__$1);

(statearr_43211[(13)] = inst_43148);

return statearr_43211;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43196__$1,(22),inst_43149);
} else {
if((state_val_43197 === (31))){
var inst_43178 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43178)){
var statearr_43212_43268 = state_43196__$1;
(statearr_43212_43268[(1)] = (32));

} else {
var statearr_43213_43269 = state_43196__$1;
(statearr_43213_43269[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (32))){
var inst_43155 = (state_43196[(14)]);
var state_43196__$1 = state_43196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43196__$1,(35),out,inst_43155);
} else {
if((state_val_43197 === (33))){
var inst_43146 = (state_43196[(12)]);
var inst_43123 = inst_43146;
var state_43196__$1 = (function (){var statearr_43214 = state_43196;
(statearr_43214[(7)] = inst_43123);

return statearr_43214;
})();
var statearr_43215_43270 = state_43196__$1;
(statearr_43215_43270[(2)] = null);

(statearr_43215_43270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (13))){
var inst_43123 = (state_43196[(7)]);
var inst_43130 = inst_43123.cljs$lang$protocol_mask$partition0$;
var inst_43131 = (inst_43130 & (64));
var inst_43132 = inst_43123.cljs$core$ISeq$;
var inst_43133 = (cljs.core.PROTOCOL_SENTINEL === inst_43132);
var inst_43134 = (inst_43131) || (inst_43133);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43134)){
var statearr_43216_43271 = state_43196__$1;
(statearr_43216_43271[(1)] = (16));

} else {
var statearr_43217_43272 = state_43196__$1;
(statearr_43217_43272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (22))){
var inst_43155 = (state_43196[(14)]);
var inst_43156 = (state_43196[(11)]);
var inst_43154 = (state_43196[(2)]);
var inst_43155__$1 = cljs.core.nth.call(null,inst_43154,(0),null);
var inst_43156__$1 = cljs.core.nth.call(null,inst_43154,(1),null);
var inst_43157 = (inst_43155__$1 == null);
var inst_43158 = cljs.core._EQ_.call(null,inst_43156__$1,change);
var inst_43159 = (inst_43157) || (inst_43158);
var state_43196__$1 = (function (){var statearr_43218 = state_43196;
(statearr_43218[(14)] = inst_43155__$1);

(statearr_43218[(11)] = inst_43156__$1);

return statearr_43218;
})();
if(cljs.core.truth_(inst_43159)){
var statearr_43219_43273 = state_43196__$1;
(statearr_43219_43273[(1)] = (23));

} else {
var statearr_43220_43274 = state_43196__$1;
(statearr_43220_43274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (36))){
var inst_43146 = (state_43196[(12)]);
var inst_43123 = inst_43146;
var state_43196__$1 = (function (){var statearr_43221 = state_43196;
(statearr_43221[(7)] = inst_43123);

return statearr_43221;
})();
var statearr_43222_43275 = state_43196__$1;
(statearr_43222_43275[(2)] = null);

(statearr_43222_43275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (29))){
var inst_43170 = (state_43196[(10)]);
var state_43196__$1 = state_43196;
var statearr_43223_43276 = state_43196__$1;
(statearr_43223_43276[(2)] = inst_43170);

(statearr_43223_43276[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (6))){
var state_43196__$1 = state_43196;
var statearr_43224_43277 = state_43196__$1;
(statearr_43224_43277[(2)] = false);

(statearr_43224_43277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (28))){
var inst_43166 = (state_43196[(2)]);
var inst_43167 = calc_state.call(null);
var inst_43123 = inst_43167;
var state_43196__$1 = (function (){var statearr_43225 = state_43196;
(statearr_43225[(7)] = inst_43123);

(statearr_43225[(15)] = inst_43166);

return statearr_43225;
})();
var statearr_43226_43278 = state_43196__$1;
(statearr_43226_43278[(2)] = null);

(statearr_43226_43278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (25))){
var inst_43192 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
var statearr_43227_43279 = state_43196__$1;
(statearr_43227_43279[(2)] = inst_43192);

(statearr_43227_43279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (34))){
var inst_43190 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
var statearr_43228_43280 = state_43196__$1;
(statearr_43228_43280[(2)] = inst_43190);

(statearr_43228_43280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (17))){
var state_43196__$1 = state_43196;
var statearr_43229_43281 = state_43196__$1;
(statearr_43229_43281[(2)] = false);

(statearr_43229_43281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (3))){
var state_43196__$1 = state_43196;
var statearr_43230_43282 = state_43196__$1;
(statearr_43230_43282[(2)] = false);

(statearr_43230_43282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (12))){
var inst_43194 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43196__$1,inst_43194);
} else {
if((state_val_43197 === (2))){
var inst_43098 = (state_43196[(8)]);
var inst_43103 = inst_43098.cljs$lang$protocol_mask$partition0$;
var inst_43104 = (inst_43103 & (64));
var inst_43105 = inst_43098.cljs$core$ISeq$;
var inst_43106 = (cljs.core.PROTOCOL_SENTINEL === inst_43105);
var inst_43107 = (inst_43104) || (inst_43106);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43107)){
var statearr_43231_43283 = state_43196__$1;
(statearr_43231_43283[(1)] = (5));

} else {
var statearr_43232_43284 = state_43196__$1;
(statearr_43232_43284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (23))){
var inst_43155 = (state_43196[(14)]);
var inst_43161 = (inst_43155 == null);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43161)){
var statearr_43233_43285 = state_43196__$1;
(statearr_43233_43285[(1)] = (26));

} else {
var statearr_43234_43286 = state_43196__$1;
(statearr_43234_43286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (35))){
var inst_43181 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
if(cljs.core.truth_(inst_43181)){
var statearr_43235_43287 = state_43196__$1;
(statearr_43235_43287[(1)] = (36));

} else {
var statearr_43236_43288 = state_43196__$1;
(statearr_43236_43288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (19))){
var inst_43123 = (state_43196[(7)]);
var inst_43143 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43123);
var state_43196__$1 = state_43196;
var statearr_43237_43289 = state_43196__$1;
(statearr_43237_43289[(2)] = inst_43143);

(statearr_43237_43289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (11))){
var inst_43123 = (state_43196[(7)]);
var inst_43127 = (inst_43123 == null);
var inst_43128 = cljs.core.not.call(null,inst_43127);
var state_43196__$1 = state_43196;
if(inst_43128){
var statearr_43238_43290 = state_43196__$1;
(statearr_43238_43290[(1)] = (13));

} else {
var statearr_43239_43291 = state_43196__$1;
(statearr_43239_43291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (9))){
var inst_43098 = (state_43196[(8)]);
var state_43196__$1 = state_43196;
var statearr_43240_43292 = state_43196__$1;
(statearr_43240_43292[(2)] = inst_43098);

(statearr_43240_43292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (5))){
var state_43196__$1 = state_43196;
var statearr_43241_43293 = state_43196__$1;
(statearr_43241_43293[(2)] = true);

(statearr_43241_43293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (14))){
var state_43196__$1 = state_43196;
var statearr_43242_43294 = state_43196__$1;
(statearr_43242_43294[(2)] = false);

(statearr_43242_43294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (26))){
var inst_43156 = (state_43196[(11)]);
var inst_43163 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43156);
var state_43196__$1 = state_43196;
var statearr_43243_43295 = state_43196__$1;
(statearr_43243_43295[(2)] = inst_43163);

(statearr_43243_43295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (16))){
var state_43196__$1 = state_43196;
var statearr_43244_43296 = state_43196__$1;
(statearr_43244_43296[(2)] = true);

(statearr_43244_43296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (38))){
var inst_43186 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
var statearr_43245_43297 = state_43196__$1;
(statearr_43245_43297[(2)] = inst_43186);

(statearr_43245_43297[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (30))){
var inst_43147 = (state_43196[(9)]);
var inst_43156 = (state_43196[(11)]);
var inst_43148 = (state_43196[(13)]);
var inst_43173 = cljs.core.empty_QMARK_.call(null,inst_43147);
var inst_43174 = inst_43148.call(null,inst_43156);
var inst_43175 = cljs.core.not.call(null,inst_43174);
var inst_43176 = (inst_43173) && (inst_43175);
var state_43196__$1 = state_43196;
var statearr_43246_43298 = state_43196__$1;
(statearr_43246_43298[(2)] = inst_43176);

(statearr_43246_43298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (10))){
var inst_43098 = (state_43196[(8)]);
var inst_43119 = (state_43196[(2)]);
var inst_43120 = cljs.core.get.call(null,inst_43119,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43121 = cljs.core.get.call(null,inst_43119,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43122 = cljs.core.get.call(null,inst_43119,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43123 = inst_43098;
var state_43196__$1 = (function (){var statearr_43247 = state_43196;
(statearr_43247[(7)] = inst_43123);

(statearr_43247[(16)] = inst_43120);

(statearr_43247[(17)] = inst_43122);

(statearr_43247[(18)] = inst_43121);

return statearr_43247;
})();
var statearr_43248_43299 = state_43196__$1;
(statearr_43248_43299[(2)] = null);

(statearr_43248_43299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (18))){
var inst_43138 = (state_43196[(2)]);
var state_43196__$1 = state_43196;
var statearr_43249_43300 = state_43196__$1;
(statearr_43249_43300[(2)] = inst_43138);

(statearr_43249_43300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (37))){
var state_43196__$1 = state_43196;
var statearr_43250_43301 = state_43196__$1;
(statearr_43250_43301[(2)] = null);

(statearr_43250_43301[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43197 === (8))){
var inst_43098 = (state_43196[(8)]);
var inst_43116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43098);
var state_43196__$1 = state_43196;
var statearr_43251_43302 = state_43196__$1;
(statearr_43251_43302[(2)] = inst_43116);

(statearr_43251_43302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42123__auto__,c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42124__auto__ = null;
var cljs$core$async$mix_$_state_machine__42124__auto____0 = (function (){
var statearr_43252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43252[(0)] = cljs$core$async$mix_$_state_machine__42124__auto__);

(statearr_43252[(1)] = (1));

return statearr_43252;
});
var cljs$core$async$mix_$_state_machine__42124__auto____1 = (function (state_43196){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43253){if((e43253 instanceof Object)){
var ex__42127__auto__ = e43253;
var statearr_43254_43303 = state_43196;
(statearr_43254_43303[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43304 = state_43196;
state_43196 = G__43304;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42124__auto__ = function(state_43196){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42124__auto____1.call(this,state_43196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42124__auto____0;
cljs$core$async$mix_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42124__auto____1;
return cljs$core$async$mix_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42213__auto__ = (function (){var statearr_43255 = f__42212__auto__.call(null);
(statearr_43255[(6)] = c__42211__auto___43256);

return statearr_43255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v,ch);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43306 = arguments.length;
switch (G__43306) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28822__auto__ = (((p == null))?null:p);
var m__28823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,p,v);
} else {
var m__28823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43310 = arguments.length;
switch (G__43310) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28139__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28139__auto__,mults){
return (function (p1__43308_SHARP_){
if(cljs.core.truth_(p1__43308_SHARP_.call(null,topic))){
return p1__43308_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43308_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28139__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43311 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43312){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43312 = meta43312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43313,meta43312__$1){
var self__ = this;
var _43313__$1 = this;
return (new cljs.core.async.t_cljs$core$async43311(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43312__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43313){
var self__ = this;
var _43313__$1 = this;
return self__.meta43312;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43312","meta43312",-899441445,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43311";

cljs.core.async.t_cljs$core$async43311.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43311");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43311 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43311(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43312){
return (new cljs.core.async.t_cljs$core$async43311(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43312));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43311(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42211__auto___43431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43431,mults,ensure_mult,p){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43431,mults,ensure_mult,p){
return (function (state_43385){
var state_val_43386 = (state_43385[(1)]);
if((state_val_43386 === (7))){
var inst_43381 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43387_43432 = state_43385__$1;
(statearr_43387_43432[(2)] = inst_43381);

(statearr_43387_43432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (20))){
var state_43385__$1 = state_43385;
var statearr_43388_43433 = state_43385__$1;
(statearr_43388_43433[(2)] = null);

(statearr_43388_43433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (1))){
var state_43385__$1 = state_43385;
var statearr_43389_43434 = state_43385__$1;
(statearr_43389_43434[(2)] = null);

(statearr_43389_43434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (24))){
var inst_43364 = (state_43385[(7)]);
var inst_43373 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43364);
var state_43385__$1 = state_43385;
var statearr_43390_43435 = state_43385__$1;
(statearr_43390_43435[(2)] = inst_43373);

(statearr_43390_43435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (4))){
var inst_43316 = (state_43385[(8)]);
var inst_43316__$1 = (state_43385[(2)]);
var inst_43317 = (inst_43316__$1 == null);
var state_43385__$1 = (function (){var statearr_43391 = state_43385;
(statearr_43391[(8)] = inst_43316__$1);

return statearr_43391;
})();
if(cljs.core.truth_(inst_43317)){
var statearr_43392_43436 = state_43385__$1;
(statearr_43392_43436[(1)] = (5));

} else {
var statearr_43393_43437 = state_43385__$1;
(statearr_43393_43437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (15))){
var inst_43358 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43394_43438 = state_43385__$1;
(statearr_43394_43438[(2)] = inst_43358);

(statearr_43394_43438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (21))){
var inst_43378 = (state_43385[(2)]);
var state_43385__$1 = (function (){var statearr_43395 = state_43385;
(statearr_43395[(9)] = inst_43378);

return statearr_43395;
})();
var statearr_43396_43439 = state_43385__$1;
(statearr_43396_43439[(2)] = null);

(statearr_43396_43439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (13))){
var inst_43340 = (state_43385[(10)]);
var inst_43342 = cljs.core.chunked_seq_QMARK_.call(null,inst_43340);
var state_43385__$1 = state_43385;
if(inst_43342){
var statearr_43397_43440 = state_43385__$1;
(statearr_43397_43440[(1)] = (16));

} else {
var statearr_43398_43441 = state_43385__$1;
(statearr_43398_43441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (22))){
var inst_43370 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
if(cljs.core.truth_(inst_43370)){
var statearr_43399_43442 = state_43385__$1;
(statearr_43399_43442[(1)] = (23));

} else {
var statearr_43400_43443 = state_43385__$1;
(statearr_43400_43443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (6))){
var inst_43366 = (state_43385[(11)]);
var inst_43364 = (state_43385[(7)]);
var inst_43316 = (state_43385[(8)]);
var inst_43364__$1 = topic_fn.call(null,inst_43316);
var inst_43365 = cljs.core.deref.call(null,mults);
var inst_43366__$1 = cljs.core.get.call(null,inst_43365,inst_43364__$1);
var state_43385__$1 = (function (){var statearr_43401 = state_43385;
(statearr_43401[(11)] = inst_43366__$1);

(statearr_43401[(7)] = inst_43364__$1);

return statearr_43401;
})();
if(cljs.core.truth_(inst_43366__$1)){
var statearr_43402_43444 = state_43385__$1;
(statearr_43402_43444[(1)] = (19));

} else {
var statearr_43403_43445 = state_43385__$1;
(statearr_43403_43445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (25))){
var inst_43375 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43404_43446 = state_43385__$1;
(statearr_43404_43446[(2)] = inst_43375);

(statearr_43404_43446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (17))){
var inst_43340 = (state_43385[(10)]);
var inst_43349 = cljs.core.first.call(null,inst_43340);
var inst_43350 = cljs.core.async.muxch_STAR_.call(null,inst_43349);
var inst_43351 = cljs.core.async.close_BANG_.call(null,inst_43350);
var inst_43352 = cljs.core.next.call(null,inst_43340);
var inst_43326 = inst_43352;
var inst_43327 = null;
var inst_43328 = (0);
var inst_43329 = (0);
var state_43385__$1 = (function (){var statearr_43405 = state_43385;
(statearr_43405[(12)] = inst_43328);

(statearr_43405[(13)] = inst_43327);

(statearr_43405[(14)] = inst_43326);

(statearr_43405[(15)] = inst_43329);

(statearr_43405[(16)] = inst_43351);

return statearr_43405;
})();
var statearr_43406_43447 = state_43385__$1;
(statearr_43406_43447[(2)] = null);

(statearr_43406_43447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (3))){
var inst_43383 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43385__$1,inst_43383);
} else {
if((state_val_43386 === (12))){
var inst_43360 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43407_43448 = state_43385__$1;
(statearr_43407_43448[(2)] = inst_43360);

(statearr_43407_43448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (2))){
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43385__$1,(4),ch);
} else {
if((state_val_43386 === (23))){
var state_43385__$1 = state_43385;
var statearr_43408_43449 = state_43385__$1;
(statearr_43408_43449[(2)] = null);

(statearr_43408_43449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (19))){
var inst_43366 = (state_43385[(11)]);
var inst_43316 = (state_43385[(8)]);
var inst_43368 = cljs.core.async.muxch_STAR_.call(null,inst_43366);
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43385__$1,(22),inst_43368,inst_43316);
} else {
if((state_val_43386 === (11))){
var inst_43326 = (state_43385[(14)]);
var inst_43340 = (state_43385[(10)]);
var inst_43340__$1 = cljs.core.seq.call(null,inst_43326);
var state_43385__$1 = (function (){var statearr_43409 = state_43385;
(statearr_43409[(10)] = inst_43340__$1);

return statearr_43409;
})();
if(inst_43340__$1){
var statearr_43410_43450 = state_43385__$1;
(statearr_43410_43450[(1)] = (13));

} else {
var statearr_43411_43451 = state_43385__$1;
(statearr_43411_43451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (9))){
var inst_43362 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43412_43452 = state_43385__$1;
(statearr_43412_43452[(2)] = inst_43362);

(statearr_43412_43452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (5))){
var inst_43323 = cljs.core.deref.call(null,mults);
var inst_43324 = cljs.core.vals.call(null,inst_43323);
var inst_43325 = cljs.core.seq.call(null,inst_43324);
var inst_43326 = inst_43325;
var inst_43327 = null;
var inst_43328 = (0);
var inst_43329 = (0);
var state_43385__$1 = (function (){var statearr_43413 = state_43385;
(statearr_43413[(12)] = inst_43328);

(statearr_43413[(13)] = inst_43327);

(statearr_43413[(14)] = inst_43326);

(statearr_43413[(15)] = inst_43329);

return statearr_43413;
})();
var statearr_43414_43453 = state_43385__$1;
(statearr_43414_43453[(2)] = null);

(statearr_43414_43453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (14))){
var state_43385__$1 = state_43385;
var statearr_43418_43454 = state_43385__$1;
(statearr_43418_43454[(2)] = null);

(statearr_43418_43454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (16))){
var inst_43340 = (state_43385[(10)]);
var inst_43344 = cljs.core.chunk_first.call(null,inst_43340);
var inst_43345 = cljs.core.chunk_rest.call(null,inst_43340);
var inst_43346 = cljs.core.count.call(null,inst_43344);
var inst_43326 = inst_43345;
var inst_43327 = inst_43344;
var inst_43328 = inst_43346;
var inst_43329 = (0);
var state_43385__$1 = (function (){var statearr_43419 = state_43385;
(statearr_43419[(12)] = inst_43328);

(statearr_43419[(13)] = inst_43327);

(statearr_43419[(14)] = inst_43326);

(statearr_43419[(15)] = inst_43329);

return statearr_43419;
})();
var statearr_43420_43455 = state_43385__$1;
(statearr_43420_43455[(2)] = null);

(statearr_43420_43455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (10))){
var inst_43328 = (state_43385[(12)]);
var inst_43327 = (state_43385[(13)]);
var inst_43326 = (state_43385[(14)]);
var inst_43329 = (state_43385[(15)]);
var inst_43334 = cljs.core._nth.call(null,inst_43327,inst_43329);
var inst_43335 = cljs.core.async.muxch_STAR_.call(null,inst_43334);
var inst_43336 = cljs.core.async.close_BANG_.call(null,inst_43335);
var inst_43337 = (inst_43329 + (1));
var tmp43415 = inst_43328;
var tmp43416 = inst_43327;
var tmp43417 = inst_43326;
var inst_43326__$1 = tmp43417;
var inst_43327__$1 = tmp43416;
var inst_43328__$1 = tmp43415;
var inst_43329__$1 = inst_43337;
var state_43385__$1 = (function (){var statearr_43421 = state_43385;
(statearr_43421[(12)] = inst_43328__$1);

(statearr_43421[(13)] = inst_43327__$1);

(statearr_43421[(14)] = inst_43326__$1);

(statearr_43421[(17)] = inst_43336);

(statearr_43421[(15)] = inst_43329__$1);

return statearr_43421;
})();
var statearr_43422_43456 = state_43385__$1;
(statearr_43422_43456[(2)] = null);

(statearr_43422_43456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (18))){
var inst_43355 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43423_43457 = state_43385__$1;
(statearr_43423_43457[(2)] = inst_43355);

(statearr_43423_43457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43386 === (8))){
var inst_43328 = (state_43385[(12)]);
var inst_43329 = (state_43385[(15)]);
var inst_43331 = (inst_43329 < inst_43328);
var inst_43332 = inst_43331;
var state_43385__$1 = state_43385;
if(cljs.core.truth_(inst_43332)){
var statearr_43424_43458 = state_43385__$1;
(statearr_43424_43458[(1)] = (10));

} else {
var statearr_43425_43459 = state_43385__$1;
(statearr_43425_43459[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43431,mults,ensure_mult,p))
;
return ((function (switch__42123__auto__,c__42211__auto___43431,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43426[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43426[(1)] = (1));

return statearr_43426;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43385){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43427){if((e43427 instanceof Object)){
var ex__42127__auto__ = e43427;
var statearr_43428_43460 = state_43385;
(statearr_43428_43460[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43461 = state_43385;
state_43385 = G__43461;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43431,mults,ensure_mult,p))
})();
var state__42213__auto__ = (function (){var statearr_43429 = f__42212__auto__.call(null);
(statearr_43429[(6)] = c__42211__auto___43431);

return statearr_43429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43431,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43463 = arguments.length;
switch (G__43463) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43469 = arguments.length;
switch (G__43469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__42211__auto___43536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43508){
var state_val_43509 = (state_43508[(1)]);
if((state_val_43509 === (7))){
var state_43508__$1 = state_43508;
var statearr_43510_43537 = state_43508__$1;
(statearr_43510_43537[(2)] = null);

(statearr_43510_43537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (1))){
var state_43508__$1 = state_43508;
var statearr_43511_43538 = state_43508__$1;
(statearr_43511_43538[(2)] = null);

(statearr_43511_43538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (4))){
var inst_43472 = (state_43508[(7)]);
var inst_43474 = (inst_43472 < cnt);
var state_43508__$1 = state_43508;
if(cljs.core.truth_(inst_43474)){
var statearr_43512_43539 = state_43508__$1;
(statearr_43512_43539[(1)] = (6));

} else {
var statearr_43513_43540 = state_43508__$1;
(statearr_43513_43540[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (15))){
var inst_43504 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
var statearr_43514_43541 = state_43508__$1;
(statearr_43514_43541[(2)] = inst_43504);

(statearr_43514_43541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (13))){
var inst_43497 = cljs.core.async.close_BANG_.call(null,out);
var state_43508__$1 = state_43508;
var statearr_43515_43542 = state_43508__$1;
(statearr_43515_43542[(2)] = inst_43497);

(statearr_43515_43542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (6))){
var state_43508__$1 = state_43508;
var statearr_43516_43543 = state_43508__$1;
(statearr_43516_43543[(2)] = null);

(statearr_43516_43543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (3))){
var inst_43506 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43508__$1,inst_43506);
} else {
if((state_val_43509 === (12))){
var inst_43494 = (state_43508[(8)]);
var inst_43494__$1 = (state_43508[(2)]);
var inst_43495 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43494__$1);
var state_43508__$1 = (function (){var statearr_43517 = state_43508;
(statearr_43517[(8)] = inst_43494__$1);

return statearr_43517;
})();
if(cljs.core.truth_(inst_43495)){
var statearr_43518_43544 = state_43508__$1;
(statearr_43518_43544[(1)] = (13));

} else {
var statearr_43519_43545 = state_43508__$1;
(statearr_43519_43545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (2))){
var inst_43471 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43472 = (0);
var state_43508__$1 = (function (){var statearr_43520 = state_43508;
(statearr_43520[(9)] = inst_43471);

(statearr_43520[(7)] = inst_43472);

return statearr_43520;
})();
var statearr_43521_43546 = state_43508__$1;
(statearr_43521_43546[(2)] = null);

(statearr_43521_43546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (11))){
var inst_43472 = (state_43508[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43508,(10),Object,null,(9));
var inst_43481 = chs__$1.call(null,inst_43472);
var inst_43482 = done.call(null,inst_43472);
var inst_43483 = cljs.core.async.take_BANG_.call(null,inst_43481,inst_43482);
var state_43508__$1 = state_43508;
var statearr_43522_43547 = state_43508__$1;
(statearr_43522_43547[(2)] = inst_43483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (9))){
var inst_43472 = (state_43508[(7)]);
var inst_43485 = (state_43508[(2)]);
var inst_43486 = (inst_43472 + (1));
var inst_43472__$1 = inst_43486;
var state_43508__$1 = (function (){var statearr_43523 = state_43508;
(statearr_43523[(7)] = inst_43472__$1);

(statearr_43523[(10)] = inst_43485);

return statearr_43523;
})();
var statearr_43524_43548 = state_43508__$1;
(statearr_43524_43548[(2)] = null);

(statearr_43524_43548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (5))){
var inst_43492 = (state_43508[(2)]);
var state_43508__$1 = (function (){var statearr_43525 = state_43508;
(statearr_43525[(11)] = inst_43492);

return statearr_43525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43508__$1,(12),dchan);
} else {
if((state_val_43509 === (14))){
var inst_43494 = (state_43508[(8)]);
var inst_43499 = cljs.core.apply.call(null,f,inst_43494);
var state_43508__$1 = state_43508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43508__$1,(16),out,inst_43499);
} else {
if((state_val_43509 === (16))){
var inst_43501 = (state_43508[(2)]);
var state_43508__$1 = (function (){var statearr_43526 = state_43508;
(statearr_43526[(12)] = inst_43501);

return statearr_43526;
})();
var statearr_43527_43549 = state_43508__$1;
(statearr_43527_43549[(2)] = null);

(statearr_43527_43549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (10))){
var inst_43476 = (state_43508[(2)]);
var inst_43477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43508__$1 = (function (){var statearr_43528 = state_43508;
(statearr_43528[(13)] = inst_43476);

return statearr_43528;
})();
var statearr_43529_43550 = state_43508__$1;
(statearr_43529_43550[(2)] = inst_43477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43509 === (8))){
var inst_43490 = (state_43508[(2)]);
var state_43508__$1 = state_43508;
var statearr_43530_43551 = state_43508__$1;
(statearr_43530_43551[(2)] = inst_43490);

(statearr_43530_43551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42123__auto__,c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43531[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43531[(1)] = (1));

return statearr_43531;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43508){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43532){if((e43532 instanceof Object)){
var ex__42127__auto__ = e43532;
var statearr_43533_43552 = state_43508;
(statearr_43533_43552[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43553 = state_43508;
state_43508 = G__43553;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42213__auto__ = (function (){var statearr_43534 = f__42212__auto__.call(null);
(statearr_43534[(6)] = c__42211__auto___43536);

return statearr_43534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43536,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43556 = arguments.length;
switch (G__43556) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___43610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43610,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43610,out){
return (function (state_43588){
var state_val_43589 = (state_43588[(1)]);
if((state_val_43589 === (7))){
var inst_43567 = (state_43588[(7)]);
var inst_43568 = (state_43588[(8)]);
var inst_43567__$1 = (state_43588[(2)]);
var inst_43568__$1 = cljs.core.nth.call(null,inst_43567__$1,(0),null);
var inst_43569 = cljs.core.nth.call(null,inst_43567__$1,(1),null);
var inst_43570 = (inst_43568__$1 == null);
var state_43588__$1 = (function (){var statearr_43590 = state_43588;
(statearr_43590[(7)] = inst_43567__$1);

(statearr_43590[(8)] = inst_43568__$1);

(statearr_43590[(9)] = inst_43569);

return statearr_43590;
})();
if(cljs.core.truth_(inst_43570)){
var statearr_43591_43611 = state_43588__$1;
(statearr_43591_43611[(1)] = (8));

} else {
var statearr_43592_43612 = state_43588__$1;
(statearr_43592_43612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (1))){
var inst_43557 = cljs.core.vec.call(null,chs);
var inst_43558 = inst_43557;
var state_43588__$1 = (function (){var statearr_43593 = state_43588;
(statearr_43593[(10)] = inst_43558);

return statearr_43593;
})();
var statearr_43594_43613 = state_43588__$1;
(statearr_43594_43613[(2)] = null);

(statearr_43594_43613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (4))){
var inst_43558 = (state_43588[(10)]);
var state_43588__$1 = state_43588;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43588__$1,(7),inst_43558);
} else {
if((state_val_43589 === (6))){
var inst_43584 = (state_43588[(2)]);
var state_43588__$1 = state_43588;
var statearr_43595_43614 = state_43588__$1;
(statearr_43595_43614[(2)] = inst_43584);

(statearr_43595_43614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (3))){
var inst_43586 = (state_43588[(2)]);
var state_43588__$1 = state_43588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43588__$1,inst_43586);
} else {
if((state_val_43589 === (2))){
var inst_43558 = (state_43588[(10)]);
var inst_43560 = cljs.core.count.call(null,inst_43558);
var inst_43561 = (inst_43560 > (0));
var state_43588__$1 = state_43588;
if(cljs.core.truth_(inst_43561)){
var statearr_43597_43615 = state_43588__$1;
(statearr_43597_43615[(1)] = (4));

} else {
var statearr_43598_43616 = state_43588__$1;
(statearr_43598_43616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (11))){
var inst_43558 = (state_43588[(10)]);
var inst_43577 = (state_43588[(2)]);
var tmp43596 = inst_43558;
var inst_43558__$1 = tmp43596;
var state_43588__$1 = (function (){var statearr_43599 = state_43588;
(statearr_43599[(11)] = inst_43577);

(statearr_43599[(10)] = inst_43558__$1);

return statearr_43599;
})();
var statearr_43600_43617 = state_43588__$1;
(statearr_43600_43617[(2)] = null);

(statearr_43600_43617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (9))){
var inst_43568 = (state_43588[(8)]);
var state_43588__$1 = state_43588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43588__$1,(11),out,inst_43568);
} else {
if((state_val_43589 === (5))){
var inst_43582 = cljs.core.async.close_BANG_.call(null,out);
var state_43588__$1 = state_43588;
var statearr_43601_43618 = state_43588__$1;
(statearr_43601_43618[(2)] = inst_43582);

(statearr_43601_43618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (10))){
var inst_43580 = (state_43588[(2)]);
var state_43588__$1 = state_43588;
var statearr_43602_43619 = state_43588__$1;
(statearr_43602_43619[(2)] = inst_43580);

(statearr_43602_43619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43589 === (8))){
var inst_43567 = (state_43588[(7)]);
var inst_43568 = (state_43588[(8)]);
var inst_43569 = (state_43588[(9)]);
var inst_43558 = (state_43588[(10)]);
var inst_43572 = (function (){var cs = inst_43558;
var vec__43563 = inst_43567;
var v = inst_43568;
var c = inst_43569;
return ((function (cs,vec__43563,v,c,inst_43567,inst_43568,inst_43569,inst_43558,state_val_43589,c__42211__auto___43610,out){
return (function (p1__43554_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43554_SHARP_);
});
;})(cs,vec__43563,v,c,inst_43567,inst_43568,inst_43569,inst_43558,state_val_43589,c__42211__auto___43610,out))
})();
var inst_43573 = cljs.core.filterv.call(null,inst_43572,inst_43558);
var inst_43558__$1 = inst_43573;
var state_43588__$1 = (function (){var statearr_43603 = state_43588;
(statearr_43603[(10)] = inst_43558__$1);

return statearr_43603;
})();
var statearr_43604_43620 = state_43588__$1;
(statearr_43604_43620[(2)] = null);

(statearr_43604_43620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43610,out))
;
return ((function (switch__42123__auto__,c__42211__auto___43610,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43605[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43605[(1)] = (1));

return statearr_43605;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43588){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43606){if((e43606 instanceof Object)){
var ex__42127__auto__ = e43606;
var statearr_43607_43621 = state_43588;
(statearr_43607_43621[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43622 = state_43588;
state_43588 = G__43622;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43610,out))
})();
var state__42213__auto__ = (function (){var statearr_43608 = f__42212__auto__.call(null);
(statearr_43608[(6)] = c__42211__auto___43610);

return statearr_43608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43610,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43624 = arguments.length;
switch (G__43624) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___43669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43669,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43669,out){
return (function (state_43648){
var state_val_43649 = (state_43648[(1)]);
if((state_val_43649 === (7))){
var inst_43630 = (state_43648[(7)]);
var inst_43630__$1 = (state_43648[(2)]);
var inst_43631 = (inst_43630__$1 == null);
var inst_43632 = cljs.core.not.call(null,inst_43631);
var state_43648__$1 = (function (){var statearr_43650 = state_43648;
(statearr_43650[(7)] = inst_43630__$1);

return statearr_43650;
})();
if(inst_43632){
var statearr_43651_43670 = state_43648__$1;
(statearr_43651_43670[(1)] = (8));

} else {
var statearr_43652_43671 = state_43648__$1;
(statearr_43652_43671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (1))){
var inst_43625 = (0);
var state_43648__$1 = (function (){var statearr_43653 = state_43648;
(statearr_43653[(8)] = inst_43625);

return statearr_43653;
})();
var statearr_43654_43672 = state_43648__$1;
(statearr_43654_43672[(2)] = null);

(statearr_43654_43672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (4))){
var state_43648__$1 = state_43648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43648__$1,(7),ch);
} else {
if((state_val_43649 === (6))){
var inst_43643 = (state_43648[(2)]);
var state_43648__$1 = state_43648;
var statearr_43655_43673 = state_43648__$1;
(statearr_43655_43673[(2)] = inst_43643);

(statearr_43655_43673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (3))){
var inst_43645 = (state_43648[(2)]);
var inst_43646 = cljs.core.async.close_BANG_.call(null,out);
var state_43648__$1 = (function (){var statearr_43656 = state_43648;
(statearr_43656[(9)] = inst_43645);

return statearr_43656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43648__$1,inst_43646);
} else {
if((state_val_43649 === (2))){
var inst_43625 = (state_43648[(8)]);
var inst_43627 = (inst_43625 < n);
var state_43648__$1 = state_43648;
if(cljs.core.truth_(inst_43627)){
var statearr_43657_43674 = state_43648__$1;
(statearr_43657_43674[(1)] = (4));

} else {
var statearr_43658_43675 = state_43648__$1;
(statearr_43658_43675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (11))){
var inst_43625 = (state_43648[(8)]);
var inst_43635 = (state_43648[(2)]);
var inst_43636 = (inst_43625 + (1));
var inst_43625__$1 = inst_43636;
var state_43648__$1 = (function (){var statearr_43659 = state_43648;
(statearr_43659[(10)] = inst_43635);

(statearr_43659[(8)] = inst_43625__$1);

return statearr_43659;
})();
var statearr_43660_43676 = state_43648__$1;
(statearr_43660_43676[(2)] = null);

(statearr_43660_43676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (9))){
var state_43648__$1 = state_43648;
var statearr_43661_43677 = state_43648__$1;
(statearr_43661_43677[(2)] = null);

(statearr_43661_43677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (5))){
var state_43648__$1 = state_43648;
var statearr_43662_43678 = state_43648__$1;
(statearr_43662_43678[(2)] = null);

(statearr_43662_43678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (10))){
var inst_43640 = (state_43648[(2)]);
var state_43648__$1 = state_43648;
var statearr_43663_43679 = state_43648__$1;
(statearr_43663_43679[(2)] = inst_43640);

(statearr_43663_43679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43649 === (8))){
var inst_43630 = (state_43648[(7)]);
var state_43648__$1 = state_43648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43648__$1,(11),out,inst_43630);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43669,out))
;
return ((function (switch__42123__auto__,c__42211__auto___43669,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43664[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43664[(1)] = (1));

return statearr_43664;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43648){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43665){if((e43665 instanceof Object)){
var ex__42127__auto__ = e43665;
var statearr_43666_43680 = state_43648;
(statearr_43666_43680[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43681 = state_43648;
state_43648 = G__43681;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43669,out))
})();
var state__42213__auto__ = (function (){var statearr_43667 = f__42212__auto__.call(null);
(statearr_43667[(6)] = c__42211__auto___43669);

return statearr_43667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43669,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43683 = (function (f,ch,meta43684){
this.f = f;
this.ch = ch;
this.meta43684 = meta43684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43685,meta43684__$1){
var self__ = this;
var _43685__$1 = this;
return (new cljs.core.async.t_cljs$core$async43683(self__.f,self__.ch,meta43684__$1));
});

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43685){
var self__ = this;
var _43685__$1 = this;
return self__.meta43684;
});

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43686 = (function (f,ch,meta43684,_,fn1,meta43687){
this.f = f;
this.ch = ch;
this.meta43684 = meta43684;
this._ = _;
this.fn1 = fn1;
this.meta43687 = meta43687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43688,meta43687__$1){
var self__ = this;
var _43688__$1 = this;
return (new cljs.core.async.t_cljs$core$async43686(self__.f,self__.ch,self__.meta43684,self__._,self__.fn1,meta43687__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43688){
var self__ = this;
var _43688__$1 = this;
return self__.meta43687;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43682_SHARP_){
return f1.call(null,(((p1__43682_SHARP_ == null))?null:self__.f.call(null,p1__43682_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43684","meta43684",-1401313923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43683","cljs.core.async/t_cljs$core$async43683",1397353371,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43687","meta43687",523937654,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43686";

cljs.core.async.t_cljs$core$async43686.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43686");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43686 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43686(f__$1,ch__$1,meta43684__$1,___$2,fn1__$1,meta43687){
return (new cljs.core.async.t_cljs$core$async43686(f__$1,ch__$1,meta43684__$1,___$2,fn1__$1,meta43687));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43686(self__.f,self__.ch,self__.meta43684,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28127__auto__ = ret;
if(cljs.core.truth_(and__28127__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28127__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43684","meta43684",-1401313923,null)], null);
});

cljs.core.async.t_cljs$core$async43683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43683";

cljs.core.async.t_cljs$core$async43683.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43683");
});

cljs.core.async.__GT_t_cljs$core$async43683 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43683(f__$1,ch__$1,meta43684){
return (new cljs.core.async.t_cljs$core$async43683(f__$1,ch__$1,meta43684));
});

}

return (new cljs.core.async.t_cljs$core$async43683(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43689 = (function (f,ch,meta43690){
this.f = f;
this.ch = ch;
this.meta43690 = meta43690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43691,meta43690__$1){
var self__ = this;
var _43691__$1 = this;
return (new cljs.core.async.t_cljs$core$async43689(self__.f,self__.ch,meta43690__$1));
});

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43691){
var self__ = this;
var _43691__$1 = this;
return self__.meta43690;
});

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43690","meta43690",-1721610658,null)], null);
});

cljs.core.async.t_cljs$core$async43689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43689";

cljs.core.async.t_cljs$core$async43689.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43689");
});

cljs.core.async.__GT_t_cljs$core$async43689 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43689(f__$1,ch__$1,meta43690){
return (new cljs.core.async.t_cljs$core$async43689(f__$1,ch__$1,meta43690));
});

}

return (new cljs.core.async.t_cljs$core$async43689(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43692 = (function (p,ch,meta43693){
this.p = p;
this.ch = ch;
this.meta43693 = meta43693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43694,meta43693__$1){
var self__ = this;
var _43694__$1 = this;
return (new cljs.core.async.t_cljs$core$async43692(self__.p,self__.ch,meta43693__$1));
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43694){
var self__ = this;
var _43694__$1 = this;
return self__.meta43693;
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43693","meta43693",-1237482688,null)], null);
});

cljs.core.async.t_cljs$core$async43692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43692";

cljs.core.async.t_cljs$core$async43692.cljs$lang$ctorPrWriter = (function (this__28764__auto__,writer__28765__auto__,opt__28766__auto__){
return cljs.core._write.call(null,writer__28765__auto__,"cljs.core.async/t_cljs$core$async43692");
});

cljs.core.async.__GT_t_cljs$core$async43692 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43692(p__$1,ch__$1,meta43693){
return (new cljs.core.async.t_cljs$core$async43692(p__$1,ch__$1,meta43693));
});

}

return (new cljs.core.async.t_cljs$core$async43692(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43696 = arguments.length;
switch (G__43696) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___43736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43736,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43736,out){
return (function (state_43717){
var state_val_43718 = (state_43717[(1)]);
if((state_val_43718 === (7))){
var inst_43713 = (state_43717[(2)]);
var state_43717__$1 = state_43717;
var statearr_43719_43737 = state_43717__$1;
(statearr_43719_43737[(2)] = inst_43713);

(statearr_43719_43737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (1))){
var state_43717__$1 = state_43717;
var statearr_43720_43738 = state_43717__$1;
(statearr_43720_43738[(2)] = null);

(statearr_43720_43738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (4))){
var inst_43699 = (state_43717[(7)]);
var inst_43699__$1 = (state_43717[(2)]);
var inst_43700 = (inst_43699__$1 == null);
var state_43717__$1 = (function (){var statearr_43721 = state_43717;
(statearr_43721[(7)] = inst_43699__$1);

return statearr_43721;
})();
if(cljs.core.truth_(inst_43700)){
var statearr_43722_43739 = state_43717__$1;
(statearr_43722_43739[(1)] = (5));

} else {
var statearr_43723_43740 = state_43717__$1;
(statearr_43723_43740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (6))){
var inst_43699 = (state_43717[(7)]);
var inst_43704 = p.call(null,inst_43699);
var state_43717__$1 = state_43717;
if(cljs.core.truth_(inst_43704)){
var statearr_43724_43741 = state_43717__$1;
(statearr_43724_43741[(1)] = (8));

} else {
var statearr_43725_43742 = state_43717__$1;
(statearr_43725_43742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (3))){
var inst_43715 = (state_43717[(2)]);
var state_43717__$1 = state_43717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43717__$1,inst_43715);
} else {
if((state_val_43718 === (2))){
var state_43717__$1 = state_43717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43717__$1,(4),ch);
} else {
if((state_val_43718 === (11))){
var inst_43707 = (state_43717[(2)]);
var state_43717__$1 = state_43717;
var statearr_43726_43743 = state_43717__$1;
(statearr_43726_43743[(2)] = inst_43707);

(statearr_43726_43743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (9))){
var state_43717__$1 = state_43717;
var statearr_43727_43744 = state_43717__$1;
(statearr_43727_43744[(2)] = null);

(statearr_43727_43744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (5))){
var inst_43702 = cljs.core.async.close_BANG_.call(null,out);
var state_43717__$1 = state_43717;
var statearr_43728_43745 = state_43717__$1;
(statearr_43728_43745[(2)] = inst_43702);

(statearr_43728_43745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (10))){
var inst_43710 = (state_43717[(2)]);
var state_43717__$1 = (function (){var statearr_43729 = state_43717;
(statearr_43729[(8)] = inst_43710);

return statearr_43729;
})();
var statearr_43730_43746 = state_43717__$1;
(statearr_43730_43746[(2)] = null);

(statearr_43730_43746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43718 === (8))){
var inst_43699 = (state_43717[(7)]);
var state_43717__$1 = state_43717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43717__$1,(11),out,inst_43699);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43736,out))
;
return ((function (switch__42123__auto__,c__42211__auto___43736,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43731 = [null,null,null,null,null,null,null,null,null];
(statearr_43731[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43731[(1)] = (1));

return statearr_43731;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43717){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43732){if((e43732 instanceof Object)){
var ex__42127__auto__ = e43732;
var statearr_43733_43747 = state_43717;
(statearr_43733_43747[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43748 = state_43717;
state_43717 = G__43748;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43736,out))
})();
var state__42213__auto__ = (function (){var statearr_43734 = f__42212__auto__.call(null);
(statearr_43734[(6)] = c__42211__auto___43736);

return statearr_43734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43736,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43750 = arguments.length;
switch (G__43750) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__){
return (function (state_43813){
var state_val_43814 = (state_43813[(1)]);
if((state_val_43814 === (7))){
var inst_43809 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43815_43853 = state_43813__$1;
(statearr_43815_43853[(2)] = inst_43809);

(statearr_43815_43853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (20))){
var inst_43779 = (state_43813[(7)]);
var inst_43790 = (state_43813[(2)]);
var inst_43791 = cljs.core.next.call(null,inst_43779);
var inst_43765 = inst_43791;
var inst_43766 = null;
var inst_43767 = (0);
var inst_43768 = (0);
var state_43813__$1 = (function (){var statearr_43816 = state_43813;
(statearr_43816[(8)] = inst_43767);

(statearr_43816[(9)] = inst_43766);

(statearr_43816[(10)] = inst_43790);

(statearr_43816[(11)] = inst_43765);

(statearr_43816[(12)] = inst_43768);

return statearr_43816;
})();
var statearr_43817_43854 = state_43813__$1;
(statearr_43817_43854[(2)] = null);

(statearr_43817_43854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (1))){
var state_43813__$1 = state_43813;
var statearr_43818_43855 = state_43813__$1;
(statearr_43818_43855[(2)] = null);

(statearr_43818_43855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (4))){
var inst_43754 = (state_43813[(13)]);
var inst_43754__$1 = (state_43813[(2)]);
var inst_43755 = (inst_43754__$1 == null);
var state_43813__$1 = (function (){var statearr_43819 = state_43813;
(statearr_43819[(13)] = inst_43754__$1);

return statearr_43819;
})();
if(cljs.core.truth_(inst_43755)){
var statearr_43820_43856 = state_43813__$1;
(statearr_43820_43856[(1)] = (5));

} else {
var statearr_43821_43857 = state_43813__$1;
(statearr_43821_43857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (15))){
var state_43813__$1 = state_43813;
var statearr_43825_43858 = state_43813__$1;
(statearr_43825_43858[(2)] = null);

(statearr_43825_43858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (21))){
var state_43813__$1 = state_43813;
var statearr_43826_43859 = state_43813__$1;
(statearr_43826_43859[(2)] = null);

(statearr_43826_43859[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (13))){
var inst_43767 = (state_43813[(8)]);
var inst_43766 = (state_43813[(9)]);
var inst_43765 = (state_43813[(11)]);
var inst_43768 = (state_43813[(12)]);
var inst_43775 = (state_43813[(2)]);
var inst_43776 = (inst_43768 + (1));
var tmp43822 = inst_43767;
var tmp43823 = inst_43766;
var tmp43824 = inst_43765;
var inst_43765__$1 = tmp43824;
var inst_43766__$1 = tmp43823;
var inst_43767__$1 = tmp43822;
var inst_43768__$1 = inst_43776;
var state_43813__$1 = (function (){var statearr_43827 = state_43813;
(statearr_43827[(8)] = inst_43767__$1);

(statearr_43827[(9)] = inst_43766__$1);

(statearr_43827[(11)] = inst_43765__$1);

(statearr_43827[(14)] = inst_43775);

(statearr_43827[(12)] = inst_43768__$1);

return statearr_43827;
})();
var statearr_43828_43860 = state_43813__$1;
(statearr_43828_43860[(2)] = null);

(statearr_43828_43860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (22))){
var state_43813__$1 = state_43813;
var statearr_43829_43861 = state_43813__$1;
(statearr_43829_43861[(2)] = null);

(statearr_43829_43861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (6))){
var inst_43754 = (state_43813[(13)]);
var inst_43763 = f.call(null,inst_43754);
var inst_43764 = cljs.core.seq.call(null,inst_43763);
var inst_43765 = inst_43764;
var inst_43766 = null;
var inst_43767 = (0);
var inst_43768 = (0);
var state_43813__$1 = (function (){var statearr_43830 = state_43813;
(statearr_43830[(8)] = inst_43767);

(statearr_43830[(9)] = inst_43766);

(statearr_43830[(11)] = inst_43765);

(statearr_43830[(12)] = inst_43768);

return statearr_43830;
})();
var statearr_43831_43862 = state_43813__$1;
(statearr_43831_43862[(2)] = null);

(statearr_43831_43862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (17))){
var inst_43779 = (state_43813[(7)]);
var inst_43783 = cljs.core.chunk_first.call(null,inst_43779);
var inst_43784 = cljs.core.chunk_rest.call(null,inst_43779);
var inst_43785 = cljs.core.count.call(null,inst_43783);
var inst_43765 = inst_43784;
var inst_43766 = inst_43783;
var inst_43767 = inst_43785;
var inst_43768 = (0);
var state_43813__$1 = (function (){var statearr_43832 = state_43813;
(statearr_43832[(8)] = inst_43767);

(statearr_43832[(9)] = inst_43766);

(statearr_43832[(11)] = inst_43765);

(statearr_43832[(12)] = inst_43768);

return statearr_43832;
})();
var statearr_43833_43863 = state_43813__$1;
(statearr_43833_43863[(2)] = null);

(statearr_43833_43863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (3))){
var inst_43811 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43813__$1,inst_43811);
} else {
if((state_val_43814 === (12))){
var inst_43799 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43834_43864 = state_43813__$1;
(statearr_43834_43864[(2)] = inst_43799);

(statearr_43834_43864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (2))){
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43813__$1,(4),in$);
} else {
if((state_val_43814 === (23))){
var inst_43807 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43835_43865 = state_43813__$1;
(statearr_43835_43865[(2)] = inst_43807);

(statearr_43835_43865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (19))){
var inst_43794 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43836_43866 = state_43813__$1;
(statearr_43836_43866[(2)] = inst_43794);

(statearr_43836_43866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (11))){
var inst_43779 = (state_43813[(7)]);
var inst_43765 = (state_43813[(11)]);
var inst_43779__$1 = cljs.core.seq.call(null,inst_43765);
var state_43813__$1 = (function (){var statearr_43837 = state_43813;
(statearr_43837[(7)] = inst_43779__$1);

return statearr_43837;
})();
if(inst_43779__$1){
var statearr_43838_43867 = state_43813__$1;
(statearr_43838_43867[(1)] = (14));

} else {
var statearr_43839_43868 = state_43813__$1;
(statearr_43839_43868[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (9))){
var inst_43801 = (state_43813[(2)]);
var inst_43802 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43813__$1 = (function (){var statearr_43840 = state_43813;
(statearr_43840[(15)] = inst_43801);

return statearr_43840;
})();
if(cljs.core.truth_(inst_43802)){
var statearr_43841_43869 = state_43813__$1;
(statearr_43841_43869[(1)] = (21));

} else {
var statearr_43842_43870 = state_43813__$1;
(statearr_43842_43870[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (5))){
var inst_43757 = cljs.core.async.close_BANG_.call(null,out);
var state_43813__$1 = state_43813;
var statearr_43843_43871 = state_43813__$1;
(statearr_43843_43871[(2)] = inst_43757);

(statearr_43843_43871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (14))){
var inst_43779 = (state_43813[(7)]);
var inst_43781 = cljs.core.chunked_seq_QMARK_.call(null,inst_43779);
var state_43813__$1 = state_43813;
if(inst_43781){
var statearr_43844_43872 = state_43813__$1;
(statearr_43844_43872[(1)] = (17));

} else {
var statearr_43845_43873 = state_43813__$1;
(statearr_43845_43873[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (16))){
var inst_43797 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43846_43874 = state_43813__$1;
(statearr_43846_43874[(2)] = inst_43797);

(statearr_43846_43874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (10))){
var inst_43766 = (state_43813[(9)]);
var inst_43768 = (state_43813[(12)]);
var inst_43773 = cljs.core._nth.call(null,inst_43766,inst_43768);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43813__$1,(13),out,inst_43773);
} else {
if((state_val_43814 === (18))){
var inst_43779 = (state_43813[(7)]);
var inst_43788 = cljs.core.first.call(null,inst_43779);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43813__$1,(20),out,inst_43788);
} else {
if((state_val_43814 === (8))){
var inst_43767 = (state_43813[(8)]);
var inst_43768 = (state_43813[(12)]);
var inst_43770 = (inst_43768 < inst_43767);
var inst_43771 = inst_43770;
var state_43813__$1 = state_43813;
if(cljs.core.truth_(inst_43771)){
var statearr_43847_43875 = state_43813__$1;
(statearr_43847_43875[(1)] = (10));

} else {
var statearr_43848_43876 = state_43813__$1;
(statearr_43848_43876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____0 = (function (){
var statearr_43849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43849[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__);

(statearr_43849[(1)] = (1));

return statearr_43849;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____1 = (function (state_43813){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43850){if((e43850 instanceof Object)){
var ex__42127__auto__ = e43850;
var statearr_43851_43877 = state_43813;
(statearr_43851_43877[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43878 = state_43813;
state_43813 = G__43878;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__ = function(state_43813){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____1.call(this,state_43813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42124__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__))
})();
var state__42213__auto__ = (function (){var statearr_43852 = f__42212__auto__.call(null);
(statearr_43852[(6)] = c__42211__auto__);

return statearr_43852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__))
);

return c__42211__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43880 = arguments.length;
switch (G__43880) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43883 = arguments.length;
switch (G__43883) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43886 = arguments.length;
switch (G__43886) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___43933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___43933,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___43933,out){
return (function (state_43910){
var state_val_43911 = (state_43910[(1)]);
if((state_val_43911 === (7))){
var inst_43905 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
var statearr_43912_43934 = state_43910__$1;
(statearr_43912_43934[(2)] = inst_43905);

(statearr_43912_43934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (1))){
var inst_43887 = null;
var state_43910__$1 = (function (){var statearr_43913 = state_43910;
(statearr_43913[(7)] = inst_43887);

return statearr_43913;
})();
var statearr_43914_43935 = state_43910__$1;
(statearr_43914_43935[(2)] = null);

(statearr_43914_43935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (4))){
var inst_43890 = (state_43910[(8)]);
var inst_43890__$1 = (state_43910[(2)]);
var inst_43891 = (inst_43890__$1 == null);
var inst_43892 = cljs.core.not.call(null,inst_43891);
var state_43910__$1 = (function (){var statearr_43915 = state_43910;
(statearr_43915[(8)] = inst_43890__$1);

return statearr_43915;
})();
if(inst_43892){
var statearr_43916_43936 = state_43910__$1;
(statearr_43916_43936[(1)] = (5));

} else {
var statearr_43917_43937 = state_43910__$1;
(statearr_43917_43937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (6))){
var state_43910__$1 = state_43910;
var statearr_43918_43938 = state_43910__$1;
(statearr_43918_43938[(2)] = null);

(statearr_43918_43938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (3))){
var inst_43907 = (state_43910[(2)]);
var inst_43908 = cljs.core.async.close_BANG_.call(null,out);
var state_43910__$1 = (function (){var statearr_43919 = state_43910;
(statearr_43919[(9)] = inst_43907);

return statearr_43919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43910__$1,inst_43908);
} else {
if((state_val_43911 === (2))){
var state_43910__$1 = state_43910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43910__$1,(4),ch);
} else {
if((state_val_43911 === (11))){
var inst_43890 = (state_43910[(8)]);
var inst_43899 = (state_43910[(2)]);
var inst_43887 = inst_43890;
var state_43910__$1 = (function (){var statearr_43920 = state_43910;
(statearr_43920[(7)] = inst_43887);

(statearr_43920[(10)] = inst_43899);

return statearr_43920;
})();
var statearr_43921_43939 = state_43910__$1;
(statearr_43921_43939[(2)] = null);

(statearr_43921_43939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (9))){
var inst_43890 = (state_43910[(8)]);
var state_43910__$1 = state_43910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43910__$1,(11),out,inst_43890);
} else {
if((state_val_43911 === (5))){
var inst_43890 = (state_43910[(8)]);
var inst_43887 = (state_43910[(7)]);
var inst_43894 = cljs.core._EQ_.call(null,inst_43890,inst_43887);
var state_43910__$1 = state_43910;
if(inst_43894){
var statearr_43923_43940 = state_43910__$1;
(statearr_43923_43940[(1)] = (8));

} else {
var statearr_43924_43941 = state_43910__$1;
(statearr_43924_43941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (10))){
var inst_43902 = (state_43910[(2)]);
var state_43910__$1 = state_43910;
var statearr_43925_43942 = state_43910__$1;
(statearr_43925_43942[(2)] = inst_43902);

(statearr_43925_43942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (8))){
var inst_43887 = (state_43910[(7)]);
var tmp43922 = inst_43887;
var inst_43887__$1 = tmp43922;
var state_43910__$1 = (function (){var statearr_43926 = state_43910;
(statearr_43926[(7)] = inst_43887__$1);

return statearr_43926;
})();
var statearr_43927_43943 = state_43910__$1;
(statearr_43927_43943[(2)] = null);

(statearr_43927_43943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___43933,out))
;
return ((function (switch__42123__auto__,c__42211__auto___43933,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_43928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43928[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_43928[(1)] = (1));

return statearr_43928;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43910){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e43929){if((e43929 instanceof Object)){
var ex__42127__auto__ = e43929;
var statearr_43930_43944 = state_43910;
(statearr_43930_43944[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43945 = state_43910;
state_43910 = G__43945;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___43933,out))
})();
var state__42213__auto__ = (function (){var statearr_43931 = f__42212__auto__.call(null);
(statearr_43931[(6)] = c__42211__auto___43933);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___43933,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43947 = arguments.length;
switch (G__43947) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___44013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___44013,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___44013,out){
return (function (state_43985){
var state_val_43986 = (state_43985[(1)]);
if((state_val_43986 === (7))){
var inst_43981 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43987_44014 = state_43985__$1;
(statearr_43987_44014[(2)] = inst_43981);

(statearr_43987_44014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (1))){
var inst_43948 = (new Array(n));
var inst_43949 = inst_43948;
var inst_43950 = (0);
var state_43985__$1 = (function (){var statearr_43988 = state_43985;
(statearr_43988[(7)] = inst_43949);

(statearr_43988[(8)] = inst_43950);

return statearr_43988;
})();
var statearr_43989_44015 = state_43985__$1;
(statearr_43989_44015[(2)] = null);

(statearr_43989_44015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (4))){
var inst_43953 = (state_43985[(9)]);
var inst_43953__$1 = (state_43985[(2)]);
var inst_43954 = (inst_43953__$1 == null);
var inst_43955 = cljs.core.not.call(null,inst_43954);
var state_43985__$1 = (function (){var statearr_43990 = state_43985;
(statearr_43990[(9)] = inst_43953__$1);

return statearr_43990;
})();
if(inst_43955){
var statearr_43991_44016 = state_43985__$1;
(statearr_43991_44016[(1)] = (5));

} else {
var statearr_43992_44017 = state_43985__$1;
(statearr_43992_44017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (15))){
var inst_43975 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43993_44018 = state_43985__$1;
(statearr_43993_44018[(2)] = inst_43975);

(statearr_43993_44018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (13))){
var state_43985__$1 = state_43985;
var statearr_43994_44019 = state_43985__$1;
(statearr_43994_44019[(2)] = null);

(statearr_43994_44019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (6))){
var inst_43950 = (state_43985[(8)]);
var inst_43971 = (inst_43950 > (0));
var state_43985__$1 = state_43985;
if(cljs.core.truth_(inst_43971)){
var statearr_43995_44020 = state_43985__$1;
(statearr_43995_44020[(1)] = (12));

} else {
var statearr_43996_44021 = state_43985__$1;
(statearr_43996_44021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (3))){
var inst_43983 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43985__$1,inst_43983);
} else {
if((state_val_43986 === (12))){
var inst_43949 = (state_43985[(7)]);
var inst_43973 = cljs.core.vec.call(null,inst_43949);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43985__$1,(15),out,inst_43973);
} else {
if((state_val_43986 === (2))){
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(4),ch);
} else {
if((state_val_43986 === (11))){
var inst_43965 = (state_43985[(2)]);
var inst_43966 = (new Array(n));
var inst_43949 = inst_43966;
var inst_43950 = (0);
var state_43985__$1 = (function (){var statearr_43997 = state_43985;
(statearr_43997[(7)] = inst_43949);

(statearr_43997[(10)] = inst_43965);

(statearr_43997[(8)] = inst_43950);

return statearr_43997;
})();
var statearr_43998_44022 = state_43985__$1;
(statearr_43998_44022[(2)] = null);

(statearr_43998_44022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (9))){
var inst_43949 = (state_43985[(7)]);
var inst_43963 = cljs.core.vec.call(null,inst_43949);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43985__$1,(11),out,inst_43963);
} else {
if((state_val_43986 === (5))){
var inst_43958 = (state_43985[(11)]);
var inst_43949 = (state_43985[(7)]);
var inst_43950 = (state_43985[(8)]);
var inst_43953 = (state_43985[(9)]);
var inst_43957 = (inst_43949[inst_43950] = inst_43953);
var inst_43958__$1 = (inst_43950 + (1));
var inst_43959 = (inst_43958__$1 < n);
var state_43985__$1 = (function (){var statearr_43999 = state_43985;
(statearr_43999[(11)] = inst_43958__$1);

(statearr_43999[(12)] = inst_43957);

return statearr_43999;
})();
if(cljs.core.truth_(inst_43959)){
var statearr_44000_44023 = state_43985__$1;
(statearr_44000_44023[(1)] = (8));

} else {
var statearr_44001_44024 = state_43985__$1;
(statearr_44001_44024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (14))){
var inst_43978 = (state_43985[(2)]);
var inst_43979 = cljs.core.async.close_BANG_.call(null,out);
var state_43985__$1 = (function (){var statearr_44003 = state_43985;
(statearr_44003[(13)] = inst_43978);

return statearr_44003;
})();
var statearr_44004_44025 = state_43985__$1;
(statearr_44004_44025[(2)] = inst_43979);

(statearr_44004_44025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (10))){
var inst_43969 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44005_44026 = state_43985__$1;
(statearr_44005_44026[(2)] = inst_43969);

(statearr_44005_44026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (8))){
var inst_43958 = (state_43985[(11)]);
var inst_43949 = (state_43985[(7)]);
var tmp44002 = inst_43949;
var inst_43949__$1 = tmp44002;
var inst_43950 = inst_43958;
var state_43985__$1 = (function (){var statearr_44006 = state_43985;
(statearr_44006[(7)] = inst_43949__$1);

(statearr_44006[(8)] = inst_43950);

return statearr_44006;
})();
var statearr_44007_44027 = state_43985__$1;
(statearr_44007_44027[(2)] = null);

(statearr_44007_44027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___44013,out))
;
return ((function (switch__42123__auto__,c__42211__auto___44013,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_44008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44008[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_44008[(1)] = (1));

return statearr_44008;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_43985){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_43985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e44009){if((e44009 instanceof Object)){
var ex__42127__auto__ = e44009;
var statearr_44010_44028 = state_43985;
(statearr_44010_44028[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44029 = state_43985;
state_43985 = G__44029;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_43985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_43985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___44013,out))
})();
var state__42213__auto__ = (function (){var statearr_44011 = f__42212__auto__.call(null);
(statearr_44011[(6)] = c__42211__auto___44013);

return statearr_44011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___44013,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44031 = arguments.length;
switch (G__44031) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__42211__auto___44101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___44101,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___44101,out){
return (function (state_44073){
var state_val_44074 = (state_44073[(1)]);
if((state_val_44074 === (7))){
var inst_44069 = (state_44073[(2)]);
var state_44073__$1 = state_44073;
var statearr_44075_44102 = state_44073__$1;
(statearr_44075_44102[(2)] = inst_44069);

(statearr_44075_44102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (1))){
var inst_44032 = [];
var inst_44033 = inst_44032;
var inst_44034 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44073__$1 = (function (){var statearr_44076 = state_44073;
(statearr_44076[(7)] = inst_44034);

(statearr_44076[(8)] = inst_44033);

return statearr_44076;
})();
var statearr_44077_44103 = state_44073__$1;
(statearr_44077_44103[(2)] = null);

(statearr_44077_44103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (4))){
var inst_44037 = (state_44073[(9)]);
var inst_44037__$1 = (state_44073[(2)]);
var inst_44038 = (inst_44037__$1 == null);
var inst_44039 = cljs.core.not.call(null,inst_44038);
var state_44073__$1 = (function (){var statearr_44078 = state_44073;
(statearr_44078[(9)] = inst_44037__$1);

return statearr_44078;
})();
if(inst_44039){
var statearr_44079_44104 = state_44073__$1;
(statearr_44079_44104[(1)] = (5));

} else {
var statearr_44080_44105 = state_44073__$1;
(statearr_44080_44105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (15))){
var inst_44063 = (state_44073[(2)]);
var state_44073__$1 = state_44073;
var statearr_44081_44106 = state_44073__$1;
(statearr_44081_44106[(2)] = inst_44063);

(statearr_44081_44106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (13))){
var state_44073__$1 = state_44073;
var statearr_44082_44107 = state_44073__$1;
(statearr_44082_44107[(2)] = null);

(statearr_44082_44107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (6))){
var inst_44033 = (state_44073[(8)]);
var inst_44058 = inst_44033.length;
var inst_44059 = (inst_44058 > (0));
var state_44073__$1 = state_44073;
if(cljs.core.truth_(inst_44059)){
var statearr_44083_44108 = state_44073__$1;
(statearr_44083_44108[(1)] = (12));

} else {
var statearr_44084_44109 = state_44073__$1;
(statearr_44084_44109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (3))){
var inst_44071 = (state_44073[(2)]);
var state_44073__$1 = state_44073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44073__$1,inst_44071);
} else {
if((state_val_44074 === (12))){
var inst_44033 = (state_44073[(8)]);
var inst_44061 = cljs.core.vec.call(null,inst_44033);
var state_44073__$1 = state_44073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44073__$1,(15),out,inst_44061);
} else {
if((state_val_44074 === (2))){
var state_44073__$1 = state_44073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44073__$1,(4),ch);
} else {
if((state_val_44074 === (11))){
var inst_44037 = (state_44073[(9)]);
var inst_44041 = (state_44073[(10)]);
var inst_44051 = (state_44073[(2)]);
var inst_44052 = [];
var inst_44053 = inst_44052.push(inst_44037);
var inst_44033 = inst_44052;
var inst_44034 = inst_44041;
var state_44073__$1 = (function (){var statearr_44085 = state_44073;
(statearr_44085[(11)] = inst_44051);

(statearr_44085[(7)] = inst_44034);

(statearr_44085[(8)] = inst_44033);

(statearr_44085[(12)] = inst_44053);

return statearr_44085;
})();
var statearr_44086_44110 = state_44073__$1;
(statearr_44086_44110[(2)] = null);

(statearr_44086_44110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (9))){
var inst_44033 = (state_44073[(8)]);
var inst_44049 = cljs.core.vec.call(null,inst_44033);
var state_44073__$1 = state_44073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44073__$1,(11),out,inst_44049);
} else {
if((state_val_44074 === (5))){
var inst_44037 = (state_44073[(9)]);
var inst_44034 = (state_44073[(7)]);
var inst_44041 = (state_44073[(10)]);
var inst_44041__$1 = f.call(null,inst_44037);
var inst_44042 = cljs.core._EQ_.call(null,inst_44041__$1,inst_44034);
var inst_44043 = cljs.core.keyword_identical_QMARK_.call(null,inst_44034,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44044 = (inst_44042) || (inst_44043);
var state_44073__$1 = (function (){var statearr_44087 = state_44073;
(statearr_44087[(10)] = inst_44041__$1);

return statearr_44087;
})();
if(cljs.core.truth_(inst_44044)){
var statearr_44088_44111 = state_44073__$1;
(statearr_44088_44111[(1)] = (8));

} else {
var statearr_44089_44112 = state_44073__$1;
(statearr_44089_44112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (14))){
var inst_44066 = (state_44073[(2)]);
var inst_44067 = cljs.core.async.close_BANG_.call(null,out);
var state_44073__$1 = (function (){var statearr_44091 = state_44073;
(statearr_44091[(13)] = inst_44066);

return statearr_44091;
})();
var statearr_44092_44113 = state_44073__$1;
(statearr_44092_44113[(2)] = inst_44067);

(statearr_44092_44113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (10))){
var inst_44056 = (state_44073[(2)]);
var state_44073__$1 = state_44073;
var statearr_44093_44114 = state_44073__$1;
(statearr_44093_44114[(2)] = inst_44056);

(statearr_44093_44114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44074 === (8))){
var inst_44037 = (state_44073[(9)]);
var inst_44041 = (state_44073[(10)]);
var inst_44033 = (state_44073[(8)]);
var inst_44046 = inst_44033.push(inst_44037);
var tmp44090 = inst_44033;
var inst_44033__$1 = tmp44090;
var inst_44034 = inst_44041;
var state_44073__$1 = (function (){var statearr_44094 = state_44073;
(statearr_44094[(14)] = inst_44046);

(statearr_44094[(7)] = inst_44034);

(statearr_44094[(8)] = inst_44033__$1);

return statearr_44094;
})();
var statearr_44095_44115 = state_44073__$1;
(statearr_44095_44115[(2)] = null);

(statearr_44095_44115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42211__auto___44101,out))
;
return ((function (switch__42123__auto__,c__42211__auto___44101,out){
return (function() {
var cljs$core$async$state_machine__42124__auto__ = null;
var cljs$core$async$state_machine__42124__auto____0 = (function (){
var statearr_44096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44096[(0)] = cljs$core$async$state_machine__42124__auto__);

(statearr_44096[(1)] = (1));

return statearr_44096;
});
var cljs$core$async$state_machine__42124__auto____1 = (function (state_44073){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_44073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e44097){if((e44097 instanceof Object)){
var ex__42127__auto__ = e44097;
var statearr_44098_44116 = state_44073;
(statearr_44098_44116[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44117 = state_44073;
state_44073 = G__44117;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
cljs$core$async$state_machine__42124__auto__ = function(state_44073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42124__auto____1.call(this,state_44073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42124__auto____0;
cljs$core$async$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42124__auto____1;
return cljs$core$async$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___44101,out))
})();
var state__42213__auto__ = (function (){var statearr_44099 = f__42212__auto__.call(null);
(statearr_44099[(6)] = c__42211__auto___44101);

return statearr_44099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___44101,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509738683062
