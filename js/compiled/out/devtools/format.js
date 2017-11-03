// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._header[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._header["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._has_body[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28822__auto__ = (((value == null))?null:value);
var m__28823__auto__ = (devtools.format._body[goog.typeOf(x__28822__auto__)]);
if(!((m__28823__auto__ == null))){
return m__28823__auto__.call(null,value);
} else {
var m__28823__auto____$1 = (devtools.format._body["_"]);
if(!((m__28823__auto____$1 == null))){
return m__28823__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45545 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45545["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45546 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45546["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45547 = temp__4655__auto____$2;
return (o45547["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45548 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45548["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45549 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45549["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45550 = temp__4655__auto____$2;
return (o45550["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45551 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45551["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45552 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45552["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45553 = temp__4655__auto____$2;
return (o45553["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45554 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45554["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45555 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45555["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45556 = temp__4655__auto____$2;
return (o45556["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45557 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45557["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45558 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45558["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45559 = temp__4655__auto____$2;
return (o45559["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45560 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45560["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45561 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45561["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45562 = temp__4655__auto____$2;
return (o45562["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o45563 = temp__4655__auto__;
var temp__4655__auto____$1 = (o45563["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o45564 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o45564["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o45565 = temp__4655__auto____$2;
return (o45565["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45567 = arguments.length;
var i__29309__auto___45568 = (0);
while(true){
if((i__29309__auto___45568 < len__29308__auto___45567)){
args__29315__auto__.push((arguments[i__29309__auto___45568]));

var G__45569 = (i__29309__auto___45568 + (1));
i__29309__auto___45568 = G__45569;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq45566){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45566));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45571 = arguments.length;
var i__29309__auto___45572 = (0);
while(true){
if((i__29309__auto___45572 < len__29308__auto___45571)){
args__29315__auto__.push((arguments[i__29309__auto___45572]));

var G__45573 = (i__29309__auto___45572 + (1));
i__29309__auto___45572 = G__45573;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq45570){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45570));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45575 = arguments.length;
var i__29309__auto___45576 = (0);
while(true){
if((i__29309__auto___45576 < len__29308__auto___45575)){
args__29315__auto__.push((arguments[i__29309__auto___45576]));

var G__45577 = (i__29309__auto___45576 + (1));
i__29309__auto___45576 = G__45577;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq45574){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45574));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45579 = arguments.length;
var i__29309__auto___45580 = (0);
while(true){
if((i__29309__auto___45580 < len__29308__auto___45579)){
args__29315__auto__.push((arguments[i__29309__auto___45580]));

var G__45581 = (i__29309__auto___45580 + (1));
i__29309__auto___45580 = G__45581;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq45578){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45578));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45583 = arguments.length;
var i__29309__auto___45584 = (0);
while(true){
if((i__29309__auto___45584 < len__29308__auto___45583)){
args__29315__auto__.push((arguments[i__29309__auto___45584]));

var G__45585 = (i__29309__auto___45584 + (1));
i__29309__auto___45584 = G__45585;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq45582){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45582));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45587 = arguments.length;
var i__29309__auto___45588 = (0);
while(true){
if((i__29309__auto___45588 < len__29308__auto___45587)){
args__29315__auto__.push((arguments[i__29309__auto___45588]));

var G__45589 = (i__29309__auto___45588 + (1));
i__29309__auto___45588 = G__45589;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq45586){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45586));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45591 = arguments.length;
var i__29309__auto___45592 = (0);
while(true){
if((i__29309__auto___45592 < len__29308__auto___45591)){
args__29315__auto__.push((arguments[i__29309__auto___45592]));

var G__45593 = (i__29309__auto___45592 + (1));
i__29309__auto___45592 = G__45593;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq45590){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45590));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45601 = arguments.length;
var i__29309__auto___45602 = (0);
while(true){
if((i__29309__auto___45602 < len__29308__auto___45601)){
args__29315__auto__.push((arguments[i__29309__auto___45602]));

var G__45603 = (i__29309__auto___45602 + (1));
i__29309__auto___45602 = G__45603;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45597){
var vec__45598 = p__45597;
var state_override = cljs.core.nth.call(null,vec__45598,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__45598,state_override){
return (function (p1__45594_SHARP_){
return cljs.core.merge.call(null,p1__45594_SHARP_,state_override);
});})(vec__45598,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq45595){
var G__45596 = cljs.core.first.call(null,seq45595);
var seq45595__$1 = cljs.core.next.call(null,seq45595);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__45596,seq45595__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45605 = arguments.length;
var i__29309__auto___45606 = (0);
while(true){
if((i__29309__auto___45606 < len__29308__auto___45605)){
args__29315__auto__.push((arguments[i__29309__auto___45606]));

var G__45607 = (i__29309__auto___45606 + (1));
i__29309__auto___45606 = G__45607;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq45604){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45604));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45610 = arguments.length;
var i__29309__auto___45611 = (0);
while(true){
if((i__29309__auto___45611 < len__29308__auto___45610)){
args__29315__auto__.push((arguments[i__29309__auto___45611]));

var G__45612 = (i__29309__auto___45611 + (1));
i__29309__auto___45611 = G__45612;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq45608){
var G__45609 = cljs.core.first.call(null,seq45608);
var seq45608__$1 = cljs.core.next.call(null,seq45608);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__45609,seq45608__$1);
});


//# sourceMappingURL=format.js.map?rel=1509738684452
