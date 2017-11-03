// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28139__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28139__auto__){
return or__28139__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28139__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44180_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44180_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44181 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44182 = null;
var count__44183 = (0);
var i__44184 = (0);
while(true){
if((i__44184 < count__44183)){
var n = cljs.core._nth.call(null,chunk__44182,i__44184);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44185 = seq__44181;
var G__44186 = chunk__44182;
var G__44187 = count__44183;
var G__44188 = (i__44184 + (1));
seq__44181 = G__44185;
chunk__44182 = G__44186;
count__44183 = G__44187;
i__44184 = G__44188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44181);
if(temp__4657__auto__){
var seq__44181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44181__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__44181__$1);
var G__44189 = cljs.core.chunk_rest.call(null,seq__44181__$1);
var G__44190 = c__28978__auto__;
var G__44191 = cljs.core.count.call(null,c__28978__auto__);
var G__44192 = (0);
seq__44181 = G__44189;
chunk__44182 = G__44190;
count__44183 = G__44191;
i__44184 = G__44192;
continue;
} else {
var n = cljs.core.first.call(null,seq__44181__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44193 = cljs.core.next.call(null,seq__44181__$1);
var G__44194 = null;
var G__44195 = (0);
var G__44196 = (0);
seq__44181 = G__44193;
chunk__44182 = G__44194;
count__44183 = G__44195;
i__44184 = G__44196;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44206_44214 = cljs.core.seq.call(null,deps);
var chunk__44207_44215 = null;
var count__44208_44216 = (0);
var i__44209_44217 = (0);
while(true){
if((i__44209_44217 < count__44208_44216)){
var dep_44218 = cljs.core._nth.call(null,chunk__44207_44215,i__44209_44217);
topo_sort_helper_STAR_.call(null,dep_44218,(depth + (1)),state);

var G__44219 = seq__44206_44214;
var G__44220 = chunk__44207_44215;
var G__44221 = count__44208_44216;
var G__44222 = (i__44209_44217 + (1));
seq__44206_44214 = G__44219;
chunk__44207_44215 = G__44220;
count__44208_44216 = G__44221;
i__44209_44217 = G__44222;
continue;
} else {
var temp__4657__auto___44223 = cljs.core.seq.call(null,seq__44206_44214);
if(temp__4657__auto___44223){
var seq__44206_44224__$1 = temp__4657__auto___44223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44206_44224__$1)){
var c__28978__auto___44225 = cljs.core.chunk_first.call(null,seq__44206_44224__$1);
var G__44226 = cljs.core.chunk_rest.call(null,seq__44206_44224__$1);
var G__44227 = c__28978__auto___44225;
var G__44228 = cljs.core.count.call(null,c__28978__auto___44225);
var G__44229 = (0);
seq__44206_44214 = G__44226;
chunk__44207_44215 = G__44227;
count__44208_44216 = G__44228;
i__44209_44217 = G__44229;
continue;
} else {
var dep_44230 = cljs.core.first.call(null,seq__44206_44224__$1);
topo_sort_helper_STAR_.call(null,dep_44230,(depth + (1)),state);

var G__44231 = cljs.core.next.call(null,seq__44206_44224__$1);
var G__44232 = null;
var G__44233 = (0);
var G__44234 = (0);
seq__44206_44214 = G__44231;
chunk__44207_44215 = G__44232;
count__44208_44216 = G__44233;
i__44209_44217 = G__44234;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44210){
var vec__44211 = p__44210;
var seq__44212 = cljs.core.seq.call(null,vec__44211);
var first__44213 = cljs.core.first.call(null,seq__44212);
var seq__44212__$1 = cljs.core.next.call(null,seq__44212);
var x = first__44213;
var xs = seq__44212__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44211,seq__44212,first__44213,seq__44212__$1,x,xs,get_deps__$1){
return (function (p1__44197_SHARP_){
return clojure.set.difference.call(null,p1__44197_SHARP_,x);
});})(vec__44211,seq__44212,first__44213,seq__44212__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44235 = cljs.core.seq.call(null,provides);
var chunk__44236 = null;
var count__44237 = (0);
var i__44238 = (0);
while(true){
if((i__44238 < count__44237)){
var prov = cljs.core._nth.call(null,chunk__44236,i__44238);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44239_44247 = cljs.core.seq.call(null,requires);
var chunk__44240_44248 = null;
var count__44241_44249 = (0);
var i__44242_44250 = (0);
while(true){
if((i__44242_44250 < count__44241_44249)){
var req_44251 = cljs.core._nth.call(null,chunk__44240_44248,i__44242_44250);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44251,prov);

var G__44252 = seq__44239_44247;
var G__44253 = chunk__44240_44248;
var G__44254 = count__44241_44249;
var G__44255 = (i__44242_44250 + (1));
seq__44239_44247 = G__44252;
chunk__44240_44248 = G__44253;
count__44241_44249 = G__44254;
i__44242_44250 = G__44255;
continue;
} else {
var temp__4657__auto___44256 = cljs.core.seq.call(null,seq__44239_44247);
if(temp__4657__auto___44256){
var seq__44239_44257__$1 = temp__4657__auto___44256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44239_44257__$1)){
var c__28978__auto___44258 = cljs.core.chunk_first.call(null,seq__44239_44257__$1);
var G__44259 = cljs.core.chunk_rest.call(null,seq__44239_44257__$1);
var G__44260 = c__28978__auto___44258;
var G__44261 = cljs.core.count.call(null,c__28978__auto___44258);
var G__44262 = (0);
seq__44239_44247 = G__44259;
chunk__44240_44248 = G__44260;
count__44241_44249 = G__44261;
i__44242_44250 = G__44262;
continue;
} else {
var req_44263 = cljs.core.first.call(null,seq__44239_44257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44263,prov);

var G__44264 = cljs.core.next.call(null,seq__44239_44257__$1);
var G__44265 = null;
var G__44266 = (0);
var G__44267 = (0);
seq__44239_44247 = G__44264;
chunk__44240_44248 = G__44265;
count__44241_44249 = G__44266;
i__44242_44250 = G__44267;
continue;
}
} else {
}
}
break;
}

var G__44268 = seq__44235;
var G__44269 = chunk__44236;
var G__44270 = count__44237;
var G__44271 = (i__44238 + (1));
seq__44235 = G__44268;
chunk__44236 = G__44269;
count__44237 = G__44270;
i__44238 = G__44271;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44235);
if(temp__4657__auto__){
var seq__44235__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44235__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__44235__$1);
var G__44272 = cljs.core.chunk_rest.call(null,seq__44235__$1);
var G__44273 = c__28978__auto__;
var G__44274 = cljs.core.count.call(null,c__28978__auto__);
var G__44275 = (0);
seq__44235 = G__44272;
chunk__44236 = G__44273;
count__44237 = G__44274;
i__44238 = G__44275;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44235__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44243_44276 = cljs.core.seq.call(null,requires);
var chunk__44244_44277 = null;
var count__44245_44278 = (0);
var i__44246_44279 = (0);
while(true){
if((i__44246_44279 < count__44245_44278)){
var req_44280 = cljs.core._nth.call(null,chunk__44244_44277,i__44246_44279);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44280,prov);

var G__44281 = seq__44243_44276;
var G__44282 = chunk__44244_44277;
var G__44283 = count__44245_44278;
var G__44284 = (i__44246_44279 + (1));
seq__44243_44276 = G__44281;
chunk__44244_44277 = G__44282;
count__44245_44278 = G__44283;
i__44246_44279 = G__44284;
continue;
} else {
var temp__4657__auto___44285__$1 = cljs.core.seq.call(null,seq__44243_44276);
if(temp__4657__auto___44285__$1){
var seq__44243_44286__$1 = temp__4657__auto___44285__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44243_44286__$1)){
var c__28978__auto___44287 = cljs.core.chunk_first.call(null,seq__44243_44286__$1);
var G__44288 = cljs.core.chunk_rest.call(null,seq__44243_44286__$1);
var G__44289 = c__28978__auto___44287;
var G__44290 = cljs.core.count.call(null,c__28978__auto___44287);
var G__44291 = (0);
seq__44243_44276 = G__44288;
chunk__44244_44277 = G__44289;
count__44245_44278 = G__44290;
i__44246_44279 = G__44291;
continue;
} else {
var req_44292 = cljs.core.first.call(null,seq__44243_44286__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44292,prov);

var G__44293 = cljs.core.next.call(null,seq__44243_44286__$1);
var G__44294 = null;
var G__44295 = (0);
var G__44296 = (0);
seq__44243_44276 = G__44293;
chunk__44244_44277 = G__44294;
count__44245_44278 = G__44295;
i__44246_44279 = G__44296;
continue;
}
} else {
}
}
break;
}

var G__44297 = cljs.core.next.call(null,seq__44235__$1);
var G__44298 = null;
var G__44299 = (0);
var G__44300 = (0);
seq__44235 = G__44297;
chunk__44236 = G__44298;
count__44237 = G__44299;
i__44238 = G__44300;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44301_44305 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44302_44306 = null;
var count__44303_44307 = (0);
var i__44304_44308 = (0);
while(true){
if((i__44304_44308 < count__44303_44307)){
var ns_44309 = cljs.core._nth.call(null,chunk__44302_44306,i__44304_44308);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44309);

var G__44310 = seq__44301_44305;
var G__44311 = chunk__44302_44306;
var G__44312 = count__44303_44307;
var G__44313 = (i__44304_44308 + (1));
seq__44301_44305 = G__44310;
chunk__44302_44306 = G__44311;
count__44303_44307 = G__44312;
i__44304_44308 = G__44313;
continue;
} else {
var temp__4657__auto___44314 = cljs.core.seq.call(null,seq__44301_44305);
if(temp__4657__auto___44314){
var seq__44301_44315__$1 = temp__4657__auto___44314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44301_44315__$1)){
var c__28978__auto___44316 = cljs.core.chunk_first.call(null,seq__44301_44315__$1);
var G__44317 = cljs.core.chunk_rest.call(null,seq__44301_44315__$1);
var G__44318 = c__28978__auto___44316;
var G__44319 = cljs.core.count.call(null,c__28978__auto___44316);
var G__44320 = (0);
seq__44301_44305 = G__44317;
chunk__44302_44306 = G__44318;
count__44303_44307 = G__44319;
i__44304_44308 = G__44320;
continue;
} else {
var ns_44321 = cljs.core.first.call(null,seq__44301_44315__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44321);

var G__44322 = cljs.core.next.call(null,seq__44301_44315__$1);
var G__44323 = null;
var G__44324 = (0);
var G__44325 = (0);
seq__44301_44305 = G__44322;
chunk__44302_44306 = G__44323;
count__44303_44307 = G__44324;
i__44304_44308 = G__44325;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28139__auto__ = goog.require__;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44326__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44327__i = 0, G__44327__a = new Array(arguments.length -  0);
while (G__44327__i < G__44327__a.length) {G__44327__a[G__44327__i] = arguments[G__44327__i + 0]; ++G__44327__i;}
  args = new cljs.core.IndexedSeq(G__44327__a,0,null);
} 
return G__44326__delegate.call(this,args);};
G__44326.cljs$lang$maxFixedArity = 0;
G__44326.cljs$lang$applyTo = (function (arglist__44328){
var args = cljs.core.seq(arglist__44328);
return G__44326__delegate(args);
});
G__44326.cljs$core$IFn$_invoke$arity$variadic = G__44326__delegate;
return G__44326;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44329_SHARP_,p2__44330_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44329_SHARP_)].join('')),p2__44330_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44331_SHARP_,p2__44332_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44331_SHARP_)].join(''),p2__44332_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44333 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44333.addCallback(((function (G__44333){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44333))
);

G__44333.addErrback(((function (G__44333){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44333))
);

return G__44333;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44334 = cljs.core._EQ_;
var expr__44335 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44334.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44335))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__44334,expr__44335){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__44334,expr__44335))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__44334,expr__44335){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44337){if((e44337 instanceof Error)){
var e = e44337;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44337;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__44334,expr__44335))
} else {
if(cljs.core.truth_(pred__44334.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44335))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44334.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__44335))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__44334.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44335))){
return ((function (pred__44334,expr__44335){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44338){if((e44338 instanceof Error)){
var e = e44338;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44338;

}
}})());
});
;})(pred__44334,expr__44335))
} else {
return ((function (pred__44334,expr__44335){
return (function (a__$1,b){
throw "Reload not defined for this platform";
});
;})(pred__44334,expr__44335))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44339,callback){
var map__44340 = p__44339;
var map__44340__$1 = ((((!((map__44340 == null)))?((((map__44340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44340):map__44340);
var file_msg = map__44340__$1;
var request_url = cljs.core.get.call(null,map__44340__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44340,map__44340__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44340,map__44340__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__){
return (function (state_44364){
var state_val_44365 = (state_44364[(1)]);
if((state_val_44365 === (7))){
var inst_44360 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
var statearr_44366_44383 = state_44364__$1;
(statearr_44366_44383[(2)] = inst_44360);

(statearr_44366_44383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (1))){
var state_44364__$1 = state_44364;
var statearr_44367_44384 = state_44364__$1;
(statearr_44367_44384[(2)] = null);

(statearr_44367_44384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (4))){
var inst_44344 = (state_44364[(7)]);
var inst_44344__$1 = (state_44364[(2)]);
var state_44364__$1 = (function (){var statearr_44368 = state_44364;
(statearr_44368[(7)] = inst_44344__$1);

return statearr_44368;
})();
if(cljs.core.truth_(inst_44344__$1)){
var statearr_44369_44385 = state_44364__$1;
(statearr_44369_44385[(1)] = (5));

} else {
var statearr_44370_44386 = state_44364__$1;
(statearr_44370_44386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (6))){
var state_44364__$1 = state_44364;
var statearr_44371_44387 = state_44364__$1;
(statearr_44371_44387[(2)] = null);

(statearr_44371_44387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (3))){
var inst_44362 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44364__$1,inst_44362);
} else {
if((state_val_44365 === (2))){
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44364__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44365 === (11))){
var inst_44356 = (state_44364[(2)]);
var state_44364__$1 = (function (){var statearr_44372 = state_44364;
(statearr_44372[(8)] = inst_44356);

return statearr_44372;
})();
var statearr_44373_44388 = state_44364__$1;
(statearr_44373_44388[(2)] = null);

(statearr_44373_44388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (9))){
var inst_44348 = (state_44364[(9)]);
var inst_44350 = (state_44364[(10)]);
var inst_44352 = inst_44350.call(null,inst_44348);
var state_44364__$1 = state_44364;
var statearr_44374_44389 = state_44364__$1;
(statearr_44374_44389[(2)] = inst_44352);

(statearr_44374_44389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (5))){
var inst_44344 = (state_44364[(7)]);
var inst_44346 = figwheel.client.file_reloading.blocking_load.call(null,inst_44344);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44364__$1,(8),inst_44346);
} else {
if((state_val_44365 === (10))){
var inst_44348 = (state_44364[(9)]);
var inst_44354 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44348);
var state_44364__$1 = state_44364;
var statearr_44375_44390 = state_44364__$1;
(statearr_44375_44390[(2)] = inst_44354);

(statearr_44375_44390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44365 === (8))){
var inst_44344 = (state_44364[(7)]);
var inst_44350 = (state_44364[(10)]);
var inst_44348 = (state_44364[(2)]);
var inst_44349 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44350__$1 = cljs.core.get.call(null,inst_44349,inst_44344);
var state_44364__$1 = (function (){var statearr_44376 = state_44364;
(statearr_44376[(9)] = inst_44348);

(statearr_44376[(10)] = inst_44350__$1);

return statearr_44376;
})();
if(cljs.core.truth_(inst_44350__$1)){
var statearr_44377_44391 = state_44364__$1;
(statearr_44377_44391[(1)] = (9));

} else {
var statearr_44378_44392 = state_44364__$1;
(statearr_44378_44392[(1)] = (10));

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
});})(c__42211__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42124__auto__ = null;
var figwheel$client$file_reloading$state_machine__42124__auto____0 = (function (){
var statearr_44379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44379[(0)] = figwheel$client$file_reloading$state_machine__42124__auto__);

(statearr_44379[(1)] = (1));

return statearr_44379;
});
var figwheel$client$file_reloading$state_machine__42124__auto____1 = (function (state_44364){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_44364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e44380){if((e44380 instanceof Object)){
var ex__42127__auto__ = e44380;
var statearr_44381_44393 = state_44364;
(statearr_44381_44393[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44394 = state_44364;
state_44364 = G__44394;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42124__auto__ = function(state_44364){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42124__auto____1.call(this,state_44364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42124__auto____0;
figwheel$client$file_reloading$state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42124__auto____1;
return figwheel$client$file_reloading$state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__))
})();
var state__42213__auto__ = (function (){var statearr_44382 = f__42212__auto__.call(null);
(statearr_44382[(6)] = c__42211__auto__);

return statearr_44382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__))
);

return c__42211__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44395,callback){
var map__44396 = p__44395;
var map__44396__$1 = ((((!((map__44396 == null)))?((((map__44396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44396):map__44396);
var file_msg = map__44396__$1;
var namespace = cljs.core.get.call(null,map__44396__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44396,map__44396__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44396,map__44396__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44398){
var map__44399 = p__44398;
var map__44399__$1 = ((((!((map__44399 == null)))?((((map__44399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44399):map__44399);
var file_msg = map__44399__$1;
var namespace = cljs.core.get.call(null,map__44399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44401){
var map__44402 = p__44401;
var map__44402__$1 = ((((!((map__44402 == null)))?((((map__44402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44402):map__44402);
var file_msg = map__44402__$1;
var namespace = cljs.core.get.call(null,map__44402__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28127__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28127__auto__){
var or__28139__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
var or__28139__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28139__auto____$1)){
return or__28139__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28127__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44404,callback){
var map__44405 = p__44404;
var map__44405__$1 = ((((!((map__44405 == null)))?((((map__44405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44405):map__44405);
var file_msg = map__44405__$1;
var request_url = cljs.core.get.call(null,map__44405__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__42211__auto___44455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___44455,out){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___44455,out){
return (function (state_44440){
var state_val_44441 = (state_44440[(1)]);
if((state_val_44441 === (1))){
var inst_44414 = cljs.core.seq.call(null,files);
var inst_44415 = cljs.core.first.call(null,inst_44414);
var inst_44416 = cljs.core.next.call(null,inst_44414);
var inst_44417 = files;
var state_44440__$1 = (function (){var statearr_44442 = state_44440;
(statearr_44442[(7)] = inst_44416);

(statearr_44442[(8)] = inst_44417);

(statearr_44442[(9)] = inst_44415);

return statearr_44442;
})();
var statearr_44443_44456 = state_44440__$1;
(statearr_44443_44456[(2)] = null);

(statearr_44443_44456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (2))){
var inst_44417 = (state_44440[(8)]);
var inst_44423 = (state_44440[(10)]);
var inst_44422 = cljs.core.seq.call(null,inst_44417);
var inst_44423__$1 = cljs.core.first.call(null,inst_44422);
var inst_44424 = cljs.core.next.call(null,inst_44422);
var inst_44425 = (inst_44423__$1 == null);
var inst_44426 = cljs.core.not.call(null,inst_44425);
var state_44440__$1 = (function (){var statearr_44444 = state_44440;
(statearr_44444[(10)] = inst_44423__$1);

(statearr_44444[(11)] = inst_44424);

return statearr_44444;
})();
if(inst_44426){
var statearr_44445_44457 = state_44440__$1;
(statearr_44445_44457[(1)] = (4));

} else {
var statearr_44446_44458 = state_44440__$1;
(statearr_44446_44458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (3))){
var inst_44438 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44440__$1,inst_44438);
} else {
if((state_val_44441 === (4))){
var inst_44423 = (state_44440[(10)]);
var inst_44428 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44423);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44440__$1,(7),inst_44428);
} else {
if((state_val_44441 === (5))){
var inst_44434 = cljs.core.async.close_BANG_.call(null,out);
var state_44440__$1 = state_44440;
var statearr_44447_44459 = state_44440__$1;
(statearr_44447_44459[(2)] = inst_44434);

(statearr_44447_44459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (6))){
var inst_44436 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44448_44460 = state_44440__$1;
(statearr_44448_44460[(2)] = inst_44436);

(statearr_44448_44460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (7))){
var inst_44424 = (state_44440[(11)]);
var inst_44430 = (state_44440[(2)]);
var inst_44431 = cljs.core.async.put_BANG_.call(null,out,inst_44430);
var inst_44417 = inst_44424;
var state_44440__$1 = (function (){var statearr_44449 = state_44440;
(statearr_44449[(8)] = inst_44417);

(statearr_44449[(12)] = inst_44431);

return statearr_44449;
})();
var statearr_44450_44461 = state_44440__$1;
(statearr_44450_44461[(2)] = null);

(statearr_44450_44461[(1)] = (2));


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
});})(c__42211__auto___44455,out))
;
return ((function (switch__42123__auto__,c__42211__auto___44455,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____0 = (function (){
var statearr_44451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44451[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__);

(statearr_44451[(1)] = (1));

return statearr_44451;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____1 = (function (state_44440){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_44440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e44452){if((e44452 instanceof Object)){
var ex__42127__auto__ = e44452;
var statearr_44453_44462 = state_44440;
(statearr_44453_44462[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44463 = state_44440;
state_44440 = G__44463;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__ = function(state_44440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____1.call(this,state_44440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___44455,out))
})();
var state__42213__auto__ = (function (){var statearr_44454 = f__42212__auto__.call(null);
(statearr_44454[(6)] = c__42211__auto___44455);

return statearr_44454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___44455,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44464,opts){
var map__44465 = p__44464;
var map__44465__$1 = ((((!((map__44465 == null)))?((((map__44465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44465):map__44465);
var eval_body = cljs.core.get.call(null,map__44465__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28127__auto__ = eval_body;
if(cljs.core.truth_(and__28127__auto__)){
return typeof eval_body === 'string';
} else {
return and__28127__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44467){var e = e44467;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44468_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44468_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44469){
var vec__44470 = p__44469;
var k = cljs.core.nth.call(null,vec__44470,(0),null);
var v = cljs.core.nth.call(null,vec__44470,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44473){
var vec__44474 = p__44473;
var k = cljs.core.nth.call(null,vec__44474,(0),null);
var v = cljs.core.nth.call(null,vec__44474,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44480,p__44481){
var map__44482 = p__44480;
var map__44482__$1 = ((((!((map__44482 == null)))?((((map__44482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44482):map__44482);
var opts = map__44482__$1;
var before_jsload = cljs.core.get.call(null,map__44482__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44482__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44482__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44483 = p__44481;
var map__44483__$1 = ((((!((map__44483 == null)))?((((map__44483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44483):map__44483);
var msg = map__44483__$1;
var files = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44637){
var state_val_44638 = (state_44637[(1)]);
if((state_val_44638 === (7))){
var inst_44500 = (state_44637[(7)]);
var inst_44498 = (state_44637[(8)]);
var inst_44499 = (state_44637[(9)]);
var inst_44497 = (state_44637[(10)]);
var inst_44505 = cljs.core._nth.call(null,inst_44498,inst_44500);
var inst_44506 = figwheel.client.file_reloading.eval_body.call(null,inst_44505,opts);
var inst_44507 = (inst_44500 + (1));
var tmp44639 = inst_44498;
var tmp44640 = inst_44499;
var tmp44641 = inst_44497;
var inst_44497__$1 = tmp44641;
var inst_44498__$1 = tmp44639;
var inst_44499__$1 = tmp44640;
var inst_44500__$1 = inst_44507;
var state_44637__$1 = (function (){var statearr_44642 = state_44637;
(statearr_44642[(7)] = inst_44500__$1);

(statearr_44642[(11)] = inst_44506);

(statearr_44642[(8)] = inst_44498__$1);

(statearr_44642[(9)] = inst_44499__$1);

(statearr_44642[(10)] = inst_44497__$1);

return statearr_44642;
})();
var statearr_44643_44726 = state_44637__$1;
(statearr_44643_44726[(2)] = null);

(statearr_44643_44726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (20))){
var inst_44540 = (state_44637[(12)]);
var inst_44548 = figwheel.client.file_reloading.sort_files.call(null,inst_44540);
var state_44637__$1 = state_44637;
var statearr_44644_44727 = state_44637__$1;
(statearr_44644_44727[(2)] = inst_44548);

(statearr_44644_44727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (27))){
var state_44637__$1 = state_44637;
var statearr_44645_44728 = state_44637__$1;
(statearr_44645_44728[(2)] = null);

(statearr_44645_44728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (1))){
var inst_44489 = (state_44637[(13)]);
var inst_44486 = before_jsload.call(null,files);
var inst_44487 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44488 = (function (){return ((function (inst_44489,inst_44486,inst_44487,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44477_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44477_SHARP_);
});
;})(inst_44489,inst_44486,inst_44487,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44489__$1 = cljs.core.filter.call(null,inst_44488,files);
var inst_44490 = cljs.core.not_empty.call(null,inst_44489__$1);
var state_44637__$1 = (function (){var statearr_44646 = state_44637;
(statearr_44646[(14)] = inst_44486);

(statearr_44646[(13)] = inst_44489__$1);

(statearr_44646[(15)] = inst_44487);

return statearr_44646;
})();
if(cljs.core.truth_(inst_44490)){
var statearr_44647_44729 = state_44637__$1;
(statearr_44647_44729[(1)] = (2));

} else {
var statearr_44648_44730 = state_44637__$1;
(statearr_44648_44730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (24))){
var state_44637__$1 = state_44637;
var statearr_44649_44731 = state_44637__$1;
(statearr_44649_44731[(2)] = null);

(statearr_44649_44731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (39))){
var inst_44590 = (state_44637[(16)]);
var state_44637__$1 = state_44637;
var statearr_44650_44732 = state_44637__$1;
(statearr_44650_44732[(2)] = inst_44590);

(statearr_44650_44732[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (46))){
var inst_44632 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44651_44733 = state_44637__$1;
(statearr_44651_44733[(2)] = inst_44632);

(statearr_44651_44733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (4))){
var inst_44534 = (state_44637[(2)]);
var inst_44535 = cljs.core.List.EMPTY;
var inst_44536 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44535);
var inst_44537 = (function (){return ((function (inst_44534,inst_44535,inst_44536,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44478_SHARP_){
var and__28127__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44478_SHARP_);
if(cljs.core.truth_(and__28127__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44478_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44478_SHARP_)));
} else {
return and__28127__auto__;
}
});
;})(inst_44534,inst_44535,inst_44536,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44538 = cljs.core.filter.call(null,inst_44537,files);
var inst_44539 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44540 = cljs.core.concat.call(null,inst_44538,inst_44539);
var state_44637__$1 = (function (){var statearr_44652 = state_44637;
(statearr_44652[(17)] = inst_44534);

(statearr_44652[(18)] = inst_44536);

(statearr_44652[(12)] = inst_44540);

return statearr_44652;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44653_44734 = state_44637__$1;
(statearr_44653_44734[(1)] = (16));

} else {
var statearr_44654_44735 = state_44637__$1;
(statearr_44654_44735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (15))){
var inst_44524 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44655_44736 = state_44637__$1;
(statearr_44655_44736[(2)] = inst_44524);

(statearr_44655_44736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (21))){
var inst_44550 = (state_44637[(19)]);
var inst_44550__$1 = (state_44637[(2)]);
var inst_44551 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44550__$1);
var state_44637__$1 = (function (){var statearr_44656 = state_44637;
(statearr_44656[(19)] = inst_44550__$1);

return statearr_44656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44637__$1,(22),inst_44551);
} else {
if((state_val_44638 === (31))){
var inst_44635 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44637__$1,inst_44635);
} else {
if((state_val_44638 === (32))){
var inst_44590 = (state_44637[(16)]);
var inst_44595 = inst_44590.cljs$lang$protocol_mask$partition0$;
var inst_44596 = (inst_44595 & (64));
var inst_44597 = inst_44590.cljs$core$ISeq$;
var inst_44598 = (cljs.core.PROTOCOL_SENTINEL === inst_44597);
var inst_44599 = (inst_44596) || (inst_44598);
var state_44637__$1 = state_44637;
if(cljs.core.truth_(inst_44599)){
var statearr_44657_44737 = state_44637__$1;
(statearr_44657_44737[(1)] = (35));

} else {
var statearr_44658_44738 = state_44637__$1;
(statearr_44658_44738[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (40))){
var inst_44612 = (state_44637[(20)]);
var inst_44611 = (state_44637[(2)]);
var inst_44612__$1 = cljs.core.get.call(null,inst_44611,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44613 = cljs.core.get.call(null,inst_44611,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44614 = cljs.core.not_empty.call(null,inst_44612__$1);
var state_44637__$1 = (function (){var statearr_44659 = state_44637;
(statearr_44659[(20)] = inst_44612__$1);

(statearr_44659[(21)] = inst_44613);

return statearr_44659;
})();
if(cljs.core.truth_(inst_44614)){
var statearr_44660_44739 = state_44637__$1;
(statearr_44660_44739[(1)] = (41));

} else {
var statearr_44661_44740 = state_44637__$1;
(statearr_44661_44740[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (33))){
var state_44637__$1 = state_44637;
var statearr_44662_44741 = state_44637__$1;
(statearr_44662_44741[(2)] = false);

(statearr_44662_44741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (13))){
var inst_44510 = (state_44637[(22)]);
var inst_44514 = cljs.core.chunk_first.call(null,inst_44510);
var inst_44515 = cljs.core.chunk_rest.call(null,inst_44510);
var inst_44516 = cljs.core.count.call(null,inst_44514);
var inst_44497 = inst_44515;
var inst_44498 = inst_44514;
var inst_44499 = inst_44516;
var inst_44500 = (0);
var state_44637__$1 = (function (){var statearr_44663 = state_44637;
(statearr_44663[(7)] = inst_44500);

(statearr_44663[(8)] = inst_44498);

(statearr_44663[(9)] = inst_44499);

(statearr_44663[(10)] = inst_44497);

return statearr_44663;
})();
var statearr_44664_44742 = state_44637__$1;
(statearr_44664_44742[(2)] = null);

(statearr_44664_44742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (22))){
var inst_44554 = (state_44637[(23)]);
var inst_44553 = (state_44637[(24)]);
var inst_44550 = (state_44637[(19)]);
var inst_44558 = (state_44637[(25)]);
var inst_44553__$1 = (state_44637[(2)]);
var inst_44554__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44553__$1);
var inst_44555 = (function (){var all_files = inst_44550;
var res_SINGLEQUOTE_ = inst_44553__$1;
var res = inst_44554__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44554,inst_44553,inst_44550,inst_44558,inst_44553__$1,inst_44554__$1,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44479_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44479_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44554,inst_44553,inst_44550,inst_44558,inst_44553__$1,inst_44554__$1,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44556 = cljs.core.filter.call(null,inst_44555,inst_44553__$1);
var inst_44557 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44558__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44557);
var inst_44559 = cljs.core.not_empty.call(null,inst_44558__$1);
var state_44637__$1 = (function (){var statearr_44665 = state_44637;
(statearr_44665[(23)] = inst_44554__$1);

(statearr_44665[(24)] = inst_44553__$1);

(statearr_44665[(25)] = inst_44558__$1);

(statearr_44665[(26)] = inst_44556);

return statearr_44665;
})();
if(cljs.core.truth_(inst_44559)){
var statearr_44666_44743 = state_44637__$1;
(statearr_44666_44743[(1)] = (23));

} else {
var statearr_44667_44744 = state_44637__$1;
(statearr_44667_44744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (36))){
var state_44637__$1 = state_44637;
var statearr_44668_44745 = state_44637__$1;
(statearr_44668_44745[(2)] = false);

(statearr_44668_44745[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (41))){
var inst_44612 = (state_44637[(20)]);
var inst_44616 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44617 = cljs.core.map.call(null,inst_44616,inst_44612);
var inst_44618 = cljs.core.pr_str.call(null,inst_44617);
var inst_44619 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44618)].join('');
var inst_44620 = figwheel.client.utils.log.call(null,inst_44619);
var state_44637__$1 = state_44637;
var statearr_44669_44746 = state_44637__$1;
(statearr_44669_44746[(2)] = inst_44620);

(statearr_44669_44746[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (43))){
var inst_44613 = (state_44637[(21)]);
var inst_44623 = (state_44637[(2)]);
var inst_44624 = cljs.core.not_empty.call(null,inst_44613);
var state_44637__$1 = (function (){var statearr_44670 = state_44637;
(statearr_44670[(27)] = inst_44623);

return statearr_44670;
})();
if(cljs.core.truth_(inst_44624)){
var statearr_44671_44747 = state_44637__$1;
(statearr_44671_44747[(1)] = (44));

} else {
var statearr_44672_44748 = state_44637__$1;
(statearr_44672_44748[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (29))){
var inst_44554 = (state_44637[(23)]);
var inst_44553 = (state_44637[(24)]);
var inst_44550 = (state_44637[(19)]);
var inst_44590 = (state_44637[(16)]);
var inst_44558 = (state_44637[(25)]);
var inst_44556 = (state_44637[(26)]);
var inst_44586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44589 = (function (){var all_files = inst_44550;
var res_SINGLEQUOTE_ = inst_44553;
var res = inst_44554;
var files_not_loaded = inst_44556;
var dependencies_that_loaded = inst_44558;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44590,inst_44558,inst_44556,inst_44586,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44588){
var map__44673 = p__44588;
var map__44673__$1 = ((((!((map__44673 == null)))?((((map__44673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44673):map__44673);
var namespace = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44590,inst_44558,inst_44556,inst_44586,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44590__$1 = cljs.core.group_by.call(null,inst_44589,inst_44556);
var inst_44592 = (inst_44590__$1 == null);
var inst_44593 = cljs.core.not.call(null,inst_44592);
var state_44637__$1 = (function (){var statearr_44675 = state_44637;
(statearr_44675[(28)] = inst_44586);

(statearr_44675[(16)] = inst_44590__$1);

return statearr_44675;
})();
if(inst_44593){
var statearr_44676_44749 = state_44637__$1;
(statearr_44676_44749[(1)] = (32));

} else {
var statearr_44677_44750 = state_44637__$1;
(statearr_44677_44750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (44))){
var inst_44613 = (state_44637[(21)]);
var inst_44626 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44613);
var inst_44627 = cljs.core.pr_str.call(null,inst_44626);
var inst_44628 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44627)].join('');
var inst_44629 = figwheel.client.utils.log.call(null,inst_44628);
var state_44637__$1 = state_44637;
var statearr_44678_44751 = state_44637__$1;
(statearr_44678_44751[(2)] = inst_44629);

(statearr_44678_44751[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (6))){
var inst_44531 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44679_44752 = state_44637__$1;
(statearr_44679_44752[(2)] = inst_44531);

(statearr_44679_44752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (28))){
var inst_44556 = (state_44637[(26)]);
var inst_44583 = (state_44637[(2)]);
var inst_44584 = cljs.core.not_empty.call(null,inst_44556);
var state_44637__$1 = (function (){var statearr_44680 = state_44637;
(statearr_44680[(29)] = inst_44583);

return statearr_44680;
})();
if(cljs.core.truth_(inst_44584)){
var statearr_44681_44753 = state_44637__$1;
(statearr_44681_44753[(1)] = (29));

} else {
var statearr_44682_44754 = state_44637__$1;
(statearr_44682_44754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (25))){
var inst_44554 = (state_44637[(23)]);
var inst_44570 = (state_44637[(2)]);
var inst_44571 = cljs.core.not_empty.call(null,inst_44554);
var state_44637__$1 = (function (){var statearr_44683 = state_44637;
(statearr_44683[(30)] = inst_44570);

return statearr_44683;
})();
if(cljs.core.truth_(inst_44571)){
var statearr_44684_44755 = state_44637__$1;
(statearr_44684_44755[(1)] = (26));

} else {
var statearr_44685_44756 = state_44637__$1;
(statearr_44685_44756[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (34))){
var inst_44606 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
if(cljs.core.truth_(inst_44606)){
var statearr_44686_44757 = state_44637__$1;
(statearr_44686_44757[(1)] = (38));

} else {
var statearr_44687_44758 = state_44637__$1;
(statearr_44687_44758[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (17))){
var state_44637__$1 = state_44637;
var statearr_44688_44759 = state_44637__$1;
(statearr_44688_44759[(2)] = recompile_dependents);

(statearr_44688_44759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (3))){
var state_44637__$1 = state_44637;
var statearr_44689_44760 = state_44637__$1;
(statearr_44689_44760[(2)] = null);

(statearr_44689_44760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (12))){
var inst_44527 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44690_44761 = state_44637__$1;
(statearr_44690_44761[(2)] = inst_44527);

(statearr_44690_44761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (2))){
var inst_44489 = (state_44637[(13)]);
var inst_44496 = cljs.core.seq.call(null,inst_44489);
var inst_44497 = inst_44496;
var inst_44498 = null;
var inst_44499 = (0);
var inst_44500 = (0);
var state_44637__$1 = (function (){var statearr_44691 = state_44637;
(statearr_44691[(7)] = inst_44500);

(statearr_44691[(8)] = inst_44498);

(statearr_44691[(9)] = inst_44499);

(statearr_44691[(10)] = inst_44497);

return statearr_44691;
})();
var statearr_44692_44762 = state_44637__$1;
(statearr_44692_44762[(2)] = null);

(statearr_44692_44762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (23))){
var inst_44554 = (state_44637[(23)]);
var inst_44553 = (state_44637[(24)]);
var inst_44550 = (state_44637[(19)]);
var inst_44558 = (state_44637[(25)]);
var inst_44556 = (state_44637[(26)]);
var inst_44561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44563 = (function (){var all_files = inst_44550;
var res_SINGLEQUOTE_ = inst_44553;
var res = inst_44554;
var files_not_loaded = inst_44556;
var dependencies_that_loaded = inst_44558;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44561,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44562){
var map__44693 = p__44562;
var map__44693__$1 = ((((!((map__44693 == null)))?((((map__44693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44693):map__44693);
var request_url = cljs.core.get.call(null,map__44693__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44561,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44564 = cljs.core.reverse.call(null,inst_44558);
var inst_44565 = cljs.core.map.call(null,inst_44563,inst_44564);
var inst_44566 = cljs.core.pr_str.call(null,inst_44565);
var inst_44567 = figwheel.client.utils.log.call(null,inst_44566);
var state_44637__$1 = (function (){var statearr_44695 = state_44637;
(statearr_44695[(31)] = inst_44561);

return statearr_44695;
})();
var statearr_44696_44763 = state_44637__$1;
(statearr_44696_44763[(2)] = inst_44567);

(statearr_44696_44763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (35))){
var state_44637__$1 = state_44637;
var statearr_44697_44764 = state_44637__$1;
(statearr_44697_44764[(2)] = true);

(statearr_44697_44764[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (19))){
var inst_44540 = (state_44637[(12)]);
var inst_44546 = figwheel.client.file_reloading.expand_files.call(null,inst_44540);
var state_44637__$1 = state_44637;
var statearr_44698_44765 = state_44637__$1;
(statearr_44698_44765[(2)] = inst_44546);

(statearr_44698_44765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (11))){
var state_44637__$1 = state_44637;
var statearr_44699_44766 = state_44637__$1;
(statearr_44699_44766[(2)] = null);

(statearr_44699_44766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (9))){
var inst_44529 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44700_44767 = state_44637__$1;
(statearr_44700_44767[(2)] = inst_44529);

(statearr_44700_44767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (5))){
var inst_44500 = (state_44637[(7)]);
var inst_44499 = (state_44637[(9)]);
var inst_44502 = (inst_44500 < inst_44499);
var inst_44503 = inst_44502;
var state_44637__$1 = state_44637;
if(cljs.core.truth_(inst_44503)){
var statearr_44701_44768 = state_44637__$1;
(statearr_44701_44768[(1)] = (7));

} else {
var statearr_44702_44769 = state_44637__$1;
(statearr_44702_44769[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (14))){
var inst_44510 = (state_44637[(22)]);
var inst_44519 = cljs.core.first.call(null,inst_44510);
var inst_44520 = figwheel.client.file_reloading.eval_body.call(null,inst_44519,opts);
var inst_44521 = cljs.core.next.call(null,inst_44510);
var inst_44497 = inst_44521;
var inst_44498 = null;
var inst_44499 = (0);
var inst_44500 = (0);
var state_44637__$1 = (function (){var statearr_44703 = state_44637;
(statearr_44703[(7)] = inst_44500);

(statearr_44703[(8)] = inst_44498);

(statearr_44703[(9)] = inst_44499);

(statearr_44703[(10)] = inst_44497);

(statearr_44703[(32)] = inst_44520);

return statearr_44703;
})();
var statearr_44704_44770 = state_44637__$1;
(statearr_44704_44770[(2)] = null);

(statearr_44704_44770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (45))){
var state_44637__$1 = state_44637;
var statearr_44705_44771 = state_44637__$1;
(statearr_44705_44771[(2)] = null);

(statearr_44705_44771[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (26))){
var inst_44554 = (state_44637[(23)]);
var inst_44553 = (state_44637[(24)]);
var inst_44550 = (state_44637[(19)]);
var inst_44558 = (state_44637[(25)]);
var inst_44556 = (state_44637[(26)]);
var inst_44573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44575 = (function (){var all_files = inst_44550;
var res_SINGLEQUOTE_ = inst_44553;
var res = inst_44554;
var files_not_loaded = inst_44556;
var dependencies_that_loaded = inst_44558;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44573,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44574){
var map__44706 = p__44574;
var map__44706__$1 = ((((!((map__44706 == null)))?((((map__44706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44706):map__44706);
var namespace = cljs.core.get.call(null,map__44706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44573,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44576 = cljs.core.map.call(null,inst_44575,inst_44554);
var inst_44577 = cljs.core.pr_str.call(null,inst_44576);
var inst_44578 = figwheel.client.utils.log.call(null,inst_44577);
var inst_44579 = (function (){var all_files = inst_44550;
var res_SINGLEQUOTE_ = inst_44553;
var res = inst_44554;
var files_not_loaded = inst_44556;
var dependencies_that_loaded = inst_44558;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44573,inst_44575,inst_44576,inst_44577,inst_44578,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44554,inst_44553,inst_44550,inst_44558,inst_44556,inst_44573,inst_44575,inst_44576,inst_44577,inst_44578,state_val_44638,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44580 = setTimeout(inst_44579,(10));
var state_44637__$1 = (function (){var statearr_44708 = state_44637;
(statearr_44708[(33)] = inst_44578);

(statearr_44708[(34)] = inst_44573);

return statearr_44708;
})();
var statearr_44709_44772 = state_44637__$1;
(statearr_44709_44772[(2)] = inst_44580);

(statearr_44709_44772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (16))){
var state_44637__$1 = state_44637;
var statearr_44710_44773 = state_44637__$1;
(statearr_44710_44773[(2)] = reload_dependents);

(statearr_44710_44773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (38))){
var inst_44590 = (state_44637[(16)]);
var inst_44608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44590);
var state_44637__$1 = state_44637;
var statearr_44711_44774 = state_44637__$1;
(statearr_44711_44774[(2)] = inst_44608);

(statearr_44711_44774[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (30))){
var state_44637__$1 = state_44637;
var statearr_44712_44775 = state_44637__$1;
(statearr_44712_44775[(2)] = null);

(statearr_44712_44775[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (10))){
var inst_44510 = (state_44637[(22)]);
var inst_44512 = cljs.core.chunked_seq_QMARK_.call(null,inst_44510);
var state_44637__$1 = state_44637;
if(inst_44512){
var statearr_44713_44776 = state_44637__$1;
(statearr_44713_44776[(1)] = (13));

} else {
var statearr_44714_44777 = state_44637__$1;
(statearr_44714_44777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (18))){
var inst_44544 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
if(cljs.core.truth_(inst_44544)){
var statearr_44715_44778 = state_44637__$1;
(statearr_44715_44778[(1)] = (19));

} else {
var statearr_44716_44779 = state_44637__$1;
(statearr_44716_44779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (42))){
var state_44637__$1 = state_44637;
var statearr_44717_44780 = state_44637__$1;
(statearr_44717_44780[(2)] = null);

(statearr_44717_44780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (37))){
var inst_44603 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44718_44781 = state_44637__$1;
(statearr_44718_44781[(2)] = inst_44603);

(statearr_44718_44781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (8))){
var inst_44497 = (state_44637[(10)]);
var inst_44510 = (state_44637[(22)]);
var inst_44510__$1 = cljs.core.seq.call(null,inst_44497);
var state_44637__$1 = (function (){var statearr_44719 = state_44637;
(statearr_44719[(22)] = inst_44510__$1);

return statearr_44719;
})();
if(inst_44510__$1){
var statearr_44720_44782 = state_44637__$1;
(statearr_44720_44782[(1)] = (10));

} else {
var statearr_44721_44783 = state_44637__$1;
(statearr_44721_44783[(1)] = (11));

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
}
});})(c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42123__auto__,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____0 = (function (){
var statearr_44722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44722[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__);

(statearr_44722[(1)] = (1));

return statearr_44722;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____1 = (function (state_44637){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_44637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e44723){if((e44723 instanceof Object)){
var ex__42127__auto__ = e44723;
var statearr_44724_44784 = state_44637;
(statearr_44724_44784[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44785 = state_44637;
state_44637 = G__44785;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__ = function(state_44637){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____1.call(this,state_44637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__42213__auto__ = (function (){var statearr_44725 = f__42212__auto__.call(null);
(statearr_44725[(6)] = c__42211__auto__);

return statearr_44725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__,map__44482,map__44482__$1,opts,before_jsload,on_jsload,reload_dependents,map__44483,map__44483__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__42211__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44788,link){
var map__44789 = p__44788;
var map__44789__$1 = ((((!((map__44789 == null)))?((((map__44789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44789):map__44789);
var file = cljs.core.get.call(null,map__44789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44789,map__44789__$1,file){
return (function (p1__44786_SHARP_,p2__44787_SHARP_){
if(cljs.core._EQ_.call(null,p1__44786_SHARP_,p2__44787_SHARP_)){
return p1__44786_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44789,map__44789__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44792){
var map__44793 = p__44792;
var map__44793__$1 = ((((!((map__44793 == null)))?((((map__44793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44793):map__44793);
var match_length = cljs.core.get.call(null,map__44793__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44793__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44791_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44791_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44795_SHARP_,p2__44796_SHARP_){
return cljs.core.assoc.call(null,p1__44795_SHARP_,cljs.core.get.call(null,p2__44796_SHARP_,key),p2__44796_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_44797 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44797);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44797);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44798,p__44799){
var map__44800 = p__44798;
var map__44800__$1 = ((((!((map__44800 == null)))?((((map__44800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44800):map__44800);
var on_cssload = cljs.core.get.call(null,map__44800__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44801 = p__44799;
var map__44801__$1 = ((((!((map__44801 == null)))?((((map__44801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44801):map__44801);
var files_msg = map__44801__$1;
var files = cljs.core.get.call(null,map__44801__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509738683628
