// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__29348__auto___39763 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39764 = arguments.length;
var i__29309__auto___39765 = (0);
while(true){
if((i__29309__auto___39765 < len__29308__auto___39764)){
args__29315__auto__.push((arguments[i__29309__auto___39765]));

var G__39766 = (i__29309__auto___39765 + (1));
i__29309__auto___39765 = G__39766;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})());
var G__39767 = threaded;
var G__39768 = cljs.core.next.call(null,forms__$1);
x__$1 = G__39767;
forms__$1 = G__39768;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq39759){
var G__39760 = cljs.core.first.call(null,seq39759);
var seq39759__$1 = cljs.core.next.call(null,seq39759);
var G__39761 = cljs.core.first.call(null,seq39759__$1);
var seq39759__$2 = cljs.core.next.call(null,seq39759__$1);
var G__39762 = cljs.core.first.call(null,seq39759__$2);
var seq39759__$3 = cljs.core.next.call(null,seq39759__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39760,G__39761,G__39762,seq39759__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__29348__auto___39773 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39774 = arguments.length;
var i__29309__auto___39775 = (0);
while(true){
if((i__29309__auto___39775 < len__29308__auto___39774)){
args__29315__auto__.push((arguments[i__29309__auto___39775]));

var G__39776 = (i__29309__auto___39775 + (1));
i__29309__auto___39775 = G__39776;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__29001__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})());
var G__39777 = threaded;
var G__39778 = cljs.core.next.call(null,forms__$1);
x__$1 = G__39777;
forms__$1 = G__39778;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq39769){
var G__39770 = cljs.core.first.call(null,seq39769);
var seq39769__$1 = cljs.core.next.call(null,seq39769);
var G__39771 = cljs.core.first.call(null,seq39769__$1);
var seq39769__$2 = cljs.core.next.call(null,seq39769__$1);
var G__39772 = cljs.core.first.call(null,seq39769__$2);
var seq39769__$3 = cljs.core.next.call(null,seq39769__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39770,G__39771,G__39772,seq39769__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__29348__auto___39786 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__39785 = arguments.length;
switch (G__39785) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___39788 = arguments.length;
var i__29309__auto___39789 = (0);
while(true){
if((i__29309__auto___39789 < len__29308__auto___39788)){
args_arr__29327__auto__.push((arguments[i__29309__auto___39789]));

var G__39790 = (i__29309__auto___39789 + (1));
i__29309__auto___39789 = G__39790;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq39780){
var G__39781 = cljs.core.first.call(null,seq39780);
var seq39780__$1 = cljs.core.next.call(null,seq39780);
var G__39782 = cljs.core.first.call(null,seq39780__$1);
var seq39780__$2 = cljs.core.next.call(null,seq39780__$1);
var G__39783 = cljs.core.first.call(null,seq39780__$2);
var seq39780__$3 = cljs.core.next.call(null,seq39780__$2);
var G__39784 = cljs.core.first.call(null,seq39780__$3);
var seq39780__$4 = cljs.core.next.call(null,seq39780__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__39781,G__39782,G__39783,G__39784,seq39780__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__29348__auto___39794 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39795 = arguments.length;
var i__29309__auto___39796 = (0);
while(true){
if((i__29309__auto___39796 < len__29308__auto___39795)){
args__29315__auto__.push((arguments[i__29309__auto___39796]));

var G__39797 = (i__29309__auto___39796 + (1));
i__29309__auto___39796 = G__39797;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq39791){
var G__39792 = cljs.core.first.call(null,seq39791);
var seq39791__$1 = cljs.core.next.call(null,seq39791);
var G__39793 = cljs.core.first.call(null,seq39791__$1);
var seq39791__$2 = cljs.core.next.call(null,seq39791__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__39792,G__39793,seq39791__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__29348__auto___39801 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39802 = arguments.length;
var i__29309__auto___39803 = (0);
while(true){
if((i__29309__auto___39803 < len__29308__auto___39802)){
args__29315__auto__.push((arguments[i__29309__auto___39803]));

var G__39804 = (i__29309__auto___39803 + (1));
i__29309__auto___39803 = G__39804;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__29001__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$2);
})(),x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq39798){
var G__39799 = cljs.core.first.call(null,seq39798);
var seq39798__$1 = cljs.core.next.call(null,seq39798);
var G__39800 = cljs.core.first.call(null,seq39798__$1);
var seq39798__$2 = cljs.core.next.call(null,seq39798__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__39799,G__39800,seq39798__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__29348__auto___39809 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39810 = arguments.length;
var i__29309__auto___39811 = (0);
while(true){
if((i__29309__auto___39811 < len__29308__auto___39810)){
args__29315__auto__.push((arguments[i__29309__auto___39811]));

var G__39812 = (i__29309__auto___39811 + (1));
i__29309__auto___39811 = G__39812;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__39805_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.vary_meta.call(null,p1__39805_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq39806){
var G__39807 = cljs.core.first.call(null,seq39806);
var seq39806__$1 = cljs.core.next.call(null,seq39806);
var G__39808 = cljs.core.first.call(null,seq39806__$1);
var seq39806__$2 = cljs.core.next.call(null,seq39806__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__39807,G__39808,seq39806__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__29348__auto___39817 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39818 = arguments.length;
var i__29309__auto___39819 = (0);
while(true){
if((i__29309__auto___39819 < len__29308__auto___39818)){
args__29315__auto__.push((arguments[i__29309__auto___39819]));

var G__39820 = (i__29309__auto___39819 + (1));
i__29309__auto___39819 = G__39820;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__29001__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
var G__39815 = cljs.core.first.call(null,seq39813__$1);
var seq39813__$2 = cljs.core.next.call(null,seq39813__$1);
var G__39816 = cljs.core.first.call(null,seq39813__$2);
var seq39813__$3 = cljs.core.next.call(null,seq39813__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__39814,G__39815,G__39816,seq39813__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__39821 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__39822 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__39821;
s = G__39822;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__39823){
var vec__39824 = p__39823;
var t = cljs.core.nth.call(null,vec__39824,(0),null);
var fs = cljs.core.nth.call(null,vec__39824,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__29348__auto___39831 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39832 = arguments.length;
var i__29309__auto___39833 = (0);
while(true){
if((i__29309__auto___39833 < len__29308__auto___39832)){
args__29315__auto__.push((arguments[i__29309__auto___39833]));

var G__39834 = (i__29309__auto___39833 + (1));
i__29309__auto___39833 = G__39834;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq39827){
var G__39828 = cljs.core.first.call(null,seq39827);
var seq39827__$1 = cljs.core.next.call(null,seq39827);
var G__39829 = cljs.core.first.call(null,seq39827__$1);
var seq39827__$2 = cljs.core.next.call(null,seq39827__$1);
var G__39830 = cljs.core.first.call(null,seq39827__$2);
var seq39827__$3 = cljs.core.next.call(null,seq39827__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__39828,G__39829,G__39830,seq39827__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__39835 = cljs.core.next.call(null,params__$1);
var G__39836 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__39837 = lets;
params__$1 = G__39835;
new_params = G__39836;
lets = G__39837;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__39838 = cljs.core.next.call(null,params__$1);
var G__39839 = cljs.core.conj.call(null,new_params,gparam);
var G__39840 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__39838;
new_params = G__39839;
lets = G__39840;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
break;
}
}
});
var ret__29348__auto___39847 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39848 = arguments.length;
var i__29309__auto___39849 = (0);
while(true){
if((i__29309__auto___39849 < len__29308__auto___39848)){
args__29315__auto__.push((arguments[i__29309__auto___39849]));

var G__39850 = (i__29309__auto___39849 + (1));
i__29309__auto___39849 = G__39850;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__29001__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__39844 = sig;
var seq__39845 = cljs.core.seq.call(null,vec__39844);
var first__39846 = cljs.core.first.call(null,seq__39845);
var seq__39845__$1 = cljs.core.next.call(null,seq__39845);
var params = first__39846;
var body = seq__39845__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__28139__auto__ = conds;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__29001__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,((function (vec__39844,seq__39845,first__39846,seq__39845__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__29001__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(vec__39844,seq__39845,first__39846,seq__39845__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__39844,seq__39845,first__39846,seq__39845__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__29001__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(vec__39844,seq__39845,first__39846,seq__39845__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq39841){
var G__39842 = cljs.core.first.call(null,seq39841);
var seq39841__$1 = cljs.core.next.call(null,seq39841);
var G__39843 = cljs.core.first.call(null,seq39841__$1);
var seq39841__$2 = cljs.core.next.call(null,seq39841__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__39842,G__39843,seq39841__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__29348__auto___39855 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39856 = arguments.length;
var i__29309__auto___39857 = (0);
while(true){
if((i__29309__auto___39857 < len__29308__auto___39856)){
args__29315__auto__.push((arguments[i__29309__auto___39857]));

var G__39858 = (i__29309__auto___39857 + (1));
i__29309__auto___39857 = G__39858;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq39851){
var G__39852 = cljs.core.first.call(null,seq39851);
var seq39851__$1 = cljs.core.next.call(null,seq39851);
var G__39853 = cljs.core.first.call(null,seq39851__$1);
var seq39851__$2 = cljs.core.next.call(null,seq39851__$1);
var G__39854 = cljs.core.first.call(null,seq39851__$2);
var seq39851__$3 = cljs.core.next.call(null,seq39851__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__39852,G__39853,G__39854,seq39851__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__29348__auto___39868 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__39867 = arguments.length;
switch (G__39867) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___39870 = arguments.length;
var i__29309__auto___39871 = (0);
while(true){
if((i__29309__auto___39871 < len__29308__auto___39870)){
args_arr__29327__auto__.push((arguments[i__29309__auto___39871]));

var G__39872 = (i__29309__auto___39871 + (1));
i__29309__auto___39871 = G__39872;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29328__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__29001__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39859__auto__","temp__39859__auto__",519479019,null)),(function (){var x__29001__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39859__auto__","temp__39859__auto__",519479019,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39859__auto__","temp__39859__auto__",519479019,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq39861){
var G__39862 = cljs.core.first.call(null,seq39861);
var seq39861__$1 = cljs.core.next.call(null,seq39861);
var G__39863 = cljs.core.first.call(null,seq39861__$1);
var seq39861__$2 = cljs.core.next.call(null,seq39861__$1);
var G__39864 = cljs.core.first.call(null,seq39861__$2);
var seq39861__$3 = cljs.core.next.call(null,seq39861__$2);
var G__39865 = cljs.core.first.call(null,seq39861__$3);
var seq39861__$4 = cljs.core.next.call(null,seq39861__$3);
var G__39866 = cljs.core.first.call(null,seq39861__$4);
var seq39861__$5 = cljs.core.next.call(null,seq39861__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__39862,G__39863,G__39864,G__39865,G__39866,seq39861__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__29348__auto___39875 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__39874 = arguments.length;
switch (G__39874) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__29348__auto___39882 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39883 = arguments.length;
var i__29309__auto___39884 = (0);
while(true){
if((i__29309__auto___39884 < len__29308__auto___39883)){
args__29315__auto__.push((arguments[i__29309__auto___39884]));

var G__39885 = (i__29309__auto___39884 + (1));
i__29309__auto___39884 = G__39885;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__39877_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__39877_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq39878){
var G__39879 = cljs.core.first.call(null,seq39878);
var seq39878__$1 = cljs.core.next.call(null,seq39878);
var G__39880 = cljs.core.first.call(null,seq39878__$1);
var seq39878__$2 = cljs.core.next.call(null,seq39878__$1);
var G__39881 = cljs.core.first.call(null,seq39878__$2);
var seq39878__$3 = cljs.core.next.call(null,seq39878__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__39879,G__39880,G__39881,seq39878__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__29348__auto___39890 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39891 = arguments.length;
var i__29309__auto___39892 = (0);
while(true){
if((i__29309__auto___39892 < len__29308__auto___39891)){
args__29315__auto__.push((arguments[i__29309__auto___39892]));

var G__39893 = (i__29309__auto___39892 + (1));
i__29309__auto___39892 = G__39893;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq39886){
var G__39887 = cljs.core.first.call(null,seq39886);
var seq39886__$1 = cljs.core.next.call(null,seq39886);
var G__39888 = cljs.core.first.call(null,seq39886__$1);
var seq39886__$2 = cljs.core.next.call(null,seq39886__$1);
var G__39889 = cljs.core.first.call(null,seq39886__$2);
var seq39886__$3 = cljs.core.next.call(null,seq39886__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__39887,G__39888,G__39889,seq39886__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__29348__auto___39898 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39899 = arguments.length;
var i__29309__auto___39900 = (0);
while(true){
if((i__29309__auto___39900 < len__29308__auto___39899)){
args__29315__auto__.push((arguments[i__29309__auto___39900]));

var G__39901 = (i__29309__auto___39900 + (1));
i__29309__auto___39900 = G__39901;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq39894){
var G__39895 = cljs.core.first.call(null,seq39894);
var seq39894__$1 = cljs.core.next.call(null,seq39894);
var G__39896 = cljs.core.first.call(null,seq39894__$1);
var seq39894__$2 = cljs.core.next.call(null,seq39894__$1);
var G__39897 = cljs.core.first.call(null,seq39894__$2);
var seq39894__$3 = cljs.core.next.call(null,seq39894__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__39895,G__39896,G__39897,seq39894__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__29348__auto___39910 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39911 = arguments.length;
var i__29309__auto___39912 = (0);
while(true){
if((i__29309__auto___39912 < len__29308__auto___39911)){
args__29315__auto__.push((arguments[i__29309__auto___39912]));

var G__39913 = (i__29309__auto___39912 + (1));
i__29309__auto___39912 = G__39913;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__39907 = bindings;
var x = cljs.core.nth.call(null,vec__39907,(0),null);
var xs = cljs.core.nth.call(null,vec__39907,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__39902__auto__","xs__39902__auto__",819447740,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__39902__auto__","xs__39902__auto__",819447740,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq39903){
var G__39904 = cljs.core.first.call(null,seq39903);
var seq39903__$1 = cljs.core.next.call(null,seq39903);
var G__39905 = cljs.core.first.call(null,seq39903__$1);
var seq39903__$2 = cljs.core.next.call(null,seq39903__$1);
var G__39906 = cljs.core.first.call(null,seq39903__$2);
var seq39903__$3 = cljs.core.next.call(null,seq39903__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__39904,G__39905,G__39906,seq39903__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__29348__auto___39919 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39920 = arguments.length;
var i__29309__auto___39921 = (0);
while(true){
if((i__29309__auto___39921 < len__29308__auto___39920)){
args__29315__auto__.push((arguments[i__29309__auto___39921]));

var G__39922 = (i__29309__auto___39921 + (1));
i__29309__auto___39921 = G__39922;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39914__auto__","temp__39914__auto__",1618509272,null)),(function (){var x__29001__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39914__auto__","temp__39914__auto__",1618509272,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39914__auto__","temp__39914__auto__",1618509272,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq39915){
var G__39916 = cljs.core.first.call(null,seq39915);
var seq39915__$1 = cljs.core.next.call(null,seq39915);
var G__39917 = cljs.core.first.call(null,seq39915__$1);
var seq39915__$2 = cljs.core.next.call(null,seq39915__$1);
var G__39918 = cljs.core.first.call(null,seq39915__$2);
var seq39915__$3 = cljs.core.next.call(null,seq39915__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__39916,G__39917,G__39918,seq39915__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__29348__auto___39927 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39928 = arguments.length;
var i__29309__auto___39929 = (0);
while(true){
if((i__29309__auto___39929 < len__29308__auto___39928)){
args__29315__auto__.push((arguments[i__29309__auto___39929]));

var G__39930 = (i__29309__auto___39929 + (1));
i__29309__auto___39929 = G__39930;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),null),x__29001__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq39923){
var G__39924 = cljs.core.first.call(null,seq39923);
var seq39923__$1 = cljs.core.next.call(null,seq39923);
var G__39925 = cljs.core.first.call(null,seq39923__$1);
var seq39923__$2 = cljs.core.next.call(null,seq39923__$1);
var G__39926 = cljs.core.first.call(null,seq39923__$2);
var seq39923__$3 = cljs.core.next.call(null,seq39923__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__39924,G__39925,G__39926,seq39923__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__29348__auto___39935 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39936 = arguments.length;
var i__29309__auto___39937 = (0);
while(true){
if((i__29309__auto___39937 < len__29308__auto___39936)){
args__29315__auto__.push((arguments[i__29309__auto___39937]));

var G__39938 = (i__29309__auto___39937 + (1));
i__29309__auto___39937 = G__39938;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq39931){
var G__39932 = cljs.core.first.call(null,seq39931);
var seq39931__$1 = cljs.core.next.call(null,seq39931);
var G__39933 = cljs.core.first.call(null,seq39931__$1);
var seq39931__$2 = cljs.core.next.call(null,seq39931__$1);
var G__39934 = cljs.core.first.call(null,seq39931__$2);
var seq39931__$3 = cljs.core.next.call(null,seq39931__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__39932,G__39933,G__39934,seq39931__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__29348__auto___39947 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39948 = arguments.length;
var i__29309__auto___39949 = (0);
while(true){
if((i__29309__auto___39949 < len__29308__auto___39948)){
args__29315__auto__.push((arguments[i__29309__auto___39949]));

var G__39950 = (i__29309__auto___39949 + (1));
i__29309__auto___39949 = G__39950;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__39943){
var vec__39944 = p__39943;
var test = cljs.core.nth.call(null,vec__39944,(0),null);
var step = cljs.core.nth.call(null,vec__39944,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq39939){
var G__39940 = cljs.core.first.call(null,seq39939);
var seq39939__$1 = cljs.core.next.call(null,seq39939);
var G__39941 = cljs.core.first.call(null,seq39939__$1);
var seq39939__$2 = cljs.core.next.call(null,seq39939__$1);
var G__39942 = cljs.core.first.call(null,seq39939__$2);
var seq39939__$3 = cljs.core.next.call(null,seq39939__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39940,G__39941,G__39942,seq39939__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__29348__auto___39959 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39960 = arguments.length;
var i__29309__auto___39961 = (0);
while(true){
if((i__29309__auto___39961 < len__29308__auto___39960)){
args__29315__auto__.push((arguments[i__29309__auto___39961]));

var G__39962 = (i__29309__auto___39961 + (1));
i__29309__auto___39961 = G__39962;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__39955){
var vec__39956 = p__39955;
var test = cljs.core.nth.call(null,vec__39956,(0),null);
var step = cljs.core.nth.call(null,vec__39956,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq39951){
var G__39952 = cljs.core.first.call(null,seq39951);
var seq39951__$1 = cljs.core.next.call(null,seq39951);
var G__39953 = cljs.core.first.call(null,seq39951__$1);
var seq39951__$2 = cljs.core.next.call(null,seq39951__$1);
var G__39954 = cljs.core.first.call(null,seq39951__$2);
var seq39951__$3 = cljs.core.next.call(null,seq39951__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39952,G__39953,G__39954,seq39951__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__29348__auto___39968 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39969 = arguments.length;
var i__29309__auto___39970 = (0);
while(true){
if((i__29309__auto___39970 < len__29308__auto___39969)){
args__29315__auto__.push((arguments[i__29309__auto___39970]));

var G__39971 = (i__29309__auto___39970 + (1));
i__29309__auto___39970 = G__39971;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq39963){
var G__39964 = cljs.core.first.call(null,seq39963);
var seq39963__$1 = cljs.core.next.call(null,seq39963);
var G__39965 = cljs.core.first.call(null,seq39963__$1);
var seq39963__$2 = cljs.core.next.call(null,seq39963__$1);
var G__39966 = cljs.core.first.call(null,seq39963__$2);
var seq39963__$3 = cljs.core.next.call(null,seq39963__$2);
var G__39967 = cljs.core.first.call(null,seq39963__$3);
var seq39963__$4 = cljs.core.next.call(null,seq39963__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39964,G__39965,G__39966,G__39967,seq39963__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__29348__auto___39976 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39977 = arguments.length;
var i__29309__auto___39978 = (0);
while(true){
if((i__29309__auto___39978 < len__29308__auto___39977)){
args__29315__auto__.push((arguments[i__29309__auto___39978]));

var G__39979 = (i__29309__auto___39978 + (1));
i__29309__auto___39978 = G__39979;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq39972){
var G__39973 = cljs.core.first.call(null,seq39972);
var seq39972__$1 = cljs.core.next.call(null,seq39972);
var G__39974 = cljs.core.first.call(null,seq39972__$1);
var seq39972__$2 = cljs.core.next.call(null,seq39972__$1);
var G__39975 = cljs.core.first.call(null,seq39972__$2);
var seq39972__$3 = cljs.core.next.call(null,seq39972__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39973,G__39974,G__39975,seq39972__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__29348__auto___39984 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___39985 = arguments.length;
var i__29309__auto___39986 = (0);
while(true){
if((i__29309__auto___39986 < len__29308__auto___39985)){
args__29315__auto__.push((arguments[i__29309__auto___39986]));

var G__39987 = (i__29309__auto___39986 + (1));
i__29309__auto___39986 = G__39987;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq39980){
var G__39981 = cljs.core.first.call(null,seq39980);
var seq39980__$1 = cljs.core.next.call(null,seq39980);
var G__39982 = cljs.core.first.call(null,seq39980__$1);
var seq39980__$2 = cljs.core.next.call(null,seq39980__$1);
var G__39983 = cljs.core.first.call(null,seq39980__$2);
var seq39980__$3 = cljs.core.next.call(null,seq39980__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__39981,G__39982,G__39983,seq39980__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__29348__auto___39997 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__39996 = arguments.length;
switch (G__39996) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___39999 = arguments.length;
var i__29309__auto___40000 = (0);
while(true){
if((i__29309__auto___40000 < len__29308__auto___39999)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40000]));

var G__40001 = (i__29309__auto___40000 + (1));
i__29309__auto___40000 = G__40001;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29328__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__29001__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39988__auto__","temp__39988__auto__",-407613712,null)),(function (){var x__29001__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39988__auto__","temp__39988__auto__",-407613712,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__39988__auto__","temp__39988__auto__",-407613712,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq39990){
var G__39991 = cljs.core.first.call(null,seq39990);
var seq39990__$1 = cljs.core.next.call(null,seq39990);
var G__39992 = cljs.core.first.call(null,seq39990__$1);
var seq39990__$2 = cljs.core.next.call(null,seq39990__$1);
var G__39993 = cljs.core.first.call(null,seq39990__$2);
var seq39990__$3 = cljs.core.next.call(null,seq39990__$2);
var G__39994 = cljs.core.first.call(null,seq39990__$3);
var seq39990__$4 = cljs.core.next.call(null,seq39990__$3);
var G__39995 = cljs.core.first.call(null,seq39990__$4);
var seq39990__$5 = cljs.core.next.call(null,seq39990__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__39991,G__39992,G__39993,G__39994,G__39995,seq39990__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__29348__auto___40007 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40008 = arguments.length;
var i__29309__auto___40009 = (0);
while(true){
if((i__29309__auto___40009 < len__29308__auto___40008)){
args__29315__auto__.push((arguments[i__29309__auto___40009]));

var G__40010 = (i__29309__auto___40009 + (1));
i__29309__auto___40009 = G__40010;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40002__auto__","temp__40002__auto__",1085033911,null)),(function (){var x__29001__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40002__auto__","temp__40002__auto__",1085033911,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40002__auto__","temp__40002__auto__",1085033911,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq40003){
var G__40004 = cljs.core.first.call(null,seq40003);
var seq40003__$1 = cljs.core.next.call(null,seq40003);
var G__40005 = cljs.core.first.call(null,seq40003__$1);
var seq40003__$2 = cljs.core.next.call(null,seq40003__$1);
var G__40006 = cljs.core.first.call(null,seq40003__$2);
var seq40003__$3 = cljs.core.next.call(null,seq40003__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__40004,G__40005,G__40006,seq40003__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__40011_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__40011_SHARP_)){
return cljs.core.first.call(null,p1__40011_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40011_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40011_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__40012_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__40012_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__40013 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__40014 = cljs.core.next.call(null,fdecls);
ret = G__40013;
fdecls = G__40014;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__29001__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
}
});
var ret__29348__auto___40015 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__29001__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__40022 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__40023 = n;
var G__40024 = cljs.core.nnext.call(null,bs);
var G__40025 = true;
ret = G__40022;
n = G__40023;
bs = G__40024;
seen_rest_QMARK_ = G__40025;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__40026 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29001__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29001__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__29001__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__40027 = (n + (1));
var G__40028 = cljs.core.next.call(null,bs);
var G__40029 = seen_rest_QMARK_;
ret = G__40026;
n = G__40027;
bs = G__40028;
seen_rest_QMARK_ = G__40029;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__29001__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__29001__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40016_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__28139__auto__ = mkns;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.namespace.call(null,p1__40016_SHARP_);
}
})(),cljs.core.name.call(null,p1__40016_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40017_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.symbol.call(null,(function (){var or__28139__auto__ = mkns;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.namespace.call(null,p1__40017_SHARP_);
}
})(),cljs.core.name.call(null,p1__40017_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__40018_SHARP_,p2__40019_SHARP_){
return cljs.core.assoc.call(null,p1__40018_SHARP_,p2__40019_SHARP_,cljs.core.val.call(null,entry).call(null,p2__40019_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__29001__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$2);
})(),x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__29001__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__40030 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__40031 = cljs.core.next.call(null,bes);
ret = G__40030;
bes = G__40031;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__40020_SHARP_){
return (cljs.core.first.call(null,p1__40020_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__29348__auto___40032 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29001__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__29001__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__29348__auto___40037 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40038 = arguments.length;
var i__29309__auto___40039 = (0);
while(true){
if((i__29309__auto___40039 < len__29308__auto___40038)){
args__29315__auto__.push((arguments[i__29309__auto___40039]));

var G__40040 = (i__29309__auto___40039 + (1));
i__29309__auto___40039 = G__40040;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__29001__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq40033){
var G__40034 = cljs.core.first.call(null,seq40033);
var seq40033__$1 = cljs.core.next.call(null,seq40033);
var G__40035 = cljs.core.first.call(null,seq40033__$1);
var seq40033__$2 = cljs.core.next.call(null,seq40033__$1);
var G__40036 = cljs.core.first.call(null,seq40033__$2);
var seq40033__$3 = cljs.core.next.call(null,seq40033__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__40034,G__40035,G__40036,seq40033__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__29348__auto___40049 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40050 = arguments.length;
var i__29309__auto___40051 = (0);
while(true){
if((i__29309__auto___40051 < len__29308__auto___40050)){
args__29315__auto__.push((arguments[i__29309__auto___40051]));

var G__40052 = (i__29309__auto___40051 + (1));
i__29309__auto___40051 = G__40052;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__29001__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__40045){
var vec__40046 = p__40045;
var b = cljs.core.nth.call(null,vec__40046,(0),null);
var v = cljs.core.nth.call(null,vec__40046,(1),null);
var g = cljs.core.nth.call(null,vec__40046,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq40041){
var G__40042 = cljs.core.first.call(null,seq40041);
var seq40041__$1 = cljs.core.next.call(null,seq40041);
var G__40043 = cljs.core.first.call(null,seq40041__$1);
var seq40041__$2 = cljs.core.next.call(null,seq40041__$1);
var G__40044 = cljs.core.first.call(null,seq40041__$2);
var seq40041__$3 = cljs.core.next.call(null,seq40041__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__40042,G__40043,G__40044,seq40041__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__40053_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40053_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__40054){
var vec__40055 = p__40054;
var p = cljs.core.nth.call(null,vec__40055,(0),null);
var b = cljs.core.nth.call(null,vec__40055,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__29348__auto___40061 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40062 = arguments.length;
var i__29309__auto___40063 = (0);
while(true){
if((i__29309__auto___40063 < len__29308__auto___40062)){
args__29315__auto__.push((arguments[i__29309__auto___40063]));

var G__40064 = (i__29309__auto___40063 + (1));
i__29309__auto___40063 = G__40064;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq40058){
var G__40059 = cljs.core.first.call(null,seq40058);
var seq40058__$1 = cljs.core.next.call(null,seq40058);
var G__40060 = cljs.core.first.call(null,seq40058__$1);
var seq40058__$2 = cljs.core.next.call(null,seq40058__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__40059,G__40060,seq40058__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__28127__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__28127__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__28127__auto__;
}
});
var ret__29348__auto___40075 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__40073 = arguments.length;
switch (G__40073) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40077 = arguments.length;
var i__29309__auto___40078 = (0);
while(true){
if((i__29309__auto___40078 < len__29308__auto___40077)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40078]));

var G__40079 = (i__29309__auto___40078 + (1));
i__29309__auto___40078 = G__40079;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29328__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40065_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40065_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40066_SHARP_){
var _STAR_cljs_warnings_STAR_40074 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40066_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40074;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29001__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40067__auto__","and__40067__auto__",1433316176,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40067__auto__","and__40067__auto__",1433316176,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40067__auto__","and__40067__auto__",1433316176,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq40069){
var G__40070 = cljs.core.first.call(null,seq40069);
var seq40069__$1 = cljs.core.next.call(null,seq40069);
var G__40071 = cljs.core.first.call(null,seq40069__$1);
var seq40069__$2 = cljs.core.next.call(null,seq40069__$1);
var G__40072 = cljs.core.first.call(null,seq40069__$2);
var seq40069__$3 = cljs.core.next.call(null,seq40069__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__40070,G__40071,G__40072,seq40069__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__29348__auto___40090 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__40088 = arguments.length;
switch (G__40088) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40092 = arguments.length;
var i__29309__auto___40093 = (0);
while(true){
if((i__29309__auto___40093 < len__29308__auto___40092)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40093]));

var G__40094 = (i__29309__auto___40093 + (1));
i__29309__auto___40093 = G__40094;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29328__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40080_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40080_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40081_SHARP_){
var _STAR_cljs_warnings_STAR_40089 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40081_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40089;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29001__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40082__auto__","or__40082__auto__",-917427632,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40082__auto__","or__40082__auto__",-917427632,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40082__auto__","or__40082__auto__",-917427632,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq40084){
var G__40085 = cljs.core.first.call(null,seq40084);
var seq40084__$1 = cljs.core.next.call(null,seq40084);
var G__40086 = cljs.core.first.call(null,seq40084__$1);
var seq40084__$2 = cljs.core.next.call(null,seq40084__$1);
var G__40087 = cljs.core.first.call(null,seq40084__$2);
var seq40084__$3 = cljs.core.next.call(null,seq40084__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__40085,G__40086,G__40087,seq40084__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__29348__auto___40095 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40096 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40097 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__29348__auto___40098 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__29348__auto___40099 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__29348__auto___40100 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__29348__auto___40101 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__29348__auto___40102 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__29348__auto___40103 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__29348__auto___40104 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__29348__auto___40105 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__29001__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__29348__auto___40110 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__40107 = clojure.string.split.call(null,comment,/\n/);
var seq__40108 = cljs.core.seq.call(null,vec__40107);
var first__40109 = cljs.core.first.call(null,seq__40108);
var seq__40108__$1 = cljs.core.next.call(null,seq__40108);
var x = first__40109;
var ys = seq__40108__$1;
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__40107,seq__40108,first__40109,seq__40108__$1,x,ys){
return (function (p1__40106_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__40106_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__40107,seq__40108,first__40109,seq__40108__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__29348__auto___40111 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$2);
})(),x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__29348__auto___40112 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__29348__auto___40113 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40114 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40115 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40116 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40117 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40118 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40121 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40119__auto__","c__40119__auto__",-439880920,null)),(function (){var x__29001__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40120__auto__","x__40120__auto__",-715934662,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40120__auto__","x__40120__auto__",-715934662,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40119__auto__","c__40119__auto__",-439880920,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40122 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40123 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40124 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40134 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__40131 = arguments.length;
switch (G__40131) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40136 = arguments.length;
var i__29309__auto___40137 = (0);
while(true){
if((i__29309__auto___40137 < len__29308__auto___40136)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40137]));

var G__40138 = (i__29309__auto___40137 + (1));
i__29309__auto___40137 = G__40138;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__40132 = cljs.analyzer.checked_arrays.call(null);
var G__40132__$1 = (((G__40132 instanceof cljs.core.Keyword))?G__40132.fqn:null);
switch (G__40132__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__40133 = cljs.analyzer.checked_arrays.call(null);
var G__40133__$1 = (((G__40133 instanceof cljs.core.Keyword))?G__40133.fqn:null);
switch (G__40133__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29001__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq40126){
var G__40127 = cljs.core.first.call(null,seq40126);
var seq40126__$1 = cljs.core.next.call(null,seq40126);
var G__40128 = cljs.core.first.call(null,seq40126__$1);
var seq40126__$2 = cljs.core.next.call(null,seq40126__$1);
var G__40129 = cljs.core.first.call(null,seq40126__$2);
var seq40126__$3 = cljs.core.next.call(null,seq40126__$2);
var G__40130 = cljs.core.first.call(null,seq40126__$3);
var seq40126__$4 = cljs.core.next.call(null,seq40126__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__40127,G__40128,G__40129,G__40130,seq40126__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__29348__auto___40151 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__40148 = arguments.length;
switch (G__40148) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40153 = arguments.length;
var i__29309__auto___40154 = (0);
while(true){
if((i__29309__auto___40154 < len__29308__auto___40153)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40154]));

var G__40155 = (i__29309__auto___40154 + (1));
i__29309__auto___40154 = G__40155;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29328__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__40149 = cljs.analyzer.checked_arrays.call(null);
var G__40149__$1 = (((G__40149 instanceof cljs.core.Keyword))?G__40149.fqn:null);
switch (G__40149__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$2);
})(),x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__40150 = cljs.analyzer.checked_arrays.call(null);
var G__40150__$1 = (((G__40150 instanceof cljs.core.Keyword))?G__40150.fqn:null);
switch (G__40150__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__29001__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq40142){
var G__40143 = cljs.core.first.call(null,seq40142);
var seq40142__$1 = cljs.core.next.call(null,seq40142);
var G__40144 = cljs.core.first.call(null,seq40142__$1);
var seq40142__$2 = cljs.core.next.call(null,seq40142__$1);
var G__40145 = cljs.core.first.call(null,seq40142__$2);
var seq40142__$3 = cljs.core.next.call(null,seq40142__$2);
var G__40146 = cljs.core.first.call(null,seq40142__$3);
var seq40142__$4 = cljs.core.next.call(null,seq40142__$3);
var G__40147 = cljs.core.first.call(null,seq40142__$4);
var seq40142__$5 = cljs.core.next.call(null,seq40142__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__40143,G__40144,G__40145,G__40146,G__40147,seq40142__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__29348__auto___40158 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__29348__auto___40159 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$2);
})(),x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__29348__auto___40167 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__40166 = arguments.length;
switch (G__40166) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40169 = arguments.length;
var i__29309__auto___40170 = (0);
while(true){
if((i__29309__auto___40170 < len__29308__auto___40169)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40170]));

var G__40171 = (i__29309__auto___40170 + (1));
i__29309__auto___40170 = G__40171;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq40161){
var G__40162 = cljs.core.first.call(null,seq40161);
var seq40161__$1 = cljs.core.next.call(null,seq40161);
var G__40163 = cljs.core.first.call(null,seq40161__$1);
var seq40161__$2 = cljs.core.next.call(null,seq40161__$1);
var G__40164 = cljs.core.first.call(null,seq40161__$2);
var seq40161__$3 = cljs.core.next.call(null,seq40161__$2);
var G__40165 = cljs.core.first.call(null,seq40161__$3);
var seq40161__$4 = cljs.core.next.call(null,seq40161__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__40162,G__40163,G__40164,G__40165,seq40161__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__29348__auto___40172 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__29348__auto___40173 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__29348__auto___40174 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__29348__auto___40175 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__29348__auto___40176 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__29348__auto___40177 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__29348__auto___40178 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__29348__auto___40179 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__29348__auto___40180 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__29348__auto___40184 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40185 = arguments.length;
var i__29309__auto___40186 = (0);
while(true){
if((i__29309__auto___40186 < len__29308__auto___40185)){
args__29315__auto__.push((arguments[i__29309__auto___40186]));

var G__40187 = (i__29309__auto___40186 + (1));
i__29309__auto___40186 = G__40187;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq40181){
var G__40182 = cljs.core.first.call(null,seq40181);
var seq40181__$1 = cljs.core.next.call(null,seq40181);
var G__40183 = cljs.core.first.call(null,seq40181__$1);
var seq40181__$2 = cljs.core.next.call(null,seq40181__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__40182,G__40183,seq40181__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__29348__auto___40191 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40192 = arguments.length;
var i__29309__auto___40193 = (0);
while(true){
if((i__29309__auto___40193 < len__29308__auto___40192)){
args__29315__auto__.push((arguments[i__29309__auto___40193]));

var G__40194 = (i__29309__auto___40193 + (1));
i__29309__auto___40193 = G__40194;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq40188){
var G__40189 = cljs.core.first.call(null,seq40188);
var seq40188__$1 = cljs.core.next.call(null,seq40188);
var G__40190 = cljs.core.first.call(null,seq40188__$1);
var seq40188__$2 = cljs.core.next.call(null,seq40188__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__40189,G__40190,seq40188__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__29348__auto___40195 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__29348__auto___40196 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__29348__auto___40200 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40201 = arguments.length;
var i__29309__auto___40202 = (0);
while(true){
if((i__29309__auto___40202 < len__29308__auto___40201)){
args__29315__auto__.push((arguments[i__29309__auto___40202]));

var G__40203 = (i__29309__auto___40202 + (1));
i__29309__auto___40202 = G__40203;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq40197){
var G__40198 = cljs.core.first.call(null,seq40197);
var seq40197__$1 = cljs.core.next.call(null,seq40197);
var G__40199 = cljs.core.first.call(null,seq40197__$1);
var seq40197__$2 = cljs.core.next.call(null,seq40197__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__40198,G__40199,seq40197__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__29348__auto___40204 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__29348__auto___40205 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__29348__auto___40209 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40210 = arguments.length;
var i__29309__auto___40211 = (0);
while(true){
if((i__29309__auto___40211 < len__29308__auto___40210)){
args__29315__auto__.push((arguments[i__29309__auto___40211]));

var G__40212 = (i__29309__auto___40211 + (1));
i__29309__auto___40211 = G__40212;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq40206){
var G__40207 = cljs.core.first.call(null,seq40206);
var seq40206__$1 = cljs.core.next.call(null,seq40206);
var G__40208 = cljs.core.first.call(null,seq40206__$1);
var seq40206__$2 = cljs.core.next.call(null,seq40206__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__40207,G__40208,seq40206__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__29348__auto___40216 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40217 = arguments.length;
var i__29309__auto___40218 = (0);
while(true){
if((i__29309__auto___40218 < len__29308__auto___40217)){
args__29315__auto__.push((arguments[i__29309__auto___40218]));

var G__40219 = (i__29309__auto___40218 + (1));
i__29309__auto___40218 = G__40219;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq40213){
var G__40214 = cljs.core.first.call(null,seq40213);
var seq40213__$1 = cljs.core.next.call(null,seq40213);
var G__40215 = cljs.core.first.call(null,seq40213__$1);
var seq40213__$2 = cljs.core.next.call(null,seq40213__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__40214,G__40215,seq40213__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__29348__auto___40220 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__29348__auto___40221 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__29348__auto___40222 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__29348__auto___40226 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40227 = arguments.length;
var i__29309__auto___40228 = (0);
while(true){
if((i__29309__auto___40228 < len__29308__auto___40227)){
args__29315__auto__.push((arguments[i__29309__auto___40228]));

var G__40229 = (i__29309__auto___40228 + (1));
i__29309__auto___40228 = G__40229;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq40223){
var G__40224 = cljs.core.first.call(null,seq40223);
var seq40223__$1 = cljs.core.next.call(null,seq40223);
var G__40225 = cljs.core.first.call(null,seq40223__$1);
var seq40223__$2 = cljs.core.next.call(null,seq40223__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__40224,G__40225,seq40223__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__29348__auto___40233 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40234 = arguments.length;
var i__29309__auto___40235 = (0);
while(true){
if((i__29309__auto___40235 < len__29308__auto___40234)){
args__29315__auto__.push((arguments[i__29309__auto___40235]));

var G__40236 = (i__29309__auto___40235 + (1));
i__29309__auto___40235 = G__40236;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq40230){
var G__40231 = cljs.core.first.call(null,seq40230);
var seq40230__$1 = cljs.core.next.call(null,seq40230);
var G__40232 = cljs.core.first.call(null,seq40230__$1);
var seq40230__$2 = cljs.core.next.call(null,seq40230__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__40231,G__40232,seq40230__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__29348__auto___40244 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__40243 = arguments.length;
switch (G__40243) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40246 = arguments.length;
var i__29309__auto___40247 = (0);
while(true){
if((i__29309__auto___40247 < len__29308__auto___40246)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40247]));

var G__40248 = (i__29309__auto___40247 + (1));
i__29309__auto___40247 = G__40248;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq40238){
var G__40239 = cljs.core.first.call(null,seq40238);
var seq40238__$1 = cljs.core.next.call(null,seq40238);
var G__40240 = cljs.core.first.call(null,seq40238__$1);
var seq40238__$2 = cljs.core.next.call(null,seq40238__$1);
var G__40241 = cljs.core.first.call(null,seq40238__$2);
var seq40238__$3 = cljs.core.next.call(null,seq40238__$2);
var G__40242 = cljs.core.first.call(null,seq40238__$3);
var seq40238__$4 = cljs.core.next.call(null,seq40238__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__40239,G__40240,G__40241,G__40242,seq40238__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__29348__auto___40256 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__40255 = arguments.length;
switch (G__40255) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40258 = arguments.length;
var i__29309__auto___40259 = (0);
while(true){
if((i__29309__auto___40259 < len__29308__auto___40258)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40259]));

var G__40260 = (i__29309__auto___40259 + (1));
i__29309__auto___40259 = G__40260;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq40250){
var G__40251 = cljs.core.first.call(null,seq40250);
var seq40250__$1 = cljs.core.next.call(null,seq40250);
var G__40252 = cljs.core.first.call(null,seq40250__$1);
var seq40250__$2 = cljs.core.next.call(null,seq40250__$1);
var G__40253 = cljs.core.first.call(null,seq40250__$2);
var seq40250__$3 = cljs.core.next.call(null,seq40250__$2);
var G__40254 = cljs.core.first.call(null,seq40250__$3);
var seq40250__$4 = cljs.core.next.call(null,seq40250__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40251,G__40252,G__40253,G__40254,seq40250__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__29348__auto___40268 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__40267 = arguments.length;
switch (G__40267) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40270 = arguments.length;
var i__29309__auto___40271 = (0);
while(true){
if((i__29309__auto___40271 < len__29308__auto___40270)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40271]));

var G__40272 = (i__29309__auto___40271 + (1));
i__29309__auto___40271 = G__40272;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq40262){
var G__40263 = cljs.core.first.call(null,seq40262);
var seq40262__$1 = cljs.core.next.call(null,seq40262);
var G__40264 = cljs.core.first.call(null,seq40262__$1);
var seq40262__$2 = cljs.core.next.call(null,seq40262__$1);
var G__40265 = cljs.core.first.call(null,seq40262__$2);
var seq40262__$3 = cljs.core.next.call(null,seq40262__$2);
var G__40266 = cljs.core.first.call(null,seq40262__$3);
var seq40262__$4 = cljs.core.next.call(null,seq40262__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__40263,G__40264,G__40265,G__40266,seq40262__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__29348__auto___40280 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__40279 = arguments.length;
switch (G__40279) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40282 = arguments.length;
var i__29309__auto___40283 = (0);
while(true){
if((i__29309__auto___40283 < len__29308__auto___40282)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40283]));

var G__40284 = (i__29309__auto___40283 + (1));
i__29309__auto___40283 = G__40284;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq40274){
var G__40275 = cljs.core.first.call(null,seq40274);
var seq40274__$1 = cljs.core.next.call(null,seq40274);
var G__40276 = cljs.core.first.call(null,seq40274__$1);
var seq40274__$2 = cljs.core.next.call(null,seq40274__$1);
var G__40277 = cljs.core.first.call(null,seq40274__$2);
var seq40274__$3 = cljs.core.next.call(null,seq40274__$2);
var G__40278 = cljs.core.first.call(null,seq40274__$3);
var seq40274__$4 = cljs.core.next.call(null,seq40274__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__40275,G__40276,G__40277,G__40278,seq40274__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__29348__auto___40292 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__40291 = arguments.length;
switch (G__40291) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40294 = arguments.length;
var i__29309__auto___40295 = (0);
while(true){
if((i__29309__auto___40295 < len__29308__auto___40294)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40295]));

var G__40296 = (i__29309__auto___40295 + (1));
i__29309__auto___40295 = G__40296;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first.call(null,seq40286);
var seq40286__$1 = cljs.core.next.call(null,seq40286);
var G__40288 = cljs.core.first.call(null,seq40286__$1);
var seq40286__$2 = cljs.core.next.call(null,seq40286__$1);
var G__40289 = cljs.core.first.call(null,seq40286__$2);
var seq40286__$3 = cljs.core.next.call(null,seq40286__$2);
var G__40290 = cljs.core.first.call(null,seq40286__$3);
var seq40286__$4 = cljs.core.next.call(null,seq40286__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__40287,G__40288,G__40289,G__40290,seq40286__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__29348__auto___40304 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__40303 = arguments.length;
switch (G__40303) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40306 = arguments.length;
var i__29309__auto___40307 = (0);
while(true){
if((i__29309__auto___40307 < len__29308__auto___40306)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40307]));

var G__40308 = (i__29309__auto___40307 + (1));
i__29309__auto___40307 = G__40308;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq40298){
var G__40299 = cljs.core.first.call(null,seq40298);
var seq40298__$1 = cljs.core.next.call(null,seq40298);
var G__40300 = cljs.core.first.call(null,seq40298__$1);
var seq40298__$2 = cljs.core.next.call(null,seq40298__$1);
var G__40301 = cljs.core.first.call(null,seq40298__$2);
var seq40298__$3 = cljs.core.next.call(null,seq40298__$2);
var G__40302 = cljs.core.first.call(null,seq40298__$3);
var seq40298__$4 = cljs.core.next.call(null,seq40298__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40299,G__40300,G__40301,G__40302,seq40298__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__29348__auto___40316 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__40315 = arguments.length;
switch (G__40315) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40318 = arguments.length;
var i__29309__auto___40319 = (0);
while(true){
if((i__29309__auto___40319 < len__29308__auto___40318)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40319]));

var G__40320 = (i__29309__auto___40319 + (1));
i__29309__auto___40319 = G__40320;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq40310){
var G__40311 = cljs.core.first.call(null,seq40310);
var seq40310__$1 = cljs.core.next.call(null,seq40310);
var G__40312 = cljs.core.first.call(null,seq40310__$1);
var seq40310__$2 = cljs.core.next.call(null,seq40310__$1);
var G__40313 = cljs.core.first.call(null,seq40310__$2);
var seq40310__$3 = cljs.core.next.call(null,seq40310__$2);
var G__40314 = cljs.core.first.call(null,seq40310__$3);
var seq40310__$4 = cljs.core.next.call(null,seq40310__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__40311,G__40312,G__40313,G__40314,seq40310__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__29348__auto___40328 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__40327 = arguments.length;
switch (G__40327) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40330 = arguments.length;
var i__29309__auto___40331 = (0);
while(true){
if((i__29309__auto___40331 < len__29308__auto___40330)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40331]));

var G__40332 = (i__29309__auto___40331 + (1));
i__29309__auto___40331 = G__40332;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq40322){
var G__40323 = cljs.core.first.call(null,seq40322);
var seq40322__$1 = cljs.core.next.call(null,seq40322);
var G__40324 = cljs.core.first.call(null,seq40322__$1);
var seq40322__$2 = cljs.core.next.call(null,seq40322__$1);
var G__40325 = cljs.core.first.call(null,seq40322__$2);
var seq40322__$3 = cljs.core.next.call(null,seq40322__$2);
var G__40326 = cljs.core.first.call(null,seq40322__$3);
var seq40322__$4 = cljs.core.next.call(null,seq40322__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40323,G__40324,G__40325,G__40326,seq40322__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__29348__auto___40340 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__40339 = arguments.length;
switch (G__40339) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40342 = arguments.length;
var i__29309__auto___40343 = (0);
while(true){
if((i__29309__auto___40343 < len__29308__auto___40342)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40343]));

var G__40344 = (i__29309__auto___40343 + (1));
i__29309__auto___40343 = G__40344;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq40334){
var G__40335 = cljs.core.first.call(null,seq40334);
var seq40334__$1 = cljs.core.next.call(null,seq40334);
var G__40336 = cljs.core.first.call(null,seq40334__$1);
var seq40334__$2 = cljs.core.next.call(null,seq40334__$1);
var G__40337 = cljs.core.first.call(null,seq40334__$2);
var seq40334__$3 = cljs.core.next.call(null,seq40334__$2);
var G__40338 = cljs.core.first.call(null,seq40334__$3);
var seq40334__$4 = cljs.core.next.call(null,seq40334__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40335,G__40336,G__40337,G__40338,seq40334__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__29348__auto___40345 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__29348__auto___40346 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__29348__auto___40347 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40348 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40349 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40359 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__40358 = arguments.length;
switch (G__40358) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40361 = arguments.length;
var i__29309__auto___40362 = (0);
while(true){
if((i__29309__auto___40362 < len__29308__auto___40361)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40362]));

var G__40363 = (i__29309__auto___40362 + (1));
i__29309__auto___40362 = G__40363;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40350__auto__","x__40350__auto__",-973492670,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40351__auto__","y__40351__auto__",-1369160606,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40350__auto__","x__40350__auto__",-973492670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40351__auto__","y__40351__auto__",-1369160606,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40350__auto__","x__40350__auto__",-973492670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40351__auto__","y__40351__auto__",-1369160606,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq40353){
var G__40354 = cljs.core.first.call(null,seq40353);
var seq40353__$1 = cljs.core.next.call(null,seq40353);
var G__40355 = cljs.core.first.call(null,seq40353__$1);
var seq40353__$2 = cljs.core.next.call(null,seq40353__$1);
var G__40356 = cljs.core.first.call(null,seq40353__$2);
var seq40353__$3 = cljs.core.next.call(null,seq40353__$2);
var G__40357 = cljs.core.first.call(null,seq40353__$3);
var seq40353__$4 = cljs.core.next.call(null,seq40353__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__40354,G__40355,G__40356,G__40357,seq40353__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__29348__auto___40373 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__40372 = arguments.length;
switch (G__40372) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40375 = arguments.length;
var i__29309__auto___40376 = (0);
while(true){
if((i__29309__auto___40376 < len__29308__auto___40375)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40376]));

var G__40377 = (i__29309__auto___40376 + (1));
i__29309__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40364__auto__","x__40364__auto__",1493730247,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40365__auto__","y__40365__auto__",762346270,null)),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40364__auto__","x__40364__auto__",1493730247,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40365__auto__","y__40365__auto__",762346270,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40364__auto__","x__40364__auto__",1493730247,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40365__auto__","y__40365__auto__",762346270,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq40367){
var G__40368 = cljs.core.first.call(null,seq40367);
var seq40367__$1 = cljs.core.next.call(null,seq40367);
var G__40369 = cljs.core.first.call(null,seq40367__$1);
var seq40367__$2 = cljs.core.next.call(null,seq40367__$1);
var G__40370 = cljs.core.first.call(null,seq40367__$2);
var seq40367__$3 = cljs.core.next.call(null,seq40367__$2);
var G__40371 = cljs.core.first.call(null,seq40367__$3);
var seq40367__$4 = cljs.core.next.call(null,seq40367__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__40368,G__40369,G__40370,G__40371,seq40367__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__29348__auto___40378 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__29348__auto___40379 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__29348__auto___40387 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__40386 = arguments.length;
switch (G__40386) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40389 = arguments.length;
var i__29309__auto___40390 = (0);
while(true){
if((i__29309__auto___40390 < len__29308__auto___40389)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40390]));

var G__40391 = (i__29309__auto___40390 + (1));
i__29309__auto___40390 = G__40391;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq40381){
var G__40382 = cljs.core.first.call(null,seq40381);
var seq40381__$1 = cljs.core.next.call(null,seq40381);
var G__40383 = cljs.core.first.call(null,seq40381__$1);
var seq40381__$2 = cljs.core.next.call(null,seq40381__$1);
var G__40384 = cljs.core.first.call(null,seq40381__$2);
var seq40381__$3 = cljs.core.next.call(null,seq40381__$2);
var G__40385 = cljs.core.first.call(null,seq40381__$3);
var seq40381__$4 = cljs.core.next.call(null,seq40381__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__40382,G__40383,G__40384,G__40385,seq40381__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__29348__auto___40399 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__40398 = arguments.length;
switch (G__40398) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40401 = arguments.length;
var i__29309__auto___40402 = (0);
while(true){
if((i__29309__auto___40402 < len__29308__auto___40401)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40402]));

var G__40403 = (i__29309__auto___40402 + (1));
i__29309__auto___40402 = G__40403;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq40393){
var G__40394 = cljs.core.first.call(null,seq40393);
var seq40393__$1 = cljs.core.next.call(null,seq40393);
var G__40395 = cljs.core.first.call(null,seq40393__$1);
var seq40393__$2 = cljs.core.next.call(null,seq40393__$1);
var G__40396 = cljs.core.first.call(null,seq40393__$2);
var seq40393__$3 = cljs.core.next.call(null,seq40393__$2);
var G__40397 = cljs.core.first.call(null,seq40393__$3);
var seq40393__$4 = cljs.core.next.call(null,seq40393__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__40394,G__40395,G__40396,G__40397,seq40393__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__29348__auto___40411 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__40410 = arguments.length;
switch (G__40410) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40413 = arguments.length;
var i__29309__auto___40414 = (0);
while(true){
if((i__29309__auto___40414 < len__29308__auto___40413)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40414]));

var G__40415 = (i__29309__auto___40414 + (1));
i__29309__auto___40414 = G__40415;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq40405){
var G__40406 = cljs.core.first.call(null,seq40405);
var seq40405__$1 = cljs.core.next.call(null,seq40405);
var G__40407 = cljs.core.first.call(null,seq40405__$1);
var seq40405__$2 = cljs.core.next.call(null,seq40405__$1);
var G__40408 = cljs.core.first.call(null,seq40405__$2);
var seq40405__$3 = cljs.core.next.call(null,seq40405__$2);
var G__40409 = cljs.core.first.call(null,seq40405__$3);
var seq40405__$4 = cljs.core.next.call(null,seq40405__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__40406,G__40407,G__40408,G__40409,seq40405__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__29348__auto___40416 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__29348__auto___40424 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__40423 = arguments.length;
switch (G__40423) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40426 = arguments.length;
var i__29309__auto___40427 = (0);
while(true){
if((i__29309__auto___40427 < len__29308__auto___40426)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40427]));

var G__40428 = (i__29309__auto___40427 + (1));
i__29309__auto___40427 = G__40428;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq40418){
var G__40419 = cljs.core.first.call(null,seq40418);
var seq40418__$1 = cljs.core.next.call(null,seq40418);
var G__40420 = cljs.core.first.call(null,seq40418__$1);
var seq40418__$2 = cljs.core.next.call(null,seq40418__$1);
var G__40421 = cljs.core.first.call(null,seq40418__$2);
var seq40418__$3 = cljs.core.next.call(null,seq40418__$2);
var G__40422 = cljs.core.first.call(null,seq40418__$3);
var seq40418__$4 = cljs.core.next.call(null,seq40418__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__40419,G__40420,G__40421,G__40422,seq40418__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__29348__auto___40436 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__40435 = arguments.length;
switch (G__40435) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40438 = arguments.length;
var i__29309__auto___40439 = (0);
while(true){
if((i__29309__auto___40439 < len__29308__auto___40438)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40439]));

var G__40440 = (i__29309__auto___40439 + (1));
i__29309__auto___40439 = G__40440;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq40430){
var G__40431 = cljs.core.first.call(null,seq40430);
var seq40430__$1 = cljs.core.next.call(null,seq40430);
var G__40432 = cljs.core.first.call(null,seq40430__$1);
var seq40430__$2 = cljs.core.next.call(null,seq40430__$1);
var G__40433 = cljs.core.first.call(null,seq40430__$2);
var seq40430__$3 = cljs.core.next.call(null,seq40430__$2);
var G__40434 = cljs.core.first.call(null,seq40430__$3);
var seq40430__$4 = cljs.core.next.call(null,seq40430__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__40431,G__40432,G__40433,G__40434,seq40430__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__29348__auto___40441 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__29348__auto___40442 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__29348__auto___40443 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__29348__auto___40444 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__29348__auto___40445 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__29348__auto___40446 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__29348__auto___40447 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__29348__auto___40448 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__29348__auto___40449 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__29348__auto___40450 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__29001__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__29348__auto___40452 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)),(function (){var x__29001__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__40451__auto__","h__40451__auto__",1729447629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40453__auto__","x__40453__auto__",-707980096,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40453__auto__","x__40453__auto__",-707980096,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
var ret__29348__auto___40461 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40462 = arguments.length;
var i__29309__auto___40463 = (0);
while(true){
if((i__29309__auto___40463 < len__29308__auto___40462)){
args__29315__auto__.push((arguments[i__29309__auto___40463]));

var G__40464 = (i__29309__auto___40463 + (1));
i__29309__auto___40463 = G__40464;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((6) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__29316__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq40454){
var G__40455 = cljs.core.first.call(null,seq40454);
var seq40454__$1 = cljs.core.next.call(null,seq40454);
var G__40456 = cljs.core.first.call(null,seq40454__$1);
var seq40454__$2 = cljs.core.next.call(null,seq40454__$1);
var G__40457 = cljs.core.first.call(null,seq40454__$2);
var seq40454__$3 = cljs.core.next.call(null,seq40454__$2);
var G__40458 = cljs.core.first.call(null,seq40454__$3);
var seq40454__$4 = cljs.core.next.call(null,seq40454__$3);
var G__40459 = cljs.core.first.call(null,seq40454__$4);
var seq40454__$5 = cljs.core.next.call(null,seq40454__$4);
var G__40460 = cljs.core.first.call(null,seq40454__$5);
var seq40454__$6 = cljs.core.next.call(null,seq40454__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__40455,G__40456,G__40457,G__40458,G__40459,G__40460,seq40454__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = clojure.walk.postwalk.call(null,(function (p1__40465_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__40465_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__40465_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__40465_SHARP_));
} else {
return p1__40465_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
var ret__29348__auto___40470 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__40466,fkv){
var vec__40467 = p__40466;
var f1 = cljs.core.nth.call(null,vec__40467,(0),null);
var k = cljs.core.nth.call(null,vec__40467,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__29348__auto___40474 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40475 = arguments.length;
var i__29309__auto___40476 = (0);
while(true){
if((i__29309__auto___40476 < len__29308__auto___40475)){
args__29315__auto__.push((arguments[i__29309__auto___40476]));

var G__40477 = (i__29309__auto___40476 + (1));
i__29309__auto___40476 = G__40477;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__29001__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),locals,(function (){var x__29001__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),locals,(function (){var x__29001__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq40471){
var G__40472 = cljs.core.first.call(null,seq40471);
var seq40471__$1 = cljs.core.next.call(null,seq40471);
var G__40473 = cljs.core.first.call(null,seq40471__$1);
var seq40471__$2 = cljs.core.next.call(null,seq40471__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__40472,G__40473,seq40471__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__29348__auto___40482 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40483 = arguments.length;
var i__29309__auto___40484 = (0);
while(true){
if((i__29309__auto___40484 < len__29308__auto___40483)){
args__29315__auto__.push((arguments[i__29309__auto___40484]));

var G__40485 = (i__29309__auto___40484 + (1));
i__29309__auto___40484 = G__40485;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq40478){
var G__40479 = cljs.core.first.call(null,seq40478);
var seq40478__$1 = cljs.core.next.call(null,seq40478);
var G__40480 = cljs.core.first.call(null,seq40478__$1);
var seq40478__$2 = cljs.core.next.call(null,seq40478__$1);
var G__40481 = cljs.core.first.call(null,seq40478__$2);
var seq40478__$3 = cljs.core.next.call(null,seq40478__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40479,G__40480,G__40481,seq40478__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__29348__auto___40490 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40491 = arguments.length;
var i__29309__auto___40492 = (0);
while(true){
if((i__29309__auto___40492 < len__29308__auto___40491)){
args__29315__auto__.push((arguments[i__29309__auto___40492]));

var G__40493 = (i__29309__auto___40492 + (1));
i__29309__auto___40492 = G__40493;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq40486){
var G__40487 = cljs.core.first.call(null,seq40486);
var seq40486__$1 = cljs.core.next.call(null,seq40486);
var G__40488 = cljs.core.first.call(null,seq40486__$1);
var seq40486__$2 = cljs.core.next.call(null,seq40486__$1);
var G__40489 = cljs.core.first.call(null,seq40486__$2);
var seq40486__$3 = cljs.core.next.call(null,seq40486__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__40487,G__40488,G__40489,seq40486__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__29348__auto___40494 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__29348__auto___40499 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40500 = arguments.length;
var i__29309__auto___40501 = (0);
while(true){
if((i__29309__auto___40501 < len__29308__auto___40500)){
args__29315__auto__.push((arguments[i__29309__auto___40501]));

var G__40502 = (i__29309__auto___40501 + (1));
i__29309__auto___40501 = G__40502;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq40495){
var G__40496 = cljs.core.first.call(null,seq40495);
var seq40495__$1 = cljs.core.next.call(null,seq40495);
var G__40497 = cljs.core.first.call(null,seq40495__$1);
var seq40495__$2 = cljs.core.next.call(null,seq40495__$1);
var G__40498 = cljs.core.first.call(null,seq40495__$2);
var seq40495__$3 = cljs.core.next.call(null,seq40495__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__40496,G__40497,G__40498,seq40495__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__28127__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__28127__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__40503 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__40504 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__40503;
s = G__40504;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__40505){
var vec__40506 = p__40505;
var p = cljs.core.nth.call(null,vec__40506,(0),null);
var sigs = cljs.core.nth.call(null,vec__40506,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29001__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__40506,p,sigs){
return (function (p__40509){
var vec__40510 = p__40509;
var seq__40511 = cljs.core.seq.call(null,vec__40510);
var first__40512 = cljs.core.first.call(null,seq__40511);
var seq__40511__$1 = cljs.core.next.call(null,seq__40511);
var f = first__40512;
var meths = seq__40511__$1;
var form = vec__40510;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(psym,pfn_prefix,vec__40506,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__29094__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29095__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29098__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__,hierarchy__29098__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__,hierarchy__29098__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29098__auto__,method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29001__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29001__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__29001__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__40513){
var vec__40514 = p__40513;
var seq__40515 = cljs.core.seq.call(null,vec__40514);
var first__40516 = cljs.core.first.call(null,seq__40515);
var seq__40515__$1 = cljs.core.next.call(null,seq__40515);
var vec__40517 = first__40516;
var seq__40518 = cljs.core.seq.call(null,vec__40517);
var first__40519 = cljs.core.first.call(null,seq__40518);
var seq__40518__$1 = cljs.core.next.call(null,seq__40518);
var this$ = first__40519;
var args = seq__40518__$1;
var sig = vec__40517;
var body = seq__40515__$1;
var x__29001__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__40520){
var vec__40521 = p__40520;
var seq__40522 = cljs.core.seq.call(null,vec__40521);
var first__40523 = cljs.core.first.call(null,seq__40522);
var seq__40522__$1 = cljs.core.next.call(null,seq__40522);
var vec__40524 = first__40523;
var seq__40525 = cljs.core.seq.call(null,vec__40524);
var first__40526 = cljs.core.first.call(null,seq__40525);
var seq__40525__$1 = cljs.core.next.call(null,seq__40525);
var this$ = first__40526;
var args = seq__40525__$1;
var sig = vec__40524;
var body = seq__40522__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29001__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__40527){
var vec__40528 = p__40527;
var seq__40529 = cljs.core.seq.call(null,vec__40528);
var first__40530 = cljs.core.first.call(null,seq__40529);
var seq__40529__$1 = cljs.core.next.call(null,seq__40529);
var vec__40531 = first__40530;
var seq__40532 = cljs.core.seq.call(null,vec__40531);
var first__40533 = cljs.core.first.call(null,seq__40532);
var seq__40532__$1 = cljs.core.next.call(null,seq__40532);
var this$ = first__40533;
var args = seq__40532__$1;
var sig = vec__40531;
var body = seq__40529__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29001__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__40534){
var vec__40535 = p__40534;
var seq__40536 = cljs.core.seq.call(null,vec__40535);
var first__40537 = cljs.core.first.call(null,seq__40536);
var seq__40536__$1 = cljs.core.next.call(null,seq__40536);
var vec__40538 = first__40537;
var seq__40539 = cljs.core.seq.call(null,vec__40538);
var first__40540 = cljs.core.first.call(null,seq__40539);
var seq__40539__$1 = cljs.core.next.call(null,seq__40539);
var this$ = first__40540;
var args = seq__40539__$1;
var sig = vec__40538;
var body = seq__40536__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29001__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__40542){
var vec__40543 = p__40542;
var seq__40544 = cljs.core.seq.call(null,vec__40543);
var first__40545 = cljs.core.first.call(null,seq__40544);
var seq__40544__$1 = cljs.core.next.call(null,seq__40544);
var f = first__40545;
var meths = seq__40544__$1;
var form = vec__40543;
var vec__40546 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__40546,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__40546,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__40546,f__$1,meths__$1,vec__40543,seq__40544,first__40545,seq__40544__$1,f,meths,form){
return (function (p1__40541_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__40541_SHARP_);
});})(vec__40546,f__$1,meths__$1,vec__40543,seq__40544,first__40545,seq__40544__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__40550){
var vec__40551 = p__40550;
var seq__40552 = cljs.core.seq.call(null,vec__40551);
var first__40553 = cljs.core.first.call(null,seq__40552);
var seq__40552__$1 = cljs.core.next.call(null,seq__40552);
var f = first__40553;
var meths = seq__40552__$1;
var form = vec__40551;
return cljs.core.map.call(null,((function (vec__40551,seq__40552,first__40553,seq__40552__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(vec__40551,seq__40552,first__40553,seq__40552__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__40551,seq__40552,first__40553,seq__40552__$1,f,meths,form){
return (function (p1__40549_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__40549_SHARP_);
});})(vec__40551,seq__40552,first__40553,seq__40552__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__40555){
var vec__40556 = p__40555;
var seq__40557 = cljs.core.seq.call(null,vec__40556);
var first__40558 = cljs.core.first.call(null,seq__40557);
var seq__40557__$1 = cljs.core.next.call(null,seq__40557);
var f = first__40558;
var meths = seq__40557__$1;
var form = vec__40556;
var meths__$1 = cljs.core.map.call(null,((function (vec__40556,seq__40557,first__40558,seq__40557__$1,f,meths,form){
return (function (p1__40554_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__40554_SHARP_);
});})(vec__40556,seq__40557,first__40558,seq__40557__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__29001__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__29001__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__40559){
var vec__40560 = p__40559;
var seq__40561 = cljs.core.seq.call(null,vec__40560);
var first__40562 = cljs.core.first.call(null,seq__40561);
var seq__40561__$1 = cljs.core.next.call(null,seq__40561);
var f = first__40562;
var meths = seq__40561__$1;
var form = vec__40560;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__40560,seq__40561,first__40562,seq__40561__$1,f,meths,form){
return (function (p__40563){
var vec__40564 = p__40563;
var seq__40565 = cljs.core.seq.call(null,vec__40564);
var first__40566 = cljs.core.first.call(null,seq__40565);
var seq__40565__$1 = cljs.core.next.call(null,seq__40565);
var sig = first__40566;
var body = seq__40565__$1;
var meth = vec__40564;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(pf,vec__40560,seq__40561,first__40562,seq__40561__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__40567){
var vec__40568 = p__40567;
var p = cljs.core.nth.call(null,vec__40568,(0),null);
var sigs = cljs.core.nth.call(null,vec__40568,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__40568,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__40568,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__40571 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__40571,(0),null);
var sigs = cljs.core.nth.call(null,vec__40571,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_40574 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_40574))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__40575 = cljs.core.next.call(null,sigs__$1);
var G__40576 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__40575;
seen = G__40576;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_40580 = cljs.core.PersistentHashSet.EMPTY;
var methods_40581__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_40581__$1)){
var vec__40577_40582 = cljs.core.first.call(null,methods_40581__$1);
var fname_40583 = cljs.core.nth.call(null,vec__40577_40582,(0),null);
var method_40584 = vec__40577_40582;
if(cljs.core.contains_QMARK_.call(null,seen_40580,fname_40583)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_40583], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_40584);

var G__40585 = cljs.core.conj.call(null,seen_40580,fname_40583);
var G__40586 = cljs.core.next.call(null,methods_40581__$1);
seen_40580 = G__40585;
methods_40581__$1 = G__40586;
continue;
} else {
}
break;
}

var G__40587 = cljs.core.conj.call(null,protos,proto);
var G__40588 = impls__$2;
protos = G__40587;
impls__$1 = G__40588;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__29348__auto___40597 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40598 = arguments.length;
var i__29309__auto___40599 = (0);
while(true){
if((i__29309__auto___40599 < len__29308__auto___40598)){
args__29315__auto__.push((arguments[i__29309__auto___40599]));

var G__40600 = (i__29309__auto___40599 + (1));
i__29309__auto___40599 = G__40600;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__40594 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__40594,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__40594,(1),null);
if(cljs.core.truth_((function (){var and__28127__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__28127__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__40594,type,assign_impls){
return (function (p1__40589_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__40589_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__40594,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq40590){
var G__40591 = cljs.core.first.call(null,seq40590);
var seq40590__$1 = cljs.core.next.call(null,seq40590);
var G__40592 = cljs.core.first.call(null,seq40590__$1);
var seq40590__$2 = cljs.core.next.call(null,seq40590__$1);
var G__40593 = cljs.core.first.call(null,seq40590__$2);
var seq40590__$3 = cljs.core.next.call(null,seq40590__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__40591,G__40592,G__40593,seq40590__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__40602){
var vec__40603 = p__40602;
var f = cljs.core.nth.call(null,vec__40603,(0),null);
var sigs = cljs.core.nth.call(null,vec__40603,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__40603,f,sigs){
return (function (p1__40601_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__40601_SHARP_),cljs.core.nnext.call(null,p1__40601_SHARP_));
});})(vec__40603,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__40607 = arguments.length;
switch (G__40607) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__40609 = ret__$1;
var G__40610 = specs__$2;
ret = G__40609;
specs__$1 = G__40610;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__40611_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__40611_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29001__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__29348__auto___40623 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40624 = arguments.length;
var i__29309__auto___40625 = (0);
while(true){
if((i__29309__auto___40625 < len__29308__auto___40624)){
args__29315__auto__.push((arguments[i__29309__auto___40625]));

var G__40626 = (i__29309__auto___40625 + (1));
i__29309__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__40620 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__40620,(0),null);
var pmasks = cljs.core.nth.call(null,vec__40620,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40612__auto__","this__40612__auto__",-846019436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40613__auto__","writer__40613__auto__",77002295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__40614__auto__","opt__40614__auto__",844817594,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40613__auto__","writer__40613__auto__",77002295,null)),(function (){var x__29001__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq40615){
var G__40616 = cljs.core.first.call(null,seq40615);
var seq40615__$1 = cljs.core.next.call(null,seq40615);
var G__40617 = cljs.core.first.call(null,seq40615__$1);
var seq40615__$2 = cljs.core.next.call(null,seq40615__$1);
var G__40618 = cljs.core.first.call(null,seq40615__$2);
var seq40615__$3 = cljs.core.next.call(null,seq40615__$2);
var G__40619 = cljs.core.first.call(null,seq40615__$3);
var seq40615__$4 = cljs.core.next.call(null,seq40615__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__40616,G__40617,G__40618,G__40619,seq40615__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__40627_SHARP_){
return cljs.core.with_meta.call(null,p1__40627_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40628__auto__","this__40628__auto__",-1124516981,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40629__auto__","this__40629__auto__",-1555077680,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40629__auto__","this__40629__auto__",-1555077680,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__40630__auto__","coll__40630__auto__",1310906394,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__29001__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__40630__auto__","coll__40630__auto__",1310906394,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__29001__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__29001__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__29001__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29001__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29001__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__29001__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__29001__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40631__auto__","this__40631__auto__",-1541012451,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40632__auto__","this__40632__auto__",146551584,null)),(function (){var x__29001__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40633__auto__","this__40633__auto__",251802084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40634__auto__","k__40634__auto__",1346878944,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40633__auto__","this__40633__auto__",251802084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40634__auto__","k__40634__auto__",1346878944,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40635__auto__","this__40635__auto__",2024755625,null)),(function (){var x__29001__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__40636__auto__","else__40636__auto__",-351958189,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__29001__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__29001__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__40636__auto__","else__40636__auto__",-351958189,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40637__auto__","this__40637__auto__",135812421,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__29001__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40638__auto__","this__40638__auto__",1090302957,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__40639__auto__","entry__40639__auto__",-404621259,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__40639__auto__","entry__40639__auto__",-404621259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40638__auto__","this__40638__auto__",1090302957,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__40639__auto__","entry__40639__auto__",-404621259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__40639__auto__","entry__40639__auto__",-404621259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40638__auto__","this__40638__auto__",1090302957,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__40639__auto__","entry__40639__auto__",-404621259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40640__auto__","this__40640__auto__",473356448,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40641__auto__","k__40641__auto__",-1140178813,null)),(function (){var x__29001__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40641__auto__","k__40641__auto__",-1140178813,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40641__auto__","k__40641__auto__",-1140178813,null)),(function (){var x__29001__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40642__auto__","this__40642__auto__",-947973272,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40643__auto__","k__40643__auto__",1871329745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40643__auto__","k__40643__auto__",1871329745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40642__auto__","this__40642__auto__",-947973272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40643__auto__","k__40643__auto__",1871329745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__40643__auto__","k__40643__auto__",1871329745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40645__auto__","this__40645__auto__",-63286135,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__40644_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.keyword.call(null,p1__40644_SHARP_);
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = p1__40644_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29001__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40647__auto__","this__40647__auto__",1092290150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40648__auto__","writer__40648__auto__",1742581275,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__40649__auto__","opts__40649__auto__",1099533451,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__40650__auto__","pr-pair__40650__auto__",-2000877486,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__40651__auto__","keyval__40651__auto__",-1289255756,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40648__auto__","writer__40648__auto__",1742581275,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__40649__auto__","opts__40649__auto__",1099533451,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__40651__auto__","keyval__40651__auto__",-1289255756,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40648__auto__","writer__40648__auto__",1742581275,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__40650__auto__","pr-pair__40650__auto__",-2000877486,null)),(function (){var x__29001__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__40649__auto__","opts__40649__auto__",1099533451,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__40646_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.keyword.call(null,p1__40646_SHARP_);
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = p1__40646_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null));
var vec__40652 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__40652,(0),null);
var pmasks = cljs.core.nth.call(null,vec__40652,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__29001__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__29001__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29001__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__29001__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
var ret__29348__auto___40662 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40663 = arguments.length;
var i__29309__auto___40664 = (0);
while(true){
if((i__29309__auto___40664 < len__29308__auto___40663)){
args__29315__auto__.push((arguments[i__29309__auto___40664]));

var G__40665 = (i__29309__auto___40664 + (1));
i__29309__auto___40664 = G__40665;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__29001__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29001__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__29001__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40655__auto__","this__40655__auto__",-2141353782,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__29001__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29001__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40655__auto__","this__40655__auto__",-2141353782,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40656__auto__","writer__40656__auto__",-789267427,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__40656__auto__","writer__40656__auto__",-789267427,null)),(function (){var x__29001__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq40657){
var G__40658 = cljs.core.first.call(null,seq40657);
var seq40657__$1 = cljs.core.next.call(null,seq40657);
var G__40659 = cljs.core.first.call(null,seq40657__$1);
var seq40657__$2 = cljs.core.next.call(null,seq40657__$1);
var G__40660 = cljs.core.first.call(null,seq40657__$2);
var seq40657__$3 = cljs.core.next.call(null,seq40657__$2);
var G__40661 = cljs.core.first.call(null,seq40657__$3);
var seq40657__$4 = cljs.core.next.call(null,seq40657__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__40658,G__40659,G__40660,G__40661,seq40657__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__29348__auto___40693 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40694 = arguments.length;
var i__29309__auto___40695 = (0);
while(true){
if((i__29309__auto___40695 < len__29308__auto___40694)){
args__29315__auto__.push((arguments[i__29309__auto___40695]));

var G__40696 = (i__29309__auto___40695 + (1));
i__29309__auto___40695 = G__40696;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__40672 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__40672,(0),null);
var methods$ = cljs.core.nth.call(null,vec__40672,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__40672,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__40672,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__40675 = cljs.core.seq.call(null,methods$);
var chunk__40676 = null;
var count__40677 = (0);
var i__40678 = (0);
while(true){
if((i__40678 < count__40677)){
var vec__40679 = cljs.core._nth.call(null,chunk__40676,i__40678);
var seq__40680 = cljs.core.seq.call(null,vec__40679);
var first__40681 = cljs.core.first.call(null,seq__40680);
var seq__40680__$1 = cljs.core.next.call(null,seq__40680);
var mname = first__40681;
var arities = seq__40680__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__40697 = seq__40675;
var G__40698 = chunk__40676;
var G__40699 = count__40677;
var G__40700 = (i__40678 + (1));
seq__40675 = G__40697;
chunk__40676 = G__40698;
count__40677 = G__40699;
i__40678 = G__40700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40675);
if(temp__4657__auto__){
var seq__40675__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40675__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__40675__$1);
var G__40701 = cljs.core.chunk_rest.call(null,seq__40675__$1);
var G__40702 = c__28978__auto__;
var G__40703 = cljs.core.count.call(null,c__28978__auto__);
var G__40704 = (0);
seq__40675 = G__40701;
chunk__40676 = G__40702;
count__40677 = G__40703;
i__40678 = G__40704;
continue;
} else {
var vec__40682 = cljs.core.first.call(null,seq__40675__$1);
var seq__40683 = cljs.core.seq.call(null,vec__40682);
var first__40684 = cljs.core.first.call(null,seq__40683);
var seq__40683__$1 = cljs.core.next.call(null,seq__40683);
var mname = first__40684;
var arities = seq__40683__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__40705 = cljs.core.next.call(null,seq__40675__$1);
var G__40706 = null;
var G__40707 = (0);
var G__40708 = (0);
seq__40675 = G__40705;
chunk__40676 = G__40706;
count__40677 = G__40707;
i__40678 = G__40708;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40666__auto__","x__40666__auto__",851492895,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29001__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40666__auto__","x__40666__auto__",851492895,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29001__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__40667__auto__","m__40667__auto__",1082348078,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__29001__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__40685){
var vec__40686 = p__40685;
var seq__40687 = cljs.core.seq.call(null,vec__40686);
var first__40688 = cljs.core.first.call(null,seq__40687);
var seq__40687__$1 = cljs.core.next.call(null,seq__40687);
var fname = first__40688;
var sigs = seq__40687__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__40689){
var vec__40690 = p__40689;
var seq__40691 = cljs.core.seq.call(null,vec__40690);
var first__40692 = cljs.core.first.call(null,seq__40691);
var seq__40691__$1 = cljs.core.next.call(null,seq__40691);
var fname = first__40692;
var sigs = seq__40691__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__29001__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__40690,seq__40691,first__40692,seq__40691__$1,fname,sigs,p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__40690,seq__40691,first__40692,seq__40691__$1,fname,sigs,p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__40672,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29001__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq40668){
var G__40669 = cljs.core.first.call(null,seq40668);
var seq40668__$1 = cljs.core.next.call(null,seq40668);
var G__40670 = cljs.core.first.call(null,seq40668__$1);
var seq40668__$2 = cljs.core.next.call(null,seq40668__$1);
var G__40671 = cljs.core.first.call(null,seq40668__$2);
var seq40668__$3 = cljs.core.next.call(null,seq40668__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__40669,G__40670,G__40671,seq40668__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__29348__auto___40712 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__40709 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__40709,(0),null);
var bit = cljs.core.nth.call(null,vec__40709,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29001__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29001__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40716 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__40713 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__40713,(0),null);
var bit = cljs.core.nth.call(null,vec__40713,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29001__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29001__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29001__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__29001__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29001__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__29001__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__29348__auto___40720 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40721 = arguments.length;
var i__29309__auto___40722 = (0);
while(true){
if((i__29309__auto___40722 < len__29308__auto___40721)){
args__29315__auto__.push((arguments[i__29309__auto___40722]));

var G__40723 = (i__29309__auto___40722 + (1));
i__29309__auto___40722 = G__40723;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq40717){
var G__40718 = cljs.core.first.call(null,seq40717);
var seq40717__$1 = cljs.core.next.call(null,seq40717);
var G__40719 = cljs.core.first.call(null,seq40717__$1);
var seq40717__$2 = cljs.core.next.call(null,seq40717__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__40718,G__40719,seq40717__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__29348__auto___40727 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40728 = arguments.length;
var i__29309__auto___40729 = (0);
while(true){
if((i__29309__auto___40729 < len__29308__auto___40728)){
args__29315__auto__.push((arguments[i__29309__auto___40729]));

var G__40730 = (i__29309__auto___40729 + (1));
i__29309__auto___40729 = G__40730;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq40724){
var G__40725 = cljs.core.first.call(null,seq40724);
var seq40724__$1 = cljs.core.next.call(null,seq40724);
var G__40726 = cljs.core.first.call(null,seq40724__$1);
var seq40724__$2 = cljs.core.next.call(null,seq40724__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__40725,G__40726,seq40724__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__29348__auto___40739 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40740 = arguments.length;
var i__29309__auto___40741 = (0);
while(true){
if((i__29309__auto___40741 < len__29308__auto___40740)){
args__29315__auto__.push((arguments[i__29309__auto___40741]));

var G__40742 = (i__29309__auto___40741 + (1));
i__29309__auto___40741 = G__40742;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__40735){
var vec__40736 = p__40735;
var k = cljs.core.nth.call(null,vec__40736,(0),null);
var v = cljs.core.nth.call(null,vec__40736,(1),null);
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq40731){
var G__40732 = cljs.core.first.call(null,seq40731);
var seq40731__$1 = cljs.core.next.call(null,seq40731);
var G__40733 = cljs.core.first.call(null,seq40731__$1);
var seq40731__$2 = cljs.core.next.call(null,seq40731__$1);
var G__40734 = cljs.core.first.call(null,seq40731__$2);
var seq40731__$3 = cljs.core.next.call(null,seq40731__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__40732,G__40733,G__40734,seq40731__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__29348__auto___40747 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40748 = arguments.length;
var i__29309__auto___40749 = (0);
while(true){
if((i__29309__auto___40749 < len__29308__auto___40748)){
args__29315__auto__.push((arguments[i__29309__auto___40749]));

var G__40750 = (i__29309__auto___40749 + (1));
i__29309__auto___40749 = G__40750;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__29001__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq40743){
var G__40744 = cljs.core.first.call(null,seq40743);
var seq40743__$1 = cljs.core.next.call(null,seq40743);
var G__40745 = cljs.core.first.call(null,seq40743__$1);
var seq40743__$2 = cljs.core.next.call(null,seq40743__$1);
var G__40746 = cljs.core.first.call(null,seq40743__$2);
var seq40743__$3 = cljs.core.next.call(null,seq40743__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__40744,G__40745,G__40746,seq40743__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__29348__auto___40763 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40764 = arguments.length;
var i__29309__auto___40765 = (0);
while(true){
if((i__29309__auto___40765 < len__29308__auto___40764)){
args__29315__auto__.push((arguments[i__29309__auto___40765]));

var G__40766 = (i__29309__auto___40765 + (1));
i__29309__auto___40765 = G__40766;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__40757 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__40760 = cljs.core.nth.call(null,vec__40757,(0),null);
var a = cljs.core.nth.call(null,vec__40760,(0),null);
var b = cljs.core.nth.call(null,vec__40760,(1),null);
var c = cljs.core.nth.call(null,vec__40760,(2),null);
var clause = vec__40760;
var more = cljs.core.nth.call(null,vec__40757,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__29001__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__40751__auto__","p__40751__auto__",667864632,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__40751__auto__","p__40751__auto__",667864632,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq40752){
var G__40753 = cljs.core.first.call(null,seq40752);
var seq40752__$1 = cljs.core.next.call(null,seq40752);
var G__40754 = cljs.core.first.call(null,seq40752__$1);
var seq40752__$2 = cljs.core.next.call(null,seq40752__$1);
var G__40755 = cljs.core.first.call(null,seq40752__$2);
var seq40752__$3 = cljs.core.next.call(null,seq40752__$2);
var G__40756 = cljs.core.first.call(null,seq40752__$3);
var seq40752__$4 = cljs.core.next.call(null,seq40752__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__40753,G__40754,G__40755,G__40756,seq40752__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__28127__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__28127__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__29348__auto___40787 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40788 = arguments.length;
var i__29309__auto___40789 = (0);
while(true){
if((i__29309__auto___40789 < len__29308__auto___40788)){
args__29315__auto__.push((arguments[i__29309__auto___40789]));

var G__40790 = (i__29309__auto___40789 + (1));
i__29309__auto___40789 = G__40790;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__40775){
var vec__40776 = p__40775;
var test = cljs.core.nth.call(null,vec__40776,(0),null);
var expr = cljs.core.nth.call(null,vec__40776,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__40776,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__29001__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__40776,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__29001__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__40767_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__40767_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__40768_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__40768_SHARP_)){
return cljs.core.vec.call(null,p1__40768_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40768_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__40769_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40769_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__40770_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__40770_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__40770_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__40770_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__40783){
var vec__40784 = p__40783;
var m = cljs.core.nth.call(null,vec__40784,(0),null);
var c = cljs.core.nth.call(null,vec__40784,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29001__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__29001__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq40771){
var G__40772 = cljs.core.first.call(null,seq40771);
var seq40771__$1 = cljs.core.next.call(null,seq40771);
var G__40773 = cljs.core.first.call(null,seq40771__$1);
var seq40771__$2 = cljs.core.next.call(null,seq40771__$1);
var G__40774 = cljs.core.first.call(null,seq40771__$2);
var seq40771__$3 = cljs.core.next.call(null,seq40771__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__40772,G__40773,G__40774,seq40771__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__29348__auto___40791 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__29348__auto___40794 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__40793 = arguments.length;
switch (G__40793) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__29001__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__29001__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__29348__auto___40832 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__40801){
var vec__40802 = p__40801;
var k = cljs.core.nth.call(null,vec__40802,(0),null);
var v = cljs.core.nth.call(null,vec__40802,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__40833__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__40833 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__40834__i = 0, G__40834__a = new Array(arguments.length -  0);
while (G__40834__i < G__40834__a.length) {G__40834__a[G__40834__i] = arguments[G__40834__i + 0]; ++G__40834__i;}
  msg = new cljs.core.IndexedSeq(G__40834__a,0,null);
} 
return G__40833__delegate.call(this,msg);};
G__40833.cljs$lang$maxFixedArity = 0;
G__40833.cljs$lang$applyTo = (function (arglist__40835){
var msg = cljs.core.seq(arglist__40835);
return G__40833__delegate(msg);
});
G__40833.cljs$core$IFn$_invoke$arity$variadic = G__40833__delegate;
return G__40833;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__40805){
var vec__40806 = p__40805;
var seq__40807 = cljs.core.seq.call(null,vec__40806);
var first__40808 = cljs.core.first.call(null,seq__40807);
var seq__40807__$1 = cljs.core.next.call(null,seq__40807);
var vec__40809 = first__40808;
var seq__40810 = cljs.core.seq.call(null,vec__40809);
var first__40811 = cljs.core.first.call(null,seq__40810);
var seq__40810__$1 = cljs.core.next.call(null,seq__40810);
var bind = first__40811;
var first__40811__$1 = cljs.core.first.call(null,seq__40810__$1);
var seq__40810__$2 = cljs.core.next.call(null,seq__40810__$1);
var expr = first__40811__$1;
var mod_pairs = seq__40810__$2;
var vec__40812 = seq__40807__$1;
var vec__40815 = cljs.core.nth.call(null,vec__40812,(0),null);
var _ = cljs.core.nth.call(null,vec__40815,(0),null);
var next_expr = cljs.core.nth.call(null,vec__40815,(1),null);
var next_groups = vec__40812;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__40806,seq__40807,first__40808,seq__40807__$1,vec__40809,seq__40810,first__40811,seq__40810__$1,bind,first__40811__$1,seq__40810__$2,expr,mod_pairs,vec__40812,vec__40815,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__40818){
var vec__40819 = p__40818;
var seq__40820 = cljs.core.seq.call(null,vec__40819);
var first__40821 = cljs.core.first.call(null,seq__40820);
var seq__40820__$1 = cljs.core.next.call(null,seq__40820);
var vec__40822 = first__40821;
var k = cljs.core.nth.call(null,vec__40822,(0),null);
var v = cljs.core.nth.call(null,vec__40822,(1),null);
var pair = vec__40822;
var etc = seq__40820__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__40796__auto__","iterys__40796__auto__",1404348680,null)),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__40797__auto__","fs__40797__auto__",-60239456,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__40796__auto__","iterys__40796__auto__",1404348680,null)),(function (){var x__29001__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__40797__auto__","fs__40797__auto__",-60239456,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__40797__auto__","fs__40797__auto__",-60239456,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__29001__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__40806,seq__40807,first__40808,seq__40807__$1,vec__40809,seq__40810,first__40811,seq__40810__$1,bind,first__40811__$1,seq__40810__$2,expr,mod_pairs,vec__40812,vec__40815,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__40806,seq__40807,first__40808,seq__40807__$1,vec__40809,seq__40810,first__40811,seq__40810__$1,bind,first__40811__$1,seq__40810__$2,expr,mod_pairs,vec__40812,vec__40815,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__40825){
var vec__40826 = p__40825;
var seq__40827 = cljs.core.seq.call(null,vec__40826);
var first__40828 = cljs.core.first.call(null,seq__40827);
var seq__40827__$1 = cljs.core.next.call(null,seq__40827);
var vec__40829 = first__40828;
var k = cljs.core.nth.call(null,vec__40829,(0),null);
var v = cljs.core.nth.call(null,vec__40829,(1),null);
var pair = vec__40829;
var etc = seq__40827__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29001__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__29001__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29001__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__40806,seq__40807,first__40808,seq__40807__$1,vec__40809,seq__40810,first__40811,seq__40810__$1,bind,first__40811__$1,seq__40810__$2,expr,mod_pairs,vec__40812,vec__40815,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40798__auto__","c__40798__auto__",2085030727,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__40799__auto__","size__40799__auto__",1819742142,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40798__auto__","c__40798__auto__",2085030727,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__40799__auto__","size__40799__auto__",1819742142,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__40799__auto__","size__40799__auto__",1819742142,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40798__auto__","c__40798__auto__",2085030727,null)),(function (){var x__29001__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__29001__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__29001__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29001__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__40800__auto__","iter__40800__auto__",1996361755,null)),(function (){var x__29001__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__40800__auto__","iter__40800__auto__",1996361755,null)),(function (){var x__29001__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__29348__auto___40841 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40842 = arguments.length;
var i__29309__auto___40843 = (0);
while(true){
if((i__29309__auto___40843 < len__29308__auto___40842)){
args__29315__auto__.push((arguments[i__29309__auto___40843]));

var G__40844 = (i__29309__auto___40843 + (1));
i__29309__auto___40843 = G__40844;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__40845__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__40845 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__40846__i = 0, G__40846__a = new Array(arguments.length -  0);
while (G__40846__i < G__40846__a.length) {G__40846__a[G__40846__i] = arguments[G__40846__i + 0]; ++G__40846__i;}
  msg = new cljs.core.IndexedSeq(G__40846__a,0,null);
} 
return G__40845__delegate.call(this,msg);};
G__40845.cljs$lang$maxFixedArity = 0;
G__40845.cljs$lang$applyTo = (function (arglist__40847){
var msg = cljs.core.seq(arglist__40847);
return G__40845__delegate(msg);
});
G__40845.cljs$core$IFn$_invoke$arity$variadic = G__40845__delegate;
return G__40845;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__29001__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29001__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__29001__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40836__auto__","c__40836__auto__",-1781103818,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40836__auto__","c__40836__auto__",-1781103818,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40836__auto__","c__40836__auto__",-1781103818,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__29001__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq40837){
var G__40838 = cljs.core.first.call(null,seq40837);
var seq40837__$1 = cljs.core.next.call(null,seq40837);
var G__40839 = cljs.core.first.call(null,seq40837__$1);
var seq40837__$2 = cljs.core.next.call(null,seq40837__$1);
var G__40840 = cljs.core.first.call(null,seq40837__$2);
var seq40837__$3 = cljs.core.next.call(null,seq40837__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__40838,G__40839,G__40840,seq40837__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__29348__auto___40851 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40852 = arguments.length;
var i__29309__auto___40853 = (0);
while(true){
if((i__29309__auto___40853 < len__29308__auto___40852)){
args__29315__auto__.push((arguments[i__29309__auto___40853]));

var G__40854 = (i__29309__auto___40853 + (1));
i__29309__auto___40853 = G__40854;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq40848){
var G__40849 = cljs.core.first.call(null,seq40848);
var seq40848__$1 = cljs.core.next.call(null,seq40848);
var G__40850 = cljs.core.first.call(null,seq40848__$1);
var seq40848__$2 = cljs.core.next.call(null,seq40848__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__40849,G__40850,seq40848__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__29348__auto___40865 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__40864 = arguments.length;
switch (G__40864) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40867 = arguments.length;
var i__29309__auto___40868 = (0);
while(true){
if((i__29309__auto___40868 < len__29308__auto___40867)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40868]));

var G__40869 = (i__29309__auto___40868 + (1));
i__29309__auto___40868 = G__40869;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29328__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__29001__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__29001__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__40855__auto__","dims__40855__auto__",-233056231,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40856__auto__","dimarray__40856__auto__",796158855,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__29001__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40857__auto__","i__40857__auto__",-996255652,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40856__auto__","dimarray__40856__auto__",796158855,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40856__auto__","dimarray__40856__auto__",796158855,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40857__auto__","i__40857__auto__",-996255652,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__40855__auto__","dims__40855__auto__",-233056231,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40856__auto__","dimarray__40856__auto__",796158855,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq40859){
var G__40860 = cljs.core.first.call(null,seq40859);
var seq40859__$1 = cljs.core.next.call(null,seq40859);
var G__40861 = cljs.core.first.call(null,seq40859__$1);
var seq40859__$2 = cljs.core.next.call(null,seq40859__$1);
var G__40862 = cljs.core.first.call(null,seq40859__$2);
var seq40859__$3 = cljs.core.next.call(null,seq40859__$2);
var G__40863 = cljs.core.first.call(null,seq40859__$3);
var seq40859__$4 = cljs.core.next.call(null,seq40859__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__40860,G__40861,G__40862,G__40863,seq40859__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__29348__auto___40878 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__40876 = arguments.length;
switch (G__40876) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40880 = arguments.length;
var i__29309__auto___40881 = (0);
while(true){
if((i__29309__auto___40881 < len__29308__auto___40880)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40881]));

var G__40882 = (i__29309__auto___40881 + (1));
i__29309__auto___40881 = G__40882;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29328__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_40877 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40877;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40870__auto__","x__40870__auto__",48912948,null)),(function (){var x__29001__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40870__auto__","x__40870__auto__",48912948,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq40872){
var G__40873 = cljs.core.first.call(null,seq40872);
var seq40872__$1 = cljs.core.next.call(null,seq40872);
var G__40874 = cljs.core.first.call(null,seq40872__$1);
var seq40872__$2 = cljs.core.next.call(null,seq40872__$1);
var G__40875 = cljs.core.first.call(null,seq40872__$2);
var seq40872__$3 = cljs.core.next.call(null,seq40872__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__40873,G__40874,G__40875,seq40872__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__29348__auto___40888 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__40887 = arguments.length;
switch (G__40887) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40890 = arguments.length;
var i__29309__auto___40891 = (0);
while(true){
if((i__29309__auto___40891 < len__29308__auto___40890)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40891]));

var G__40892 = (i__29309__auto___40891 + (1));
i__29309__auto___40891 = G__40892;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29328__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq40884){
var G__40885 = cljs.core.first.call(null,seq40884);
var seq40884__$1 = cljs.core.next.call(null,seq40884);
var G__40886 = cljs.core.first.call(null,seq40884__$1);
var seq40884__$2 = cljs.core.next.call(null,seq40884__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__40885,G__40886,seq40884__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__29348__auto___40902 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__40899 = arguments.length;
switch (G__40899) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40904 = arguments.length;
var i__29309__auto___40905 = (0);
while(true){
if((i__29309__auto___40905 < len__29308__auto___40904)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40905]));

var G__40906 = (i__29309__auto___40905 + (1));
i__29309__auto___40905 = G__40906;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29328__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__40893_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40893_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__40894_SHARP_){
var _STAR_cljs_warnings_STAR_40901 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40894_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40901;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq40896){
var G__40897 = cljs.core.first.call(null,seq40896);
var seq40896__$1 = cljs.core.next.call(null,seq40896);
var G__40898 = cljs.core.first.call(null,seq40896__$1);
var seq40896__$2 = cljs.core.next.call(null,seq40896__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__40897,G__40898,seq40896__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__29348__auto___40912 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__40911 = arguments.length;
switch (G__40911) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40914 = arguments.length;
var i__29309__auto___40915 = (0);
while(true){
if((i__29309__auto___40915 < len__29308__auto___40914)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40915]));

var G__40916 = (i__29309__auto___40915 + (1));
i__29309__auto___40915 = G__40916;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29328__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq40908){
var G__40909 = cljs.core.first.call(null,seq40908);
var seq40908__$1 = cljs.core.next.call(null,seq40908);
var G__40910 = cljs.core.first.call(null,seq40908__$1);
var seq40908__$2 = cljs.core.next.call(null,seq40908__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__40909,G__40910,seq40908__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__29348__auto___40926 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__40923 = arguments.length;
switch (G__40923) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29327__auto__ = [];
var len__29308__auto___40928 = arguments.length;
var i__29309__auto___40929 = (0);
while(true){
if((i__29309__auto___40929 < len__29308__auto___40928)){
args_arr__29327__auto__.push((arguments[i__29309__auto___40929]));

var G__40930 = (i__29309__auto___40929 + (1));
i__29309__auto___40929 = G__40930;
continue;
} else {
}
break;
}

var argseq__29328__auto__ = (new cljs.core.IndexedSeq(args_arr__29327__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29328__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__40917_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40917_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__40918_SHARP_){
var _STAR_cljs_warnings_STAR_40925 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40918_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40925;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__29001__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq40920){
var G__40921 = cljs.core.first.call(null,seq40920);
var seq40920__$1 = cljs.core.next.call(null,seq40920);
var G__40922 = cljs.core.first.call(null,seq40920__$1);
var seq40920__$2 = cljs.core.next.call(null,seq40920__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__40921,G__40922,seq40920__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__29348__auto___40946 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40947 = arguments.length;
var i__29309__auto___40948 = (0);
while(true){
if((i__29309__auto___40948 < len__29308__auto___40947)){
args__29315__auto__.push((arguments[i__29309__auto___40948]));

var G__40949 = (i__29309__auto___40948 + (1));
i__29309__auto___40948 = G__40949;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__40934){
var vec__40935 = p__40934;
var k = cljs.core.nth.call(null,vec__40935,(0),null);
var _ = cljs.core.nth.call(null,vec__40935,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__40938){
var vec__40939 = p__40938;
var k = cljs.core.nth.call(null,vec__40939,(0),null);
var v = cljs.core.nth.call(null,vec__40939,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__40942){
var vec__40943 = p__40942;
var k = cljs.core.nth.call(null,vec__40943,(0),null);
var v = cljs.core.nth.call(null,vec__40943,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__29001__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq40931){
var G__40932 = cljs.core.first.call(null,seq40931);
var seq40931__$1 = cljs.core.next.call(null,seq40931);
var G__40933 = cljs.core.first.call(null,seq40931__$1);
var seq40931__$2 = cljs.core.next.call(null,seq40931__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__40932,G__40933,seq40931__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__29348__auto___40950 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__29348__auto___40952 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40951__auto__","a__40951__auto__",1621974837,null)),(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40951__auto__","a__40951__auto__",1621974837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40951__auto__","a__40951__auto__",1621974837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__29001__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__29348__auto___40954 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40953__auto__","a__40953__auto__",-844861217,null)),(function (){var x__29001__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__29001__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40953__auto__","a__40953__auto__",-844861217,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29001__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__29348__auto___40960 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40961 = arguments.length;
var i__29309__auto___40962 = (0);
while(true){
if((i__29309__auto___40962 < len__29308__auto___40961)){
args__29315__auto__.push((arguments[i__29309__auto___40962]));

var G__40963 = (i__29309__auto___40962 + (1));
i__29309__auto___40962 = G__40963;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__40955__auto__","n__40955__auto__",-1128129283,null)),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__40955__auto__","n__40955__auto__",-1128129283,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__29001__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq40956){
var G__40957 = cljs.core.first.call(null,seq40956);
var seq40956__$1 = cljs.core.next.call(null,seq40956);
var G__40958 = cljs.core.first.call(null,seq40956__$1);
var seq40956__$2 = cljs.core.next.call(null,seq40956__$1);
var G__40959 = cljs.core.first.call(null,seq40956__$2);
var seq40956__$3 = cljs.core.next.call(null,seq40956__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__40957,G__40958,G__40959,seq40956__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40967 = arguments.length;
var i__29309__auto___40968 = (0);
while(true){
if((i__29309__auto___40968 < len__29308__auto___40967)){
args__29315__auto__.push((arguments[i__29309__auto___40968]));

var G__40969 = (i__29309__auto___40968 + (1));
i__29309__auto___40968 = G__40969;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((1) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29316__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__40964_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40964_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq40965){
var G__40966 = cljs.core.first.call(null,seq40965);
var seq40965__$1 = cljs.core.next.call(null,seq40965);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__40966,seq40965__$1);
});

var ret__29348__auto___40979 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40980 = arguments.length;
var i__29309__auto___40981 = (0);
while(true){
if((i__29309__auto___40981 < len__29308__auto___40980)){
args__29315__auto__.push((arguments[i__29309__auto___40981]));

var G__40982 = (i__29309__auto___40981 + (1));
i__29309__auto___40981 = G__40982;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__40970__auto__","method-table__40970__auto__",-846184437,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__40971__auto__","prefer-table__40971__auto__",-1854108673,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__40972__auto__","method-cache__40972__auto__",-1387971966,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__40973__auto__","cached-hierarchy__40973__auto__",-1352421455,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__40974__auto__","hierarchy__40974__auto__",1654776727,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__29001__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29001__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__40974__auto__","hierarchy__40974__auto__",1654776727,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__40970__auto__","method-table__40970__auto__",-846184437,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__40971__auto__","prefer-table__40971__auto__",-1854108673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__40972__auto__","method-cache__40972__auto__",-1387971966,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__40973__auto__","cached-hierarchy__40973__auto__",-1352421455,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq40975){
var G__40976 = cljs.core.first.call(null,seq40975);
var seq40975__$1 = cljs.core.next.call(null,seq40975);
var G__40977 = cljs.core.first.call(null,seq40975__$1);
var seq40975__$2 = cljs.core.next.call(null,seq40975__$1);
var G__40978 = cljs.core.first.call(null,seq40975__$2);
var seq40975__$3 = cljs.core.next.call(null,seq40975__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__40976,G__40977,G__40978,seq40975__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__29348__auto___40988 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__29315__auto__ = [];
var len__29308__auto___40989 = arguments.length;
var i__29309__auto___40990 = (0);
while(true){
if((i__29309__auto___40990 < len__29308__auto___40989)){
args__29315__auto__.push((arguments[i__29309__auto___40990]));

var G__40991 = (i__29309__auto___40990 + (1));
i__29309__auto___40990 = G__40991;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq40983){
var G__40984 = cljs.core.first.call(null,seq40983);
var seq40983__$1 = cljs.core.next.call(null,seq40983);
var G__40985 = cljs.core.first.call(null,seq40983__$1);
var seq40983__$2 = cljs.core.next.call(null,seq40983__$1);
var G__40986 = cljs.core.first.call(null,seq40983__$2);
var seq40983__$3 = cljs.core.next.call(null,seq40983__$2);
var G__40987 = cljs.core.first.call(null,seq40983__$3);
var seq40983__$4 = cljs.core.next.call(null,seq40983__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__40984,G__40985,G__40986,G__40987,seq40983__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__29348__auto___40994 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40992__auto__","start__40992__auto__",-462721021,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40993__auto__","ret__40993__auto__",1797459749,null)),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40992__auto__","start__40992__auto__",-462721021,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40993__auto__","ret__40993__auto__",1797459749,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__29348__auto___41009 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41010 = arguments.length;
var i__29309__auto___41011 = (0);
while(true){
if((i__29309__auto___41011 < len__29308__auto___41010)){
args__29315__auto__.push((arguments[i__29309__auto___41011]));

var G__41012 = (i__29309__auto___41011 + (1));
i__29309__auto___41011 = G__41012;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((5) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29316__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__41006){
var map__41007 = p__41006;
var map__41007__$1 = ((((!((map__41007 == null)))?((((map__41007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41007):map__41007);
var print_fn = cljs.core.get.call(null,map__41007__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40995__auto__","start__40995__auto__",1254889738,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40996__auto__","ret__40996__auto__",1973171698,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___40997__auto__","___40997__auto__",-1852621977,null)),(function (){var x__29001__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__40998__auto__","end__40998__auto__",-2083868357,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__40999__auto__","elapsed__40999__auto__",1318971577,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__40998__auto__","end__40998__auto__",-2083868357,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40995__auto__","start__40995__auto__",1254889738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__29001__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__29001__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__29001__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__40999__auto__","elapsed__40999__auto__",1318971577,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq41000){
var G__41001 = cljs.core.first.call(null,seq41000);
var seq41000__$1 = cljs.core.next.call(null,seq41000);
var G__41002 = cljs.core.first.call(null,seq41000__$1);
var seq41000__$2 = cljs.core.next.call(null,seq41000__$1);
var G__41003 = cljs.core.first.call(null,seq41000__$2);
var seq41000__$3 = cljs.core.next.call(null,seq41000__$2);
var G__41004 = cljs.core.first.call(null,seq41000__$3);
var seq41000__$4 = cljs.core.next.call(null,seq41000__$3);
var G__41005 = cljs.core.first.call(null,seq41000__$4);
var seq41000__$5 = cljs.core.next.call(null,seq41000__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__41001,G__41002,G__41003,G__41004,G__41005,seq41000__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__41014 = arguments.length;
switch (G__41014) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__29348__auto___41016 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__41017_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41017_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__29001__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__29001__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__29001__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41018__auto__","arr__41018__auto__",-1697765218,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41019__auto__","s__41019__auto__",-1468496201,null)),(function (){var x__29001__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41019__auto__","s__41019__auto__",-1468496201,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41018__auto__","arr__41018__auto__",-1697765218,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41019__auto__","s__41019__auto__",-1468496201,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41019__auto__","s__41019__auto__",-1468496201,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41018__auto__","arr__41018__auto__",-1697765218,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
var ret__29348__auto___41020 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__29348__auto___41026 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41027 = arguments.length;
var i__29309__auto___41028 = (0);
while(true){
if((i__29309__auto___41028 < len__29308__auto___41027)){
args__29315__auto__.push((arguments[i__29309__auto___41028]));

var G__41029 = (i__29309__auto___41028 + (1));
i__29309__auto___41028 = G__41029;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41021__auto__","sb__41021__auto__",-956158596,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41022__auto__","x__41022__auto__",-1468199801,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41021__auto__","sb__41021__auto__",-956158596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41022__auto__","x__41022__auto__",-1468199801,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41021__auto__","sb__41021__auto__",-956158596,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq41023){
var G__41024 = cljs.core.first.call(null,seq41023);
var seq41023__$1 = cljs.core.next.call(null,seq41023);
var G__41025 = cljs.core.first.call(null,seq41023__$1);
var seq41023__$2 = cljs.core.next.call(null,seq41023__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__41024,G__41025,seq41023__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__29348__auto___41034 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41035 = arguments.length;
var i__29309__auto___41036 = (0);
while(true){
if((i__29309__auto___41036 < len__29308__auto___41035)){
args__29315__auto__.push((arguments[i__29309__auto___41036]));

var G__41037 = (i__29309__auto___41036 + (1));
i__29309__auto___41036 = G__41037;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__41030_SHARP_){
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = p1__41030_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq41031){
var G__41032 = cljs.core.first.call(null,seq41031);
var seq41031__$1 = cljs.core.next.call(null,seq41031);
var G__41033 = cljs.core.first.call(null,seq41031__$1);
var seq41031__$2 = cljs.core.next.call(null,seq41031__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__41032,G__41033,seq41031__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__29348__auto___41038 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29001__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__29348__auto___41040 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29001__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41039__auto__","this__41039__auto__",-1708568456,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41039__auto__","this__41039__auto__",-1708568456,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__29348__auto___41057 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41049){
var vec__41050 = p__41049;
var sym = cljs.core.nth.call(null,vec__41050,(0),null);
var _ = cljs.core.nth.call(null,vec__41050,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29001__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__41053){
var vec__41054 = p__41053;
var _ = cljs.core.nth.call(null,vec__41054,(0),null);
var info = cljs.core.nth.call(null,vec__41054,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__29348__auto___41066 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41062){
var vec__41063 = p__41062;
var ctor = cljs.core.nth.call(null,vec__41063,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__41063,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29001__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__29348__auto___41075 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__29001__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41071){
var vec__41072 = p__41071;
var sym = cljs.core.nth.call(null,vec__41072,(0),null);
var _ = cljs.core.nth.call(null,vec__41072,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__29001__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__29348__auto___41076 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__29001__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__29348__auto___41082 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41083 = arguments.length;
var i__29309__auto___41084 = (0);
while(true){
if((i__29309__auto___41084 < len__29308__auto___41083)){
args__29315__auto__.push((arguments[i__29309__auto___41084]));

var G__41085 = (i__29309__auto___41084 + (1));
i__29309__auto___41084 = G__41085;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((4) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29316__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__29001__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__29001__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq41077){
var G__41078 = cljs.core.first.call(null,seq41077);
var seq41077__$1 = cljs.core.next.call(null,seq41077);
var G__41079 = cljs.core.first.call(null,seq41077__$1);
var seq41077__$2 = cljs.core.next.call(null,seq41077__$1);
var G__41080 = cljs.core.first.call(null,seq41077__$2);
var seq41077__$3 = cljs.core.next.call(null,seq41077__$2);
var G__41081 = cljs.core.first.call(null,seq41077__$3);
var seq41077__$4 = cljs.core.next.call(null,seq41077__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41078,G__41079,G__41080,G__41081,seq41077__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__29348__auto___41090 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41091 = arguments.length;
var i__29309__auto___41092 = (0);
while(true){
if((i__29309__auto___41092 < len__29308__auto___41091)){
args__29315__auto__.push((arguments[i__29309__auto___41092]));

var G__41093 = (i__29309__auto___41092 + (1));
i__29309__auto___41092 = G__41093;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq41086){
var G__41087 = cljs.core.first.call(null,seq41086);
var seq41086__$1 = cljs.core.next.call(null,seq41086);
var G__41088 = cljs.core.first.call(null,seq41086__$1);
var seq41086__$2 = cljs.core.next.call(null,seq41086__$1);
var G__41089 = cljs.core.first.call(null,seq41086__$2);
var seq41086__$3 = cljs.core.next.call(null,seq41086__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__41087,G__41088,G__41089,seq41086__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__29348__auto___41097 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41098 = arguments.length;
var i__29309__auto___41099 = (0);
while(true){
if((i__29309__auto___41099 < len__29308__auto___41098)){
args__29315__auto__.push((arguments[i__29309__auto___41099]));

var G__41100 = (i__29309__auto___41099 + (1));
i__29309__auto___41099 = G__41100;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq41094){
var G__41095 = cljs.core.first.call(null,seq41094);
var seq41094__$1 = cljs.core.next.call(null,seq41094);
var G__41096 = cljs.core.first.call(null,seq41094__$1);
var seq41094__$2 = cljs.core.next.call(null,seq41094__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__41095,G__41096,seq41094__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__29348__auto___41104 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41105 = arguments.length;
var i__29309__auto___41106 = (0);
while(true){
if((i__29309__auto___41106 < len__29308__auto___41105)){
args__29315__auto__.push((arguments[i__29309__auto___41106]));

var G__41107 = (i__29309__auto___41106 + (1));
i__29309__auto___41106 = G__41107;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq41101){
var G__41102 = cljs.core.first.call(null,seq41101);
var seq41101__$1 = cljs.core.next.call(null,seq41101);
var G__41103 = cljs.core.first.call(null,seq41101__$1);
var seq41101__$2 = cljs.core.next.call(null,seq41101__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__41102,G__41103,seq41101__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__29348__auto___41111 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41112 = arguments.length;
var i__29309__auto___41113 = (0);
while(true){
if((i__29309__auto___41113 < len__29308__auto___41112)){
args__29315__auto__.push((arguments[i__29309__auto___41113]));

var G__41114 = (i__29309__auto___41113 + (1));
i__29309__auto___41113 = G__41114;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq41108){
var G__41109 = cljs.core.first.call(null,seq41108);
var seq41108__$1 = cljs.core.next.call(null,seq41108);
var G__41110 = cljs.core.first.call(null,seq41108__$1);
var seq41108__$2 = cljs.core.next.call(null,seq41108__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__41109,G__41110,seq41108__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__29348__auto___41118 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41119 = arguments.length;
var i__29309__auto___41120 = (0);
while(true){
if((i__29309__auto___41120 < len__29308__auto___41119)){
args__29315__auto__.push((arguments[i__29309__auto___41120]));

var G__41121 = (i__29309__auto___41120 + (1));
i__29309__auto___41120 = G__41121;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq41115){
var G__41116 = cljs.core.first.call(null,seq41115);
var seq41115__$1 = cljs.core.next.call(null,seq41115);
var G__41117 = cljs.core.first.call(null,seq41115__$1);
var seq41115__$2 = cljs.core.next.call(null,seq41115__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__41116,G__41117,seq41115__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__29348__auto___41125 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41126 = arguments.length;
var i__29309__auto___41127 = (0);
while(true){
if((i__29309__auto___41127 < len__29308__auto___41126)){
args__29315__auto__.push((arguments[i__29309__auto___41127]));

var G__41128 = (i__29309__auto___41127 + (1));
i__29309__auto___41127 = G__41128;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq41122){
var G__41123 = cljs.core.first.call(null,seq41122);
var seq41122__$1 = cljs.core.next.call(null,seq41122);
var G__41124 = cljs.core.first.call(null,seq41122__$1);
var seq41122__$2 = cljs.core.next.call(null,seq41122__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__41123,G__41124,seq41122__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__29348__auto___41132 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41133 = arguments.length;
var i__29309__auto___41134 = (0);
while(true){
if((i__29309__auto___41134 < len__29308__auto___41133)){
args__29315__auto__.push((arguments[i__29309__auto___41134]));

var G__41135 = (i__29309__auto___41134 + (1));
i__29309__auto___41134 = G__41135;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((2) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29316__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq41129){
var G__41130 = cljs.core.first.call(null,seq41129);
var seq41129__$1 = cljs.core.next.call(null,seq41129);
var G__41131 = cljs.core.first.call(null,seq41129__$1);
var seq41129__$2 = cljs.core.next.call(null,seq41129__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__41130,G__41131,seq41129__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__29348__auto___41136 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__29001__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__29348__auto___41137 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29001__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__29348__auto___41138 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__41139 = form_SINGLEQUOTE_;
var G__41140 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__41139;
form_SINGLEQUOTE_ = G__41140;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29001__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__28127__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__28127__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__28127__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__41142 = arguments.length;
switch (G__41142) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__41143,solo){
var vec__41144 = p__41143;
var seq__41145 = cljs.core.seq.call(null,vec__41144);
var first__41146 = cljs.core.first.call(null,seq__41145);
var seq__41145__$1 = cljs.core.next.call(null,seq__41145);
var arglist = first__41146;
var body = seq__41145__$1;
var method = vec__41144;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
});})(sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),params,(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__29001__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});})(sig,restarg,vec__41144,seq__41145,first__41146,seq__41145__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))):null),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__29348__auto___41150 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41148__auto__","len__41148__auto__",1577693007,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41149__auto__","i__41149__auto__",1882313071,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41149__auto__","i__41149__auto__",1882313071,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41148__auto__","len__41148__auto__",1577693007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__29001__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41149__auto__","i__41149__auto__",1882313071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41149__auto__","i__41149__auto__",1882313071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__41153,emit_var_QMARK_){
var vec__41154 = p__41153;
var vec__41157 = cljs.core.nth.call(null,vec__41154,(0),null);
var seq__41158 = cljs.core.seq.call(null,vec__41157);
var first__41159 = cljs.core.first.call(null,seq__41158);
var seq__41158__$1 = cljs.core.next.call(null,seq__41158);
var arglist = first__41159;
var body = seq__41158__$1;
var method = vec__41157;
var fdecl = vec__41154;
var dest_args = ((function (vec__41154,vec__41157,seq__41158,first__41159,seq__41158__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__41154,vec__41157,seq__41158,first__41159,seq__41158__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});})(vec__41154,vec__41157,seq__41158,first__41159,seq__41158__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__41154,vec__41157,seq__41158,first__41159,seq__41158__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__29001__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41151__auto__","args__41151__auto__",1873107100,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41151__auto__","args__41151__auto__",1873107100,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41152__auto__","argseq__41152__auto__",1069220662,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__29001__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41151__auto__","args__41151__auto__",1873107100,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41151__auto__","args__41151__auto__",1873107100,null)),(function (){var x__29001__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41152__auto__","argseq__41152__auto__",1069220662,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__41168){
var vec__41169 = p__41168;
var seq__41170 = cljs.core.seq.call(null,vec__41169);
var first__41171 = cljs.core.first.call(null,seq__41170);
var seq__41170__$1 = cljs.core.next.call(null,seq__41170);
var sig = first__41171;
var body = seq__41170__$1;
var method = vec__41169;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__41160_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__41160_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__41161_SHARP_){
return fixed_arity.call(null,rname,p1__41161_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__29001__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41162__auto__","args-arr__41162__auto__",827102857,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41162__auto__","args-arr__41162__auto__",827102857,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41163__auto__","argseq__41163__auto__",1733688187,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/timothy/git/power-turtle/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41162__auto__","args-arr__41162__auto__",827102857,null)),(function (){var x__29001__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41163__auto__","argseq__41163__auto__",1733688187,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__29001__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__29001__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto____$1);
})(),x__29001__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__41172__i = 0, G__41172__a = new Array(arguments.length -  3);
while (G__41172__i < G__41172__a.length) {G__41172__a[G__41172__i] = arguments[G__41172__i + 3]; ++G__41172__i;}
  fdecl = new cljs.core.IndexedSeq(G__41172__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__41173){
var _AMPERSAND_form = cljs.core.first(arglist__41173);
arglist__41173 = cljs.core.next(arglist__41173);
var _AMPERSAND_env = cljs.core.first(arglist__41173);
arglist__41173 = cljs.core.next(arglist__41173);
var name = cljs.core.first(arglist__41173);
var fdecl = cljs.core.rest(arglist__41173);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__29315__auto__ = [];
var len__29308__auto___41179 = arguments.length;
var i__29309__auto___41180 = (0);
while(true){
if((i__29309__auto___41180 < len__29308__auto___41179)){
args__29315__auto__.push((arguments[i__29309__auto___41180]));

var G__41181 = (i__29309__auto___41180 + (1));
i__29309__auto___41180 = G__41181;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((3) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29316__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__29001__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__41182 = cljs.core.cons.call(null,f,p);
var G__41183 = cljs.core.next.call(null,args__$1);
p = G__41182;
args__$1 = G__41183;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__41184 = cljs.core.cons.call(null,f,p);
var G__41185 = cljs.core.next.call(null,args__$1);
p = G__41184;
args__$1 = G__41185;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__41186 = cljs.core.next.call(null,fd);
fd = G__41186;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__41187 = cljs.core.next.call(null,fd);
fd = G__41187;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__29001__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__41188 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__41189 = cljs.core.next.call(null,ds);
acc = G__41188;
ds = G__41189;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__41190 = cljs.core.next.call(null,p);
var G__41191 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__41190;
d = G__41191;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41174__auto__","ret__41174__auto__",-334972303,null)),(function (){var x__29001__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29001__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41174__auto__","ret__41174__auto__",-334972303,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq41175){
var G__41176 = cljs.core.first.call(null,seq41175);
var seq41175__$1 = cljs.core.next.call(null,seq41175);
var G__41177 = cljs.core.first.call(null,seq41175__$1);
var seq41175__$2 = cljs.core.next.call(null,seq41175__$1);
var G__41178 = cljs.core.first.call(null,seq41175__$2);
var seq41175__$3 = cljs.core.next.call(null,seq41175__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__41176,G__41177,G__41178,seq41175__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__29348__auto___41196 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__41192 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e41195){var e = e41195;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__41192,(0),null);
var meta = cljs.core.nth.call(null,vec__41192,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__29001__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__29001__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__29001__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),(function (){var x__29001__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1509738681121
