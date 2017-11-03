// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31423){
var map__31424 = p__31423;
var map__31424__$1 = ((((!((map__31424 == null)))?((((map__31424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31424):map__31424);
var m = map__31424__$1;
var n = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31426_31448 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31427_31449 = null;
var count__31428_31450 = (0);
var i__31429_31451 = (0);
while(true){
if((i__31429_31451 < count__31428_31450)){
var f_31452 = cljs.core._nth.call(null,chunk__31427_31449,i__31429_31451);
cljs.core.println.call(null,"  ",f_31452);

var G__31453 = seq__31426_31448;
var G__31454 = chunk__31427_31449;
var G__31455 = count__31428_31450;
var G__31456 = (i__31429_31451 + (1));
seq__31426_31448 = G__31453;
chunk__31427_31449 = G__31454;
count__31428_31450 = G__31455;
i__31429_31451 = G__31456;
continue;
} else {
var temp__4657__auto___31457 = cljs.core.seq.call(null,seq__31426_31448);
if(temp__4657__auto___31457){
var seq__31426_31458__$1 = temp__4657__auto___31457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31426_31458__$1)){
var c__28978__auto___31459 = cljs.core.chunk_first.call(null,seq__31426_31458__$1);
var G__31460 = cljs.core.chunk_rest.call(null,seq__31426_31458__$1);
var G__31461 = c__28978__auto___31459;
var G__31462 = cljs.core.count.call(null,c__28978__auto___31459);
var G__31463 = (0);
seq__31426_31448 = G__31460;
chunk__31427_31449 = G__31461;
count__31428_31450 = G__31462;
i__31429_31451 = G__31463;
continue;
} else {
var f_31464 = cljs.core.first.call(null,seq__31426_31458__$1);
cljs.core.println.call(null,"  ",f_31464);

var G__31465 = cljs.core.next.call(null,seq__31426_31458__$1);
var G__31466 = null;
var G__31467 = (0);
var G__31468 = (0);
seq__31426_31448 = G__31465;
chunk__31427_31449 = G__31466;
count__31428_31450 = G__31467;
i__31429_31451 = G__31468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31469 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31469);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31469)))?cljs.core.second.call(null,arglists_31469):arglists_31469));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31430_31470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31431_31471 = null;
var count__31432_31472 = (0);
var i__31433_31473 = (0);
while(true){
if((i__31433_31473 < count__31432_31472)){
var vec__31434_31474 = cljs.core._nth.call(null,chunk__31431_31471,i__31433_31473);
var name_31475 = cljs.core.nth.call(null,vec__31434_31474,(0),null);
var map__31437_31476 = cljs.core.nth.call(null,vec__31434_31474,(1),null);
var map__31437_31477__$1 = ((((!((map__31437_31476 == null)))?((((map__31437_31476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31437_31476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31437_31476):map__31437_31476);
var doc_31478 = cljs.core.get.call(null,map__31437_31477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31479 = cljs.core.get.call(null,map__31437_31477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31475);

cljs.core.println.call(null," ",arglists_31479);

if(cljs.core.truth_(doc_31478)){
cljs.core.println.call(null," ",doc_31478);
} else {
}

var G__31480 = seq__31430_31470;
var G__31481 = chunk__31431_31471;
var G__31482 = count__31432_31472;
var G__31483 = (i__31433_31473 + (1));
seq__31430_31470 = G__31480;
chunk__31431_31471 = G__31481;
count__31432_31472 = G__31482;
i__31433_31473 = G__31483;
continue;
} else {
var temp__4657__auto___31484 = cljs.core.seq.call(null,seq__31430_31470);
if(temp__4657__auto___31484){
var seq__31430_31485__$1 = temp__4657__auto___31484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31430_31485__$1)){
var c__28978__auto___31486 = cljs.core.chunk_first.call(null,seq__31430_31485__$1);
var G__31487 = cljs.core.chunk_rest.call(null,seq__31430_31485__$1);
var G__31488 = c__28978__auto___31486;
var G__31489 = cljs.core.count.call(null,c__28978__auto___31486);
var G__31490 = (0);
seq__31430_31470 = G__31487;
chunk__31431_31471 = G__31488;
count__31432_31472 = G__31489;
i__31433_31473 = G__31490;
continue;
} else {
var vec__31439_31491 = cljs.core.first.call(null,seq__31430_31485__$1);
var name_31492 = cljs.core.nth.call(null,vec__31439_31491,(0),null);
var map__31442_31493 = cljs.core.nth.call(null,vec__31439_31491,(1),null);
var map__31442_31494__$1 = ((((!((map__31442_31493 == null)))?((((map__31442_31493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31442_31493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31442_31493):map__31442_31493);
var doc_31495 = cljs.core.get.call(null,map__31442_31494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31496 = cljs.core.get.call(null,map__31442_31494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31492);

cljs.core.println.call(null," ",arglists_31496);

if(cljs.core.truth_(doc_31495)){
cljs.core.println.call(null," ",doc_31495);
} else {
}

var G__31497 = cljs.core.next.call(null,seq__31430_31485__$1);
var G__31498 = null;
var G__31499 = (0);
var G__31500 = (0);
seq__31430_31470 = G__31497;
chunk__31431_31471 = G__31498;
count__31432_31472 = G__31499;
i__31433_31473 = G__31500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__31444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31445 = null;
var count__31446 = (0);
var i__31447 = (0);
while(true){
if((i__31447 < count__31446)){
var role = cljs.core._nth.call(null,chunk__31445,i__31447);
var temp__4657__auto___31501__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31501__$1)){
var spec_31502 = temp__4657__auto___31501__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31502));
} else {
}

var G__31503 = seq__31444;
var G__31504 = chunk__31445;
var G__31505 = count__31446;
var G__31506 = (i__31447 + (1));
seq__31444 = G__31503;
chunk__31445 = G__31504;
count__31446 = G__31505;
i__31447 = G__31506;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31444);
if(temp__4657__auto____$1){
var seq__31444__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31444__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__31444__$1);
var G__31507 = cljs.core.chunk_rest.call(null,seq__31444__$1);
var G__31508 = c__28978__auto__;
var G__31509 = cljs.core.count.call(null,c__28978__auto__);
var G__31510 = (0);
seq__31444 = G__31507;
chunk__31445 = G__31508;
count__31446 = G__31509;
i__31447 = G__31510;
continue;
} else {
var role = cljs.core.first.call(null,seq__31444__$1);
var temp__4657__auto___31511__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31511__$2)){
var spec_31512 = temp__4657__auto___31511__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31512));
} else {
}

var G__31513 = cljs.core.next.call(null,seq__31444__$1);
var G__31514 = null;
var G__31515 = (0);
var G__31516 = (0);
seq__31444 = G__31513;
chunk__31445 = G__31514;
count__31446 = G__31515;
i__31447 = G__31516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509738651046
