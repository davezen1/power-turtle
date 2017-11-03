// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__33614 = s;
var map__33614__$1 = ((((!((map__33614 == null)))?((((map__33614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33614):map__33614);
var name = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33617 = info;
var map__33618 = G__33617;
var map__33618__$1 = ((((!((map__33618 == null)))?((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var shadow = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33617__$1 = G__33617;
while(true){
var d__$2 = d__$1;
var map__33620 = G__33617__$1;
var map__33620__$1 = ((((!((map__33620 == null)))?((((map__33620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33620):map__33620);
var shadow__$1 = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__33622 = (d__$2 + (1));
var G__33623 = shadow__$1;
d__$1 = G__33622;
G__33617__$1 = G__33623;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33624){
var map__33625 = p__33624;
var map__33625__$1 = ((((!((map__33625 == null)))?((((map__33625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33625):map__33625);
var name_var = map__33625__$1;
var name = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__33627 = info;
var map__33627__$1 = ((((!((map__33627 == null)))?((((map__33627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627):map__33627);
var ns = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__33632 = cp;
switch (G__33632) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__33634_33638 = cljs.core.seq.call(null,s);
var chunk__33635_33639 = null;
var count__33636_33640 = (0);
var i__33637_33641 = (0);
while(true){
if((i__33637_33641 < count__33636_33640)){
var c_33642 = cljs.core._nth.call(null,chunk__33635_33639,i__33637_33641);
sb.append(cljs.compiler.escape_char.call(null,c_33642));

var G__33643 = seq__33634_33638;
var G__33644 = chunk__33635_33639;
var G__33645 = count__33636_33640;
var G__33646 = (i__33637_33641 + (1));
seq__33634_33638 = G__33643;
chunk__33635_33639 = G__33644;
count__33636_33640 = G__33645;
i__33637_33641 = G__33646;
continue;
} else {
var temp__4657__auto___33647 = cljs.core.seq.call(null,seq__33634_33638);
if(temp__4657__auto___33647){
var seq__33634_33648__$1 = temp__4657__auto___33647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33634_33648__$1)){
var c__28978__auto___33649 = cljs.core.chunk_first.call(null,seq__33634_33648__$1);
var G__33650 = cljs.core.chunk_rest.call(null,seq__33634_33648__$1);
var G__33651 = c__28978__auto___33649;
var G__33652 = cljs.core.count.call(null,c__28978__auto___33649);
var G__33653 = (0);
seq__33634_33638 = G__33650;
chunk__33635_33639 = G__33651;
count__33636_33640 = G__33652;
i__33637_33641 = G__33653;
continue;
} else {
var c_33654 = cljs.core.first.call(null,seq__33634_33648__$1);
sb.append(cljs.compiler.escape_char.call(null,c_33654));

var G__33655 = cljs.core.next.call(null,seq__33634_33648__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__33634_33638 = G__33655;
chunk__33635_33639 = G__33656;
count__33636_33640 = G__33657;
i__33637_33641 = G__33658;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__29094__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29095__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29098__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29098__auto__,method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__32011__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__32011__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__33659_33664 = ast;
var map__33659_33665__$1 = ((((!((map__33659_33664 == null)))?((((map__33659_33664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33659_33664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33659_33664):map__33659_33664);
var env_33666 = cljs.core.get.call(null,map__33659_33665__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33666))){
var map__33661_33667 = env_33666;
var map__33661_33668__$1 = ((((!((map__33661_33667 == null)))?((((map__33661_33667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33661_33667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33661_33667):map__33661_33667);
var line_33669 = cljs.core.get.call(null,map__33661_33668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33670 = cljs.core.get.call(null,map__33661_33668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__){
return (function (m){
var minfo = (function (){var G__33663 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__33663,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__33663;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33669 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33670)?(column_33670 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__33661_33667,map__33661_33668__$1,line_33669,column_33670,map__33659_33664,map__33659_33665__$1,env_33666,val__32011__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__32011__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__29315__auto__ = [];
var len__29308__auto___33677 = arguments.length;
var i__29309__auto___33678 = (0);
while(true){
if((i__29309__auto___33678 < len__29308__auto___33677)){
args__29315__auto__.push((arguments[i__29309__auto___33678]));

var G__33679 = (i__29309__auto___33678 + (1));
i__29309__auto___33678 = G__33679;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__33673_33680 = cljs.core.seq.call(null,xs);
var chunk__33674_33681 = null;
var count__33675_33682 = (0);
var i__33676_33683 = (0);
while(true){
if((i__33676_33683 < count__33675_33682)){
var x_33684 = cljs.core._nth.call(null,chunk__33674_33681,i__33676_33683);
if((x_33684 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33684)){
cljs.compiler.emit.call(null,x_33684);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33684)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33684);
} else {
if(goog.isFunction(x_33684)){
x_33684.call(null);
} else {
var s_33685 = cljs.core.print_str.call(null,x_33684);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33673_33680,chunk__33674_33681,count__33675_33682,i__33676_33683,s_33685,x_33684){
return (function (p1__33671_SHARP_){
return (p1__33671_SHARP_ + cljs.core.count.call(null,s_33685));
});})(seq__33673_33680,chunk__33674_33681,count__33675_33682,i__33676_33683,s_33685,x_33684))
);
}

cljs.core.print.call(null,s_33685);

}
}
}
}

var G__33686 = seq__33673_33680;
var G__33687 = chunk__33674_33681;
var G__33688 = count__33675_33682;
var G__33689 = (i__33676_33683 + (1));
seq__33673_33680 = G__33686;
chunk__33674_33681 = G__33687;
count__33675_33682 = G__33688;
i__33676_33683 = G__33689;
continue;
} else {
var temp__4657__auto___33690 = cljs.core.seq.call(null,seq__33673_33680);
if(temp__4657__auto___33690){
var seq__33673_33691__$1 = temp__4657__auto___33690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33673_33691__$1)){
var c__28978__auto___33692 = cljs.core.chunk_first.call(null,seq__33673_33691__$1);
var G__33693 = cljs.core.chunk_rest.call(null,seq__33673_33691__$1);
var G__33694 = c__28978__auto___33692;
var G__33695 = cljs.core.count.call(null,c__28978__auto___33692);
var G__33696 = (0);
seq__33673_33680 = G__33693;
chunk__33674_33681 = G__33694;
count__33675_33682 = G__33695;
i__33676_33683 = G__33696;
continue;
} else {
var x_33697 = cljs.core.first.call(null,seq__33673_33691__$1);
if((x_33697 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33697)){
cljs.compiler.emit.call(null,x_33697);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33697)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33697);
} else {
if(goog.isFunction(x_33697)){
x_33697.call(null);
} else {
var s_33698 = cljs.core.print_str.call(null,x_33697);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33673_33680,chunk__33674_33681,count__33675_33682,i__33676_33683,s_33698,x_33697,seq__33673_33691__$1,temp__4657__auto___33690){
return (function (p1__33671_SHARP_){
return (p1__33671_SHARP_ + cljs.core.count.call(null,s_33698));
});})(seq__33673_33680,chunk__33674_33681,count__33675_33682,i__33676_33683,s_33698,x_33697,seq__33673_33691__$1,temp__4657__auto___33690))
);
}

cljs.core.print.call(null,s_33698);

}
}
}
}

var G__33699 = cljs.core.next.call(null,seq__33673_33691__$1);
var G__33700 = null;
var G__33701 = (0);
var G__33702 = (0);
seq__33673_33680 = G__33699;
chunk__33674_33681 = G__33700;
count__33675_33682 = G__33701;
i__33676_33683 = G__33702;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq33672){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33672));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__29315__auto__ = [];
var len__29308__auto___33708 = arguments.length;
var i__29309__auto___33709 = (0);
while(true){
if((i__29309__auto___33709 < len__29308__auto___33708)){
args__29315__auto__.push((arguments[i__29309__auto___33709]));

var G__33710 = (i__29309__auto___33709 + (1));
i__29309__auto___33709 = G__33710;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_33704_33711 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_33704_33711;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__33705){
var map__33706 = p__33705;
var map__33706__$1 = ((((!((map__33706 == null)))?((((map__33706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33706):map__33706);
var m = map__33706__$1;
var gen_line = cljs.core.get.call(null,map__33706__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33703){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33703));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__29166__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33712_33714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33713_33715 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33712_33714,_STAR_print_fn_STAR_33713_33715,sb__29166__auto__){
return (function (x__29167__auto__){
return sb__29166__auto__.append(x__29167__auto__);
});})(_STAR_print_newline_STAR_33712_33714,_STAR_print_fn_STAR_33713_33715,sb__29166__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33713_33715;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33712_33714;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29166__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__29094__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29095__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29098__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29098__auto__,method_table__29094__auto__,prefer_table__29095__auto__,method_cache__29096__auto__,cached_hierarchy__29097__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__33716 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__33716,(0),null);
var flags = cljs.core.nth.call(null,vec__33716,(1),null);
var pattern = cljs.core.nth.call(null,vec__33716,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__28127__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28127__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__28127__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__28127__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__33720){
var map__33721 = p__33720;
var map__33721__$1 = ((((!((map__33721 == null)))?((((map__33721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var ast = map__33721__$1;
var info = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33723 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33723__$1 = ((((!((map__33723 == null)))?((((map__33723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33723):map__33723);
var cenv = map__33723__$1;
var options = cljs.core.get.call(null,map__33723__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__28139__auto__ = js_module_name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__33725 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__28127__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__28127__auto__;
}
})())){
return clojure.set.difference.call(null,G__33725,cljs.analyzer.es5_allowed);
} else {
return G__33725;
}
})();
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__33726 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__33726,reserved);
} else {
return G__33726;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__33727){
var map__33728 = p__33727;
var map__33728__$1 = ((((!((map__33728 == null)))?((((map__33728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33728):map__33728);
var arg = map__33728__$1;
var env = cljs.core.get.call(null,map__33728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__33728__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__33728__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__33728__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33730 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33730__$1 = ((((!((map__33730 == null)))?((((map__33730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33730):map__33730);
var name = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__33732){
var map__33733 = p__33732;
var map__33733__$1 = ((((!((map__33733 == null)))?((((map__33733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33733):map__33733);
var expr = cljs.core.get.call(null,map__33733__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__33733__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__33733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__33735_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33735_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33736){
var map__33737 = p__33736;
var map__33737__$1 = ((((!((map__33737 == null)))?((((map__33737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33737):map__33737);
var env = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__33739){
var map__33740 = p__33739;
var map__33740__$1 = ((((!((map__33740 == null)))?((((map__33740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33740):map__33740);
var items = cljs.core.get.call(null,map__33740__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33740__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33742){
var map__33743 = p__33742;
var map__33743__$1 = ((((!((map__33743 == null)))?((((map__33743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33743):map__33743);
var items = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_33745 = cljs.core.count.call(null,items);
if((cnt_33745 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_33745,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__33746_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33746_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33747){
var map__33748 = p__33747;
var map__33748__$1 = ((((!((map__33748 == null)))?((((map__33748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33748):map__33748);
var items = cljs.core.get.call(null,map__33748__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33748__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__33750){
var map__33751 = p__33750;
var map__33751__$1 = ((((!((map__33751 == null)))?((((map__33751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33751):map__33751);
var items = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___33769 = cljs.core.seq.call(null,items);
if(temp__4657__auto___33769){
var items_33770__$1 = temp__4657__auto___33769;
var vec__33753_33771 = items_33770__$1;
var seq__33754_33772 = cljs.core.seq.call(null,vec__33753_33771);
var first__33755_33773 = cljs.core.first.call(null,seq__33754_33772);
var seq__33754_33774__$1 = cljs.core.next.call(null,seq__33754_33772);
var vec__33756_33775 = first__33755_33773;
var k_33776 = cljs.core.nth.call(null,vec__33756_33775,(0),null);
var v_33777 = cljs.core.nth.call(null,vec__33756_33775,(1),null);
var r_33778 = seq__33754_33774__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_33776),"\": ",v_33777);

var seq__33759_33779 = cljs.core.seq.call(null,r_33778);
var chunk__33760_33780 = null;
var count__33761_33781 = (0);
var i__33762_33782 = (0);
while(true){
if((i__33762_33782 < count__33761_33781)){
var vec__33763_33783 = cljs.core._nth.call(null,chunk__33760_33780,i__33762_33782);
var k_33784__$1 = cljs.core.nth.call(null,vec__33763_33783,(0),null);
var v_33785__$1 = cljs.core.nth.call(null,vec__33763_33783,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33784__$1),"\": ",v_33785__$1);

var G__33786 = seq__33759_33779;
var G__33787 = chunk__33760_33780;
var G__33788 = count__33761_33781;
var G__33789 = (i__33762_33782 + (1));
seq__33759_33779 = G__33786;
chunk__33760_33780 = G__33787;
count__33761_33781 = G__33788;
i__33762_33782 = G__33789;
continue;
} else {
var temp__4657__auto___33790__$1 = cljs.core.seq.call(null,seq__33759_33779);
if(temp__4657__auto___33790__$1){
var seq__33759_33791__$1 = temp__4657__auto___33790__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33759_33791__$1)){
var c__28978__auto___33792 = cljs.core.chunk_first.call(null,seq__33759_33791__$1);
var G__33793 = cljs.core.chunk_rest.call(null,seq__33759_33791__$1);
var G__33794 = c__28978__auto___33792;
var G__33795 = cljs.core.count.call(null,c__28978__auto___33792);
var G__33796 = (0);
seq__33759_33779 = G__33793;
chunk__33760_33780 = G__33794;
count__33761_33781 = G__33795;
i__33762_33782 = G__33796;
continue;
} else {
var vec__33766_33797 = cljs.core.first.call(null,seq__33759_33791__$1);
var k_33798__$1 = cljs.core.nth.call(null,vec__33766_33797,(0),null);
var v_33799__$1 = cljs.core.nth.call(null,vec__33766_33797,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33798__$1),"\": ",v_33799__$1);

var G__33800 = cljs.core.next.call(null,seq__33759_33791__$1);
var G__33801 = null;
var G__33802 = (0);
var G__33803 = (0);
seq__33759_33779 = G__33800;
chunk__33760_33780 = G__33801;
count__33761_33781 = G__33802;
i__33762_33782 = G__33803;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__33804){
var map__33805 = p__33804;
var map__33805__$1 = ((((!((map__33805 == null)))?((((map__33805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33805):map__33805);
var items = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__33807){
var map__33808 = p__33807;
var map__33808__$1 = ((((!((map__33808 == null)))?((((map__33808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33808):map__33808);
var form = cljs.core.get.call(null,map__33808__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__33808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__33810){
var map__33811 = p__33810;
var map__33811__$1 = ((((!((map__33811 == null)))?((((map__33811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33811):map__33811);
var op = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28139__auto__ = (function (){var and__28127__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__28127__auto__){
var and__28127__auto____$1 = form;
if(cljs.core.truth_(and__28127__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var and__28127__auto__ = !((const_expr == null));
if(and__28127__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__28127__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__33813){
var map__33814 = p__33813;
var map__33814__$1 = ((((!((map__33814 == null)))?((((map__33814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33814):map__33814);
var op = cljs.core.get.call(null,map__33814__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33814__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33814__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__28139__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__28139__auto__){
return or__28139__auto__;
} else {
var and__28127__auto__ = !((const_expr == null));
if(and__28127__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__28127__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__28139__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33816){
var map__33817 = p__33816;
var map__33817__$1 = ((((!((map__33817 == null)))?((((map__33817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33817):map__33817);
var test = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__28139__auto__ = unchecked;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__33819){
var map__33820 = p__33819;
var map__33820__$1 = ((((!((map__33820 == null)))?((((map__33820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33820):map__33820);
var v = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__33822_33840 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__33823_33841 = null;
var count__33824_33842 = (0);
var i__33825_33843 = (0);
while(true){
if((i__33825_33843 < count__33824_33842)){
var vec__33826_33844 = cljs.core._nth.call(null,chunk__33823_33841,i__33825_33843);
var ts_33845 = cljs.core.nth.call(null,vec__33826_33844,(0),null);
var then_33846 = cljs.core.nth.call(null,vec__33826_33844,(1),null);
var seq__33829_33847 = cljs.core.seq.call(null,ts_33845);
var chunk__33830_33848 = null;
var count__33831_33849 = (0);
var i__33832_33850 = (0);
while(true){
if((i__33832_33850 < count__33831_33849)){
var test_33851 = cljs.core._nth.call(null,chunk__33830_33848,i__33832_33850);
cljs.compiler.emitln.call(null,"case ",test_33851,":");

var G__33852 = seq__33829_33847;
var G__33853 = chunk__33830_33848;
var G__33854 = count__33831_33849;
var G__33855 = (i__33832_33850 + (1));
seq__33829_33847 = G__33852;
chunk__33830_33848 = G__33853;
count__33831_33849 = G__33854;
i__33832_33850 = G__33855;
continue;
} else {
var temp__4657__auto___33856 = cljs.core.seq.call(null,seq__33829_33847);
if(temp__4657__auto___33856){
var seq__33829_33857__$1 = temp__4657__auto___33856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33829_33857__$1)){
var c__28978__auto___33858 = cljs.core.chunk_first.call(null,seq__33829_33857__$1);
var G__33859 = cljs.core.chunk_rest.call(null,seq__33829_33857__$1);
var G__33860 = c__28978__auto___33858;
var G__33861 = cljs.core.count.call(null,c__28978__auto___33858);
var G__33862 = (0);
seq__33829_33847 = G__33859;
chunk__33830_33848 = G__33860;
count__33831_33849 = G__33861;
i__33832_33850 = G__33862;
continue;
} else {
var test_33863 = cljs.core.first.call(null,seq__33829_33857__$1);
cljs.compiler.emitln.call(null,"case ",test_33863,":");

var G__33864 = cljs.core.next.call(null,seq__33829_33857__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33829_33847 = G__33864;
chunk__33830_33848 = G__33865;
count__33831_33849 = G__33866;
i__33832_33850 = G__33867;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33846);
} else {
cljs.compiler.emitln.call(null,then_33846);
}

cljs.compiler.emitln.call(null,"break;");

var G__33868 = seq__33822_33840;
var G__33869 = chunk__33823_33841;
var G__33870 = count__33824_33842;
var G__33871 = (i__33825_33843 + (1));
seq__33822_33840 = G__33868;
chunk__33823_33841 = G__33869;
count__33824_33842 = G__33870;
i__33825_33843 = G__33871;
continue;
} else {
var temp__4657__auto___33872 = cljs.core.seq.call(null,seq__33822_33840);
if(temp__4657__auto___33872){
var seq__33822_33873__$1 = temp__4657__auto___33872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33822_33873__$1)){
var c__28978__auto___33874 = cljs.core.chunk_first.call(null,seq__33822_33873__$1);
var G__33875 = cljs.core.chunk_rest.call(null,seq__33822_33873__$1);
var G__33876 = c__28978__auto___33874;
var G__33877 = cljs.core.count.call(null,c__28978__auto___33874);
var G__33878 = (0);
seq__33822_33840 = G__33875;
chunk__33823_33841 = G__33876;
count__33824_33842 = G__33877;
i__33825_33843 = G__33878;
continue;
} else {
var vec__33833_33879 = cljs.core.first.call(null,seq__33822_33873__$1);
var ts_33880 = cljs.core.nth.call(null,vec__33833_33879,(0),null);
var then_33881 = cljs.core.nth.call(null,vec__33833_33879,(1),null);
var seq__33836_33882 = cljs.core.seq.call(null,ts_33880);
var chunk__33837_33883 = null;
var count__33838_33884 = (0);
var i__33839_33885 = (0);
while(true){
if((i__33839_33885 < count__33838_33884)){
var test_33886 = cljs.core._nth.call(null,chunk__33837_33883,i__33839_33885);
cljs.compiler.emitln.call(null,"case ",test_33886,":");

var G__33887 = seq__33836_33882;
var G__33888 = chunk__33837_33883;
var G__33889 = count__33838_33884;
var G__33890 = (i__33839_33885 + (1));
seq__33836_33882 = G__33887;
chunk__33837_33883 = G__33888;
count__33838_33884 = G__33889;
i__33839_33885 = G__33890;
continue;
} else {
var temp__4657__auto___33891__$1 = cljs.core.seq.call(null,seq__33836_33882);
if(temp__4657__auto___33891__$1){
var seq__33836_33892__$1 = temp__4657__auto___33891__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33836_33892__$1)){
var c__28978__auto___33893 = cljs.core.chunk_first.call(null,seq__33836_33892__$1);
var G__33894 = cljs.core.chunk_rest.call(null,seq__33836_33892__$1);
var G__33895 = c__28978__auto___33893;
var G__33896 = cljs.core.count.call(null,c__28978__auto___33893);
var G__33897 = (0);
seq__33836_33882 = G__33894;
chunk__33837_33883 = G__33895;
count__33838_33884 = G__33896;
i__33839_33885 = G__33897;
continue;
} else {
var test_33898 = cljs.core.first.call(null,seq__33836_33892__$1);
cljs.compiler.emitln.call(null,"case ",test_33898,":");

var G__33899 = cljs.core.next.call(null,seq__33836_33892__$1);
var G__33900 = null;
var G__33901 = (0);
var G__33902 = (0);
seq__33836_33882 = G__33899;
chunk__33837_33883 = G__33900;
count__33838_33884 = G__33901;
i__33839_33885 = G__33902;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33881);
} else {
cljs.compiler.emitln.call(null,then_33881);
}

cljs.compiler.emitln.call(null,"break;");

var G__33903 = cljs.core.next.call(null,seq__33822_33873__$1);
var G__33904 = null;
var G__33905 = (0);
var G__33906 = (0);
seq__33822_33840 = G__33903;
chunk__33823_33841 = G__33904;
count__33824_33842 = G__33905;
i__33825_33843 = G__33906;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33907){
var map__33908 = p__33907;
var map__33908__$1 = ((((!((map__33908 == null)))?((((map__33908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33908):map__33908);
var throw$ = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33911 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__33911,(0),null);
var rstr = cljs.core.nth.call(null,vec__33911,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__33911,fstr,rstr,ret_t,axstr){
return (function (p1__33910_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33910_SHARP_);
});})(idx,vec__33911,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__33914 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33914),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33914;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__33915_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33915_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__33916 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33917 = cljs.core.seq.call(null,vec__33916);
var first__33918 = cljs.core.first.call(null,seq__33917);
var seq__33917__$1 = cljs.core.next.call(null,seq__33917);
var p = first__33918;
var first__33918__$1 = cljs.core.first.call(null,seq__33917__$1);
var seq__33917__$2 = cljs.core.next.call(null,seq__33917__$1);
var ts = first__33918__$1;
var first__33918__$2 = cljs.core.first.call(null,seq__33917__$2);
var seq__33917__$3 = cljs.core.next.call(null,seq__33917__$2);
var n = first__33918__$2;
var xs = seq__33917__$3;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__28127__auto__){
var and__28127__auto____$1 = ts;
if(cljs.core.truth_(and__28127__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__33919 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33920 = cljs.core.seq.call(null,vec__33919);
var first__33921 = cljs.core.first.call(null,seq__33920);
var seq__33920__$1 = cljs.core.next.call(null,seq__33920);
var p = first__33921;
var first__33921__$1 = cljs.core.first.call(null,seq__33920__$1);
var seq__33920__$2 = cljs.core.next.call(null,seq__33920__$1);
var ts = first__33921__$1;
var xs = seq__33920__$2;
if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__28127__auto__){
var and__28127__auto____$1 = ts;
if(cljs.core.truth_(and__28127__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__33924 = arguments.length;
switch (G__33924) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__33932 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33922_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33922_SHARP_);
} else {
return p1__33922_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33933 = cljs.core.seq.call(null,vec__33932);
var first__33934 = cljs.core.first.call(null,seq__33933);
var seq__33933__$1 = cljs.core.next.call(null,seq__33933);
var x = first__33934;
var ys = seq__33933__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33935 = cljs.core.seq.call(null,ys);
var chunk__33936 = null;
var count__33937 = (0);
var i__33938 = (0);
while(true){
if((i__33938 < count__33937)){
var next_line = cljs.core._nth.call(null,chunk__33936,i__33938);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33944 = seq__33935;
var G__33945 = chunk__33936;
var G__33946 = count__33937;
var G__33947 = (i__33938 + (1));
seq__33935 = G__33944;
chunk__33936 = G__33945;
count__33937 = G__33946;
i__33938 = G__33947;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33935);
if(temp__4657__auto__){
var seq__33935__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33935__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__33935__$1);
var G__33948 = cljs.core.chunk_rest.call(null,seq__33935__$1);
var G__33949 = c__28978__auto__;
var G__33950 = cljs.core.count.call(null,c__28978__auto__);
var G__33951 = (0);
seq__33935 = G__33948;
chunk__33936 = G__33949;
count__33937 = G__33950;
i__33938 = G__33951;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33935__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33952 = cljs.core.next.call(null,seq__33935__$1);
var G__33953 = null;
var G__33954 = (0);
var G__33955 = (0);
seq__33935 = G__33952;
chunk__33936 = G__33953;
count__33937 = G__33954;
i__33938 = G__33955;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__33939_33956 = cljs.core.seq.call(null,docs__$2);
var chunk__33940_33957 = null;
var count__33941_33958 = (0);
var i__33942_33959 = (0);
while(true){
if((i__33942_33959 < count__33941_33958)){
var e_33960 = cljs.core._nth.call(null,chunk__33940_33957,i__33942_33959);
if(cljs.core.truth_(e_33960)){
print_comment_lines.call(null,e_33960);
} else {
}

var G__33961 = seq__33939_33956;
var G__33962 = chunk__33940_33957;
var G__33963 = count__33941_33958;
var G__33964 = (i__33942_33959 + (1));
seq__33939_33956 = G__33961;
chunk__33940_33957 = G__33962;
count__33941_33958 = G__33963;
i__33942_33959 = G__33964;
continue;
} else {
var temp__4657__auto___33965 = cljs.core.seq.call(null,seq__33939_33956);
if(temp__4657__auto___33965){
var seq__33939_33966__$1 = temp__4657__auto___33965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33939_33966__$1)){
var c__28978__auto___33967 = cljs.core.chunk_first.call(null,seq__33939_33966__$1);
var G__33968 = cljs.core.chunk_rest.call(null,seq__33939_33966__$1);
var G__33969 = c__28978__auto___33967;
var G__33970 = cljs.core.count.call(null,c__28978__auto___33967);
var G__33971 = (0);
seq__33939_33956 = G__33968;
chunk__33940_33957 = G__33969;
count__33941_33958 = G__33970;
i__33942_33959 = G__33971;
continue;
} else {
var e_33972 = cljs.core.first.call(null,seq__33939_33966__$1);
if(cljs.core.truth_(e_33972)){
print_comment_lines.call(null,e_33972);
} else {
}

var G__33973 = cljs.core.next.call(null,seq__33939_33966__$1);
var G__33974 = null;
var G__33975 = (0);
var G__33976 = (0);
seq__33939_33956 = G__33973;
chunk__33940_33957 = G__33974;
count__33941_33958 = G__33975;
i__33942_33959 = G__33976;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__28127__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__33978_SHARP_){
return goog.string.startsWith(p1__33978_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = opts;
if(cljs.core.truth_(and__28127__auto____$1)){
var and__28127__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__28127__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__28127__auto____$2;
}
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33979){
var map__33980 = p__33979;
var map__33980__$1 = ((((!((map__33980 == null)))?((((map__33980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33980):map__33980);
var name = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__28139__auto__ = init;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__28127__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__28127__auto__){
return test;
} else {
return and__28127__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33982){
var map__33983 = p__33982;
var map__33983__$1 = ((((!((map__33983 == null)))?((((map__33983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33983):map__33983);
var name = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33985_34003 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33986_34004 = null;
var count__33987_34005 = (0);
var i__33988_34006 = (0);
while(true){
if((i__33988_34006 < count__33987_34005)){
var vec__33989_34007 = cljs.core._nth.call(null,chunk__33986_34004,i__33988_34006);
var i_34008 = cljs.core.nth.call(null,vec__33989_34007,(0),null);
var param_34009 = cljs.core.nth.call(null,vec__33989_34007,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_34009);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__34010 = seq__33985_34003;
var G__34011 = chunk__33986_34004;
var G__34012 = count__33987_34005;
var G__34013 = (i__33988_34006 + (1));
seq__33985_34003 = G__34010;
chunk__33986_34004 = G__34011;
count__33987_34005 = G__34012;
i__33988_34006 = G__34013;
continue;
} else {
var temp__4657__auto___34014 = cljs.core.seq.call(null,seq__33985_34003);
if(temp__4657__auto___34014){
var seq__33985_34015__$1 = temp__4657__auto___34014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33985_34015__$1)){
var c__28978__auto___34016 = cljs.core.chunk_first.call(null,seq__33985_34015__$1);
var G__34017 = cljs.core.chunk_rest.call(null,seq__33985_34015__$1);
var G__34018 = c__28978__auto___34016;
var G__34019 = cljs.core.count.call(null,c__28978__auto___34016);
var G__34020 = (0);
seq__33985_34003 = G__34017;
chunk__33986_34004 = G__34018;
count__33987_34005 = G__34019;
i__33988_34006 = G__34020;
continue;
} else {
var vec__33992_34021 = cljs.core.first.call(null,seq__33985_34015__$1);
var i_34022 = cljs.core.nth.call(null,vec__33992_34021,(0),null);
var param_34023 = cljs.core.nth.call(null,vec__33992_34021,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_34023);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__34024 = cljs.core.next.call(null,seq__33985_34015__$1);
var G__34025 = null;
var G__34026 = (0);
var G__34027 = (0);
seq__33985_34003 = G__34024;
chunk__33986_34004 = G__34025;
count__33987_34005 = G__34026;
i__33988_34006 = G__34027;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33995_34028 = cljs.core.seq.call(null,params);
var chunk__33996_34029 = null;
var count__33997_34030 = (0);
var i__33998_34031 = (0);
while(true){
if((i__33998_34031 < count__33997_34030)){
var param_34032 = cljs.core._nth.call(null,chunk__33996_34029,i__33998_34031);
cljs.compiler.emit.call(null,param_34032);

if(cljs.core._EQ_.call(null,param_34032,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34033 = seq__33995_34028;
var G__34034 = chunk__33996_34029;
var G__34035 = count__33997_34030;
var G__34036 = (i__33998_34031 + (1));
seq__33995_34028 = G__34033;
chunk__33996_34029 = G__34034;
count__33997_34030 = G__34035;
i__33998_34031 = G__34036;
continue;
} else {
var temp__4657__auto___34037 = cljs.core.seq.call(null,seq__33995_34028);
if(temp__4657__auto___34037){
var seq__33995_34038__$1 = temp__4657__auto___34037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33995_34038__$1)){
var c__28978__auto___34039 = cljs.core.chunk_first.call(null,seq__33995_34038__$1);
var G__34040 = cljs.core.chunk_rest.call(null,seq__33995_34038__$1);
var G__34041 = c__28978__auto___34039;
var G__34042 = cljs.core.count.call(null,c__28978__auto___34039);
var G__34043 = (0);
seq__33995_34028 = G__34040;
chunk__33996_34029 = G__34041;
count__33997_34030 = G__34042;
i__33998_34031 = G__34043;
continue;
} else {
var param_34044 = cljs.core.first.call(null,seq__33995_34038__$1);
cljs.compiler.emit.call(null,param_34044);

if(cljs.core._EQ_.call(null,param_34044,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34045 = cljs.core.next.call(null,seq__33995_34038__$1);
var G__34046 = null;
var G__34047 = (0);
var G__34048 = (0);
seq__33995_34028 = G__34045;
chunk__33996_34029 = G__34046;
count__33997_34030 = G__34047;
i__33998_34031 = G__34048;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33999_34049 = cljs.core.seq.call(null,params);
var chunk__34000_34050 = null;
var count__34001_34051 = (0);
var i__34002_34052 = (0);
while(true){
if((i__34002_34052 < count__34001_34051)){
var param_34053 = cljs.core._nth.call(null,chunk__34000_34050,i__34002_34052);
cljs.compiler.emit.call(null,param_34053);

if(cljs.core._EQ_.call(null,param_34053,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34054 = seq__33999_34049;
var G__34055 = chunk__34000_34050;
var G__34056 = count__34001_34051;
var G__34057 = (i__34002_34052 + (1));
seq__33999_34049 = G__34054;
chunk__34000_34050 = G__34055;
count__34001_34051 = G__34056;
i__34002_34052 = G__34057;
continue;
} else {
var temp__4657__auto___34058 = cljs.core.seq.call(null,seq__33999_34049);
if(temp__4657__auto___34058){
var seq__33999_34059__$1 = temp__4657__auto___34058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33999_34059__$1)){
var c__28978__auto___34060 = cljs.core.chunk_first.call(null,seq__33999_34059__$1);
var G__34061 = cljs.core.chunk_rest.call(null,seq__33999_34059__$1);
var G__34062 = c__28978__auto___34060;
var G__34063 = cljs.core.count.call(null,c__28978__auto___34060);
var G__34064 = (0);
seq__33999_34049 = G__34061;
chunk__34000_34050 = G__34062;
count__34001_34051 = G__34063;
i__34002_34052 = G__34064;
continue;
} else {
var param_34065 = cljs.core.first.call(null,seq__33999_34059__$1);
cljs.compiler.emit.call(null,param_34065);

if(cljs.core._EQ_.call(null,param_34065,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34066 = cljs.core.next.call(null,seq__33999_34059__$1);
var G__34067 = null;
var G__34068 = (0);
var G__34069 = (0);
seq__33999_34049 = G__34066;
chunk__34000_34050 = G__34067;
count__34001_34051 = G__34068;
i__34002_34052 = G__34069;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__34070 = cljs.core.seq.call(null,params);
var chunk__34071 = null;
var count__34072 = (0);
var i__34073 = (0);
while(true){
if((i__34073 < count__34072)){
var param = cljs.core._nth.call(null,chunk__34071,i__34073);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34074 = seq__34070;
var G__34075 = chunk__34071;
var G__34076 = count__34072;
var G__34077 = (i__34073 + (1));
seq__34070 = G__34074;
chunk__34071 = G__34075;
count__34072 = G__34076;
i__34073 = G__34077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34070);
if(temp__4657__auto__){
var seq__34070__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34070__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__34070__$1);
var G__34078 = cljs.core.chunk_rest.call(null,seq__34070__$1);
var G__34079 = c__28978__auto__;
var G__34080 = cljs.core.count.call(null,c__28978__auto__);
var G__34081 = (0);
seq__34070 = G__34078;
chunk__34071 = G__34079;
count__34072 = G__34080;
i__34073 = G__34081;
continue;
} else {
var param = cljs.core.first.call(null,seq__34070__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34082 = cljs.core.next.call(null,seq__34070__$1);
var G__34083 = null;
var G__34084 = (0);
var G__34085 = (0);
seq__34070 = G__34082;
chunk__34071 = G__34083;
count__34072 = G__34084;
i__34073 = G__34085;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__34086){
var map__34087 = p__34086;
var map__34087__$1 = ((((!((map__34087 == null)))?((((map__34087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34087):map__34087);
var type = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__34089){
var map__34090 = p__34089;
var map__34090__$1 = ((((!((map__34090 == null)))?((((map__34090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34090):map__34090);
var f = map__34090__$1;
var type = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_34100__$1 = (function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_34101 = cljs.compiler.munge.call(null,name_34100__$1);
var delegate_name_34102 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34101),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_34102," = function (");

var seq__34092_34103 = cljs.core.seq.call(null,params);
var chunk__34093_34104 = null;
var count__34094_34105 = (0);
var i__34095_34106 = (0);
while(true){
if((i__34095_34106 < count__34094_34105)){
var param_34107 = cljs.core._nth.call(null,chunk__34093_34104,i__34095_34106);
cljs.compiler.emit.call(null,param_34107);

if(cljs.core._EQ_.call(null,param_34107,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34108 = seq__34092_34103;
var G__34109 = chunk__34093_34104;
var G__34110 = count__34094_34105;
var G__34111 = (i__34095_34106 + (1));
seq__34092_34103 = G__34108;
chunk__34093_34104 = G__34109;
count__34094_34105 = G__34110;
i__34095_34106 = G__34111;
continue;
} else {
var temp__4657__auto___34112 = cljs.core.seq.call(null,seq__34092_34103);
if(temp__4657__auto___34112){
var seq__34092_34113__$1 = temp__4657__auto___34112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34092_34113__$1)){
var c__28978__auto___34114 = cljs.core.chunk_first.call(null,seq__34092_34113__$1);
var G__34115 = cljs.core.chunk_rest.call(null,seq__34092_34113__$1);
var G__34116 = c__28978__auto___34114;
var G__34117 = cljs.core.count.call(null,c__28978__auto___34114);
var G__34118 = (0);
seq__34092_34103 = G__34115;
chunk__34093_34104 = G__34116;
count__34094_34105 = G__34117;
i__34095_34106 = G__34118;
continue;
} else {
var param_34119 = cljs.core.first.call(null,seq__34092_34113__$1);
cljs.compiler.emit.call(null,param_34119);

if(cljs.core._EQ_.call(null,param_34119,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34120 = cljs.core.next.call(null,seq__34092_34113__$1);
var G__34121 = null;
var G__34122 = (0);
var G__34123 = (0);
seq__34092_34103 = G__34120;
chunk__34093_34104 = G__34121;
count__34094_34105 = G__34122;
i__34095_34106 = G__34123;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_34101," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_34124 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_34124,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_34102,".call(this,");

var seq__34096_34125 = cljs.core.seq.call(null,params);
var chunk__34097_34126 = null;
var count__34098_34127 = (0);
var i__34099_34128 = (0);
while(true){
if((i__34099_34128 < count__34098_34127)){
var param_34129 = cljs.core._nth.call(null,chunk__34097_34126,i__34099_34128);
cljs.compiler.emit.call(null,param_34129);

if(cljs.core._EQ_.call(null,param_34129,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34130 = seq__34096_34125;
var G__34131 = chunk__34097_34126;
var G__34132 = count__34098_34127;
var G__34133 = (i__34099_34128 + (1));
seq__34096_34125 = G__34130;
chunk__34097_34126 = G__34131;
count__34098_34127 = G__34132;
i__34099_34128 = G__34133;
continue;
} else {
var temp__4657__auto___34134 = cljs.core.seq.call(null,seq__34096_34125);
if(temp__4657__auto___34134){
var seq__34096_34135__$1 = temp__4657__auto___34134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34096_34135__$1)){
var c__28978__auto___34136 = cljs.core.chunk_first.call(null,seq__34096_34135__$1);
var G__34137 = cljs.core.chunk_rest.call(null,seq__34096_34135__$1);
var G__34138 = c__28978__auto___34136;
var G__34139 = cljs.core.count.call(null,c__28978__auto___34136);
var G__34140 = (0);
seq__34096_34125 = G__34137;
chunk__34097_34126 = G__34138;
count__34098_34127 = G__34139;
i__34099_34128 = G__34140;
continue;
} else {
var param_34141 = cljs.core.first.call(null,seq__34096_34135__$1);
cljs.compiler.emit.call(null,param_34141);

if(cljs.core._EQ_.call(null,param_34141,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__34142 = cljs.core.next.call(null,seq__34096_34135__$1);
var G__34143 = null;
var G__34144 = (0);
var G__34145 = (0);
seq__34096_34125 = G__34142;
chunk__34097_34126 = G__34143;
count__34098_34127 = G__34144;
i__34099_34128 = G__34145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_34101,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_34101,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_34100__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_34101,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_34102,";");

cljs.compiler.emitln.call(null,"return ",mname_34101,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__34149){
var map__34150 = p__34149;
var map__34150__$1 = ((((!((map__34150 == null)))?((((map__34150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34150):map__34150);
var name = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__34146_SHARP_){
var and__28127__auto__ = p1__34146_SHARP_;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__34146_SHARP_));
} else {
return and__28127__auto__;
}
});})(map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_34185__$1 = (function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_34186 = cljs.compiler.munge.call(null,name_34185__$1);
var maxparams_34187 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_34188 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_34185__$1,mname_34186,maxparams_34187,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34186),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_34185__$1,mname_34186,maxparams_34187,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_34189 = cljs.core.sort_by.call(null,((function (name_34185__$1,mname_34186,maxparams_34187,mmap_34188,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__34147_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34147_SHARP_)));
});})(name_34185__$1,mname_34186,maxparams_34187,mmap_34188,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_34188));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_34186," = null;");

var seq__34152_34190 = cljs.core.seq.call(null,ms_34189);
var chunk__34153_34191 = null;
var count__34154_34192 = (0);
var i__34155_34193 = (0);
while(true){
if((i__34155_34193 < count__34154_34192)){
var vec__34156_34194 = cljs.core._nth.call(null,chunk__34153_34191,i__34155_34193);
var n_34195 = cljs.core.nth.call(null,vec__34156_34194,(0),null);
var meth_34196 = cljs.core.nth.call(null,vec__34156_34194,(1),null);
cljs.compiler.emits.call(null,"var ",n_34195," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34196))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_34196);
} else {
cljs.compiler.emit_fn_method.call(null,meth_34196);
}

cljs.compiler.emitln.call(null,";");

var G__34197 = seq__34152_34190;
var G__34198 = chunk__34153_34191;
var G__34199 = count__34154_34192;
var G__34200 = (i__34155_34193 + (1));
seq__34152_34190 = G__34197;
chunk__34153_34191 = G__34198;
count__34154_34192 = G__34199;
i__34155_34193 = G__34200;
continue;
} else {
var temp__4657__auto___34201 = cljs.core.seq.call(null,seq__34152_34190);
if(temp__4657__auto___34201){
var seq__34152_34202__$1 = temp__4657__auto___34201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34152_34202__$1)){
var c__28978__auto___34203 = cljs.core.chunk_first.call(null,seq__34152_34202__$1);
var G__34204 = cljs.core.chunk_rest.call(null,seq__34152_34202__$1);
var G__34205 = c__28978__auto___34203;
var G__34206 = cljs.core.count.call(null,c__28978__auto___34203);
var G__34207 = (0);
seq__34152_34190 = G__34204;
chunk__34153_34191 = G__34205;
count__34154_34192 = G__34206;
i__34155_34193 = G__34207;
continue;
} else {
var vec__34159_34208 = cljs.core.first.call(null,seq__34152_34202__$1);
var n_34209 = cljs.core.nth.call(null,vec__34159_34208,(0),null);
var meth_34210 = cljs.core.nth.call(null,vec__34159_34208,(1),null);
cljs.compiler.emits.call(null,"var ",n_34209," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34210))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_34210);
} else {
cljs.compiler.emit_fn_method.call(null,meth_34210);
}

cljs.compiler.emitln.call(null,";");

var G__34211 = cljs.core.next.call(null,seq__34152_34202__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__34152_34190 = G__34211;
chunk__34153_34191 = G__34212;
count__34154_34192 = G__34213;
i__34155_34193 = G__34214;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_34186," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_34187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_34187)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_34187));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__34162_34215 = cljs.core.seq.call(null,ms_34189);
var chunk__34163_34216 = null;
var count__34164_34217 = (0);
var i__34165_34218 = (0);
while(true){
if((i__34165_34218 < count__34164_34217)){
var vec__34166_34219 = cljs.core._nth.call(null,chunk__34163_34216,i__34165_34218);
var n_34220 = cljs.core.nth.call(null,vec__34166_34219,(0),null);
var meth_34221 = cljs.core.nth.call(null,vec__34166_34219,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34221))){
cljs.compiler.emitln.call(null,"default:");

var restarg_34222 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_34222," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_34223 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_34222," = new cljs.core.IndexedSeq(",a_34223,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_34220,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_34187)),(((cljs.core.count.call(null,maxparams_34187) > (1)))?", ":null),restarg_34222,");");
} else {
var pcnt_34224 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34221));
cljs.compiler.emitln.call(null,"case ",pcnt_34224,":");

cljs.compiler.emitln.call(null,"return ",n_34220,".call(this",(((pcnt_34224 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_34224,maxparams_34187));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),",")),");");
}

var G__34225 = seq__34162_34215;
var G__34226 = chunk__34163_34216;
var G__34227 = count__34164_34217;
var G__34228 = (i__34165_34218 + (1));
seq__34162_34215 = G__34225;
chunk__34163_34216 = G__34226;
count__34164_34217 = G__34227;
i__34165_34218 = G__34228;
continue;
} else {
var temp__4657__auto___34229 = cljs.core.seq.call(null,seq__34162_34215);
if(temp__4657__auto___34229){
var seq__34162_34230__$1 = temp__4657__auto___34229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34162_34230__$1)){
var c__28978__auto___34231 = cljs.core.chunk_first.call(null,seq__34162_34230__$1);
var G__34232 = cljs.core.chunk_rest.call(null,seq__34162_34230__$1);
var G__34233 = c__28978__auto___34231;
var G__34234 = cljs.core.count.call(null,c__28978__auto___34231);
var G__34235 = (0);
seq__34162_34215 = G__34232;
chunk__34163_34216 = G__34233;
count__34164_34217 = G__34234;
i__34165_34218 = G__34235;
continue;
} else {
var vec__34169_34236 = cljs.core.first.call(null,seq__34162_34230__$1);
var n_34237 = cljs.core.nth.call(null,vec__34169_34236,(0),null);
var meth_34238 = cljs.core.nth.call(null,vec__34169_34236,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34238))){
cljs.compiler.emitln.call(null,"default:");

var restarg_34239 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_34239," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_34240 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_34239," = new cljs.core.IndexedSeq(",a_34240,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_34237,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_34187)),(((cljs.core.count.call(null,maxparams_34187) > (1)))?", ":null),restarg_34239,");");
} else {
var pcnt_34241 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34238));
cljs.compiler.emitln.call(null,"case ",pcnt_34241,":");

cljs.compiler.emitln.call(null,"return ",n_34237,".call(this",(((pcnt_34241 === (0)))?null:cljs.core._conj.call(null,(function (){var x__29001__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_34241,maxparams_34187));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29001__auto__);
})(),",")),");");
}

var G__34242 = cljs.core.next.call(null,seq__34162_34230__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__34162_34215 = G__34242;
chunk__34163_34216 = G__34243;
count__34164_34217 = G__34244;
i__34165_34218 = G__34245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_34186,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_34186,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_34185__$1,mname_34186,maxparams_34187,mmap_34188,ms_34189,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__34148_SHARP_){
var vec__34172 = p1__34148_SHARP_;
var n = cljs.core.nth.call(null,vec__34172,(0),null);
var m = cljs.core.nth.call(null,vec__34172,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_34185__$1,mname_34186,maxparams_34187,mmap_34188,ms_34189,loop_locals,map__34150,map__34150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_34189),".cljs$lang$applyTo;");
} else {
}

var seq__34175_34246 = cljs.core.seq.call(null,ms_34189);
var chunk__34176_34247 = null;
var count__34177_34248 = (0);
var i__34178_34249 = (0);
while(true){
if((i__34178_34249 < count__34177_34248)){
var vec__34179_34250 = cljs.core._nth.call(null,chunk__34176_34247,i__34178_34249);
var n_34251 = cljs.core.nth.call(null,vec__34179_34250,(0),null);
var meth_34252 = cljs.core.nth.call(null,vec__34179_34250,(1),null);
var c_34253 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34252));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34252))){
cljs.compiler.emitln.call(null,mname_34186,".cljs$core$IFn$_invoke$arity$variadic = ",n_34251,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_34186,".cljs$core$IFn$_invoke$arity$",c_34253," = ",n_34251,";");
}

var G__34254 = seq__34175_34246;
var G__34255 = chunk__34176_34247;
var G__34256 = count__34177_34248;
var G__34257 = (i__34178_34249 + (1));
seq__34175_34246 = G__34254;
chunk__34176_34247 = G__34255;
count__34177_34248 = G__34256;
i__34178_34249 = G__34257;
continue;
} else {
var temp__4657__auto___34258 = cljs.core.seq.call(null,seq__34175_34246);
if(temp__4657__auto___34258){
var seq__34175_34259__$1 = temp__4657__auto___34258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34175_34259__$1)){
var c__28978__auto___34260 = cljs.core.chunk_first.call(null,seq__34175_34259__$1);
var G__34261 = cljs.core.chunk_rest.call(null,seq__34175_34259__$1);
var G__34262 = c__28978__auto___34260;
var G__34263 = cljs.core.count.call(null,c__28978__auto___34260);
var G__34264 = (0);
seq__34175_34246 = G__34261;
chunk__34176_34247 = G__34262;
count__34177_34248 = G__34263;
i__34178_34249 = G__34264;
continue;
} else {
var vec__34182_34265 = cljs.core.first.call(null,seq__34175_34259__$1);
var n_34266 = cljs.core.nth.call(null,vec__34182_34265,(0),null);
var meth_34267 = cljs.core.nth.call(null,vec__34182_34265,(1),null);
var c_34268 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34267));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34267))){
cljs.compiler.emitln.call(null,mname_34186,".cljs$core$IFn$_invoke$arity$variadic = ",n_34266,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_34186,".cljs$core$IFn$_invoke$arity$",c_34268," = ",n_34266,";");
}

var G__34269 = cljs.core.next.call(null,seq__34175_34259__$1);
var G__34270 = null;
var G__34271 = (0);
var G__34272 = (0);
seq__34175_34246 = G__34269;
chunk__34176_34247 = G__34270;
count__34177_34248 = G__34271;
i__34178_34249 = G__34272;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_34186,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__34273){
var map__34274 = p__34273;
var map__34274__$1 = ((((!((map__34274 == null)))?((((map__34274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34274):map__34274);
var statements = cljs.core.get.call(null,map__34274__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__34274__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__34274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__28127__auto__ = statements;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28127__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__34276_34280 = cljs.core.seq.call(null,statements);
var chunk__34277_34281 = null;
var count__34278_34282 = (0);
var i__34279_34283 = (0);
while(true){
if((i__34279_34283 < count__34278_34282)){
var s_34284 = cljs.core._nth.call(null,chunk__34277_34281,i__34279_34283);
cljs.compiler.emitln.call(null,s_34284);

var G__34285 = seq__34276_34280;
var G__34286 = chunk__34277_34281;
var G__34287 = count__34278_34282;
var G__34288 = (i__34279_34283 + (1));
seq__34276_34280 = G__34285;
chunk__34277_34281 = G__34286;
count__34278_34282 = G__34287;
i__34279_34283 = G__34288;
continue;
} else {
var temp__4657__auto___34289 = cljs.core.seq.call(null,seq__34276_34280);
if(temp__4657__auto___34289){
var seq__34276_34290__$1 = temp__4657__auto___34289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34276_34290__$1)){
var c__28978__auto___34291 = cljs.core.chunk_first.call(null,seq__34276_34290__$1);
var G__34292 = cljs.core.chunk_rest.call(null,seq__34276_34290__$1);
var G__34293 = c__28978__auto___34291;
var G__34294 = cljs.core.count.call(null,c__28978__auto___34291);
var G__34295 = (0);
seq__34276_34280 = G__34292;
chunk__34277_34281 = G__34293;
count__34278_34282 = G__34294;
i__34279_34283 = G__34295;
continue;
} else {
var s_34296 = cljs.core.first.call(null,seq__34276_34290__$1);
cljs.compiler.emitln.call(null,s_34296);

var G__34297 = cljs.core.next.call(null,seq__34276_34290__$1);
var G__34298 = null;
var G__34299 = (0);
var G__34300 = (0);
seq__34276_34280 = G__34297;
chunk__34277_34281 = G__34298;
count__34278_34282 = G__34299;
i__34279_34283 = G__34300;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__28127__auto__ = statements;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__28127__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__34301){
var map__34302 = p__34301;
var map__34302__$1 = ((((!((map__34302 == null)))?((((map__34302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34302):map__34302);
var env = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__34304,is_loop){
var map__34305 = p__34304;
var map__34305__$1 = ((((!((map__34305 == null)))?((((map__34305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34305):map__34305);
var bindings = cljs.core.get.call(null,map__34305__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__34305__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_34307_34316 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_34307_34316,context,map__34305,map__34305__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_34307_34316,context,map__34305,map__34305__$1,bindings,expr,env))
,bindings):null));

try{var seq__34308_34317 = cljs.core.seq.call(null,bindings);
var chunk__34309_34318 = null;
var count__34310_34319 = (0);
var i__34311_34320 = (0);
while(true){
if((i__34311_34320 < count__34310_34319)){
var map__34312_34321 = cljs.core._nth.call(null,chunk__34309_34318,i__34311_34320);
var map__34312_34322__$1 = ((((!((map__34312_34321 == null)))?((((map__34312_34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34312_34321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34312_34321):map__34312_34321);
var binding_34323 = map__34312_34322__$1;
var init_34324 = cljs.core.get.call(null,map__34312_34322__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_34323);

cljs.compiler.emitln.call(null," = ",init_34324,";");

var G__34325 = seq__34308_34317;
var G__34326 = chunk__34309_34318;
var G__34327 = count__34310_34319;
var G__34328 = (i__34311_34320 + (1));
seq__34308_34317 = G__34325;
chunk__34309_34318 = G__34326;
count__34310_34319 = G__34327;
i__34311_34320 = G__34328;
continue;
} else {
var temp__4657__auto___34329 = cljs.core.seq.call(null,seq__34308_34317);
if(temp__4657__auto___34329){
var seq__34308_34330__$1 = temp__4657__auto___34329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34308_34330__$1)){
var c__28978__auto___34331 = cljs.core.chunk_first.call(null,seq__34308_34330__$1);
var G__34332 = cljs.core.chunk_rest.call(null,seq__34308_34330__$1);
var G__34333 = c__28978__auto___34331;
var G__34334 = cljs.core.count.call(null,c__28978__auto___34331);
var G__34335 = (0);
seq__34308_34317 = G__34332;
chunk__34309_34318 = G__34333;
count__34310_34319 = G__34334;
i__34311_34320 = G__34335;
continue;
} else {
var map__34314_34336 = cljs.core.first.call(null,seq__34308_34330__$1);
var map__34314_34337__$1 = ((((!((map__34314_34336 == null)))?((((map__34314_34336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34314_34336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34314_34336):map__34314_34336);
var binding_34338 = map__34314_34337__$1;
var init_34339 = cljs.core.get.call(null,map__34314_34337__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_34338);

cljs.compiler.emitln.call(null," = ",init_34339,";");

var G__34340 = cljs.core.next.call(null,seq__34308_34330__$1);
var G__34341 = null;
var G__34342 = (0);
var G__34343 = (0);
seq__34308_34317 = G__34340;
chunk__34309_34318 = G__34341;
count__34310_34319 = G__34342;
i__34311_34320 = G__34343;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_34307_34316;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__34344){
var map__34345 = p__34344;
var map__34345__$1 = ((((!((map__34345 == null)))?((((map__34345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34345):map__34345);
var frame = cljs.core.get.call(null,map__34345__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__34345__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__34345__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__29084__auto___34347 = cljs.core.count.call(null,exprs);
var i_34348 = (0);
while(true){
if((i_34348 < n__29084__auto___34347)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_34348)," = ",exprs.call(null,i_34348),";");

var G__34349 = (i_34348 + (1));
i_34348 = G__34349;
continue;
} else {
}
break;
}

var n__29084__auto___34350 = cljs.core.count.call(null,exprs);
var i_34351 = (0);
while(true){
if((i_34351 < n__29084__auto___34350)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_34351))," = ",temps.call(null,i_34351),";");

var G__34352 = (i_34351 + (1));
i_34351 = G__34352;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__34353){
var map__34354 = p__34353;
var map__34354__$1 = ((((!((map__34354 == null)))?((((map__34354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34354):map__34354);
var bindings = cljs.core.get.call(null,map__34354__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__34354__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__34356_34364 = cljs.core.seq.call(null,bindings);
var chunk__34357_34365 = null;
var count__34358_34366 = (0);
var i__34359_34367 = (0);
while(true){
if((i__34359_34367 < count__34358_34366)){
var map__34360_34368 = cljs.core._nth.call(null,chunk__34357_34365,i__34359_34367);
var map__34360_34369__$1 = ((((!((map__34360_34368 == null)))?((((map__34360_34368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34360_34368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34360_34368):map__34360_34368);
var binding_34370 = map__34360_34369__$1;
var init_34371 = cljs.core.get.call(null,map__34360_34369__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_34370)," = ",init_34371,";");

var G__34372 = seq__34356_34364;
var G__34373 = chunk__34357_34365;
var G__34374 = count__34358_34366;
var G__34375 = (i__34359_34367 + (1));
seq__34356_34364 = G__34372;
chunk__34357_34365 = G__34373;
count__34358_34366 = G__34374;
i__34359_34367 = G__34375;
continue;
} else {
var temp__4657__auto___34376 = cljs.core.seq.call(null,seq__34356_34364);
if(temp__4657__auto___34376){
var seq__34356_34377__$1 = temp__4657__auto___34376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34356_34377__$1)){
var c__28978__auto___34378 = cljs.core.chunk_first.call(null,seq__34356_34377__$1);
var G__34379 = cljs.core.chunk_rest.call(null,seq__34356_34377__$1);
var G__34380 = c__28978__auto___34378;
var G__34381 = cljs.core.count.call(null,c__28978__auto___34378);
var G__34382 = (0);
seq__34356_34364 = G__34379;
chunk__34357_34365 = G__34380;
count__34358_34366 = G__34381;
i__34359_34367 = G__34382;
continue;
} else {
var map__34362_34383 = cljs.core.first.call(null,seq__34356_34377__$1);
var map__34362_34384__$1 = ((((!((map__34362_34383 == null)))?((((map__34362_34383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34362_34383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34362_34383):map__34362_34383);
var binding_34385 = map__34362_34384__$1;
var init_34386 = cljs.core.get.call(null,map__34362_34384__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_34385)," = ",init_34386,";");

var G__34387 = cljs.core.next.call(null,seq__34356_34377__$1);
var G__34388 = null;
var G__34389 = (0);
var G__34390 = (0);
seq__34356_34364 = G__34387;
chunk__34357_34365 = G__34388;
count__34358_34366 = G__34389;
i__34359_34367 = G__34390;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__34393){
var map__34394 = p__34393;
var map__34394__$1 = ((((!((map__34394 == null)))?((((map__34394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34394):map__34394);
var expr = map__34394__$1;
var f = cljs.core.get.call(null,map__34394__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__34394__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34394__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__28127__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28127__auto__){
var and__28127__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__28127__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__28127__auto__ = protocol;
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = tag;
if(cljs.core.truth_(and__28127__auto____$1)){
var or__28139__auto__ = (function (){var and__28127__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__28127__auto____$2){
var and__28127__auto____$3 = protocol;
if(cljs.core.truth_(and__28127__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__28127__auto____$3;
}
} else {
return and__28127__auto____$2;
}
})();
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var and__28127__auto____$2 = (function (){var or__28139__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__28127__auto____$2)){
var or__28139__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
var and__28127__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__28127__auto____$3){
var and__28127__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__28127__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__28127__auto____$4;
}
} else {
return and__28127__auto____$3;
}
}
} else {
return and__28127__auto____$2;
}
}
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__28139__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__28139__auto__){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__34396 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__28127__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
return (arity > mfa);
} else {
return and__28127__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env){
return (function (p1__34391_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__34391_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env){
return (function (p1__34392_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__34392_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34394,map__34394__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__34396,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__34396,(1),null);
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_34399 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_34399,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34400 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_34400,args)),(((mfa_34400 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_34400,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = js_QMARK_;
if(or__28139__auto____$1){
return or__28139__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_34401 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_34401," ? ",f__$1,fprop_34401,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_34401," ? ",f__$1,fprop_34401,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__34402){
var map__34403 = p__34402;
var map__34403__$1 = ((((!((map__34403 == null)))?((((map__34403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34403):map__34403);
var ctor = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__34405){
var map__34406 = p__34405;
var map__34406__$1 = ((((!((map__34406 == null)))?((((map__34406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var target = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__34408 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34408__$1 = ((((!((map__34408 == null)))?((((map__34408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34408):map__34408);
var options = cljs.core.get.call(null,map__34408__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__34408__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__34409 = options;
var map__34409__$1 = ((((!((map__34409 == null)))?((((map__34409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34409):map__34409);
var target = cljs.core.get.call(null,map__34409__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__34409__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__34410 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__34416 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__34416__$1 = ((((!((map__34416 == null)))?((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var node_libs = cljs.core.get.call(null,map__34416__$1,true);
var libs_to_load = cljs.core.get.call(null,map__34416__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__34410,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__34410,(1),null);
var map__34413 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__34413__$1 = ((((!((map__34413 == null)))?((((map__34413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34413):map__34413);
var global_exports_libs = cljs.core.get.call(null,map__34413__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__34413__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__34419_34435 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__34420_34436 = null;
var count__34421_34437 = (0);
var i__34422_34438 = (0);
while(true){
if((i__34422_34438 < count__34421_34437)){
var lib_34439 = cljs.core._nth.call(null,chunk__34420_34436,i__34422_34438);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34439)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34439),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34439),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34439),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34439),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34439),"');");

}
}
}

var G__34440 = seq__34419_34435;
var G__34441 = chunk__34420_34436;
var G__34442 = count__34421_34437;
var G__34443 = (i__34422_34438 + (1));
seq__34419_34435 = G__34440;
chunk__34420_34436 = G__34441;
count__34421_34437 = G__34442;
i__34422_34438 = G__34443;
continue;
} else {
var temp__4657__auto___34444 = cljs.core.seq.call(null,seq__34419_34435);
if(temp__4657__auto___34444){
var seq__34419_34445__$1 = temp__4657__auto___34444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34419_34445__$1)){
var c__28978__auto___34446 = cljs.core.chunk_first.call(null,seq__34419_34445__$1);
var G__34447 = cljs.core.chunk_rest.call(null,seq__34419_34445__$1);
var G__34448 = c__28978__auto___34446;
var G__34449 = cljs.core.count.call(null,c__28978__auto___34446);
var G__34450 = (0);
seq__34419_34435 = G__34447;
chunk__34420_34436 = G__34448;
count__34421_34437 = G__34449;
i__34422_34438 = G__34450;
continue;
} else {
var lib_34451 = cljs.core.first.call(null,seq__34419_34445__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34451)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34451),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34451),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__28139__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34451),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34451),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34451),"');");

}
}
}

var G__34452 = cljs.core.next.call(null,seq__34419_34445__$1);
var G__34453 = null;
var G__34454 = (0);
var G__34455 = (0);
seq__34419_34435 = G__34452;
chunk__34420_34436 = G__34453;
count__34421_34437 = G__34454;
i__34422_34438 = G__34455;
continue;
}
} else {
}
}
break;
}

var seq__34423_34456 = cljs.core.seq.call(null,node_libs);
var chunk__34424_34457 = null;
var count__34425_34458 = (0);
var i__34426_34459 = (0);
while(true){
if((i__34426_34459 < count__34425_34458)){
var lib_34460 = cljs.core._nth.call(null,chunk__34424_34457,i__34426_34459);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34460)," = require('",lib_34460,"');");

var G__34461 = seq__34423_34456;
var G__34462 = chunk__34424_34457;
var G__34463 = count__34425_34458;
var G__34464 = (i__34426_34459 + (1));
seq__34423_34456 = G__34461;
chunk__34424_34457 = G__34462;
count__34425_34458 = G__34463;
i__34426_34459 = G__34464;
continue;
} else {
var temp__4657__auto___34465 = cljs.core.seq.call(null,seq__34423_34456);
if(temp__4657__auto___34465){
var seq__34423_34466__$1 = temp__4657__auto___34465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34423_34466__$1)){
var c__28978__auto___34467 = cljs.core.chunk_first.call(null,seq__34423_34466__$1);
var G__34468 = cljs.core.chunk_rest.call(null,seq__34423_34466__$1);
var G__34469 = c__28978__auto___34467;
var G__34470 = cljs.core.count.call(null,c__28978__auto___34467);
var G__34471 = (0);
seq__34423_34456 = G__34468;
chunk__34424_34457 = G__34469;
count__34425_34458 = G__34470;
i__34426_34459 = G__34471;
continue;
} else {
var lib_34472 = cljs.core.first.call(null,seq__34423_34466__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34472)," = require('",lib_34472,"');");

var G__34473 = cljs.core.next.call(null,seq__34423_34466__$1);
var G__34474 = null;
var G__34475 = (0);
var G__34476 = (0);
seq__34423_34456 = G__34473;
chunk__34424_34457 = G__34474;
count__34425_34458 = G__34475;
i__34426_34459 = G__34476;
continue;
}
} else {
}
}
break;
}

var seq__34427_34477 = cljs.core.seq.call(null,global_exports_libs);
var chunk__34428_34478 = null;
var count__34429_34479 = (0);
var i__34430_34480 = (0);
while(true){
if((i__34430_34480 < count__34429_34479)){
var lib_34481 = cljs.core._nth.call(null,chunk__34428_34478,i__34430_34480);
var map__34431_34482 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34481));
var map__34431_34483__$1 = ((((!((map__34431_34482 == null)))?((((map__34431_34482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34431_34482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34431_34482):map__34431_34482);
var global_exports_34484 = cljs.core.get.call(null,map__34431_34483__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_34481)," = goog.global.",cljs.core.get.call(null,global_exports_34484,cljs.core.symbol.call(null,lib_34481)),";");

var G__34485 = seq__34427_34477;
var G__34486 = chunk__34428_34478;
var G__34487 = count__34429_34479;
var G__34488 = (i__34430_34480 + (1));
seq__34427_34477 = G__34485;
chunk__34428_34478 = G__34486;
count__34429_34479 = G__34487;
i__34430_34480 = G__34488;
continue;
} else {
var temp__4657__auto___34489 = cljs.core.seq.call(null,seq__34427_34477);
if(temp__4657__auto___34489){
var seq__34427_34490__$1 = temp__4657__auto___34489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34427_34490__$1)){
var c__28978__auto___34491 = cljs.core.chunk_first.call(null,seq__34427_34490__$1);
var G__34492 = cljs.core.chunk_rest.call(null,seq__34427_34490__$1);
var G__34493 = c__28978__auto___34491;
var G__34494 = cljs.core.count.call(null,c__28978__auto___34491);
var G__34495 = (0);
seq__34427_34477 = G__34492;
chunk__34428_34478 = G__34493;
count__34429_34479 = G__34494;
i__34430_34480 = G__34495;
continue;
} else {
var lib_34496 = cljs.core.first.call(null,seq__34427_34490__$1);
var map__34433_34497 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34496));
var map__34433_34498__$1 = ((((!((map__34433_34497 == null)))?((((map__34433_34497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34433_34497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34433_34497):map__34433_34497);
var global_exports_34499 = cljs.core.get.call(null,map__34433_34498__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_34496)," = goog.global.",cljs.core.get.call(null,global_exports_34499,cljs.core.symbol.call(null,lib_34496)),";");

var G__34500 = cljs.core.next.call(null,seq__34427_34490__$1);
var G__34501 = null;
var G__34502 = (0);
var G__34503 = (0);
seq__34427_34477 = G__34500;
chunk__34428_34478 = G__34501;
count__34429_34479 = G__34502;
i__34430_34480 = G__34503;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__34504){
var map__34505 = p__34504;
var map__34505__$1 = ((((!((map__34505 == null)))?((((map__34505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34505):map__34505);
var name = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34505__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__34507){
var map__34508 = p__34507;
var map__34508__$1 = ((((!((map__34508 == null)))?((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508):map__34508);
var name = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__34510){
var map__34511 = p__34510;
var map__34511__$1 = ((((!((map__34511 == null)))?((((map__34511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34511):map__34511);
var t = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34513_34531 = cljs.core.seq.call(null,protocols);
var chunk__34514_34532 = null;
var count__34515_34533 = (0);
var i__34516_34534 = (0);
while(true){
if((i__34516_34534 < count__34515_34533)){
var protocol_34535 = cljs.core._nth.call(null,chunk__34514_34532,i__34516_34534);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34535)].join('')),"}");

var G__34536 = seq__34513_34531;
var G__34537 = chunk__34514_34532;
var G__34538 = count__34515_34533;
var G__34539 = (i__34516_34534 + (1));
seq__34513_34531 = G__34536;
chunk__34514_34532 = G__34537;
count__34515_34533 = G__34538;
i__34516_34534 = G__34539;
continue;
} else {
var temp__4657__auto___34540 = cljs.core.seq.call(null,seq__34513_34531);
if(temp__4657__auto___34540){
var seq__34513_34541__$1 = temp__4657__auto___34540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34513_34541__$1)){
var c__28978__auto___34542 = cljs.core.chunk_first.call(null,seq__34513_34541__$1);
var G__34543 = cljs.core.chunk_rest.call(null,seq__34513_34541__$1);
var G__34544 = c__28978__auto___34542;
var G__34545 = cljs.core.count.call(null,c__28978__auto___34542);
var G__34546 = (0);
seq__34513_34531 = G__34543;
chunk__34514_34532 = G__34544;
count__34515_34533 = G__34545;
i__34516_34534 = G__34546;
continue;
} else {
var protocol_34547 = cljs.core.first.call(null,seq__34513_34541__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34547)].join('')),"}");

var G__34548 = cljs.core.next.call(null,seq__34513_34541__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__34513_34531 = G__34548;
chunk__34514_34532 = G__34549;
count__34515_34533 = G__34550;
i__34516_34534 = G__34551;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34517_34552 = cljs.core.seq.call(null,fields__$1);
var chunk__34518_34553 = null;
var count__34519_34554 = (0);
var i__34520_34555 = (0);
while(true){
if((i__34520_34555 < count__34519_34554)){
var fld_34556 = cljs.core._nth.call(null,chunk__34518_34553,i__34520_34555);
cljs.compiler.emitln.call(null,"this.",fld_34556," = ",fld_34556,";");

var G__34557 = seq__34517_34552;
var G__34558 = chunk__34518_34553;
var G__34559 = count__34519_34554;
var G__34560 = (i__34520_34555 + (1));
seq__34517_34552 = G__34557;
chunk__34518_34553 = G__34558;
count__34519_34554 = G__34559;
i__34520_34555 = G__34560;
continue;
} else {
var temp__4657__auto___34561 = cljs.core.seq.call(null,seq__34517_34552);
if(temp__4657__auto___34561){
var seq__34517_34562__$1 = temp__4657__auto___34561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34517_34562__$1)){
var c__28978__auto___34563 = cljs.core.chunk_first.call(null,seq__34517_34562__$1);
var G__34564 = cljs.core.chunk_rest.call(null,seq__34517_34562__$1);
var G__34565 = c__28978__auto___34563;
var G__34566 = cljs.core.count.call(null,c__28978__auto___34563);
var G__34567 = (0);
seq__34517_34552 = G__34564;
chunk__34518_34553 = G__34565;
count__34519_34554 = G__34566;
i__34520_34555 = G__34567;
continue;
} else {
var fld_34568 = cljs.core.first.call(null,seq__34517_34562__$1);
cljs.compiler.emitln.call(null,"this.",fld_34568," = ",fld_34568,";");

var G__34569 = cljs.core.next.call(null,seq__34517_34562__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__34517_34552 = G__34569;
chunk__34518_34553 = G__34570;
count__34519_34554 = G__34571;
i__34520_34555 = G__34572;
continue;
}
} else {
}
}
break;
}

var seq__34521_34573 = cljs.core.seq.call(null,pmasks);
var chunk__34522_34574 = null;
var count__34523_34575 = (0);
var i__34524_34576 = (0);
while(true){
if((i__34524_34576 < count__34523_34575)){
var vec__34525_34577 = cljs.core._nth.call(null,chunk__34522_34574,i__34524_34576);
var pno_34578 = cljs.core.nth.call(null,vec__34525_34577,(0),null);
var pmask_34579 = cljs.core.nth.call(null,vec__34525_34577,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34578,"$ = ",pmask_34579,";");

var G__34580 = seq__34521_34573;
var G__34581 = chunk__34522_34574;
var G__34582 = count__34523_34575;
var G__34583 = (i__34524_34576 + (1));
seq__34521_34573 = G__34580;
chunk__34522_34574 = G__34581;
count__34523_34575 = G__34582;
i__34524_34576 = G__34583;
continue;
} else {
var temp__4657__auto___34584 = cljs.core.seq.call(null,seq__34521_34573);
if(temp__4657__auto___34584){
var seq__34521_34585__$1 = temp__4657__auto___34584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34521_34585__$1)){
var c__28978__auto___34586 = cljs.core.chunk_first.call(null,seq__34521_34585__$1);
var G__34587 = cljs.core.chunk_rest.call(null,seq__34521_34585__$1);
var G__34588 = c__28978__auto___34586;
var G__34589 = cljs.core.count.call(null,c__28978__auto___34586);
var G__34590 = (0);
seq__34521_34573 = G__34587;
chunk__34522_34574 = G__34588;
count__34523_34575 = G__34589;
i__34524_34576 = G__34590;
continue;
} else {
var vec__34528_34591 = cljs.core.first.call(null,seq__34521_34585__$1);
var pno_34592 = cljs.core.nth.call(null,vec__34528_34591,(0),null);
var pmask_34593 = cljs.core.nth.call(null,vec__34528_34591,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34592,"$ = ",pmask_34593,";");

var G__34594 = cljs.core.next.call(null,seq__34521_34585__$1);
var G__34595 = null;
var G__34596 = (0);
var G__34597 = (0);
seq__34521_34573 = G__34594;
chunk__34522_34574 = G__34595;
count__34523_34575 = G__34596;
i__34524_34576 = G__34597;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__34598){
var map__34599 = p__34598;
var map__34599__$1 = ((((!((map__34599 == null)))?((((map__34599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34599):map__34599);
var t = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34601_34619 = cljs.core.seq.call(null,protocols);
var chunk__34602_34620 = null;
var count__34603_34621 = (0);
var i__34604_34622 = (0);
while(true){
if((i__34604_34622 < count__34603_34621)){
var protocol_34623 = cljs.core._nth.call(null,chunk__34602_34620,i__34604_34622);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34623)].join('')),"}");

var G__34624 = seq__34601_34619;
var G__34625 = chunk__34602_34620;
var G__34626 = count__34603_34621;
var G__34627 = (i__34604_34622 + (1));
seq__34601_34619 = G__34624;
chunk__34602_34620 = G__34625;
count__34603_34621 = G__34626;
i__34604_34622 = G__34627;
continue;
} else {
var temp__4657__auto___34628 = cljs.core.seq.call(null,seq__34601_34619);
if(temp__4657__auto___34628){
var seq__34601_34629__$1 = temp__4657__auto___34628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34601_34629__$1)){
var c__28978__auto___34630 = cljs.core.chunk_first.call(null,seq__34601_34629__$1);
var G__34631 = cljs.core.chunk_rest.call(null,seq__34601_34629__$1);
var G__34632 = c__28978__auto___34630;
var G__34633 = cljs.core.count.call(null,c__28978__auto___34630);
var G__34634 = (0);
seq__34601_34619 = G__34631;
chunk__34602_34620 = G__34632;
count__34603_34621 = G__34633;
i__34604_34622 = G__34634;
continue;
} else {
var protocol_34635 = cljs.core.first.call(null,seq__34601_34629__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34635)].join('')),"}");

var G__34636 = cljs.core.next.call(null,seq__34601_34629__$1);
var G__34637 = null;
var G__34638 = (0);
var G__34639 = (0);
seq__34601_34619 = G__34636;
chunk__34602_34620 = G__34637;
count__34603_34621 = G__34638;
i__34604_34622 = G__34639;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34605_34640 = cljs.core.seq.call(null,fields__$1);
var chunk__34606_34641 = null;
var count__34607_34642 = (0);
var i__34608_34643 = (0);
while(true){
if((i__34608_34643 < count__34607_34642)){
var fld_34644 = cljs.core._nth.call(null,chunk__34606_34641,i__34608_34643);
cljs.compiler.emitln.call(null,"this.",fld_34644," = ",fld_34644,";");

var G__34645 = seq__34605_34640;
var G__34646 = chunk__34606_34641;
var G__34647 = count__34607_34642;
var G__34648 = (i__34608_34643 + (1));
seq__34605_34640 = G__34645;
chunk__34606_34641 = G__34646;
count__34607_34642 = G__34647;
i__34608_34643 = G__34648;
continue;
} else {
var temp__4657__auto___34649 = cljs.core.seq.call(null,seq__34605_34640);
if(temp__4657__auto___34649){
var seq__34605_34650__$1 = temp__4657__auto___34649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34605_34650__$1)){
var c__28978__auto___34651 = cljs.core.chunk_first.call(null,seq__34605_34650__$1);
var G__34652 = cljs.core.chunk_rest.call(null,seq__34605_34650__$1);
var G__34653 = c__28978__auto___34651;
var G__34654 = cljs.core.count.call(null,c__28978__auto___34651);
var G__34655 = (0);
seq__34605_34640 = G__34652;
chunk__34606_34641 = G__34653;
count__34607_34642 = G__34654;
i__34608_34643 = G__34655;
continue;
} else {
var fld_34656 = cljs.core.first.call(null,seq__34605_34650__$1);
cljs.compiler.emitln.call(null,"this.",fld_34656," = ",fld_34656,";");

var G__34657 = cljs.core.next.call(null,seq__34605_34650__$1);
var G__34658 = null;
var G__34659 = (0);
var G__34660 = (0);
seq__34605_34640 = G__34657;
chunk__34606_34641 = G__34658;
count__34607_34642 = G__34659;
i__34608_34643 = G__34660;
continue;
}
} else {
}
}
break;
}

var seq__34609_34661 = cljs.core.seq.call(null,pmasks);
var chunk__34610_34662 = null;
var count__34611_34663 = (0);
var i__34612_34664 = (0);
while(true){
if((i__34612_34664 < count__34611_34663)){
var vec__34613_34665 = cljs.core._nth.call(null,chunk__34610_34662,i__34612_34664);
var pno_34666 = cljs.core.nth.call(null,vec__34613_34665,(0),null);
var pmask_34667 = cljs.core.nth.call(null,vec__34613_34665,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34666,"$ = ",pmask_34667,";");

var G__34668 = seq__34609_34661;
var G__34669 = chunk__34610_34662;
var G__34670 = count__34611_34663;
var G__34671 = (i__34612_34664 + (1));
seq__34609_34661 = G__34668;
chunk__34610_34662 = G__34669;
count__34611_34663 = G__34670;
i__34612_34664 = G__34671;
continue;
} else {
var temp__4657__auto___34672 = cljs.core.seq.call(null,seq__34609_34661);
if(temp__4657__auto___34672){
var seq__34609_34673__$1 = temp__4657__auto___34672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34609_34673__$1)){
var c__28978__auto___34674 = cljs.core.chunk_first.call(null,seq__34609_34673__$1);
var G__34675 = cljs.core.chunk_rest.call(null,seq__34609_34673__$1);
var G__34676 = c__28978__auto___34674;
var G__34677 = cljs.core.count.call(null,c__28978__auto___34674);
var G__34678 = (0);
seq__34609_34661 = G__34675;
chunk__34610_34662 = G__34676;
count__34611_34663 = G__34677;
i__34612_34664 = G__34678;
continue;
} else {
var vec__34616_34679 = cljs.core.first.call(null,seq__34609_34673__$1);
var pno_34680 = cljs.core.nth.call(null,vec__34616_34679,(0),null);
var pmask_34681 = cljs.core.nth.call(null,vec__34616_34679,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34680,"$ = ",pmask_34681,";");

var G__34682 = cljs.core.next.call(null,seq__34609_34673__$1);
var G__34683 = null;
var G__34684 = (0);
var G__34685 = (0);
seq__34609_34661 = G__34682;
chunk__34610_34662 = G__34683;
count__34611_34663 = G__34684;
i__34612_34664 = G__34685;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__34686){
var map__34687 = p__34686;
var map__34687__$1 = ((((!((map__34687 == null)))?((((map__34687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34687):map__34687);
var target = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34689){
var map__34690 = p__34689;
var map__34690__$1 = ((((!((map__34690 == null)))?((((map__34690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34690):map__34690);
var op = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__28127__auto__ = code;
if(cljs.core.truth_(and__28127__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__28127__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__33606__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33606__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__34695 = cljs.core.seq.call(null,table);
var chunk__34696 = null;
var count__34697 = (0);
var i__34698 = (0);
while(true){
if((i__34698 < count__34697)){
var vec__34699 = cljs.core._nth.call(null,chunk__34696,i__34698);
var sym = cljs.core.nth.call(null,vec__34699,(0),null);
var value = cljs.core.nth.call(null,vec__34699,(1),null);
var ns_34705 = cljs.core.namespace.call(null,sym);
var name_34706 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34707 = seq__34695;
var G__34708 = chunk__34696;
var G__34709 = count__34697;
var G__34710 = (i__34698 + (1));
seq__34695 = G__34707;
chunk__34696 = G__34708;
count__34697 = G__34709;
i__34698 = G__34710;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34695);
if(temp__4657__auto__){
var seq__34695__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34695__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__34695__$1);
var G__34711 = cljs.core.chunk_rest.call(null,seq__34695__$1);
var G__34712 = c__28978__auto__;
var G__34713 = cljs.core.count.call(null,c__28978__auto__);
var G__34714 = (0);
seq__34695 = G__34711;
chunk__34696 = G__34712;
count__34697 = G__34713;
i__34698 = G__34714;
continue;
} else {
var vec__34702 = cljs.core.first.call(null,seq__34695__$1);
var sym = cljs.core.nth.call(null,vec__34702,(0),null);
var value = cljs.core.nth.call(null,vec__34702,(1),null);
var ns_34715 = cljs.core.namespace.call(null,sym);
var name_34716 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34717 = cljs.core.next.call(null,seq__34695__$1);
var G__34718 = null;
var G__34719 = (0);
var G__34720 = (0);
seq__34695 = G__34717;
chunk__34696 = G__34718;
count__34697 = G__34719;
i__34698 = G__34720;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_34727 = cljs.core.first.call(null,ks);
var vec__34723_34728 = cljs.core.conj.call(null,prefix,k_34727);
var top_34729 = cljs.core.nth.call(null,vec__34723_34728,(0),null);
var prefix_SINGLEQUOTE__34730 = vec__34723_34728;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_34727)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__34730) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_34729)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_34729)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34730)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_34729);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34730)),";");
}
} else {
}

var m_34731 = cljs.core.get.call(null,externs,k_34727);
if(cljs.core.empty_QMARK_.call(null,m_34731)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__34730,m_34731,top_level,known_externs);
}

var G__34732 = cljs.core.next.call(null,ks);
ks = G__34732;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1509738654296
